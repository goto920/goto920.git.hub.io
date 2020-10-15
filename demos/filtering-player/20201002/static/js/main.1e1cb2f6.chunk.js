(this["webpackJsonpfiltering-player"]=this["webpackJsonpfiltering-player"]||[]).push([[0],{23:function(t,e,a){t.exports=a(36)},28:function(t,e,a){},29:function(t,e,a){},36:function(t,e,a){"use strict";a.r(e);var i=a(0),r=a.n(i),n=a(2),s=a.n(n),l=(a(28),a(5)),o=a(6),h=a(3),u=a(22),c=a(21),f=(a(29),a(7)),p=a(8),m=a(13),d=a(14),g=a(20),v=a(15),y=a(4),S=a.n(y),b=function(){function t(e,a){Object(l.a)(this,t),this.shiftSize=e,this.sampleRate=a,this.rfft=new v.FFTR(2*this.shiftSize),this.fftObjBuffer=[],this.lastInput=[],this.lastInput[0]=new Float32Array(e).fill(0),this.lastInput[1]=new Float32Array(e).fill(0),this.lastOut=[],this.lastOut[0]=new Float32Array(e).fill(0),this.lastOut[1]=new Float32Array(e).fill(0),this.filterChain=[],this.calcFFT=this.calcFFT.bind(this),this.justFFT=this.justFFT.bind(this),this.calcPan=this.calcPan.bind(this),this.calcPerc=this.calcPerc.bind(this),this.fftFilter=this.fftFilter.bind(this),this.addFilter=this.addFilter.bind(this),this.clearAllFilter=this.clearAllFilter.bind(this),this.presetFilter=this.presetFilter.bind(this)}return Object(o.a)(t,[{key:"addFilter",value:function(t,e,a,i,r){var n=Math.min(this.shiftSize,Math.round(this.shiftSize*(2*e/this.sampleRate))),s=Math.min(this.shiftSize,Math.round(this.shiftSize*(2*i/this.sampleRate)));this.filterChain.push({fromPan:t,fromFreqIndex:n,toPan:a,toFreqIndex:s,action:r})}},{key:"clearAllFilter",value:function(){this.filterChain.length=0}},{key:"copy",value:function(t,e){for(var a=0;a<t.numberOfChannels;a++){var i=t.getChannelData(a),r=e.getChannelData(a);if(AudioBuffer.prototype.copyToChannel)e.copyToChannel(i,a,0);else for(var n=0;n<t.length;n++)r[n]=i[n]}}},{key:"presetFilter",value:function(t,e){var a;switch(this.clearAllFilter(),console.log("filter, option ",t,e),t){case"bypass":break;case"drumCover":a=e,this.addFilter(-1,0,1,3e4,"H"),this.addFilter(-a/2,220,a/2,4e3,"T"),this.addFilter(-1,220,-.9,4e3,"T"),this.addFilter(.9,220,1,4e3,"T");break;case"karaokeMale":a=e,this.addFilter(-a/2,220,a/2,8e3,"M");break;case"karaokeFemale":a=e,this.addFilter(-a/2,350,a/2,8e3,"M");break;case"percussive":this.addFilter(-1,0,1,3e4,"P");break;case"harmonic":this.addFilter(-1,0,1,3e4,"H")}}},{key:"process",value:function(t,e){if(2===t.numberOfChannels){var a=[];a[0]=new Float32Array(2*this.shiftSize),a[1]=new Float32Array(2*this.shiftSize);for(var i=0;i<=1;i++){for(var r=t.getChannelData(i),n=0;n<2*this.shiftSize;n++)n<this.shiftSize?a[i][n]=this.lastInput[i][n]:n<this.shiftSize+r.length?a[i][n]=r[n-this.shiftSize]:a[i][n]=0;for(var s=0;s<this.shiftSize;s++)this.lastInput[i][s]=a[i][this.shiftSize+s]}var l=this.calcFFT(a),o=[];if(null!==l){var h=this.fftFilter(l);o[0]=this.rfft.inverse(h[0]).slice(),o[1]=this.rfft.inverse(h[1]).slice()}else o[0]=new Float32Array(2*this.shiftSize+2).fill(0),o[1]=new Float32Array(2*this.shiftSize+2).fill(0);for(var u=0;u<=1;u++){for(var c=e.getChannelData(u),f=0;f<this.shiftSize;f++)c[f]=this.lastOut[u][f]+o[u][f]/(2*this.shiftSize);for(var p=0;p<this.shiftSize;p++)this.lastOut[u][p]=o[u][this.shiftSize+p]/(2*this.shiftSize)}}}},{key:"justFFT",value:function(t){var e=[];return e[0]=this.rfft.forward(S.a.hann(t[0])).slice(),e[1]=this.rfft.forward(S.a.hann(t[1])).slice(),e}},{key:"calcFFT",value:function(t){var e=[];e[0]=this.rfft.forward(S.a.hann(t[0])).slice(),e[1]=this.rfft.forward(S.a.hann(t[1])).slice();var a=[];a[0]=new Float32Array(this.shiftSize+1),a[1]=new Float32Array(this.shiftSize+1);for(var i=0;i<=this.shiftSize;i++)a[0][i]=e[0][2*i]*e[0][2*i]+e[0][2*i+1]*e[0][2*i+1],a[1][i]=e[1][2*i]*e[1][2*i]+e[1][2*i+1]*e[1][2*i+1];var r={fftCoef:e,pan:[],panAmp:[],power:a,percL:[],percR:[]};return this.calcPan(r),this.fftObjBuffer.push(r),this.calcPerc(this.fftObjBuffer)}},{key:"calcPan",value:function(t){for(var e=t.fftCoef,a=e[0].length/2,i=new Float32Array(a),r=new Float32Array(a),n=0;n<a;n++){var s=2*n,l=e[0][s]*e[1][s]+e[0][s+1]*e[1][s+1],o=e[0][s]*e[1][s+1]-e[0][s+1]*e[1][s],h=Math.sqrt(Math.pow(e[0][s]+e[1][s],2)+Math.pow(e[0][s+1]+e[1][s+1],2)),u=Math.sqrt(Math.pow(e[0][s],2)+Math.pow(e[0][s+1],2)),c=Math.sqrt(Math.pow(e[1][s],2)+Math.pow(e[1][s+1],2)),f=Math.sqrt(Math.pow(e[0][s]-e[1][s],2)+Math.pow(e[0][s+1]-e[1][s+1],2)),p=0;u<c?(l<0?(p=0,r[n]=(f-u)/h):l<=c*c?(p=l/(c*c),r[n]=Math.max(u,f)-Math.abs(o)/c):(p=1,r[n]=u-f),i[n]=(1-p)/(1+p)):(l<0?(p=0,r[n]=(f-c)/h):l<=u*u?(p=l/(u*u),r[n]=Math.max(c,f)-Math.abs(o)/u):(p=1,r[n]=c-f),i[n]=(p-1)/(1+p)),isNaN(i[n])&&(i[n]=0),isNaN(r[n])&&(r[n]=0)}t.pan=i,t.panAmp=r}},{key:"calcPerc",value:function(t){var e=function(t){var e=Math.floor(t.length/2),a=Object(g.a)(t).sort((function(t,e){return t-e}));return t.length%2!==0?a[e]:(a[e-1]+a[e])/2},a=t.length;if(a<17)return null;for(var i=new Float32Array(this.shiftSize+1).fill(.5),r=new Float32Array(this.shiftSize+1).fill(.5),n=t[8],s=0;s<=this.shiftSize;s++){for(var l=Math.max(0,s-9),o=Math.min(s+9,this.shiftSize+1),h=e(n.power[0].slice(l,o)),u=e(n.power[1].slice(l,o)),c=[],f=[],p=0;p<a;p++)c.push(t[p].power[0][s]),f.length=0,f.push(t[p].power[1][s]);var m=e(c),d=e(f);i[s]=h*h/(h*h+m*m),isNaN(i[s])&&(i[s]=.5),r[s]=u*u/(u*u+d*d),isNaN(r[s])&&(r[s]=.5)}t[8].percL=i,t[8].percR=r;var v={fftCoef:[n.fftCoef[0].slice(),n.fftCoef[1].slice()],pan:n.pan.slice(),panAmp:n.panAmp.slice(),power:[n.power[0].slice(),n.power[1].slice()],perc:[i.slice(),r.slice()]};return a>=17&&t.splice(0,1),v}},{key:"fftFilter",value:function(t){for(var e=t.fftCoef[0],a=t.fftCoef[1],i=t.perc[0],r=t.perc[1],n=e.slice(),s=a.slice(),l=0;l<this.filterChain.length;l++)for(var o=this.filterChain[l],h=o.action,u=o.fromFreqIndex;u<=o.toFreqIndex;u++)if(!(t.pan[u]<o.fromPan||t.pan[u]>o.toPan))switch(h){case"T":n[2*u]=e[2*u],n[2*u+1]=e[2*u+1],s[2*u]=a[2*u],s[2*u+1]=a[2*u+1];break;case"M":n[2*u]=n[2*u+1]=0,s[2*u]=s[2*u+1]=0;break;case"P":n[2*u]=e[2*u]*i[u],n[2*u+1]=e[2*u+1]*i[u],s[2*u]=a[2*u]*r[u],s[2*u+1]=a[2*u+1]*r[u];break;case"H":n[2*u]=e[2*u]*(1-i[u]),n[2*u+1]=e[2*u+1]*(1-i[u]),s[2*u]=a[2*u]*(1-r[u]),s[2*u+1]=a[2*u+1]*(1-r[u]);break;default:console.log("Filter undef action",h)}return[n,s]}}]),t}(),A=a(19),B=(a(35),(f.homepage+f.subversion).slice(-11)),F=p.ja,w=p.us,C=w;window.AudioContext=window.AudioContext||window.webkitAudioContext,window.OfflineAudioContext=window.OfflineAudioContext||window.webkitOfflineAudioContext;var k=null,P=null,E=null,O=null,R=!1;(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i))&&(R=!0);var j=function(t){Object(u.a)(a,t);var e=Object(c.a)(a);function a(t){var i;return Object(l.a)(this,a),(i=e.call(this)).params={inputAudio:null,outputAudio:null,outputLength:0,filename:null,currentSource:null,isPlaying:!1,isBatchPlaying:!1,isRendering:!1,playStartTime:0,effectNode:null,fftShift:512},i.counter=0,i.state={ja:!1,playingAt:0,A:0,B:0,filterType:"bypass",centerWidth:.2,playVolume:80,startButtonStr:"NotYet",processBatchButtonStr:"NotYet",playBatchButtonStr:"NotYet",saveButtonStr:"NotYet"},i.loadFile=i.loadFile.bind(Object(h.a)(i)),i.handleLang=i.handleLang.bind(Object(h.a)(i)),i.handleTimeRange=i.handleTimeRange.bind(Object(h.a)(i)),i.handleVolumeSlider=i.handleVolumeSlider.bind(Object(h.a)(i)),i.handlePlay=i.handlePlay.bind(Object(h.a)(i)),i.handleOffline=i.handleOffline.bind(Object(h.a)(i)),i.handleSave=i.handleSave.bind(Object(h.a)(i)),i.selectFilter=i.selectFilter.bind(Object(h.a)(i)),i.fakeDownload=i.fakeDownload.bind(Object(h.a)(i)),i}return Object(o.a)(a,[{key:"handleWindowClose",value:function(t){k.close()}},{key:"componentDidMount",value:function(){k=new window.AudioContext,E=k.createGain(),window.addEventListener("beforeClosing",this.handleWindowClose)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("beforeClosing",this.handleWindowClose)}},{key:"render",value:function(){var t=0;this.params.inputAudio&&(t=this.params.inputAudio.duration);var e={};return r.a.createElement("div",{className:"App"},C.title,r.a.createElement("span",{className:"small-button"}," \xa0\xa0",r.a.createElement("button",{name:"language",onClick:this.handleLang},this.state.ja?"En(US)":"\u65e5\u672c\u8a9e")),r.a.createElement("hr",null),"1) Select stereo audio file (local/cloud)",r.a.createElement("br",null),r.a.createElement("span",{className:"selectFile"},r.a.createElement("input",{type:"file",name:"loadFile",accept:"audio/*",onChange:this.loadFile}),r.a.createElement("br",null)),r.a.createElement("hr",null),r.a.createElement("span",{className:"selector"},"2) Filter: \xa0",r.a.createElement("select",{name:"selectFilter",value:this.state.filterType,onChange:this.selectFilter},r.a.createElement("option",{value:"bypass"},"bypass"),r.a.createElement("option",{value:"drumCover"},"drumCover"),r.a.createElement("option",{value:"karaokeMale"},"karaokeMale"),r.a.createElement("option",{value:"karaokeFemale"},"karaokeFemale"),r.a.createElement("option",{value:"percussive"},"percussive"),r.a.createElement("option",{value:"harmonic"},"harmonic"),r.a.createElement("option",{value:"setWithGUI"},"setWithGUI")),r.a.createElement("br",null),"centerWidth: \xa0",r.a.createElement("select",{name:"centerWidth",value:this.state.centerWidth,onChange:this.selectFilter},r.a.createElement("option",{value:"0.1Total: 242."},"0.1"),r.a.createElement("option",{value:"0.2"},"0.2"),r.a.createElement("option",{value:"0.3"},"0.3"),r.a.createElement("option",{value:"0.4"},"0.4"),r.a.createElement("option",{value:"0.5"},"0.5"),r.a.createElement("option",{value:"0.6"},"0.6"),r.a.createElement("option",{value:"0.7"},"0.7")),"\xa0 Range: ",-this.state.centerWidth/2," -- ",this.state.centerWidth/2),r.a.createElement("hr",null),r.a.createElement("span",null,"3) Time Range: ",this.state.A.toFixed(2)," -- ",this.state.B.toFixed(2),r.a.createElement("center",null,r.a.createElement(A.a,{style:{width:"85%",cursor:"pointer"},min:0,max:t,value:[this.state.A,this.state.playingAt,this.state.B],allowCross:!1,trackStyle:[{backgroundColor:"red"},{backgroundColor:"green"}],handleStyle:[{backgroundColor:"yellow"},{backgroundColor:"gray"},{backgroundColor:"yellow"}],onChange:this.handleTimeRange})),"Total: ",t.toFixed(2)," sec \xa0\xa0 Current: ",this.state.playingAt.toFixed(2)),r.a.createElement("hr",null),r.a.createElement("span",{className:"small-button"},"4) Processing: Batch or Realtime",r.a.createElement("br",null),"Batch: \xa0",r.a.createElement("button",{name:"startBatch",style:e,onClick:this.handleOffline},this.state.processBatchButtonStr)," \xa0\xa0 Play: \xa0\xa0",r.a.createElement("button",{name:"playBatch",style:e,onClick:this.handleOffline},this.state.playBatchButtonStr)," \xa0\xa0",r.a.createElement("button",{name:"stopBatchPlay",onClick:this.handleOffline},"Stop"),r.a.createElement("hr",{style:{border:"none",borderTop:"1px dotted blue"}}),"Realtime: \xa0",r.a.createElement("button",{name:"startPause",style:e,onClick:this.handlePlay},this.state.startButtonStr)," \xa0\xa0",r.a.createElement("button",{name:"stop",onClick:this.handlePlay},"Stop"),r.a.createElement("br",null),r.a.createElement("hr",null),"5) Export output buffer: \xa0",r.a.createElement("button",{name:"save",onClick:this.handleSave},this.state.saveButtonStr)),r.a.createElement("hr",null),"Playback Vol: ",this.state.playVolume," ",r.a.createElement("br",null),r.a.createElement("span",{className:"slider"},r.a.createElement("center",null,"000 ",r.a.createElement("input",{type:"range",name:"volumeSlider",min:"0",max:"150",value:this.state.playVolume,onChange:this.handleVolumeSlider})," 150",r.a.createElement("br",null))),r.a.createElement("hr",null),"Version: ",B,", \xa0",r.a.createElement("a",{href:C.homepage,target:"_blank",rel:"noopener noreferrer"},C.guide),r.a.createElement("hr",null))}},{key:"loadFile",value:function(t){if("loadFile"===t.target.name&&0!==t.target.files.length&&!this.params.isPlaying){var e=t.target.files[0];this.params.filename=e.name;var a=new FileReader;a.onload=function(t){k.decodeAudioData(a.result,function(t){this.params.inputAudio=t,2===t.numberOfChannels&&(this.setState({playingAt:0}),this.setState({startButtonStr:"Play"}),this.setState({A:0,B:t.duration}),this.setState({processBatchButtonStr:"Start",saveButtonStr:"NotYet"}),O=null,O=new b(this.params.fftShift,t.sampleRate))}.bind(this),(function(t){console.log("Filereader error: "+t.err)}))}.bind(this),a.readAsArrayBuffer(e)}}},{key:"handleLang",value:function(t){"language"===t.target.name&&(this.state.ja?(C=w,this.setState({ja:!1})):(C=F,this.setState({ja:!0})))}},{key:"handleVolumeSlider",value:function(t){if("volumeSlider"===t.target.name){var e=parseInt(t.target.value);E.gain.value=e/100,this.setState({playVolume:e})}}},{key:"handleTimeRange",value:function(t){this.params.isPlaying||this.setState({A:parseFloat(t[0]),playingAt:parseFloat(t[1]),B:parseFloat(t[2])})}},{key:"handlePlay",value:function(t){if("stop"!==t.target.name){if("startPause"===t.target.name){if("Play"===this.state.startButtonStr){if(this.params.isPlaying||2!==this.params.inputAudio.numberOfChannels)return;if(this.params.isPlaying=!0,R){var e=k.createBuffer(1,1,44100),a=k.createBufferSource();a.buffer=e,a.connect(k.destination),a.start()}var i=k.createBufferSource();this.params.currentSource=i;for(var r=this.params.inputAudio,n=k.createBuffer(r.numberOfChannels,r.length+r.sampleRate,r.sampleRate),s=0;s<n.numberOfChannels;s++){for(var l=r.getChannelData(s),o=n.getChannelData(s),h=0;h<n.sampleRate/2;h++)o[h]=0;for(var u=n.sampleRate/2;u<r.length;u++)o[u]=l[u-n.sampleRate/2];for(var c=r.length;c<n.length;c++)o[c]=0}i.buffer=n;var f=this.params.inputAudio.numberOfChannels,p=this.params.fftShift,m=null;return k.createJavaScriptNode?m=k.createJavaScriptNode(p,f,f):k.createScriptProcessor&&(m=k.createScriptProcessor(p,f,f)),this.params.effectNode=m,i.connect(m),m.connect(E),E.connect(k.destination),i.start(0,this.state.playingAt),this.params.outputAudio=k.createBuffer(n.numberOfChannels,n.length,n.sampleRate),this.counter=0,m.onaudioprocess=function(t){var e=t.inputBuffer,a=t.outputBuffer;O.process(e,a);for(var r=a.getChannelData(0),s=a.getChannelData(1),l=this.params.outputAudio.getChannelData(0),o=this.params.outputAudio.getChannelData(1),h=0;h<this.params.fftShift;h++){var u=this.counter*this.params.fftShift;l[u+h]=r[h],o[u+h]=s[h]}if(this.state.playingAt*e.sampleRate>=n.length)return i.stop(),this.params.currentSource=null,m.disconnect(),m.onaudioprocess=null,O=null,void this.setState({startButtonStr:"Play",saveButtonStr:"Save"});this.counter++;this.counter%20===0&&this.setState({playingAt:this.state.playingAt+20*e.length/e.sampleRate})}.bind(this),void this.setState({startButtonStr:"Pause"})}if("Pause"===this.state.startButtonStr){if(!this.params.isPlaying)return;return this.params.currentSource.disconnect(),this.params.effectNode.disconnect(),this.params.effectNode.onaudioprrocess=null,E.disconnect(),this.params.currentSource.stop(),this.setState({startButtonStr:"Play"}),void(this.params.isPlaying=!1)}}if("rewind"!==t.target.name);else{if(this.params.isPlaying)return;this.setState({playingAt:0})}}else if("NotYet"!==this.state.startButtonStr){null!==this.params.currentSource&&(this.params.currentSource.stop(),this.params.currentSource=null);var d=this.params.effectNode;null!==d&&(d.disconnect(),d.onaudioprocess=null),this.params.outputLength=this.state.playingAt-this.state.A,this.setState({playingAt:this.state.A,startButtonStr:"Play",saveButtonStr:"Export"}),this.params.isPlaying=!1}}},{key:"selectFilter",value:function(t){if("selectFilter"===t.target.name&&null!==O){switch(t.target.value){case"drumCover":case"karaokeMale":case"karaokeFemale":O.presetFilter(t.target.value,this.state.centerWidth);break;case"percussive":case"harmonic":O.presetFilter(t.target.value,0);break;case"bypass":case"customWithGUI":O.presetFilter("bypass",0)}this.setState({filterType:t.target.value})}"centerWidth"===t.target.name&&null!==O&&null!==this.state.filterType&&(O.presetFilter(this.state.filterType,parseFloat(t.target.value)),this.setState({centerWidth:parseFloat(t.target.value)}))}},{key:"handleOffline",value:function(t){if("playBatch"!==t.target.name){if("stopBatchPlay"===t.target.name){if(!this.params.isBatchPlaying)return;if(null!==this.params.currentSource)this.params.currentSource.stop();return this.params.isPlaying=!1,this.params.outputLength=this.state.playingAt-this.state.A,void this.setState({playBatchButtonStr:"Play",processBatchButtonStr:"Start"})}if("startBatch"===t.target.name){if("Abort"===this.state.processBatchButtonStr)return void(this.params.isRendering&&(this.params.isRendering=!1,this.setState({processBatchButtonStr:"Start",playBatchButtonStr:"Play"}),this.params.isBatchPlaying=!1,P=null,this.params.outputAudio=this.trimOutput(this.params.outputAudio,this.state.playingAt-this.state.A),this.setState({playingAt:this.state.A})));if("Start"!==this.state.processBatchButtonStr)return;var e=this.addOneSec(this.params.inputAudio,this.state.A*this.params.inputAudio.sampleRate,this.state.B*this.params.inputAudio.sampleRate),a=(P=new OfflineAudioContext(e.numberOfChannels,e.length,e.sampleRate)).createBufferSource();this.params.currentSource=a,a.buffer=e;var i=null;if(P.createJavaScriptNode)i=P.createJavaScriptNode(this.params.fftShift,2,2);else{if(!P.createScriptProcessor)return console.log("offlineCtx JavaScriptNode/ScriptProcessor not supported"),void(i=null);i=P.createScriptProcessor(this.params.fftShift,2,2)}this.params.effectNode=i,a.connect(i),i.connect(P.destination);var r=k.createBuffer(e.numberOfChannels,e.length,e.sampleRate);this.params.outputAudio=r;var n=r.getChannelData(0),s=r.getChannelData(1),l=0;return i.onaudioprocess=function(t){if(this.params.isRendering){var e=t.inputBuffer,a=k.createBuffer(2,e.length,e.sampleRate);O.process(e,a);for(var i=a.getChannelData(0),r=a.getChannelData(1),o=0;o<e.length;o++)n[l+o]=i[o],s[l+o]=r[o];l/this.params.fftShift%20===0&&this.setState({playingAt:l/e.sampleRate}),l+=this.params.fftShift}}.bind(this),a.start(),this.params.isRendering=!0,P.startRendering(),this.setState({processBatchButtonStr:"Abort"}),void(P.oncomplete=function(t){this.params.isBatchPlaying=!1,this.params.outputLength=this.state.playingAt-this.state.A,this.setState({playBatchButtonStr:"Play",processBatchStr:"Start",saveButtonStr:"Export"})}.bind(this))}}else if("Play"===this.state.playBatchButtonStr){if(this.params.isBatchPlaying)return;var o=k.createBufferSource();this.params.currentSource=o,o.buffer=this.params.outputAudio,o.connect(E),E.connect(k.destination),o.start(0,this.state.playingAt),this.setState({playBatchButtonStr:"Pause"}),this.params.playStartTime=k.currentTime,this.params.isBatchPlaying=!0}else if("Pause"===this.state.playBatchButtonStr){if(!this.params.isBatchPlaying)return;this.params.currentSource.stop(),this.setState({playingAt:k.currentTime-this.params.playStartTime})}}},{key:"addOneSec",value:function(t,e,a){for(var i=k.createBuffer(t.numberOfChannels,a-e+t.sampleRate,t.sampleRate),r=t.getChannelData(0),n=t.getChannelData(1),s=i.getChannelData(0),l=i.getChannelData(1),o=t.sampleRate/2,h=0;h<o;h++)s[h]=0,l[h]=0;for(var u=e;u<a;u++)s[o+u]=r[u],l[o+u]=n[u];for(var c=0;c<o;c++)s[o+a+c]=0,l[o+a+c]=0;return i}},{key:"handleSave",value:function(t){"save"===t.target.name&&null!==this.params.outputAudio&&this.fakeDownload(this.trimOutput(this.params.outputAudio,this.params.outputLength))}},{key:"trimOutput",value:function(t,e){for(var a=k.createBuffer(t.numberOfChannels,t.sampleRate*e,t.sampleRate),i=t.getChannelData(0),r=t.getChannelData(1),n=a.getChannelData(0),s=a.getChannelData(1),l=0;l<a.length;l++)n[l]=i[l],s[l]=r[l];return a}},{key:"fakeDownload",value:function(t){var e=this.params.filename.split(".")[0]+"-modified.wav",a=new Blob([m(t)],{type:"audio/vnd.wav"});Object(d.saveAs)(a,e)}}]),a}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},7:function(t){t.exports=JSON.parse('{"name":"filtering-player","version":"0.1.0","private":true,"homepage":"/demos/filtering-player/20201002","subversion":"-01","dependencies":{"@testing-library/jest-dom":"^5.11.4","@testing-library/react":"^10.4.9","@testing-library/user-event":"^12.1.6","audiobuffer-to-wav":"^1.0.0","fft-windowing":"^0.1.4","file-saver":"^2.0.2","kissfft-js":"^0.1.8","rc-slider":"^9.5.1","react":"^16.13.1","react-dom":"^16.13.1","react-scripts":"^3.4.3"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}')},8:function(t){t.exports=JSON.parse('{"us":{"title":"KG\'s Filtering Player","guide":"guide/update","homepage":"https://goto920.github.io/demos/filtering-player/"},"ja":{"title":"KG\'s \u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u30d7\u30ec\u30a4\u30e4\u30fc","guide":"\u30ac\u30a4\u30c9/\u66f4\u65b0","homepage":"https://goto920.github.io/demos/filtering-player/index-jp.html"}}')}},[[23,1,2]]]);
//# sourceMappingURL=main.1e1cb2f6.chunk.js.map