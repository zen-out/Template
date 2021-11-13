import React from "react";
import { useParams } from "react-router-dom";

export default function EachBugPage() {
  const { bugId } = useParams();
  return (
    <div>
      <h1>Each Bug Page</h1>
      {bugId}
    </div>
  );
}
