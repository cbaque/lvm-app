import { FileOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { useEffect, useRef, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { postFiles, putFiles } from "@/actions";
import useForm from "@/hooks/useForm";
import { useAlert } from "@/context/alertContext";
import { FileI } from "@/interfaces/file";


interface FormNewFileProps {
    onSuccess: () => void;
    file?: FileI | null;
  }

const FormNewFile: React.FC<FormNewFileProps> = ({ onSuccess, file }) => {

    const [state, formAction] = useFormState(file?.id ? putFiles : postFiles, undefined);
    const { description, id, onChange, resetForm, setFormData } = useForm({description: file?.description || undefined, id: file?.id || undefined });
    const { showAlert } = useAlert();

    useEffect(() => {   
        if (state === undefined) return;

        if(state?.code) {
            showAlert(state?.message, "success");
            resetForm();
            onSuccess();
        } else {
            showAlert(state?.message, "error");
        }
    }, [state]);

    useEffect(() => {
        if (file) {
          setFormData({ description: file.description, id: file.id });
        } else {
          resetForm();
        }
      }, [file]);

    return (
        <div>
            <form className="flex flex-col" action={formAction}>
                                                                    
                <div className="flex flex-col w-80">
                    <div>                    
                        <Input type="text"
                        name="description"
                        placeholder="digita el nombre del archivo &#128512; &#128512;"
                        autoComplete="current-name"
                        value={description}
                        onChange={onChange}
                        prefix={<FileOutlined />}
                        />
                    </div>

                    <input type="hidden" value={id} onChange={onChange} name="id"/>
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
