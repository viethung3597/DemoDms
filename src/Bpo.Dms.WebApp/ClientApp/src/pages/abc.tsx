import React, { useState, useRef, useEffect } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Typography, message, Button, Modal, Select, DatePicker } from 'antd';
// import { getProducts, postProducts, deleteProductsById, putProducts } from '@/services/dms/Products';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { ProductList, ProductModel, ProductsService } from '@/services';
import Column from 'antd/lib/table/Column';


const { Search } = Input
// import { Button, Form, message } from 'antd';

// for (let i = 0; i < 100; i++) {
//   originData.push({
//     key: i.toString(),
//     name: `Edrward ${i}`,
//     age: 32,
//     address: `London Park no. ${i}`,
//   });
// }

// ProductsApi.getApiProducts();
// const responseData = await ProductsApi.getApiProducts().execute();
// ProductsApi.apiProductsSearchGet("adasd");

ProductsService.getApiProductsAction("qeqw", 1, 1).then(data => console.log(data));

const productType = [
  { value: 0, name: "Không xác định" },
  { value: 1, name: "Đồ ăn" },
  { value: 2, name: "Đồ uống" }
]

function EditableCell({
  editing, dataIndex, title, inputType, record, index, children, ...restProps
}) {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
}

var dataSource: ProductModel[] = [];


