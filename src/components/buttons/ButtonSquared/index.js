import { memo } from 'react';
import { Pressable } from 'react-native';
import styles from './styles';
import { moderateScale, scale } from 'react-native-size-matters';

// Functional component
const ButtonSquared = ({ height, icon, backgroundColor, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        {
          height: moderateScale(height),
          backgroundColor: backgroundColor, 
          borderRadius: moderateScale(height) * 0.2,
        },
      ]}
    >
      {icon}
    </Pressable>
  );
};

// Exporting
export default memo(ButtonSquared);
