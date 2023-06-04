import React from "react";
import { Redirect } from "expo-router";

export const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    const WithAuthLogic: React.FC<P> = (props) => {
        // TODO: logic to check if the user is logged in
        const [isLogged] = React.useState(false);

        if (!isLogged) {
            // TODO: Change this to appropiate route
            return <Redirect href="/" />;
        }

        // Add additional props or modify existing props
        const modifiedProps = {
            ...props,
        };

        // Return the wrapped component with modified props
        return <WrappedComponent {...modifiedProps} />;
    };

    return WithAuthLogic;
};

export const withoutAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    const WithoutAuthLogic: React.FC<P> = (props) => {
        // TODO: logic to check if the user is logged in
        const [isLogged] = React.useState(false);

        if (isLogged) {
            // TODO: Change this to appropiate route
            return <Redirect href="/home" />;
        }

        // Add additional props or modify existing props
        const modifiedProps = {
            ...props,
        };

        // Return the wrapped component with modified props
        return <WrappedComponent {...modifiedProps} />;
    };

    return WithoutAuthLogic;
};
