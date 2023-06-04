import { Button, ButtonProps } from "@rneui/base";

interface CustomButtonProp extends ButtonProps {
    // other custom props here
    type: "solid" | "clear" | "outline";
    title: string | React.ReactElement<object>;
}

export default function CustomButton({ loading = false, disabled = false, ...props }: CustomButtonProp) {
    return (
        <Button
            // breaker
            {...props}
            type={props.type}
            loading={loading}
            title={props.title}
            disabled={disabled}
            titleStyle={[
                props.titleStyle,
                {
                    // other default css here to match design theme
                    fontSize: 20,
                },
            ]}
            containerStyle={[
                props.containerStyle,
                {
                    // other default css here to match design theme
                    borderRadius: 3,
                },
            ]}
            disabledTitleStyle={[
                props.disabledTitleStyle,
                {
                    // other default css here to match design theme
                    color: "white",
                },
            ]}
            disabledStyle={[
                props.disabledTitleStyle,
                {
                    // other default css here to match design theme
                    backgroundColor: "#999999",
                },
            ]}
            buttonStyle={[
                props.buttonStyle,
                {
                    // other default css here to match design theme
                    padding: 14,
                    borderRadius: 8,
                    paddingVertical: 16,
                },
            ]}
        />
    );
}
