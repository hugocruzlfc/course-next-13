import React from "react";
import { notFound } from "next/navigation";

function NotFound() {
  notFound();
  return <div>Not Found component</div>;
}

export default NotFound;
