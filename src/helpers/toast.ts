import { toast } from 'react-toastify';

export const showToastError = (text: string) => {
  toast.error(text, {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    onClose: undefined,
  });
};