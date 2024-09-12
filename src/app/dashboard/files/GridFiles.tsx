"use client";

import { FileAddOutlined, ReloadOutlined } from '@ant-design/icons';
import { Drawer, FloatButton, Table } from 'antd'
import React, { useCallback, useState } from 'react'
import FormNewFile from './FormNewFile';
import { useFetchToFiles } from '@/hooks';
import useFileColumns from '@/hooks/files/columnsGridFiles';
import { FileI } from '@/interfaces/file';

const GridFiles = () => {

  const { data, loading, loadFiles } = useFetchToFiles();
  const [openNew, setOpenNew] = useState(false);

  const showOpenNewUser = () => setOpenNew(true);
  const closeNewUser = () => setOpenNew(false);
  const [editingFile, setEditingFile] = useState<FileI | null>(null);

  const handleSuccess = useCallback(() => {
    setOpenNew(false);
    loadFiles();
  }, [loadFiles]);

  const handleEdit = useCallback((file: FileI) => {
    setEditingFile(file);
    setOpenNew(true);
  }, []);

  const handleDelete = useCallback((file: FileI) => {
    loadFiles();
  }, [loadFiles]);

  const columns  = useFileColumns({onEdit: handleEdit, onDelete: handleDelete});

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
        onClick={loadFiles}
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
        <FormNewFile onSuccess={ handleSuccess } file={ editingFile } />
        
      </Drawer>

    </div>
  )
}

export default GridFiles
