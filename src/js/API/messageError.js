import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


export function errorMessage(message) {
    iziToast.error({
        title: 'Error',
        message: message,
        });
    
}
export function successMessage(message) {
    iziToast.success({
        title: 'Ok',
        message: message,
        });
    
}