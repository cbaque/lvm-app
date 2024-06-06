"use client";

import { UserI } from '@/interfaces/user';
import { DeleteOutlined, EditOutlined, FileAddOutlined, ReloadOutlined } from '@ant-design/icons';
import { Drawer, FloatButton, Space, Table, TableProps } from 'antd'
import React, { useState } from 'react'
import FormNewFile from './FormNewFile';


const columns: TableProps<UserI>['columns'] = [
    {
      title: 'Archivo',
      dataIndex: 'name',
      key: 'name',
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

    const [data, setData] = useState<UserI[]>([]);
    const [openNew, setOpenNew] = useState(false);

    const showOpenNewUser = () => { setOpenNew(true); };
    const closeNewUser = () => { setOpenNew(false); };


    return (
        <div>
            <Table columns={columns} size='small' dataSource={data}/>

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
            >
              <FormNewFile />

            </Drawer>          

        </div>
    )
}

export default GridFiles
