import { useRef } from 'react';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { getProducts } from '@/services/dms/Products';


async function requestData(params: any, sorter: any, filter: any) {
    console.log(params, sorter, filter);
    return await getProducts();
  }

const columns: ProColumns[] = [
  {
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: 'Id',
    dataIndex: 'id',
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
    dataIndex: 'date',
  },
];


export default () => {
  const actionRef = useRef<ActionType>();
  return (
    <ProTable<API.Product>
      columns={columns}
      actionRef={actionRef}
      request={requestData}
      pagination={{ pageSize: 5 }}
        toolBarRender={() => {
          return [
            // <UserCreateForm
            //   key="add"
            //   onFinish={() => {
            //     actionRef.current?.reload();
            //   }}
            // />,
          ];
        }}
        editable={{
          onSave: async (key: any, row: any, originRow: any, newLine?: any) => {
            console.log(key);
            console.log(row);
            console.log(originRow);
            console.log(newLine);
          },
          actionRender: (row, config, defaultDom) => {
            return [defaultDom.save, defaultDom.delete || defaultDom.cancel];
          },
        }}
    />
  );
};