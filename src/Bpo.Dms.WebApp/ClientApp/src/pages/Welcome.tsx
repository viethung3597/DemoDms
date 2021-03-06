import React, { useEffect, useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography, List } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import styles from './Welcome.less';
import { getWeatherForecast } from '@/services/dms/WeatherForecast';
import Table from './Table';
import DemoTable from './DemoTable';
// import DemoTable from './DemoTable';
// import ProTable from './ProTable';

const CodePreview: React.FC = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

const Welcome: React.FC = () => {
  const [items, setItems] = useState<any[]>([]);
  const intl = useIntl();
  async function fetchWeather() {
    const result = await getWeatherForecast();
    setItems(result);
  }

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <PageContainer>
      <Card>
        <Alert
          message={intl.formatMessage({
            id: 'pages.welcome.alertMessage',
            defaultMessage: 'Faster and stronger heavy-duty components have been released.',
          })}
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        />
        <Typography.Text strong>
          <FormattedMessage id="pages.welcome.advancedComponent" defaultMessage="Advanced Form" />{' '}
          <a
            href="https://procomponents.ant.design/components/table"
            rel="noopener noreferrer"
            target="__blank"
          >
            <FormattedMessage id="pages.welcome.link" defaultMessage="Welcome" />
          </a>
          {/* <ProTable /> */}
        </Typography.Text>
        <CodePreview>
          {/* <ProTable /> */}
          <Table />
          {/* <TableAntd /> */}
          {/* <DemoTable /> */}
        </CodePreview>


        <Typography.Text
          strong
          style={{
            marginBottom: 12,
          }}
        >
          <FormattedMessage id="pages.welcome.advancedLayout" defaultMessage="Advanced layout" />{' '}
          <a
            href="https://procomponents.ant.design/components/layout"
            rel="noopener noreferrer"
            target="__blank"
          >
            <FormattedMessage id="pages.welcome.link" defaultMessage="Welcome" />
          </a>
        </Typography.Text>
        <CodePreview>yarn add @ant-design/pro-layout</CodePreview>
      </Card>
      <Card>
        <List
          size="small"
          bordered
          dataSource={items}
          renderItem={(item: any) => (
            <List.Item>
              <Typography.Text mark>{item.summary}</Typography.Text> {intl.formatDate(item.date)}
            </List.Item>
          )}
        />
      </Card>
    </PageContainer>
  );
};

export default Welcome;
