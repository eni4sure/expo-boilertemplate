import React from "react";
import { View } from "react-native";
import { Stack } from "@src/components";
import { TextInput, Image, Text, Button } from "@src/components";

export default function App() {
    return (
        <View className="flex-1 justify-center mx-2">
            <Stack direction="column" spacing={20}>
                <Text>expo-boilertemplate !!</Text>

                <View>
                    <Button title="Button" />
                </View>

                <View>
                    <TextInput label="Text" placeholder="TextInput" keyboardType="default" inputContainerStyle={{ width: "100%" }} />
                </View>

                <Image source={require("@src/assets/expo/icon.png")} style={{ width: 100, height: 100 }} />
            </Stack>
        </View>
    );
}
