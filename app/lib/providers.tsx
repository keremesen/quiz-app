"use client";
import { store } from "@/app/store";
import { Provider } from "react-redux";
import { ProvidersProps } from "../types/interface";

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
