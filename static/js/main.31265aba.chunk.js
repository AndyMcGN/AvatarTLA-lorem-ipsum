(this["webpackJsonptypescript-avatar"]=this["webpackJsonptypescript-avatar"]||[]).push([[0],{18:function(e,a,n){},19:function(e,a,n){},26:function(e,a,n){},27:function(e,a,n){"use strict";n.r(a);var r=n(2),t=n.n(r),i=n(12),c=n.n(i),o=(n(18),n(6)),s=n(7),u=n(9),d=n(8),l=(n(19),n(3)),h=n(4),g=n(0),p=function(e){Object(u.a)(n,e);var a=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,t=new Array(r),i=0;i<r;i++)t[i]=arguments[i];return(e=a.call.apply(a,[this].concat(t))).state={paragraphs:0,wordsToInclude:[]},e.handleChange=function(a){e.state.paragraphs+a>=0&&(e.setState({paragraphs:e.state.paragraphs+a}),e.props.handleChange(e.state.paragraphs+a))},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{className:"numberOfParagraphs",children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("p",{children:this.state.paragraphs}),Object(g.jsxs)("div",{className:"arrowDiv",children:[Object(g.jsx)(l.a,{icon:h.b,size:"lg",onClick:function(){e.handleChange(1)}}),Object(g.jsx)(l.a,{icon:h.a,size:"lg",onClick:function(){e.handleChange(-1)}})]})]}),Object(g.jsx)("p",{children:"Paragraphs"})]})}}]),n}(r.Component),b=n(13),A=["The Last Airbender","waterbending","earthbending","firebending","airbending","Hundred Year War","Fire Nation","Avatar Roku","all four elements","when the world needed him most","the Water Tribes","Air Nomads","Foggy Swamp","Southern Water Tribe","Northern Water Tribe","Day of Black Sun","Harmonic Convergence","the era of Raava",'"I\u2019m angry at myself!"',"\u201cIt\u2019s the quenchiest!\u201d","\u201cMy first girlfriend turned into the moon.\u201d",'"That\'s rough, buddy"',"Little Soldier Boy","Leaves on the Vine","yip-yip","avatar state","spirit world","spirit library","Southern Air Temple","King of Omashu","Waterbending Scroll","Great Divide","Blue Spirit","Fortuneteller","Bato of the Water Tribe","Deserter","Northern Air Temple","Cave of Two Lovers","Blind Bandit","Avatar Day","The Serpent's Pass","Lake Laogai","Painted Lady","Puppetmaster","Western Air Temple","Boiling Rock","Ember Island Players","The Phoenix King","Sozin's Comet","The Old Masters",'"Hahaha, Gravity"',"Everything Is Connected","Penguin Sledding","Honor","Space Sword","boomerang","cactus juice","surf the giant coi-fish","ride the hog-monkeys","blubbered seal jerky"],y=["badgermole","Flying bison","Ring-tailed winged lemur","Spiderfly","Winged lemur","Arctic-hippo","Arctic-seal","Cuttlefish ","Dolphinpiranha","Koalaotter","Otterpenguin ","Penguinfish","Puffin-seal sledging","Tigershark","Whale-walrus","Arctic-camel","Arctic-hen","Polarbeardog","Eelhound ","Buzzard-wasp","Hog-monkey","Prickle-snake","Badgerfrog","Dragon","Komodo-rhino","Lion-turtle"],O=["Aang","Appa","Azula","Iroh","Katara","Momo","Ozai","Sokka","Toph Beifong","Zuko","Yue","Hama","The Boulder","Bumi (King of Omashu)","My Cabbages!","The Dai Li","Flopsie","Jet","Jin Wei","Wei Jin","Suyin Beifong","Long Feng","Lee","Azulon","Combustion Man","the Ember Island Players","Kuzon","Sozin's dragon","Sozin","Roku","Ming-Ming","Gyatso","Yangchen","Lin Beifong","Admiral Zhao","Ba Sing Se","Kyoshi Warriors","Foofoocuddlypoops","Sparky Sparky Boom Man","Pathic"],j=function(e){var a=Object(r.useState)([""]),n=Object(b.a)(a,2),t=n[0],i=n[1],c=A.concat(y).concat(O);Object(r.useEffect)((function(){var e=o();i(e)}),[e.paragraphs]);var o=function(){for(var a=[],n=0;n<e.paragraphs;n++){var r=s();a.push(r)}return a},s=function(){for(var e=[],a=0;a<40;a++){var n=c[Math.floor(Math.random()*c.length)];e.push(n)}return e.join(" ")},u=t.map((function(e){return Object(g.jsx)("p",{children:e})}));return Object(g.jsxs)("div",{className:"generatedText",children:[u,e.paragraphs>0&&Object(g.jsxs)("button",{onClick:function(){!function(){var e=document.createElement("textarea");document.body.appendChild(e),e.value=t.join("\n"),e.select(),document.execCommand("copy"),document.body.removeChild(e)}()},children:[Object(g.jsx)(l.a,{icon:h.c,size:"lg"}),"Copy text"]})]})},W=(n(26),function(e){Object(u.a)(n,e);var a=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,t=new Array(r),i=0;i<r;i++)t[i]=arguments[i];return(e=a.call.apply(a,[this].concat(t))).state={paragraphs:0},e.handleChange=function(a){e.setState({paragraphs:a})},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(g.jsx)("div",{className:"App",children:Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"header",children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("img",{src:"data:image/png;base64,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",alt:"avatar logo"}),Object(g.jsx)("h2",{children:"Lorem Ipsum Generator"}),Object(g.jsx)("h4",{children:"Lorem Ipsum generated from random avatar phrases."})]}),Object(g.jsx)(p,{handleChange:this.handleChange})]}),Object(g.jsx)(j,{paragraphs:this.state.paragraphs})]})})}}]),n}(r.Component)),v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(a){var n=a.getCLS,r=a.getFID,t=a.getFCP,i=a.getLCP,c=a.getTTFB;n(e),r(e),t(e),i(e),c(e)}))};c.a.render(Object(g.jsx)(t.a.StrictMode,{children:Object(g.jsx)(W,{})}),document.getElementById("root")),v()}},[[27,1,2]]]);
//# sourceMappingURL=main.31265aba.chunk.js.map