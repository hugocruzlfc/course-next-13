import React from "react";
import cardLayoutStyles from "./information-layout.module.css";
import { firaCode } from "./locations/models";

const CardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`${cardLayoutStyles.informationLayout} ${firaCode.className}`}
    >
      {children}
    </div>
  );
};

export default CardLayout;
