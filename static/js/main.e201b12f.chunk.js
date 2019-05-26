(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{138:function(n,t,e){n.exports=e.p+"static/media/shadertoy-tex17.4d266160.jpg"},152:function(n,t,e){n.exports=e(279)},157:function(n,t,e){},279:function(n,t,e){"use strict";e.r(t);var a=e(0),r=e.n(a),o=e(6),i=e.n(o),c=(e(157),e(77)),l=e(46),u=(e(158),e(4)),s=e(11),f=e(22),p=e(148),m=e(135);function v(){var n=Object(u.a)(["\n  font-weight: bold;\n  color: #f4bb41;\n"]);return v=function(){return n},n}function d(){var n=Object(u.a)(["\n  outline: none;\n  width: 300px;\n  height: 50px;\n  margin: 0 auto;\n  display: block;\n  font-size: 25px;\n  font-weight: bold;\n  background-color: #f4bb41;\n  border: none;\n  border-radius: 30px;\n  cursor: pointer;\n  &:hover {\n    background: ",";\n  }\n"]);return d=function(){return n},n}function h(){var n=Object(u.a)(["\n  position: relative;\n  z-index: 1;\n"]);return h=function(){return n},n}function b(){var n=Object(u.a)(["\n  margin: 200px auto 80px auto;\n  color: #fff;\n  font-size: 60px;\n  max-width: 800px;\n  text-align: center;\n"]);return b=function(){return n},n}var g=s.a.div(b()),x=s.a.div(h()),y=s.a.button(d(),Object(p.a)(.2,"#f4bb41")),O=s.a.span(v()),j=function(){return r.a.createElement(x,null,r.a.createElement(g,null,"C\u043e\u0437\u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0435 ",r.a.createElement(O,null,"\u0438\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0435 \u0444\u043e\u043d\u044b")," \u0434\u043b\u044f \u0432\u0430\u0448\u0438\u0445 \u0441\u0430\u0439\u0442\u043e\u0432 \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u043d\u0430\u043c\u0438!"),r.a.createElement(m.ScrollTo,null,function(n){var t=n.scrollTo;return r.a.createElement(y,{onClick:function(){return t({y:900,smooth:!0})}},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0444\u043e\u043d")}))},w=e(17),E=e(18),S=e(20),k=e(15),z=e(19),C=e(10),D=e(35),A=e.n(D),F=e(73),I=e.n(F),L=function(n){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).refreshRate,e=void 0===t?60:t,o=function(t){function a(){var n,t;Object(w.a)(this,a);for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(t=Object(S.a)(this,(n=Object(k.a)(a)).call.apply(n,[this].concat(r)))).state={time:0,tick:0},t}return Object(z.a)(a,t),Object(E.a)(a,[{key:"componentDidMount",value:function(){var n,t,a=this,r=1e3/e;t=-r;this._r=A()(function e(o){a._r=A()(e),n||(n=o),o-t>r&&(t=o,a.setState({time:o-n,tick:a.state.tick+1}))})}},{key:"componentWillUnmount",value:function(){A.a.cancel(this._r)}},{key:"render",value:function(){return r.a.createElement(n,Object.assign({},this.props,this.state))}}]),a}(a.PureComponent);return o.displayName="timeLoop(".concat(n.displayName||n.name||"",")"),I()(o,n),o};function R(){var n=Object(u.a)(["\nprecision highp float;\nvarying vec2 uv;\n\nuniform float time;\n\nvoid main() {\n  float amnt;\n  float nd;\n  vec4 cbuff = vec4(0.0);\n  for(float i=0.0; i<5.0;i++){\n    nd = sin(3.17*0.8*uv.x + (i*0.1+sin(+time)*0.2) + time)*0.8+0.1 + uv.x;\n    amnt = 1.0/abs(nd-uv.y)*0.01;\n    cbuff += vec4(amnt, amnt*0.3 , amnt*uv.y, 90.0);\n  }\n  for(float i=0.0; i<1.0;i++){\n    nd = sin(3.14*2.0*uv.y + i*40.5 + time)*90.3*(uv.y+80.3)+0.5;\n    amnt = 1.0/abs(nd-uv.x)*0.015;\n    cbuff += vec4(amnt*0.2, amnt*0.2 , amnt*uv.x, 1.0);\n  }\n  gl_FragColor = cbuff;\n}\n"]);return R=function(){return n},n}var T=L(function(n){var t=n.frag,e=(n.visitor,n.time);n.width,n.height;return r.a.createElement(C.Node,{shader:{frag:t},uniforms:{time:e/1e3}})}),_=function(n){function t(){var n;Object(w.a)(this,t),n=Object(S.a)(this,Object(k.a)(t).call(this));var e=new C.Visitor;return e.onSurfaceDrawError=function(t){return n.setState({error:t}),!0},e.onSurfaceDrawEnd=function(){return n.setState({error:null})},n.state={error:null,visitor:e},n}return Object(z.a)(t,n),Object(E.a)(t,[{key:"render",value:function(){var n=this.props,t=n.frag,e=n.height,a=n.width,o=this.state;o.error,o.visitor;return r.a.createElement("div",null,r.a.createElement(T,{frag:t,height:e,width:a}))}}]),t}(a.Component);_.defaultProps={frag:Object(C.GLSL)(R())};var M=_,B=e(147);function G(){var n=Object(u.a)(["\nprecision highp float;\nvarying vec2 uv;\nuniform vec4 colors[3];\nuniform vec2 particles[3];\nvoid main () {\n  vec4 sum = vec4(0.0);\n  for (int i=0; i<3; i++) {\n    vec4 c = colors[i];\n    vec2 p = particles[i];\n    float d = c.a * smoothstep(0.6, 0.2, distance(p, uv));\n    sum += d * vec4(c.a * c.rgb, c.a);\n  }\n  if (sum.a > 1.0) {\n    sum.rgb /= sum.a;\n    sum.a = 1.0;\n  }\n  gl_FragColor = vec4(sum.a * sum.rgb, 1.0);\n}\n"]);return G=function(){return n},n}var N=C.Shaders.create({gradients:{frag:Object(C.GLSL)(G())}}),q=L(function(n){var t=n.time;return r.a.createElement(C.Node,{shader:N.gradients,uniforms:{colors:[[Math.cos(.002*t),Math.sin(.002*t),.2,1],[Math.sin(.002*t),-Math.cos(.002*t),.1,1],[.3,Math.sin(3+.002*t),Math.cos(1+.003*t),1]],particles:[[.3,.3],[.7,.5],[.4,.9]]}})});function H(){var n=Object(u.a)(["\nprecision highp float;\nvarying vec2 uv;\nuniform sampler2D t;\nuniform vec2 mouse;\nuniform float time, amp, freq, moving;\nvec2 lookup (vec2 offset, float amp2) {\n  return mod(\n    uv + amp2 * amp * vec2(\n      cos(freq*(uv.x+offset.x)+time),\n      sin(freq*(uv.y+offset.x)+time))\n      + vec2(\n        moving * time/10.0,\n        0.0),\n    vec2(1.0));\n}\nvoid main() {\n  float dist = distance(uv, mouse);\n  float amp2 = pow(1.0 - dist, 2.0);\n  float colorSeparation = 0.02 * mix(amp2, 1.0, 0.5);\n  vec2 orientation = vec2(1.0, 0.0);\n  float a = (1.0-min(0.95, pow(1.8 * distance(uv, mouse), 4.0) +\n  0.5 * pow(distance(fract(50.0 * uv.y), 0.5), 2.0)));\n  gl_FragColor = vec4(a * vec3(\n    texture2D(t, lookup(colorSeparation * orientation, amp2)).r,\n    texture2D(t, lookup(-colorSeparation * orientation, amp2)).g,\n    texture2D(t, lookup(vec2(0.0), amp2)).b),\n    1.0);\n}\n"]);return H=function(){return n},n}var Y=C.Shaders.create({vignetteColorSeparationDistortion:{frag:Object(C.GLSL)(H())}}),K=L(function(n){var t=n.children,e=n.time,a=n.mouse;return r.a.createElement(C.Node,{shader:Y.vignetteColorSeparationDistortion,uniforms:{t:t,time:e/1e3,mouse:a,freq:10+2*Math.sin(7e-4*e),amp:.05+Math.max(0,.03*Math.cos(.001*e)),moving:0}})}),W=function(n){function t(){var n,e;Object(w.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=Object(S.a)(this,(n=Object(k.a)(t)).call.apply(n,[this].concat(r)))).state={mouse:[.5,.5]},e.onMouseMove=function(n){var t=n.target.getBoundingClientRect();e.setState({mouse:[(n.clientX-t.left)/t.width,(t.bottom-n.clientY)/t.height]})},e}return Object(z.a)(t,n),Object(E.a)(t,[{key:"render",value:function(){var n=this.state.mouse;return r.a.createElement(K,{mouse:n},"https://pbs.twimg.com/profile_images/750970122605658112/I1wXSCHG.jpg")}}]),t}(a.Component),P=e(138),V=e.n(P);function J(){var n=Object(u.a)(["\nprecision mediump float;\nvarying vec2 uv;\nuniform float iGlobalTime;\nuniform sampler2D iChannel0;\n#define FAR 80.\nmat2 rot2( float th ){ vec2 a = sin(vec2(1.5707963, 0) + th); return mat2(a, -a.y, a.x); }\nfloat hash( float n ){ return fract(cos(n)*45758.5453); }\nfloat hash( vec3 p ){ return fract(sin(dot(p, vec3(7, 157, 113)))*45758.5453); }\nfloat drawObject(in vec3 p){ p = fract(p)-.5; return dot(p, p); }\nfloat cellTile(in vec3 p){\n    vec4 d;\n    d.x = drawObject(p - vec3(.81, .62, .53));\n    p.xy = vec2(p.y-p.x, p.y + p.x)*.7071;\n    d.y = drawObject(p - vec3(.39, .2, .11));\n    p.yz = vec2(p.z-p.y, p.z + p.y)*.7071;\n    d.z = drawObject(p - vec3(.62, .24, .06));\n    p.xz = vec2(p.z-p.x, p.z + p.x)*.7071;\n    d.w = drawObject(p - vec3(.2, .82, .64));\n    d.xy = min(d.xz, d.yw);\n    return min(d.x, d.y)*2.66;\n}\nvec2 path(in float z){ return vec2(20.*sin(z * .04), 4.*cos(z * .09) + 3.*(sin(z*.025)  - 1.)); }\nfloat surfFunc(in vec3 p){\n    float c = cellTile(p/6.);\n    return mix(c, cos(c*6.283*2.)*.5 + .5, .125);\n}\nfloat smin(float a, float b , float s){\n    float h = clamp( 0.5 + 0.5*(b-a)/s, 0. , 1.);\n    return mix(b, a, h) - h*(1.0-h)*s;\n}\nfloat smax(float a, float b, float s){\n    float h = clamp( 0.5 + 0.5*(a-b)/s, 0., 1.);\n    return mix(b, a, h) + h*(1.0-h)*s;\n}\nfloat map(vec3 p){\n    float sf = surfFunc(p);\n    float cav = dot(cos(p*3.14159265/8.), sin(p.yzx*3.14159265/8.)) + 2.;\n    p.xy -= path(p.z);\n    float tun = 1.5 - length(p.xy*vec2(1, .4));\n    tun = smax(tun, 1.-cav, 2.) + .75 + (.5-sf);\n    float gr = p.y + 7. - cav*.5 + (.5-sf)*.5;\n    float rf = p.y - 15.;\n    return smax(smin(tun, gr, .1), rf, 1.);\n}\nfloat trace(in vec3 ro, in vec3 rd){\n    float t = 0., h;\n    for(int i=0; i<128; i++){\n        h = map(ro+rd*t);\n        if(abs(h)<0.002*(t*.25 + 1.) || t>FAR) break;\n        t += h*.8;\n    }\n    return min(t, FAR);\n}\nvec3 normal(in vec3 p)\n{\n    vec2 e = vec2(-1., 1.)*0.001;\n\treturn normalize(e.yxx*map(p + e.yxx) + e.xxy*map(p + e.xxy) +\n\t\t\t\t\t e.xyx*map(p + e.xyx) + e.yyy*map(p + e.yyy) );\n}\nvec3 tex3D( sampler2D t, in vec3 p, in vec3 n ){\n    n = max(abs(n) - .2, .001);\n    n /= (n.x + n.y + n.z );\n\tp = (texture2D(t, p.yz)*n.x + texture2D(t, p.zx)*n.y + texture2D(t, p.xy)*n.z).xyz;\n    return p*p;\n}\nvec3 doBumpMap( sampler2D tx, in vec3 p, in vec3 n, float bf){\n    const vec2 e = vec2(0.001, 0);\n    mat3 m = mat3( tex3D(tx, p - e.xyy, n), tex3D(tx, p - e.yxy, n), tex3D(tx, p - e.yyx, n));\n    vec3 g = vec3(0.299, 0.587, 0.114)*m;\n    g = (g - dot(tex3D(tx,  p , n), vec3(0.299, 0.587, 0.114)) )/e.x; g -= n*dot(n, g);\n    return normalize( n + g*bf );\n}\nfloat n3D(in vec3 p){\n\tconst vec3 s = vec3(7, 157, 113);\n\tvec3 ip = floor(p); p -= ip;\n    vec4 h = vec4(0., s.yz, s.y + s.z) + dot(ip, s);\n    p = p*p*(3. - 2.*p);\n    h = mix(fract(sin(h)*43758.5453), fract(sin(h + s.x)*43758.5453), p.x);\n    h.xy = mix(h.xz, h.yw, p.y);\n    return mix(h.x, h.y, p.z);\n}\nfloat bumpSurf3D( in vec3 p){\n    float bmp = cellTile(p/3.)*.8 + cellTile(p)*.2;\n    float ns = n3D(p*6. - bmp*6.);\n    return mix(bmp, 1. - abs(ns-.333)/.667, .05);\n}\nvec3 doBumpMap(in vec3 p, in vec3 nor, float bumpfactor){\n    const vec2 e = vec2(0.001, 0);\n    float ref = bumpSurf3D(p);\n    vec3 grad = (vec3(bumpSurf3D(p - e.xyy),\n                      bumpSurf3D(p - e.yxy),\n                      bumpSurf3D(p - e.yyx) )-ref)/e.x;\n    grad -= nor*dot(nor, grad);\n    return normalize( nor + grad*bumpfactor );\n}\nfloat softShadow(in vec3 ro, in vec3 rd, in float start, in float end, in float k){\n    float shade = 1.0;\n    const int maxIterationsShad = 10;\n    float dist = start;\n    float stepDist = end/float(maxIterationsShad);\n    for (int i=0; i<maxIterationsShad; i++){\n        float h = map(ro + rd*dist);\n        shade = min(shade, smoothstep(0., 1., k*h/dist));\n        dist += clamp(h, .2, stepDist);\n        if (abs(h)<0.001 || dist > end) break;\n    }\n    return min(max(shade, 0.) + .1, 1.);\n}\nfloat calculateAO( in vec3 p, in vec3 n)\n{\n\tfloat ao = 0.0, l;\n\tconst float nbIte = 6.0;\n    const float maxDist = 3.;\n    for(float i=1.; i< nbIte+.5; i++ ){\n        l = (i*.66 + hash(i)*.34)/nbIte*maxDist;\n        ao += (l - map( p + n*l ))/(1.+ l);\n    }\n    return clamp( 1.-ao/nbIte, 0., 1.);\n}\nvec3 getSky(){ return vec3(2., 1.4, .7); }\nfloat trig3(in vec3 p){\n    p = cos(p*2. + (cos(p.yzx) + 1.)*1.57);\n    return dot(p, vec3(0.1666)) + 0.5;\n}\nfloat trigNoise3D(in vec3 p){\n  const mat3 m3RotTheta = mat3(0.25, -0.866, 0.433, 0.9665, 0.25, -0.2455127, -0.058, 0.433, 0.899519 )*1.5;\n\tfloat res = 0.;\n  float t = trig3(p*3.14159265);\n   p += (t);\n  p = m3RotTheta*p;\n  res += t;\n  t = trig3(p*3.14159265);\n   p += (t)*0.7071;\n  p = m3RotTheta*p;\n  res += t*0.7071;\n  t = trig3(p*3.14159265);\n\tres += t*0.5;\n\treturn res/2.2071;\n}\nfloat hash31(vec3 p){ return fract(sin(dot(p, vec3(127.1, 311.7, 74.7)))*43758.5453); }\nfloat getMist(in vec3 ro, in vec3 rd, in vec3 lp, in float t){\n    float mist = 0.;\n    ro += rd*t/3.;\n    for (int i = 0; i<3; i++){\n        float sDi = length(lp-ro)/FAR;\n\t    float sAtt = 1./(1. + sDi*0.1 + sDi*sDi*0.01);\n        mist += trigNoise3D(ro/2.)*sAtt;\n        ro += rd*t/3.;\n    }\n    return clamp(mist/1.5 + hash31(ro)*0.1-0.05, 0., 1.);\n}\nvoid main() {\n\tvec2 u = uv * 2.0 - 1.0;\n\tvec3 ro = vec3(0, 0, iGlobalTime*8.);\n\tvec3 lookAt = ro + vec3(0, 0, .5);\n\tro.xy += path(ro.z);\n\tlookAt.xy += path(lookAt.z);\n    float FOV = 3.14159265/2.5;\n    vec3 forward = normalize(lookAt - ro);\n    vec3 right = normalize(vec3(forward.z, 0, -forward.x ));\n    vec3 up = cross(forward, right);\n    vec3 rd = normalize(forward + FOV*u.x*right + FOV*u.y*up);\n\trd.xy = rot2( path(lookAt.z).x/64. )*rd.xy;\n    vec3 lp = vec3(FAR*.5, FAR, FAR) + vec3(0, 0, ro.z);\n    float t = trace(ro, rd);\n    vec3 sky = getSky();\n    vec3 col = sky;\n    vec3 sp = ro+t*rd;\n    float pathHeight = sp.y-path(sp.z).y;\n    if (t < FAR){\n        vec3 sn = normal( sp );\n        vec3 ld = lp-sp;\n        ld /= max(length(ld), 0.001);\n        const float tSize = 1./4.;\n        sn = doBumpMap(sp, sn, .75/(1. + t/FAR*.25));\n        float bf = (pathHeight + 5. < 0.)?  .05: .025;\n        sn = doBumpMap(iChannel0, sp*tSize, sn, bf/(1. + t/FAR));\n        float shd = softShadow(sp, ld, 0.05, FAR, 8.);\n        float ao = calculateAO(sp, sn);\n        float dif = max( dot( ld, sn ), 0.0);\n        float spe = pow(max( dot( reflect(-ld, sn), -rd ), 0.0 ), 5.);\n        float fre = clamp(1.0 + dot(rd, sn), 0.0, 1.0);\n\t\tfloat Schlick = pow( 1. - max(dot(rd, normalize(rd + ld)), 0.), 5.0);\n\t\tfloat fre2 = mix(.2, 1., Schlick);\n        float amb = fre*fre2*.7 + .05;\n        col = clamp(mix(vec3(1.152, 0.4275,.153), vec3(.225, 0.05985, 0.0153), -sn.y*.5 + pathHeight*.5 + 1.75), vec3(.9, 0.534375, 0.239), vec3(.9, .855, .765));\n        col = smoothstep(-.5, 1., tex3D(iChannel0, sp*tSize, sn)*2.)*(col + vec3(.225, .21375, .19125));\n        col += smoothstep(0., 1., -pathHeight - 5.5)*fre*.25;\n        col += getSky()*fre*fre2;\n        col = (col*(dif + .1) + vec3(1)*fre2*spe)*shd*ao + amb*pow(col, vec3(2.));\n    }\n\tfloat dust = getMist(ro, rd, lp, t)*(1.-clamp((pathHeight - 5.)*.125, 0., 1.));\n    sky = getSky()*mix(1., .75, dust);\n    col = mix(col, sky, min(t*t*1.5/FAR/FAR, 1.));\n    u = uv;\n    col = min(col, 1.)*pow( 16.0*u.x*u.y*(1.0-u.x)*(1.0-u.y) , .125);\n\t  gl_FragColor = vec4(sqrt(clamp(col, 0., 1.)), 1);\n}\n"]);return J=function(){return n},n}var X=C.Shaders.create({desertPassage:{frag:Object(C.GLSL)(J())}}),U=L(function(n){var t=n.time;return r.a.createElement(C.Node,{shader:X.desertPassage,uniforms:{iGlobalTime:t/1e3,iChannel0:V.a}})},{frameRate:30});function $(){var n=Object(u.a)(["\nprecision highp float;\nvarying vec2 uv;\nuniform float iGlobalTime;\nvoid main() {\n  vec2 p = 2.0 * uv - vec2(1.0);\n  float a = atan(p.y,p.x);\n  float r = pow( pow(p.x*p.x,4.0) + pow(p.y*p.y,4.0), 1.0/8.0 );\n  vec2 uv = vec2( 1.0/r + 0.2*iGlobalTime, a );\n  float f = cos(12.0*uv.x)*cos(6.0*uv.y);\n  vec3 col = 0.5 + 0.5*sin( 3.1416*f + vec3(0.0,0.5,1.0) );\n  col = col*r;\n  gl_FragColor = vec4( col, 1.0 );\n}\n"]);return $=function(){return n},n}var Q=C.Shaders.create({squareTunnel:{frag:Object(C.GLSL)($())}}),Z=L(function(n){var t=n.time;return r.a.createElement(C.Node,{shader:Q.squareTunnel,uniforms:{iGlobalTime:t/1e3}})});function nn(){var n=Object(u.a)(["\nprecision highp float;\nvarying vec2 uv;\nuniform float time;\n\nfloat smin(float a, float b, float k) {\n  float h = clamp( 0.5+0.5*(b-a)/k, 0.0, 1.0 );\n  return mix( b, a, h ) - k*h*(1.0-h);\n}\nfloat sdSphere(vec3 p, float s) {\n  return length(p) - s;\n}\nfloat sdTorus(vec3 p, vec2 t) {\n  vec2 q = vec2(length(p.xz)-t.x,p.y);\n  return length(q)-t.y;\n}\nfloat sdBox(vec3 p, vec3 b) {\n  vec3 d = abs(p) - b;\n  return min(max(d.x,max(d.y,d.z)),0.0) + length(max(d,0.0));\n}\nvec3 opRep(inout vec3 p, vec3 c) {\n  vec3 m = mod(p, c);\n  vec3 id = (p - m) / c;\n  p = m - 0.5 * c;\n  return id;\n}\n\nvec2 scene (vec3 p) {\n  p.x += time;\n  vec3 id = opRep(p, vec3(2.0, 14.0, 4.0));\n  p.y += 0.5 + 0.5 * cos(4.3 * (id.x + time) + 1.3 * (id.z + time));\n  float rot = time + cos(30.0 * id.x + 123.4 * id.z);\n  p.xz *= mat2(\n    cos(rot), sin(rot),\n    -sin(rot), cos(rot)\n  );\n  float r = smin(\n    mix(sdSphere(p, 0.7), sdBox(p, vec3(0.7)), 0.5 + 0.5 * cos(time + id.x)),\n    sdTorus(p.xzy - vec3(0.0, 0.7, 0.0), vec2(0.2, 0.08)),\n    0.1\n  );\n  return vec2(r, id.x);\n}\nvec3 normal(vec3 p, float smoothness) {\n  vec3 n;\n  vec2 dn = vec2(smoothness, 0.0);\n  return normalize(vec3(\n    scene(p + dn.xyy).x - scene(p - dn.xyy).x,\n    scene(p + dn.yxy).x - scene(p - dn.yxy).x,\n    scene(p + dn.yyx).x - scene(p - dn.yyx).x));\n}\n\nvec3 hsv2rgb(vec3 c) {\n  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\n\nvoid main() {\n  vec3 direction = normalize(vec3(2.0 * uv - 1.0, 1.0));\n  float rotY = 0.6;\n  direction.zy *= mat2(\n    cos(rotY), sin(rotY),\n    -sin(rotY), cos(rotY)\n  );\n  vec3 origin = vec3(0.0, 3.0, 0.0);\n  float totalDist = 0.0;\n  vec2 res;\n  vec3 p;\n  for(int i = 0; i < 36; i++) {\n    p = origin + direction * totalDist;\n    res = scene(p);\n    totalDist += res.x;\n  }\n  vec3 nrml = normal(p, 0.002);\n  vec3 materialColor = hsv2rgb(vec3(res.y / 24.0, 0.8, 1.0));\n  vec3 light_dir = normalize(vec3(0.2, 1.0, 0.2));\n  float diffuse = dot(light_dir, nrml);\n  diffuse = diffuse * 0.5 + 0.5;\n  vec3 light_color = vec3(0.9, 0.8, 0.7);\n  vec3 ambient_color = vec3(0.2, 0.45, 0.6);\n  vec3 diffuseLit = materialColor * (diffuse * light_color + ambient_color);\n  float fogFactor = smoothstep(10.0, 50.0, totalDist);\n  gl_FragColor = vec4(mix(diffuseLit, vec3(0.1), fogFactor), 1.0);\n}\n"]);return nn=function(){return n},n}var tn=C.Shaders.create({sdf1:{frag:Object(C.GLSL)(nn())}}),en=L(function(n){var t=n.time;return r.a.createElement(C.Node,{shader:tn.sdf1,uniforms:{time:.001*t}})});function an(){var n=Object(u.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n"]);return an=function(){return n},n}function rn(){var n=Object(u.a)(["\n  display: block;\n  border: none;\n  background-color: #fff;\n  cursor: pointer;\n  width: 300px;\n  height: 300px;\n  margin: 20px;\n"]);return rn=function(){return n},n}function on(){var n=Object(u.a)(["\n  width: 300px;\n  height: 300px;\n  object-fit: contain;\n"]);return on=function(){return n},n}function cn(){var n=Object(u.a)(["\n  margin: 0 auto;\n  max-width: 1200px;\n"]);return cn=function(){return n},n}var ln=s.a.div(cn()),un=(s.a.input(on()),s.a.button(rn())),sn=s.a.div(an()),fn=[{id:"1",value:r.a.createElement(en,null)},{id:"2",value:r.a.createElement(q,null)},{id:"3",value:r.a.createElement(W,null)},{id:"4",value:r.a.createElement(U,null)},{id:"5",value:r.a.createElement(Z,null)},,{id:"6",value:r.a.createElement(M,null)}],pn=function(n){function t(){var n,e;Object(w.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=Object(S.a)(this,(n=Object(k.a)(t)).call.apply(n,[this].concat(r)))).state={selectedItem:null},e.selectNewItem=function(n){var t=fn.filter(function(t){return t.id==n.currentTarget.id});e.setState({selectedItem:t[0].value}),console.log(e.state.selectedItem),e.props.getSelectedItem(e.state.selectedItem)},e}return Object(z.a)(t,n),Object(E.a)(t,[{key:"render",value:function(){var n=this.selectNewItem;return r.a.createElement(ln,null,r.a.createElement(sn,null,fn.map(function(t){return r.a.createElement(B.a,{title:"\u0414\u0432\u043e\u0439\u043d\u043e\u0439 \u043a\u043b\u0438\u043a - \u0432\u044b\u0431\u043e\u0440 \u0444\u043e\u043d\u0430.",key:t.id,id:t.id},r.a.createElement(un,{onClick:n,id:t.id,key:t.id},r.a.createElement(f.Surface,{width:"400px",height:"300px",id:t.id,key:t.id},t.value)))})))}}]),t}(a.Component),mn=e(36),vn=e(284),dn=e(281),hn=e(283);function bn(){var n=Object(u.a)(["\n  precision highp float;\n  varying vec2 uv;\n  uniform sampler2D t;\n  uniform float contrast, saturation, brightness;\n  const vec3 L = vec3(0.2125, 0.7154, 0.0721);\n  void main() {\n    vec4 c = texture2D(t, uv);\n      vec3 brt = c.rgb * brightness;\n      gl_FragColor = vec4(mix(\n      vec3(0.5),\n      mix(vec3(dot(brt, L)), brt, saturation),\n      contrast), c.a);\n  }\n  "]);return bn=function(){return n},n}var gn=C.Shaders.create({Saturate:{frag:Object(C.GLSL)(bn())}}),xn=function(n){var t=n.contrast,e=n.saturation,a=n.brightness,o=n.children;return r.a.createElement(C.Node,{shader:gn.Saturate,uniforms:{contrast:t,saturation:e,brightness:a,t:o}})},yn=function(n){function t(){return Object(w.a)(this,t),Object(S.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(z.a)(t,n),Object(E.a)(t,[{key:"render",value:function(){var n=this.props,t=n.contrast,e=n.saturation,a=n.brightness,o=n.selectedItem,i=n.width,c=n.height;return r.a.createElement("div",null,"tthrtht",r.a.createElement(f.Surface,{width:i,height:c},r.a.createElement(xn,{contrast:t,saturation:e,brightness:a},o)))}}]),t}(a.Component),On=e(282);function jn(){var n=Object(u.a)(["\n  background-color: #c4c4c4;\n  padding: 20px 20px;\n  border-radius: 10px;\n  margin-bottom: 20px;\n"]);return jn=function(){return n},n}var wn=s.a.div(jn()),En=function(n){function t(){return Object(w.a)(this,t),Object(S.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(z.a)(t,n),Object(E.a)(t,[{key:"render",value:function(){var n=this.props,t=n.visible,e=n.onOk,a=n.onCancel;return r.a.createElement(On.a,{title:"\u0424\u043e\u043d \u0441\u043e\u0437\u0434\u0430\u043d",visible:t,onOk:e,onCancel:a},r.a.createElement("p",null,"\u041a\u043e\u043f\u0438\u0440\u0443\u0439\u0442\u0435 \u043a\u043e\u0434 \u043d\u0438\u0436\u0435 \u0438 \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043d\u0430 \u0432\u0430\u0448 \u0441\u0430\u0439\u0442"),r.a.createElement(wn,null,r.a.createElement("code",null,'<iframe src="https://anastasia8888.github.io/interactive_backgrounds/output" />')),r.a.createElement(c.b,{to:"/output/"},"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043f\u0440\u0435\u0432\u044c\u044e"))}}]),t}(a.Component);function Sn(){var n=Object(u.a)(["\n  font-size: 12px;\n  font-weight: bold;\n  text-transform: uppercase;\n"]);return Sn=function(){return n},n}function kn(){var n=Object(u.a)(["\n  padding: 50px 80px;\n  width: 500px;\n  background: linear-gradient(to left, #fdffdd, #fff, #fdffdd);\n"]);return kn=function(){return n},n}function zn(){var n=Object(u.a)(["\n  width: 100%;\n  margin: 15px 0;\n  background-color: #c9c9c9;\n  border: none;\n  height: 1px;\n"]);return zn=function(){return n},n}function Cn(){var n=Object(u.a)(["\n  font-size: 25px;\n"]);return Cn=function(){return n},n}function Dn(){var n=Object(u.a)(["\n  width: 50%;\n"]);return Dn=function(){return n},n}function An(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 5px 0;\n"]);return An=function(){return n},n}function Fn(){var n=Object(u.a)(["\n  margin: 50px 180px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);return Fn=function(){return n},n}function In(){var n=Object(u.a)(["\n  display: none;\n"]);return In=function(){return n},n}function Ln(){var n=Object(u.a)(["\n  display: block;\n  margin: 20px auto 0 auto;\n"]);return Ln=function(){return n},n}function Rn(){var n=Object(u.a)(["\n  precision highp float;\n  varying vec2 uv;\n  uniform sampler2D t;\n  uniform float contrast, saturation, brightness;\n  const vec3 L = vec3(0.2125, 0.7154, 0.0721);\n  void main() {\n    vec4 c = texture2D(t, uv);\n      vec3 brt = c.rgb * brightness;\n      gl_FragColor = vec4(mix(\n      vec3(0.5),\n      mix(vec3(dot(brt, L)), brt, saturation),\n      contrast), c.a);\n  }\n  "]);return Rn=function(){return n},n}var Tn=C.Shaders.create({Saturate:{frag:Object(C.GLSL)(Rn())}}),_n=Object(s.a)(mn.a)(Ln()),Mn=(s.a.div(In()),s.a.div(Fn())),Bn=s.a.div(An()),Gn=s.a.div(Dn()),Nn=s.a.div(Cn()),qn=s.a.hr(zn()),Hn=s.a.div(kn()),Yn=s.a.div(Sn()),Kn=function(n){var t=n.contrast,e=n.saturation,a=n.brightness,o=n.children;return r.a.createElement(C.Node,{shader:Tn.Saturate,uniforms:{contrast:t,saturation:e,brightness:a,t:o}})},Wn=function(n){function t(){var n,e;Object(w.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=Object(S.a)(this,(n=Object(k.a)(t)).call.apply(n,[this].concat(r)))).state={contrast:1,saturation:1,brightness:1,blue:.1,visible:!1,height:"400px",width:"600px"},e.onChangeContrast=function(n){e.setState({contrast:n})},e.onChangeSaturation=function(n){e.setState({saturation:n})},e.onChangeBrightness=function(n){e.setState({brightness:n})},e.onChangeBlue=function(n){e.setState({blue:n})},e.onChangeHeight=function(n){e.setState({height:n.target.value})},e.onChangeWidth=function(n){e.setState({width:n.target.value})},e.generateBackground=function(){e.setState({visible:!0})},e.onOk=function(){e.setState({visible:!1})},e.onCancel=function(){e.setState({visible:!1})},e}return Object(z.a)(t,n),Object(E.a)(t,[{key:"render",value:function(){var n=this.state,t=n.contrast,e=n.saturation,a=n.brightness,o=n.visible;n.width,n.height;return r.a.createElement(Mn,null,r.a.createElement(Gn,null,r.a.createElement(f.Surface,{width:600,height:400},r.a.createElement(Kn,this.state,this.props.selectedItem))),r.a.createElement(Hn,null,r.a.createElement(Nn,null,"\u041c\u0435\u043d\u044e \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a"),r.a.createElement(qn,null),r.a.createElement(vn.a,null,r.a.createElement(Yn,null,"\u041a\u043e\u043d\u0442\u0440\u0430\u0441\u0442"),r.a.createElement(dn.a,{min:1,max:20,onChange:this.onChangeContrast,value:"number"===typeof t?t:0})),r.a.createElement(vn.a,null,r.a.createElement(Yn,null,"\u041d\u0430\u0441\u044b\u0449\u0435\u043d\u043d\u043e\u0441\u0442\u044c"),r.a.createElement(dn.a,{min:1,max:20,onChange:this.onChangeSaturation,value:"number"===typeof e?e:0})),r.a.createElement(vn.a,null,r.a.createElement(Yn,null,"\u042f\u0440\u043a\u043e\u0441\u0442\u044c"),r.a.createElement(dn.a,{min:1,max:20,onChange:this.onChangeBrightness,value:"number"===typeof a?a:0})),r.a.createElement(vn.a,null,r.a.createElement(Bn,null,r.a.createElement(Yn,null,"\u0412\u044b\u0441\u043e\u0442\u0430 \u0444\u043e\u043d\u0430"),r.a.createElement(hn.a,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u044b\u0441\u043e\u0442\u0443",style:{width:"200px"},onBlur:this.onChangeHeight}))),r.a.createElement(vn.a,null,r.a.createElement(Bn,null,r.a.createElement(Yn,null,"\u0428\u0438\u0440\u0438\u043d\u0430 \u0444\u043e\u043d\u0430"),r.a.createElement(hn.a,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0448\u0438\u0440\u0438\u043d\u0443",style:{width:"200px"},onBlur:this.onChangeWidth}))),r.a.createElement(_n,{type:"primary",onClick:this.generateBackground},"\u0421\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0444\u043e\u043d")),r.a.createElement(En,{visible:o,onOk:this.onOk,onCancel:this.onCancel}))}}]),t}(a.Component);function Pn(){var n=Object(u.a)(["\n  font-weight: bold;\n  color: #f4bb41;\n  font-size: 66px;\n  text-align: center;\n  text-transform: uppercase;\n"]);return Pn=function(){return n},n}function Vn(){var n=Object(u.a)(["\n  position: relative;\n  margin-top: 200px;\n"]);return Vn=function(){return n},n}var Jn=s.a.div(Vn()),Xn=s.a.h1(Pn()),Un=function(n){function t(){var n,e;Object(w.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=Object(S.a)(this,(n=Object(k.a)(t)).call.apply(n,[this].concat(o)))).state={selectedItem:r.a.createElement(W,null)},e.getSelectedItem=function(n){e.setState({selectedItem:n})},e}return Object(z.a)(t,n),Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement(Jn,null,r.a.createElement(Xn,{id:"constructor"},"\u041a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440"),r.a.createElement(Wn,{selectedItem:this.state.selectedItem}),r.a.createElement(pn,{getSelectedItem:this.getSelectedItem}))}}]),t}(a.Component);function $n(){var n=Object(u.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 0;\n"]);return $n=function(){return n},n}function Qn(){var n=Object(u.a)(["\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n  font-family: 'Arial';\n"]);return Qn=function(){return n},n}var Zn=s.a.div(Qn()),nt=s.a.div($n());function tt(){return r.a.createElement(Zn,null,r.a.createElement(j,null),r.a.createElement(nt,null,r.a.createElement(f.Surface,{height:"100vh",width:"100%"},r.a.createElement(M,null))),r.a.createElement(Un,null))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(function(){return r.a.createElement(c.a,null,r.a.createElement(l.a,{path:"/",exact:!0,component:tt}),r.a.createElement(l.a,{path:"/output/",component:yn}))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[152,1,2]]]);
//# sourceMappingURL=main.e201b12f.chunk.js.map