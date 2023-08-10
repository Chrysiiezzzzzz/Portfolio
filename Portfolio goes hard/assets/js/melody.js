const images = [
  { name: `angy`, desc: `A still of Lapis, a character from Fire Emblem Engage, very upset. Thought it was funny` },
  { name: `IMG_4094`, desc: `A pretty sunset, covered by mesh` },
  { name: `IMG_4993`, desc: `Various flowers sounded by a brick path` },
  { name: `IMG_5437`, desc: `Some flowers with a dew covered spiderweb` },
  { name: `IMG_5438`, desc: `Some more flowers with a dew covered spiderweb` },
  { name: `IMG_5086`, desc: `Once again, flowers. However these ones are pink and look like roses` },
  { name: `IMG_5321`, desc: `A Kirby Meme I found quite hilarious` },
  { name: `IMG_5392`, desc: `Roses in a garden by my job` },
  { name: `20221201-124557`, desc: `Some of my friends helping to set up a teacher's birthday` },
  { name: `IMG-0285`, desc: `The Brooklyn Bridge at night. I used it for the cover of one of my songs` },
  { name: `IMG-0735`, desc: `Picture of a rainbow just after the rain cleared` },
  { name: `IMG-1008`, desc: `Playground covered in fog` },
  { name: `IMG-1018`, desc: `Blured photo of a speeding car into the sunset` },
  { name: `IMG-1019`, desc: `Blured photo of a speeding car into the night` },
  { name: `IMG-1026`, desc: `My Keyblade propped up on the wall, sitting on the box for my Casiotone` },
  { name: `IMG-1061`, desc: `A pretty sunset, not covered by mesh` },
  { name: `IMG-1455`, desc: `Field after dark` },
  { name: `IMG-2484`, desc: `Rain-covered streetway`},
  { name: `IMG-2505`, desc: `The #1 Mario enemy (that shares a spot with Shy Guy and Boo), Dry Bones. It's specfically an HD render of the losing sprite from Mario Party 7`}
];

const path = `assets/gallery/` ;

let imgStr = `` ;

images.forEach( ( image ) => {
  console.log( image) ;

  imgStr += `<img src="${ path }${ image.name }thumb.jpg"
                class="thumb"
                id="${ image.name }"
                alt="${ image.desc }"
                title="${ image.desc }">`;              
});

document.querySelector( `#strip-div` ).innerHTML = imgStr;

document.querySelectorAll( `.thumb` ).forEach( function( thumb ) {
  thumb.addEventListener( `click` , function() {
    console.log(`poggers` , this) ;

    showImage( this );
  });
});

function showImage( thumb ) {
  const bigPic = document.querySelector( `#big-pic` );

  bigPic.src = `${ path }${ thumb.id }.jpg`;
  bigPic.alt = thumb.title;
  bigPic.title = thumb.title;

  document.querySelector( `#caption` ).innerHTML = thumb.title;
};

images.forEach( ( image ) => {
  const newImg = new Image();
  newImg.src = `${ path }${ image.name }.jpg`;
});