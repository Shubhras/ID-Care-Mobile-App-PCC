import { memo } from 'react';
import { Pressable } from 'react-native';
import styles from './styles';
import { moderateScale, scale } from 'react-native-size-matters';

// Functional component
const ButtonCircled = ({ height, icon, backgroundColor, onPress, opacity }) => {
  return (
    <Pressable
      style={[
        styles.button,
        {
          height: moderateScale(height),
          backgroundColor: backgroundColor,
          borderRadius: moderateScale(height / 2),
          opacity: opacity,
        },
      ]}
      onPress={onPress}
    >
      {icon}
    </Pressable>
  );
};

// Exporting
export default memo(ButtonCircled);
