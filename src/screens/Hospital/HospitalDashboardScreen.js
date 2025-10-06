import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from '../../styles/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HospitalDashboardScreen = ({ navigation }) => {
  const handleLogout = async () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Logout',
        onPress: async () => {
          await AsyncStorage.removeItem('token');
          await AsyncStorage.removeItem('role');
          await AsyncStorage.removeItem('hospital');
          navigation.replace('Home');
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.welcomeText}>Hospital Portal</Text>
          <Text style={styles.hospitalName}>Dashboard</Text>
        </View>
        <TouchableOpacity onPress={handleLogout}>
          <Icon name="logout" size={24} color={colors.white} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.card}>
          <Icon name="local-hospital" size={48} color={colors.primary} />
          <Text style={styles.cardTitle}>Hospital Dashboard</Text>
          <Text style={styles.cardDescription}>
            Manage doctors, patients, and medical reports
          </Text>
        </View>

        <View style={styles.card}>
          <Icon name="person-add" size={32} color={colors.primary} />
          <Text style={styles.featureTitle}>Doctor Management</Text>
          <Text style={styles.featureDescription}>
            Add and manage doctors in your hospital
          </Text>
        </View>

        <View style={styles.card}>
          <Icon name="description" size={32} color={colors.primary} />
          <Text style={styles.featureTitle}>Report Management</Text>
          <Text style={styles.featureDescription}>
            View and manage all medical reports
          </Text>
        </View>

        <View style={styles.card}>
          <Icon name="settings" size={32} color={colors.primary} />
          <Text style={styles.featureTitle}>Hospital Profile</Text>
          <Text style={styles.featureDescription}>
            Update hospital information and settings
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.primary,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 14,
    color: colors.white,
    opacity: 0.9,
  },
  hospitalName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
    marginTop: 4,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 24,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginTop: 12,
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginTop: 12,
  },
  featureDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 8,
  },
});

export default HospitalDashboardScreen;
