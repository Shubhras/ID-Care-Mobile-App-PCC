import { View, ImageBackground, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './styles';
 
// Functional component
const Splash = () => {
  return (
    <Animatable.View
      style={[styles.mainWrapper]}
      delay={100}
      animation="fadeIn"
      easing="ease-in-out-sine"
      useNativeDriver={true}
    >
      {/* StatusBar */}
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content" // or "dark-content" based on your background
      />
      {/* Image background */}
      <ImageBackground
        source={require('../../assets/images/backgrounds/splash_bg.png')}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <View style={styles.imageBackgroundOverlay}>
          {/* Logo wrapper */}
          <View style={styles.logoWrapper}>
            {/* Logo */}
            <Animatable.Image
              source={require('../../assets/images/logo.png')}
              style={styles.logo}
              delay={600}
              animation="fadeInDown"
              easing="ease-in-out-back"
              useNativeDriver={true}
            />
          </View>
          {/* Title wrapper */}
          <View style={styles.titleWrapper}>
            {/* Title */}
            <Animatable.Text
              style={styles.title}
              delay={1100}
              animation="fadeInLeft"
              easing="ease-in-out-sine"
              useNativeDriver={true}
            >
              ID CARE{' '}
            </Animatable.Text>
            {/* Title highlighted */}
            {/* <Animatable.Text
              style={[styles.title, styles.titleHighlighted]}
              delay={1600}
              animation="fadeInRight"
              easing="ease-in-out-sine"
              useNativeDriver={true}>
              Service
            </Animatable.Text> */}
          </View>
          {/* Message */}
          <Animatable.Text
            style={styles.message}
            delay={2100}
            animation="fadeInUp"
            easing="ease-in-out-back"
            useNativeDriver={true}
          >
            App For Both iOS & Android
          </Animatable.Text>
        </View>
      </ImageBackground>
    </Animatable.View>
  );
};

// Exporting
export default Splash;
