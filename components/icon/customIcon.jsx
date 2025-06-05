import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';

// options
const CustomIcon = ({ name, iconStyle }) => {
  return (
      <Ionicons name={name} style={iconStyle} />
  );
}

export default CustomIcon;