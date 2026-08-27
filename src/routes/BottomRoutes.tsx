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
        <Tab.Navigator
            initialRouteName="home"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#2C46B1',
                tabBarInactiveTintColor: '#444444',
                tabBarLabelPosition: 'beside-icon',
            }}
        >
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="home" color={color} size={size}/>
                    ),
                    tabBarLabel: 'Início'
                }}
            />
            <Tab.Screen
                name="product"
                component={Product}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="add-circle" color={color} size={size}/>
                    ),
                    tabBarLabel: 'Produto'
                }}
            />
        </Tab.Navigator>
    )
}