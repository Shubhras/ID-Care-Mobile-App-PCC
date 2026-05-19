import React, { FC, ReactNode, useCallback } from 'react';
import { Platform, StatusBar, StyleSheet, View, ViewStyle } from 'react-native';
import { SafeAreaView, Edge } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import Colors from '../../constants/Colors';

interface CustomSafeAreaViewProps {
  statusBarBackgroundColor?: string;
  barStyle?: 'default' | 'light-content' | 'dark-content';
  children: ReactNode;
  style?: ViewStyle;
  edges?: Edge[];
}

/**
 * CustomSafeAreaView
 * - Handles SafeArea and StatusBar behavior consistently across screens
 * - Optional props for backgroundColor, barStyle, and container style
 */
const CustomSafeAreaView: FC<CustomSafeAreaViewProps> = ({
  statusBarBackgroundColor = Colors.white,
  barStyle = 'dark-content',
  edges,
  children,
  style,
}) => {
  // Update StatusBar when screen is focused
  useFocusEffect(
    useCallback(() => {
      if (Platform.OS === 'android') {
        StatusBar.setBackgroundColor(statusBarBackgroundColor, true);
      }
      StatusBar.setBarStyle(barStyle, true);
    }, [statusBarBackgroundColor, barStyle]),
  );

  return (
    <SafeAreaView
      edges={edges ? edges : ['top']}
      style={[
        styles.container,
        { backgroundColor: statusBarBackgroundColor },
        style,
      ]}
    >
      <StatusBar
        backgroundColor={statusBarBackgroundColor}
        barStyle={barStyle}
      />
      <View style={styles.inner}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
  },
});

export default CustomSafeAreaView;
