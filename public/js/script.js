function createEnhancements() {
  cssEnhancement();
  shirtPreviewer();
  othersCreated();
}

function cssEnhancement() {
  //Adding all css for the JS enhancements
  const head = document.head,
    link = document.createElement("link"),
    fileName = "css/previewer.css";

  link.rel = "stylesheet";
  link.href = fileName;

  head.appendChild(link);
}

function shirtPreviewer() {
  //Creating the elements for the shirt preview
  const body = document.body,
    main = document.getElementsByTagName("main")[0],
    aside = document.createElement("aside"),
    svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

  svg.id = "preview";
  svg.setAttribute("width", "400px");
  svg.setAttribute("height", "275px");
  aside.appendChild(svg);
  main.appendChild(aside);

  formListener();
  const tshirt = shirtPainter(getData());
  const svgElement = document.getElementById("preview");
  svgElement.insertAdjacentHTML("afterbegin", tshirt);
}

function formListener() {
  //When form changes, change svg
  const form = document.querySelector("form");
  form.addEventListener("change", function() {
    const tshirt = shirtPainter(getData());
    const svg = document.getElementById("preview");
    svg.textContent = "";
    svg.insertAdjacentHTML("afterbegin", tshirt);
  });
}

function getData() {
  //Grab all data from the form
  const inputs = document.getElementsByTagName("input");

  let shirtPattern = inputs[5].checked
    ? inputs[5].value
    : inputs[6].checked
    ? inputs[6].value
    : inputs[7].checked
    ? inputs[7].value
    : "";

  return {
    shirtColor: inputs[0].value,
    shirtNeck: inputs[1].checked ? "v" : "round",
    shirtText: inputs[3].value,
    textColor: inputs[4].value,
    shirtPattern: shirtPattern,
    patternColor: inputs[8].value
  };
}

function shirtPainter(queries) {
  let tshirt = `<defs><mask id="cutNeck"><rect width="400" height="275" fill="white"></rect>`;
  if (queries.shirtNeck == "v") {
    tshirt += `<rect transform="translate(40,-165) rotate(45 60 60)" width="75" height="75" y="25" x="175" fill="black"></rect>`;
  } else {
    tshirt += `<circle cy="0" cx="50%" r="50" fill="black"></circle>`;
  }
  tshirt += `</mask></defs>
  <g id="shirt">
    <rect height="250" width="200" y="16.453125" x="97.5" style="fill:${queries.shirtColor}" mask="url(#cutNeck)"></rect>
    <rect transform="rotate(59.536865234375 79.49259948730466,86.21015930175783)" height="100" width="90" y="32.710163" x="29.492602" style="fill:${queries.shirtColor}"></rect>
    <rect transform="rotate(-60 315.49261474609375,79.7101593017578) "height="100" width="90" y="29.710163" x="270.492602" style="fill:${queries.shirtColor}"></rect>
    </g>`;
  if (queries.shirtPattern == "horizontal stripes") {
    tshirt += `
    <g id="pattern">
      <rect height="25" width="200" y="16.45" x="97.5" style="fill:${queries.patternColor}" mask="url(#cutNeck)"></rect>
      <rect height="25" width="200" y="65" x="97.5" style="fill:${queries.patternColor}"></rect>
      <rect height="25" width="200" y="115" x="97.5" style="fill:${queries.patternColor}"></rect>
      <rect height="25" width="200" y="165" x="97.5" style="fill:${queries.patternColor}"></rect>
      <rect height="25" width="200" y="215" x="97.5" style="fill:${queries.patternColor}"></rect>
    </g>`;
  } else if (queries.shirtPattern == "vertical stripes") {
    tshirt += `
        <g id="pattern">
      <rect height="250" width="25" y="16.45" x="110" style="fill:${queries.patternColor}"></rect>
      <rect height="250" width="25" y="16.45" x="160" style="fill:${queries.patternColor}" mask="url(#cutNeck)"></rect>
      <rect height="250" width="25" y="16.45" x="210" style="fill:${queries.patternColor}" mask="url(#cutNeck)"></rect>
      <rect height="250" width="25" y="16.45" x="260" style="fill:${queries.patternColor}"></rect>
      </g>`;
  } else if (queries.shirtPattern == "dots") {
    tshirt += `
        <g id="pattern">
      <circle cy="75" cx="50" r="10" style="fill:${queries.patternColor}"></circle>
      <circle cy="50" cx="100" r="10" style="fill:${queries.patternColor}"></circle>
      <circle cy="35" cx="250" r="10" style="fill:${queries.patternColor}"></circle>
      <circle cy="129" cx="117" r="10" style="fill:${queries.patternColor}"></circle>
      <circle cy="169" cx="269" r="10" style="fill:${queries.patternColor}"></circle>
      <circle cy="100" cx="325" r="10" style="fill:${queries.patternColor}"></circle>
      <circle cy="250" cx="250" r="10" style="fill:${queries.patternColor}"></circle>
      <circle cy="162" cx="175" r="10" style="fill:${queries.patternColor}"></circle>
      <circle cy="235" cx="115" r="10" style="fill:${queries.patternColor}"></circle>
      </g>`;
  }
  if (queries.shirtText) {
    tshirt += `<text font-weight="bold" style="fill:${queries.textColor}" x="51%" y="30%" dominant-baseline="middle" text-anchor="middle">${queries.shirtText}</text>`;
  }

  return tshirt;
}

