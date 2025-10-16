import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, Animated, View } from 'react-native';
import { FONT_SIZE_MD, OPEN_SANS_MEDIUM, SCREEN_HEIGHT,STANDARD_SPACING } from '../../constants/Constants'
import { scale } from 'react-native-size-matters';

const CustomToast = ({
  visible,
  message,
  onHide,
  backgroundColor,
  colorText,
  
}) => {
  const [bottom] = useState(new Animated.Value(-100));

  useEffect(() => {
    if (visible) {
      // Slide up
      Animated.timing(bottom, {
        toValue: 45, // distance from bottom
        duration: 300,
        useNativeDriver: false,
      }).start();

      // Auto hide after 2 sec
      setTimeout(() => {
        Animated.timing(bottom, {
          toValue: -60,
          duration: 300,
          useNativeDriver: false,
        }).start(() => {
          onHide?.();
        });
      }, 3000);
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <View style={[styles.toast, { backgroundColor }]}>
      <Text style={[styles.text, { color: colorText }]}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  toast: {
    alignSelf: 'center',
    position: 'absolute',
    flexDirection: 'row',
    paddingHorizontal: STANDARD_SPACING * 2,
    paddingVertical: STANDARD_SPACING * 2,
    borderRadius: scale(6),
    shadowColor: '#000',
    bottom: SCREEN_HEIGHT * 0.1,
    backgroundColor: 'black',
    zIndex: 1
  },
  text: {
    fontFamily: OPEN_SANS_MEDIUM,
    fontSize: FONT_SIZE_MD,
    textAlign: "center",

  },
});

export default CustomToast;