import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

const CustomInput = ({ placeholder, value, onChangeText, secureTextEntry, error }) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="gray"
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
    {error ? <Text style={styles.errorText}>{error}</Text> : null}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  input: {
    padding: 16,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
    color: 'black',
  },
  errorText: {
    color: 'red',
    marginTop: 4,
    fontSize: 12,
  },
});

export default CustomInput;
