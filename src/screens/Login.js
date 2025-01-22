import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomInput from '../components/atoms/CustomInput';
import CustomButton from '../components/atoms/CustomButton';
import { showSuccessToast } from '../utils/toastUtils';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    const savedData = await AsyncStorage.getItem('userData');
    const userData = savedData ? JSON.parse(savedData) : null;

    if (!name || !password) {
      setError('All fields are required.');
      return;
    }

    if (userData && userData.name === name && userData.password === password) {
      const payload =userData
      setError('');
      showSuccessToast('User Login Successfully!!');
      navigation.reset({index: 0, routes: [{name: 'Home', params:payload}]});
    } else {
      setError('Invalid credentials.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <CustomInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        error={error.includes('credentials') ? '' : error}
      />
      <CustomInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        error={error}
      />
      <CustomButton title="Login" onPress={handleLogin} />
      <Text style={styles.link}>
        Don't have an account?{' '}
        <Text
          style={{color: 'black', fontStyle: 'normal'}}
          onPress={() => navigation.navigate('Register')}>
          {' '}
          Register
        </Text>
      </Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 20,
  },
  link: {
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
    fontStyle: 'italic',
  },
});
