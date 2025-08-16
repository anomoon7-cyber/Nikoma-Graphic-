
particlesJS("particles-js", {
  "particles": {
    "number": {"value":80},
    "color":{"value":["#a855f7","#06b6d4","#f472b6"]},
    "shape":{"type":"circle"},
    "opacity":{"value":0.7},
    "size":{"value":3},
    "line_linked":{"enable":true,"distance":150,"color":"#a855f7","opacity":0.4,"width":1},
    "move":{"enable":true,"speed":2,"direction":"none","random":true,"out_mode":"out"}
  },
  "interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"}}},
  "retina_detect":true
});

// Text typing
const nameText="استودیو نیکوما";
const bioText="گرافیک دیزاینر | طراحی لوگو و هویت بصری | نیکوما حامی همیشگی برند توست";
function typeText(element,text,speed=100){
  let k=0;
  let interval=setInterval(()=>{if(k<text.length){element.innerHTML+=text[k];k++;}else clearInterval(interval);},speed);
}
typeText(document.getElementById("studio-name"),nameText,120);
setTimeout(()=>{typeText(document.getElementById("bio-text"),bioText,80);}, nameText.length*120);
