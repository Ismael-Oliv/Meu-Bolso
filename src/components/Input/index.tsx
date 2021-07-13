import { TextInput } from "react-native";

import React from "react";
import { StyleSheet } from "react-native";

export function Input() {
  return <TextInput style={style.input} />;
}

const style = StyleSheet.create({
  input: {
    marginTop: 30,
    width: 200,
    height: 40,
    backgroundColor: "gray",
    borderRadius: 5,
    padding: 5,
  },
});
