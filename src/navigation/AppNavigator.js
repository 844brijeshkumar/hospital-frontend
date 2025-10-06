import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, View } from 'react-native';

import HomeScreen from '../screens/Home/HomeScreen';
import PatientLoginScreen from '../screens/Auth/PatientLoginScreen';
import HospitalLoginScreen from '../screens/Auth/HospitalLoginScreen';
import DoctorLoginScreen from '../screens/Auth/DoctorLoginScreen';
import PatientDashboardNavigator from './PatientDashboardNavigator';
import DoctorDashboardNavigator from './DoctorDashboardNavigator';
import HospitalDashboardNavigator from './HospitalDashboardNavigator';
import AboutScreen from '../screens/Public/AboutScreen';
import ContactScreen from '../screens/Public/ContactScreen';
import ServicesScreen from '../screens/Public/ServicesScreen';
import PrivacyScreen from '../screens/Public/PrivacyScreen';
import TermsScreen from '../screens/Public/TermsScreen';
import HospitalHomeScreen from '../screens/Hospital/HospitalHomeScreen';
import AIAssistantScreen from '../screens/AI/AIAssistantScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [initialRoute, setInitialRoute] = useState('Home');

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const role = await AsyncStorage.getItem('role');

      if (token && role) {
        switch (role) {
          case 'patient':
            setInitialRoute('PatientDashboard');
            break;
          case 'doctor':
            setInitialRoute('DoctorDashboard');
            break;
          case 'hospital':
            setInitialRoute('HospitalDashboard');
            break;
          default:
            setInitialRoute('Home');
        }
      }
    } catch (error) {
      console.error('Error checking auth status:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#2a9b94" />
      </View>
    );
  }

  return (
    <Stack.Navigator
      initialRouteName={initialRoute}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PatientLogin" component={PatientLoginScreen} />
      <Stack.Screen name="HospitalLogin" component={HospitalLoginScreen} />
      <Stack.Screen name="DoctorLogin" component={DoctorLoginScreen} />
      <Stack.Screen name="PatientDashboard" component={PatientDashboardNavigator} />
      <Stack.Screen name="DoctorDashboard" component={DoctorDashboardNavigator} />
      <Stack.Screen name="HospitalDashboard" component={HospitalDashboardNavigator} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Contact" component={ContactScreen} />
      <Stack.Screen name="Services" component={ServicesScreen} />
      <Stack.Screen name="Privacy" component={PrivacyScreen} />
      <Stack.Screen name="Terms" component={TermsScreen} />
      <Stack.Screen name="HospitalHome" component={HospitalHomeScreen} />
      <Stack.Screen name="AIAssistant" component={AIAssistantScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
