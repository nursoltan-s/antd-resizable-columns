import React from 'react';
import ResizableTable from './ResizableTable';
import type { ColumnsType } from 'antd/es/table';

// Example Usage (You can move this to a separate example file if needed)
interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 200,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 100,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];

const App: React.FC = () => (
  <div style={{ padding: '20px' }}>
    <h1>Ant Design Resizable Table</h1>
    <ResizableTable<DataType> columns={columns} dataSource={data} bordered />
  </div>
);

// Export the component
export { ResizableTable };

// If you want to render the example directly (e.g., for a demo page)
// import ReactDOM from 'react-dom';
// ReactDOM.render(<App />, document.getElementById('root'));
// Make sure to add react-dom to dependencies if you uncomment the above
