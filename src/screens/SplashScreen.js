/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {StyleSheet, Animated, Easing} from 'react-native';

const SplashScreen = ({navigation}) => {
  const animation = new Animated.Value(0);
  const cardScales = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0.8, 1, 0.8],
  });
  const introImage = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [-1000, 0],
  });

  const onInit = () => {
    Animated.spring(animation, {
      toValue: 1,
      friction: 2,
      duration: 2000,
      easing: Easing.circle,
    }).start();
  };

  useEffect(() => {
    onInit();
    setTimeout(() => {
      navigation.navigate('Home');
    }, 5000);
  }, []);

  return (
    <Animated.View style={styles.container}>
      <Animated.Image
        style={{
          width: '70%',
          alignSelf: 'center',
          resizeMode: 'contain',
          marginBottom: introImage,
          transform: [{scale: cardScales}],
        }}
        source={require('../assets/torum.jpeg')}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default SplashScreen;
