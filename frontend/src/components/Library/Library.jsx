import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Codepen } from "../index";
function Gallery() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <Codepen />

          {/* <Codepen hash="JyxeVP" user="shettypuneeth" />; */}
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs",
  },
];

export default function Library() {
  const codepen = {
    height: "300px",
    boxSizing: "borderBox",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid",
    margin: "1em 0",
    padding: "1em",
  };
  return (
    <div>
      <h1>Library of Components</h1>
      <div>
        <nav>
          <ul>
            <li>
              <a href="#intro">Intro</a>
            </li>
            <li>
              <a href="#dev">Developer Mode</a>
              <ul>
                <li>
                  <a href="#dev-edit-html">Edit HTML</a>
                </li>
                <li>
                  <a href="#dev-element-classes">
                    Element Classes
                  </a>
                </li>
                <li>
                  <a href="#dev-slide-classes">
                    Slide Classes
                  </a>
                </li>
                <li>
                  <a href="#dev-export-html">Export HTML</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#css">CSS Editor</a>
              <ul>
                <li>
                  <a href="#css-fonts">Custom Fonts</a>
                </li>
                <li>
                  <a href="#css-developer-mode">
                    Developer Mode
                  </a>
                </li>
                <li>
                  <a href="#css-examples">Examples</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <Codepen
          link="https://codepen.io/oliviale/pen/xxboXzo"
          title="hi"
          subtitle="subtitle"
        />

        <article>
          <section>
            <h2>Progress Nav</h2>
            <a href="#dev">Developer Mode</a>.
          </section>
          <section></section>
          <section>
            <a href="#dev">developer mode</a>
          </section>
        </article>
      </div>
    </div>
  );
}
