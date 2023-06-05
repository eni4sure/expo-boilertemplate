import React from "react";
import { Feather } from "@expo/vector-icons";
import { Input, InputProps } from "@rneui/base";
import { KeyboardTypeOptions, TouchableWithoutFeedback } from "react-native";

interface CustomTextInputProp extends InputProps {
    // other custom props here
    isPassword?: boolean;
    keyboardType: KeyboardTypeOptions;
}

export default function CustomTextInput({ isPassword, keyboardType, ...props }: CustomTextInputProp) {
    const inputRef = React.createRef<any>();

    const [hideSecureInput, setHideSecureInput] = React.useState<boolean>(props.secureTextEntry || isPassword || false);

    return (
        <TouchableWithoutFeedback onPress={() => inputRef.current.focus()}>
            <Input
                // breaker
                {...props}
                ref={inputRef}
                keyboardType={keyboardType}
                secureTextEntry={hideSecureInput}
                rightIcon={props.rightIcon || isPassword ? <Feather onPress={() => setHideSecureInput(!hideSecureInput)} name={hideSecureInput ? "eye-off" : "eye"} size={20} color="#9E9E9E" style={{ paddingHorizontal: 8 }} /> : props.rightIcon}
                style={[
                    props.style,
                    {
                        // other default css here to match design theme
                        marginBottom: 0,
                        paddingHorizontal: 6,
                        paddingVertical: props.multiline ? 6 : undefined,
                    },
                ]}
                errorStyle={[
                    props.errorStyle,
                    {
                        // other default css here to match design theme
                        marginBottom: props.errorMessage ? 10 : -5,
                    },
                ]}
                inputStyle={[
                    props.inputStyle,
                    {
                        // other default css here to match design theme
                    },
                ]}
                labelStyle={[
                    props.labelStyle,
                    {
                        // other default css here to match design theme
                    },
                ]}
                containerStyle={[
                    props.containerStyle,
                    {
                        // other default css here to match design theme
                        paddingHorizontal: 0,
                    },
                ]}
                inputContainerStyle={[
                    props.inputContainerStyle,
                    {
                        // other default css here to match design theme
                        borderWidth: 1,
                        maxHeight: props.multiline ? undefined : 45,
                        borderColor: props.errorMessage ? "red" : undefined,
                    },
                ]}
                rightIconContainerStyle={[
                    props.rightIconContainerStyle,
                    {
                        // other default css here to match design theme,
                        height: "100%",
                    },
                ]}
                leftIconContainerStyle={[
                    props.leftIconContainerStyle,
                    {
                        // other default css here to match design theme
                        height: "100%",
                    },
                ]}
            />
        </TouchableWithoutFeedback>
    );
}
