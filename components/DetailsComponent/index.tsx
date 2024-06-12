import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { styles } from "./styles";

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

export default function DetailComponent({ route, navigation }) {
  const { action, loading, refreshMainPage } = route.params;
  const [editableName, setEditableName] = useState(action.name);

  const getMonthName = (month) => {
    if (month >= 0 && month <= 11) {
      return monthNames[month];
    }
    return "Invalid Month";
  };

  const formattedDate = () => {
    const date = new Date(action.scheduledDate);
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();
    return `${getMonthName(month)} ${day}, ${year}`;
  };

  const handleSaveChanges = async () => {
    try {
      const updatedAction = {
        ...action,
        name: editableName,
      };
      const response = await axios.post(
        "https://xjvq5wtiye.execute-api.us-east-1.amazonaws.com/interview/api/v1/challenge",
        { name: editableName }
      );
      navigation.goBack();

      if (refreshMainPage) {
        refreshMainPage();
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="black" />
      </SafeAreaView>
    );
  }

  return (
    <View style={{ backgroundColor: "white", flex: 1, padding: 20 }}>
      <View style={styles.dateStatusContainer}>
        <Text style={styles.label}>{formattedDate()}</Text>
        <Text style={styles.label}>{action.status}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={editableName}
          onChangeText={setEditableName}
        />
      </View>
      <View style={{ marginTop: 21 }}>
        <Text style={styles.subTitleStyles}>Provided by</Text>
        <Text style={styles.textStyles}>{action.vendor.vendorName}</Text>
        <Text style={{ ...styles.textStyles, color: "#00B47D" }}>
          {action.vendor.phoneNumber}
        </Text>
      </View>
      <View style={{ marginTop: 21 }}>
        <Text style={styles.subTitleStyles}>Address</Text>
        <Text style={styles.textStyles}>{action.vendor.streetAddress}</Text>
        <Text style={styles.textStyles}>
          {action.vendor.city}, {action.vendor.zip}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSaveChanges} style={styles.saveButton}>
          <Text style={styles.buttonText}>SAVE CHANGES</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
