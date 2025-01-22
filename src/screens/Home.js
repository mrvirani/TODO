import {StyleSheet, View} from 'react-native';
import React from 'react';
import TodoList from '../components/molecules/TodoList';
import { useRoute } from '@react-navigation/native';

const Home = () => {
  const routes = useRoute();
  console.log("routes:",routes);
  
  // const {payload} = routes?.params;
  // console.log('User Data:', routes?.params);

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
