import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

export default function CardComponent() {
  const theme = useTheme();
  return <Card>this is a card</Card>;
}
