import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Import your screen components
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';

// Create your stack navigator
const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
});

// Create the app container
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