const EditableTable = () => {

  const [form] = Form.useForm();
  const [data, setData] = useState(dataSource);
  const [editingKey, setEditingKey] = useState('');
  const [loading, setLoading] = useState(false);
  const [totalItem, setTotalItem] = useState(100);
  // const actionRef = useRef<ActionType>();

  useEffect(async () => {
    const data = await ProductsService.getApiProducts();
    setData(data);
  }, [])

  const isEditing = (record: any) => record.id === editingKey;

  const edit = (record: any) => {
    console.log(record.id);
    form.setFieldsValue({
      id: '',
      code: '',
      name: '',
      productType: '',
      description: '',
      product: '',
      date: '',
      ...record,
    });
    setEditingKey(record.id);
  };

  const deleteProduct = async (record: any) => {
    // console.log(record);
    console.log(record.id);
    var result = confirm(`Bạn có muốn xóa ${record.name} không?`)
    if (result) {
      try {

        await ProductsService.deleteApiProducts(record.id);
        dataSource = [];
        ProductsService.getApiProducts().then((data: any) => {
          data.forEach((x: any) => dataSource.push(x));
          setData(dataSource);
        });
        message.success(`Xóa sản phẩm ${record.name} thành công`);
        // action?.reload()
        return true;
      } catch (e: any) {
        message.error('Lỗi');
        return false;
      }
    }
  }

  const handleTableChange = async (record: any) => {
    // const data = await ProductsService.getApiProductsAction();
    // setData(data);
  }

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (id: number) => {
    try {
      const row = await form.validateFields() as ProductModel;
      console.log(row);
      console.log(id)
;
      const newData = row;
      console.log(newData);

      await ProductsService.patchApiProducts(newData)
      message.success('Cập nhật sản phẩm thành công');
      dataSource = [];
      ProductsService.getApiProducts().then((data: any) => {
        data.forEach((x: any) => dataSource.push(x));
        setData(dataSource);
      });
      setEditingKey('');
      return true;
      // const newData = [...data];
      // const index = newData.findIndex((item) => id === item.id);



      // if (index > -1) {
      //   const item = newData[index];
      //   newData.splice(index, 1, { ...item, ...row });
      //   await putProducts(newData);
      //   setEditingKey('');
      // } else {
      //   newData.push(row);
      //   await putProducts(newData);
      //   setEditingKey('');
      // }
    } catch (errInfo) {
      console.log('Lỗi: ', errInfo);
    }
  };

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      editable: true,
      // search: {
      //   onSearch: (value: string) => {
      //     console.log(dataSource); 
      //   },
      // },
    },
    {
      title: 'Mã sản phẩm',
      dataIndex: 'code',
      editable: true,
    },
    {
      title: 'Tên sản phẩm',
      dataIndex: 'name',
      // filters: [],
      // filterMode: 'tree',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => {
        return <Input
          autoFocus
          placeholder='Nhập tên sản phẩm'
          value={selectedKeys[0]}
          onChange={(e) => {
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }}
          onPressEnter={() => {
            confirm();
          }}
          onBlur={() => {
            confirm();
          }}
        >

        </Input>
      },
      filterIcon: () => {
        return <SearchOutlined />
      },
      editable: true,
    },
    {
      title: 'Loại sản phẩm',
      dataIndex: 'productType',
      // valueType: 'select',
      // valueEnum: {
      //   0: { text: 'Không xác định' },
      //   1: { text: 'Đồ ăn' },
      //   2: { text: 'Đồ uống' },
      // },
      // render: (value:any  ) => 
      // <Select>
      //   <Select.Option value={0}>Không xác định</Select.Option>
      //   <Select.Option value={1}>Đồ ăn</Select.Option>
      //   <Select.Option value={2}>Đồ uống</Select.Option>
      // </Select>,
      editable: true,
    },
    {
      title: 'Mô tả sản phẩm',
      dataIndex: 'description',
      editable: true,
    },
    {
      title: 'Giá sản phẩm',
      dataIndex: 'price',
      // defaultSortOrder: 'descend',
      sorter: (a: any, b: any) => a.price - b.price,
      editable: true,
    },
    {
      title: 'Ngày nhập sản phẩm',
      dataIndex: 'importDate',
      // type: 'date',
      editable: true,
    },
    {
      title: 'Tùy chọn',
      dataIndex: 'operation',
      render: (_: any, record: any) => {

        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.id)}
              style={{
                marginRight: 8,
              }}
            >
              <Button>Save</Button>
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <Button>Cancel</Button>
            </Popconfirm>
          </span>
        ) : (
          <>
            <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
              <Button>Edit</Button>
            </Typography.Link>
            <Button style={{ marginLeft: "10px" }} onClick={() => deleteProduct(record)}>Delete</Button>
          </>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    // console.log(col);
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record: any) => ({
        record,
        // inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  const onSearch = async (value: string) => {
    console.log(value);
    const dataSearch = await ProductsService.getApiProducts1(value);
    setData(dataSearch)
  };
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChange = async (pagination: any, filters: any, sorter: any, extra: any) => {
    // console.log('params', pagination, filters, sorter, extra);
    // console.log(sorter.order);
    // console.log(pagination.current);
    console.log(filters.name);

    // var dataA: ProductList[] = []
    const dataA = await ProductsService.getApiProductsAction(filters.name, pagination.current, pagination.size);
    console.log(dataA.content.result);
    setTotalItem(dataA.totalItem);
    setData(dataA.content.result);
    console.log(pagination.size);

  }

  return (
    <Form form={form} component={false}>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: "20px 40px" }}>
        <Search placeholder="Nhập tên sản phẩm..." onSearch={onSearch} style={{ width: 200 }} />
        <Button type="primary" onClick={showModal}><PlusOutlined /> Add</Button>
        <Modal
          title="Thêm sản phẩm mới"
          visible={isModalVisible}
          onOk={async () => {
            form
              // try {
              .validateFields()
              .then(async values => {
                setLoading(true)
                if (values) {
                  await ProductsService.postApiProducts(values);
                  dataSource = [];
                  const data = await ProductsService.getApiProducts()
                  setData(data);
                  message.success('Tạo sản phẩm mới thành công');
                  setIsModalVisible(false);
                  form.resetFields();
                  setLoading(false);
                  console.log(dataSource);

                }
              })
              // } catch (e) {
              // }
              .catch(info => {
                message.error('Lỗi');
              });
          }}
          onCancel={handleCancel}
        >
          <Form
            form={form}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            layout="horizontal"
          // initialValues={}
          // onValuesChange={onFormLayoutChange}
          // size={componentSize as SizeType}
          >
            <Form.Item label="Mã sản phẩm" name="code" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Tên sản phẩm" name="name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Loại sản phẩm" name="productType" rules={[{ required: true }]}>
              <Select>
                <Select.Option value={0}>All</Select.Option>
                <Select.Option value={1}>Loại 1</Select.Option>
                <Select.Option value={2}>Loại 2</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Mô tả" name="description" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Giá" name="price" rules={[{ required: true }]}>
              <InputNumber />
            </Form.Item>
            <Form.Item label="Ngày nhập sản phẩm" name="importDate" rules={[{ required: true }]}>
              <DatePicker />
            </Form.Item>
          </Form>
        </Modal>
      </div>
      <Table
        loading={loading}
        rowKey="id"
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={
          { defaultCurrent: 1, total: totalItem, pageSize: 5 }
        }
        onChange={onChange}
      />
    </Form>
  );
};

export default React.memo(EditableTable)
