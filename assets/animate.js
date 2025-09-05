// Minimal banner shine animation for winbeef
document.addEventListener("DOMContentLoaded", () => {
  const shine = document.getElementById("shine");
  let pos = -640;
  function animate() {
    pos += 4;
    shine.setAttribute("x", pos);
    shine.setAttribute("opacity", Math.max(0, 0.2 - Math.abs(pos-320)/3200));
    if (pos > 640) pos = -640;
    requestAnimationFrame(animate);
  }
  animate();
});
