"use strict";var j=function(s,a){return function(){try{return a||s((a={exports:{}}).exports,a),a.exports}catch(u){throw (a=0, u)}};};var B=j(function(W,M){
var I=require('@stdlib/math-base-assert-is-nan/dist'),f=require('@stdlib/math-base-special-abs2/dist'),k=require('@stdlib/math-base-special-abs/dist'),L=require('@stdlib/math-base-special-sqrt/dist'),l=11113793747425387e-178,g=44989137945431964e145,w=1997919072202235e131,A=14916681462400413e-170;function C(s,a,u,d,q,y,b){var m,v,e,n,i,r,c,o,t,x,p,S;if(s<=0)return 0;for(x=d,p=b,m=!0,n=0,r=0,i=0,S=0;S<s;S++)t=k(a[x]-q[p]),t>w?(n+=f(t*l),m=!1):t<A?m&&(i+=f(t*g)):r+=f(t),x+=u,p+=y;return n>0?((r>0||I(r))&&(n+=r*l*l),e=1/l,v=n,v*(e*e)):i>0?(r>0||I(r)?(r=L(r),i=L(i)/g,i>r?(c=r,o=i):(c=i,o=r),e=1,v=f(o)*(1+f(c/o))):(e=1/g,v=i),v*(e*e)):(e=1,v=r,v*(e*e))}M.exports=C
});var _=j(function(Z,T){
var R=require('@stdlib/strided-base-stride2offset/dist'),D=B();function F(s,a,u,d,q){var y=R(s,u),b=R(s,q);return D(s,a,u,y,d,q,b)}T.exports=F
});var O=j(function($,E){
var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=_(),J=B();H(z,"ndarray",J);E.exports=z
});var K=require("path").join,P=require('@stdlib/utils-try-require/dist'),Q=require('@stdlib/assert-is-error/dist'),U=O(),G,h=P(K(__dirname,"./native.js"));Q(h)?G=U:G=h;module.exports=G;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
