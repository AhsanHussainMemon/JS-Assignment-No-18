let position1 = 10; 
let position2 = 10; 

function moveCharacters(event) {
  const character1 = document.getElementById("character1");
  const character2 = document.getElementById("character2");

  if (event.keyCode === 37) { 
    position1 -= 10;
    character1.style.left = position1 + "px";
  }
  if (event.keyCode === 39) { 
    position1 += 10;
    character1.style.left = position1 + "px";
  }

  if (event.key === "a") { 
    position2 += 10;
    character2.style.right = position2 + "px";
  }
  if (event.key === "d") { 
    position2 -= 10;
    character2.style.right = position2 + "px";
  }
}

window.onkeydown = moveCharacters;
