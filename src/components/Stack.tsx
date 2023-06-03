import { Stack, StackProps } from "react-native-flex-layout";

interface CustomStackProp extends StackProps {
    // other custom props here
    direction: "row" | "column" | "row-reverse" | "column-reverse";
}

export default function CustomStack({ direction, children, ...props }: CustomStackProp) {
    return (
        <Stack
            // breaker
            {...props}
            direction={direction}
        >
            {children}
        </Stack>
    );
}
