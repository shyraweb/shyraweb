import React from "react";
import "./styles/AILoader.css";

export default function AILoader({
  canvasView = false,
}: {
  canvasView?: boolean;
}) {
  return (
    <div className={`${canvasView ? "three-body-Canvas" : "three-body-AILoader"} three-body`}>
      <div className="three-body__dot"></div>
      <div className="three-body__dot"></div>
      <div className="three-body__dot"></div>
    </div>
  );
}
