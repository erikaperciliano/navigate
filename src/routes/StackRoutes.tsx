import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Product } from "@/app/Product";
import { Home } from "@/app/Home";

export type StackRoutesList = {
    home: undefined
    product: undefined
}

const Stack = createNativeStackNavigator<StackRoutesList>()

export function StackRoutes() {
    return (
        <Stack.Navigator initialRouteName="home">
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="product" component={Product} />
        </Stack.Navigator>
    )
}