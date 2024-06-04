"use client";


import { getUsers } from '@/actions';
import { UserI } from '@/interfaces/user';
import { CustomerServiceOutlined, ReloadOutlined, UserAddOutlined } from '@ant-design/icons';
import { Button, Drawer, FloatButton, Space, Table, TableProps } from 'antd'
import React, { useEffect, useState } from 'react'
import FormNewUser from './FormNewUser';
import { titleFont } from '@/config/fonts';
import { tokenStore } from '@/store';

const columns: TableProps<UserI>['columns'] = [
    {
      title: 'Usuario',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Nombres',
      dataIndex: ['people', 'name'],
      key: 'people.name',
    },
    {
        title: 'CI',
        dataIndex:  ['people', 'dni'],
        key: 'people.dni',
    },
    {
        title: 'Teléfono',
        dataIndex: ['people', 'phone'],
        key: 'people.phone',
    },
];

const GridUsers = () => {

    const [data, setData] = useState<UserI[]>([]);
    const [openNew, setOpenNew] = useState(false);

    const showOpenNewUser = () => { setOpenNew(true); };
    const closeNewUser = () => { setOpenNew(false); };

    
    const token = tokenStore(state => state.token);

    useEffect(() => {
        tokenStore.persist.rehydrate();

        const loadUsers = async () => {
          try {
    
            const { data } = await getUsers();
            setData(data);
    
          } catch (error) {
            console.error('Error fetching usuarios:', error);
          }
        };
    
        loadUsers();
      }, []);

    return (
        <div>
            <Table columns={columns} size='small' dataSource={data.map(user => ({ ...user, key: user.id }))}/>

            <FloatButton
              shape="circle"
              type="primary"
              style={{ right: 94 }}
              onClick={showOpenNewUser}
              icon={<UserAddOutlined />}
            />

            <FloatButton
              shape="circle"
              type="default"
              style={{ right: 24 }}
              icon={<ReloadOutlined />}
            />  

            <Drawer 
              title="Crear nuevo usuario"
              width={520}
              open={openNew}
              onClose={closeNewUser}
              extra={
                <Space>
                  <Button type="primary">
                    Crear
                  </Button>
                </Space>
              }              
            >

              <FormNewUser />

            </Drawer>          

        </div>
    )
}

export default GridUsers
