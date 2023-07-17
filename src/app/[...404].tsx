import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function NotFoundScreen() {
    return (
        <>
            <View className="flex-auto flex-col items-center justify-center p-20">
                <Text className="text-xl font-bold">Oops! This screen {"doesn't"} exist.</Text>

                <Link href="/" className="mt-4 py-4">
                    <Text className=" text-sm text-[#2e78b7]">Go to home screen!</Text>
                </Link>
            </View>
        </>
    );
}
