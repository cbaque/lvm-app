import { titleFont } from '@/config/fonts'
import { UserOutlined } from '@ant-design/icons'
import { Collapse, Input, Space, Tabs } from 'antd'
import React from 'react'

const FormNewUser = () => {

  const text = `<formDataLogin />`;

  return (
    <div>

        <form className="flex flex-col">

        <Space direction="vertical">
          <Collapse
              collapsible="header"
              defaultActiveKey={['1']}
              items={[
                {
                  key: '1',
                  label: 'Datos de usuario',
                  children:formDataLogin(),
                },
              ]}
            />
            <Collapse
              collapsible="icon"
              defaultActiveKey={['2']}
              items={[
                {
                  key: '2',
                  label: 'Datos personales',
                  children: <p>{text}</p>,
                },
              ]}
            />
          
        </Space>




            {/* <div>
              <label htmlFor="username" className={ titleFont.className }>Usuario *</label>
              <Input name='username' prefix={<UserOutlined />} />
            </div>

            <div className='pt-5'>
              <label htmlFor="email" className={ titleFont.className }>Email *</label>
              <Input name='email' prefix={<UserOutlined />} />
            </div>              

            <div className='pt-5'>
              <label htmlFor="password" className={ titleFont.className }>Password *</label>
              <Input name='password' prefix={<UserOutlined />} />
            </div>      

            <div className='pt-5'>
              <label htmlFor="name" className={ titleFont.className }>Nombres</label>
              <Input name='name' prefix={<UserOutlined />} />
            </div> 

            <div className='pt-5'>
              <label htmlFor="dni" className={ titleFont.className }>CI</label>
              <Input name='dni' prefix={<UserOutlined />} />
            </div>                     

            <div className='pt-5'>
              <label htmlFor="phone" className={ titleFont.className }>Tel&eacute;fono</label>
              <Input name='phone' prefix={<UserOutlined />} />
            </div>   */}
        </form>
      
    </div>
  )
}

function formDataLogin() {
 
  return (
    <div>

        <div>
          <label htmlFor="username" className={ titleFont.className }>Usuario *</label>
          <Input name='username' prefix={<UserOutlined />} />
        </div>

        <div className='pt-5'>
          <label htmlFor="email" className={ titleFont.className }>Email *</label>
          <Input name='email' prefix={<UserOutlined />} />
        </div>              

        <div className='pt-5'>
          <label htmlFor="password" className={ titleFont.className }>Password *</label>
          <Input name='password' prefix={<UserOutlined />} />
        </div>  



    </div>
  );
}

export default FormNewUser
