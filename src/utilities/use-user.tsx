import { useQuery } from "@tanstack/react-query";
import jwt_decode, { JwtPayload } from "jwt-decode";

import { APIGetCurrentUser } from "@src/http";
import { state, useSnapshot } from "@src/state";

export default function useUser() {
    const { authToken } = useSnapshot(state);

    const {
        isError,
        isLoading,
        isRefetching,
        data: userQuery,
        refetch,
    } = useQuery(["auth-user"], APIGetCurrentUser, {
        cacheTime: Infinity,
        staleTime: 60000 * 10 /* 10 mins */,
    });

    const isAuthenticated = !!authToken;
    const isLoadingUser = isLoading || isRefetching;

    let user = null;

    if (isError && isAuthenticated) {
        try {
            const decodedToken: JwtPayload = jwt_decode(authToken || "");
            delete decodedToken.iat;
            delete decodedToken.exp;

            user = decodedToken;
        } catch (error) {
            user = null;
        }
    } else {
        user = userQuery?.data || null;
    }

    return {
        user,
        isLoadingUser,
        isAuthenticated,
        refreshAuthState: refetch,
    };
}
