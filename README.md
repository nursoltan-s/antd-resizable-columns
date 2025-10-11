# 🧩 antd-resizable-columns

> A lightweight wrapper around Ant Design’s Table component that adds **column resizing** support — with full TypeScript, Ant Design v5, and React 18 compatibility.

[![npm version](https://img.shields.io/npm/v/antd-resizable-columns.svg?color=success)](https://www.npmjs.com/package/antd-resizable-columns)
[![license](https://img.shields.io/github/license/nursoltan-s/antd-resizable-columns.svg)](LICENSE)
[![build](https://img.shields.io/github/actions/workflow/status/nursoltan-s/antd-resizable-columns/ci.yml?branch=main)](https://github.com/nursoltan-s/antd-resizable-columns/actions)
[![stars](https://img.shields.io/github/stars/nursoltan-s/antd-resizable-columns?style=social)](https://github.com/nursoltan-s/antd-resizable-columns)

---

## ✨ Features

- 🪶 Simple API – works just like `antd`’s `Table`  
- 🧱 Resizable column widths via drag handle  
- ⚙️ Fully typed with TypeScript  
- 📏 Optional `minWidth` and `maxWidth` per column  
- 💾 Emits resize events to persist column sizes  
- 🧩 Plug-and-play: no extra CSS or setup required  

---

## 📦 Installation

```bash
npm install antd-resizable-columns
# or
yarn add antd-resizable-columns
# or
pnpm add antd-resizable-columns


```
npm install antd react react-dom
```

## 🚀 Usage

```
import React from "react";
import { ResizableTable } from "antd-resizable-columns";
import type { ColumnsType } from "antd/es/table";

interface User {
  key: number;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<User> = [
  {
    title: "Name",
    dataIndex: "name",
    width: 150,
    minWidth: 100,
  },
  {
    title: "Age",
    dataIndex: "age",
    width: 120,
  },
  {
    title: "Address",
    dataIndex: "address",
    width: 300,
  },
];

const data: User[] = [
  { key: 1, name: "John", age: 32, address: "New York" },
  { key: 2, name: "Mary", age: 28, address: "London" },
];

export default function App() {
  return (
    <ResizableTable<User>
      bordered
      columns={columns}
      dataSource={data}
      onResize={(cols) => console.log("Resized columns:", cols)}
    />
  );
}

```
