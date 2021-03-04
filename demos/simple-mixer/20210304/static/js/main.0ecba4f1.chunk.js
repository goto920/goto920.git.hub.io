(this["webpackJsonpsimple-mixer"]=this["webpackJsonpsimple-mixer"]||[]).push([[0],{45:function(t){t.exports=JSON.parse('{"name":"simple-mixer","version":"0.1.0","private":true,"homepage":".","subversion":"20210304-99","dependencies":{"@material-ui/core":"^4.11.3","@material-ui/icons":"^4.11.2","@testing-library/jest-dom":"^5.11.9","@testing-library/react":"^11.2.5","@testing-library/user-event":"^12.7.3","audiobuffer-to-wav":"^1.0.0","file-saver":"^2.0.5","import":"0.0.6","rc-slider":"^9.7.1","react":"^17.0.1","react-bootstrap-icons":"^1.3.0","react-dom":"^17.0.1","react-scripts":"4.0.3","reactstrap":"^8.9.0","soundtouchjs":"^0.1.26","web-vitals":"^0.2.4","workbox-background-sync":"^5.1.4","workbox-broadcast-update":"^5.1.4","workbox-cacheable-response":"^5.1.4","workbox-core":"^5.1.4","workbox-expiration":"^5.1.4","workbox-google-analytics":"^5.1.4","workbox-navigation-preload":"^5.1.4","workbox-precaching":"^5.1.4","workbox-range-requests":"^5.1.4","workbox-routing":"^5.1.4","workbox-strategies":"^5.1.4","workbox-streams":"^5.1.4"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject"},"eslintConfig":{"extends":["react-app","react-app/jest"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}')},69:function(t,e,i){},70:function(t,e,i){},78:function(t,e,i){"use strict";i.r(e);var n=i(0),a=i(8),s=i.n(a),o=(i(69),i(5)),r=i(6),c=i(20),l=i(19),u=i(18),d=(i(70),i(45)),h=i(96),p=i(97),f=i(46),m=i(47),b=function(){function t(e,i){Object(o.a)(this,t),console.log("SaverNode new instance"),this.audioCtx=e,this.sampleRate=i,this.outputSamples=[[],[]],this.processed=0,this._record=!1,this._node=this.audioCtx.createScriptProcessor(4096,2,2)}return Object(r.a)(t,[{key:"reset",value:function(){this.processed=0}},{key:"node",get:function(){return this._node}},{key:"record",get:function(){return this._record},set:function(t){this._record=t}},{key:"getProcessedTime",value:function(){return this.processed/this.sampleRate}},{key:"getProcessedSample",value:function(){return this.processed}},{key:"process",value:function(t,e){var i=t.numberOfChannels;if(this._record)for(var n=0;n<i;n++)for(var a=t.getChannelData(n),s=0;s<a.length;s++)this.outputSamples[n].push(a[s]);this.processed+=t.getChannelData(0).length}},{key:"exportFile",value:function(t){if(this._record){console.log("exportFile: ",t),console.log("length: ",this.outputSamples[0].length);var e=this.audioCtx.createBuffer(this.outputSamples.length,this.outputSamples[0].length,this.sampleRate),i=e.getChannelData(0),n=e.getChannelData(1);i.set(this.outputSamples[0]),n.set(this.outputSamples[1]);var a=new Blob([m(e)],{type:"audio/vnd.wav"});Object(f.saveAs)(a,t)}}}]),t}(),g=i(39),j=function(){},x=function(t){Object(l.a)(i,t);var e=Object(u.a)(i);function i(t){var n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:j;return Object(o.a)(this,i),(n=e.call(this,null,t,a)).callback=a,n.sourceSound=[],n.historyBufferSize=22050,n._sourcePosition=0,n.outputBufferPosition=0,n._position=0,n}return Object(r.a)(i,[{key:"putSource",value:function(t){for(var e=0;e<t.length;e++)this.sourceSound.push(t[e])}},{key:"extractSource",value:function(t,e){var i=0;return this.sourceSound.length<2*e?i=0:(t.set(this.sourceSound.slice(0,2*e)),this.sourceSound.splice(0,2*e),i=e),i}},{key:"fillInputBuffer",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=new Float32Array(2*t),i=this.extractSource(e,t);i>0&&this.inputBuffer.putSamples(e,0,i)}}]),i}(g.a),v=function(){},y=function(){function t(e,i){Object(o.a)(this,t),this.onaudioprocess=function(t){if(this.moreInput&&this.processedFrames>this._totalInputFrames&&(console.log("onaudioprocess: End of input"),this.moreInput=!1),this.moreOutput){var e=this.process(t.inputBuffer,t.outputBuffer);this.moreInput||0!==e||(console.log("onaudioprocess: End of output"),this.moreOutput=!1,this._onEnd())}this.moreInput&&(this.processedFrames+=t.inputBuffer.length)},this.context=e,this.bufferSize=i,this._soundtouch=new g.b,this._filter=new x(this._soundtouch,v),this._onEnd=v,this._node=e.createScriptProcessor(i,2,2),this._node.onaudioprocess=this.onaudioprocess.bind(this),this.outSamples=new Float32Array(2*i),this.inSamples=new Float32Array(2*i),this.sampleRate=e.sampleRate,this._totalInputFrames=0,this.processedFrames=0,this.moreInput=!0,this.moreOutput=!0}return Object(r.a)(t,[{key:"totalInputFrames",set:function(t){this._totalInputFrames=t}},{key:"node",get:function(){return this._node}},{key:"tempo",get:function(){return this._soundtouch.tempo},set:function(t){this._soundtouch.tempo=t}},{key:"pitch",set:function(t){this._soundtouch.pitch=t}},{key:"rate",get:function(){return this._soundtouch.rate}},{key:"onEnd",set:function(t){this._onEnd=t}},{key:"process",value:function(t,e){var i=t.getChannelData(0),n=t.getChannelData(1),a=this.inSamples,s=e.getChannelData(0),o=e.getChannelData(1);if(this.moreInput){for(var r=0;r<t.length;r++)a[2*r]=i[r],a[2*r+1]=n[r];this._filter.putSource(a)}for(var c=this.outSamples,l=this._filter.extract(c,this.bufferSize),u=0;u<l;u++)s[u]=c[2*u],o[u]=c[2*u+1];return l}},{key:"bypass",value:function(t,e){for(var i=e.numberOfChannels,n=0;n<i;n++){e.getChannelData(n).set(t.getChannelData(n))}}}]),t}(),S=i(40),O=i.n(S),k=i(58),A=i.n(k),C=i(59),w=i.n(C),P=i(60),B=i.n(P),F=i(61),_=i.n(F),N=i(34),G=i.n(N),D=i(33),I=i.n(D),T=i(2),R=d.subversion;window.AudioContext=window.AudioContext||window.webkitAudioContext;var E=function(t){Object(l.a)(i,t);var e=Object(u.a)(i);function i(t){var n;return Object(o.a)(this,i),(n=e.call(this)).audioCtx=new AudioContext,n.inputAudio=[],n.masterGainNode=null,n.sliderTimer=null,n.startedAt=0,n.state={isPlaying:!1,timeA:0,playingAt:0,timeB:0,loop:!1,loopDelay:2,startButtonStr:"load files first!",gains:[],masterGain:75,playSpeed:1,playPitch:0},n.shifter=null,n.loadFiles=n.loadFiles.bind(Object(c.a)(n)),n.handlePlay=n.handlePlay.bind(Object(c.a)(n)),n.handleGainSlider=n.handleGainSlider.bind(Object(c.a)(n)),n.handleTimeSlider=n.handleTimeSlider.bind(Object(c.a)(n)),n.playAB=n.playAB.bind(Object(c.a)(n)),n}return Object(r.a)(i,[{key:"componentWillUnmount",value:function(){null!==this.audioCtx&&this.audioCtx.close()}},{key:"render",value:function(){var t=this,e=function(){var e;switch(t.state.startButtonStr){case"load files first!":e=Object(T.jsx)(h.a,{title:"Load file first",children:Object(T.jsx)("span",{children:Object(T.jsx)(p.a,{children:Object(T.jsx)(O.a,{color:"disabled"})})})});break;case"Play":e=Object(T.jsx)(h.a,{title:"play A to B",children:Object(T.jsx)(p.a,{onClick:function(){return t.handlePlay({target:{name:"startPause"}})},children:Object(T.jsx)(O.a,{color:"primary"})})});break;case"Resume":e=Object(T.jsx)(p.a,{onClick:function(){return t.handlePlay({target:{name:"startPause"}})},children:Object(T.jsx)(O.a,{style:{color:"#00aa00"}})});break;case"Pause":e=Object(T.jsx)(p.a,{onClick:function(){return t.handlePlay({target:{name:"startPause"}})},children:Object(T.jsx)(A.a,{color:"primary"})});break;default:e="undefined"}return Object(T.jsx)("span",{children:e})};this.inputAudio.sort((function(t,e){return t.name-e.name}));var i=this.state.gains.map((function(e,i){return Object(T.jsx)("div",{className:"slider",children:Object(T.jsxs)("center",{children:[t.inputAudio[i].name," (",t.state.gains[i],")",Object(T.jsx)("br",{}),"0 ",Object(T.jsx)("input",{type:"range",id:i,name:"gainSlider",min:"0",max:"100",value:t.state.gains[i],onChange:t.handleGainSlider})," 100"]})},i)}));return Object(T.jsxs)("div",{className:"App",children:["KG's Simple Mixer (Select stem files and play)",Object(T.jsx)("hr",{}),Object(T.jsxs)("span",{className:"selectFile",children:[Object(T.jsx)("input",{type:"file",name:"loadFiles",multiple:"multiple",accept:"audio/*",onChange:this.loadFiles}),Object(T.jsx)("br",{})]}),Object(T.jsx)("div",{className:"text-divider",children:"Time"}),"PlayingAt: ",this.state.playingAt.toFixed(2),"\xa0\xa0 Duration: ",this.inputAudio[0]?this.inputAudio[0].data.duration.toFixed(2):0,Object(T.jsxs)("center",{children:[Object(T.jsx)("div",{className:"slider",children:Object(T.jsx)("input",{type:"range",name:"timeSlider",min:"0",max:this.inputAudio[0]?this.inputAudio[0].data.duration:0,value:this.state.playingAt,onChange:this.handleTimeSlider})}),"A: ",this.state.timeA.toFixed(2)," -- B: ",this.state.timeB.toFixed(2)]}),Object(T.jsx)("div",{className:"text-divider",children:"Player Controls"}),Object(T.jsx)(e,{}),Object(T.jsx)(h.a,{title:"stop and rewined to A",children:Object(T.jsx)(p.a,{onClick:function(){return t.handlePlay({target:{name:"stop"}})},children:Object(T.jsx)(w.a,{color:this.inputAudio.length?"primary":"disabled"})})}),Object(T.jsx)(h.a,{title:"toggle loop AB",children:Object(T.jsx)(p.a,{onClick:function(){t.setState({loop:!t.state.loop})},children:Object(T.jsx)(B.a,{color:this.state.loop?"secondary":"primary"})})}),Object(T.jsxs)("span",{className:"tiny-button",children:[Object(T.jsx)(h.a,{title:"play and click or stop, move slider, and click",children:Object(T.jsx)("button",{name:"setA",onClick:function(){return t.setState({timeA:t.state.playingAt})},children:"set A"})}),"\xa0\xa0\xa0",Object(T.jsx)(h.a,{title:"play and click or stop, move slider, and click",children:Object(T.jsx)("button",{name:"setB",onClick:function(){return t.setState({timeB:t.state.playingAt})},children:"set B"})}),"\xa0\xa0\xa0",Object(T.jsx)(h.a,{title:"reset AB",children:Object(T.jsx)("button",{name:"reset",onClick:function(){return t.setState({timeA:0,timeB:t.inputAudio[0].data.duration})},children:"reset"})})]}),Object(T.jsx)(h.a,{title:"Export after playback","aria-label":"export",children:Object(T.jsx)(p.a,{onClick:function(){return t.handlePlay({target:{name:"export"}})},children:Object(T.jsx)(_.a,{color:this.state.isPlaying?"disabled":"primary"})})}),Object(T.jsxs)("div",{className:"text-divider",children:["Slow Down (",(100*this.state.playSpeed).toFixed(0)," %) (50 -- 100) "]}),"10% ",Object(T.jsxs)(p.a,{onClick:function(){return t.setSpeed({target:{name:"sub10"}})},children:[Object(T.jsx)(I.a,{color:"primary"})," "]}),Object(T.jsxs)(p.a,{onClick:function(){return t.setSpeed({target:{name:"add10"}})},children:[Object(T.jsx)(G.a,{color:"primary"})," "]}),"\xa0\xa0\xa0 1% ",Object(T.jsxs)(p.a,{onClick:function(){return t.setSpeed({target:{name:"sub1"}})},children:[Object(T.jsx)(I.a,{color:"primary"})," "]}),Object(T.jsxs)(p.a,{onClick:function(){return t.setSpeed({target:{name:"add1"}})},children:[Object(T.jsx)(G.a,{color:"primary"})," "]}),Object(T.jsxs)("div",{className:"text-divider",children:["Pitch (",this.state.playPitch.toFixed(1),") (-12 -- +12)"]}),"#/b ",Object(T.jsxs)(p.a,{onClick:function(){return t.setPitch({target:{name:"sub1"}})},children:[Object(T.jsx)(I.a,{color:"primary"})," "]}),Object(T.jsxs)(p.a,{onClick:function(){return t.setPitch({target:{name:"add1"}})},children:[Object(T.jsx)(G.a,{color:"primary"})," "]}),"\xa0\xa0\xa0 10 cents ",Object(T.jsxs)(p.a,{onClick:function(){return t.setPitch({target:{name:"sub10c"}})},children:[Object(T.jsx)(I.a,{color:"primary"})," "]}),Object(T.jsxs)(p.a,{onClick:function(){return t.setPitch({target:{name:"add10c"}})},children:[Object(T.jsx)(G.a,{color:"primary"})," "]}),Object(T.jsxs)("div",{className:"slider",children:[Object(T.jsxs)("div",{className:"text-divider",children:["Master Gain (",this.state.masterGain,")"]}),Object(T.jsxs)("center",{children:["0 ",Object(T.jsx)("input",{type:"range",id:"master",name:"gainSlider",min:"0",max:"150",value:this.state.masterGain,onChange:this.handleGainSlider})," 150"]})]},"master"),Object(T.jsx)("div",{className:"text-divider",children:"Channel Gain"}),i,Object(T.jsx)("hr",{}),"Version: ",R," \xa0\xa0",Object(T.jsx)("a",{href:"https://goto920.github.io/demos/simple-mixer",target:"_blank",rel:"noreferrer",children:"Guide/update"}),Object(T.jsx)("br",{}),"Speed/pitch control by \xa0",Object(T.jsx)("a",{href:"https://github.com/cutterbl/SoundTouchJS",target:"_blank",rel:"noreferrer",children:"soundtouch-js"}),Object(T.jsx)("br",{})]})}},{key:"loadFiles",value:function(t){var e=this;if("loadFiles"===t.target.name&&0!==t.target.files.length.length){var i=t.target.files;null!==this.audioCtx&&this.audioCtx.close(),this.audioCtx=new AudioContext,this.setState({gains:[],isPlaying:!1}),this.inputAudio=[];for(var n=[],a=function(t){var a=new FileReader;a.onload=function(e){this.audioCtx.decodeAudioData(a.result,function(e){this.inputAudio.push({name:i[t].name,data:e,source:null,gainNode:null}),n.push(100),function(t){return i.length-1}&&this.setState({startButtonStr:"Play",timeA:0,playingAt:0,timeB:this.inputAudio[0].data.duration,gains:n})}.bind(this),(function(t){console.log("decode error: "+t.err)}))}.bind(e),a.onerror=function(t){console.log("File read ",a.error)},a.readAsArrayBuffer(i[t])},s=0;s<i.length;s++)a(s)}}},{key:"playAB",value:function(t,e,i){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(console.log("playAB",t,e,i,"export: ",n),!this.state.isPlaying){"suspended"===this.audioCtx.state&&this.audioCtx.resume(),this.setState({isPlaying:!0});var a=new y(this.audioCtx,4096);a.tempo=this.state.playSpeed,a.pitch=Math.pow(2,this.state.playPitch/12),this.shifter=a;var s=new b(this.audioCtx,this.inputAudio[0].data.sampleRate);n&&(s.record=!0);var o=this.audioCtx.createGain();o.gain.value=this.state.masterGain/100,this.masterGainNode=o;for(var r=0;r<this.inputAudio.length;r++){var c=this.audioCtx.createBufferSource();c.buffer=this.inputAudio[r].data,this.inputAudio[r].source=c;var l=this.audioCtx.createGain();l.gain.value=this.state.gains[r]/100,this.inputAudio[r].gainNode=l,c.connect(l),l.connect(a.node)}a.node.connect(s.node),a.node.connect(o),o.connect(this.audioCtx.destination),s.node.connect(this.audioCtx.destination),a.totalInputFrames=(i-e)*this.inputAudio[0].data.sampleRate,this.startedAt=this.audioCtx.currentTime+t;for(var u=0;u<this.inputAudio.length;u++)this.inputAudio[u].source.start(this.startedAt,e,i-e);this.setState({playingAt:e});var d=0;s.node.onaudioprocess=function(t){s.process(t.inputBuffer,t.outputBuffer),d++%10===0&&this.setState({playingAt:e+this.state.playSpeed*s.getProcessedTime()})}.bind(this),a.onEnd=function(){console.log("MyPitchShifter.onEnd");for(var t=0;t<this.inputAudio.length;t++)this.inputAudio[t].gainNode.disconnect(a.node);a.node.disconnect(o),a.node.disconnect(s.node),s.node.disconnect(this.audioCtx.destination),n&&s.exportFile("mix_"+Date.now()+".wav"),this.shifter=null,this.setState({playingAt:this.state.timeA,isPlaying:!1}),this.state.loop?this.playAB(2,e,i):this.setState({startButtonStr:"Play"})}.bind(this)}}},{key:"handleTimeSlider",value:function(t){"timeSlider"===t.target.name&&this.setState({playingAt:parseFloat(t.target.value)})}},{key:"handlePlay",value:function(t){if(console.log("Name",t.target.name,this.state.startButtonStr),"startPause"!==t.target.name)if("stop"!==t.target.name)if("export"!==t.target.name);else{if(0===this.inputAudio.length)return;this.playAB(0,this.state.timeA,this.state.timeB,!0)}else{if(0===this.inputAudio.length)return;for(var e=0;e<this.inputAudio.length;e++)this.inputAudio[e].source&&this.inputAudio[e].source.stop();this.setState({loop:!1,startButtonStr:"Play",playingAt:this.state.timeA})}else switch(this.state.startButtonStr){case"Pause":console.log("Pause"),this.audioCtx&&this.audioCtx.suspend(),this.setState({startButtonStr:"Resume",isPlaying:!1});break;case"Resume":console.log("Resume"),this.startedAt=this.audioCtx.currentTime,"suspended"===this.audioCtx.state&&this.audioCtx.resume(),this.setState({startButtonStr:"Pause",isPlaying:!0});break;case"Play":if(console.log("Play"),0===this.inputAudio.length)break;this.playAB(0,this.state.timeA,this.state.timeB),this.setState({startButtonStr:"Pause"});break;default:console.log("default",this.state.startButtonStr)}}},{key:"handleGainSlider",value:function(t){if("gainSlider"===t.target.name){if("master"===t.target.id)return this.setState({masterGain:parseFloat(t.target.value)}),void(this.masterGainNode&&(this.masterGainNode.gain.value=parseFloat(t.target.value/100)));var e=parseInt(t.target.id),i=this.state.gains;i[e]=parseInt(t.target.value),this.setState({gains:i}),null!==this.inputAudio[e].gainNode&&(this.inputAudio[e].gainNode.gain.value=parseFloat(t.target.value/100))}}},{key:"setSpeed",value:function(t){var e=this.state.playSpeed;switch(t.target.name){case"sub10":e-=.1;break;case"add10":e+=.1;break;case"sub1":e-=.01;break;case"add1":e+=.01}e<.5?e=.5:e>1&&(e=1),this.shifter&&(this.shifter.tempo=e),this.setState({playSpeed:e})}},{key:"setPitch",value:function(t){var e=this.state.playPitch;switch(t.target.name){case"sub1":e-=1;break;case"add1":e+=1;break;case"sub10c":e-=.1;break;case"add10c":e+=.1}e<-12?e=-12:e>12&&(e=12),this.shifter&&(this.shifter.pitch=Math.pow(2,e/12)),this.setState({playPitch:e})}}]),i}(n.Component),W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(t,e){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var i=t.installing;null!=i&&(i.onstatechange=function(){"installed"===i.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}var M=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,99)).then((function(e){var i=e.getCLS,n=e.getFID,a=e.getFCP,s=e.getLCP,o=e.getTTFB;i(t),n(t),a(t),s(t),o(t)}))};s.a.render(Object(T.jsx)(E,{}),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat(".","/service-worker.js");W?(!function(t,e){fetch(t,{headers:{"Service-Worker":"script"}}).then((function(i){var n=i.headers.get("content-type");404===i.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):L(t,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):L(e,t)}))}}(),M()}},[[78,1,2]]]);
//# sourceMappingURL=main.0ecba4f1.chunk.js.map