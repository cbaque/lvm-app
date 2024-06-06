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
import React, { useEffect, useState } from "react";


type FormDataLoginProps = {
  formData: any;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRoleButtonClick: (role: string) => void;
};

const FormNewUser = () => {
  const [current, setCurrent] = useState(0);
  const [roles, setRoles] = useState<RoleI>();


  useEffect(() => {
    
    const fetchRoles = async () => {
      const { data } = await getRoles();
      setRoles(data);
    };

    fetchRoles();
  });



  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
    name: "",
    dni: "",
    phone: "",
  });

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
        />
      ),
    },
    {
      title: "Personal",
      content: formDataPersonal(),
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
          prefix={<UserOutlined />}
        />
      </div>

      <div className="pt-5">
        <label htmlFor="email">Email *</label>
        <Input
          name="email"
          placeholder="Ej: example@tudominio.com.ec"
          type="email"
          prefix={<MailOutlined />}
        />
      </div>

      <div className="pt-5">
        <label htmlFor="password">Password *</label>
        <Input
          name="password"
          placeholder="agrega seguridad a tu inicio &#128274;"
          type="password"
          prefix={<LockOutlined />}
        />
      </div>

      <div className="pt-5">
        <label htmlFor="password">Rol *</label>
        <div className="flex flex-row ">
          <Button
            type={selectedRole === "Administrador" ? "primary" : "default"}
            onClick={() => handleRoleButtonClick("Administrador")}
          >
            Administrador
          </Button>
          <Button
            type={selectedRole === "Doctor" ? "primary" : "default"}
            onClick={() => handleRoleButtonClick("Doctor")}
            className="mx-2 primary"
          >
            Doctor
          </Button>
          <Button
            type={selectedRole === "Licenciado" ? "primary" : "default"}
            onClick={() => handleRoleButtonClick("Licenciado")}
            className="mx-2"
          >
            Licenciado
          </Button>
        </div>
      </div>
    </div>
  );
};

function formDataPersonal() {
  return (
    <div className="flex flex-col w-80">
      <div className="pt-5">
        <label htmlFor="name">Nombres *</label>
        <Input
          name="name"
          placeholder="digita tus nombres y apellidos &#128512; &#128512;"
          prefix={<UserOutlined />}
        />
      </div>

      <div className="pt-5">
        <label htmlFor="name">CI</label>
        <Input
          name="dni"
          placeholder="no es obligatorio &#128512; &#128512;"
          prefix={<FileOutlined />}
        />
      </div>

      <div className="pt-5">
        <label htmlFor="name">Tel&eacute;fono</label>
        <Input
          name="phone"
          placeholder="no es obligatorio &#128512; &#128512;"
          prefix={<PhoneOutlined />}
        />
      </div>
    </div>
  );
}

export default FormNewUser;
