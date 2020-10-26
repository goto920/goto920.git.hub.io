(this.webpackJsonppresentimer=this.webpackJsonppresentimer||[]).push([[0],[,function(e){e.exports=JSON.parse('{"name":"presentimer","version":"0.1.0","private":true,"homepage":"/demos/presentimer/20201026","subversion":"00","dependencies":{"react":"^16.14.0","react-dom":"^16.14.0","react-scripts":"^3.4.4","waaclock":"^0.5.3"},"scripts":{"start":"BROWSER=\'/opt/google/chrome/chrome\' react-scripts start","build":"react-scripts build","test":"react-scripts test --env=jsdom","eject":"react-scripts eject"},"browserslist":[">0.2%","not dead","not ie <= 11","not op_mini all"]}')},,,,function(e,t,a){e.exports=a.p+"static/media/cowbell_mid.e2f7d973.mp3"},function(e,t,a){e.exports=a.p+"static/media/cowbell_high.e876331a.mp3"},function(e,t,a){e.exports=a.p+"static/media/rideCup.d2b083f3.mp3"},function(e,t,a){e.exports=a.p+"static/media/church.2aef5b33.mp3"},function(e,t,a){e.exports=a.p+"static/media/hotel.1d14ec10.mp3"},function(e,t,a){e.exports=a.p+"static/media/01more.ac03e26c.mp3"},function(e,t,a){e.exports=a.p+"static/media/02more.7fed63e6.mp3"},function(e,t,a){e.exports=a.p+"static/media/03more.3a62e348.mp3"},function(e,t,a){e.exports=a.p+"static/media/04more.b3be5bd7.mp3"},function(e,t,a){e.exports=a.p+"static/media/05more.dfbc5a7b.mp3"},function(e,t,a){e.exports=a.p+"static/media/10more.8af07932.mp3"},function(e,t,a){e.exports=a.p+"static/media/15more.b68ae13e.mp3"},function(e,t,a){e.exports=a.p+"static/media/20more.e05db9e5.mp3"},function(e,t,a){e.exports=a.p+"static/media/endTalk.827a6bf5.mp3"},function(e,t,a){e.exports=a.p+"static/media/endSession.bea35364.mp3"},function(e,t,a){e.exports=a(29)},,,,,function(e,t,a){},function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(3),s=a.n(r),o=(a(25),a(26),a(1)),l=a(4),c=a.n(l);function m(e,t,a){this.context=e,this.urlList=t,this.onload=a,this.bufferList=[],this.loadCount=0}m.prototype.loadBuffer=function(e,t){var a=new XMLHttpRequest;a.open("GET",e,!0),a.responseType="arraybuffer";var n=this;a.onload=function(){n.context.decodeAudioData(a.response,(function(a){a?(n.bufferList[t]=a,++n.loadCount===n.urlList.length&&n.onload(n.bufferList)):alert("error decoding file data: "+e)}),(function(e){console.error("decodeAudioData error",e)}))},a.onerror=function(){alert("BufferLoader: XHR error")},a.send()},m.prototype.load=function(){for(var e=0;e<this.urlList.length;++e)this.loadBuffer(this.urlList[e],e)};var u,p,d=a(5),h=a.n(d),v=a(6),f=a.n(v),g=a(7),b=a.n(g),E=a(8),w=a.n(E),S=a(9),T=a.n(S),k=a(10),C=a.n(k),y=a(11),I=a.n(y),L=a(12),x=a.n(L),A=a(13),B=a.n(A),U=a(14),W=a.n(U),_=a(15),N=a.n(_),q=a(16),R=a.n(q),j=a(17),P=a.n(j),V=a(18),M=a.n(V),D=a(19),H=a.n(D),J=[h.a,f.a,b.a,w.a,T.a,C.a,I.a,x.a,B.a,W.a,N.a,R.a,P.a,M.a,H.a];window.AudioContext=window.AudioContext||window.webkitAudioContext;var O=(o.homepage+o.subversion).slice(-10);class Q extends n.Component{constructor(e){super(e),this.state={startButtonStr:"Start",timerString:"00:00",timerStyle:{color:"black"}},this.params={presentationTime:5,warningTime:1,warningSound:null,qAndATime:3,beginTime:0,pausedAt:0,sound:"voice"},this.handleUI=this.handleUI.bind(this),this.handleWindowClose=this.handleWindowClose.bind(this),this.processTimer=this.processTimer.bind(this),this.playSound=this.playSound.bind(this),this.state.timerString=("00"+this.params.presentationTime).slice(-2)+":00",this.timerEvent=void 0,this.soundList=[]}componentDidMount(){window.addEventListener("beforeunload",this.handleWindowClose),u=new window.AudioContext,(p=new c.a(u)).start();var e;new m(u,e=J,function(t){for(var a=0;a<e.length;a++)this.soundList[a]=t[a]}.bind(this)).load()}componentWillUnmount(){window.removeEventListener("beforeunload",this.handleWindowClose),u.close()}render(){var e={color:this.state.timerStyle.color},t=this.state,a=t.timerString,n=t.startButtonStr;return i.a.createElement("div",{className:"presentimer"},i.a.createElement("h3",null,"Presentation Timer"),i.a.createElement("hr",null),i.a.createElement("div",{className:"timebox",style:e},a),i.a.createElement("hr",null),i.a.createElement("span",{className:"redbutton"},i.a.createElement("button",{name:"startStop",value:n,onClick:this.handleUI},n)),"\xa0 \xa0",i.a.createElement("span",{className:"redbutton"},i.a.createElement("button",{name:"reset",onClick:this.handleUI},"Reset")),i.a.createElement("hr",null),i.a.createElement("span",{className:"selector"},"Presentation talk(min): \xa0",i.a.createElement("select",{name:"presenTime",defaultValue:this.params.presentationTime,onChange:this.handleUI},i.a.createElement("option",{value:"1"},"1"),i.a.createElement("option",{value:"2"},"2"),i.a.createElement("option",{value:"3"},"3"),i.a.createElement("option",{value:"4"},"4"),i.a.createElement("option",{value:"5"},"5"),i.a.createElement("option",{value:"6"},"6"),i.a.createElement("option",{value:"7"},"7"),i.a.createElement("option",{value:"8"},"8"),i.a.createElement("option",{value:"9"},"9"),i.a.createElement("option",{value:"10"},"10"),i.a.createElement("option",{value:"15"},"15"),i.a.createElement("option",{value:"20"},"20"),i.a.createElement("option",{value:"25"},"35"),i.a.createElement("option",{value:"30"},"30"),i.a.createElement("option",{value:"40"},"40"),i.a.createElement("option",{value:"45"},"45"),i.a.createElement("option",{value:"50"},"50"),i.a.createElement("option",{value:"55"},"55"),i.a.createElement("option",{value:"60"},"60"),i.a.createElement("option",{value:"70"},"70"),i.a.createElement("option",{value:"80"},"80"),i.a.createElement("option",{value:"90"},"90")),i.a.createElement("br",null),"Warning: \xa0",i.a.createElement("select",{name:"warningTime",defaultValue:this.params.warningTime,onChange:this.handleUI},i.a.createElement("option",{value:"0"},"none"),i.a.createElement("option",{value:"1"},"1"),i.a.createElement("option",{value:"2"},"2"),i.a.createElement("option",{value:"3"},"3"),i.a.createElement("option",{value:"4"},"4"),i.a.createElement("option",{value:"5"},"5"),i.a.createElement("option",{value:"10"},"10"),i.a.createElement("option",{value:"15"},"15"),i.a.createElement("option",{value:"20"},"20")),"\xa0 minute(s) more",i.a.createElement("br",null),"Q and A (min): \xa0",i.a.createElement("select",{name:"qAndATime",defaultValue:this.params.qAndATime,onChange:this.handleUI},i.a.createElement("option",{value:"1"},"1"),i.a.createElement("option",{value:"2"},"2"),i.a.createElement("option",{value:"3"},"3"),i.a.createElement("option",{value:"4"},"4"),i.a.createElement("option",{value:"5"},"5"),i.a.createElement("option",{value:"6"},"6"),i.a.createElement("option",{value:"7"},"7"),i.a.createElement("option",{value:"8"},"8"),i.a.createElement("option",{value:"9"},"9"),i.a.createElement("option",{value:"10"},"10"),i.a.createElement("option",{value:"15"},"15"),i.a.createElement("option",{value:"20"},"20"))),i.a.createElement("br",null),"Sound alarm: ",i.a.createElement("br",null),i.a.createElement("span",{className:"radioButton"},i.a.createElement("input",{type:"radio",name:"alarmSound",value:"cowbell_mid",onChange:this.handleUI}),"Cowbell_mid,",i.a.createElement("input",{type:"radio",name:"alarmSound",value:"cowbell_high",onChange:this.handleUI}),"Cowbell_high,",i.a.createElement("input",{type:"radio",name:"alarmSound",value:"rideCup",onChange:this.handleUI}),"RideCup, ",i.a.createElement("br",null),i.a.createElement("input",{type:"radio",name:"alarmSound",value:"church",onChange:this.handleUI}),"Church,",i.a.createElement("input",{type:"radio",name:"alarmSound",value:"hotel",onChange:this.handleUI}),"Hotel,",i.a.createElement("input",{type:"radio",name:"alarmSound",value:"voice",defaultChecked:!0,onChange:this.handleUI}),"Voice,",i.a.createElement("input",{type:"radio",name:"alarmSound",value:"mute",onChange:this.handleUI}),"Mute"),i.a.createElement("br",null),i.a.createElement("hr",null),"Version: ",O,",",i.a.createElement("a",{href:"https://goto920.github.io/demos/presentimer/",target:"_blank",rel:"noopener noreferrer"},"Manual/Update"))}handleUI(e){if("startStop"!==e.target.name){if("reset"===e.target.name){void 0!==this.timerEvent&&this.timerEvent.clear();var t=this.params.presentationTime;return t=("00"+this.params.presentationTime).slice(-2)+":00",this.setState({startButtonStr:"Start",timerString:t,timerStyle:{color:"black"}}),void("running"===u.state&&u.suspend())}if("presenTime"!==e.target.name){if("warningTime"===e.target.name)return this.params.warningTime=parseInt(e.target.value,10),void(this.params.warningTime>=this.params.presentationTime&&(this.params.warningTime=0));"qAndATime"!==e.target.name?"alarmSound"!==e.target.name||(this.params.sound=e.target.value):this.params.qAndATime=parseInt(e.target.value,10)}else{this.params.presentationTime=parseInt(e.target.value,10);var a=("00"+this.params.presentationTime).slice(-2)+":00";this.setState({timerString:a})}}else switch(this.state.startButtonStr){case"Start":"suspended"===u.state&&u.resume(),this.setState({timerStyle:{color:"blue"}}),this.params.beginTime=u.currentTime,this.timerEvent=p.callbackAtTime(function(e){this.processTimer()}.bind(this),u.currentTime).repeat(1).tolerance({early:.1,late:.1}),this.setState({startButtonStr:"Pause"});break;case"Pause":"running"===u.state&&u.suspend(),this.setState({startButtonStr:"Cont."});break;case"Cont.":"running"===u.state&&u.resume(),this.setState({startButtonStr:"Pause"})}}handleWindowClose(e){p.stop(),u.close()}processTimer(){var e,t,a=u.currentTime-this.params.beginTime;if(a<=60*(this.params.presentationTime-this.params.warningTime)){var n=60*this.params.presentationTime-a;e=("00"+parseInt(n/60,10)).slice(-2)+":"+("00"+parseInt(n%60,10)).slice(-2),0===parseInt(n-60*this.params.warningTime)&&(this.playSound(1),this.setState({timerStyle:{color:"orange"}}))}else if(a<=60*this.params.presentationTime){var i=60*this.params.presentationTime-a;e=("00"+parseInt(i/60,10)).slice(-2)+":"+("00"+parseInt(i%60,10)).slice(-2),0===parseInt(i)&&(this.playSound(2),this.setState({timerStyle:{color:"green"}}))}else a<=60*(this.params.presentationTime+this.params.qAndATime)?(t=a-60*this.params.presentationTime,e="+"+parseInt(t/60,10)+":"+("00"+parseInt(t%60)).slice(-2),0===parseInt(t-60*this.params.qAndATime)&&(this.playSound(3),this.setState({timerStyle:{color:"red"}}))):(t=a-60*parseInt(this.params.presentationTime,10),e="++"+parseInt(t/60,10)+":"+("00"+parseInt(t%60,10)).slice(-2));this.setState({timerString:e})}playSound(e){if("mute"!==this.params.sound){var t,a;switch(this.params.sound){case"cowbell_mid":t=this.soundList[0];break;case"cowbell_high":t=this.soundList[1];break;case"cowbell_rideCup":t=this.soundList[2];break;case"cowbell_church":t=this.soundList[3];break;case"cowbell_hotel":t=this.soundList[4];break;default:t=null}switch(this.params.warningTime){case 0:this.params.warningSound=null;break;case 1:this.params.warningSound=this.soundList[5];break;case 2:this.params.warningSound=this.soundList[6];break;case 3:this.params.warningSound=this.soundList[7];break;case 4:this.params.warningSound=this.soundList[8];break;case 5:this.params.warningSound=this.soundList[9];break;case 10:this.params.warningSound=this.soundList[10];break;case 15:this.params.warningSound=this.soundList[11];break;case 20:this.params.warningSound=this.soundList[12];break;default:this.params.warningSound=null}if(1===e)return a=u.createBufferSource(),"voice"===this.params.sound?a.buffer=this.params.warningSound:a.buffer=t,a.connect(u.destination),void a.start();if(2!==e)if(3!==e);else if("voice"===this.params.sound)(a=u.createBufferSource()).buffer=this.soundList[14],a.connect(u.destination),a.start();else for(var n=0;n<3;n++)(a=u.createBufferSource()).buffer=t,a.connect(u.destination),a.start(u.currentTime+1.5*n);else if("voice"===this.params.sound)(a=u.createBufferSource()).buffer=this.soundList[13],a.connect(u.destination),a.start();else for(var i=0;i<2;i++)(a=u.createBufferSource()).buffer=t,a.connect(u.destination),a.start(u.currentTime+1.5*i)}}}var X=Q,G=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $(e){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=()=>{var t=e.installing;t.onstatechange=()=>{"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(e=>{console.error("Error during service worker registration:",e)})}s.a.render(i.a.createElement(X,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/demos/presentimer/20201026",window.location).origin!==window.location.origin)return;window.addEventListener("load",()=>{var e="".concat("/demos/presentimer/20201026","/service-worker.js");G?(!function(e){fetch(e).then(t=>{404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):$(e)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):$(e)})}}()}],[[20,1,2]]]);
//# sourceMappingURL=main.15545dd9.chunk.js.map