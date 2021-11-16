import React, {
  useState,
  useEffect,
  useCallback,
} from "react";
import codepens from "../Codepen/List";
import { CodepenItem, ButtonComponent } from "../index";
import { debounce, filter } from "lodash";
import {
  hasPlace,
  getUnique,
  filterForCondition,
  joyComponents,
  getEachPage,
  buildLibrary,
} from "./functions";
import LibraryRoutes from "./LibraryRoutes";
export function FilterList({ pens }) {
  const [query, setQuery] = useState("");
  let filteredPens = pens;
  if (query !== "") {
    filteredPens = pens.filter((name) => {
      console.log(name.component.toLowerCase());
      return (
        name.component ===
        "ButtonComponent"
          .toLowerCase()
          .includes("ButtonComponent")
      );
    });
  }

 
  console.log("type of code pen", typeof pens);
  return (
    <div>
      {filteredPens.map((name) => (
        <div key={name.link}>
          {name.title}
          {name.component}
        </div>
      ))}
    </div>
  );
}
let getComponents = filterForCondition(
  codepens,
  "component"
);

// const MapCodepens = (codepens) => (
//   <div>
//     {codepens.map((codepen) => (
//       <div className="codepen" key={codepen.link}>
//         {codepen.sparkJoy && codepen.simple ? (
//           <div>
//             <a href={codepen.link}>
//               {" "}
//               <h3>{codepen.title} </h3>
//             </a>
//             <h3>{codepen.component}</h3>
//           </div>
//         ) : (
//           <div>
//             <p>
//               {codepen.title}
//               {codepen.component}
//             </p>
//           </div>
//         )}
//         {codepen.title}
//         {codepen.component}
//         <h5>{codepen.where}</h5>
//         {codepen.sparkJoy}
//         {/* <Codepen
//             title={codepen.title}
//             link={codepen.link}
//             subtitle={codepen.subtitle}
//           /> */}
//       </div>
//     ))}
//   </div>
// );

function GetLayout() {
  return <div></div>;
}

const GetNavItems = ({ items }) => {
  let count = items.length;
  if (items) {
    return (
      <div>
        <h4>{count}</h4>
        <h1>Nav Items</h1>
        {items.map((item) => {
          <div>1</div>;
        })}
      </div>
    );
  } else {
    return <div>no</div>;
  }
};

const Array = ({ arr }) => {
  return <MapCodepens codepens={arr} />;
};

const GetPages = (page) => {
  return codepens
    .filter((item) => {
      return item.where === page;
    })
    .map((item) => {
      return (
        <div key={item.link}>
          <CodepenItem object={item} link={item.link} />{" "}
        </div>
      );
    });
};

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

const GetPageAfterClicking = ({ item }) => {
  const [show, setShow] = useState(false);
  const clickHandler = () => {
    setShow(!show);
  };
  const GetPages = (page) => {
    return codepens
      .filter((item) => {
        return item.where === page;
      })
      .map((item) => {
        return (
          <div key={item.link}>
            <CodepenItem object={item} link={item.link} />{" "}
          </div>
        );
      });
  };
  console.log(GetPages(item));
  return (
    <div>
      <ButtonComponent
        onClick={clickHandler}
        label={item}
      />
      <div>
        {show ? <div>{GetPages(item)}</div> : <div></div>}
      </div>
    </div>
  );
};

const GetComponentsAfterClicking = ({ item }) => {
  const [show, setShow] = useState(false);
  const clickHandler = () => {
    setShow(!show);
  };

  const GetComponents = (component) =>
    codepens
      .filter((item) => {
        // console.log("component", item.component == page);
        // console.log(item.component === page);
        return item.component === component;
      })
      .map((item, index) => {
        return (
          <div key={item.link}>
            <CodepenItem object={item} link={item.link} />{" "}
          </div>
        );
      });
  return (
    <div>
      <ButtonComponent
        onClick={clickHandler}
        label={item}
      />
      <div>
        {show ? (
          <div>{GetComponents(item)}</div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

const GetPageRouter = () => {
  return codepens
    .map((item) => item.where)
    .filter(onlyUnique)
    .map((item, index) => {
      return (
        <div key={item}>
          <GetPageAfterClicking item={item} />
        </div>
      );
    });
};

const GetComponentRouter = () => {
  return codepens
    .map((item) => item.component)
    .filter(onlyUnique)
    .sort()
    .map((item, index) => {
      return (
        <div key={item}>
          <GetComponentsAfterClicking item={item} />
        </div>
      );
    });
};

const GetPageNav = () => {
  return codepens
    .map((item) => item.where)
    .filter(onlyUnique)
    .map((item, index) => {
      return <Link to={item}>{item}</Link>;
    });
};
export default function Library() {
  const [click, setClick] = useState("");
  const clickHandler = () => {};
  console.log(codepens.filter((item) => item.component));
  const items = () =>
    codepens
      .filter((item) => {
        return item.component
          .toLowerCase()
          .includes("ButtonComponent");
      })
      .map((item, index) => {
        return (
          <div key={item.link}>
            <CodepenItem object={item} link={item.link} />{" "}
          </div>
        );
      });
  const joy = () =>
    codepens
      .filter((item) => {
        console.log(item.sparkJoy == true);
        return item.sparkJoy == true;
      })
      .map((item, index) => {
        return (
          <CodepenItem
            key={index}
            object={item}
            link={item.link}
          />
        );
      });

  const getAllComponentsNames = () => {
    return codepens
      .map((item) => item.component)
      .filter(onlyUnique);
  };
  let components = codepens
    .map((item) => item.component)
    .filter(onlyUnique);
  console.log("components", components);

  const getAllPageNames = () => {
    return codepens
      .map((item) => item.where)
      .filter(onlyUnique)
      .map((item, index) => {
        return (
          <div key={index}>
            <h3>{item}</h3>
            {getPages(item)}
          </div>
        );
      });
  };

  //   console.log("items", items);
  //   console.log("joy", joy.length);
  //   let joy = joyComponents(codepens);
  //   const getJoy = () => joyComponents(codepens);
  //   console.log(getJoy);
  return (
    <div>
      <h2>Get Happy</h2>
      {/* <Routes>
        <GetPageRouter />
      </Routes> */}
      <div className="row">
        <div className="col">
          <GetPageRouter />
        </div>
        <div className="col">
          <GetComponentRouter />

          {/* <GetPageRouter /> */}
        </div>
      </div>
      {/* <GetPageNav /> */}
      {/* 
      {getAllComponentsNames()}

      {getComponents("Loader")}
      {getPages("All")} */}
    </div>
  );
}
