import { NavigationProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FC, memo } from 'react';
import { Text, View } from 'react-native';
import { FullParamList } from '../types/navigation';

const HomeScreen: FC<{
  navigation: NativeStackNavigationProp<FullParamList>;
}> = memo(({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        style={{ color: 'blue', textAlign: 'center' }}
        onPress={() => {
          navigation.push('TextInput', {});
        }}
      >
        Press me
      </Text>
    </View>
  );
});

export { HomeScreen };
