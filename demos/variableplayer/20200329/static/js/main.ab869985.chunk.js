(this.webpackJsonpvariablespeedplayer=this.webpackJsonpvariablespeedplayer||[]).push([[0],{13:function(e,t,a){e.exports=a(21)},18:function(e,t,a){},19:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n,r,l=a(0),i=a.n(l),o=a(5),s=a.n(o),p=(a(18),a(6)),c=a(7),h=a(11),u=a(8),d=a(1),m=a(12),f=(a(19),a(2)),g=a(3),S=a(9),v=a(10),y=(g.homepage+g.subversion).slice(-10);window.AudioContext=window.AudioContext||window.webkitAudioContext;var B=null,b=!1;(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i))&&(b=!0);var P=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).params={filename:void 0,audioBuffer:void 0,isPlaying:!1,loop:!1,exportDataL:void 0,exportDataR:void 0,exportBuffer:void 0,save:!1},a.state={playingAt:0,timeA:0,timeB:0,playSpeed:100,playPitch:0,playPitchSemi:0,playPitchCents:0,playVolume:80,startButtonStr:"loadFile!",loopButtonStr:"LoopAB",saveButtonStr:"ExportWav"},a.setState=a.setState.bind(Object(d.a)(a)),a.handleWindowClose=a.handleWindowClose.bind(Object(d.a)(a)),a.loadFile=a.loadFile.bind(Object(d.a)(a)),a.handleSpeedSlider=a.handleSpeedSlider.bind(Object(d.a)(a)),a.handlePitchSlider=a.handlePitchSlider.bind(Object(d.a)(a)),a.handleTimeSlider=a.handleTimeSlider.bind(Object(d.a)(a)),a.handleVolumeSlider=a.handleVolumeSlider.bind(Object(d.a)(a)),a.handlePlay=a.handlePlay.bind(Object(d.a)(a)),a.handleSaveA=a.handleSaveA.bind(Object(d.a)(a)),a.handleSaveB=a.handleSaveB.bind(Object(d.a)(a)),a.fakeDownload=a.fakeDownload.bind(Object(d.a)(a)),a.handleLoop=a.handleLoop.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleWindowClose",value:function(e){n.close()}},{key:"componentDidMount",value:function(){n=new window.AudioContext,r=n.createGain(),window.addEventListener("beforeClosing",this.handleWindowClose)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("beforeClosing",this.handleWindowClose)}},{key:"render",value:function(){var e,t,a,n=this.loadFile,r=this.handleSpeedSlider,l=this.handlePitchSlider,o=this.handleVolumeSlider,s=this.handleTimeSlider,p=this.handlePlay,c=(this.handleSaveA,this.handleSaveB),h=this.handleLoop,u=this.state,d=u.playingAt,m=u.timeA,f=u.timeB,g=u.playSpeed,S=u.playPitch,v=u.playPitchSemi,B=u.playPitchCents,b=u.playVolume,P=u.startButtonStr,A=u.loopButtonStr,E=u.saveButtonStr,w=0;return void 0!==this.params.audioBuffer&&(w=this.params.audioBuffer.duration),e="Pause"===P?{color:"green"}:{},t="StopLoop"===A?{color:"green"}:{},a="AbortExport"===E?{color:"green"}:{},i.a.createElement("div",{className:"App"},"Variable speed/pitch audio player",i.a.createElement("br",null),"with soundtouchjs by KG",i.a.createElement("hr",null),"1) Input Audio (local file): ",i.a.createElement("br",null),i.a.createElement("span",{className:"selectFile"},i.a.createElement("input",{type:"file",name:"loadFile",accept:"audio/*",onChange:n}),i.a.createElement("br",null)),i.a.createElement("hr",null),"Speed(%): ",g," ",i.a.createElement("br",null),i.a.createElement("span",{className:"slider"},i.a.createElement("center",null,"025",i.a.createElement("input",{type:"range",name:"speedSlider",min:"25",max:"200",value:g,onChange:r}),"200")),i.a.createElement("hr",null),"Pitch (semi-tone.cents): ",S," ",i.a.createElement("br",null),i.a.createElement("span",{className:"slider"},i.a.createElement("center",null,"-12",i.a.createElement("input",{type:"range",name:"pitchSliderSemi",min:"-12",max:"12",value:v,onChange:l}),"12",i.a.createElement("br",null),"-100",i.a.createElement("input",{type:"range",name:"pitchSliderCents",min:"-100",max:"100",value:B,onChange:l}),"100",i.a.createElement("br",null))),i.a.createElement("hr",null),"Time: ",Math.round(d),i.a.createElement("br",null),i.a.createElement("span",{className:"slider"},i.a.createElement("center",null,"0",i.a.createElement("input",{type:"range",name:"timeSlider",min:"0",max:w,value:d,step:"1",onChange:s}),Math.round(w),i.a.createElement("br",null)),i.a.createElement("button",{name:"setA",onClick:h},"setA"),": ",Math.round(10*m)/10," \xa0\xa0",i.a.createElement("button",{name:"setB",onClick:h},"setB"),": ",Math.round(10*f)/10),i.a.createElement("hr",null),"Volume: ",b,i.a.createElement("br",null),i.a.createElement("span",{className:"slider"},i.a.createElement("center",null,"0",i.a.createElement("input",{type:"range",name:"volumeSlider",min:"0",max:"150",value:b,onChange:o}),"150",i.a.createElement("br",null))),i.a.createElement("hr",null),i.a.createElement("span",null,"2) ",i.a.createElement("button",{name:"startPause",onClick:p,style:e},P)," \xa0\xa0",i.a.createElement("button",{name:"LoopAB",onClick:h,style:t},A)," \xa0\xa0",i.a.createElement("button",{name:"reset",onClick:h},"ResetAB")," ",i.a.createElement("hr",null),"3) ",i.a.createElement("button",{name:"save",onClick:c,style:a},E)," (At playback speed, vol. 100%)"),i.a.createElement("hr",null),"Version: ",y,", \xa0",i.a.createElement("a",{href:"https://goto920.github.io/demos/variableplayer/",target:"_blank",rel:"noopener noreferrer"},"Manual/Update"))}},{key:"loadFile",value:function(e){if("loadFile"===e.target.name&&0!==e.target.files.length&&!this.params.isPlaying){this.setState({totalTime:0}),this.setState({startButtonStr:"loadFile!"});var t=e.target.files[0];this.params.filename=t.name;var a=new FileReader;a.onload=function(e){n.decodeAudioData(a.result,function(e){this.params.audioBuffer=e,this.setState({startButtonStr:"PlayFromA",playingAt:0}),this.setState({timeA:0}),this.setState({timeB:e.duration})}.bind(this),(function(e){console.log("Filereader error: "+e.err)}))}.bind(this),a.readAsArrayBuffer(t)}}},{key:"handleSpeedSlider",value:function(e){console.log("handleSpeedSlider"),"speedSlider"===e.target.name&&(B&&(B.tempo=e.target.value/100),this.setState({playSpeed:e.target.value}))}},{key:"handlePitchSlider",value:function(e){var t;console.log("handlePitchSlider"),"pitchSliderSemi"===e.target.name&&(t=1*e.target.value+this.state.playPitchCents/100,this.setState({playPitchSemi:e.target.value})),"pitchSliderCents"===e.target.name&&(t=1*this.state.playPitchSemi+e.target.value/100,this.setState({playPitchCents:e.target.value})),B&&(B.pitch=Math.pow(2,t/12)),this.setState({playPitch:t})}},{key:"handleTimeSlider",value:function(e){if(console.log("handleTimeSlider"),"timeSlider"===e.target.name&&"PlayFromA"===this.state.startButtonStr){var t=e.target.value;this.setState({playingAt:t})}}},{key:"handleVolumeSlider",value:function(e){if("volumeSlider"===e.target.name){var t=1*e.target.value;r.gain.value=t/100,this.setState({playVolume:t})}}},{key:"handlePlay",value:function(e){var t=this,a=this.params.audioBuffer;if(b){var l=n.createBuffer(1,1,44100),i=n.createBufferSource();i.buffer=l,i.connect(n.destination),i.start()}if("startPause"!==e.target.name&&"LoopAB"!==e.target.name);else{var o=this.state.timeA,s=this.state.timeB;if(s<=o&&(s=o+10,this.setState({timeB:s})),"Pause"===this.state.startButtonStr){if(!this.params.isPlaying)return;if(this.setState({timeA:this.state.playingAt}),null===B)return;return B.disconnect(),B.off(),B=null,this.params.isPlaying=!1,void this.setState({startButtonStr:"PlayFromA"})}if("startPause"===e.target.name&&"PlayFromA"===this.state.startButtonStr){if(this.params.isPlaying)return;s=a.duration}if("PlayFromA"===this.state.startButtonStr||this.state.loop){console.log("Play AB",o,s);var p=n.createBuffer(2,(s-o)*a.sampleRate,a.sampleRate),c=a.getChannelData(0),h=a.getChannelData(1);c=c.subarray(o*a.sampleRate,s*a.sampleRate);for(var u=p.getChannelData(0),d=0;d<c.length;d++)u[d]=c[d];if(a.numberOfChannels>=2){u=p.getChannelData(1),h=h.subarray(o*a.sampleRate,s*a.sampleRate);for(var m=0;m<h.length;m++)u[m]=h[m]}return(B=new f.a(n,p,4096)).tempo=this.state.playSpeed/100,B.pitch=Math.pow(2,this.state.playPitch/12),B.on("play",(function(e){var a=parseFloat(o)+parseFloat(e.timePlayed);t.setState({playingAt:a}),e.percentagePlayed>=100&&(B.disconnect(),B.off(),B=null,t.params.isPlaying=!1,t.params.loop&&t.handlePlay({target:{name:"LoopAB"}}),"Pause"===t.state.startButtonStr&&t.setState({startButtonStr:"PlayFromA"}))})),this.params.isPlaying=!0,B.connect(r),r.connect(n.destination),"startPause"===e.target.name&&"PlayFromA"===this.state.startButtonStr&&this.setState({startButtonStr:"Pause"}),void console.log("Play AB END")}}}},{key:"handleSaveA",value:function(e){var t=this.params.audioBuffer;if(!this.state.isPlayng){console.log("handleSaveA");var a=parseInt(t.length*(100/this.state.playSpeed)),r=new OfflineAudioContext(t.numberOfChannels,a,t.sampleRate);(B=new f.a(r,t,512)).tempo=this.state.playSpeed/100,B.pitch=Math.pow(2,this.state.playPitch/12),this.params.isPlaying=!0,r.oncomplete=function(e){console.log("offline shifter rendering complete:",e.renderedBuffer);var t=n.createBufferSource();t.buffer=e.renderedBuffer,t.connect(n.destination),t.start()},B.connect(r.destination),r.startRendering(),console.log("handleSaveA")}}},{key:"fakeDownload",value:function(e){console.log("fakeDownload");var t=this.params.filename.split(".")[0]+"&s"+parseInt(this.state.playSpeed)+"&p"+parseInt(100*this.state.playPitch)+".wav",a=new Blob([v(e)],{type:"audio/vnd.wav"});Object(S.saveAs)(a,t),console.log("fakeDownLoad end",t)}},{key:"handleSaveB",value:function(e){var t=this;if(console.log("handleSaveB"),"save"===e.target.name){var a=this.params.audioBuffer;if("AbortExport"===this.state.saveButtonStr)return B.disconnect(),B.off(),this.params.isPlaying=!1,this.setState({saveButtonStr:"ExportWav"}),void console.log("handleSaveB: AbortExport");if("ExportWav"===this.state.saveButtonStr&&(console.log("handleSaveB: ExportWav","playing",this.params.isPlaying),!this.params.isPlaying)){if(b){var l=n.createBuffer(1,1,44100),i=n.createBufferSource();i.buffer=l,i.connect(n.destination),i.start()}var o=null,s=a.numberOfChannels;if((B=new f.a(n,a,4096)).tempo=this.state.playSpeed/100,B.pitch=Math.pow(2,this.state.playPitch/12),n.createJavaScriptNode)o=n.createJavaScriptNode(4096,s,s);else{if(!n.createScriptProcessor)return void console.log("createScript is not supported");o=n.createScriptProcessor(4096,s,s)}this.params.exportBuffer=n.createBuffer(s,parseInt(a.length*(100/this.state.playSpeed)),a.sampleRate),this.params.exportDataL=new Float32Array(this.params.exportBuffer.length),this.params.exportDataR=new Float32Array(this.params.exportBuffer.length),this.params.save=!0;var p=0;o.onaudioprocess=function(e){for(var t=e.inputBuffer,a=e.outputBuffer,n=0;n<t.numberOfChannels;n++)for(var r=t.getChannelData(n),l=a.getChannelData(n),i=0;i<t.length;i++)l[i]=r[i],0===n?this.params.exportDataL[p+i]=r[i]:this.params.exportDataR[p+i]=r[i];p+=t.length}.bind(this),B.on("play",(function(e){var a=parseFloat(e.timePlayed);if(t.setState({playingAt:a}),e.percentagePlayed>=100){B.disconnect(),B.off();for(var n=t.params.exportBuffer.getChannelData(0),r=0;r<t.params.exportDataL.length;r++)n[r]=t.params.exportDataL[r];if(t.params.exportBuffer.numberOfChannels>=2){n=t.params.exportBuffer.getChannelData(1);for(var l=0;l<t.params.exportDataR.length;l++)n[l]=t.params.exportDataR[l]}t.fakeDownload(t.params.exportBuffer),t.params.save=!1,t.setState({saveButtonStr:"ExportWav"}),t.params.isPlaying=!1}})),this.params.isPlaying=!0,B.connect(o),o.connect(r),r.connect(n.destination),this.setState({saveButtonStr:"AbortExport"}),console.log("handleSaveB: ExportWav END")}}}},{key:"handleLoop",value:function(e){if(console.log("handleLoop"),"setA"===e.target.name&&this.setState({timeA:this.state.playingAt}),"setB"===e.target.name&&(this.state.playingAt>=this.state.timeA?this.setState({timeB:parseFloat(this.state.playingAt)}):this.setState({timeB:parseFloat(this.state.timeA)+parseFloat(10)})),"LoopAB"===e.target.name)if("LoopAB"===this.state.loopButtonStr){if(console.log("handleLoop: LoopAB","playing",this.params.isPlaying),this.params.isPlaying)return;B&&(B.disconnect(),B.off()),this.setState({loopButtonStr:"StopLoop"}),this.params.loop=!0,this.handlePlay({target:{name:"LoopAB"}})}else if("StopLoop"===this.state.loopButtonStr){if(console.log("handleLoop: StopLoop","playing",this.params.isPlaying),!this.params.isPlaying)return;B&&(B.disconnect(),B.off(),B=null),this.params.loop=!1,this.params.isPlaying=!1,this.setState({loopButtonStr:"LoopAB"})}if("reset"===e.target.name)return console.log("handleLoop: reset"),B&&(B.disconnect(),B.off(),B=null),this.setState({startButtonStr:"PlayFromA",playingAt:0,timeA:0,timeB:this.params.audioBuffer.duration}),this.params.loop=!1,this.params.isPlaying=!1,void this.setState({loopButtonStr:"LoopAB"})}}]),t}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},3:function(e){e.exports=JSON.parse('{"name":"variablespeedplayer","version":"0.1.0","private":true,"homepage":"/demos/variableplayer/20200329","subversion":"-00","dependencies":{"audiobuffer-to-wav":"^1.0.0","file-saver":"^2.0.2","react":"^16.13.1","react-dom":"^16.13.1","react-scripts":"3.3.1","soundtouchjs":"^0.1.10","whatwg-fetch":"^3.0.0"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject"},"eslintConfig":{"extends":"react-app"},"browserslist":[">0.2%","not dead","not ie <= 11","not op_mini all"]}')}},[[13,1,2]]]);
//# sourceMappingURL=main.ab869985.chunk.js.map