parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}var n=function(){function t(a){var n=a.selector,o=a.targetDate;e(this,t),this.refElement=document.querySelector(n),this.date=o}return a(t,[{key:"start",value:function(){var e=this;setInterval(function(){e.onTick()},1e3)}},{key:"pad",value:function(e){return String(e).padStart(2,"0")}},{key:"getTimeComponents",value:function(){return{days:this.pad(Math.floor(this.deltaTime/864e5)),hours:this.pad(Math.floor(this.deltaTime%864e5/36e5)),mins:this.pad(Math.floor(this.deltaTime%36e5/6e4)),secs:this.pad(Math.floor(this.deltaTime%6e4/1e3))}}},{key:"onTick",value:function(){var e=Date.now();this.deltaTime=this.date-e,this.updateClocface(this.getTimeComponents())}},{key:"updateClocface",value:function(e){var t=e.days,a=e.hours,n=e.mins,o=e.secs;this.refElement.textContent="".concat(t,":").concat(a,":").concat(n,":").concat(o)}}]),t}(),o=new n({selector:"#timer-1",targetDate:new Date("Dec 17, 2020")});o.start();
},{}]},{},["Focm"], null)
//# sourceMappingURL=/src.0b526cd1.js.map