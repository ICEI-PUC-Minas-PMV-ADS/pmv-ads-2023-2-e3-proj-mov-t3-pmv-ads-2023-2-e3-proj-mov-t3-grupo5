import { Platform } from 'react-native';
import { useTheme } from 'native-base';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import HomeSvg from '@assets/home.svg';
import DetailSvg from '@assets/detail.svg';
import ProfileSvg from '@assets/profile.svg';

import { Home } from '@screens/Home';
import { OrderDetailing } from '@screens/OrderDetailing';
import { Profile } from '@screens/Profile';

type AppRoutes = {
    home: undefined;
    orderDetailing: undefined;
    profile: undefined;
  }

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {

    const { sizes, colors } = useTheme();

    const iconSize = sizes[7];

  return (
    <Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.blue[500],
        tabBarInactiveTintColor: colors.gray[200],
        tabBarStyle: {
            backgroundColor: colors.gray[600],
            borderTopWidth: 0,
            height: Platform.OS === "android" ? 'auto' : 96,
            paddingBottom: sizes[10],
            paddingTop: sizes[7]
          }
    }}>
      <Screen 
        name='home'
        component={Home}
        options={{
            tabBarIcon: ({ color }) => (
                <HomeSvg fill={color} width={iconSize} height={iconSize} />
              )

        }}
      />

      <Screen 
        name='orderDetailing'
        component={OrderDetailing}
        options={{
            tabBarIcon: ({ color }) => (
                <DetailSvg fill={color} width={iconSize} height={iconSize} />
              )

        }}
      />

      <Screen 
        name='profile'
        component={Profile}
        options={{
            tabBarIcon: ({ color }) => (
                <ProfileSvg fill={color} width={iconSize} height={iconSize} />
              )

        }}
      />

    </Navigator>
  );
}