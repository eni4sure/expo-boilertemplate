import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";

import { withLayoutContext } from "expo-router";

const { Navigator } = createStackNavigator();

export { TransitionPresets } from "@react-navigation/stack";

export const CustomStackNavigator = withLayoutContext<StackNavigationOptions, typeof Navigator>(Navigator);
