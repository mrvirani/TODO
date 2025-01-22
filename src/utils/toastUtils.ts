// toastUtils.js
import Toast from 'react-native-toast-message';

export const showSuccessToast = (message: any) => {
    Toast.show({
        type: 'success',
        text1: 'Success',
        text2: message || 'Operation was successful!',
    });
};

export const showErrorToast = (message: any) => {
    Toast.show({
        type: 'error',
        text1: 'Error',
        text2: message || 'Something went wrong!',
    });
};
