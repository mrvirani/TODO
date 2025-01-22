import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import TodoList from '../components/molecules/TodoList';

const Home = () => {
  const routes = useRoute();
  const {payload} = routes?.params;
  console.log('User Data:', routes?.params);

  return (
    <View style={styles.container}>
      <TodoList />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
});
