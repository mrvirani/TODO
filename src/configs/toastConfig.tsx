import {
  BaseToast,
  BaseToastProps,
  ErrorToast,
} from 'react-native-toast-message';
import {StyleSheet} from 'react-native';

export const toastConfig = {
  success: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      style={[style.commonContainer, style.successContainer]}
      text1Style={[style.successTxt, style.titleText]}
      text2Style={style.successTxt}
    />
  ),
  error: (props: BaseToastProps) => (
    <ErrorToast
      {...props}
      style={[style.commonContainer, style.errorContainer]}
      text1Style={[style.errorTxt, style.titleText]}
      text2Style={style.errorTxt}
    />
  ),
};

const style = StyleSheet.create({
  commonContainer: {
    marginVertical: 16,
  },
  successContainer: {
    borderLeftColor: 'green',
    backgroundColor: 'white',
  },
  titleText: {
    color: 'black',
    fontWeight: 'bold',
  },
  successTxt: {
    color: 'gray',
  },
  errorContainer: {
    borderLeftColor: 'red',
    backgroundColor: 'white',
  },
  errorTxt: {
    color: 'gray',
  },
});
