let navbar = document.getElementById("top-nav");

/*********/
/* THEME */
/*********/

/* theme consts */
const THEME = "theme";
const LIGHT = "light";
const DARK = "dark";

const THEME_ICON = '<i class="fa-solid fa-circle-half-stroke" aria-hidden="true"></i>';

/* Light/dark modes */
let theme = localStorage.getItem(THEME);

let themeToggle = document.createElement("button");
themeToggle.className = "nav-item";
themeToggle.id = THEME;
themeToggle.title = "toggle light/dark mode";
themeToggle.ariaLabel = "toggle light/dark mode";
themeToggle.innerHTML = THEME_ICON;

function setThemeDark() {
  document.body.classList.remove(LIGHT);
  document.body.classList.add(DARK);
}

function setThemeLight() {
  document.body.classList.remove(DARK);
  document.body.classList.add(LIGHT);
}

function changeTheme(theme) {
  if (theme != LIGHT && theme != DARK) {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
    ) theme = LIGHT;
    else theme = DARK;
  }
  
  switch (theme) {
    case LIGHT:
      setThemeLight();
      break
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

/*************/
/* ALIGNMENT */
/*************/

/* menu orientation consts */
const ALIGN = "alignment";
const LEFT = "left";
const RIGHT = "right";

const LEFT_ICON = '<i class="fa-regular fa-hand-point-left" aria-hidden="true"></i>';
const RIGHT_ICON = '<i class="fa-regular fa-hand-point-right" aria-hidden="true"></i>';

/* Menu alignment - right or left handed */
let align = localStorage.getItem(ALIGN);
let alignToggle = document.createElement("button");
alignToggle.className = "nav-item";
alignToggle.id = ALIGN;
alignToggle.title = "toggle left/right navbar alignment";
alignToggle.ariaLabel = "toggle left/right navbar alignment";

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

function toggleAlign(event) {
  if (align === LEFT) align = RIGHT;
  else if (align === RIGHT) align = LEFT;

  changeAlign(align);
  
  if (event.detail === 0) alignToggle.focus();
}

alignToggle.addEventListener("click", toggleAlign);

/**********/
/* FOOTER */
/**********/

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
