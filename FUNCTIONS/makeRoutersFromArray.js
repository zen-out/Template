const links = [
  "play",
  "dashboard",
  "about",
  "login",
  "signup",
  "addproject",
  "calendar",
  "ongoingprojects",
  "todaystasks",
  "projects",
  "feature",
  "pastprojects",
  "payment",
  "reset",
];

function getPastel() {
  const hue = Math.floor(Math.random() * 360);
  //   console.log(hue);
  const randomColor = `hsl(${hue}, 40%, 40%)`;
  return randomColor;
}

function getDark() {
  const hue = Math.floor(Math.random() * 360);
  //   console.log(hue);
  const randomColor = `hwb(${hue}, 5%, 55%)`;
  return randomColor;
}

function colorArray(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    let newColor = getPastel();
    if (arr.includes(newColor)) {
      i = i - 1;
    } else {
      let colorString = `$color-${i}: ${newColor};`;
      arr.push(colorString);
    }
  }
  return arr;
}

console.log(colorArray(20));

function getRoutes(arr) {
  let getArr = [];
  for (let i = 0; i < arr.length; i++) {
    let newObj = {
      color: getColor(),
      name: arr[i],
      icon: arr[i],
      path: `/${arr[i]}`,
    };
    getArr.push(newObj);
  }
  return getArr;
}

let getLinks = getRoutes(links);
console.log(getLinks);
