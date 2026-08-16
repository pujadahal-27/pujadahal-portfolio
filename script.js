(() => {
  const cursor = document.querySelector(".crow-cursor");
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (!cursor || !finePointer.matches || reducedMotion.matches) return;

  let frame = 0;
  let targetX = -120;
  let targetY = -120;
  let x = targetX;
  let y = targetY;

  const image = new Image();
  image.src = "crow-cursor.webp";
  image.onload = () => document.documentElement.classList.add("crow-ready");

  window.addEventListener("pointermove", (event) => {
    targetX = event.clientX;
    targetY = event.clientY;
    cursor.dataset.visible = "true";
  }, { passive: true });
  document.documentElement.addEventListener("mouseleave", () => {
    cursor.dataset.visible = "false";
  });

  const tick = () => {
    x += (targetX - x) * 0.34;
    y += (targetY - y) * 0.34;
    cursor.style.transform = `translate3d(${x - 15}px, ${y - 41}px, 0)`;
    frame = requestAnimationFrame(tick);
  };
  frame = requestAnimationFrame(tick);

  window.addEventListener("pagehide", () => cancelAnimationFrame(frame), { once: true });
})();
