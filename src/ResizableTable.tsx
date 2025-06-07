import React, { useState, useCallback } from 'react';
import { Table } from 'antd';
import type { TableProps } from 'antd';
import { Resizable } from 'react-resizable';
import 'react-resizable/css/styles.css';

// Define the props for the ResizableHeader
interface ResizableTitleProps {
  onResize: (e: React.SyntheticEvent, data: { size: { width: number } }) => void;
  width: number;
  children: React.ReactNode;
}

const ResizableTitle: React.FC<ResizableTitleProps> = (props) => {
  const { onResize, width, children, ...restProps } = props;

  if (!width) {
    return <th {...restProps}>{children}</th>;
  }

  return (
    <Resizable
      width={width}
      height={0}
      handle={
        <span
          className="react-resizable-handle"
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
      }
      onResize={onResize}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <th {...restProps}>{children}</th>
    </Resizable>
  );
};

// Define the props for the ResizableTable
interface ResizableTableProps<T extends object> extends TableProps<T> {
  // Add any additional props specific to ResizableTable here
}

const ResizableTable = <T extends object>(props: ResizableTableProps<T>) => {
  const [columns, setColumns] = useState(props.columns || []);

  const handleResize = useCallback(
    (index: number) => (e: React.SyntheticEvent, { size }: { size: { width: number } }) => {
      const nextColumns = [...columns];
      nextColumns[index] = {
        ...nextColumns[index],
        width: size.width,
      };
      setColumns(nextColumns);
    },
    [columns]
  );

  const mergedColumns = columns.map((col, index) => ({
    ...col,
    onHeaderCell: (column: any) => ({
      width: column.width,
      onResize: handleResize(index),
    }),
  }));

  return (
    <Table
      {...props}
      components={{
        header: {
          cell: ResizableTitle,
        },
      }}
      columns={mergedColumns}
    />
  );
};

export default ResizableTable;
