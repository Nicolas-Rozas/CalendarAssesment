import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { styles } from "./styles";
import { ClockIcon } from "react-native-heroicons/outline";
import { CheckCircleIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const CalendarComponent = () => {
  const [data, setData] = useState<{ calendar: any[] } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigation = useNavigation();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://xjvq5wtiye.execute-api.us-east-1.amazonaws.com/interview/api/v1/challenge"
      );
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError("Failed to fetch data");
      setLoading(false);
    }
  };

  const getBackgroundColor = (status) => {
    switch (status) {
      case "Completed":
        return "#00B47D";
      case "Scheduled":
        return "#006A4B";
      default:
        return "#011638";
    }
  };

  const getMonthName = (month) => {
    if (month >= 0 && month <= 11) {
      return monthNames[month];
    }
    return "Invalid Month";
  };

  const getDayOfWeek = (dateString) => {
    if (!dateString) return "TBD";
    const date = new Date(dateString);
    const dayOfWeek = date.getDay();
    return dayNames[dayOfWeek];
  };

  const getIconComponent = (status) => {
    switch (status) {
      case "Completed":
        return <CheckCircleIcon size={24} color="#00B47D" />;
      case "Scheduled":
        return <ClockIcon size={24} color="#00B47D" />;
      default:
        return null;
    }
  };

  const navigateToDetail = (action: any) => {
    navigation.navigate("Detail", {
      action,
      loading,
      refreshMainPage: fetchData,
    });
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <ActivityIndicator size="large" color="black" />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <Text>Error: {error}</Text>
      </SafeAreaView>
    );
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView horizontal={false}>
        {data?.calendar?.map((monthData) => (
          <View key={`${monthData.month}-${monthData.year}`}>
            <Text style={[styles.monthHeader, styles.monthHeader]}>
              {getMonthName(monthData.month)} {monthData.year}
            </Text>
            {monthData.actions && monthData.actions.length > 0 ? (
              monthData.actions.map((action) => (
                <View key={action.id} style={styles.rowContainer}>
                  <View style={styles.dayIconContainer}>
                    <Text style={styles.dayOfWeekText}>
                      {getDayOfWeek(action.scheduledDate)}
                    </Text>
                    {getIconComponent(action.status)}
                  </View>
                  <TouchableOpacity
                    onPress={() => navigateToDetail(action)}
                    style={[
                      styles.actionContainer,
                      {
                        backgroundColor: getBackgroundColor(
                          action.status || ""
                        ),
                      },
                    ]}
                  >
                    <Text style={styles.titleStyles}>{action.name}</Text>
                    {action.vendor && (
                      <View style={styles.vendorContainer}>
                        <Text style={styles.textStyles}>
                          {action.vendor.vendorName}
                        </Text>
                        <Text style={styles.textStyles}>
                          {action.vendor.phoneNumber}
                        </Text>
                        <Text style={styles.textStyles}>
                          {action.vendor.streetAddress}
                        </Text>
                      </View>
                    )}
                    <Text style={styles.textStyles}>
                      {action.scheduledDate === undefined
                        ? "Schedule date & time TBD"
                        : action.status}
                    </Text>
                  </TouchableOpacity>
                </View>
              ))
            ) : (
              <View style={{ ...styles.actionContainer, marginLeft: 50 }}>
                <Text style={styles.titleStyles}>No Maintenance Scheduled</Text>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CalendarComponent;
