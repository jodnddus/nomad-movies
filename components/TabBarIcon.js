import React from "react";
import PropsTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import { ACTIVE_COLOR, INACTIVE_COLOR } from "../constants/Colors";

export const TabBarIcon = ({ name, focused }) => {
  return (
    <Ionicons
      size={26}
      name={name}
      color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
    />
  );
};

TabBarIcon.propTypes = {
  name: PropsTypes.string.isRequired,
  focused: PropsTypes.bool.isRequired
};
