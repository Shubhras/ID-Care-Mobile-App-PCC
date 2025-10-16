import { memo } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { CustomText } from '../../global/CustomComponents';

// Functional component
const Button = ({ label, labelColor, backgroundColor, onPress, labelText }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: backgroundColor }]}
      onPress={onPress}
    >
      <CustomText style={[styles.label, labelText, { color: labelColor }]}>
        {label}
      </CustomText>
    </TouchableOpacity>
  );
};

// Exporting
export default memo(Button);
