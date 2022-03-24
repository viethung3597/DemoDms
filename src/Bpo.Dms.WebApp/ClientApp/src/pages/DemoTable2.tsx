import React, { useState, useRef, useEffect } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Typography, message, Button, Modal, Select, DatePicker, Pagination } from 'antd';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { ProductsService } from '@/services';

const EditableCell = ({
  editing, dataIndex, title, inputType, record, index, children, ...restProps
}) => {
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
};

const EditableTable = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [editingKey, setEditingKey] = useState('');
  const [loading, setLoading] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [totalItem, setTotalItem] = useState(0);

  useEffect(async () => {
    const data = await ProductsService.getApiProducts()

    setData(data);
  }, [])

  const isEditing = (record: any) => record.id === editingKey;

  const edit = (record: any) => {

    form.setFieldsValue({
      // id: '', code: '', name: '', productType: '', description: ["0", "1", "2"], product: '', date: '',
      ...record,
    });
    setEditingKey(record.id);
  };

  const deleteProduct = async (record: any) => {
    var result = confirm(`Bạn có muốn xóa ${record.name} không?`)
    if (result) {
      try {
        await ProductsService.deleteApiProducts(record.id);
        message.success(`Xóa sản phẩm ${record.name} thành công`);
      } catch (e: any) {
        message.error('Lỗi');
      } finally {
        var dataProduct: API.Product[] = [];
        await ProductsService.getApiProducts().then((data: any) => data.forEach((product: any) => dataProduct.push(product)))
        setData(dataProduct);
      }
    }
  }

  const cancel = () => {
    setEditingKey('');
  };
  const saveProduct = async (id: number) => {
    console.log({ id });

    try {
      const row = await form.validateFields();
      row.productType = row.productType * 1
      let rowNew = { id, ...row }
      await ProductsService.patchApiProducts(rowNew)
      message.success('Cập nhật sản phẩm thành công');
      setEditingKey('');
      return true
    } catch (errInfo) {
      console.log('Lỗi: ', errInfo);
    } finally {
      var dataProduct: API.Product[] = [];
      await ProductsService.getApiProducts().then((data: any) => data.forEach((product: any) => dataProduct.push(product)))
      setData(dataProduct);
    }
  };

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      editable: false,
    },
    {
      title: 'Mã sản phẩm',
      dataIndex: 'code',
      editable: true,
      sorter: true,
    },
    {
      title: 'Tên sản phẩm',
      dataIndex: 'name',
      editable: true,
      sorter: true,
      // sorter: (a, b) => a.name.length - b.name.length,
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
    },
    {
      title: 'Loại sản phẩm',
      dataIndex: 'productType',
      editable: true,
      render: (text, row, index) => {
        if (text == 0) {
          return <span>Tất cả</span>
        }
        if (text == 1) {
          return <span>Loại 1</span>
        }
        if (text == 2) {
          return <span>Loại 2</span>
        }
      },
      // filters: [
      //   {
      //     text: 'Tất cả',
      //     value: 0,
      //   },
      //   {
      //     text: 'Loại 1',
      //     value: 1,
      //   },
      //   {
      //     text: 'Loại 2',
      //     value: 2,
      //   },
      // ],
      // onFilter: (value, record) => record.productType === value,
    },
    {
      title: 'Mô tả sản phẩm',
      dataIndex: 'description',
      editable: true,
      sorter: true,
    },
    {
      title: 'Giá sản phẩm',
      dataIndex: 'price',
      editable: true,
      sorter: true,
    },
    {
      title: 'Ngày nhập sản phẩm',
      dataIndex: 'importDate',
      valueType: 'date',
      editable: true,
      sorter: true,
      render: (text) => {
        return text.slice(0, 10)
      }
    },
    {
      title: 'Tùy chọn',
      dataIndex: 'operation',
      render: (_: any, record: any) => {

        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              style={{
                marginRight: 8,
              }}
            >
              <Button onClick={() => saveProduct(record.id)}>Save</Button>
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <Button>Cancel</Button>
            </Popconfirm>
          </span>
        ) : (
          <>
            <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
              {/* onClick={() => edit(record)} */}
              <Button>Edit</Button>
            </Typography.Link>
            <Button style={{ marginLeft: "10px" }} onClick={() => deleteProduct(record)}>Delete</Button>
          </>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record: any) => ({
        record,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  // const onSearch = async (value:string) => {
  //   try {
  //       const data = await ProductsService.getApiProducts1(value)
  //       setData(data)
  //     // }
  //   } catch (err) {
  //     console.log('Lỗi: ', err);
  //   }
  // }

  const showModal = () => {
    setIsModalVisible(true);
  };


  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChange = async (pagination: any, filters: any, sorter: any, extra: any) => {
    var sort = "";
    if (sorter.order == undefined) {
      sorter.order = "";
    }
    sort = sorter.field + sorter.order;

    // var dataA: ProductList[] = []
    const dataA = await ProductsService.getApiProductsAction(filters.name, sort, pagination.current, pagination.pageSize);
    setTotalItem(dataA.totalItem);
    setData(dataA.content.result);

  }

  return (
    <Form form={form} component={false}>
      <div style={{ float: "right", padding: "20px 40px" }}>
        {/* <Search placeholder="Nhập tên sản phẩm..." onSearch={onSearch} style={{ width: 200 }} /> */}
        <Button type="primary" onClick={showModal}><PlusOutlined /> Add</Button>
        <Modal
          title="Thêm sản phẩm mới"
          visible={isModalVisible}
          onOk={async () => {
            form
              .validateFields()
              .then(async (values) => {
                console.log(values);

                if (values) {
                  await ProductsService.postApiProducts(values);
                  message.success('Tạo sản phẩm mới thành công');
                  setIsModalVisible(false);
                  form.resetFields();
                  let dataProduct: API.Product[] = [];
                  await ProductsService.getApiProducts().then((data: any) => data.forEach((product: any) => dataProduct.push(product)))
                  setData(dataProduct);
                }
              })
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
      <Table<API.Product>
        loading={loading}
        rowKey="id"
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        bordered={true}
        pagination={
          {
            defaultCurrent: 1,
            total: totalItem,
            defaultPageSize: 5,
            showLessItems: true,
            showSizeChanger: true,
            pageSizeOptions: [5, 10, 20, 30, 40, 50],
          }
        }
        onChange={onChange}
      />
    </Form>
  );
};

export default React.memo(EditableTable)