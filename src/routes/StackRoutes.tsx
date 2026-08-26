import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Product } from "@/app/Product";
import { Home } from "@/app/Home";

const Stack = createNativeStackNavigator()

export function StackRouters() {
    return (
        <Stack.Navigator initialRouteName="home">
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="product" component={Product} />
        </Stack.Navigator>
    )
}