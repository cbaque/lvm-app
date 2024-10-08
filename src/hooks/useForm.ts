import { ChangeEvent, useState } from 'react'

const useForm = <T> (initState: T) => {
    
    const [ formData, setFormData ] = useState(initState);

    const onChange = (event: ChangeEvent<HTMLInputElement> ) => {
        setFormData( prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))        
    }

    const resetForm = () => {
        setFormData({ ...initState })
    }
    

    return {
        ...formData,
        formData,
        onChange,
        resetForm,
        setFormData
    }
}

export default useForm
