"use strict";var j=function(i,s){return function(){return s||i((s={exports:{}}).exports,s),s.exports}};var B=j(function(W,M){
var I=require('@stdlib/math-base-assert-is-nan/dist'),n=require('@stdlib/math-base-special-abs2/dist'),k=require('@stdlib/math-base-special-abs/dist'),L=require('@stdlib/math-base-special-sqrt/dist'),l=11113793747425387e-178,g=44989137945431964e145,w=1997919072202235e131,A=14916681462400413e-170;function C(i,s,f,d,q,y,b){var m,v,e,t,a,r,c,o,u,x,p,S;if(i<=0)return 0;for(x=d,p=b,m=!0,t=0,r=0,a=0,S=0;S<i;S++)u=k(s[x]-q[p]),u>w?(t+=n(u*l),m=!1):u<A?m&&(a+=n(u*g)):r+=n(u),x+=f,p+=y;return t>0?((r>0||I(r))&&(t+=r*l*l),e=1/l,v=t,v*(e*e)):a>0?(r>0||I(r)?(r=L(r),a=L(a)/g,a>r?(c=r,o=a):(c=a,o=r),e=1,v=n(o)*(1+n(c/o))):(e=1/g,v=a),v*(e*e)):(e=1,v=r,v*(e*e))}M.exports=C
});var _=j(function(Z,T){
var R=require('@stdlib/strided-base-stride2offset/dist'),D=B();function F(i,s,f,d,q){var y=R(i,f),b=R(i,q);return D(i,s,f,y,d,q,b)}T.exports=F
});var O=j(function($,E){
var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=_(),J=B();H(z,"ndarray",J);E.exports=z
});var K=require("path").join,P=require('@stdlib/utils-try-require/dist'),Q=require('@stdlib/assert-is-error/dist'),U=O(),G,h=P(K(__dirname,"./native.js"));Q(h)?G=U:G=h;module.exports=G;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
