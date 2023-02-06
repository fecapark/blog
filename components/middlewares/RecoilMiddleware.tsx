"use client";

import { RecoilRoot } from "recoil";
import { IMiddlewareProps } from "./Middleware.type";

export default function RecoilMiddleware({ children }: IMiddlewareProps) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
