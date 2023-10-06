import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FC, memo } from 'react';
import { bottomTabsRoute } from '../types/navigation';
import { BottomTabsNavigator } from './BottomTabsNavigator';

const RootStack = createNativeStackNavigator();

const Navigation: FC = memo(() => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name={bottomTabsRoute}
          component={BottomTabsNavigator}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
});

Navigation.displayName = 'Navigation';

export { Navigation };
