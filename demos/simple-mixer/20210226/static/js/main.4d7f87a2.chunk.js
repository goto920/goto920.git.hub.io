(this["webpackJsonpsimple-mixer"]=this["webpackJsonpsimple-mixer"]||[]).push([[0],{14:function(t,e,i){},15:function(t,e,i){},17:function(t,e,i){"use strict";i.r(e);var n=i(1),a=i.n(n),s=i(4),r=i.n(s),o=(i(14),i(5)),l=i(6),u=i(2),c=i(9),d=i(8),h=(i(15),i(7)),p=i(0),g=h.subversion;window.AudioContext=window.AudioContext||window.webkitAudioContext;var f=function(t){Object(c.a)(i,t);var e=Object(d.a)(i);function i(t){var n;return Object(o.a)(this,i),(n=e.call(this)).audioCtx=new AudioContext,n.inputAudio=[],n.state={playingAt:0,timeA:0,timeB:0,startButtonStr:"load files first!",gains:[],masterGain:70},n.loadFiles=n.loadFiles.bind(Object(u.a)(n)),n.handlePlay=n.handlePlay.bind(Object(u.a)(n)),n.handleGainSlider=n.handleGainSlider.bind(Object(u.a)(n)),n}return Object(l.a)(i,[{key:"render",value:function(){var t=this,e=this.state.gains.map((function(e,i){return Object(p.jsx)("div",{className:"slider",children:Object(p.jsxs)("center",{children:[t.inputAudio[i].name," (",t.state.gains[i],")",Object(p.jsx)("br",{}),"0 ",Object(p.jsx)("input",{type:"range",id:i,name:"gainSlider",min:"0",max:"100",value:t.state.gains[i],onChange:t.handleGainSlider})," 100"]})},i)}));return Object(p.jsxs)("div",{className:"App",children:["KG's Simple Mixer",Object(p.jsxs)("span",{className:"selectFile",children:[Object(p.jsx)("input",{type:"file",name:"loadFiles",multiple:"multiple",accept:"audio/*",onChange:this.loadFiles}),Object(p.jsx)("br",{})]}),Object(p.jsx)("hr",{}),Object(p.jsx)("button",{name:"startPause",onClick:this.handlePlay,children:this.state.startButtonStr})," \xa0\xa0",Object(p.jsx)("button",{name:"reWind",onClick:this.handlePlay,children:"Stop/Rewind"}),Object(p.jsx)("hr",{}),Object(p.jsx)("div",{className:"slider",children:Object(p.jsxs)("center",{children:["Master Gain (",this.state.masterGain,") ",Object(p.jsx)("br",{}),"0 ",Object(p.jsx)("input",{type:"range",id:"master",name:"gainSlider",min:"0",max:"100",value:this.state.masterGain,onChange:this.handleGainSlider})," 100"]})},"master"),Object(p.jsx)("hr",{}),Object(p.jsx)("center",{children:"Channel Gain"}),e,Object(p.jsx)("hr",{}),"Version: ",g]})}},{key:"loadFiles",value:function(t){var e=this;if("loadFiles"===t.target.name&&0!==t.target.files.length.length){var i=t.target.files;null!==this.audioCtx&&this.audioCtx.close(),this.audioCtx=new AudioContext,this.inputAudio=[];for(var n=[],a=function(t){var a=new FileReader;a.onload=function(e){this.audioCtx.decodeAudioData(a.result,function(e){this.inputAudio.push({name:i[t].name,data:e,source:null,gainNode:null,masterGainNode:null}),n.push(100),function(t){return i.length-1}&&this.setState({startButtonStr:"Play",timeA:0,playingAt:0,timeB:this.inputAudio[0].data.duration,gains:n,masterGain:70})}.bind(this),(function(t){console.log("decode error: "+t.err)}))}.bind(e),a.onerror=function(t){console.log("File read ",a.error)},a.readAsArrayBuffer(i[t])},s=0;s<i.length;s++)a(s)}}},{key:"playAB",value:function(t,e){if(!this.isPlaying){"suspended"===this.audioCtx.state&&this.audioCtx.resume();for(var i=0;i<this.inputAudio.length;i++){var n=this.audioCtx.createBufferSource(),a=this.audioCtx.createGain();a.gain.value=this.state.masterGain/100,n.buffer=this.inputAudio[i].data,this.inputAudio[i].source=n;var s=this.audioCtx.createGain();s.gain.value=this.state.gains[i]/100,this.inputAudio[i].gainNode=s,this.inputAudio[i].masterGainNode=a,n.connect(s),s.connect(a),a.connect(this.audioCtx.destination)}for(var r=[],o=0;o<this.inputAudio.length;o++)r.push(100*this.inputAudio[o].gainNode.gain.value);this.setState({gains:r});for(var l=0;l<this.inputAudio.length;l++)this.inputAudio[l].source.start();this.isPlaying=!0}}},{key:"handlePlay",value:function(t){if("startPause"!==t.target.name)if("reWind"!==t.target.name);else{for(var e=0;e<this.inputAudio.length;e++)this.inputAudio[e].source.stop();this.setState({startButtonStr:"Play"})}else switch(this.state.startButtonStr){case"Pause":this.audioCtx.suspend(),this.isPlayng=!1,this.setState({startButtonStr:"Resume"});break;case"Play":case"Resume":"suspended"===this.audioCtx.state&&this.audioCtx.resume(),this.playAB(0,this.inputAudio[0].data.duration),this.setState({startButtonStr:"Pause"})}}},{key:"handleGainSlider",value:function(t){if("gainSlider"===t.target.name)if("master"!==t.target.id){var e=parseInt(t.target.id),i=this.state.gains;i[e]=parseInt(t.target.value),this.setState({gains:i}),null!==this.inputAudio[e].gainNode&&(this.inputAudio[e].gainNode.gain.value=parseFloat(t.target.value/100))}else{var n=parseFloat(t.target.value);this.setState({masterGain:n});for(var a=0;a<this.inputAudio.length;a++)null!==this.inputAudio[a].masterGainNode&&(this.inputAudio[a].masterGainNode.gain.value=parseFloat(t.target.value/100))}}}]),i}(n.Component),b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(t,e){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var i=t.installing;null!=i&&(i.onstatechange=function(){"installed"===i.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}var m=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,18)).then((function(e){var i=e.getCLS,n=e.getFID,a=e.getFCP,s=e.getLCP,r=e.getTTFB;i(t),n(t),a(t),s(t),r(t)}))};r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(f,{})}),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat(".","/service-worker.js");b?(!function(t,e){fetch(t,{headers:{"Service-Worker":"script"}}).then((function(i){var n=i.headers.get("content-type");404===i.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):v(t,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):v(e,t)}))}}(),m()},7:function(t){t.exports=JSON.parse('{"name":"simple-mixer","version":"0.1.0","private":true,"homepage":".","subversion":"20210226-00","dependencies":{"@testing-library/jest-dom":"^5.11.9","@testing-library/react":"^11.2.5","@testing-library/user-event":"^12.7.3","react":"^17.0.1","react-dom":"^17.0.1","react-scripts":"4.0.3","web-vitals":"^0.2.4","workbox-background-sync":"^5.1.4","workbox-broadcast-update":"^5.1.4","workbox-cacheable-response":"^5.1.4","workbox-core":"^5.1.4","workbox-expiration":"^5.1.4","workbox-google-analytics":"^5.1.4","workbox-navigation-preload":"^5.1.4","workbox-precaching":"^5.1.4","workbox-range-requests":"^5.1.4","workbox-routing":"^5.1.4","workbox-strategies":"^5.1.4","workbox-streams":"^5.1.4"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject"},"eslintConfig":{"extends":["react-app","react-app/jest"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}')}},[[17,1,2]]]);
//# sourceMappingURL=main.4d7f87a2.chunk.js.map