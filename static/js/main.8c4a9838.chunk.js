(this.webpackJsonpmidi3d=this.webpackJsonpmidi3d||[]).push([[0],{16:function(e,t){!function(e){var t=e.noise={};function r(e,t,r){this.x=e,this.y=t,this.z=r}r.prototype.dot2=function(e,t){return this.x*e+this.y*t},r.prototype.dot3=function(e,t,r){return this.x*e+this.y*t+this.z*r};var a=[new r(1,1,0),new r(-1,1,0),new r(1,-1,0),new r(-1,-1,0),new r(1,0,1),new r(-1,0,1),new r(1,0,-1),new r(-1,0,-1),new r(0,1,1),new r(0,-1,1),new r(0,1,-1),new r(0,-1,-1)],n=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],o=new Array(512),i=new Array(512);t.seed=function(e){e>0&&e<1&&(e*=65536),(e=Math.floor(e))<256&&(e|=e<<8);for(var t=0;t<256;t++){var r;r=1&t?n[t]^255&e:n[t]^e>>8&255,o[t]=o[t+256]=r,i[t]=i[t+256]=a[r%12]}},t.seed(0);var s=.5*(Math.sqrt(3)-1),c=(3-Math.sqrt(3))/6,l=1/6;function u(e){return e*e*e*(e*(6*e-15)+10)}function d(e,t,r){return(1-r)*e+r*t}t.simplex2=function(e,t){var r,a,n=(e+t)*s,l=Math.floor(e+n),u=Math.floor(t+n),d=(l+u)*c,m=e-l+d,y=t-u+d;m>y?(r=1,a=0):(r=0,a=1);var _=m-r+c,j=y-a+c,h=m-1+2*c,b=y-1+2*c,f=i[(l&=255)+o[u&=255]],p=i[l+r+o[u+a]],g=i[l+1+o[u+1]],w=.5-m*m-y*y,O=.5-_*_-j*j,x=.5-h*h-b*b;return 70*((w<0?0:(w*=w)*w*f.dot2(m,y))+(O<0?0:(O*=O)*O*p.dot2(_,j))+(x<0?0:(x*=x)*x*g.dot2(h,b)))},t.simplex3=function(e,t,r){var a,n,s,c,u,d,m=.3333333333333333*(e+t+r),y=Math.floor(e+m),_=Math.floor(t+m),j=Math.floor(r+m),h=(y+_+j)*l,b=e-y+h,f=t-_+h,p=r-j+h;b>=f?f>=p?(a=1,n=0,s=0,c=1,u=1,d=0):b>=p?(a=1,n=0,s=0,c=1,u=0,d=1):(a=0,n=0,s=1,c=1,u=0,d=1):f<p?(a=0,n=0,s=1,c=0,u=1,d=1):b<p?(a=0,n=1,s=0,c=0,u=1,d=1):(a=0,n=1,s=0,c=1,u=1,d=0);var g=b-a+l,w=f-n+l,O=p-s+l,x=b-c+2*l,v=f-u+2*l,k=p-d+2*l,A=b-1+.5,M=f-1+.5,z=p-1+.5,D=i[(y&=255)+o[(_&=255)+o[j&=255]]],R=i[y+a+o[_+n+o[j+s]]],T=i[y+c+o[_+u+o[j+d]]],P=i[y+1+o[_+1+o[j+1]]],S=.6-b*b-f*f-p*p,L=.6-g*g-w*w-O*O,C=.6-x*x-v*v-k*k,E=.6-A*A-M*M-z*z;return 32*((S<0?0:(S*=S)*S*D.dot3(b,f,p))+(L<0?0:(L*=L)*L*R.dot3(g,w,O))+(C<0?0:(C*=C)*C*T.dot3(x,v,k))+(E<0?0:(E*=E)*E*P.dot3(A,M,z)))},t.perlin2=function(e,t){var r=Math.floor(e),a=Math.floor(t);e-=r,t-=a;var n=i[(r&=255)+o[a&=255]].dot2(e,t),s=i[r+o[a+1]].dot2(e,t-1),c=i[r+1+o[a]].dot2(e-1,t),l=i[r+1+o[a+1]].dot2(e-1,t-1),m=u(e);return d(d(n,c,m),d(s,l,m),u(t))},t.perlin3=function(e,t,r){var a=Math.floor(e),n=Math.floor(t),s=Math.floor(r);e-=a,t-=n,r-=s;var c=i[(a&=255)+o[(n&=255)+o[s&=255]]].dot3(e,t,r),l=i[a+o[n+o[s+1]]].dot3(e,t,r-1),m=i[a+o[n+1+o[s]]].dot3(e,t-1,r),y=i[a+o[n+1+o[s+1]]].dot3(e,t-1,r-1),_=i[a+1+o[n+o[s]]].dot3(e-1,t,r),j=i[a+1+o[n+o[s+1]]].dot3(e-1,t,r-1),h=i[a+1+o[n+1+o[s]]].dot3(e-1,t-1,r),b=i[a+1+o[n+1+o[s+1]]].dot3(e-1,t-1,r-1),f=u(e),p=u(t),g=u(r);return d(d(d(c,_,f),d(l,j,f),g),d(d(m,h,f),d(y,b,f),g),p)}}(this)},53:function(e,t,r){},54:function(e,t,r){},61:function(e,t,r){"use strict";r.r(t);var a=r(3),n=r(1),o=r.n(n),i=r(20),s=r.n(i),c=(r(53),r(6)),l=r(9),u=(r(54),r(8)),d=r(7),m=r(36),y=r.n(m),_=(r(35),r.p+"static/media/drums.bde58933.mid"),j=r.p+"static/media/tesselated.db632abb.mp3";function h(e){var t={};return Object.keys(e).forEach((function(r){"object"===typeof e[r]&&null!==e[r]?(Array.isArray(e[r])?t[r]=e[r].reduce((function(e,t){return Object(c.a)(Object(c.a)({},e),{},Object(d.a)({},Number(t.playTime),t))}),{}):t[r]=e[r],t[r]=h(t[r])):t[r]=e[r]})),t}function b(e,t,r){var a=e.type,o=e.subtype,i=e.note,s=window.currentMidi,c=(null===s||void 0===s?void 0:s.getEvents())||[],l=window.currentAudio,d=(window.audioStartTime,Object(n.useRef)([])),m=Object(n.useRef)(0),y=Object(n.useRef)();return Object(u.e)((function(e,n){var u=1e3*(null===l||void 0===l?void 0:l.currentTime)+300;if(y.current=null===d||void 0===d?void 0:d.current,c.length){d.current=h(function(e,t,r,a,n){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:100,i=e.getEvents();return void 0!==typeof n?i.filter((function(e){return e.type===r&&e.playTime<=t&&e.playTime>=t-o&&e.subtype===a&&e.param1===n})):i.filter((function(e){return e.playTime<=t&&e.playTime>=t-o&&e.subtype===a&&e.type===r}))}(s,u,a,o,i,u-m.current));var _=!1;Object.keys(null===d||void 0===d?void 0:d.current).length&&(Object.keys(d.current).forEach((function(e){d.current[e];"undefined"===typeof y.current[e]&&(_=!0)})),_&&t({elapsedMs:u,delta:u-m.current})),_||"function"!==typeof r||r({elapsedMs:u,delta:u-m.current})}m.current=u})),null}var f=function(){var e=Object(n.useState)(),t=Object(l.a)(e,2),r=(t[0],t[1]),i=o.a.createRef(),s=Object(n.useRef)();Object(n.useRef)(0),Object(n.useRef)(),Object(n.useRef)();return Object(n.useEffect)((function(){null===s||void 0===s||s.current;!function(e,t,r){var a=new XMLHttpRequest;a.onreadystatechange=function(e){if(4==a.readyState){if(200==a.status)return t(e.currentTarget.response);if(r)return r("".concat(a.status," ").concat(a.statusText));throw"".concat(a.status," ").concat(a.statusText)}},a.open("GET",e,!0),a.responseType="arraybuffer",a.send(null)}(_,(function(e){var t=new y.a(e);console.log(t);var a=t.header.getTicksPerBeat();t.header.setTicksPerBeat(174*a/120),r(t),window.currentMidi=t}),(function(){}))}),[]),Object(n.useEffect)((function(){return window.currentAudio=new Audio(j),i.current=window.currentAudio,window.audioAnalyzerData={},window.audioAnalyzerData.audioCtx=new window.AudioContext,window.audioAnalyzerData.analyzer=window.audioAnalyzerData.audioCtx.createAnalyser(),window.audioAnalyzerData.analyzer.fftSize=2048,window.audioAnalyzerData.bufferLength=window.audioAnalyzerData.analyzer.frequencyBinCount,window.audioAnalyzerData.dataArray=new Uint8Array(window.audioAnalyzerData.bufferLength),window.audioAnalyzerData.analyzer.getByteTimeDomainData(window.audioAnalyzerData.dataArray),window.audioAnalyzerData.source=window.audioAnalyzerData.audioCtx.createMediaElementSource(null===i||void 0===i?void 0:i.current),window.audioAnalyzerData.source.connect(window.audioAnalyzerData.analyzer),window.audioAnalyzerData.analyzer.connect(window.audioAnalyzerData.audioCtx.destination),i.current.play(),window.audioStartTime=Date.now(),function(){i.current.pause()}}),[]),Object(a.jsx)(a.Fragment,{})},p=r(63),g=r(64),w=r(0),O=r(19),x=r(41);function v(e,t,r){var a,n,o;if(e/=360,r/=100,0===(t/=100))a=n=o=r;else{var i=function(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e},s=r<.5?r*(1+t):r+t-r*t,c=2*r-s;a=i(c,s,e+1/3),n=i(c,s,e),o=i(c,s,e-1/3)}var l=function(e){var t=Math.round(255*e).toString(16);return 1===t.length?"0".concat(t):t};return"#".concat(l(a)).concat(l(n)).concat(l(o))}var k=r(62);function A(e){var t=Object(n.useRef)(),r=Object(n.useRef)(),o=Object(n.useRef)(v(new Date%360,100,50)),i=Object(O.a)("assets/scifi/scene.gltf"),s=i.nodes,l=i.materials,d=i.animations,m=Object(x.a)(d,t).actions;console.log(m);Object(u.g)().camera;return Object(n.useEffect)((function(){var e;Object.keys(l).forEach((function(e){"cloth_mat"!==e?l[e].wireframe=!0:l[e].opacity=.95})),null===(e=m[Object.keys(m)[0]])||void 0===e||e.play()})),b({type:8,subtype:8,note:40},(function(){var e=new w.Color(v(new Date/10%360,100,50));l.cloth_mat.color.r=e.r,l.cloth_mat.color.g=e.g,l.cloth_mat.color.b=e.b})),b({type:8,subtype:8,note:36},(function(){var e=new w.Color(v(45-new Date/10%360,100,50));l.body_mat.color.r=e.r,l.body_mat.color.g=e.g,l.body_mat.color.b=e.b})),b({type:8,subtype:8,note:41},(function(){var e=new w.Color(v(90-new Date/10%360,100,50));l.hair_outer_mat.color.r=e.r,l.hair_outer_mat.color.g=e.g,l.hair_outer_mat.color.b=e.b;var t=new w.Color(v(120-new Date/10%360,100,50));l.hair_inner_mat.color.r=t.r,l.hair_inner_mat.color.g=t.g,l.hair_inner_mat.color.b=t.b})),Object(u.e)((function(e,a){var n,o,i=e.camera;(null===(n=m[Object.keys(m)[0]])||void 0===n?void 0:n.time)<1.2916666269302368&&(null===(o=m[Object.keys(m)[0]])||void 0===o||o.getMixer().setTime(1.2916666269302368));if(null===t||void 0===t?void 0:t.current){var s=new w.Vector3(t.current.position.x,t.current.position.y+13,t.current.position.z);i.controls.target=s,t.current.position.z+=.1;var c=new w.Vector3(t.current.position.x,t.current.position.y+10,t.current.position.z);i.lookAt(c)}(null===r||void 0===r?void 0:r.current)&&(r.current.position.y=3*Math.sin(new Date/6e3))})),Object(a.jsxs)("group",Object(c.a)(Object(c.a)({ref:t},e),{},{dispose:null,children:[Object(a.jsx)("group",{rotation:[-Math.PI/2,0,0],children:Object(a.jsxs)("group",{rotation:[Math.PI/2,0,0],children:[Object(a.jsx)("mesh",{name:"0",material:l.cloth_mat,geometry:s[0].geometry,morphTargetDictionary:s[0].morphTargetDictionary,"material-color":null===o||void 0===o?void 0:o.current,morphTargetInfluences:s[0].morphTargetInfluences}),Object(a.jsx)("primitive",{object:s._rootJoint}),Object(a.jsx)("skinnedMesh",{material:l.body_mat,geometry:s.modelbody_body_mat_0.geometry,skeleton:s.modelbody_body_mat_0.skeleton}),Object(a.jsx)("skinnedMesh",{material:l.body_mat,geometry:s.modelteeth_upper_body_mat_0.geometry,skeleton:s.modelteeth_upper_body_mat_0.skeleton}),Object(a.jsx)("skinnedMesh",{material:l.body_mat,geometry:s.modelteeth_lower_body_mat_0.geometry,skeleton:s.modelteeth_lower_body_mat_0.skeleton}),Object(a.jsx)("skinnedMesh",{wireframe:!0,material:l.body_mat,geometry:s.modeltongue_body_mat_0.geometry,skeleton:s.modeltongue_body_mat_0.skeleton}),Object(a.jsx)("skinnedMesh",{material:l.eyes_outer_mat,geometry:s.modeleyes_R_outer_eyes_outer_mat_0.geometry,skeleton:s.modeleyes_R_outer_eyes_outer_mat_0.skeleton}),Object(a.jsx)("skinnedMesh",{material:l.eyes_inner_mat,geometry:s.modeleyes_R_inner_eyes_inner_mat_0.geometry,skeleton:s.modeleyes_R_inner_eyes_inner_mat_0.skeleton}),Object(a.jsx)("skinnedMesh",{material:l.eyes_outer_mat,geometry:s.modeleyes_L_outer_eyes_outer_mat_0.geometry,skeleton:s.modeleyes_L_outer_eyes_outer_mat_0.skeleton}),Object(a.jsx)("skinnedMesh",{material:l.eyes_inner_mat,geometry:s.modeleyes_L_inner_eyes_inner_mat_0.geometry,skeleton:s.modeleyes_L_inner_eyes_inner_mat_0.skeleton}),Object(a.jsx)("skinnedMesh",{material:l.tear_mat,geometry:s.modeltear_L_tear_mat_0.geometry,skeleton:s.modeltear_L_tear_mat_0.skeleton}),Object(a.jsx)("skinnedMesh",{material:l.tear_mat,geometry:s.modeltear_R_tear_mat_0.geometry,skeleton:s.modeltear_R_tear_mat_0.skeleton}),Object(a.jsx)("skinnedMesh",{material:l.hair_outer_mat,geometry:s.modelhair_outer_hair_outer_mat_0.geometry,skeleton:s.modelhair_outer_hair_outer_mat_0.skeleton}),Object(a.jsx)("skinnedMesh",{material:l.hair_inner_mat,geometry:s.modelhair_inner_hair_inner_mat_0.geometry,skeleton:s.modelhair_inner_hair_inner_mat_0.skeleton}),Object(a.jsx)("skinnedMesh",{material:l.eyelash_mat,geometry:s.modeleyelash_L_upper_eyelash_mat_0.geometry,skeleton:s.modeleyelash_L_upper_eyelash_mat_0.skeleton}),Object(a.jsx)("skinnedMesh",{material:l.eyelash_mat,geometry:s.modeleyelash_L_lower_eyelash_mat_0.geometry,skeleton:s.modeleyelash_L_lower_eyelash_mat_0.skeleton}),Object(a.jsx)("skinnedMesh",{material:l.eyelash_mat,geometry:s.modeleyelash_R_upper_eyelash_mat_0.geometry,skeleton:s.modeleyelash_R_upper_eyelash_mat_0.skeleton}),Object(a.jsx)("skinnedMesh",{material:l.eyelash_mat,geometry:s.modeleyelash_R_lower_eyelash_mat_0.geometry,skeleton:s.modeleyelash_R_lower_eyelash_mat_0.skeleton})]})}),Object(a.jsx)("group",{ref:r,children:Object(a.jsx)(k.a,{radius:20,depth:25,count:8e3,factor:2,saturation:.5,fade:!0})})]}))}O.a.preload("assets/scifi/scene.gltf");var M=r(45),z=r(23),D=r(42),R=r(46),T=r(47),P=r(48),S=r(33),L=r(43);Object(u.d)({EffectComposer:M.a,ShaderPass:z.a,RenderPass:D.a,UnrealBloomPass:R.a,FilmPass:T.a,AfterimagePass:P.a,FXAAShader:S.a}),Object(u.d)({OrbitControls:L.a});var C=function(e){var t=Object(u.g)(),r=t.gl,o=t.camera,i=Object(n.useRef)();return Object(u.e)((function(){i.current.update(),o.controls=i.current,o.position.y=18})),Object(a.jsx)("orbitControls",Object(c.a)({ref:i,args:[o,r.domElement]},e))};function E(){var e=Object(n.useRef)(),t=Object(u.g)(),r=t.scene,o=t.gl,i=t.size,s=t.camera;Object(n.useEffect)((function(){e.current.setSize(i.width,i.height)}),[i]),Object(u.e)((function(){return e.current.render()}),2);Object(n.useMemo)((function(){return new w.Vector2(i.width,i.height)}),[i]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(C,{enablePan:!0,enableZoom:!0,enableDamping:!0,minDistance:15,maxDistance:80,dampingFactor:.5,rotateSpeed:2,maxPolarAngle:2*Math.PI,minPolarAngle:2*-Math.PI}),Object(a.jsxs)("effectComposer",{ref:e,args:[o],children:[Object(a.jsx)("renderPass",{attachArray:"passes",scene:r,camera:s}),Object(a.jsx)("shaderPass",{attachArray:"passes",args:[S.a],"uniforms-resolution-value":[1/i.width,1/i.height],renderToScreen:!0})]})]})}var B=r(16);function F(e,t,r){B.noise.seed(r/10%1);for(var a=e.getAttribute("position"),n=a.array,o=e.parameters.heightSegments+1,i=e.parameters.widthSegments+1,s=0;s<o;s++)for(var c=0;c<i;c++)n[3*(s*i+c)+2]=(B.noise.simplex2(c+r/150/100,s+r/150/100)+B.noise.simplex2((c+r/150+200)/50,s+r/150/50)*Math.pow(t,1)+B.noise.simplex2((c+r/150+400)/25,s+r/150/25)*Math.pow(t,2)+B.noise.simplex2((c+r/150+600)/12.5,s+r/150/12.5)*Math.pow(t,3)+ +B.noise.simplex2((c+r/150+800)/6.25,s+r/150/6.25)*Math.pow(t,4))/2;a.needsUpdate=!0}var I=function(){Object(n.useRef)(1.1);var e=Object(n.useRef)(),t=Object(n.useRef)(),r=(Object(n.useRef)(new w.PlaneBufferGeometry(1e3,5e3,200,1e3)),Object(u.h)((function(e){F(e.geometry,1.3,40)})),Object(u.h)((function(e){F(e.geometry,1.3,30)})));return b({type:8,subtype:9,note:40},(function(){F(e.current,1.7,window.currentAudio.currentTime)}),(function(){})),Object(u.e)((function(){var r=e.current,a=t.current;window.audioAnalyzerData.analyzer.getByteFrequencyData(window.audioAnalyzerData.dataArray);for(var n=r.getAttribute("position"),o=n.array,i=a.getAttribute("position"),s=i.array,c=r.parameters.heightSegments+1,l=r.parameters.widthSegments+1,u=0;u<c;u+=3)for(var d=0;d<l;d+=3)o[3*(u*l+d)+2]=s[3*(u*l+d)+2]+window.audioAnalyzerData.dataArray[d]/30;n.needsUpdate=!0,i.needsUpdate=!0})),Object(a.jsxs)("group",{children:[Object(a.jsx)("planeBufferGeometry",{attach:"geometry",ref:t,args:[1e3,5e3,200,1e3]}),Object(a.jsxs)("mesh",{ref:r,rotation:[-Math.PI/2,0,0],children:[Object(a.jsx)("planeBufferGeometry",{attach:"geometry",ref:e,args:[1e3,5e3,200,1e3]}),Object(a.jsx)("meshBasicMaterial",{attach:"material",wireframe:!0,color:"hotpink",specular:"hotpink",shininess:3,flatShading:!0})]})]})};function q(e){var t=Object(n.useRef)(),r=Object(O.a)("assets/crystal/scene.gltf"),o=r.nodes,i=r.materials;return Object(u.e)((function(){(null===t||void 0===t?void 0:t.current)&&(window.audioAnalyzerData.analyzer.getByteFrequencyData(window.audioAnalyzerData.dataArray),t.current.scale.x=window.audioAnalyzerData.dataArray[256]/128,t.current.scale.y=window.audioAnalyzerData.dataArray[128]/128,t.current.scale.z=window.audioAnalyzerData.dataArray[128]/128)})),Object(a.jsx)("group",Object(c.a)(Object(c.a)({ref:t},e),{},{dispose:null,children:Object(a.jsx)("group",{rotation:[-Math.PI/2,0,0],children:Object(a.jsx)("group",{rotation:[Math.PI/2,0,0],scale:[.5,.5,.5],children:Object(a.jsx)("group",{position:[0,0,0],scale:[16.99,16.99,16.99],children:Object(a.jsx)("mesh",{material:i.crystal_17_2,geometry:o.crystal17_2_crystal_17_2_0.geometry})})})})}))}O.a.preload("assets/crystal/scene.gltf");var U=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(u.a,{camera:{position:[0,0,8]},shadowMap:!0,children:[Object(a.jsx)("ambientLight",{}),Object(a.jsx)(p.a,{showPanel:0,className:"stats"}),Object(a.jsxs)(n.Suspense,{children:[Object(a.jsx)(f,{}),Object(a.jsxs)(n.Suspense,{fallback:Object(a.jsx)(g.a,{children:Object(a.jsx)("h2",{children:"Loading"})}),children:[Object(a.jsx)(E,{}),Object(a.jsx)("group",{scale:[.15,.15,.15]}),Object(a.jsx)(A,{position:[-10,0,0],rotation:[0,0,0]}),Object(a.jsx)(I,{}),Object(a.jsx)(q,{position:[150,0,-120],scale:[.5,.5,.5]}),Object(a.jsx)(q,{position:[-30,0,-40],scale:[.5,.5,.5]}),Object(a.jsx)(q,{position:[85,0,-260],scale:[.5,.5,.5]}),Object(a.jsx)(q,{position:[150,0,680],scale:[.5,.5,.5]}),Object(a.jsx)(q,{position:[-100,0,560],scale:[.5,.5,.5]}),Object(a.jsx)(q,{position:[-64,0,460],scale:[.5,.5,.5]}),Object(a.jsx)(q,{position:[-80,0,160],scale:[.5,.5,.5]}),Object(a.jsx)(q,{position:[54,0,380],scale:[.5,.5,.5]})]})]}),Object(a.jsx)("pointLight",{position:[10,10,10]})]})})},G=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,65)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,o=t.getLCP,i=t.getTTFB;r(e),a(e),n(e),o(e),i(e)}))};s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(U,{})}),document.getElementById("root")),G()}},[[61,1,2]]]);
//# sourceMappingURL=main.8c4a9838.chunk.js.map