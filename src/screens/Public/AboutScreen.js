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

const AboutScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color={colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>About Us</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Our Mission</Text>
          <Text style={styles.cardText}>
            MedLock aims to revolutionize healthcare by providing a secure,
            centralized platform for managing medical records. We believe in
            making healthcare accessible and efficient for everyone.
          </Text>
        </View>

        <View style={styles.card}>
          <Icon name="security" size={48} color={colors.primary} />
          <Text style={styles.featureTitle}>Security & Privacy</Text>
          <Text style={styles.featureText}>
            Your health data is your most personal information. We use bank-grade
            security and encryption, adhering to Indian data laws.
          </Text>
        </View>

        <View style={styles.card}>
          <Icon name="public" size={48} color={colors.primary} />
          <Text style={styles.featureTitle}>Nationwide Access</Text>
          <Text style={styles.featureText}>
            Your health records should be accessible anywhere, from a clinic in
            Kerala to a hospital in Kashmir.
          </Text>
        </View>

        <View style={styles.card}>
          <Icon name="group" size={48} color={colors.primary} />
          <Text style={styles.featureTitle}>Citizen Empowerment</Text>
          <Text style={styles.featureText}>
            We put you in control. Manage, view, and securely share your complete
            medical history with any doctor you choose.
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
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 20,
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
    marginBottom: 12,
  },
  cardText: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    textAlign: 'center',
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginTop: 12,
    marginBottom: 8,
  },
  featureText: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    textAlign: 'center',
  },
});

export default AboutScreen;
