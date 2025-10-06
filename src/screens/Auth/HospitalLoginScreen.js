import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { registerHospital, loginHospital } from '../../api/auth';
import { colors } from '../../styles/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HospitalLoginScreen = ({ navigation }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [loginData, setLoginData] = useState({
    npi_id: '',
    password: '',
  });

  const [signupData, setSignupData] = useState({
    org_issued_name: '',
    location: '',
    state: '',
    country: '',
    contact: '',
    npi_id: '',
    password: '',
  });

  const handleLogin = async () => {
    if (!loginData.npi_id || !loginData.password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      const data = await loginHospital(loginData);
      if (data.status === true) {
        await AsyncStorage.setItem('token', data.token);
        await AsyncStorage.setItem('role', 'hospital');
        await AsyncStorage.setItem('hospital', JSON.stringify(data.data));
        navigation.replace('HospitalDashboard');
      } else {
        Alert.alert('Error', 'Invalid Credentials');
      }
    } catch (error) {
      Alert.alert('Error', error.response?.data?.error || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async () => {
    if (
      !signupData.org_issued_name ||
      !signupData.location ||
      !signupData.npi_id ||
      !signupData.password
    ) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    setLoading(true);
    try {
      const data = await registerHospital(signupData);
      if (data.status === true) {
        Alert.alert('Success', 'Registration successful! You can now log in.', [
          { text: 'OK', onPress: () => setIsLogin(true) },
        ]);
        setSignupData({
          org_issued_name: '',
          location: '',
          state: '',
          country: '',
          contact: '',
          npi_id: '',
          password: '',
        });
      } else {
        Alert.alert('Error', 'Registration failed');
      }
    } catch (error) {
      Alert.alert('Error', error.response?.data?.error || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>MedLock</Text>
          <Text style={styles.logoSubtext}>Hospital Portal</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={[styles.tab, isLogin && styles.activeTab]}
              onPress={() => setIsLogin(true)}>
              <Text style={[styles.tabText, isLogin && styles.activeTabText]}>
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, !isLogin && styles.activeTab]}
              onPress={() => setIsLogin(false)}>
              <Text style={[styles.tabText, !isLogin && styles.activeTabText]}>
                Register
              </Text>
            </TouchableOpacity>
          </View>

          {isLogin ? (
            <View style={styles.formContainer}>
              <Text style={styles.title}>Hospital Login</Text>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>NPI ID</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Hospital NPI ID"
                  value={loginData.npi_id}
                  onChangeText={(text) =>
                    setLoginData({ ...loginData, npi_id: text })
                  }
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Password</Text>
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={styles.passwordInput}
                    placeholder="Enter your password"
                    secureTextEntry={!showPassword}
                    value={loginData.password}
                    onChangeText={(text) =>
                      setLoginData({ ...loginData, password: text })
                    }
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}>
                    <Icon
                      name={showPassword ? 'visibility' : 'visibility-off'}
                      size={24}
                      color={colors.gray400}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity
                style={[styles.button, loading && styles.buttonDisabled]}
                onPress={handleLogin}
                disabled={loading}>
                <Text style={styles.buttonText}>
                  {loading ? 'Logging in...' : 'Login'}
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <ScrollView style={styles.formContainer}>
              <Text style={styles.title}>Register Hospital</Text>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Organization Name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Hospital Name"
                  value={signupData.org_issued_name}
                  onChangeText={(text) =>
                    setSignupData({ ...signupData, org_issued_name: text })
                  }
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Location</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Hospital Address"
                  value={signupData.location}
                  onChangeText={(text) =>
                    setSignupData({ ...signupData, location: text })
                  }
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>State</Text>
                <TextInput
                  style={styles.input}
                  placeholder="State"
                  value={signupData.state}
                  onChangeText={(text) =>
                    setSignupData({ ...signupData, state: text })
                  }
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Country</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Country"
                  value={signupData.country}
                  onChangeText={(text) =>
                    setSignupData({ ...signupData, country: text })
                  }
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Contact</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Contact Number"
                  keyboardType="phone-pad"
                  value={signupData.contact}
                  onChangeText={(text) =>
                    setSignupData({ ...signupData, contact: text })
                  }
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>NPI ID</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Hospital NPI ID"
                  value={signupData.npi_id}
                  onChangeText={(text) =>
                    setSignupData({ ...signupData, npi_id: text })
                  }
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Password</Text>
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={styles.passwordInput}
                    placeholder="Create a strong password"
                    secureTextEntry={!showPassword}
                    value={signupData.password}
                    onChangeText={(text) =>
                      setSignupData({ ...signupData, password: text })
                    }
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}>
                    <Icon
                      name={showPassword ? 'visibility' : 'visibility-off'}
                      size={24}
                      color={colors.gray400}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity
                style={[styles.button, loading && styles.buttonDisabled]}
                onPress={handleSignup}
                disabled={loading}>
                <Text style={styles.buttonText}>
                  {loading ? 'Registering...' : 'Register'}
                </Text>
              </TouchableOpacity>
            </ScrollView>
          )}

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backText}>Back to Home</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.white,
  },
  logoSubtext: {
    fontSize: 14,
    color: colors.white,
    marginTop: 4,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 24,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray200,
    marginBottom: 24,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: colors.primary,
  },
  tabText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.gray400,
  },
  activeTabText: {
    color: colors.textPrimary,
  },
  formContainer: {
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textPrimary,
    textAlign: 'center',
    marginBottom: 24,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.textPrimary,
    marginBottom: 8,
  },
  input: {
    backgroundColor: colors.gray100,
    borderWidth: 1,
    borderColor: colors.gray300,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.gray100,
    borderWidth: 1,
    borderColor: colors.gray300,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: colors.primaryLight,
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  backText: {
    textAlign: 'center',
    color: colors.primary,
    fontSize: 14,
    marginTop: 16,
  },
});

export default HospitalLoginScreen;
