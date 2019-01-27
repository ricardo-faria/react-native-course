import { createStackNavigator, createAppContainer} from 'react-navigation'
import HomeScreen from './src/screens/HomeScreen/index'
import TripsScreen from './src/screens/TripsScreen/index'
import TripScreen from './src/screens/TripScreen';

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Trips: TripsScreen,
  Trip: TripScreen
},{ initialRouteName : 'Trips'})

export default createAppContainer(AppNavigator)

