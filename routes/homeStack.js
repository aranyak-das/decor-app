import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Login from '../screens/login';
import RoomSelect from '../screens/room_select';

const screens = {
    Login: {
        screen: Login
    },
    RoomSelect: {
        screen: RoomSelect
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);