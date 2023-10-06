import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FC, memo } from 'react';
import { HomeScreen } from '../screens/HomeScreen';
import { homeRoute, textInputRoute } from '../types/navigation';
import { TextInputScreen } from '../screens/TextInputScreen';

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator: FC = memo(() => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name={homeRoute} component={HomeScreen} />
      <HomeStack.Screen name={textInputRoute} component={TextInputScreen} />
    </HomeStack.Navigator>
  );
});

export { HomeStackNavigator };
