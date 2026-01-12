document.addEventListener("DOMContentLoaded", function () {

  /* HEADER SCROLL */
  const header = document.getElementById("site-header");
  function handleHeaderScroll() {
    if (window.scrollY > 60) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }
  window.addEventListener("scroll", handleHeaderScroll);
  handleHeaderScroll();

  /* SMOOTH SCROLL */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
      const target = document.querySelector(this.getAttribute("href"));
      if(target){ e.preventDefault(); target.scrollIntoView({behavior:"smooth",block:"start"}); }
    });
  });

  /* REVEAL */
  const reveals = document.querySelectorAll(".reveal");
  function revealOnScroll(){
    reveals.forEach(el=>{
      if(el.getBoundingClientRect().top < window.innerHeight-80) el.classList.add("visible");
    });
  }
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  /* HERO PARTICLES */
  const canvas=document.getElementById("particles");
  const ctx=canvas.getContext("2d");
  let particles=[];
  function resizeCanvas(){ canvas.width=window.innerWidth; canvas.height=window.innerHeight; }
  window.addEventListener("resize",resizeCanvas);
  resizeCanvas();
  for(let i=0;i<70;i++){
    particles.push({
      x:Math.random()*canvas.width,
      y:Math.random()*canvas.height,
      r:Math.random()*2+1,
      dx:(Math.random()-0.5)*0.5,
      dy:(Math.random()-0.5)*0.5
    });
  }
  function animateParticles(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle="rgba(201,162,0,0.35)";
    particles.forEach(p=>{
      p.x+=p.dx; p.y+=p.dy;
      if(p.x<0||p.x>canvas.width) p.dx*=-1;
      if(p.y<0||p.y>canvas.height) p.dy*=-1;
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill();
    });
    requestAnimationFrame(animateParticles);
  }
  animateParticles();
});
