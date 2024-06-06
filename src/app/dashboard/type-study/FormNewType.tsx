import { FileOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";

const FormNewType = () => {

    return (
        <div>
            <form className="flex flex-col">
                <div className="flex flex-col w-80">
                    <div>
                        <label htmlFor="filename">Tipo Estudio *</label>
                        <Input
                        name="filename"
                        placeholder="digita el nombre del tipo &#128512; &#128512;"
                        autoComplete="current-name"
                        prefix={<FileOutlined />}
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

export default FormNewType;
