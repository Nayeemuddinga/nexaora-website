const canvas=document.getElementById("stars"),ctx=canvas.getContext("2d");
let w,h,stars=[];
function resize(){w=canvas.width=innerWidth;h=canvas.height=innerHeight;stars=Array.from({length:Math.min(180,Math.floor(w*h/9000))},()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.2+.15,a:Math.random()*.7+.1,s:Math.random()*.18+.03}))}
function draw(){ctx.clearRect(0,0,w,h);for(const p of stars){p.y-=p.s;if(p.y<0)p.y=h;ctx.globalAlpha=p.a;ctx.fillStyle="#b8d8e8";ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill()}requestAnimationFrame(draw)}
addEventListener("resize",resize);resize();draw();

const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));

document.querySelector(".menu")?.addEventListener("click",()=>document.querySelector("nav").classList.toggle("mobile-open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>document.querySelector("nav").classList.remove("mobile-open")));
