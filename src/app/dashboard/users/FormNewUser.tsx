import { getRoles } from "@/actions";
import { RoleI, RoleResponseI } from "@/interfaces/role";
import {
  FileOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Input, Steps } from "antd";
import React, {  useEffect, useState } from "react";


type FormDataLoginProps = {
  formData: any;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRoleButtonClick: (role: string) => void;
  roles : RoleI[]
};

type FormDataPersonalProps = {
  formData: any;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormNewUser = () => {
  const [current, setCurrent] = useState(0);
  const [roles, setRoles] = useState<RoleI[]>([]);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
    name: "",
    dni: "",
    phone: "",
  });

  useEffect(() => {
    const fetchRoles = async () => {
      const rolesData = await getRoles();
      setRoles(rolesData.data);
    };

    fetchRoles();
  }, []);


  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };


  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRoleButtonClick = (role: string) => {
    setFormData({
      ...formData,
      role: role,
    });
  };

  const steps = [
    {
      title: "Usuario",
      content: (
        <FormDataLogin
          formData={formData}
          onChange={handleInputChange}
          onRoleButtonClick={handleRoleButtonClick}
          roles = {roles || {}}
        />
      ),
    },
    {
      title: "Personal",
      content: <FormDataPersonal formData={formData} onChange={handleInputChange} />,
    },
  ];

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <div>
      <form className="flex flex-col">
        <Steps current={current} items={items} />
        <div style={{ minHeight: 300 }}>{steps[current].content}</div>
        <div style={{ marginTop: 24 }}>
          <div>
            {current < steps.length - 1 && (
              <Button
                className="absolute right-10"
                type="primary"
                htmlType="button"
                onClick={() => next()}
              >
                Siguiente
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                className="absolute right-10"
                htmlType="submit"
              >
                Crear
              </Button>
            )}
            {current > 0 && (
              <Button
                className="absolute left-6"
                htmlType="button"
                onClick={() => prev()}
              >
                Anterior
              </Button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

const FormDataLogin = ({
  formData,
  onChange,
  onRoleButtonClick,
  roles
}: FormDataLoginProps) => {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleRoleButtonClick = (role: any) => {
    setSelectedRole(role);
    onRoleButtonClick(role);
  };

  return (
    <div className="flex flex-col w-80">
      <div className="pt-5">
        <label htmlFor="username">Usuario *</label>
        <Input
          name="username"
          value={formData.username}
          onChange={onChange}
          placeholder="¡Hola! &#128075; digita usuario"
          type="text"
          autoComplete="current-username"
          prefix={<UserOutlined />}
        />
      </div>

      <div className="pt-5">
        <label htmlFor="email">Email *</label>
        <Input
          name="email"
          value={formData.email}
          onChange={onChange}          
          placeholder="Ej: example@tudominio.com.ec"
          type="email"
          autoComplete="current-email"
          prefix={<MailOutlined />}
        />
      </div>

      <div className="pt-5">
        <label htmlFor="password">Password *</label>
        <Input
          name="password"
          value={formData.password}
          onChange={onChange}            
          placeholder="agrega seguridad a tu inicio &#128274;"
          type="password"
          autoComplete="current-password"
          prefix={<LockOutlined />}
        />
      </div>

      <div className="pt-5">
        <label htmlFor="password">Rol *</label>
        <div className="flex flex-row ">
          {
            roles.map( (rol:RoleI) => (
              <Button
                key={rol.name}
                type={selectedRole === rol.name ? "primary" : "default"}
                onClick={() => handleRoleButtonClick(rol.name)}
                className="mx-2"
              >
                {rol.description}
              </Button>
            ))
          }
        </div>
      </div>
    </div>
  );
};

const FormDataPersonal = ({formData, onChange}: FormDataPersonalProps) =>{
  return (
    <div className="flex flex-col w-80">
      <div className="pt-5">
        <label htmlFor="name">Nombres *</label>
        <Input
          name="name"
          value={formData.name}
          onChange={onChange}  
          placeholder="digita tus nombres y apellidos &#128512; &#128512;"
          autoComplete="current-name"
          prefix={<UserOutlined />}
        />
      </div>

      <div className="pt-5">
        <label htmlFor="dni">CI</label>
        <Input
          name="dni"
          value={formData.dni}
          onChange={onChange}            
          placeholder="no es obligatorio &#128512; &#128512;"
          autoComplete="current-dni"
          prefix={<FileOutlined />}
        />
      </div>

      <div className="pt-5">
        <label htmlFor="phone">Tel&eacute;fono</label>
        <Input
          name="phone"
          value={formData.phone}
          onChange={onChange}            
          placeholder="no es obligatorio &#128512; &#128512;"
          autoComplete="current-phone"
          prefix={<PhoneOutlined />}
        />
      </div>
    </div>
  );
}

export default FormNewUser;
