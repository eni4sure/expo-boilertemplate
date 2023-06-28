import React from "react";

import { View } from "react-native";
import { Image, Text } from "@src/components";
import { SafeAreaView } from "@src/components";

function App() {
    return (
        <SafeAreaView edges={["top", "right", "left", "bottom"]} className="flex-1">
            <View className="flex-1 items-center justify-center space-y-10">
                <Text>expo-boilertemplate !!</Text>

                <Image source={require("@src/assets/expo/icon.png")} style={{ width: 100, height: 100 }} />
            </View>
        </SafeAreaView>
    );
}

export default App;
