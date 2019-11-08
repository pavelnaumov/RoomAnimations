import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import World from './World';
import BubblePickerRoom from './BubblePickerRoom';

const AppNavigator = createStackNavigator(
  {
    World: World,
    Bubbles: BubblePickerRoom,
  },
  {
    initialRouteName: 'Bubbles',
  },
);

export default createAppContainer(AppNavigator);
