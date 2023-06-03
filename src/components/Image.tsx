import { Image, ImageProps } from "@rneui/base";

interface CustomImageProp extends ImageProps {
    // other custom props here
}

export default function CustomImage({ ...props }: CustomImageProp) {
    return (
        <Image
            // breaker
            {...props}
        />
    );
}
