import { useRef } from 'react';
import { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { deleteProductsById, getProducts, getProductsBySearch, postProducts, putProducts } from '@/services/dms/Products';
import { ModalForm, ProFormDatePicker, ProFormSelect, ProFormText } from '@ant-design/pro-form';
import { Button, Form, message, Modal } from 'antd';
import { ExclamationCircleOutlined, PlusOutlined } from '@ant-design/icons';

var dataSource: API.Product[] = []

// async function requestData(params: any, sorter: any, filter: any) {
//     console.log(params, sorter, filter);
//     return await getProducts();
//   }

const columns: ProColumns[] = [
  {
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: 'Id',
    dataIndex: 'id',
    editable: false,
    key: 'id',
  },
  {
    title: 'Mã sản phẩm',
    dataIndex: 'code',
    key: 'code',
  },
  {
    title: 'Tên sản phẩm',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Loại sản phẩm',
    dataIndex: 'productType',
    valueType: 'select',
    valueEnum: {
      0: { text: 'Không xác định'},
      1: { text: 'Đồ ăn'},
      2: { text: 'Đồ uống'},
    },
    key: 'productType',
  },
  {
    title: 'Mô tả sản phẩm',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Giá sản phẩm',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Ngày nhập sản phẩm',
    dataIndex: 'importDate',
    valueType: 'date',
    key: 'importDate',
  },
  {
    title: '',
    valueType: 'option',
    render: (text, record, index, action) => [
      <Button type="primary"
        key="editable"
        onClick={() => {
          action?.startEditable?.(record.id);
          
        }}
      >
        Sửa
      </Button>,
      <Button type="primary" danger onClick={() => {
        return showConfirm(record.id);
      }}>
        Xóa
      </Button>
    ],
  },
];


//tìm kiếm


//popup xóa
const { confirm } = Modal;
function showConfirm(id : any) {
  confirm({
    content: "Bạn muốn xóa bản ghi này ?",
    icon: <ExclamationCircleOutlined />,
    onOk() {
      try {
        deleteProductsById(id);
        dataSource = [];
        getProducts().then(data => {
          data.forEach(x => dataSource.push(x))
        });
        message.success('Xóa sản phẩm mới thành công');
      } catch (e: any) {
        message.error('Lỗi');
      }
    },
    onCancel() {
      
    },
  });
}

getProducts().then(data => {
  data.forEach(x => dataSource.push(x))
});

interface ProductCreateFormProps {
  onFinish: () => void | Promise<void>;
}

const ProductCreateForm: React.FC<ProductCreateFormProps> = (props) => {
  const [form] = Form.useForm();
  return (
    <ModalForm<API.ProductModel>
      title="Tạo sản phẩm mới khoản mới"
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
        try {
          await postProducts(values);
          dataSource = [];
          getProducts().then(data => {
            data.forEach(x => dataSource.push(x))
          });
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
          { label: 'Không xác định', value: 0 },
          { label: 'Đồ ăn', value: 1 },
          { label: 'Đồ uống', value: 2 }
        ]}
        placeholder="Vui lòng chọn loại sản phẩm"
        rules={[{ required: true }]}
      />
      <ProFormText name="description" label="Mô tả sản phẩm" rules={[{ required: true }]} />
      <ProFormText name="price" label="Giá sản phẩm" rules={[{ required: true }]} />
      <ProFormDatePicker name="importDate" label="Ngày nhập sản phẩm" rules={[{ required: true }]}  />
    </ModalForm>
  );
};

export default () => {
  const actionRef = useRef<ActionType>();
  return (
    <ProTable<API.Product>
      actionRef={actionRef}
      request={
        // requestData
        (params, sorter, filter) => {
          console.log(params.keyword);
          if(params.keyword) {
            dataSource = [];
            getProductsBySearch(params.keyword).then(data => data.forEach(x => dataSource.push(x)));
          }
          return Promise.resolve({
            data: dataSource,
            success: true,
          });
        }
      }
      columns={columns}
      rowKey="id"
      options={{
        search: true,
      }}
      search={false}
      headerTitle=""
      pagination={{ pageSize: 5 }}
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
        editable={{
          onSave: async (key: any, row: any, originRow: any, newLine?: any) => {
            try {
              row.productType = + row.productType;
              await putProducts(row);
              dataSource = [];
              getProducts().then(data => {
                data.forEach(x => dataSource.push(x))
              });
              actionRef.current?.cancelEditable(row.index);
              message.success('Sửa sản phẩm mới thành công');
              return true;
            } catch (e: any) {
              message.error('Lỗi');
              return false;
            }
          },
          onCancel:async (key: any, row: any, originRow: any, newLine?: any) => {
            try {
              dataSource = [];
              getProducts().then(data => {
                data.forEach(x => dataSource.push(x))
              });
              actionRef.current?.cancelEditable(row.index);
              return true;
            } catch (e: any) {
              return false;
            }
          },
          actionRender: (row, config, defaultDom) => {
            return [defaultDom.save,defaultDom.cancel];
          },
        }}
    />
  );
};