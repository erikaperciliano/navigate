import { NavigationContainer } from "@react-navigation/native";

import { StackRouters } from "./StackRoutes";

export function Routes() {
    return (
        <NavigationContainer>
            <StackRouters />
        </NavigationContainer>
    )
}