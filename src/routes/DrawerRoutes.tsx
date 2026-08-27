import { createDrawerNavigator, DrawerScreenProps } from "@react-navigation/drawer";

import { Product } from "@/app/Product";
import { Home } from "@/app/Home";
import { MaterialIcons } from "@expo/vector-icons";

export type DrowerRoutesList = {
    home: undefined
    product: undefined |  { id: string }
}

export type DrawerRoutesProps<T extends keyof DrowerRoutesList> = DrawerScreenProps<DrowerRoutesList, T>

const Drawer = createDrawerNavigator<DrowerRoutesList>()

export function DrawerRoutes() {
    return (
        <Drawer.Navigator
            initialRouteName="home"
            screenOptions={{
                headerShown: false,
                drawerActiveTintColor: '#2C46B1',
                drawerInactiveTintColor: '#444444',
            }}
        >
            <Drawer.Screen
                name="home"
                component={Home}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <MaterialIcons name="home" color={color} size={size}/>
                    ),
                    drawerLabel: 'Início'
                }}
            />
            <Drawer.Screen
                name="product"
                component={Product}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <MaterialIcons name="add-circle" color={color} size={size}/>
                    ),
                    drawerLabel: 'Produto'
                }}
            />
        </Drawer.Navigator>
    )
}