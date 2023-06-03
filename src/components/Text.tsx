import { Text, TextProps } from "@rneui/base";

interface CustomTextProp extends TextProps {
    // other custom props here
}

export default function CustomText({ children, ...props }: CustomTextProp) {
    return (
        <Text
            // breaker
            {...props}
            h1Style={[
                props.h1Style,
                {
                    // other default css here to match design theme
                    fontSize: 32,
                },
            ]}
            h2Style={[
                props.h2Style,
                {
                    // other default css here to match design theme
                    fontSize: 24,
                },
            ]}
            h3Style={[
                props.h3Style,
                {
                    // other default css here to match design theme
                    fontSize: 20,
                },
            ]}
            h4Style={[
                props.h4Style,
                {
                    // other default css here to match design theme
                    fontSize: 16,
                },
            ]}
            style={[
                props.style,
                {
                    // other default css here to match design theme
                    fontSize: 14,
                },
            ]}
        >
            {children}
        </Text>
    );
}
