import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile63730Navigator from '../features/UserProfile63730/navigator';
import Maps63711Navigator from '../features/Maps63711/navigator';
import Settings63689Navigator from '../features/Settings63689/navigator';
import Settings63674Navigator from '../features/Settings63674/navigator';
import NotificationList63673Navigator from '../features/NotificationList63673/navigator';
import Maps63672Navigator from '../features/Maps63672/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile63730: { screen: UserProfile63730Navigator },
Maps63711: { screen: Maps63711Navigator },
Settings63689: { screen: Settings63689Navigator },
Settings63674: { screen: Settings63674Navigator },
NotificationList63673: { screen: NotificationList63673Navigator },
Maps63672: { screen: Maps63672Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
