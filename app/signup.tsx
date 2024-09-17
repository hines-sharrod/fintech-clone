import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { defaultStyles } from "../constants/Styles";
import Colors from "../constants/Colors";

const Signup = () => {
  const [countryCode, setCountryCode] = useState("+49");
  const [mobileNumber, setMobileNumber] = useState("");
  const onSignup = async () => {};

  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.header}>Let's Get Started!</Text>
      <Text style={defaultStyles.descriptionText}>
        Enter your phone number. We will send you a confirmation there
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Country Code"
          placeholderTextColor={Colors.gray}
          value={countryCode}
          onChangeText={setCountryCode}
        />
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Mobile Number"
          placeholderTextColor={Colors.gray}
          keyboardType="numeric"
          value={mobileNumber}
          onChangeText={setMobileNumber}
        />
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 40,
    flexDirection: "row",
    gap: 10,
  },
  input: {
    backgroundColor: Colors.lightGray,
    borderRadius: 16,
    padding: 20,
    fontSize: 20,
  },
});
