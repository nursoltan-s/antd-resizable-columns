# Ant Design Resizable Table

An extension of the Ant Design Table component that adds column resizing functionality.

## Installation

You can install the package using npm or yarn:

```bash
npm install antd-resizable-table
# or
yarn add antd-resizable-table
```

Make sure you have `antd` and `react` installed as peer dependencies.

## Usage

Import the `ResizableTable` component and use it like a standard Ant Design Table.

```tsx
import React from 'react';
import { ResizableTable } from 'antd-resizable-table';
import type { ColumnsType } from 'antd/es/table';

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
    width: 200, // Initial width is recommended for resizable columns
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
    // Not resizable if width is not provided
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  // ...more data
];

const App: React.FC = () => (
  <ResizableTable<DataType> columns={columns} dataSource={data} bordered />
);

export default App;
```

### Resizable Columns

To make a column resizable, ensure you provide a `width` property in its column definition. The `ResizableTable` component uses `react-resizable` to enable resizing.

## Features

-   Extends Ant Design's `Table` component.
-   Allows users to resize column widths by dragging the column header's edge.
-   Simple to integrate into existing Ant Design projects.

## Props

The `ResizableTable` component accepts all props that the standard Ant Design `Table` component accepts.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

### Development

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/antd-resizable-table.git
    cd antd-resizable-table
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```
3.  Start the development server (if you set one up for examples):
    ```bash
    npm run start
    ```
4.  Build the library:
    ```bash
    npm run build
    ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
