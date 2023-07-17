import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
    return (
        <SafeAreaView className="flex-1">
            <View className="flex-auto flex-col items-center justify-center">
                <View className="my-5 h-0.5 w-4/5 bg-black/20 dark:bg-white/10" />

                <Text className="text-xl font-bold">expo-boilertemplate</Text>

                <View className="my-5 h-0.5 w-4/5 bg-black/20 dark:bg-white/10" />
            </View>
        </SafeAreaView>
    );
}
