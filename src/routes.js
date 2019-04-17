import { createStackNavigator, createAppContainer } from 'react-navigation'
import Main from './pages/main'

const rootStack = createStackNavigator({
    Main,
},
{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:"#2196F3"
        },
        headerTintColor:"#FFF",
    }
});

const App  = createAppContainer(rootStack);

export default App;