function othersCreated() {
  const body = document.body,
    footer = document.createElement("footer"),
    ul = document.createElement("ul"),
    h2 = document.createElement("h2"),
    h2text = document.createTextNode("Others created");
  const li = [],
    innerSVG = [];

  for (var i = 0; i < 5; i++) {
    li[i] = document.createElement("li");
    innerSVG[i] = relatedShirts(createData(), i);
    li[i].insertAdjacentHTML("afterbegin", innerSVG[i]);
    ul.appendChild(li[i]);
  }

  h2.appendChild(h2text);
  footer.appendChild(h2);
  footer.appendChild(ul);
  body.appendChild(footer);
}

function relatedShirts(queries, id) {
  let tshirt =
    `<svg width="150px" height="150px"><defs><mask id="smallCut` +
    id +
    `"><rect width="150" height="150" fill="white"></rect>`;
  if (queries.shirtNeck == "v") {
    tshirt += `<rect transform="rotate(45 60 60)" width="50" height="50" y="-25" x="0" fill="black"/>`;
  } else {
    tshirt += `<circle cy="0" cx="50%" r="25" fill="black"></circle>`;
  }
  tshirt +=
    `</mask></defs>
  <g id="shirt">
    <rect height="150" width="100" y="10" x="25" style="fill:${queries.shirtColor}" mask="url(#smallCut` +
    id +
    `)"></rect>
    <rect transform="rotate(59.536865234375 79.49259948730466,86.21015930175783)" height="50" width="45" y="94" x="-13" style="fill:${queries.shirtColor}"></rect>
    <rect transform="rotate(-60 315.49261474609375,79.7101593017578) "height="50" width="45" y="-120" x="235" style="fill:${queries.shirtColor}"></rect>
    </g>`;
  if (queries.shirtPattern == "horizontal stripes") {
    tshirt +=
      `
    <g id="pattern">
      <rect height="12" width="100" y="20" x="25" style="fill:${queries.patternColor}" mask="url(#smallCut` +
      id +
      `)"></rect>
      <rect height="12" width="100" y="45" x="25" style="fill:${queries.patternColor}"></rect>
      <rect height="12" width="100" y="70" x="25" style="fill:${queries.patternColor}"></rect>
      <rect height="12" width="100" y="95" x="25" style="fill:${queries.patternColor}"></rect>
      <rect height="12" width="100" y="120" x="25" style="fill:${queries.patternColor}"></rect>
    </g>`;
  } else if (queries.shirtPattern == "vertical stripes") {
    tshirt +=
      `
        <g id="pattern">
      <rect height="150" width="12" y="10" x="32" style="fill:${queries.patternColor}"></rect>
      <rect height="150" width="12" y="10" x="57" style="fill:${queries.patternColor}" mask="url(#smallCut` +
      id +
      `)"></rect>
      <rect height="150" width="12" y="10" x="82" style="fill:${queries.patternColor}" mask="url(#smallCut` +
      id +
      `)"></rect>
      <rect height="150" width="12" y="10" x="107" style="fill:${queries.patternColor}"></rect>
      </g>`;
  } else if (queries.shirtPattern == "dots") {
    tshirt += `
        <g id="pattern">
      <circle cy="48" cx="5" r="5" style="fill:${queries.patternColor}"></circle>
      <circle cy="35" cx="30" r="5" style="fill:${queries.patternColor}"></circle>
      <circle cy="22" cx="105" r="5" style="fill:${queries.patternColor}"></circle>
      <circle cy="75" cx="40" r="5" style="fill:${queries.patternColor}"></circle>
      <circle cy="95" cx="115" r="5" style="fill:${queries.patternColor}"></circle>
      <circle cy="60" cx="142" r="5" style="fill:${queries.patternColor}"></circle>
      <circle cy="135" cx="105" r="5" style="fill:${queries.patternColor}"></circle>
      <circle cy="172" cx="67" r="5" style="fill:${queries.patternColor}"></circle>
      <circle cy="128" cx="37" r="5" style="fill:${queries.patternColor}"></circle>
      </g>`;
  }
  tshirt += `</svg>`;

  return tshirt;
}

function createData() {
  //create some fake data to give advice to people
  const shirtColor = "#" + Math.floor(Math.random() * 16777215).toString(16),
    patternColor = "#" + Math.floor(Math.random() * 16777215).toString(16),
    shirtNeck = ["v", "round"],
    shirtPattern = ["", "vertical stripes", "horizontal stripes", "dots"];

  function randomNumber(maximum) {
    return Math.floor(Math.random() * Math.floor(maximum));
  }

  return {
    shirtColor: shirtColor,
    shirtNeck: shirtNeck[randomNumber(2)],
    shirtPattern: shirtPattern[randomNumber(4)],
    patternColor: patternColor
  };
}

createEnhancements();
