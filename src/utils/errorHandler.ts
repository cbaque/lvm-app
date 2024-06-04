
import axios from 'axios';


export async function ErrorHandler(error: any) {
    if (axios.isAxiosError(error)) {
        if (error.response) {
            // El servidor respondió con un código de estado fuera del rango 2xx
            return {
                message: error.response.data.message || 'Error en la respuesta del servidor.',
                code: error.response.data.code,
                data: error.response.data,
            };
        } else if (error.request) {
            // La solicitud fue hecha pero no se recibió respuesta
            return {
                message: 'No se recibió respuesta del servidor.',
                code: false,
                data: null,
            };
        } else {
            // Algo sucedió al configurar la solicitud que desencadenó un error
            return {
                message: `Error en la configuración de la solicitud: ${error.message}`,
                code: false,
                data: null,
            };
        }
    } else {
        // Error de Javascript o algo diferente a Axios
        return {
            message: `Error desconocido: ${error.message}`,
            code: false,
            data: null,
        };
    }
}
