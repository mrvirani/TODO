import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Register';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import { toastConfig } from '../configs/toastConfig';

const Navigations = () => {
  const Stack = createNativeStackNavigator();
  const [isLoading, setIsLoading] = useState(true); // For loading indicator
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Login state

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const user = await AsyncStorage.getItem('userData'); // Retrieve user data
        if (user) {
          setIsLoggedIn(true); // User is logged in
        }
      } catch (error) {
        console.error('Error checking login status:', error);
      } finally {
        setIsLoading(false); // Hide the loading indicator
      }
    };
    checkLoginStatus();
  }, []);

  if (isLoading) {
    // Show a loading screen while checking login state
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName={isLoggedIn? 'Home': 'Login'}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
      <Toast config={toastConfig} />
    </NavigationContainer>
  );
};

export default Navigations;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
