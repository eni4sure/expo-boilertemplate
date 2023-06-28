import { Platform } from "react-native";
import { SafeAreaView, SafeAreaViewProps } from "react-native-safe-area-context";

export interface CustomSafeAreaViewProp extends SafeAreaViewProps {
    // other custom props here
}

export default function CustomSafeAreaView({ children, ...props }: CustomSafeAreaViewProp) {
    return (
        <SafeAreaView
            // breaker
            {...props}
            style={[
                props.style,
                {
                    // other default css here
                    paddingBottom: Platform.OS === "android" ? 10 : 0,
                },
            ]}
        >
            {children}
        </SafeAreaView>
    );
}
