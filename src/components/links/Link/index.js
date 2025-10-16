import { memo } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { CustomText } from '../../global/CustomComponents';

// Functional component
const Link = ({ label, labelColor, onPress, underline, fontSize }) => {
  // Returning
  return (
    <TouchableOpacity onPress={onPress}>
      <CustomText
        style={[
          styles.style,
          {
            color: labelColor,
            textDecorationLine: underline ? 'underline' : null,
            fontSize: fontSize,
          },
        ]}
      >
        {label}
      </CustomText>
    </TouchableOpacity>
  );
};

// Exporting
export default memo(Link);
