import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const Register = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  const handleRegister = () => {
    const payload = {
      name,
      password,
      confirmPassword,
    };
    console.log('Register Data:', payload);

    if (!name || password !== confirmPassword) {
      return;
    } else {
      navigation.reset({index: 0, routes: [{name: 'Home', params: payload}]});
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Register</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
        style={styles.inputText}
        placeholderTextColor={'gray'}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
        style={styles.inputText}
        placeholderTextColor={'gray'}
      />
      <TextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={text => setConfirmPassword(text)}
        secureTextEntry={true}
        style={styles.inputText}
        placeholderTextColor={'gray'}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <View style={styles.lineContainer}>
        <Text style={styles.staticText}>Already have an account!!</Text>
        <Text
          style={styles.loginText}
          onPress={() => navigation.navigate('Login')}>
          Login
        </Text>
      </View>
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
  titleText: {
    textAlign: 'center',
    fontSize: 28,
    color: 'black',
    marginVertical: 10,
  },
  button: {
    padding: 15,
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
  inputText: {
    padding: 16,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 0.8,
    marginVertical: 4,
    color: 'black',
  },
  lineContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'gray',
  },
  staticText: {
    fontStyle: 'italic',
    marginHorizontal: 4,
  },
  loginText: {
    color: 'black',
    fontWeight: '700',
  },
});
