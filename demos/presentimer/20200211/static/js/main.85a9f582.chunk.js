(this.webpackJsonppresentimer=this.webpackJsonppresentimer||[]).push([[0],[,,function(e){e.exports=JSON.parse('{"name":"presentimer","version":"0.1.0","private":true,"homepage":"/demos/presentimer/20200211","subversion":"00","dependencies":{"react":"^16.12.0","react-dom":"^16.12.0","react-scripts":"^3.3.1","waaclock":"^0.5.3"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test --env=jsdom","eject":"react-scripts eject"},"browserslist":[">0.2%","not dead","not ie <= 11","not op_mini all"]}')},,,,,,,function(e,t,a){e.exports=a.p+"static/media/cowbell_mid.e2f7d973.mp3"},function(e,t,a){e.exports=a.p+"static/media/cowbell_high.e876331a.mp3"},function(e,t,a){e.exports=a.p+"static/media/rideCup.d2b083f3.mp3"},function(e,t,a){e.exports=a.p+"static/media/church.2aef5b33.mp3"},function(e,t,a){e.exports=a.p+"static/media/hotel.ed7abcba.mp3"},function(e,t,a){e.exports=a.p+"static/media/01more.ac03e26c.mp3"},function(e,t,a){e.exports=a.p+"static/media/02more.7fed63e6.mp3"},function(e,t,a){e.exports=a.p+"static/media/03more.3a62e348.mp3"},function(e,t,a){e.exports=a.p+"static/media/04more.b3be5bd7.mp3"},function(e,t,a){e.exports=a.p+"static/media/05more.dfbc5a7b.mp3"},function(e,t,a){e.exports=a.p+"static/media/10more.8af07932.mp3"},function(e,t,a){e.exports=a.p+"static/media/15more.b68ae13e.mp3"},function(e,t,a){e.exports=a.p+"static/media/20more.e05db9e5.mp3"},function(e,t,a){e.exports=a.p+"static/media/endTalk.827a6bf5.mp3"},function(e,t,a){e.exports=a.p+"static/media/endSession.bea35364.mp3"},,,function(e,t,a){e.exports=a(35)},,,,,function(e,t,a){},function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(4),o=a.n(r),s=(a(31),a(5)),l=a(6),m=a(24),c=a(7),u=a(1),p=a(25),d=(a(32),a(2)),h=a(8),f=a.n(h);function v(e,t,a){this.context=e,this.urlList=t,this.onload=a,this.bufferList=[],this.loadCount=0}v.prototype.loadBuffer=function(e,t){var a=new XMLHttpRequest;a.open("GET",e,!0),a.responseType="arraybuffer";var n=this;a.onload=function(){n.context.decodeAudioData(a.response,(function(a){a?(n.bufferList[t]=a,++n.loadCount===n.urlList.length&&n.onload(n.bufferList)):alert("error decoding file data: "+e)}),(function(e){console.error("decodeAudioData error",e)}))},a.onerror=function(){alert("BufferLoader: XHR error")},a.send()},v.prototype.load=function(){for(var e=0;e<this.urlList.length;++e)this.loadBuffer(this.urlList[e],e)};var g,E,b=a(9),w=a.n(b),T=a(10),S=a.n(T),y=a(11),C=a.n(y),L=a(12),k=a.n(L),I=a(13),A=a.n(I),x=a(14),U=a.n(x),j=a(15),B=a.n(j),W=a(16),O=a.n(W),_=a(17),N=a.n(_),q=a(18),R=a.n(q),V=a(19),M=a.n(V),D=a(20),H=a.n(D),J=a(21),P=a.n(J),Q=a(22),X=a.n(Q),G=a(23),$=a.n(G);window.AudioContext=window.AudioContext||window.webkitAudioContext;var z=(d.homepage+d.subversion).slice(-10),F=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(c.a)(t).call(this,e))).state={timerState:"initial",timerString:"00:00",timerStyle:{color:"black"}},a.params={presentationTime:5,warningTime:1,warningSound:null,qAndATime:3,beginTime:0,pausedAt:0,sound:"voice"},a.handleUI=a.handleUI.bind(Object(u.a)(a)),a.handleWindowClose=a.handleWindowClose.bind(Object(u.a)(a)),a.processTimer=a.processTimer.bind(Object(u.a)(a)),a.playSound=a.playSound.bind(Object(u.a)(a)),a.state.timerString=("00"+a.params.presentationTime).slice(-2)+":00",a.timerEvent=void 0,a.soundList=[],a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("beforeunload",this.handleWindowClose),g=new window.AudioContext,(E=new f.a(g)).start();var e=[];e[0]=w.a,e[1]=S.a,e[2]=C.a,e[3]=k.a,e[4]=A.a,e[5]=U.a,e[6]=B.a,e[7]=O.a,e[8]=N.a,e[9]=R.a,e[10]=M.a,e[11]=H.a,e[12]=P.a,e[13]=X.a,e[14]=$.a,new v(g,e,function(t){for(var a=0;a<e.length;a++)this.soundList[a]=t[a]}.bind(this)).load()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("beforeunload",this.handleWindowClose)}},{key:"render",value:function(){var e,t={color:this.state.timerStyle.color},a=this.state.timerString;return"initial"===this.state.timerState?e="Start":"paused"===this.state.timerState?e="Cont.":"running"===this.state.timerState?e="Pause":console.log("timerState error"),i.a.createElement("div",{className:"presentimer"},i.a.createElement("h3",null,"Presentation Timer"),i.a.createElement("hr",null),i.a.createElement("div",{className:"timebox",style:t},a),i.a.createElement("hr",null),i.a.createElement("span",{className:"redbutton"},i.a.createElement("button",{name:"startStop",onClick:this.handleUI},e)),"\xa0 \xa0",i.a.createElement("span",{className:"redbutton"},i.a.createElement("button",{name:"reset",onClick:this.handleUI},"Reset")),i.a.createElement("hr",null),i.a.createElement("span",{className:"selector"},"Presentation talk(min): \xa0",i.a.createElement("select",{name:"presenTime",defaultValue:this.params.presentationTime,onChange:this.handleUI},i.a.createElement("option",{value:"1"},"1"),i.a.createElement("option",{value:"2"},"2"),i.a.createElement("option",{value:"3"},"3"),i.a.createElement("option",{value:"4"},"4"),i.a.createElement("option",{value:"5"},"5"),i.a.createElement("option",{value:"6"},"6"),i.a.createElement("option",{value:"7"},"7"),i.a.createElement("option",{value:"8"},"8"),i.a.createElement("option",{value:"9"},"9"),i.a.createElement("option",{value:"10"},"10"),i.a.createElement("option",{value:"15"},"15"),i.a.createElement("option",{value:"20"},"20"),i.a.createElement("option",{value:"25"},"35"),i.a.createElement("option",{value:"30"},"30"),i.a.createElement("option",{value:"40"},"40"),i.a.createElement("option",{value:"45"},"45"),i.a.createElement("option",{value:"50"},"50"),i.a.createElement("option",{value:"55"},"55"),i.a.createElement("option",{value:"60"},"60"),i.a.createElement("option",{value:"70"},"70"),i.a.createElement("option",{value:"80"},"80"),i.a.createElement("option",{value:"90"},"90")),i.a.createElement("br",null),"Warning: \xa0",i.a.createElement("select",{name:"warningTime",defaultValue:this.params.warningTime,onChange:this.handleUI},i.a.createElement("option",{value:"0"},"none"),i.a.createElement("option",{value:"1"},"1"),i.a.createElement("option",{value:"2"},"2"),i.a.createElement("option",{value:"3"},"3"),i.a.createElement("option",{value:"4"},"4"),i.a.createElement("option",{value:"5"},"5"),i.a.createElement("option",{value:"10"},"10"),i.a.createElement("option",{value:"15"},"15"),i.a.createElement("option",{value:"20"},"20")),"\xa0 minute(s) more",i.a.createElement("br",null),"Q and A (min): \xa0",i.a.createElement("select",{name:"qAndATime",defaultValue:this.params.qAndATime,onChange:this.handleUI},i.a.createElement("option",{value:"1"},"1"),i.a.createElement("option",{value:"2"},"2"),i.a.createElement("option",{value:"3"},"3"),i.a.createElement("option",{value:"4"},"4"),i.a.createElement("option",{value:"5"},"5"),i.a.createElement("option",{value:"6"},"6"),i.a.createElement("option",{value:"7"},"7"),i.a.createElement("option",{value:"8"},"8"),i.a.createElement("option",{value:"9"},"9"),i.a.createElement("option",{value:"10"},"10"),i.a.createElement("option",{value:"15"},"15"),i.a.createElement("option",{value:"20"},"20"))),i.a.createElement("br",null),"Sound alarm: ",i.a.createElement("br",null),i.a.createElement("span",{className:"radioButton"},i.a.createElement("input",{type:"radio",name:"alarmSound",value:"cowbell_mid",onChange:this.handleUI}),"Cowbell_mid,",i.a.createElement("input",{type:"radio",name:"alarmSound",value:"cowbell_high",onChange:this.handleUI}),"Cowbell_high,",i.a.createElement("input",{type:"radio",name:"alarmSound",value:"rideCup",onChange:this.handleUI}),"RideCup, ",i.a.createElement("br",null),i.a.createElement("input",{type:"radio",name:"alarmSound",value:"church",onChange:this.handleUI}),"Church,",i.a.createElement("input",{type:"radio",name:"alarmSound",value:"hotel",defaultChecked:"true",onChange:this.handleUI}),"Hotel,",i.a.createElement("input",{type:"radio",name:"alarmSound",value:"voice",onChange:this.handleUI}),"Voice,",i.a.createElement("input",{type:"radio",name:"alarmSound",value:"mute",onChange:this.handleUI}),"Mute"),i.a.createElement("br",null),i.a.createElement("hr",null),"Version: ",z,", ",i.a.createElement("a",{href:"https://goto920.github.io/presentationTimer.html",target:"_blank"},"Manual/Update"))}},{key:"handleUI",value:function(e){if("startStop"!==e.target.name)if("reset"!==e.target.name)if("presenTime"!==e.target.name)"warningTime"===e.target.name&&(this.params.warningTime=parseInt(e.target.value,10),this.params.warningTime>=this.params.presentationTime&&(this.params.warningTime=0)),"qAndATime"!==e.target.name?"alarmSound"!==e.target.name||(this.params.sound=e.target.value):this.params.qAndATime=parseInt(e.target.value,10);else{this.params.presentationTime=parseInt(e.target.value,10);var t=this.params.presentationTime+":00";this.setState({timerString:t})}else{void 0!==this.timerEvent&&this.timerEvent.clear();var a=this.params.presentationTime+":00";this.setState({timerState:"initial",timerString:a,timerStyle:{color:"black"}})}else"running"===this.state.timerState?(this.params.pausedAt=g.currentTime-this.params.beginTime,this.timerEvent.clear(),this.setState({timerState:"paused"})):"initial"===this.state.timerState?(this.params.beginTime=g.currentTime,this.timerEvent=E.callbackAtTime(function(e){this.processTimer()}.bind(this),g.currentTime).repeat(1).tolerance({early:.1,late:1}),this.setState({timerState:"running"})):"paused"===this.state.timerState&&(this.params.beginTime=g.currentTime-this.params.pausedAt,this.timerEvent=E.callbackAtTime(function(e){this.processTimer()}.bind(this),g.currentTime+this.params.pausedAt%1).repeat(1).tolerance({early:.1,late:.1}),this.setState({timerState:"running"}))}},{key:"handleWindowClose",value:function(e){E.stop(),g.close()}},{key:"processTimer",value:function(){var e,t,a,n=g.currentTime-this.params.beginTime;if(n<60*(this.params.presentationTime-this.params.warningTime)){var i=60*this.params.presentationTime-n;e=("00"+parseInt(i/60,10)).slice(-2)+":"+("00"+parseInt(i%60,10)).slice(-2),a="blue"}else if(n<60*this.params.presentationTime){var r=60*this.params.presentationTime-n;e=("00"+parseInt(r/60,10)).slice(-2)+":"+("00"+parseInt(r%60,10)).slice(-2),a="orange"}else n<=60*(this.params.presentationTime+this.params.qAndATime)?(t=n-60*this.params.presentationTime,e="+"+parseInt(t/60,10)+":"+("00"+parseInt(t%60,10)).slice(-2),a="green"):(t=n-60*parseInt(this.params.presentationTime,10),e="++"+parseInt(t/60,10)+":"+("00"+parseInt(t%60,10)).slice(-2),a="red");a===this.state.timerStyle.color?this.setState({timerString:e}):(this.setState({timerString:e,timerStyle:{color:a}}),"mute"!==this.params.sound&&("orange"===a?this.playSound(1):"green"===a?this.playSound(2):"red"===a&&this.playSound(3)))}},{key:"playSound",value:function(e){var t,a;if("cowbell_mid"===this.params.sound?a=this.soundList[0]:"cowbell_high"===this.params.sound?a=this.soundList[1]:"rideCup"===this.params.sound?a=this.soundList[2]:"church"===this.params.sound?a=this.soundList[3]:"hotel"===this.params.sound&&(a=this.soundList[4]),0===this.params.warningTime?this.params.warningSound=null:1===this.params.warningTime?this.params.warningSound=this.soundList[5]:2===this.params.warningTime?this.params.warningSound=this.soundList[6]:3===this.params.warningTime?this.params.warningSound=this.soundList[7]:4===this.params.warningTime?this.params.warningSound=this.soundList[8]:5===this.params.warningTime?this.params.warningSound=this.soundList[9]:10===this.params.warningTime?this.params.warningSound=this.soundList[10]:15===this.params.warningTime?this.params.warningSound=this.soundList[11]:20===this.params.warningTime&&(this.params.warningSound=this.soundList[12]),1!==e)if(2!==e)if(3!==e);else if("voice"===this.params.sound)(t=g.createBufferSource()).buffer=this.soundList[14],t.connect(g.destination),t.start(g.currentTime);else for(var n=0;n<e;n++)(t=g.createBufferSource()).buffer=a,t.connect(g.destination),t.start(g.currentTime+1.5*n);else if("voice"===this.params.sound)(t=g.createBufferSource()).buffer=this.soundList[13],t.connect(g.destination),t.start(g.currentTime);else for(var i=0;i<e;i++)(t=g.createBufferSource()).buffer=a,t.connect(g.destination),t.start(g.currentTime+1.5*i);else"voice"===this.params.sound?((t=g.createBufferSource()).buffer=this.params.warningSound,t.connect(g.destination),t.start(g.currentTime)):((t=g.createBufferSource()).buffer=a,t.connect(g.destination),t.start(g.currentTime))}}]),t}(n.Component),K=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Y(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(i.a.createElement(F,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/demos/presentimer/20200211",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/demos/presentimer/20200211","/service-worker.js");K?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Y(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):Y(e)}))}}()}],[[26,1,2]]]);
//# sourceMappingURL=main.85a9f582.chunk.js.map