"use client";

import { DeleteOutlined, EditOutlined, FileAddOutlined, ReloadOutlined } from '@ant-design/icons';
import { Drawer, FloatButton, Space, Table, TableProps } from 'antd'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import FormNewFile from './FormNewFile';
import { FileI } from '@/interfaces/file';
import { useFetchToFiles } from '@/hooks';
import useFileColumns from '@/hooks/files/columnsGridFiles';
import { useAlert } from "@/context/alertContext";

const GridFiles = () => {

  const { data, loading, loadFiles } = useFetchToFiles();
  const [openNew, setOpenNew] = useState(false);
  const [editingFile, setEditingFile] = useState<FileI[]>();

  const { showAlert } = useAlert();
  const alertShown = useRef(false);

  // manejamos estado de exito
  const [isFormSuccess, setIsFormSuccess] = useState(false);



  const showOpenNewUser = () => { 
    console.log(openNew)
    setOpenNew(true); 
    alertShown.current = false;
  };

  const closeNewUser = () => setOpenNew(false);

  const editFile = (file: FileI) => {

    console.log('editando', [file])
    setEditingFile([file]);
    console.log('guardando', [editingFile])
    // setOpenNew(true);
  };

  const handleSuccess = useCallback(() => {
    if (!alertShown.current) {
      showAlert("Archivo creado exitosamente", "success");
      alertShown.current = true; // Marcar como mostrado
      setOpenNew(false);
    }
    // loadFiles(); // Actualizar la lista de archivos
  }, [showAlert, loadFiles, setOpenNew]);

  const columns  = useFileColumns(editFile);

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
        <FormNewFile onClose={closeNewUser}  onSuccess={handleSuccess}/>
        
      </Drawer>

    </div>
  )
}

export default GridFiles
