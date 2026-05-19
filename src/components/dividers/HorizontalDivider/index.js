import { memo } from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { CustomText } from '../../../components/global/CustomComponents';
import styles from './styles';

// Functional component
const HorizontalDivider = ({
  leftLineColors,
  label,
  labelColor,
  rightLineColors,
  lineColors,
}) => {
  return (
    <View style={styles.dividerWrapper}>
      {label ? (
        <>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={leftLineColors}
            style={[styles.dividerLine, styles.dividerLineLeft]}
          />
          <CustomText style={[styles.dividerLabel, { color: labelColor }]}>
            {label}
          </CustomText>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={rightLineColors}
            style={[styles.dividerLineRight, styles.dividerLine]}
          />
        </>
      ) : (
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={lineColors}
          style={styles.lineDivider}
        />
      )}
    </View>
  );
};

// Exporting
export default memo(HorizontalDivider);
