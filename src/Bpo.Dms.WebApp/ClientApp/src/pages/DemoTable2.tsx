import React, { useState, useRef, useEffect } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Typography, message, Button, Modal, Select, DatePicker } from 'antd';
import { getProducts, postProducts, deleteProductsById, putProducts } from '@/services/dms/Products';
import { PlusOutlined } from '@ant-design/icons';

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

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
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
var dataSource: API.Product[] = [];
getProducts().then((data:any) => data.forEach((product:any) => dataSource.push(product)));

const EditableTable = () => {

  const [form] = Form.useForm();
  const [data, setData] = useState(dataSource);
  const [editingKey, setEditingKey] = useState('');
  const [loading, setLoading] = useState(false)
  // const actionRef = useRef<ActionType>();

  // useEffect(() => {

  // }, [dataSource])

  const isEditing = (record:any) => record.id === editingKey;

  const edit = (record:any) => {
    console.log(record.id);
    
    form.setFieldsValue({
      // id: '',
      // code: '',
      // name: '',
      // productType: '',
      // description: '',
      // product: '',
      // date: '',
      ...record,
    });
    setEditingKey(record.id);
  };

  const deleteProduct = async (record:any) => {
    // console.log(record);
    console.log(record.id);
    var result = confirm(`Bạn có muốn xóa ${record.name} không?`)
    if (result) {
      try {
        
        await deleteProductsById({
          params: {id:1}
        });
        getProducts().then((data:any) => {
          data.forEach((x:any) => dataSource.push(x))
        })
        message.success(`Xóa sản phẩm ${record.name} thành công`);
        // action?.reload()
        return true;
      } catch (e: any) {
        message.error('Lỗi');
        return false;
      }
    }
  }

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (id:number) => {
    try {
      const row = await form.validateFields();
      console.log(row);
      console.log(id);
      
      
      await putProducts(row)
      message.success('Cập nhật sản phẩm thành công');

      return true
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
      editable: false,
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
      editable: true,
    },
    {
      title: 'Loại sản phẩm',
      dataIndex: 'productType',
      // filters: true,
      // onFilter: true,
      valueEnum: {
        0: { text: 'All' },
        1: { text: 'Unresolved'},
        2: { text: 'Resolved'},
      },
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
      render: (_:any, record:any) => {
        
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
            <Button style={{marginLeft: "10px"}} onClick={() => deleteProduct(record)}>Delete</Button>
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
      onCell: (record:any) => ({
        record,
        // inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  const onSearch = (value:any) => console.log(value);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  // const handleOk = async (values) => {
  //   setIsModalVisible(false);
  //   // onOk={async (values) => {
  //     console.log(values);
      

  //     // dataSource=[]
  //     // try {
  //     //   await postProducts(values);
  //     //   getProducts().then(data => {
  //     //     data.forEach(x => dataSource.push(x))
  //     //   })
  //     //   message.success('Tạo sản phẩm mới thành công');
  //     //   form.resetFields();
  //     //   // props.onFinish();
  //     //   return true;
  //     // } catch (e: any) {
  //     //   message.error('Lỗi');
  //     // return false;
  //     // }
  //   // }}
  // };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Form form={form} component={false}>
      <div style={{display: 'flex', justifyContent: 'space-between', padding: "20px 40px"}}>
        <Search placeholder="Nhập tên sản phẩm..." onSearch={onSearch} style={{ width: 200 }} />
        <Button type="primary" onClick={showModal}><PlusOutlined/> Add</Button>
        <Modal 
          title="Thêm sản phẩm mới" 
          visible={isModalVisible} 
          onOk={ async () => {
            form
            // try {
              .validateFields()
              .then(values => {
                setLoading(true)
                console.log(values);
                
                if (values) {
                  postProducts(values);
                
                  // getProducts().then(data => {
                  //   data.forEach(x => dataSource.push(x))
                  // })
                  message.success('Tạo sản phẩm mới thành công');
                  setIsModalVisible(false);
                  form.resetFields();
                  setLoading(false);
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
              <DatePicker  />
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
        dataSource={dataSource}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};

export default React.memo(EditableTable)












// import React, { useState } from 'react';
// // import { Table, Tag, Space } from 'antd';
// import { getProducts, postProducts, deleteProductsById, putProducts } from '@/services/dms/Products';
// import { Table, Input, InputNumber, Popconfirm, Form, Typography } from 'antd';

// // const { Column, ColumnGroup } = Table;

// var dataSource: API.Product[] = [];
// getProducts().then(data => data.forEach(product => dataSource.push(product)));

// // const dataSource = [
// //   {
// //     key: '1',
// //     name: 'Mike',
// //     age: 32,
// //     address: '10 Downing Street',
// //   },
// //   {
// //     key: '2',
// //     name: 'John',
// //     age: 42,
// //     address: '10 Downing Street',
// //   },
// // ];

// const columns = [
//   {
//     title: 'Id',
//     dataIndex: 'id',
//     editable: false,
//     // search: {
//     //   onSearch: (value: string) => {
//     //     console.log(dataSource); 
//     //   },
//     // },
//   },
//   {
//     title: 'Mã sản phẩm',
//     dataIndex: 'code',
//   },
//   {
//     title: 'Tên sản phẩm',
//     dataIndex: 'name',
//   },
//   {
//     title: 'Loại sản phẩm',
//     dataIndex: 'productType',
//     // filters: true,
//     // onFilter: true,
//     valueEnum: {
//       0: { text: 'All' },
//       1: { text: 'Unresolved'},
//       2: { text: 'Resolved'},
//     },
//   },
//   {
//     title: 'Mô tả sản phẩm',
//     dataIndex: 'description',
//   },
//   {
//     title: 'Giá sản phẩm',
//     dataIndex: 'price',
//   },
//   {
//     title: 'Ngày nhập sản phẩm',
//     dataIndex: 'importDate',
//     valueType: 'date',
//   },
//   {
//     title: 'Tùy chọn',
//     valueType: 'option',
//     render: (_: any, record: Item) => {
//       const editable = isEditing(record);
//       return editable ? (
//         <span>
//           <Typography.Link onClick={() => save(record.key)} style={{ marginRight: 8 }}>
//             Save
//           </Typography.Link>
//           <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
//             <a>Cancel</a>
//           </Popconfirm>
//         </span>
//       ) : (
//         <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
//           Edit
//         </Typography.Link>
//       );
//     },
//     // render: (text, record, _, action) => [
//     //   <a
//     //     key="editable"
//     //     onClick={ () => {
//     //       action?.startEditable?.(record.id);
//     //     }}
//     //   >
//     //     Sửa
//     //   </a>,
//     //   <a
//     //     key="delete"
//     //     onClick={ async () => {
//     //       var result = confirm("Bạn có muốn xóa không?")
          
//     //       if (result) {
//     //         try {
//     //           let id = record.id;
//     //           // dataSource=[]
//     //           await deleteProductsById(id);
//     //           getProducts().then(data => {
//     //             data.forEach(x => dataSource.push(x))
//     //           })
//     //           message.success(`Xóa sản phẩm ${record.name} thành công`);
//     //           action?.reload()
//     //           return true;
//     //         } catch (e: any) {
//     //           message.error('Lỗi');
//     //           return false;
//     //         }
//     //       }
//     //     }}
//     //   >
//     //     Xóa
//     //   </a>,
//     // ],
//   },
// ];

// export default () => {
//   const [data, setData] = useState(dataSource)
//     return (
//         <Table dataSource={data} columns={columns}>
//             {/* <ColumnGroup title="Name">
//                 <Column title="First Name" dataIndex="firstName" key="firstName" />
//                 <Column title="Last Name" dataIndex="lastName" key="lastName" />
//             </ColumnGroup> */}
//             {/* <Column title="Id" dataIndex="id" key="id" />
//             <Column title="Code" dataIndex="code" key="code" />
//             <Column title="Name" dataIndex="name" key="name" />
//             <Column
//                 title="Tags"
//                 dataIndex="tags"
//                 key="tags"
//                 render={tags => (
//                 <>
//                     {tags.map((tag:any) => (
//                     <Tag color="blue" key={tag}>
//                         {tag}
//                     </Tag>
//                     ))}
//                 </>
//                 )}
//             />
//             <Column
//                 title="Action"
//                 key="action"
//                 render={(text, record : any) => (
//                 <Space size="middle">
//                     <a>Invite {record.lastName}</a>
//                     <a>Delete</a>
//                 </Space>
//                 )}
//             /> */}
//         </Table>
//     );
// };