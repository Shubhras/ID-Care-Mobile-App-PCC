import { memo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import {
  FONT_SIZE_XS,
  STANDARD_BUTTON_HEIGHT,
} from '../../../constants/Constants';

// Functional component
const ButtonDashOutlined = ({
  icon,
  buttonHeight,
  backgroundColor,
  iconWrapperBackgroundColor,
  label,
  fontSize,
  labelColor,
  borderColor,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          height: buttonHeight ? buttonHeight : STANDARD_BUTTON_HEIGHT,
          borderColor: borderColor,
          backgroundColor: backgroundColor,
        },
      ]}
      onPress={onPress}
    >
      <View style={styles.buttonIconLabelWrapper}>
        <View
          style={[
            styles.iconWrapper,
            { backgroundColor: iconWrapperBackgroundColor },
          ]}
        >
          {icon}
        </View>
        <Text
          style={[
            styles.label,
            { color: labelColor, fontSize: fontSize ? fontSize : FONT_SIZE_XS },
          ]}
        >
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

// Exporting
export default memo(ButtonDashOutlined);
