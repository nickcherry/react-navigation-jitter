import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FC, memo } from 'react';
import { HomeStackNavigator } from './HomeStackNavigator';
import { homeStackRoute } from '../types/navigation';

const BottomTab = createBottomTabNavigator();

const BottomTabsNavigator: FC = memo(() => {
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }}>
      <BottomTab.Screen name={homeStackRoute} component={HomeStackNavigator} />
    </BottomTab.Navigator>
  );
});

export { BottomTabsNavigator };
