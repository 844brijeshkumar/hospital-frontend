import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useSelector } from 'react-redux';
import { colors } from '../../styles/colors';
import { formatDate, getCategoryIcon, getPriorityColor } from '../../utils/helpers';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PatientMedicalHistoryScreen = () => {
  const reports = useSelector((state) => state.patient.reports);

  const getPriorityBgColor = (priority) => {
    const color = getPriorityColor(priority);
    return `${color}20`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Medical Reports</Text>
      </View>

      <ScrollView style={styles.content}>
        {reports.map((report) => (
          <TouchableOpacity key={report.id} style={styles.reportCard}>
            <View style={styles.reportHeader}>
              <Text style={styles.categoryIcon}>
                {getCategoryIcon(report.category)}
              </Text>
              <View style={styles.reportTitleContainer}>
                <Text style={styles.reportTitle}>{report.title}</Text>
                <Text style={styles.reportDate}>{formatDate(report.date)}</Text>
              </View>
              <View
                style={[
                  styles.priorityBadge,
                  { backgroundColor: getPriorityBgColor(report.priority) },
                ]}>
                <Text
                  style={[
                    styles.priorityText,
                    { color: getPriorityColor(report.priority) },
                  ]}>
                  {report.priority}
                </Text>
              </View>
            </View>

            <View style={styles.reportDetails}>
              <View style={styles.detailRow}>
                <Icon name="person" size={16} color={colors.textSecondary} />
                <Text style={styles.detailText}>{report.doctorName}</Text>
              </View>
              <View style={styles.detailRow}>
                <Icon name="local-hospital" size={16} color={colors.textSecondary} />
                <Text style={styles.detailText}>{report.hospital}</Text>
              </View>
            </View>

            <Text style={styles.reportDescription}>{report.description}</Text>

            <View style={styles.tagsContainer}>
              {report.tags.map((tag, index) => (
                <View key={index} style={styles.tag}>
                  <Text style={styles.tagText}>{tag}</Text>
                </View>
              ))}
            </View>
          </TouchableOpacity>
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
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  reportCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  reportHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  categoryIcon: {
    fontSize: 32,
    marginRight: 12,
  },
  reportTitleContainer: {
    flex: 1,
  },
  reportTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  reportDate: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
  },
  priorityBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  priorityText: {
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  reportDetails: {
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  detailText: {
    fontSize: 14,
    color: colors.textSecondary,
    marginLeft: 8,
  },
  reportDescription: {
    fontSize: 14,
    color: colors.textPrimary,
    lineHeight: 20,
    marginBottom: 12,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    backgroundColor: colors.gray100,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  tagText: {
    fontSize: 12,
    color: colors.textSecondary,
  },
});

export default PatientMedicalHistoryScreen;
