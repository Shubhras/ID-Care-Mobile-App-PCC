import { memo } from 'react';
import { Pressable } from 'react-native';
import styles from './styles';
import { scale } from 'react-native-size-matters';

// Functional component
const ButtonSquared = ({ height, icon, backgroundColor, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        {
          height: scale(height),
          backgroundColor: backgroundColor,
          borderRadius: height * 0.2,
        },
      ]}
    >
      {icon}
    </Pressable>
  );
};

// Exporting
export default memo(ButtonSquared);
