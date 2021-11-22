import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Login } from '../screens/login';
import { RoomSelect } from '../screens/room_select';
import { Cam } from '../screens/cam';

const screens = {
    Login: {
        screen: Login
    },
    RoomSelect: {
        screen: RoomSelect
    },
    Cam: {
        screen: Cam
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);