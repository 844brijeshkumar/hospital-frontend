import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HospitalDashboardScreen from '../screens/Hospital/HospitalDashboardScreen';

const Tab = createBottomTabNavigator();

const HospitalDashboardNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2a9b94',
        tabBarInactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="HospitalDash"
        component={HospitalDashboardScreen}
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

export default HospitalDashboardNavigator;
