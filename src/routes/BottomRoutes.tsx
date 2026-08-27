import { createBottomTabNavigator, BottomTabScreenProps } from "@react-navigation/bottom-tabs";

import { Product } from "@/app/Product";
import { Home } from "@/app/Home";
import { MaterialIcons } from "@expo/vector-icons";

export type BottomRoutesList = {
    home: undefined
    product: undefined |  { id: string }
}

export type BottomRoutesProps<T extends keyof BottomRoutesList> = BottomTabScreenProps<BottomRoutesList, T>

const Tab = createBottomTabNavigator<BottomRoutesList>()

export function BottomRoutes() {
    return (
        <Tab.Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="home" color={color} size={size}/>
                    ),
                    tabBarLabel: 'Home'
                }}
            />
            <Tab.Screen
                name="product"
                component={Product}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="shopping-bag" color={color} size={size}/>
                    ),
                    tabBarLabel: 'Produto'
                }}
            />
        </Tab.Navigator>
    )
}