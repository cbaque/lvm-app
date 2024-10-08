"use client";

import { FileAddOutlined, ReloadOutlined } from '@ant-design/icons';
import { Drawer, FloatButton, Table } from 'antd'
import React, { useCallback, useState } from 'react'
import FormNewFile from './FormNewFile';
import { useFetchToFiles } from '@/hooks';
import useFileColumns from '@/hooks/files/columnsGridFiles';
import { FileI } from '@/interfaces/file';
import { deleteFiles } from '@/actions/files/delete';
import { useAlert } from '@/context/alertContext';

const GridFiles = () => {

  const { data, loading, loadFiles } = useFetchToFiles();
  const [openNew, setOpenNew] = useState(false);
  const { showAlert } = useAlert();

  const showOpenNewUser = () => setOpenNew(true);
  const closeNewUser = () => {
    setOpenNew(false);
    setEditingFile(null)
  }
  const [editingFile, setEditingFile] = useState<FileI | null>(null);

  const handleSuccess = useCallback(() => {
    setOpenNew(false);
    loadFiles();
  }, [loadFiles]);

  const handleEdit = useCallback((file: FileI) => {
    setEditingFile(file);
    setOpenNew(true);
  }, []);

  const handleDelete = useCallback(async (file: FileI) => {
    const r = confirm(`Esta seguro de eliminar el archivo?`)
    if (!r) return false;
    
    const response = await deleteFiles(file?.id)
    if( response.code ) {
      showAlert(response?.message, "success");
      loadFiles();
    }else{
      showAlert(response?.message, "error");
    }
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
        title={editingFile ? " Editar Archivo" : "Crear nuevo Archivo"} 
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
