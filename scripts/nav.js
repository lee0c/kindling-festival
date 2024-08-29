let navbar = document.getElementById("top-nav");

/* theme consts */
const THEME = "theme";
const LIGHT = "light";
const DARK = "dark";

const LIGHT_ICON = '<i class="fa-regular fa-sun" aria-hidden="true"></i>';
const DARK_ICON = '<i class="fa-regular fa-moon" aria-hidden="true"></i>';

/* Light/dark modes */
let body = document.body;

let theme = localStorage.getItem(THEME);
let themeToggle = document.getElementById(THEME);

function setThemeDark() {
  body.className = DARK;
  themeToggle.innerHTML = LIGHT_ICON;
}

function setThemeLight() {
  body.className = LIGHT;
  themeToggle.innerHTML = DARK_ICON;
}

function changeTheme(theme) {
  if (theme != LIGHT && theme != DARK) {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
    ) {
      theme = LIGHT;
    } else {
      theme = DARK;
    }
  }

  switch (theme) {
    case LIGHT:
      setThemeLight();
      break;
    case DARK:
      setThemeDark();
      break;
  }
  localStorage.setItem(THEME, theme);
}

changeTheme(theme);

function toggleTheme() {
  if (theme === LIGHT) theme = DARK;
  else if (theme === DARK) theme = LIGHT;
  changeTheme(theme);
}

themeToggle.addEventListener("click", toggleTheme);

/* menu orientation consts */
const ALIGN = "alignment";
const LEFT = "left";
const RIGHT = "right";

const LEFT_ICON = '<i class="fa-regular fa-hand-point-left"></i>';
const RIGHT_ICON = '<i class="fa-regular fa-hand-point-right"></i>';

/* Menu alignment - right or left handed */
let align = localStorage.getItem(ALIGN);
let alignToggle = document.getElementById(ALIGN);

function setAlignLeft() {
  alignToggle.innerHTML = RIGHT_ICON;
  navbar.style.justifyContent = "flex-start";
  navbar.prepend(themeToggle);
  navbar.append(alignToggle);
}

function setAlignRight() {
  alignToggle.innerHTML = LEFT_ICON;
  navbar.style.justifyContent = "flex-end";
  navbar.prepend(alignToggle);
  navbar.append(themeToggle);
}

function changeAlign(align) {
  switch (align) {
    case LEFT:
      setAlignLeft();
      break;
    case null:
      align = RIGHT;
    case RIGHT:
      setAlignRight();
      break;
  }
  localStorage.setItem(ALIGN, align);
}

changeAlign(align);

function toggleAlign() {
  if (align === LEFT) align = RIGHT;
  else if (align === RIGHT) align = LEFT;
  changeAlign(align);
}

alignToggle.addEventListener("click", toggleAlign);

let footerHTML = `
  <p>
    kindling festival is the brainchild of 
    <a href="https://www.driftingspirits.art"
      target="_blank"
      >laen</a
    >
  </p>
  <p>
    website created by 
    <a href="https://leecat.art"
      target="_blank"
      >lee cattarin</a>
  </p>
  <p>
    got site feedback?
    <a href="mailto:lee.cattarin@gmail.com?subject=kindling feedback"
      target="_blank"
      >reach out!</a
    >
  </p>
`;

function populateFooter() {
  let footer = document.getElementById("footer");
  footer.innerHTML = footerHTML;
}

populateFooter();
