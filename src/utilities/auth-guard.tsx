import React from "react";
import { Redirect } from "expo-router";

import { state, useSnapshot } from "@src/state";

export const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    const WithAuthLogic: React.FC<P> = (props) => {
        const { authToken } = useSnapshot(state);

        const [isLogged] = React.useState(authToken);

        if (!isLogged) {
            // TODO: Change this to appropiate route
            return <Redirect href="/" />;
        }

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
        const { authToken } = useSnapshot(state);

        const [isLogged] = React.useState(authToken);

        if (isLogged) {
            // TODO: Change this to appropiate route
            return <Redirect href="/home" />;
        }

        const modifiedProps = {
            ...props,
        };

        // Return the wrapped component with modified props
        return <WrappedComponent {...modifiedProps} />;
    };

    return WithoutAuthLogic;
};
