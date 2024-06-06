import { FileOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";

const FormNewPatient = () => {

    return (
        <div>
            <form className="flex flex-col">
                <div className="flex flex-col w-80">
                    <div>
                        <label htmlFor="dni">CI *</label>
                        <Input
                        name="dni"
                        placeholder="digita tu identificación &#128512; &#128512;"
                        autoComplete="current-dni"
                        prefix={<FileOutlined />}
                        />
                    </div>

                    <div className="pt-5">
                        <label htmlFor="name">Nombres *</label>
                        <Input
                        name="name"
                        placeholder="digita tu nombres y apellidos &#128512; &#128512;"
                        autoComplete="current-name"
                        prefix={<UserOutlined />}
                        />
                    </div>                    

                    <div style={{ marginTop: 24 }}>
                        <Button
                            type="primary"
                            className="absolute right-10"
                            htmlType="submit"
                        >
                            Crear
                        </Button>                        
                    </div>

                </div>                
            </form>
        </div>
    )

}

export default FormNewPatient;
