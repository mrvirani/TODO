import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomInput from '../components/atoms/CustomInput';
import CustomButton from '../components/atoms/CustomButton';
import {showSuccessToast} from '../utils/toastUtils';

const Register = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation();

  const handleRegister = async () => {
    if (!name || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    const payload = {name, password};
    await AsyncStorage.setItem('userData', JSON.stringify(payload));
    setError('');
    showSuccessToast('User Login Successfully!!');
    navigation.reset({index: 0, routes: [{name: 'Home', params:payload}]});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <CustomInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        error={error.includes('match') ? '' : error}
      />
      <CustomInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        error={error}
      />
      <CustomInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        error={error}
      />
      <CustomButton title="Register" onPress={handleRegister} />
      <Text style={styles.link}>
        Already have an account?{' '}
        <Text
          style={{color: 'black', fontStyle: 'normal'}}
          onPress={() => navigation.navigate('Login')}>
          {' '}
          Login
        </Text>
      </Text>
    </View>
  );
};

export default Register;

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
