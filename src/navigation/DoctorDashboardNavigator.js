import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DoctorDashboardScreen from '../screens/Doctor/DoctorDashboardScreen';

const Tab = createBottomTabNavigator();

const DoctorDashboardNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2a9b94',
        tabBarInactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="DoctorDash"
        component={DoctorDashboardScreen}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <Icon name="dashboard" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default DoctorDashboardNavigator;
