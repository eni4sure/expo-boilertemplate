import { Text, TextProps } from "@rneui/base";

interface CustomTextProp extends TextProps {
    // other custom props here
}

export default function CustomText({ children, ...props }: CustomTextProp) {
    return (
        <Text
            // breaker
            {...props}
        >
            {children}
        </Text>
    );
}
