import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { registerUser, loginUser } from '../../api/auth';
import { colors } from '../../styles/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PatientLoginScreen = ({ navigation }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [loginData, setLoginData] = useState({
    adhaar_no: '',
    password: '',
  });

  const [signupData, setSignupData] = useState({
    name: '',
    phone_no: '',
    gmail: '',
    adhaar_no: '',
    password: '',
  });

  const handleLogin = async () => {
    if (!loginData.adhaar_no || !loginData.password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      const data = await loginUser(loginData);
      if (data.status === true) {
        await AsyncStorage.setItem('token', data.token);
        await AsyncStorage.setItem('role', 'patient');
        await AsyncStorage.setItem('patient', JSON.stringify(data.data));
        navigation.replace('PatientDashboard');
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
      !signupData.name ||
      !signupData.phone_no ||
      !signupData.gmail ||
      !signupData.adhaar_no ||
      !signupData.password
    ) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      const data = await registerUser(signupData);
      if (data.status === true) {
        Alert.alert('Success', 'Registration successful! You can now log in.', [
          { text: 'OK', onPress: () => setIsLogin(true) },
        ]);
        setSignupData({
          name: '',
          phone_no: '',
          gmail: '',
          adhaar_no: '',
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
          <Text style={styles.logoSubtext}>Centralized Medical Reports</Text>
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
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>

          {isLogin ? (
            <View style={styles.formContainer}>
              <Text style={styles.title}>Login with Aadhaar</Text>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Aadhaar Number</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your 12-digit Aadhaar number"
                  keyboardType="numeric"
                  maxLength={12}
                  value={loginData.adhaar_no}
                  onChangeText={(text) =>
                    setLoginData({ ...loginData, adhaar_no: text })
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
            <View style={styles.formContainer}>
              <Text style={styles.title}>Create an Account</Text>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Full Name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your full name"
                  value={signupData.name}
                  onChangeText={(text) =>
                    setSignupData({ ...signupData, name: text })
                  }
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Phone Number</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your phone number"
                  keyboardType="phone-pad"
                  maxLength={10}
                  value={signupData.phone_no}
                  onChangeText={(text) =>
                    setSignupData({ ...signupData, phone_no: text })
                  }
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Email Address</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your email address"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={signupData.gmail}
                  onChangeText={(text) =>
                    setSignupData({ ...signupData, gmail: text })
                  }
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Aadhaar Number</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your 12-digit Aadhaar number"
                  keyboardType="numeric"
                  maxLength={12}
                  value={signupData.adhaar_no}
                  onChangeText={(text) =>
                    setSignupData({ ...signupData, adhaar_no: text })
                  }
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Create Password</Text>
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
                  {loading ? 'Signing up...' : 'Sign Up'}
                </Text>
              </TouchableOpacity>
            </View>
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

export default PatientLoginScreen;
