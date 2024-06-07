"use client";

import { DeleteOutlined, EditOutlined, FileAddOutlined, ReloadOutlined } from '@ant-design/icons';
import { Drawer, FloatButton, Space, Table, TableProps } from 'antd'
import React, { useEffect, useState } from 'react'
import FormNewFile from './FormNewFile';
import { FileI } from '@/interfaces/file';
import { useFetchToFiles } from '@/hooks';

const GridFiles = () => {

  const { data, loading } = useFetchToFiles();
  
  const [openNew, setOpenNew] = useState(false);

  const showOpenNewUser = () => { setOpenNew(true); };
  const closeNewUser = () => { setOpenNew(false); };
  const [editingFile, setEditingFile] = useState<FileI[]>();

  const editFile = (file: FileI) => {

    console.log('editando', [file])
    setEditingFile([file]);
    console.log('guardando', [editingFile])
    // setOpenNew(true);
  };

  const columns: TableProps<FileI>['columns'] = [
    {
      title: 'Archivo',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: '',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <EditOutlined title='Editar' style={{ cursor: 'pointer', color: '#1677ff' }} onClick={() => editFile(record)} />
          <DeleteOutlined title='Eliminar' style={{ cursor: 'pointer', color: 'red' }} />
        </Space>
      ),
    }
  ];


  return (
    <div>
      <Table
        columns={columns}
        size='small'
        loading={loading}
        dataSource={data.map(file => ({ ...file, key: file.id }))}
      />

      <FloatButton
        shape="circle"
        type="primary"
        style={{ right: 94 }}
        onClick={showOpenNewUser}
        icon={<FileAddOutlined />}
      />

      <FloatButton
        shape="circle"
        type="default"
        style={{ right: 24 }}
        // onClick={loadFiles}
        icon={<ReloadOutlined />}
      />

      <Drawer
        title="Crear nuevo Archivo"
        width={520}
        open={openNew}
        onClose={closeNewUser}
        keyboard={false}
        maskClosable={false}
      >
        <FormNewFile />

      </Drawer>

    </div>
  )
}

export default GridFiles
