(this.webpackJsonpvariablespeedplayer=this.webpackJsonpvariablespeedplayer||[]).push([[0],{14:function(e,t,a){e.exports=a(22)},19:function(e,t,a){},20:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n,r,l=a(0),i=a.n(l),s=a(6),o=a.n(s),p=(a(19),a(7)),u=a(8),c=a(12),h=a(9),m=a(1),d=a(13),f=(a(20),a(2)),v=a(3),S=a(10),g=a(11),y=a(4),B=(v.homepage+v.subversion).slice(-11),b=y.ja,A=y.us,E=A;window.AudioContext=window.AudioContext||window.webkitAudioContext;var w=null,x=!1;(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i))&&(x=!0);var P=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).params={filename:null,audioBuffer:null,isPlaying:!1,loop:!1,loopInterval:2,exportDataL:null,exportDataR:null,exportBuffer:null,save:!1},a.state={ja:!1,playingAt:0,playingAtSlider:0,timeA:0,timeB:0,playSpeed:100,playPitch:0,playPitchSemi:0,playPitchCents:0,playVolume:80,startButtonStr:E.loadFile,loopButtonStr:E.loopAB,saveButtonStr:E.exportWav},a.setState=a.setState.bind(Object(m.a)(a)),a.handleWindowClose=a.handleWindowClose.bind(Object(m.a)(a)),a.loadFile=a.loadFile.bind(Object(m.a)(a)),a.handleSpeedSlider=a.handleSpeedSlider.bind(Object(m.a)(a)),a.handlePitchSlider=a.handlePitchSlider.bind(Object(m.a)(a)),a.handleTimeSlider=a.handleTimeSlider.bind(Object(m.a)(a)),a.handleVolumeSlider=a.handleVolumeSlider.bind(Object(m.a)(a)),a.handlePlay=a.handlePlay.bind(Object(m.a)(a)),a.handleSaveB=a.handleSaveB.bind(Object(m.a)(a)),a.fakeDownload=a.fakeDownload.bind(Object(m.a)(a)),a.handleLoop=a.handleLoop.bind(Object(m.a)(a)),a.playAB=a.playAB.bind(Object(m.a)(a)),a.handleLang=a.handleLang.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"handleWindowClose",value:function(e){w&&(w.disconnect(),w.off(),w=null),n.close()}},{key:"componentDidMount",value:function(){n=new window.AudioContext,r=n.createGain(),window.addEventListener("beforeClosing",this.handleWindowClose)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("beforeClosing",this.handleWindowClose)}},{key:"render",value:function(){var e,t,a,n=this.loadFile,r=this.handleSpeedSlider,l=this.handlePitchSlider,s=this.handleVolumeSlider,o=this.handleTimeSlider,p=this.handlePlay,u=this.handleSaveB,c=this.handleLoop,h=this.handleLang,m=this.state,d=m.ja,f=m.playingAt,v=m.playingAtSlider,S=m.timeA,g=m.timeB,y=m.playSpeed,b=m.playPitch,A=m.playPitchSemi,w=m.playPitchCents,x=m.playVolume,P=m.startButtonStr,C=m.loopButtonStr,O=m.saveButtonStr,k=0;this.params.audioBuffer&&(k=this.params.audioBuffer.duration),e=P===E.pause?{color:"green"}:{},t=C===E.stopLoop?{color:"green"}:{},a=O===E.abortExport?{color:"green"}:{};var F={border:"1px dotted",color:"blue"};return i.a.createElement("div",{className:"App"},E.title," \xa0\xa0",i.a.createElement("span",{className:"small-button"},i.a.createElement("button",{name:"language",onClick:h},d?"En(US)":"\u65e5\u672c\u8a9e")),i.a.createElement("hr",null),"1) ",E.input,": ",i.a.createElement("br",null),i.a.createElement("span",{className:"selectFile"},i.a.createElement("input",{type:"file",name:"loadFile",accept:"audio/*",onChange:n}),i.a.createElement("br",null)),i.a.createElement("hr",null),E.speed,": ",y," ",i.a.createElement("br",null),i.a.createElement("span",{className:"slider"},i.a.createElement("center",null,"025",i.a.createElement("input",{type:"range",name:"speedSlider",min:"25",max:"200",value:y,onChange:r}),"200")),i.a.createElement("hr",null),E.pitch,": ",parseFloat(b).toFixed(2)," ",i.a.createElement("br",null),i.a.createElement("span",{className:"slider"},i.a.createElement("center",null,"-12",i.a.createElement("input",{type:"range",name:"pitchSliderSemi",min:"-12",max:"12",value:A,onChange:l}),"12",i.a.createElement("br",null),i.a.createElement("hr",{style:F}),"-100",i.a.createElement("input",{type:"range",name:"pitchSliderCents",min:"-100",max:"100",value:w,onChange:l}),"100",i.a.createElement("br",null))),i.a.createElement("hr",null),E.time,": ",f.toFixed(2)," \xa0 ",E.timeNote,i.a.createElement("br",null),i.a.createElement("span",{className:"slider"},i.a.createElement("center",null,"0",i.a.createElement("input",{type:"range",name:"timeSlider",min:"0",max:k,value:v,step:"1",onChange:o}),Math.round(k),i.a.createElement("br",null)),i.a.createElement("button",{name:"setA",onClick:c},E.setA),": ",S.toFixed(2)," \xa0\xa0",i.a.createElement("button",{name:"setB",onClick:c},E.setB),": ",g.toFixed(2)," \xa0\xa0",i.a.createElement("button",{name:"reset",onClick:c},E.resetAB)),i.a.createElement("hr",null),E.volume,": ",x," \xa0\xa0 ",E.volumeNote,i.a.createElement("br",null),i.a.createElement("span",{className:"slider"},i.a.createElement("center",null,"0",i.a.createElement("input",{type:"range",name:"volumeSlider",min:"0",max:"150",value:x,onChange:s}),"150",i.a.createElement("br",null))),i.a.createElement("hr",null),i.a.createElement("span",null,"2A) ",i.a.createElement("button",{name:"startPause",onClick:p,style:e},P)," \xa0\xa0",i.a.createElement("button",{name:"Rewind",onClick:c},E.rewind),i.a.createElement("hr",{style:F}),"2B) ",i.a.createElement("button",{name:"LoopAB",onClick:c,style:t},C)," \xa0\xa0",E.interval," ",i.a.createElement("span",{className:"selector"},i.a.createElement("select",{name:"loopInterval",defaultValue:this.params.loopInterval,onChange:c},i.a.createElement("option",{value:"0"},"00"),i.a.createElement("option",{value:"1"},"01"),i.a.createElement("option",{value:"2"},"02"),i.a.createElement("option",{value:"4"},"04"),i.a.createElement("option",{value:"5"},"05"),i.a.createElement("option",{value:"10"},"10"),i.a.createElement("option",{value:"20"},"20"),i.a.createElement("option",{value:"30"},"30"),i.a.createElement("option",{value:"60"},"60"))),i.a.createElement("hr",null),"3) ",i.a.createElement("button",{name:"save",onClick:u,style:a},O)," \xa0 ",E.saveNote),i.a.createElement("hr",null),E.version,": ",B,", \xa0",i.a.createElement("a",{href:E.homepage,target:"_blank",rel:"noopener noreferrer"},E.guide),i.a.createElement("br",null),"Based on ",i.a.createElement("a",{href:"https://github.com/cutterbl/SoundTouchJS",target:"_blank",rel:"noopener noreferrer"},"cutterbl/SoundTouchJS"))}},{key:"loadFile",value:function(e){if("loadFile"===e.target.name&&0!==e.target.files.length&&!this.params.isPlaying){this.setState({totalTime:0}),this.setState({startButtonStr:E.playOnce});var t=e.target.files[0];this.params.filename=t.name;var a=new FileReader;a.onload=function(e){n.decodeAudioData(a.result,function(e){this.params.audioBuffer=e,this.setState({startButtonStr:E.playOnce,playingAt:0,playingAtSlider:0}),this.setState({timeA:0}),this.setState({timeB:e.duration})}.bind(this),(function(e){console.log("Filereader error: "+e.err)}))}.bind(this),a.readAsArrayBuffer(t)}}},{key:"handleSpeedSlider",value:function(e){"speedSlider"===e.target.name&&(w&&(w.tempo=e.target.value/100),this.setState({playSpeed:e.target.value}))}},{key:"handlePitchSlider",value:function(e){var t;"pitchSliderSemi"===e.target.name?(t=parseFloat(e.target.value)+parseFloat(this.state.playPitchCents)/100,this.setState({playPitchSemi:e.target.value})):"pitchSliderCents"===e.target.name&&(t=parseFloat(this.state.playPitchSemi)+parseFloat(e.target.value)/100,this.setState({playPitchCents:e.target.value})),w&&(w.pitch=Math.pow(2,t/12)),this.setState({playPitch:t})}},{key:"handleTimeSlider",value:function(e){if("timeSlider"===e.target.name&&this.state.startButtonStr===E.playOnce){var t=e.target.value;this.setState({playingAt:parseFloat(t)}),this.setState({playingAtSlider:t})}}},{key:"handleVolumeSlider",value:function(e){if("volumeSlider"===e.target.name){var t=1*e.target.value;r.gain.value=t/100,this.setState({playVolume:t})}}},{key:"handlePlay",value:function(e){var t=this.params.audioBuffer;if(x){var a=n.createBuffer(1,1,44100),r=n.createBufferSource();r.buffer=a,r.connect(n.destination),r.start()}if("startPause"===e.target.name){var l,i;if(this.state.startButtonStr===E.pause){if(!this.params.isPlaying)return;if(null===w)return;return w.disconnect(),w.off(),w=null,this.params.isPlaying=!1,this.setState({playingAtSlider:this.state.playingAt}),void this.setState({startButtonStr:E.playOnce})}if("startPause"===e.target.name&&this.state.startButtonStr===E.playOnce){if(this.params.isPlaying)return;return l=this.state.playingAt,i=t.duration,void this.playAB(l,i)}}}},{key:"fakeDownload",value:function(e){var t=this.params.filename.split(".")[0]+"&s"+parseInt(this.state.playSpeed)+"&p"+parseInt(100*this.state.playPitch)+".wav",a=new Blob([g(e)],{type:"audio/vnd.wav"});Object(S.saveAs)(a,t)}},{key:"handleSaveB",value:function(e){var t=this;if("save"===e.target.name&&this.state.startButtonStr===E.playOnce&&this.state.loopButtonStr===E.loopAB){if(x){r=n.createGain();var a=n.createBuffer(1,1,44100),l=n.createBufferSource();l.buffer=a,l.connect(n.destination),l.start()}var i=this.params.audioBuffer;if(this.state.saveButtonStr===E.abortExport)return w.disconnect(),w.off(),w=null,n.close(),n=new window.AudioContext,this.params.isPlaying=!1,void this.setState({saveButtonStr:E.exportWav});if(this.state.saveButtonStr===E.exportWav&&!this.params.isPlaying&&i){var s=null,o=i.numberOfChannels;if(w&&(w.disconnect(),w.off(),w=null),(w=new f.a(n,i,4096)).tempo=this.state.playSpeed/100,w.pitch=Math.pow(2,this.state.playPitch/12),n.createJavaScriptNode)s=n.createJavaScriptNode(4096,o,o);else{if(!n.createScriptProcessor)return void console.log("createScript is not supported");s=n.createScriptProcessor(4096,o,o)}this.params.exportBuffer=n.createBuffer(o,parseInt(i.length*(100/this.state.playSpeed)),i.sampleRate),this.params.exportDataL=new Float32Array(this.params.exportBuffer.length),this.params.exportDataR=new Float32Array(this.params.exportBuffer.length),this.params.save=!0;var p=0;s.onaudioprocess=function(e){for(var t=e.inputBuffer,a=e.outputBuffer,n=0;n<t.numberOfChannels;n++)for(var r=t.getChannelData(n),l=a.getChannelData(n),i=0;i<t.length;i++)l[i]=r[i],0===n?this.params.exportDataL[p+i]=r[i]:this.params.exportDataR[p+i]=r[i];p+=t.length}.bind(this),r.gain.value=.2,this.handleVolumeSlider({target:{name:"volumeSlider",value:20}}),w.on("play",(function(e){var a=parseFloat(e.timePlayed);if(t.setState({playingAt:a}),t.setState({playingAtSlider:a}),e.percentagePlayed>=100){w.disconnect(),w.off(),w=null;for(var n=t.params.exportBuffer.getChannelData(0),r=0;r<t.params.exportDataL.length;r++)n[r]=t.params.exportDataL[r];if(t.params.exportBuffer.numberOfChannels>=2){n=t.params.exportBuffer.getChannelData(1);for(var l=0;l<t.params.exportDataR.length;l++)n[l]=t.params.exportDataR[l]}return t.fakeDownload(t.params.exportBuffer),t.params.isPlaying=!1,t.setState({saveButtonStr:E.exportWav}),void(t.params.save=!1)}})),this.setState({saveButtonStr:E.abortExport}),this.params.isPlaying=!0,w.connect(s),s.connect(r),r.connect(n.destination),n.resume()}}}},{key:"handleLoop",value:function(e){if("loopInterval"!==e.target.name){if("Rewind"===e.target.name){if(this.params.isPlaying)return;return this.setState({playingAt:0}),void this.setState({playingAtSlider:0})}if("setA"===e.target.name)return this.setState({timeA:this.state.playingAt}),void this.setState({playingAtSlider:this.state.playingAt});if("setB"!==e.target.name)if("LoopAB"!==e.target.name)if("reset"!==e.target.name);else{if(null===this.params.audioBuffer)return;this.setState({timeA:0,timeB:this.params.audioBuffer.duration,playingAtSlider:0})}else{if(!this.params.audioBuffer)return;if(this.state.loopButtonStr===E.loopAB){if(this.params.isPlaying)return;this.params.loop=!0,this.playAB(this.state.timeA,this.state.timeB),this.setState({loopButtonStr:E.stopLoop}),this.setState({startButtonStr:E.playOnce})}else if(this.state.loopButtonStr===E.stopLoop){if(!this.params.isPlaying)return;w&&(w.disconnect(),w.off(),w=null),this.params.isPlaying=!1,this.params.loop=!1,this.setState({loopButtonStr:E.loopAB})}}else this.state.playingAt>=this.state.timeA?this.setState({timeB:parseFloat(this.state.playingAt)}):this.setState({timeB:parseFloat(this.state.timeA)+parseFloat(10)})}else this.params.loopInterval=parseInt(e.target.value,10)}},{key:"playAB",value:function(e,t){var a=this;if(!this.params.isPlaying&&null!==this.params.audioBuffer){t<=e&&(t=e+5,this.setState({timeB:t}));var l=this.params,i=l.audioBuffer,s=l.loopInterval,o=e*i.sampleRate,p=t*i.sampleRate,u=0;this.params.loop&&(u=s*i.sampleRate);var c=n.createBuffer(2,p-o+u,i.sampleRate),h=i.getChannelData(0),m=i.getChannelData(1);h=h.subarray(o,p);for(var d=c.getChannelData(0),v=0;v<h.length;v++)d[v+u]=h[v];if(i.numberOfChannels>=2){d=c.getChannelData(1),m=m.subarray(o,p);for(var S=0;S<m.length;S++)d[S+u]=m[S]}w&&(w.disconnect(),w.off(),w=null),(w=new f.a(n,c,4096)).tempo=this.state.playSpeed/100,w.pitch=Math.pow(2,this.state.playPitch/12),w.on("play",(function(t){var n=parseFloat(e)+parseFloat(t.timePlayed);if(a.params.loop&&(n-=s),a.setState({playingAt:n}),a.setState({playingAtSlider:n}),t.percentagePlayed>=100)return w.disconnect(),w.off(),w=null,a.params.isPlaying=!1,a.state.startButtonStr===E.pause&&a.setState({startButtonStr:E.playOnce}),void(a.params.loop&&a.playAB(a.state.timeA,a.state.timeB))})),w.connect(r),r.connect(n.destination),n.resume(),this.params.isPlaying=!0,this.params.loop||this.setState({startButtonStr:E.pause})}}},{key:"handleLang",value:function(e){if(!this.params.isPlaying&&"language"===e.target.name){var t=E;return this.state.ja?(E=A,this.setState({ja:!1})):(E=b,this.setState({ja:!0})),this.state.startButtonStr===t.loadFile?this.setState({startButtonStr:E.loadFile}):this.state.startButtonStr===t.playOnce?this.setState({startButtonStr:E.playOnce}):this.state.startButtonStr===t.pause&&this.setState({startButtonStr:E.pause}),this.state.loopButtonStr===t.loopAB?this.setState({loopButtonStr:E.loopAB}):this.state.loopButtonStr===t.stopLoop&&this.setState({loopButtonStr:E.stopLoop}),void(this.state.saveButtonStr===t.exportWav?this.setState({saveButtonStr:E.exportWav}):this.state.saveButtonStr===t.abortExport&&this.setState({saveButtonStr:E.abortExport}))}}}]),t}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},3:function(e){e.exports=JSON.parse('{"name":"variablespeedplayer","version":"0.1.0","private":true,"homepage":"/demos/variableplayer/20200331","subversion":"-06","dependencies":{"audiobuffer-to-wav":"^1.0.0","file-saver":"^2.0.2","react":"^16.13.1","react-dom":"^16.13.1","react-scripts":"3.3.1","soundtouchjs":"^0.1.10","whatwg-fetch":"^3.0.0"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject"},"eslintConfig":{"extends":"react-app"},"browserslist":[">0.2%","not dead","not ie <= 11","not op_mini all"]}')},4:function(e){e.exports=JSON.parse('{"us":{"title":"KG\'s variable speed/pitch player","input":"Select audio file (local/cloud storage)","speed":"Speed(%)","pitch":"Pitch(semitone.cents)","time":"Time(sec)","timeNote":"(Start, A, B set)","setA":"setA","setB":"setB","resetAB":"ResetAB","volume":"Volume(%)","volumeNote":"(May change during export)","loadFile":"selectFile!","playOnce":"PlayOnce","pause":"Pause","rewind":"Rewind","loopAB":"loopAB","stopLoop":"StopLoop","interval":"interval(sec)","exportWav":"ExportWav","abortExport":"AbortExport","saveNote":"(download after playback)","version":"Version","guide":"guide/update","homepage":"https://goto920.github.io/demos/variableplayer/"},"ja":{"title":"KG\'s \u901f\u5ea6/\u97f3\u7a0b\u53ef\u5909\u30d7\u30ec\u30fc\u30e4","input":"\u30aa\u30fc\u30c7\u30a3\u30aa\u30fb\u30d5\u30a1\u30a4\u30eb\u9078\u629e (\u30ed\u30fc\u30ab\u30eb/\u30af\u30e9\u30a6\u30c9)","speed":"\u901f\u5ea6(%)","pitch":"\u97f3\u7a0b(\u534a\u97f3.\u534a\u97f3\u306e1/100)","time":"\u6642\u523b(\u79d2)","timeNote":"(\u4e00\u56de\u518d\u751f\u958b\u59cb, A, B\u8a2d\u5b9a)","setA":"\u8a2d\u5b9aA","setB":"\u8a2d\u5b9aB","resetAB":"\u30ea\u30bb\u30c3\u30c8AB","volume":"\u97f3\u91cf(%)","volumeNote":"(\u66f8\u304d\u51fa\u3057\u4e2d\u5909\u66f4\u53ef)","loadFile":"\u30d5\u30a1\u30a4\u30eb\u3092\u9078\u3093\u3067\u306d!","playOnce":"\u4e00\u56de\u518d\u751f","pause":"\u4e00\u6642\u505c\u6b62","rewind":"\u5dfb\u304d\u623b\u3057","loopAB":"AB\u30eb\u30fc\u30d7\u518d\u751f","stopLoop":"\u30eb\u30fc\u30d7\u505c\u6b62","interval":"\u9593\u9694(\u79d2)","exportWav":"Wav\u66f8\u304d\u51fa\u3057","abortExport":"\u66f8\u304d\u51fa\u3057\u4e2d\u6b62","saveNote":"(\u518d\u751f\u5f8c\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u958b\u59cb)","version":"\u7248","guide":"\u30ac\u30a4\u30c9/\u66f4\u65b0","homepage":"https://goto920.github.io/demos/variableplayer/index-jp.html"}}')}},[[14,1,2]]]);
//# sourceMappingURL=main.6a922236.chunk.js.map