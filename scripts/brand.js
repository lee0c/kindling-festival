let colors = document.getElementsByClassName("brand-color");
console.log(colors);

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function strToRgb(rgb) {
  let nums = rgb.substring(4, rgb.length - 1).split(", ");
  return rgbToHex(parseInt(nums[0]), parseInt(nums[1]), parseInt(nums[2]));
}

for (let index = 0; index < colors.length; index++) {
  let colorVal = window.getComputedStyle(colors[index]).getPropertyValue("background-color");
  console.log(colorVal);
  
  let color = document.createElement("p");
  color.textContent = strToRgb(colorVal);
  
  colors[index].appendChild(color);
}