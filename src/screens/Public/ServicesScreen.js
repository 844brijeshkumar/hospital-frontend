import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../../styles/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ServicesScreen = ({ navigation }) => {
  const services = [
    {
      icon: 'medical-services',
      title: 'Medical Records Management',
      description: 'Securely store and access your medical records anytime, anywhere.',
    },
    {
      icon: 'psychology',
      title: 'AI Health Assistant',
      description: 'Get instant medical advice and health recommendations.',
    },
    {
      icon: 'calendar-today',
      title: 'Appointment Scheduling',
      description: 'Book and manage appointments with healthcare providers.',
    },
    {
      icon: 'notifications',
      title: 'Health Reminders',
      description: 'Receive timely reminders for medications and checkups.',
    },
    {
      icon: 'share',
      title: 'Easy Report Sharing',
      description: 'Share your medical reports securely with doctors.',
    },
    {
      icon: 'analytics',
      title: 'Health Analytics',
      description: 'Track your health metrics and view detailed analytics.',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color={colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Our Services</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.introCard}>
          <Text style={styles.introTitle}>What We Offer</Text>
          <Text style={styles.introText}>
            Comprehensive healthcare solutions designed to make managing your
            health easier and more efficient.
          </Text>
        </View>

        {services.map((service, index) => (
          <View key={index} style={styles.serviceCard}>
            <Icon name={service.icon} size={40} color={colors.primary} />
            <View style={styles.serviceContent}>
              <Text style={styles.serviceTitle}>{service.title}</Text>
              <Text style={styles.serviceDescription}>{service.description}</Text>
            </View>
          </View>
        ))}
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
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  introCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  introTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 8,
  },
  introText: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  serviceCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  serviceContent: {
    flex: 1,
    marginLeft: 16,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 4,
  },
  serviceDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
});

export default ServicesScreen;
