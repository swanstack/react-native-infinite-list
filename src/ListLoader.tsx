import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  type ActivityIndicatorProps,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

export interface ListLoaderProps extends ActivityIndicatorProps {
  containerStyle?: StyleProp<ViewStyle>;
}

const ListLoader: React.FC<ListLoaderProps> = ({
  containerStyle,
  size = 'large',
  ...props
}) => {
  return (
    <View pointerEvents="none" style={[styles.container, containerStyle]}>
      <ActivityIndicator size={size} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ListLoader;
