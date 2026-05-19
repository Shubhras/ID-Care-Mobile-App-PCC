import {memo} from 'react';
import {View} from 'react-native';
import styles from './styles';
import { CustomText } from '../../global/CustomComponents';

// Functional component
const BadgePill = ({label, labelColor, fontSize, backgroundColor}) => {
  return (
    <View style={[styles.badge, {backgroundColor: backgroundColor}]}>
      <CustomText style={[styles.label, {color: labelColor, fontSize: fontSize}]}>{label}</CustomText>
    </View>
  );
};

// Exporting
export default memo(BadgePill);
