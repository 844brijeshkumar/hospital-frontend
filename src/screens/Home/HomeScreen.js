import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import { colors } from '../../styles/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.logo}>MedLock</Text>
          <Text style={styles.logoSubtext}>Centralized Medical Reports</Text>
        </View>

        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>Good Health is in your hands</Text>
          <Text style={styles.heroDescription}>
            Providing accessible, comprehensive, and compassionate healthcare
            solutions for you and your family.
          </Text>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('PatientLogin')}>
            <Icon name="person" size={48} color={colors.primary} />
            <Text style={styles.cardTitle}>Patient Portal</Text>
            <Text style={styles.cardDescription}>
              Manage your appointments, records, and more.
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('AIAssistant')}>
            <Icon name="psychology" size={48} color={colors.primary} />
            <Text style={styles.cardTitle}>AI Assistant</Text>
            <Text style={styles.cardDescription}>
              Get instant medical advice and support.
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('HospitalHome')}>
            <Icon name="local-hospital" size={48} color={colors.primary} />
            <Text style={styles.cardTitle}>Hospital Portal</Text>
            <Text style={styles.cardDescription}>
              Learn about our mission and team of experts.
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.navSection}>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate('Services')}>
            <Text style={styles.navButtonText}>Services</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate('About')}>
            <Text style={styles.navButtonText}>About Us</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate('Contact')}>
            <Text style={styles.navButtonText}>Contact</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2025 MedLock. All rights reserved.</Text>
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
    alignItems: 'center',
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.white,
  },
  logoSubtext: {
    fontSize: 12,
    color: colors.white,
    marginTop: 4,
  },
  heroSection: {
    backgroundColor: colors.primary,
    padding: 32,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
    marginBottom: 16,
  },
  heroDescription: {
    fontSize: 16,
    color: colors.white,
    textAlign: 'center',
    lineHeight: 24,
  },
  cardContainer: {
    padding: 16,
    gap: 16,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.textPrimary,
    marginTop: 12,
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  navSection: {
    padding: 16,
    gap: 12,
  },
  navButton: {
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
  },
  footer: {
    padding: 24,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: colors.gray200,
    marginTop: 16,
  },
  footerText: {
    fontSize: 12,
    color: colors.textSecondary,
  },
});

export default HomeScreen;
