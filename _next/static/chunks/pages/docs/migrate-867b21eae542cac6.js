(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[946],{22962:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/migrate",function(){return s(76275)}])},4832:function(e,t){"use strict";t.Z={src:"/_next/static/media/stackblitz.173f056f.png",height:1700,width:2708,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/AD1BSC0wNzo5Q0ZDSRkAAHmHja+8wri+wQA1PUklJyw2O0VAQ0UAAACgpqXp7+7v8fEAPz5BKSouMjxGNkRJAAAAn6Sr7PD17e/xADs9Pi0sLS9KPCpROwAAAJOqqtrv7+bw7wAzT3cxTXkjYCszdkoALwChoaPi5ubo6+oo0DJ9GDQRSwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5}},76275:function(e,t,s){"use strict";s.r(t),s.d(t,{__toc:function(){return h}});var n=s(85893),i=s(92673),r=s(48164),o=s(13257);s(47954);var l=s(82643),a=s(4832),c=s(54957),d=s(66377);let h=[{depth:2,value:"Outline",id:"outline"},{depth:2,value:"Arguments",id:"arguments"},{depth:2,value:"Cloud Editor",id:"cloud-editor"}];function p(e){let t=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code",span:"span",p:"p",ul:"ul",li:"li",a:"a",img:"img",blockquote:"blockquote"},(0,l.a)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{children:"Migration from Swagger"}),"\n",(0,n.jsx)(t.h2,{id:"outline",children:"Outline"}),"\n",(0,n.jsx)(t.pre,{"data-language":"bash","data-theme":"default",filename:"Terminal",hasCopyCode:!0,children:(0,n.jsx)(t.code,{"data-line-numbers":"","data-language":"bash","data-theme":"default","data-line-numbers-max-digits":"1",children:(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"npx"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"@nestia/migrate"})]})})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"@nestia/migrate"})," converts ",(0,n.jsx)(t.code,{children:"swagger.json"})," file to:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"NestJS Project"}),"\n",(0,n.jsxs)(t.li,{children:["Standalone ",(0,n.jsx)(t.a,{href:"./sdk/sdk",children:"SDK Library"})]}),"\n",(0,n.jsxs)(t.li,{children:["Standalone ",(0,n.jsx)(t.a,{href:"./sdk/simulator",children:"Mockup Simulator"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["When you run ",(0,n.jsx)(t.code,{children:"npx @nestia/migrate"})," command, ",(0,n.jsx)(t.code,{children:"@nestia/migrate"})," will analyze your ",(0,n.jsx)(t.code,{children:"swagger.json"})," file, and generate a NestJS project into the ",(0,n.jsx)(t.code,{children:"output"})," direcory. If you're considering to migrate your backend project to NestJS, @nestia/migrate will be a good starting point."]}),"\n",(0,n.jsxs)(t.p,{children:["Of course, even if you're not considering to adapt NestJS, you can generate standalone ",(0,n.jsx)(t.a,{href:"./sdk/sdk",children:"SDK library"})," and ",(0,n.jsx)(t.a,{href:"./sdk/simulator",children:"Mockup Simulator"})," from the ",(0,n.jsx)(t.code,{children:"swagger.json"})," file instead. Just run the ",(0,n.jsx)(t.code,{children:"npx @nestia/migrate"})," command and build the SDK library and Mockup Simulator, then frontend (client) developers may get satisfied."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://user-images.githubusercontent.com/13158709/215004990-368c589d-7101-404e-b81b-fbc936382f05.gif",alt:"SDK"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Left is NestJS server code, and right is client (frontend) code utilizing SDK"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsx)(t.pre,{"data-language":"bash","data-theme":"default",filename:"Terminal",hasCopyCode:!0,children:(0,n.jsxs)(t.code,{"data-line-numbers":"","data-language":"bash","data-theme":"default","data-line-numbers-max-digits":"2",children:[(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-comment)"},children:"# GRAMMER"})}),"\n",(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"npx"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"@nestia/migrate"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "})]}),"\n",(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"--mode"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" [nest"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"sdk]"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "})]}),"\n",(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"--input"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" [input] "})]}),"\n",(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"--output"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" [output] "})]}),"\n",(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"--simulate"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" [true"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"false"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"]"})]}),"\n",(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"--e2e"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" [true"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"false"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"]"})]}),"\n",(0,n.jsx)(t.span,{className:"line",children:" "}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-comment)"},children:"# EXAMPLES"})}),"\n",(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"npx"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"@nestia/migrate"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"--mode"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"nest"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"--input"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"swagger.json"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"--output"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"directory"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"--simulate"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"--e2e"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"false"})]}),"\n",(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"npx"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"@nestia/migrate"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"--mode"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"sdk"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"--input"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"swagger.json"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"--output"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"directory"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"--simulate"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"--e2e"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"true"})]})]})}),"\n",(0,n.jsx)(t.p,{children:"You can specify migration options like above."}),"\n",(0,n.jsx)(t.p,{children:"However, don't worry anything. If you omit something, prompt inquiries will help you."}),"\n",(0,n.jsx)(t.pre,{"data-language":"bash","data-theme":"default",children:(0,n.jsxs)(t.code,{"data-language":"bash","data-theme":"default",children:[(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"npx"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"@nestia/migrate"})]}),"\n",(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" Migration mode ("}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"Use"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"arrow"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"keys"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"):"})]}),"\n",(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"NestJS"})]}),"\n",(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"SDK"})]}),"\n",(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" Swagger file location: assets/input/clickhouse.json"})]}),"\n",(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" Output directory path: assets/output/clickhouse-sdk-manual"})]}),"\n",(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" Mokup Simulator: true"})]}),"\n",(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" E2E Test Functions: true"})]})]})}),"\n",(0,n.jsx)(t.h2,{id:"cloud-editor",children:"Cloud Editor"}),"\n",(0,n.jsxs)(t.p,{children:["You can test ",(0,n.jsx)(t.code,{children:"@nestia/migrate"})," on the web browser."]}),"\n",(0,n.jsxs)(t.p,{children:["Visit ",(0,n.jsx)(t.a,{href:"./editor",children:"TypeScript Swagger Editor"})," and upload your ",(0,n.jsx)(t.code,{children:"swagger.json"})," file."]}),"\n",(0,n.jsx)(t.p,{children:"Then, you can test the migrated NestJS Project, SDK library and Mockup Simulator in the web browser."}),"\n",(0,n.jsx)(c.Z,{mode:"nest"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["Put your ",(0,n.jsx)(t.code,{children:"swagger.json"}),' file, then "TypeScript Swagger Editor" be opened.']}),"\n"]}),"\n",(0,n.jsx)(t.ul,{children:(0,n.jsxs)(t.li,{children:[" Demo Editors",(0,n.jsx)(t.ul,{children:d.d.map(e=>(0,n.jsxs)(t.li,{children:[e.title,": "," ",(0,n.jsx)(t.a,{href:e.nest,target:"_blank",children:"NestJS Project"})," /"," ",(0,n.jsx)(t.a,{href:e.sdk,target:"_blank",children:"SDK & Simulator"})]}))})]})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://stackblitz.com/edit/1g6adb?file=README.md&startScript=build:test,test",children:(0,n.jsx)(t.img,{alt:"Example Case",placeholder:"blur",src:a.Z})})})]})}let u={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,l.a)(),e.components);return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)},pageOpts:{filePath:"pages/docs/migrate.mdx",route:"/docs/migrate",timestamp:1712919833e3,pageMap:[{kind:"Meta",data:{index:{title:"Introduction",type:"page",hidden:!0,display:"hidden",theme:{layout:"full"}},docs:{title:"\uD83D\uDCD6 Guide Documents",type:"page"},playground:{title:"\uD83D\uDCBB Playground",type:"page",href:"https://stackblitz.com/github/samchon/nestia-template?file=src%2Fcontrollers%2FBbsArticlesController.ts&file=src%2Fapi%2Ffunctional%2Fbbs%2Farticles%2Findex.ts,test%2Ffeatures%2Fapi%2Fbbs%2Ftest_api_bbs_article_store.ts&view=editor",newWindow:!0}}},{kind:"Folder",name:"docs",route:"/docs",children:[{kind:"Meta",data:{index:"\uD83D\uDE4B\uD83C\uDFFB‍♂️ Introduction",setup:"\uD83D\uDCE6 Setup",pure:"⛲ Pure TypeScript","-- features":{type:"separator",title:"\uD83D\uDCD6 Features"},core:"Core Library",sdk:"Generators",migrate:"Migration from Swagger",editor:"TypeScript Swagger Editor","-- appendix":{type:"separator",title:"\uD83D\uDD17 Appendix"},benchmark:{title:"⇲ Benchmark Result",href:"https://github.com/samchon/nestia/tree/master/benchmark/results/11th%20Gen%20Intel(R)%20Core(TM)%20i5-1135G7%20%40%202.40GHz",newWindow:!0},articles:{title:"⇲ dev.to Articles",href:"https://dev.to/samchon/series/22751",newWindow:!0}}},{kind:"Folder",name:"core",route:"/docs/core",children:[{kind:"MdxPage",name:"TypedBody",route:"/docs/core/TypedBody"},{kind:"MdxPage",name:"TypedException",route:"/docs/core/TypedException"},{kind:"MdxPage",name:"TypedFormData",route:"/docs/core/TypedFormData"},{kind:"MdxPage",name:"TypedHeaders",route:"/docs/core/TypedHeaders"},{kind:"MdxPage",name:"TypedParam",route:"/docs/core/TypedParam"},{kind:"MdxPage",name:"TypedQuery",route:"/docs/core/TypedQuery"},{kind:"MdxPage",name:"TypedRoute",route:"/docs/core/TypedRoute"},{kind:"Meta",data:{TypedRoute:"TypedRoute",TypedBody:"TypedBody",TypedParam:"TypedParam",TypedQuery:"TypedQuery",TypedFormData:"TypedFormData",TypedHeaders:"TypedHeaders",TypedException:"TypedException"}}]},{kind:"MdxPage",name:"editor",route:"/docs/editor"},{kind:"MdxPage",name:"index",route:"/docs"},{kind:"MdxPage",name:"migrate",route:"/docs/migrate"},{kind:"MdxPage",name:"pure",route:"/docs/pure"},{kind:"Folder",name:"sdk",route:"/docs/sdk",children:[{kind:"Meta",data:{swagger:"Swagger Documents",sdk:"S/W Development Kit",simulator:"Mockup Simulator",e2e:"E2E Test Functions"}},{kind:"MdxPage",name:"e2e",route:"/docs/sdk/e2e"},{kind:"MdxPage",name:"sdk",route:"/docs/sdk/sdk"},{kind:"MdxPage",name:"simulator",route:"/docs/sdk/simulator"},{kind:"MdxPage",name:"swagger",route:"/docs/sdk/swagger"}]},{kind:"MdxPage",name:"setup",route:"/docs/setup"}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"playground",route:"/playground",children:[{kind:"MdxPage",name:"index",route:"/playground"},{kind:"Meta",data:{index:"Index"}}]}],flexsearch:{codeblocks:!0},title:"Migration from Swagger",headings:h},pageNextRoute:"/docs/migrate",nextraLayout:r.ZP,themeConfig:o.Z};t.default=(0,i.j)(u)},66377:function(e,t,s){"use strict";s.d(t,{d:function(){return n}});let n=[{title:"BBS (Bullet-in Board System)",sdk:"https://stackblitz.com/edit/q6tmiu?file=README.md,test%2Fstart.ts&startScript=swagger&startScript=hello",nest:"https://stackblitz.com/edit/hxrl8k?file=README.md&startScript=build:test,test"},{title:"Shopping Mall",sdk:"https://stackblitz.com/edit/f655jg?file=README.md,test%2Fstart.ts&startScript=swagger&startScript=hello",nest:"https://stackblitz.com/edit/bmssyv?file=README.md&startScript=build:test,test"},{title:"Clickhouse",sdk:"https://stackblitz.com/edit/q4frqj?file=README.md,test%2Fstart.ts&startScript=swagger&startScript=hello",nest:"https://stackblitz.com/edit/56cja5-g5hqqs?file=README.md&startScript=build:test,test"},{title:"Fireblocks",sdk:"https://stackblitz.com/edit/pn2u1h?file=README.md,test%2Fstart.ts&startScript=swagger&startScript=hello",nest:"https://stackblitz.com/edit/8mhnns?file=README.md&startScript=build:test,test"},{title:"Uber",sdk:"https://stackblitz.com/edit/rzabgy?file=README.md,test%2Fstart.ts&startScript=swagger&startScript=hello",nest:"https://stackblitz.com/edit/8px66f?file=README.md&startScript=build:test,test"},{title:"아임포트",sdk:"https://stackblitz.com/edit/5jpnps?file=README.md,test%2Fstart.ts&startScript=swagger&startScript=hello",nest:"https://stackblitz.com/edit/yxdfn7?file=README.md&startScript=build:test,test"},{title:"토스페이먼츠",sdk:"https://stackblitz.com/edit/kltfqh?file=README.md,test%2Fstart.ts&startScript=swagger&startScript=hello",nest:"https://stackblitz.com/edit/y3cpej?file=README.md&startScript=build:test,test"}]},54957:function(e,t,s){"use strict";s.d(t,{Z:function(){return v}});var n=s(85893),i=s(90629),r=s(27505),o=s(30990),l=s(72890),a=s(50480),c=s(36872),d=s(45843),h=s(69417),p=s(73660),u=s(79979),x=s(9966),k=s(28538),g=s(94935),m=s(67294),j=s(1272),y=s(40410),f=e=>{let[t,s]=(0,m.useState)([]),i=async t=>{if(0===t.length){e.onChange(null,null);return}let n=t.at(-1),i=await n.arrayBuffer(),r=new TextDecoder().decode(i),o=n.name.split(".").pop();try{let t="json"===o?JSON.parse(r):(0,j.zD)(r);e.onChange(t,null)}catch(t){e.onChange(null,"json"===o?"Invalid JSON file":"Invalid YAML file");return}t.length>1&&s([n])};return(0,n.jsx)(y.Z,{defaultFiles:t,onFilesChange:i,acceptedType:".json, .yaml",getBase64:!1,multiFile:!1,maxUploadFiles:1,title:"Swagger file uploader",header:"Drag and drop a Swagger file here",buttonLabel:"Click Here",rightLabel:"to select swagger.json/yaml file",buttonRemoveLabel:"Clear"})},v=e=>{let[t,s]=(0,m.useState)(e.mode),[j,y]=(0,m.useState)(!0),[v,b]=(0,m.useState)(!0),[S,w]=(0,m.useState)(null),[D,A]=(0,m.useState)(null),[E,M]=(0,m.useState)(!1),T=async(e,s)=>{try{let n=await p.MigrateApplication.create(e);if(!1===n.success)return alert("Invalid swagger file (based on OpenAPI 3.0 spec).\n\n"+JSON.stringify(n.errors,null,2)),null;let{files:i}=n.data[t](s);for(let e of i)".ts"===e.file.substring(e.file.length-3)&&(e.content=await (0,g.WU)(e.content,{parser:"typescript",plugins:[x.ZP,k.Z]}));return i}catch(e){return alert(e instanceof Error?e.message:"unkown error"),null}},N=async()=>{var e,s;if(null===S)return;M(!0);let n=await T(S,{simulate:j,e2e:v});if(null===n){M(!1);return}u.Z.openProject({title:null!==(s=null===(e=S.info)||void 0===e?void 0:e.title)&&void 0!==s?s:"TypeScript Swagger Editor",template:"node",files:Object.fromEntries(n.map(e=>[[e.location,e.location.length?"/":"",e.file].join(""),e.content]))},{newWindow:!0,openFile:"README.md,test/start.ts",startScript:"sdk"===t?["swagger","hello"]:["build:test,test",""]}),M(!1)};return(0,n.jsxs)(i.Z,{style:{padding:10,marginTop:20},elevation:5,children:[(0,n.jsx)(f,{onChange:(e,t)=>{w(e),A(t)}}),(0,n.jsx)("br",{}),(0,n.jsxs)(r.Z,{fullWidth:!0,style:{paddingLeft:15},children:[(0,n.jsx)(o.Z,{children:" Mode "}),(0,n.jsxs)(l.Z,{defaultValue:t,onChange:e=>s(e.target.value),style:{paddingLeft:15},children:[(0,n.jsx)(a.Z,{value:"sdk",control:(0,n.jsx)(c.Z,{}),label:"Software Development Kit"}),(0,n.jsx)(a.Z,{value:"nest",control:(0,n.jsx)(c.Z,{}),label:"NestJS Project"})]}),(0,n.jsx)(o.Z,{style:{paddingTop:20},children:" Options "}),(0,n.jsx)(a.Z,{label:"Mockup Simulator",style:{paddingTop:5,paddingLeft:15},control:(0,n.jsx)(d.Z,{checked:j,onChange:()=>y(!j)})}),(0,n.jsx)(a.Z,{label:"E2E Test Functions",style:{paddingLeft:15},control:(0,n.jsx)(d.Z,{checked:v,onChange:()=>b(!v)})})]}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(h.Z,{component:"a",fullWidth:!0,variant:"contained",color:"info",size:"large",disabled:!0===E||null===S,onClick:()=>N(),children:null!=D?D:E?"Generating...":"Generate Editor"})]})}},13257:function(e,t,s){"use strict";var n=s(85893);s(67294),t.Z={logo:()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("img",{src:"/favicon/android-chrome-192x192.png",width:32,height:32}),(0,n.jsx)("span",{style:{fontWeight:"bold",fontSize:"1.2rem",paddingLeft:10,paddingRight:10},children:"Nestia"}),(0,n.jsx)("span",{children:"NestJS Helper Libraries"})]}),project:{link:"https://github.com/samchon/nestia"},docsRepositoryBase:"https://github.com/samchon/nestia/blob/master/website",footer:{text:()=>(0,n.jsxs)("span",{children:["Made by"," ",(0,n.jsx)("a",{href:"https://github.com/samchon",target:"_blank",style:{color:"blue"},children:(0,n.jsx)("u",{children:" Samchon "})})]})},useNextSeoProps:()=>({defaultTitle:"Nestia Guide Documents",titleTemplate:"Nestia Guide Documents - %s",additionalLinkTags:[{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"},{rel:"manifest",href:"/favicon/site.webmanifest"},...[16,32].map(e=>({rel:"icon",type:"image/png",sizes:"".concat(e,"x").concat(e),href:"/favicon/favicon-".concat(e,"x").concat(e,".png")}))],additionalMetaTags:[{property:"og:image",content:"/og.jpg"},{property:"og:type",content:"object"},{property:"og:title",content:"Nestia Guide Documents"},{property:"og:description",content:"NestJS Helper Libraries"},{property:"og:site_name",content:"Nestia Guide Documents"},{property:"og:url",content:"https://nestia.io"},{name:"twitter:card",content:"summary"},{name:"twitter:image",content:"https://nestia.io/og.jpg"},{name:"twitter:title",content:"Nestia Guide Documents"},{name:"twitter:description",content:"NestJS Helper Libraries"},{name:"twitter:site",content:"@SamchonGithub"}]})}},13411:function(e){function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=13411,e.exports=t},15789:function(){},62183:function(){},13024:function(){},62715:function(){},13611:function(){},28353:function(){},1210:function(){},77488:function(){},43454:function(){}},function(e){e.O(0,[138,943,528,28,718,682,435,61,104,888,774,179],function(){return e(e.s=22962)}),_N_E=e.O()}]);