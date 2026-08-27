import { View } from "react-native";

import { Header } from "@/components/Header";
import { Title } from '@/components/Title'
import { ButtonIcon } from "@/components/ButtonIcon";
import { BottomRoutesProps } from "@/routes/BottomRoutes";


export function Home({ navigation }: BottomRoutesProps<'home'>) {

    return (
        <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
            <Header>
                <Title>Home</Title>
                <ButtonIcon name="add-circle" onPress={() => navigation.navigate('product', { id: '6' })}/>
            </Header>
        </View>
    )
}