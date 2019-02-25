import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import EventListScreen from './EventListScreen';
import FavoriteEventScreen from './FavoriteEventScreen';
import UserScreen from './UserScreen';
import SettingScreen from './SettingScreen';
import NotificationScreen from './NotificationScreen';

const TabNavigator = createBottomTabNavigator(
  {
    EventList: EventListScreen,
    FavoriteEvent: FavoriteEventScreen,
    Notification: NotificationScreen,
    User: UserScreen
  },
  {
    tabBarOptions: {
      activeTintColor: '#000',
      labelStyle: {
        fontSize: 10,
      },
      style: {
        backgroundColor: 'white',
      },
    }
  }
);

export default createAppContainer(TabNavigator);
