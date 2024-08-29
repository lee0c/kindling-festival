let gallery = document.getElementById("gallery");

/*
  {
    src: "",
    alt: ""
  },

a countryside scene. the sky is grey with darker grey clouds, and on the horizon are a line of leafy green trees; there are also a couple of large individual trees between the horizon line and the rest of the image. the trees are mostly oak.
the ground is covered in grass and wildflowers: purple, violet, white, yellow, and pink. at the front of the image on the right, there's a big, round hay bale, and there are a few others further back too. photo by laen.
*/

let images = [
  {
    src: "https://cdn.glitch.global/2854b33d-65dd-4098-af74-9ea08324c083/flowers1.jpg?v=1724857446819",
    alt: "vivid purple-pink flowers that resemble small clustered daisies sit amongst green foliage. photo by lee"
  },
  {
    src: "https://cdn.glitch.global/2854b33d-65dd-4098-af74-9ea08324c083/butterfly0.jpg?v=1724783766292",
    alt: "an 'orange-tip' butterfly, which is coloured orange and brown with brown spots on its wings, is resting on a cluster of white yarrow flowers. there is some green grass out of focus in the background. photo by laen."
  },
  {
    src: "https://cdn.glitch.global/2854b33d-65dd-4098-af74-9ea08324c083/sunset0.jpg?v=1724774474618",
    alt: "Sunset over a cliff in St Davids, West Wales, UK. The sky is blue with golden clouds adorning it, the cliff looks black in the night-time shadows, and there is a bright orange/yellow strip over the grey sea as the sun goes down. photo by LexicaLeigh"
  },
  {
    src: "https://cdn.glitch.global/2854b33d-65dd-4098-af74-9ea08324c083/landscape1.png?v=1724783841335",
    alt: "a countryside scene. the sky is grey with darker grey clouds, and on the horizon are a line of leafy green trees; there are also a couple of large individual trees between the horizon line and the rest of the image. the trees are mostly oak. the ground is covered in grass and wildflowers: purple, violet, white, yellow, and pink. at the front of the image on the right, there's a big, round hay bale, and there are a few others further back too. photo by laen."
  },
  {
    src: "https://cdn.glitch.global/2854b33d-65dd-4098-af74-9ea08324c083/flowers0.jpg?v=1724783449003",
    alt: "close up on flowers, potentially pansies, in a pot. They have vivid pink centers fading out to white petal edges, and bold yellow stripes in between each petal body. photo by lee"
  },
  {
    src: "https://cdn.glitch.global/2854b33d-65dd-4098-af74-9ea08324c083/beach0.jpg?v=1724783724597",
    alt: "from the sandy and grassy shore of a lake, the water stretches away to the horizon of very distant trees. above them is a layer of puffy white clouds with flat grey bottoms, and above the clouds is clear blue sky. the water itself is very clear and showing the reflections of the clouds in places. there is a patch of green-brown grasses just out from the shore, and beyond them, blue water on which rest several white sailboats. photo by laen."
  },
  {
    src: "https://cdn.glitch.global/2854b33d-65dd-4098-af74-9ea08324c083/sunset1.jpg?v=1724776018689",
    alt: "Sunset over a cliff in St Davids, West Wales, UK. The sky is purple, pink, and orange, with a tiny 'dot' as the sun sets down over the sea. There is a field in the foreground but it's so dark you almost can't see it. photo by LexicaLeigh",
  },
  {
    src: "https://cdn.glitch.global/2854b33d-65dd-4098-af74-9ea08324c083/beach1.png?v=1724783744728",
    alt: "a square of water. this photo was taken of clear lake water on very sunny day. the bottom of the image is a rippling yellow-green with lighter and darker patches where the pale sand underneath is in sunshine or shadow. as you move up the image, the colours become more blue and the ripples become smaller. the water at the top of the image is quite a dark blue with many small ripples in it. photo by laen."
  },
  {
    src: "https://cdn.glitch.global/2854b33d-65dd-4098-af74-9ea08324c083/landscape0.png?v=1724785288592",
    alt: "Dowth burial mounds at Bru na Boine, County Meath, Ireland. On the right is large grass covered mound, In front and to the left of it are 3 smaller grass covered mounds. There is a black rock path from the left foreground to the right of the 3 smaller mounds. There is lush grass on either side of the path leading up the hill to the mounds. photo by somcak"
  },
  {
    src: "https://cdn.glitch.global/2854b33d-65dd-4098-af74-9ea08324c083/sunset2.jpg?v=1724774724805",
    alt: "Sunset over a cliff in St Davids, West Wales, UK. The sky is yellowy-orange as the sun sets over a blue-grey sea. A few strips of golden cloud are the only things in the sky, as the sun melts into the horizon. A black-looking cliff in the foreground contrasts the colours nicely. photo by LexicaLeigh"
  },
  {
    src: "https://cdn.glitch.global/2854b33d-65dd-4098-af74-9ea08324c083/butterfly1.jpg?v=1724783783767",
    alt: "a 'common blue' blue butterfly on yellow saint john's wort flowers. there are some green leaves and dried brown grasses in the background. photo by laen."
  },
  {
    src: "https://cdn.glitch.global/2854b33d-65dd-4098-af74-9ea08324c083/sunset3.jpg?v=1724774792715",
    alt: "Sun setting over a beach in St David's, West Wales, UK. The ocean is rippling with waves, and there are some rocks emerging as the tide washes away. Sunset is orange with a bright yellow sky. photo by LexicaLeigh."
  },
  {
    src: "https://cdn.glitch.global/2854b33d-65dd-4098-af74-9ea08324c083/beach2.png?v=1724783807589",
    alt: "a tall image of a small, diagonal wave breaking on golden-brown sand. the wave has a small white patch just where it's breaking, but the rest of it is a clear, pale aquamarine. behind the wave, the water is a darker blue, and in front of it, there's just clear, slightly rippling water over sunlit sand. photo by laen."
  }
]

function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

function makeImage({ src, alt }) {
  let image = document.createElement("img");
  image.className = "gallery-img";
  image.src = src;
  image.alt = alt;
  
  return image;
}

images = shuffle(images);

function makeCols(cols, amt) {
  for (let i = 0; i < amt; i++) {
    cols.push(document.createElement("div"));
  }
}

console.log(window.innerWidth);
let numCols = Math.floor(window.innerWidth / 300);

if (numCols === 0) numCols = 1;
if (numCols > 7) numCols = 7;

let cols = [];
makeCols(cols, numCols);

let currentCol = 0;

for (let index = 0; index < images.length; index++) {
  if (currentCol === cols.length) currentCol = 0;
  cols[currentCol].appendChild(makeImage(images[index]));
  currentCol++;
}

for (let index = 0; index < cols.length; index++) {
  cols[index].className = "gallery-col";
  gallery.appendChild(cols[index]);
}
