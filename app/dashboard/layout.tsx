import React from "react";

interface Props {
  children: React.ReactNode;
}

function DashboardLayout({ children }: Props) {
  return <div style={{ color: "red" }}>{children}</div>;
}

export default DashboardLayout;
