document.getElementById("btn-left").onclick = leftClick;

document.getElementById("btn-center").onclick = centerClick;

document.getElementById("btn-right").onclick = rightClick;

function leftClick() {
  document.getElementById("box").className = "leftbox";
}

function centerClick() {
  document.getElementById("box").className = "centerbox";
}

function rightClick() {
  document.getElementById("box").className = "rightbox";
}
