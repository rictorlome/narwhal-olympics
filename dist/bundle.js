!function(t){var e={};function s(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=e,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},s.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){"use strict";s.r(e);class o{constructor(t){this.pos=t.pos,this.vel=t.vel,this.radius=t.radius,this.color=t.color,this.game=t.game}draw(t){t.fillStyle=this.color,t.beginPath(),t.arc(this.pos[0],this.pos[1],this.radius,0,2*Math.PI,!1),t.fill()}move(){this.pos[0]+=this.vel[0],this.pos[1]+=this.vel[1]}}const r=t=>{const e=2*Math.PI*Math.random();return n([Math.sin(e),Math.cos(e)],t)},n=(t,e)=>[t[0]*e,t[1]*e];class a extends o{constructor(t){t.radius=20,t.color="black",t.vel=n(r(5),Math.random()),super(t)}}class i{constructor(t,e,s){this.DIM_X=t,this.DIM_Y=e,this.ctx=s,this.whale=new a({pos:this.randomPosition(),game:this})}randomPosition(){return[Math.floor(Math.random()*this.DIM_X),Math.floor(Math.random()*this.DIM_Y)]}draw(t){t.clearRect(0,0,this.DIM_X,this.DIM_Y),this.whale.draw(t)}}document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("game-canvas").getContext("2d");new class{constructor(t,e){this.game=t,this.ctx=e}start(){const t=i.prototype.draw.bind(this.game);window.setInterval(t,20,this.ctx)}}(new i(1e3,1e3),t).start()})}]);
//# sourceMappingURL=bundle.js.map