import React, { ReactNode } from "react";

import PageContext from "./PageContext";
import PageCountContext from "./PageCountContext";

interface ContextProviderProps {
  children: ReactNode;
}

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => (
  <PageContext>
    <PageCountContext>{children}</PageCountContext>
  </PageContext>
);

export default ContextProvider;
