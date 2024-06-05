import { titleFont } from '@/config/fonts'
import { FileOutlined, LockOutlined, MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Collapse, Input, Space, Steps, Tabs } from 'antd'
import React, { useState } from 'react'

const FormNewUser = () => {

  const steps = [
    {
      title: 'Usuario',
      content: formDataLogin(),
    },
    {
      title: 'Personal',
      content: formDataPersonal(),
    },
  ];
  const [current, setCurrent] = useState(1);

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <div>

      <Steps current={current} items={items} />
      <div style={{minHeight: 300}}>
        {steps[current].content}
      </div>
      <div style={{marginTop: 24}}>
        <div>

          {current < steps.length - 1 && (
            <Button className='absolute right-10' type="primary" onClick={() => next()}>
              Siguiente
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" className='absolute right-10'>
              Crear
            </Button>
          )}
          {current > 0 && (
            <Button className='absolute left-6' onClick={() => prev()}>
              Anterior
            </Button>
          )}        

        </div>
      </div>

      
    </div>
  )
}

function formDataLogin() {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleRoleButtonClick = (role: any) => {
    setSelectedRole(role);
  };

  return (

    
    <div className='flex flex-col w-80'>

        <div className='pt-5'>
          <label htmlFor="username">Usuario *</label>
          <Input name='username' placeholder='¡Hola! &#128075; digita usuario' type='text' prefix={<UserOutlined />} />
        </div>

        <div className='pt-5'>
          <label htmlFor="email">Email *</label>
          <Input name='email' placeholder='Ej: example@tudominio.com.ec' type='email' prefix={<MailOutlined />} />
        </div>              

        <div className='pt-5'>
          <label htmlFor="password">Password *</label>
          <Input name='password' placeholder='agrega seguridad a tu inicio &#128274;' type='password' prefix={<LockOutlined />} />
        </div>  

        <div className='pt-5'>
          <label htmlFor="password">Rol *</label>
          <div className='flex flex-row '>
            <Button type={selectedRole === 'Administrador' ? 'primary' : 'default'} onClick={() => handleRoleButtonClick('Administrador')}>Administrador</Button>
            <Button type={selectedRole === 'Doctor' ? 'primary' : 'default'} onClick={() => handleRoleButtonClick('Doctor')} className='mx-2 primary'>Doctor</Button>
            <Button type={selectedRole === 'Licenciado' ? 'primary' : 'default'} onClick={() => handleRoleButtonClick('Licenciado')} className='mx-2'>Licenciado</Button>
          </div>
        </div>          

    </div>
  );
}

function formDataPersonal() {
 
  return (
    <div className='flex flex-col w-80'>

        <div className='pt-5'>
          <label htmlFor="name">Nombres *</label>
          <Input name='name' placeholder='digita tus nombres y apellidos &#128512; &#128512;' prefix={<UserOutlined />} />
        </div>   

        <div className='pt-5'>
          <label htmlFor="name">CI</label>
          <Input name='dni' placeholder='no es obligatorio &#128512; &#128512;' prefix={<FileOutlined />} />
        </div>    

        <div className='pt-5'>
          <label htmlFor="name">Tel&eacute;fono</label>
          <Input name='phone' placeholder='no es obligatorio &#128512; &#128512;' prefix={<PhoneOutlined />} />
        </div>                       

    </div>
  );
}

export default FormNewUser
