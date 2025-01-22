import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation()

  const handleLogin = () => {
    const payload = {
      name,
      password,
    };
    
    if (!name || !password) {
      return;
    } else {
      console.log('Register Data:', payload);
      navigation.reset({ index:0, routes:[{name:'Home', params:payload}]})
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Login</Text>
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
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.lineContainer}>
        <Text style={styles.staticText}>Don't have an account!!</Text>
        <Text style={styles.registerText} onPress={()=> navigation.navigate('Register')}>Register</Text>
      </View>
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
    alignItems: 'center',
    justifyContent: 'center',
    color: 'gray',
  },
  staticText: {
    fontStyle: 'italic',
    marginHorizontal: 4,
  },
  registerText: {
    color: 'black',
    fontWeight: '700',
  },
});
