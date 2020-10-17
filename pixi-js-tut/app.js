
const canvas = document.querySelector('canvas');
const app = new PIXI.Application({
  view: canvas,
  width: window.innerWidth,
  height: window.innerHeight,
  resizeTo: window
})
const sprites = new PIXI.ParticleContainer(10000, {
  scale: true,
  position:true,
  rotation: true,
  uvs: true,
  alpha:true,
});
app.stage.addChild(sprites);

//creat array to store sprites
const skulls = [];
const totalSprites = app.renderer
instanceof PIXI.Renderer ? 10000: 100;

for (let i =0; i < totalSprites; i++) {
  //create sprite
  const texture = PIXI.Texture.from('./images/skull.small.png');
  const img = new PIXI.Sprite(texture);


  img.tint = Math.random() * 0xe8d4cd;
  //set the anchor point so the text is centered on sprite
  img.anchor.set(0.5);
  //different skulls different sizes
  img.scale.set(0.8 + Math.random() * 0.3);
  //scatter them all
  img.x = Math.random() * app.screen.width;
  img.y = Math.random() * app.screen.height;
  img.tint = Math.random() * 0x808080;

  //create random direction in radians
  img.direction = Math.random() * Math.PI * 2;
  //this number will be used to modify direction of sprite over time
  img.turningSpeed = Math.random() - 0.8;
  //create a random speed between 0 - 2 
  img.speed = (2 + Math.random() * 2 ) * 0.2;

  img.offset = Math.random() * 100;
  //push to array
  skulls.push(img)
  sprites.addChild(img)
}
// create a box for the skulls
const imgBoundsPadding = 100;
const imgBounds = new PIXI.Rectangle(
  -imgBoundsPadding,
  -imgBoundsPadding,
  app.screen.width + imgBoundsPadding * 2,
  app.screen.height + imgBoundsPadding * 2,
);

let tick = 0;

app.ticker.add(() => {
  //iterate through the sprites and update pos
  for ( let i =0; i < skulls.length;i++){
    const img = skulls[i];
    img.scale.y =0.95 + Math.sin(tick + img.offset) * 0.05;
    img.direction += img.turningSpeed * 0.01;
    img.x += Math.sin(img.direction) * (img.speed * img.scale.y);
    img.y += Math.cos(img.direction) * (img.speed * img.scale.y);
    img.rotation = - img.direction + Math.PI;
    // wrap skulls
    if(img.x < imgBounds.x) {
      img.x += imgBounds.width;
    } else if (img.x > imgBounds.x + imgBounds.width){
      img.x -= imgBounds.width;
    }
    if(img.y < imgBounds.y) {
      img.y += imgBounds.height;
    } else if (img.y > imgBounds.y + imgBounds.height){
      img.y -= imgBounds.height;
    }
  }
  //increment the ticker
  tick += 0.1
})





// requestAnimationFrame(animate);

// function animate() {
//   requestAnimationFrame(animate);
//   img.transform +=0.01
// }
