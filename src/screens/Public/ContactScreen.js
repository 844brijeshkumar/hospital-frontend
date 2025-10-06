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

const ContactScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color={colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Contact Us</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Get In Touch</Text>
          <Text style={styles.cardText}>
            We're here to help and answer any questions you might have.
          </Text>
        </View>

        <View style={styles.card}>
          <Icon name="email" size={32} color={colors.primary} />
          <Text style={styles.contactTitle}>Email</Text>
          <Text style={styles.contactText}>support@medlock.com</Text>
        </View>

        <View style={styles.card}>
          <Icon name="phone" size={32} color={colors.primary} />
          <Text style={styles.contactTitle}>Phone</Text>
          <Text style={styles.contactText}>+91 1800 123 4567</Text>
        </View>

        <View style={styles.card}>
          <Icon name="location-on" size={32} color={colors.primary} />
          <Text style={styles.contactTitle}>Address</Text>
          <Text style={styles.contactText}>
            123 Health Street{'\n'}
            Medical District{'\n'}
            Mumbai, Maharashtra 400001{'\n'}
            India
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
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginTop: 12,
    marginBottom: 8,
  },
  contactText: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
  },
});

export default ContactScreen;
