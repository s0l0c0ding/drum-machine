(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{22:function(e,s,a){},23:function(e,s,a){},25:function(e,s,a){"use strict";a.r(s);var t=a(1),n=a(0),c=a.n(n),m=a(11),r=a.n(m),d=(a(22),a(23),a(12)),o=a(13),i=a(16),u=a(14),p=a(9),l=function(e){var s=e.pad.key;return Object(t.jsx)("div",{children:Object(t.jsxs)(p.a,{onClick:function(){return e.parentCallback(s)},variant:"outline-info",size:"lg",block:!0,children:[s,Object(t.jsx)("audio",{id:s,src:e.pad[e.instrument],className:"clip"})]})})},h=function(e){document.getElementById(e).play()},j=a(8),f=a(7),y=a(6),b=a(15),k=[{key:"Q",display:"Q is pressed",soundPiano:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",soundDrum:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{key:"W",display:"Chord-2",soundPiano:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",soundDrum:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{key:"E",display:"Chord-3",soundPiano:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",soundDrum:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{key:"A",display:"Shaker",soundPiano:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",soundDrum:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{key:"S",display:"Open-HH",soundPiano:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",soundDrum:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{key:"D",display:"Closed-HH",soundPiano:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",soundDrum:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{key:"Z",display:"Punchy-Kick",soundPiano:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",soundDrum:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{key:"X",display:"Side-Stick",soundPiano:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",soundDrum:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{key:"C",display:"Snare",soundPiano:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",soundDrum:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],O=function(e){Object(i.a)(a,e);var s=Object(u.a)(a);function a(e){var t;return Object(d.a)(this,a),(t=s.call(this,e)).getDisplyDataCallback=function(e){t.setState({display:e}),h(e)},t.changeInstrument=function(){t.setState({instrument:"soundDrum"===t.state.instrument?"soundPiano":"soundDrum"})},t.keyPressed=function(e){var s=e.key.toUpperCase();k.map((function(e){return e.key})).includes(s)&&t.getDisplyDataCallback(s)},t.state={pads:k,display:"###",instrument:"soundDrum"},t}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(t.jsx)(b.a,{children:Object(t.jsxs)(j.a,{className:" mt-4 mb-4",children:[Object(t.jsxs)(f.a,{className:"justify-content-md-center",children:[Object(t.jsx)(y.a,{sm:3,children:Object(t.jsx)("p",{id:"display",children:this.state.display})}),Object(t.jsx)(y.a,{sm:{span:1,offset:3},children:Object(t.jsx)(p.a,{onClick:this.changeInstrument,variant:"light",children:this.state.instrument.substr(5)})})]}),Object(t.jsx)(f.a,{className:"justify-content-md-center",children:Object(t.jsx)("div",{id:"drum-machine",onKeyDown:this.keyPressed,children:Object(t.jsx)(y.a,{sm:12,children:Object(t.jsx)(j.a,{className:"mt-2",children:Object(t.jsx)(f.a,{children:this.state.pads.map((function(s,a){return Object(t.jsx)(y.a,{sm:4,className:"mt-2",children:Object(t.jsx)("div",{className:"drum-pad",id:s.key+a,children:Object(t.jsx)(l,{pad:s,parentCallback:e.getDisplyDataCallback,instrument:e.state.instrument},s.key)})})}))})})})})})]})})}}]),a}(c.a.Component);a(24);var x=function(){return Object(t.jsx)("div",{className:" d-flex align-items-center min-vh-100",children:Object(t.jsx)(j.a,{children:Object(t.jsxs)(f.a,{className:"justify-content-md-center",children:[Object(t.jsx)(y.a,{sm:2}),Object(t.jsx)(y.a,{sm:8,children:Object(t.jsx)(O,{})}),Object(t.jsx)(y.a,{sm:2})]})})})},D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,26)).then((function(s){var a=s.getCLS,t=s.getFID,n=s.getFCP,c=s.getLCP,m=s.getTTFB;a(e),t(e),n(e),c(e),m(e)}))};r.a.render(Object(t.jsx)(c.a.StrictMode,{children:Object(t.jsx)(x,{})}),document.getElementById("root")),D()}},[[25,1,2]]]);
//# sourceMappingURL=main.5e00dce8.chunk.js.map