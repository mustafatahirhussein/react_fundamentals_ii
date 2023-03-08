import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomePage from '../views/home_page';

const Drawer = createDrawerNavigator();

function AppDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='HomePage' component={HomePage}/>
        </Drawer.Navigator>
    )
}

export default AppDrawer;