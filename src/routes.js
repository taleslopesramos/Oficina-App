import { createStackNavigator, createAppContainer } from 'react-navigation'
import Main from './pages/main'

const rootStack = createStackNavigator({
    Main,
});

const App  = createAppContainer(rootStack);

export default App;