import React from 'react';
import { ActivityIndicator } from 'react-native';
import { View } from 'react-native';
import { theme } from '../../global/styles/theme';

import { styles } from './styles';

export function Load() {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size="large"
        color={theme.colors.primary}
      />
    </View>
  );
}
