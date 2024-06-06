"use client";

import { UserI } from '@/interfaces/user';
import { DeleteOutlined, EditOutlined, FileAddOutlined, ReloadOutlined } from '@ant-design/icons';
import { Drawer, FloatButton, Space, Table, TableProps } from 'antd'
import React, { useEffect, useState } from 'react'
import FormNewFile from './FormNewFile';
import { FileI } from '@/interfaces/file';
import { tokenStore } from '@/store';
import { getFiles } from '@/actions';

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
          <EditOutlined title='Editar' style={{cursor:'pointer', color:'#1677ff'}}/>
          <DeleteOutlined title='Eliminar' style={{cursor:'pointer', color:'red'}}/>
        </Space>
      ),
    }
];

const GridFiles= () => {

    const [data, setData] = useState<FileI[]>([]);
    const [openNew, setOpenNew] = useState(false);

    const showOpenNewUser = () => { setOpenNew(true); };
    const closeNewUser = () => { setOpenNew(false); };

    useEffect(() => {
      tokenStore.persist.rehydrate();

      const loadUsers = async () => {
        try {
  
          const { data } = await getFiles();
          setData(data);
  
        } catch (error) {
          console.error(error);
        }
      };
  
      loadUsers();

    }, []);    


    return (
        <div>
            <Table columns={columns} size='small' dataSource={data.map(file => ({ ...file, key: file.id }))}/>

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
