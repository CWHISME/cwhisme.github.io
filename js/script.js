var limitImgContext=function(){for(var n=document.getElementsByTagName("img"),t=0;t<n.length;t++)img=n[t],img.oncontextmenu=function(n){return document.getElementsByTagName("body")[0].click(),!1},img.ondragstart=function(){return!1}},logIt=function(){console.log("哇，你看到我了！ Σ(ﾟдﾟ；)\n为什么会看到我呢？反正看见了也没用....\n\n嗯...然后，我的 QQ 是 785300468\nBy CWHISME since 2015\n\nლ(╹◡╹ლ)")},fireworksEffect=function(){var n=document.querySelector(".fireworks"),r=n.getContext("2d"),t=0,e=0,i="ontouchstart"in window||navigator.msMaxTouchPoints?"touchstart":"mousedown",a=["#FF146190","#18FF99AD","#5A87FFD0","#FBF38CD0"];function o(){n.width=2*window.innerWidth,n.height=2*window.innerHeight,n.style.width=window.innerWidth+"px",n.style.height=window.innerHeight+"px",n.getContext("2d").scale(2,2)}function d(n,t){var e,i={};return i.x=n,i.y=t,i.color=a[anime.random(0,a.length-1)],i.radius=anime.random(16,24),i.endPos=(e=i,n=anime.random(0,360)*Math.PI/180,t=anime.random(50,180),t=[-1,1][anime.random(0,1)]*t,{x:e.x+t*Math.cos(n),y:e.y+t*Math.sin(n)}),i.draw=function(){r.beginPath(),r.arc(i.x,i.y,i.radius,0,2*Math.PI,!0),r.fillStyle=i.color,r.fill()},i}function l(n){for(var t=0;t<n.animatables.length;t++)n.animatables[t].target.draw()}function u(n,t){for(var e,i,e=(e=t,(i={}).x=n,i.y=e,i.color="#2B2B2B",i.radius=.1,i.alpha=.5,i.lineWidth=12,i.draw=function(){r.globalAlpha=i.alpha,r.beginPath(),r.arc(i.x,i.y,i.radius,0,2*Math.PI,!0),r.lineWidth=i.lineWidth,r.strokeStyle=i.color,r.stroke(),r.globalAlpha=1},i),a=[],o=0;o<30;o++)a.push(d(n,t));anime.timeline().add({targets:a,x:function(n){return n.endPos.x},y:function(n){return n.endPos.y},radius:.1,duration:anime.random(1200,1800),easing:"easeOutExpo",update:l}).add({targets:e,radius:anime.random(80,160),lineWidth:0,alpha:{value:0,easing:"linear",duration:anime.random(600,800)},duration:anime.random(1200,1800),easing:"easeOutExpo",update:l,offset:0},0)}var c=anime({duration:1/0,update:function(){r.clearRect(0,0,n.width,n.height)}});document.addEventListener(i,function(n){c.play(),t=(n=n).clientX||n.touches[0].clientX,e=n.clientY||n.touches[0].clientY,u(t,e)},!1);window.innerWidth,window.innerHeight;o(),window.addEventListener("resize",o,!1)};window.onload=function(){limitImgContext(),fireworksEffect(),logIt()};