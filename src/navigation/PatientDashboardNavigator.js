import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PatientDashboardScreen from '../screens/Patient/PatientDashboardScreen';
import PatientMedicalHistoryScreen from '../screens/Patient/PatientMedicalHistoryScreen';

const Tab = createBottomTabNavigator();

const PatientDashboardNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = 'dashboard';
          } else if (route.name === 'MedicalHistory') {
            iconName = 'medical-services';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2a9b94',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Dashboard"
        component={PatientDashboardScreen}
        options={{ tabBarLabel: 'Dashboard' }}
      />
      <Tab.Screen
        name="MedicalHistory"
        component={PatientMedicalHistoryScreen}
        options={{ tabBarLabel: 'Reports' }}
      />
    </Tab.Navigator>
  );
};

export default PatientDashboardNavigator;
