import CardComponent from "./CardComponent/Card";
import CardBody from "./CardComponent/CardBody";
import DrawerComponent from "./Navbar/DrawerComponent";
import TableComponent from "./TableComponent/Table";
import Playground from "../pages/PlaygroundPage/Playground";

export const PlaygroundRoutes = () => [
  {
    path: "card",
    name: "Card",
    element: <CardComponent />,
  },
  {
    path: "table",
    name: "Table",
    element: <TableComponent />,
  },
];

export { CardComponent, TableComponent, DrawerComponent };
