import { FileOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { useActionState, useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { postFiles } from "@/actions";
import { userStore } from "@/store";
import { useAlert } from "@/context/alertContext";


const FormNewFile = () => {

    const { showAlert } = useAlert();
    const [state, formAction] = useFormState(postFiles, undefined);
    
    useEffect(() => {

        userStore.persist.rehydrate();
    
        if ( state !== undefined ) {
          if (!state?.code) {
            showAlert(state?.message, "error");
          } else {

          }
        }
      }, [state, showAlert]);

    return (
        <div>
            <form className="flex flex-col" action={formAction}>
                <div className="flex flex-col w-80">
                    <div>
                        <label htmlFor="description">Archivo *</label>
                        <Input
                        name="description"
                        placeholder="digita el nombre del archivo &#128512; &#128512;"
                        autoComplete="current-name"
                        prefix={<FileOutlined />}
                        />
                    </div>

                    <div style={{ marginTop: 24 }}>
                        <SaveFileButton />
                    </div>

                </div>                
            </form>
        </div>
    )

}

function SaveFileButton() {
    const { pending } = useFormStatus();
   
    return (
        <Button
            type="primary"
            className="absolute right-10"
            htmlType="submit"
            disabled={pending}
            loading={!!pending}
        >
            Crear
        </Button>  
    );
  }

export default FormNewFile;
