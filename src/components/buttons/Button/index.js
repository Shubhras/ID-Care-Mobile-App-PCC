import { memo } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import ButtonCircled from '../ButtonCircled';
import { CustomText } from '../../global/CustomComponents';
import { moderateScale } from 'react-native-size-matters';

// Functional component
const Button = ({
  label,
  labelColor,
  backgroundColor,
  onPress,
  labelText,
  isLoading,
}) => {
  return (
    <>
      {isLoading ? (
        <View style={styles.loadingWrapper}>
          <ButtonCircled
          height={45}
          icon={<ActivityIndicator size={'small'} color={labelColor} />}
          backgroundColor={backgroundColor}
        />
        </View>
      ) : (
        <TouchableOpacity
          style={[styles.button, { backgroundColor: backgroundColor }]}
          onPress={onPress}
        >
          <CustomText style={[styles.label, labelText, { color: labelColor }]}>
            {label}
          </CustomText>
        </TouchableOpacity>
      )}
    </>
  );
};

// Exporting
export default memo(Button);
