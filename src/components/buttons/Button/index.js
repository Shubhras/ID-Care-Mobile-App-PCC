import {memo} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

// Functional component
const Button = ({label, labelColor, backgroundColor, onPress,labelText}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: backgroundColor}]}
      onPress={onPress}>
      <Text style={[styles.label,labelText, {color: labelColor}]}>{label}</Text>
    </TouchableOpacity>
  );
};

// Exporting
export default memo(Button);
