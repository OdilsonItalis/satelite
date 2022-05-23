import React from 'react';
import {View, Text, Image} from 'react-native';

import {styles} from './styles';

const InputScreen = () => {
  return (
    <View style={styles.screen}>
      <Image
        style={styles.backgroundImage}
        source={require('../../assets/images/logo.png')}
      />
    </View>
  );
};

export default InputScreen;
