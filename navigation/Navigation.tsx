import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FC, memo } from 'react';
import { homeStackRoute } from '../types/navigation';
import { HomeStackNavigator } from './HomeStackNavigator';

const RootStack = createNativeStackNavigator();

const Navigation: FC = memo(() => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name={homeStackRoute}
          component={HomeStackNavigator}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
});

Navigation.displayName = 'Navigation';

export { Navigation };
