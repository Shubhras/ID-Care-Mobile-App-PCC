import React from 'react';
import { FlatList, View } from 'react-native';
import NutritionItemCard from '../../components/cards/NutritionItemCard';
import Colors from '../../constants/Colors';
import styles from './styles';

const nutrition = [
  {
    id: '1',
    orderId: '2577688',
    dietType: 'Cardiac/CCD',
    directions: '',
    fluidConsistency: 'Thin',
    texture: 'Chopped',
    startDate: '04/25/2026',
    endDate: '-',
    orderedBy: 'Tessema, Zina',
    status: 'Active',
    orderDate: '04/24/2026',
    iconType: 'nutrition',
  },
];

const NutritionScreen = () => {
  const renderItem = ({ item, index }) => {
    return (
      <View
        style={[
          styles.listViewItemCardComponentWrapper,
          index === 0 && styles.listViewItemCardComponentWrapperWithMarginTop,
        ]}
      >
        <NutritionItemCard
          cardBackgroundColor={Colors.white}
          medicationBackgroundColor={Colors.lightPurple}
          dietTypeLabel={item.dietType}
          dietTypeLabelColor={Colors.textHighContrast}
          textureLabel={item.texture}
          textureLabelColor={Colors.textHighContrast}
          fluidConsistency={item.fluidConsistency}
          fluidConsistencyColor={Colors.textLowContrast}
          status={item.status}
          statusColor={item.status === 'Active' ? Colors.success : Colors.error}
          statusBackgroundColor={
            item.status === 'Active' ? Colors.lightGreen : Colors.redLightest
          }
          itemId={item.orderId}
          directions={item.directions}
          itemStartDate={item.startDate}
          itemEndDate={item.endDate}
          itemOrderDate={item.orderDate}
          itemLableColor={Colors.textHighContrast}
          itemValueColor={Colors.textLowContrast}
          createdDateLableColor={Colors.textHighContrast}
          itemCreatedDate={item.createdDate}
          itemCreatedDateLColor={Colors.textLowContrast}
        />
      </View>
    );
  };

  return (
    <View style={[styles.mainWrapper, { backgroundColor: Colors.secondary }]}>
      <FlatList
        bounces={false}
        overScrollMode="never"
        data={nutrition}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewWrapper}
      />
    </View>
  );
};

export default NutritionScreen;
