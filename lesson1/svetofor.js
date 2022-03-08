const circles = document.querySelectorAll(".krug");
console.log(circles)
let brightLight = 0;

setInterval(() => {
switchLight();
}, 1300);

function switchLight() {
  circles[brightLight].className = 'krug';
  brightLight++;

//  if(brightLight > 2) {
//    brightLight = 0;
//  }
  switch(brightLight){
    case 3:
        brightLight = 0;
  }

  const currentLight = circles[brightLight];
  currentLight.classList.add(currentLight.getAttribute
  ("color"))
}