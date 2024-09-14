import { FileOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { useEffect, useRef, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { saveFiles } from "@/actions";
import useForm from "@/hooks/useForm";
import { useAlert } from "@/context/alertContext";
import { FileI } from "@/interfaces/file";


interface FormNewFileProps {
    onSuccess: () => void;
    file?: FileI | null;
  }

const FormNewFile: React.FC<FormNewFileProps> = ({ onSuccess, file }) => {

    const [state, formAction] = useFormState(saveFiles, undefined);
    const { description, id, onChange, resetForm, setFormData } = useForm({description: '', id: ''});
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

        if (file !== null) {
            setFormData({ description: file?.description || '', id: String(file?.id) || ''  });
        } else {
            resetForm();
        }
      }, [file]);


      const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('description', description);
        formData.append('id', id);
        formAction(formData);
    };

    const buttonText = file ? "Actualizar" : "Crear";

    return (
        <div>
            <form className="flex flex-col" onSubmit={handleSubmit}>
                                                                    
                <div className="flex flex-col w-80">
                    <div>                    
                        <Input type="text"
                        name="description"
                        placeholder="digita el nombre del archivo &#128512; &#128512;"
                        autoComplete="current-name"
                        value={description || ''}
                        onChange={onChange}
                        prefix={<FileOutlined />}
                        />
                    </div>


                    <div style={{ marginTop: 24 }}>
                        <SaveFileButton text={buttonText} />
                    </div>

                </div>                
            </form>
        </div>
    )

}

interface SaveFileButtonProps {
    text: string;
}

function SaveFileButton({text} : SaveFileButtonProps) {
    const { pending } = useFormStatus();
   
    return (
        <Button
            type="primary"
            className="absolute right-10"
            htmlType="submit"
            disabled={pending}
            loading={!!pending}
        >
            {text}
        </Button>  
    );
  }

export default FormNewFile;
