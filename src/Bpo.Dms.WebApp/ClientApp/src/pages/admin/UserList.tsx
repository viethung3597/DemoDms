import { getUsers, postUsers } from '@/services/dms/Users';
import { PlusOutlined } from '@ant-design/icons';
import { ModalForm, ProFormText } from '@ant-design/pro-form';
import { PageContainer } from '@ant-design/pro-layout';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Button, Form, message } from 'antd';
import { useRef } from 'react';

async function requestUsers(params: any, sorter: any, filter: any) {
  console.log(params, sorter, filter);
  return await getUsers();
}

interface UserCreateFormProps {
  onFinish: () => void | Promise<void>;
}

const UserCreateForm: React.FC<UserCreateFormProps> = (props) => {
  const [form] = Form.useForm();
  function randomPassword() {
    form.setFieldsValue({
      password: Buffer.from(Math.random().toString())
        .toString('base64')
        .slice(5, 5 + 8),
    });
  }
  return (
    <ModalForm<API.UserCreateModel>
      title="Tạo tài khoản mới"
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
          await postUsers(values);
          message.success('Tạo tài khoản thành công');
          form.resetFields();
          props.onFinish();
          return true;
        } catch (e: any) {
          message.error('Lỗi');
          return false;
        }
      }}
    >
      <ProFormText name="userName" label="Tên đăng nhập" rules={[{ required: true }]} />
      <ProFormText name="password" label="Mật khẩu" rules={[{ required: true }]} />
      <Button onClick={randomPassword}>Random</Button>
      <ProFormText name="email" label="Email" rules={[{ required: true }]} />
    </ModalForm>
  );
};

export default () => {
  const actionRef = useRef<ActionType>();
  const columns: ProColumns[] = [
    { dataIndex: 'userName', title: 'User Name', sorter: (a, b) => a.userName - b.userName },
    { dataIndex: 'email', title: 'Email', sorter: (a, b) => a.email - b.email },
    {
      title: '',
      valueType: 'option',
      render: () => {
        return null;
      },
    },
  ];
  return (
    <PageContainer>
      <ProTable<API.UserViewModel>
        rowKey="id"
        actionRef={actionRef}
        request={requestUsers}
        columns={columns}
        pagination={{ pageSize: 5 }}
        toolBarRender={() => {
          return [
            <UserCreateForm
              key="add"
              onFinish={() => {
                actionRef.current?.reload();
              }}
            />,
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
    </PageContainer>
  );
};
