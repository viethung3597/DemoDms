import { useRef, useState, useEffect } from 'react';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { ModalForm, ProFormText, ProFormDigit, ProFormDatePicker, ProFormSelect, LightFilter } from '@ant-design/pro-form';
import { getProducts, postProducts, deleteProductsById, putProducts, getProductsSearchBySearch } from '@/services/dms/Products';
import { PlusOutlined, SettingOutlined, FullscreenOutlined } from '@ant-design/icons';
import { Button, Form, message } from 'antd';

// async function requestProduct(params: any, sorter: any, filter: any) {
//   console.log(params, sorter, filter);
//   return await getProducts();
// }

var dataSource: API.Product[] = [];
getProducts().then(data => data.forEach(product => dataSource.push(product)));

const columns: ProColumns[] = [
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
  },
  {
    title: 'Tên sản phẩm',
    dataIndex: 'name',
  },
  {
    title: 'Loại sản phẩm',
    dataIndex: 'productType',
    filters: true,
    onFilter: true,
    valueEnum: {
      0: { text: 'All' },
      1: { text: 'Unresolved'},
      2: { text: 'Resolved'},
    },
  },
  {
    title: 'Mô tả sản phẩm',
    dataIndex: 'description',
  },
  {
    title: 'Giá sản phẩm',
    dataIndex: 'price',
  },
  {
    title: 'Ngày nhập sản phẩm',
    dataIndex: 'importDate',
    valueType: 'date',
  },
  {
    title: 'Tùy chọn',
    valueType: 'option',
    render: (text, record, _, action) => [
      <a
        key="editable"
        onClick={ () => {
          action?.startEditable?.(record.id);
        }}
      >
        Sửa
      </a>,
      <a
        key="delete"
        onClick={ async () => {
          var result = confirm("Bạn có muốn xóa không?")
          
          if (result) {
            try {
              let id = record.id;
              // dataSource=[]
              await deleteProductsById(id);
              getProducts().then(data => {
                data.forEach(x => dataSource.push(x))
              })
              message.success(`Xóa sản phẩm ${record.name} thành công`);
              action?.reload()
              return true;
            } catch (e: any) {
              message.error('Lỗi');
              return false;
            }
          }
        }}
      >
        Xóa
      </a>,
    ],
  },
];

interface ProductCreateFormProps {
  onFinish: () => void | Promise<void>;
}

const ProductCreateForm: React.FC<ProductCreateFormProps> = (props) => {
  const [form] = Form.useForm()

  return (
    <ModalForm<API.ProductModel>
      title="Tạo mới sản phẩm"
      width={600}
      form={form}
      trigger={
        <Button type="primary">
          <PlusOutlined />
          Add
        </Button>
      }
      autoFocusFirstInput
      onFinish={async (values) => {
        
        // dataSource=[]
        console.log(values);
        
        try {
          await postProducts(values);
          getProducts().then(data => {
            data.forEach(x => dataSource.push(x))
          })
          message.success('Tạo sản phẩm mới thành công');
          form.resetFields();
          props.onFinish();
          return true;
        } catch (e: any) {
          message.error('Lỗi');
        return false;
        }
      }}
    >
      <ProFormText name="code" label="Mã sản phẩm" rules={[{ required: true }]} />
      <ProFormText name="name" label="Tên sản phẩm" rules={[{ required: true }]} />
      <ProFormSelect
        name="productType"
        label="Loại sản phẩm"
        request={async () => [
          { label: 'All', value: 0 },
          { label: 'Unresolved', value: 1 },
          { label: 'Resolved', value: 2 }
        ]}
        placeholder="Please select a country"
        rules={[{ required: true, message: 'Please select your country!' }]}
      />  
      <ProFormText name="description" label="Mô tả" rules={[{ required: true }]} />
      <ProFormDigit name="price" label="Giá" rules={[{ required: true }]} />
      <ProFormDatePicker name="importDate" label="Ngày nhập sản phẩm" />
    </ModalForm>
  )
}

const TableComponents: React.FC<ProductCreateFormProps> = (props) => {
  const actionRef = useRef<ActionType>();
  // var dataSource = [];
  // console.log(keyword);
  
  // getProducts().then(data => data.forEach(product => dataSource.push(product)));
  // if (keyword) {
  //   dataSource = []
  //   getProductsSearchBySearch(keyword).then(data => dataSource.push(...data))
  //   console.log(dataSource);
    
  // }
  const [dataProduct, setDataProduct] = useState(dataSource)
  console.log(dataProduct);

  // useEffect(() => {
  //   console.log(dataProduct);
    
  // }, [dataProduct])
  
  
  return (
    <ProTable<API.Product>
      columns={columns}
      actionRef={actionRef}
      request={(params, sorter, filter) => {
        if(params.keyword) {
          dataSource = []
          getProductsSearchBySearch(params.keyword).then(data => dataSource.push(...data))
          setDataProduct(dataSource)
        }
        return Promise.resolve({
          data: dataSource,
          success: true,
        });
      }}
      search={false}
      pagination={{
        pageSize: 5,
      }}
      columnsState={{
        persistenceKey: 'pro-table-singe-demos',
        persistenceType: 'localStorage',
      }}
      rowKey="id"
      toolBarRender={() => {
        return [
          <ProductCreateForm
            key="add"
            onFinish={() => {
              actionRef.current?.reload();
            }}
          />,
        ];
        
      }}
      // search={false}
      options={{search: true}}
      editable={{
        onSave: async (key: any, row: any, originRow: any, newLine?: any) => {
          row.productType = row.productType * 1
          try {
            await putProducts(row);
            message.success('Cập nhật sản phẩm thành công');
            actionRef.current?.cancelEditable(row.index);
            return true;
          } catch (e: any) {
            message.error('Lỗi cập nhật sản phẩm');
            return false;
          }
        },
        onCancel: async ( key: any, row: any, originRow: any, newLine?: any ) => {
          try {
            await putProducts(originRow);
            actionRef.current?.cancelEditable(originRow.index);
            return true;
          } catch (e: any) {
            return false;
          }
        },
        actionRender: (row, config, defaultDom) => {
          return [defaultDom.save,  defaultDom.cancel];
        },
      }}
    />
  );
};

export default TableComponents