import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import HojaVida from "./screens/HojaVida";
import Login from './screens/Login'
import RegisterComponent from './screens/RegisterComponet'
import Inicio from './screens/Inicio'

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Inicio" component={Inicio} />
            <Tab.Screen name="Hoja de Vida" component={HojaVida} />
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Register" component={RegisterComponent} />
        </Tab.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}