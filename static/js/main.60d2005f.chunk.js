(this["webpackJsonpmy-lms"]=this["webpackJsonpmy-lms"]||[]).push([[0],{105:function(e,t,a){},109:function(e,t,a){},128:function(e,t,a){},129:function(e,t,a){},133:function(e,t,a){},152:function(e,t,a){},171:function(e,t,a){},172:function(e,t,a){},173:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(28),u=a(31),l=a(10),s=(a(73),a(56)),o=a.n(s),c=(a(81),a(19)),m=a(7),d=a.n(m),p=a(24),h=a.n(p),E=a(17),b=a.n(E),f=function(){return i.a.createElement(b.a,{className:"main-navbar has-shadow is-spaced"},i.a.createElement(b.a.Brand,null,i.a.createElement(b.a.Item,{renderAs:"a",href:"/my-lms"},i.a.createElement(d.a,{size:4},"Basic LMS")),i.a.createElement(b.a.Burger,null)),i.a.createElement(b.a.Menu,null,i.a.createElement(b.a.Container,{position:"end"},i.a.createElement(b.a.Item,{renderAs:l.b,to:"/courses"},"Course Catalog"),i.a.createElement(b.a.Item,{renderAs:l.b,to:"/my-courses"},"My Courses"),i.a.createElement(b.a.Item,{renderAs:"span"},i.a.createElement(h.a,{renderAs:l.b,to:"/login"},"Sign in")))))},v=a(58),g=a.n(v),q=a(8),y=a.n(q),L=a(15),x=a.n(L),S=(a(105),function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(g.a,{className:"footer"},i.a.createElement(y.a,null,i.a.createElement(x.a,{style:{textAlign:"center"}},i.a.createElement("p",null,"My LMS. A sample app.")))))}),U=a(6),z=a.n(U),C=(a(109),function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(y.a,null,i.a.createElement(z.a,{className:"not-found is-vcentered"},i.a.createElement(z.a.Column,null,i.a.createElement(d.a,{className:"has-text-centered",size:2},"Page Not found")))))}),J="course-catalog",M="".concat(J,"/SET_COURSE_CATALOG"),A="".concat(J,"/RESET_COURSE_CATALOG"),P=a(44),O={courseCatalog:[]},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return Object(P.a)({},e,{courseCatalog:t.payload});case A:return Object(P.a)({},e);default:return e}},I=a(18),w=a.n(I),T=a(23),j=a.n(T),Q=(a(128),function(e){var t=e.course,a=Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,5);return i.a.createElement(z.a.Column,{key:t.id,size:3},i.a.createElement(l.b,{to:"/course/".concat(t.id)},i.a.createElement(w.a,null,i.a.createElement(w.a.Image,{size:"4by3",src:"".concat(t.thumbnail,"?").concat(a)}),i.a.createElement(w.a.Content,null,i.a.createElement(j.a,null,i.a.createElement(j.a.Item,null,i.a.createElement(d.a,{size:4},t.title),i.a.createElement(d.a,{subtitle:!0,size:6},"by"," ",t.author))),i.a.createElement(x.a,null,t.description)),i.a.createElement(w.a.Footer,null,i.a.createElement(w.a.Footer.Item,{renderAs:"a",href:"#Yes"},"Play This Course")))))}),k=function(e){return e[J].courseCatalog},F=[{id:1,title:"Optio quaerat unde",thumbnail:"https://source.unsplash.com/featured/400x300/?healthcare",author:"Juana Learn",description:"Laudantium reiciendis nesciunt eligendi mollitia voluptatum magnam tempore accusamus facere quos dignissimos"},{id:2,title:"Voluptatibus nisi ab",thumbnail:"https://source.unsplash.com/featured/400x300/?healthcare",author:"Juana Learn",description:"Quas ut earum quasi ullam reprehenderit incidunt corrupti ex impedit tenetur atque"},{id:3,title:"Et doloribus quia",thumbnail:"https://source.unsplash.com/featured/400x300/?healthcare",author:"Juana Learn",description:"Quae ducimus fuga ad ratione ipsum eaque molestiae, vel sapiente tenetur eum"},{id:4,title:"Sunt nulla suscipit",thumbnail:"https://source.unsplash.com/featured/400x300/?healthcare",author:"Juana Learn",description:"Laudantium reiciendis nesciunt eligendi mollitia voluptatum magnam tempore accusamus facere quos dignissimos"},{id:5,title:"Explicabo expedita",thumbnail:"https://source.unsplash.com/featured/400x300/?healthcare",author:"Juana Learn",description:"Modi iure maiores eligendi consectetur sint non sit quisquam quas, cum deleniti?"},{id:6,title:"Voluptatibus nisi ab",thumbnail:"https://source.unsplash.com/featured/400x300/?healthcare",author:"Juana Learn",description:"Quas ut earum quasi ullam reprehenderit incidunt corrupti ex impedit tenetur atque"},{id:7,title:"Et doloribus quia",thumbnail:"https://source.unsplash.com/featured/400x300/?healthcare",author:"Juana Learn",description:"Quae ducimus fuga ad ratione ipsum eaque molestiae, vel sapiente tenetur eum"},{id:8,title:"Sunt nulla suscipit",thumbnail:"https://source.unsplash.com/featured/400x300/?healthcare",author:"Juana Learn",description:"Laudantium reiciendis nesciunt eligendi mollitia voluptatum magnam tempore accusamus facere quos dignissimos"}],B=Object(u.b)((function(e){return{courses:k(e)}}),{init:function(){return function(e){return console.log(">>> setCourseCatalog"),e({type:M,payload:F})}},reset:function(){return function(e){return console.log(">>> resetCourseCatalog"),e({type:"RESET_COURSE_CATALOG"})}}})((function(e){var t=e.courses,a=e.init,r=e.reset;return Object(n.useEffect)((function(){return a(),function(){r()}}),[]),i.a.createElement(y.a,null,i.a.createElement(d.a,{size:3},"Catalog"),i.a.createElement(z.a,null,t.map((function(e){return i.a.createElement(Q,{key:e.id,course:e})}))))})),R=(a(129),function(){return i.a.createElement(y.a,null,i.a.createElement(z.a,{centered:!0,className:"home is-vcentered has-text-centered"},i.a.createElement(z.a.Column,null,i.a.createElement(d.a,{size:1},"My LMS"),i.a.createElement(d.a,{size:3,subtitle:!0},"A sample app"))),i.a.createElement(x.a,null),i.a.createElement(B,null))}),V=[{id:1,title:"Optio quaerat unde",thumbnail:"https://source.unsplash.com/featured/400x300/?healthcare",author:"Juana Learn",description:"Laudantium reiciendis nesciunt eligendi mollitia voluptatum magnam tempore accusamus facere quos dignissimos"},{id:2,title:"Voluptatibus nisi ab",thumbnail:"https://source.unsplash.com/featured/400x300/?healthcare",author:"Juana Learn",description:"Quas ut earum quasi ullam reprehenderit incidunt corrupti ex impedit tenetur atque"},{id:3,title:"Et doloribus quia",thumbnail:"https://source.unsplash.com/featured/400x300/?healthcare",author:"Juana Learn",description:"Quae ducimus fuga ad ratione ipsum eaque molestiae, vel sapiente tenetur eum"},{id:4,title:"Sunt nulla suscipit",thumbnail:"https://source.unsplash.com/featured/400x300/?healthcare",author:"Juana Learn",description:"Laudantium reiciendis nesciunt eligendi mollitia voluptatum magnam tempore accusamus facere quos dignissimos"},{id:5,title:"Explicabo expedita",thumbnail:"https://source.unsplash.com/featured/400x300/?healthcare",author:"Juana Learn",description:"Modi iure maiores eligendi consectetur sint non sit quisquam quas, cum deleniti?"}],_=function(){return i.a.createElement(y.a,null,i.a.createElement(d.a,{size:3},"My Courses"),i.a.createElement(z.a,null,V.map((function(e){return i.a.createElement(Q,{key:e.id,course:e})}))))},G=a(40),D=a.n(G),Y=a(21),H=a(22),K=(a(133),function(e){e.course;var t=Object(c.g)().id;return i.a.createElement(y.a,null,i.a.createElement(z.a,null,i.a.createElement(z.a.Column,{size:8},i.a.createElement(d.a,{size:3},"Course Title"),i.a.createElement(d.a,{subtitle:!0,size:6},i.a.createElement(x.a,null,i.a.createElement(Y.a,{className:"icon",icon:H.d}),"186h 41m 30s")),i.a.createElement(x.a,null,i.a.createElement("p",null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi nesciunt a illum blanditiis libero quasi magnam, deserunt, reprehenderit voluptatum, quia eveniet non veritatis! In exercitationem tempore illo laboriosam ut odio vitae? Dolorum unde quia, ex ut non soluta nobis at vero quaerat, iusto cupiditate ab reiciendis dolores distinctio ipsam. Laboriosam blanditiis debitis, suscipit reiciendis nemo modi quo minima? Impedit fuga at maiores excepturi ex suscipit ducimus rem hic nesciunt. Voluptatum cumque, commodi dignissimos itaque et, repellendus voluptates culpa ducimus quod, sunt vero. Vitae tempore repellat explicabo ducimus incidunt quas placeat! Ea ipsa cupiditate ducimus voluptatem, iste dolores temporibus tempore rem, blanditiis quae quas quibusdam perspiciatis dignissimos fugit? Laboriosam alias, corrupti ea saepe architecto ut nemo reiciendis vel laborum reprehenderit tempora pariatur quas labore voluptatem necessitatibus eveniet tenetur quia? Voluptatem sint sed in aspernatur quis! Neque repellat odio sit nisi corporis, excepturi, beatae doloremque ipsum veritatis reiciendis quos consequatur unde. Quis."),i.a.createElement("hr",null),i.a.createElement(d.a,{size:4},"Topics"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:"#"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, sapiente.")),i.a.createElement("li",null,i.a.createElement("a",{href:"#"},"Distinctio eveniet unde praesentium vitae error voluptas laudantium veniam perferendis.")),i.a.createElement("li",null,i.a.createElement("a",{href:"#"},"Fuga esse ullam provident? Maiores quidem dolorem in excepturi temporibus.")),i.a.createElement("li",null,i.a.createElement("a",{href:"#"},"Et suscipit, ratione cumque quis maxime minus ea culpa earum!")),i.a.createElement("li",null,i.a.createElement("a",{href:"#"},"Aliquam doloribus doloremque perferendis quae laborum recusandae omnis est sequi?")),i.a.createElement("li",null,i.a.createElement("a",{href:"#"},"Quo sunt voluptatum nam non doloremque laborum eaque quae placeat?")),i.a.createElement("li",null,i.a.createElement("a",{href:"#"},"Dolore molestias quis natus inventore ex, rem dolorem voluptas nulla?")),i.a.createElement("li",null,i.a.createElement("a",{href:"#"},"Suscipit perferendis voluptates id doloribus sed facilis dignissimos voluptas voluptatem.")),i.a.createElement("li",null,i.a.createElement("a",{href:"#"},"Possimus quod a expedita assumenda modi perferendis, natus impedit consequuntur!")),i.a.createElement("li",null,i.a.createElement("a",{href:"#"},"Sunt voluptate dolorem, porro praesentium harum excepturi quam alias quis!"))))),i.a.createElement(z.a.Column,{size:4},i.a.createElement(y.a,null,i.a.createElement(z.a,{centered:!0},i.a.createElement(z.a.Column,{size:8},i.a.createElement("div",null,i.a.createElement(D.a,{rounded:!0,src:"https://source.unsplash.com/featured/256x256/?portrait+lady"}),i.a.createElement("p",{className:"has-text-centere  d",style:{marginTop:"1em"}},"by Juana Learn"),i.a.createElement("p",{style:{marginTop:"1em"}},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id officiis animi libero nisi voluptatibus nemo possimus incidunt, distinctio fugit culpa!")),i.a.createElement("div",{style:{marginTop:"1em"}},i.a.createElement(h.a,{fullwidth:!0,color:"primary",size:"medium",renderAs:l.b,to:"/viewer/".concat(t)},"Play this course"))))))))}),W=a(13),X=a(59),Z=a.n(X),$=a(46),ee=a.n($),te=(a(152),function(){return i.a.createElement(y.a,{className:"login"},i.a.createElement(z.a,{centered:!0,className:"is-vcentered"},i.a.createElement(z.a.Column,{desktop:{size:5},widescreen:{size:4},tablet:{size:6}},i.a.createElement(d.a,{className:"has-text-centered"},"Login to your account"),i.a.createElement(Z.a,null,i.a.createElement(W.Field,null,i.a.createElement(W.Label,null,"Email"),i.a.createElement("div",{className:"control has-icons-left"},i.a.createElement(W.Control,{iconLeft:!0,iconRight:!0},i.a.createElement(W.Input,{type:"email",placeholder:"juana@learn.com"}),i.a.createElement(ee.a,{align:"left"},i.a.createElement(Y.a,{icon:H.b}))))),i.a.createElement(W.Field,null,i.a.createElement(W.Label,null,"Password"),i.a.createElement("div",{className:"control has-icons-left"},i.a.createElement(W.Input,{type:"password",placeholder:"*******",required:!0}),i.a.createElement(ee.a,{align:"left"},i.a.createElement(Y.a,{icon:H.c})))),i.a.createElement(W.Field,null,i.a.createElement(W.Label,null,i.a.createElement(W.Checkbox,null)," ","Remember me")),i.a.createElement(W.Field,null,i.a.createElement(h.a,{color:"success"},"Login"))),i.a.createElement("p",{className:"has-text-centered"},i.a.createElement(l.b,{to:"/courses"},"\u2190 Go back to the Course Catalog")))))}),ae=a(60),ne=a.n(ae),ie=a(61),re=a.n(ie),ue=a(32),le=a.n(ue),se=a(62),oe=a.n(se),ce=(a(171),function(e){var t=e.lessons,a=e.currentLesson,n=a.title,r=a.author,u=a.description;return i.a.createElement(y.a,null,i.a.createElement(w.a,null,i.a.createElement(w.a.Content,null,i.a.createElement(j.a,null,i.a.createElement(j.a.Item,null,i.a.createElement(d.a,{size:4},n),i.a.createElement(d.a,{subtitle:!0,size:6},"by",r)),i.a.createElement(j.a.Item,{position:"right"},i.a.createElement(oe.a,{rounded:!0},"3 of 12"))),i.a.createElement(x.a,null,u))),i.a.createElement("br",null),i.a.createElement(le.a,null,t.map((function(e,t){return i.a.createElement(le.a.Block,{key:e.id,renderAs:"a",href:e.active?null:e.id,active:!!e.active},e.active?i.a.createElement(le.a.Icon,{renderAs:Y.a,icon:H.a}):null,i.a.createElement("span",{className:"lesson-number"},"".concat(t+1,".")),e.title)}))))}),me=(a(172),[{id:1,videoUrl:"https://youtu.be/ysz5S6PUM-U",title:"Lorem, ipsum dolor.",author:"Juana Learn",description:"Short description"},{id:2,videoUrl:"https://youtu.be/ysz5S6PUM-U",title:"Tenetur, error voluptatem",author:"Juana Learn",description:"Short description"},{id:3,active:!0,videoUrl:"https://youtu.be/ysz5S6PUM-U",title:"Blanditiis, distinctio dicta",author:"Juana Learn",description:"Short description"},{id:4,videoUrl:"https://youtu.be/ysz5S6PUM-U",title:"Quae, tempore quaerat",author:"Juana Learn",description:"Short description"},{id:5,videoUrl:"https://youtu.be/ysz5S6PUM-U",title:"Amet, eligendi corrupti",author:"Juana Learn",description:"Short description"},{id:6,videoUrl:"https://youtu.be/ysz5S6PUM-U",title:"Laudantium, enim similique",author:"Juana Learn",description:"Short description"},{id:7,videoUrl:"https://youtu.be/ysz5S6PUM-U",title:"Quae, tempore quaerat",author:"Juana Learn",description:"Short description"},{id:8,videoUrl:"https://youtu.be/ysz5S6PUM-U",title:"Amet, eligendi corrupti",author:"Juana Learn",description:"Short description"},{id:9,videoUrl:"https://youtu.be/ysz5S6PUM-U",title:"Laudantium, enim similique",author:"Juana Learn",description:"Short description"},{id:10,videoUrl:"https://youtu.be/ysz5S6PUM-U",title:"Quae, tempore quaerat",author:"Juana Learn",description:"Short description"},{id:11,videoUrl:"https://youtu.be/ysz5S6PUM-U",title:"Amet, eligendi corrupti",author:"Juana Learn",description:"Short description"},{id:12,videoUrl:"https://youtu.be/ysz5S6PUM-U",title:"Laudantium, enim similique",author:"Juana Learn",description:"Short description"}]),de={id:3,active:!0,videoUrl:"https://youtu.be/ysz5S6PUM-U",title:"Blanditiis, distinctio dicta",author:"Juana Learn",description:"Short description"},pe=function(e){e.url,e.next,e.previous;return i.a.createElement(y.a,{fluid:!0},i.a.createElement(z.a,null,i.a.createElement(z.a.Column,{size:8},i.a.createElement(y.a,null,i.a.createElement(re.a,{className:"react-player",width:"100%",height:"640px",url:"https://www.youtube.com/watch?v=ysz5S6PUM-U"}),i.a.createElement(ne.a,{next:"Next: Quae, tempore quaerat",previous:"Previous: Tenetur, error voluptatem",className:"pagination",current:3,total:5,delta:0}))),i.a.createElement(z.a.Column,{size:4},i.a.createElement(ce,{lessons:me,currentLesson:de}))))},he=function(){return i.a.createElement(i.a.Fragment,null,"/login"===Object(c.f)().pathname?"":i.a.createElement(f,null),i.a.createElement(o.a,null,i.a.createElement(c.c,null,i.a.createElement(c.a,{exact:!0,path:"/courses",component:B}),i.a.createElement(c.a,{path:"/login",component:te}),i.a.createElement(c.a,{path:"/my-courses",component:_}),i.a.createElement(c.a,{path:"/course/:id",component:K}),i.a.createElement(c.a,{path:"/viewer/:id",component:pe}),i.a.createElement(c.a,{path:"/",component:R}),i.a.createElement(c.a,{path:"*",exact:!0,component:C}))),"/login"===Object(c.f)().pathname?"":i.a.createElement(S,null))},Ee=a(20),be=a(63),fe=a(30),ve=Object(Ee.c)(Object(fe.a)({},J,N)),ge=Object(Ee.d)(ve,Object(Ee.a)(be.a));Object(r.render)(i.a.createElement(i.a.StrictMode,null,i.a.createElement(u.a,{store:ge},i.a.createElement(l.a,{basename:"/my-lms"},i.a.createElement(he,null)))),document.getElementById("root"))},64:function(e,t,a){e.exports=a(173)},81:function(e,t,a){}},[[64,1,2]]]);
//# sourceMappingURL=main.60d2005f.chunk.js.map