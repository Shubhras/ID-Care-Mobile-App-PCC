import { memo } from 'react';
import { View, Image } from 'react-native';
import { CustomText } from '../../global/CustomComponents';
import styles from './styles';
import Colors from '../../../constants/Colors';
import ButtonCircled from '../../buttons/ButtonCircled';
import { STANDARD_BORDER_WIDTH } from '../../../constants/Constants';

const PatientProfileItemCard = ({
  image,
  title,
  value,
  isLastItem = false,
}) => {
  return (
    <View
      style={[
        styles.cardWrapper,
        {
          borderBottomWidth: isLastItem ? 0 : STANDARD_BORDER_WIDTH,
        },
      ]}
      onPress={() => onPress(index)}
    >
      <View style={styles.imageAndLabelWrapper}>
        <ButtonCircled
          height={30}
          icon={<Image style={styles.image} source={image} />}
          backgroundColor={Colors.lightPurple}
        />

        <CustomText style={[styles.label, { color: Colors.textHighContrast }]}>
          {title}
        </CustomText>
      </View>
      <View style={styles.valueWrapper}>
        <CustomText style={[styles.value, { color: Colors.textLowContrast }]}>
          {value}
        </CustomText>
      </View>
    </View>
  );
};

export default memo(PatientProfileItemCard);
