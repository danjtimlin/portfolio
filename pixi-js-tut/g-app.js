//GSAP text animation
gsap.from('.content',{opacity: 0, duration: 3, ease:"sine.out", clipPath:'circle(0%)',delay:0.8,});
gsap.from('.anim1', {duration:1, opacity:0, ease:"back.out(1.7)", delay: 1.5, stagger: 0.3})


// declare constants
const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');
const link4 = document.getElementById('link4');


var tl = gsap.timeline({defaults:{duration: 1, ease:"elastic.out(1,0.5)"}})
var tl2 = gsap.timeline({defaults:{duration: 1, ease:"elastic.out(1,0.5)"}})
var tl3 = gsap.timeline({defaults:{duration: 1, ease:"elastic.out(1,0.5)"}})
var tl4 = gsap.timeline({defaults:{duration: 1, ease:"elastic.out(1,0.5)"}})



//time line for link1
tl.paused(true);
tl.reversed(true);
tl.to("#blurb1", {clipPath: 'circle(1000%)'});
tl.to('.anim2', {opacity:1, y:'38px', stagger:0.3}, '-=1');
//time line for link2
tl2.paused(true);
tl2.reversed(true);
tl2.to("#blurb2", {clipPath: 'circle(1000%)'});
tl2.to('.anim3', {opacity:1, y:'38px', stagger:0.3}, '-=1');
//time line for link3
tl3.paused(true);
tl3.reversed(true);
tl3.to("#blurb3", {clipPath: 'circle(1000%)'});
tl3.to('.anim4', {opacity:1, y:'38px', stagger:0.3}, '-=1');
//time line for link4
tl4.paused(true);
tl4.reversed(true);
tl4.to("#blurb4", {clipPath: 'circle(1000%)'});
tl4.to('.anim5', {opacity:1, y:'38px', stagger:0.3}, '-=1');


//event listeners
link1.addEventListener('click', playLink1)

link2.addEventListener('click', playLink2)

link3.addEventListener('click', playLink3)

link4.addEventListener('click', playLink4)

////display content when clicked
function playLink1(){
  if(tl2.reversed() === true && tl3.reversed() ===true && tl4.reversed() === true){
    tl.reversed() ? tl.play() : tl.reverse()
  } else{
    tl.reverse()
  }
}
function playLink2(){
  if(tl.reversed() === true && tl3.reversed() ===true && tl4.reversed() === true){
    tl2.reversed() ? tl2.play() : tl2.reverse()
  } else{
    console.log('error');
  }
}
function playLink3(){
  if(tl.reversed() === true && tl2.reversed() ===true && tl4.reversed() === true){
    tl3.reversed() ? tl3.play() : tl3.reverse()
  } else{
    console.log('error');
  }
}
function playLink4(){
  if(tl.reversed() === true && tl2.reversed() ===true && tl3.reversed() === true){
    tl4.reversed() ? tl4.play() : tl4.reverse()
  } else{
    console.log('error');
  }
}