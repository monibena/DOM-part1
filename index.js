function breakLine(number) {
  let h1 = document.createElement("h1");
  h1.textContent = number;
  body.appendChild(h1);
  //create <hr> element
  let breakLine = document.createElement("hr");
  //append <hr> to the body
  body.appendChild(breakLine);
}

//----------------------------------------------------
const body = document.querySelector("body");

breakLine(1);

let square = document.createElement("div");
body.appendChild(square);
console.log(square);
square.setAttribute("id", "square");
square.style.width = "50px";
square.style.height = "50px";
square.style.backgroundColor = "blue";
console.log(body);

//------------------------------------------------------

breakLine(2);

let image = document.createElement("img");
image.src =
  "https://preview.redd.it/jd25yqv8xsf31.jpg?width=640&crop=smart&auto=webp&s=9f146e09eed275511b156916db118ec9bb70a2da";

body.appendChild(image);

//------------------------------------------------------

breakLine(3);

const squareContainer = document.createElement("div");
squareContainer.style.width = "100%";
squareContainer.style.display = "flex";
squareContainer.style.gap = "5px";

for (let i = 0; i < 50; i++) {
  let square = document.createElement("div");
  square.className = "square";
  square.style.width = "10px";
  square.style.height = "10px";
  square.style.backgroundColor = "red";
  squareContainer.appendChild(square);
}

body.appendChild(squareContainer);

//--------------------------------------------------------

breakLine(4);

const ghostIcon = document.createElement("div");
ghostIcon.id = "ghostIcon";
body.appendChild(ghostIcon);
ghostIcon.textContent = "👻";

let visibile = true;

setInterval(function () {
  if (visibile) {
    ghostIcon.style.visibility = "hidden";
    visibile = false;
  } else {
    ghostIcon.style.visibility = "visible";
    visibile = true;
  }
}, 1000);

//-------------------------------------------------------

breakLine(5);

const content = document.createElement("div");
content.textContent =
  "I'm a magician. If I hover over a rabbit, it will dissapear!";
body.appendChild(content);

const bunnyContainer = document.createElement("div");
bunnyContainer.style.display = "flex";

for (let i = 0; i < 20; i++) {
  let bunny = document.createElement("div");
  bunny.textContent = "🐰";
  bunny.style.fontSize = "25px";
  bunny.className = "bunny";
  bunnyContainer.appendChild(bunny);
}

body.appendChild(bunnyContainer);

//-------------------------------------------------------

breakLine(6);

let counter = 10;

const destruct_text = document.createElement("div");
destruct_text.style.fontSize = "75px";
destruct_text.style.backgroundColor = "black";
destruct_text.style.color = "red";

let bombContainer = document.createElement("div");
bombContainer.style.display = "flex";
bombContainer.style.flexWrap = "wrap";
bombContainer.style.backgroundColor = "red";

setInterval(function () {
  destruct_text.textContent = `This page will sef-destruct in ${counter--} seconds`;

  if (counter === 0) {
    //body.innerHTML = "";
    for (let i = 0; i < 1000; i++) {
      let bombIcon = document.createElement("div");
      bombIcon.textContent = "💣";
      bombContainer.appendChild(bombIcon);
    }
    //destruct_text.style.visibility = "hidden";
  }
}, 1000);
body.appendChild(bombContainer);
body.appendChild(destruct_text);
