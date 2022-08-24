import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Detail from './Detail';

export const HomeStack = createNativeStackNavigator();

function HomeStackScreen({ navigation }) {

    return (
        <HomeStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <HomeStack.Screen name="Home" component={Home} />
            <HomeStack.Screen name="Detail" component={Detail} />
        </HomeStack.Navigator>
    );
}

export { HomeStackScreen};