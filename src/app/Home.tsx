import { View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { StackRoutesList } from '@/routes/StackRoutes'
import { Header } from "@/components/Header";
import { Title } from '@/components/Title'
import { ButtonIcon } from "@/components/ButtonIcon";


type HomeProps = NativeStackScreenProps<StackRoutesList, 'home'>

export function Home({ navigation }: HomeProps) {

    return (
        <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
            <Header>
                <Title>Home</Title>
                <ButtonIcon name="add-circle" onPress={() => navigation.navigate('product')}/>
            </Header>
        </View>
    )
}