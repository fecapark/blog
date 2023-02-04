import Image from "next/image";
import { ComponentProps } from "react";

export default function RootImage({
  src,
  ...props
}: ComponentProps<typeof Image>) {
  function getDevRootSource() {
    function parseSlash(path: string) {
      return path.startsWith("/") ? path : `/${path}`;
    }

    if (typeof src !== "string") return src;

    if (process.env.NODE_ENV === "development")
      return `${parseSlash(process.env.NEXT_PUBLIC_DEV_PATH)}${parseSlash(
        src
      )}`;

    return src;
  }

  const payloadProp = {
    src: getDevRootSource(),
    ...props,
  };

  return <Image {...payloadProp} />;
}
