(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{7276:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(8232)}])},8232:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>g});var r=a(4848),s=a(3368),n=a.n(s),l=a(9965),i=a.n(l),d=a(6540);let m=JSON.parse('["rattsliga-dokument/departementsserien-och-promemorior","rattsliga-dokument/forordningsmotiv","rattsliga-dokument/kommittedirektiv","rattsliga-dokument/lagradsremiss","rattsliga-dokument/proposition","rattsliga-dokument/skrivelse","rattsliga-dokument/statens-offentliga-utredningar","rattsliga-dokument/sveriges-internationella-overenskommelser","faktapromemoria","informationsmaterial","internationella-mr-granskningar-av-sverige","kommenterade-dagordningar","rapporter","remisser","regeringsuppdrag","regeringsarenden","sakrad","strategier-for-internationellt-bistand","overenskommelser-och-avtal","arendeforteckningar","artiklar","debattartiklar","pressmeddelanden","tal","ud-avrader","uttalanden"]');function o(){d.useEffect(()=>{(async()=>{try{let e=await fetch("https://g0v.se/api/latest_updated.json"),t=await e.json();b(t)}catch(e){v("Kunde inte ladda senaste data")}})()},[]);let[e,t]=(0,d.useState)(""),[a,s]=(0,d.useState)(""),[n,l]=(0,d.useState)(""),[o,g]=(0,d.useState)(""),[c,x]=(0,d.useState)(""),[h,p]=(0,d.useState)(""),[f,k]=(0,d.useState)(""),[u,v]=(0,d.useState)(""),[j,b]=(0,d.useState)(null),N=/^(https?:\/\/)?(www\.)?(regeringen\.se|gov\.se)/,y=/\/$/,w=async e=>{let a=e.target.value;if(t(a),e.preventDefault(),N.test(a)){let e="https://g0v.se",t=a.match(N);var r=a.replace(N,"");let i=a.match(y);r=r.replace(y,"");var n="";""==r?n+="/api/items.json":m.some(e=>r.endsWith(e))?n+=".json":n+=".md",t&&l(t[0]),g(e),x(r),p(i),k(n),s(e+r+n),v("")}else a?(s(""),v("Ogiltig l\xe4nk")):(s(""),v(""))};return(0,r.jsxs)("main",{children:[(0,r.jsxs)("header",{id:"converter",className:"lg:p-8 grid grid-cols-1 md:grid-cols-2 gap-4 lg:px-40 md:h-100",children:[(0,r.jsxs)("div",{className:"mx-auto md:mr-auto m-5",children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(i(),{src:"/logo.svg",alt:"g0vse logo",className:"mr-4 mt-4 mb-4",height:43.238,width:74.876}),(0,r.jsx)("h1",{className:"text-8xl font-bold dark:text-white text-black font-mono",children:"g0vse"})]}),(0,r.jsx)("h2",{className:"text-2xl font-bold mt-4 dark:text-gray-50 text-gray-700",children:"regeringen.se som \xf6ppna data"}),(0,r.jsxs)("p",{className:"text-xl text-gray-700 mt-4 font-light dark:text-gray-200",children:["En av Sveriges viktigaste webbplatser... ",(0,r.jsx)("br",{}),"..\xe4ntligen tillg\xe4nglig som \xf6ppna data!"]}),(0,r.jsx)("p",{className:"text-xs mt-4 font-bold dark:text-gray-200",children:"OBS: g0vse har ingen koppling med regeringen eller Regeringskansliet."})]}),(0,r.jsxs)("form",{className:"rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-blue-500",children:[(0,r.jsx)("h1",{className:"text-2xl font-bold dark:text-gray-50",children:"Konvertera en l\xe4nk"}),(0,r.jsx)("div",{className:"text-left",children:(0,r.jsx)("p",{className:"mb-2 text-xs text-gray-500",children:"Ange en l\xe4nk fr\xe5n regeringen.se eller gov.se"})}),(0,r.jsxs)("label",{htmlFor:"oldLink",className:"text-500 text-xs font-light my-1 1ark:text-gray-50",children:["L\xe4nk",(0,r.jsx)("span",{className:"text-red-500 dark:text-gray-50",children:"*"})]}),(0,r.jsx)("input",{type:"text",value:e,onChange:e=>{w(e)},name:"oldLink",className:"bg-transparent border-b py-2 pl-4 rounded-md ring-1 ".concat(e?a?"ring-green-500":"ring-red-500":"ring-black"," outline-none")}),(0,r.jsxs)("p",{className:"text-xs mt-1 dark:text-gray-200",children:[j?"Antal tillg\xe4ngliga sidor: "+j.items+".":"",j?" Senast uppdaterat: "+j.latest_updated+".":""]}),a?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"mt-3 flex flex-row items-center justify-start",children:(0,r.jsx)("a",{className:"underline",href:a,target:"_blank",rel:"noreferrer",children:a.replace("https://","")})}),(0,r.jsxs)("div",{className:"mt-3 text-xs",children:[(0,r.jsx)("span",{className:"text-red-500 line-through",children:n.replace("https://","")}),(0,r.jsx)("span",{className:"text-green-500",children:o.replace("https://","")}),(0,r.jsx)("span",{className:"text-black-500",children:c}),(0,r.jsx)("span",{className:"text-red-500 line-through",children:h}),(0,r.jsx)("span",{className:"text-green-500",children:f})]}),(0,r.jsx)("div",{className:"text-left",children:(0,r.jsx)("p",{className:"mt-2 text-xs text-gray-500",children:"Observera att de genererade l\xe4nkarna kan vara otillf\xf6rlitliga. Nedan finner du en lista med bekr\xe4ftade API-rutter."})})]}):(0,r.jsx)("div",{className:"mt-3 flex flex-row items-center justify-start",children:(0,r.jsx)("div",{className:"text-red-500 dark:text-gray-50",children:u})})]})]}),(0,r.jsxs)("section",{children:[(0,r.jsx)("h1",{className:"text-4xl font-bold text-center gradient-text text-gray-700 mx-10 mt-5 mb-0",children:"Vad \xe4r g0vse?"}),(0,r.jsxs)("div",{className:"mx-auto my-5 max-w-5xl",children:[(0,r.jsx)("p",{className:"m-5 text-xl text-gray-700 font-light dark:text-gray-200",children:"g0vse som samlar in viktig information och data fr\xe5n regeringens webbplats och g\xf6r den tillg\xe4nglig som \xf6ppen och strukturerad data."}),(0,r.jsx)("p",{className:"m-5 text-xl text-gray-700 mt-0 font-light dark:text-gray-200",children:"Regeringen publicerar dagligen information som \xe4r av stor betydelse f\xf6r oss alla. Det handlar om allt fr\xe5n beslut och statliga utredningar till propositioner och \xf6ppna remissf\xf6rfaranden. Denna information anv\xe4nds av tusentals tj\xe4nstepersoner, politiker, journalister, forskare, lobbyister och engagerade medborgare. Tyv\xe4rr \xe4r den ofta sv\xe5r att hitta och integrera i andra digitala tj\xe4nster."}),(0,r.jsx)("p",{className:"m-5 text-xl text-gray-700 mt-0 font-light dark:text-gray-200",children:"Projektet g0vse har som m\xe5l att s\xe4nka tr\xf6sklarna f\xf6r \xe5teranv\xe4ndning av offentlig information och dokument fr\xe5n regeringen, s\xe5 att de blir enklare att hitta, anv\xe4nda och sprida."})]})]}),(0,r.jsxs)("section",{children:[(0,r.jsx)("h1",{className:"text-4xl font-bold text-center gradient-text text-gray-700 mx-10 mt-5 mb-0",children:"Hur kommer jag \xe5t datat?"}),(0,r.jsxs)("div",{className:"mx-auto my-5 max-w-5xl",children:[(0,r.jsx)("p",{className:"m-5 text-xl text-gray-700 mt-0 font-light dark:text-gray-200",children:"Det finns flera API-anrop f\xf6r att h\xe4mta listor f\xf6r specifika typer av dokument eller sidor:"}),(0,r.jsx)("ul",{className:"m-5 ml-10 list-disc list-inside",children:m.map((e,t)=>(0,r.jsx)("li",{className:"mb-1 text-lg text-gray-700",children:(0,r.jsx)("a",{href:"https://g0v.se/"+e+".json",target:"_blank",rel:"noreferrer",className:"underline text-black-700",children:"/"+e+".json"})},t))}),(0,r.jsx)("p",{className:"m-5 text-xl text-gray-700 mt-0 font-light dark:text-gray-200",children:"Ut\xf6ver det finns det tre extra anrop:"}),(0,r.jsxs)("ul",{className:"m-5 ml-10 list-disc list-inside",children:[(0,r.jsxs)("li",{className:"mb-1 text-lg text-gray-700",children:[(0,r.jsx)("a",{href:"https://g0v.se/api/items.json",target:"_blank",rel:"noreferrer",className:"underline text-black-700",children:"/api/items.json"})," h\xe4mtar alla sidor (OBS: stor fil)"]}),(0,r.jsxs)("li",{className:"mb-1 text-lg text-gray-700",children:[(0,r.jsx)("a",{href:"https://g0v.se/api/codes.json",target:"_blank",rel:"noreferrer",className:"underline text-black-700",children:"/api/codes.json"})," h\xe4mtar alla kategorikoder"]}),(0,r.jsxs)("li",{className:"mb-1 text-lg text-gray-700",children:[(0,r.jsx)("a",{href:"https://g0v.se/api/latest_updated.json",target:"_blank",rel:"noreferrer",className:"underline text-black-700",children:"/api/latest_updated.json"})," h\xe4mtar nyckelinformation om datat"]})]}),(0,r.jsx)("p",{className:"m-5 text-xl text-gray-700 mt-0 font-light dark:text-gray-200",children:"F\xf6r varje kategori f\xe5r man en lista av alla sidor med f\xf6ljande metadata:"}),(0,r.jsxs)("ul",{className:"m-5 ml-10 list-disc list-inside",children:[(0,r.jsx)("li",{className:"mb-1 text-lg text-gray-700",children:"Rubrik"}),(0,r.jsx)("li",{className:"mb-1 text-lg text-gray-700",children:"Publicerings- och uppdateringsdatum"}),(0,r.jsx)("li",{className:"mb-1 text-lg text-gray-700",children:"Typ av inneh\xe5ll och kategorier enligt ovann\xe4mnda kategorikoder"}),(0,r.jsx)("li",{className:"mb-1 text-lg text-gray-700",children:"Avs\xe4ndare"}),(0,r.jsx)("li",{className:"mb-1 text-lg text-gray-700",children:"Beteckningsnummer"}),(0,r.jsx)("li",{className:"mb-1 text-lg text-gray-700",children:"Genv\xe4gar och bilagor"})]}),(0,r.jsxs)("p",{className:"m-5 text-xl text-gray-700 mt-0 font-light dark:text-gray-200",children:['Till slut \xe4r det ocks\xe5 m\xf6jligt att komma \xe5t m\xe5nga enskilda sidors text i Markdown-format genom att ers\xe4tta dom\xe4nnamnet med g0v.se och det slutliga "/" med ".md". ',(0,r.jsx)("a",{href:"#converter",className:"underline text-black-700",children:"F\xe4ltet"})," vid sidans topp kan hj\xe4lpa att utforma den nya adressen r\xe4tt."]}),(0,r.jsxs)("p",{className:"m-5 text-xl text-gray-700 mt-0 font-light dark:text-gray-200",children:["Allt som g\xe5r att h\xe4mta finns p\xe5 ",(0,r.jsx)("a",{href:"https://github.com/civictechsweden/g0vse/tree/data",target:"_blank",rel:"noreferrer",className:"underline text-black-700",children:"Github"}),"."]})]})]}),(0,r.jsxs)("section",{children:[(0,r.jsx)("h1",{className:"text-4xl font-bold text-center gradient-text text-gray-700 mx-10 mt-5 mb-0",children:"Varf\xf6r inte v\xe4nta f\xf6r Regeringskansliets officiella API?"}),(0,r.jsxs)("div",{className:"mx-auto my-5 max-w-5xl",children:[(0,r.jsx)("p",{className:"m-5 text-xl text-gray-700 mt-0 font-light dark:text-gray-200",children:"Tyv\xe4rr har m\xe5nga efterfr\xe5gat \xf6ppna data i m\xe5nga \xe5r, inklusive akt\xf6rer som Riksdagen. Men Regeringskansliet har hittills inte prioriterat det och det finns inga signaler f\xf6r officiella \xf6ppna data fr\xe5n dem under de kommande \xe5ren."}),(0,r.jsxs)("p",{className:"m-5 text-xl text-gray-700 mt-0 font-light dark:text-gray-200",children:[(0,r.jsx)("a",{href:"https://github.com/civictechsweden/g0vse",target:"_blank",rel:"noreferrer",className:"underline text-black-700",children:"Projektets k\xe4llkod"})," \xe4r helt \xf6ppen s\xe5 om de vill komma ig\xe5ng snabbt \xe4r de v\xe4lkomna att \xe5teranv\xe4nda den."]})]})]}),(0,r.jsxs)("section",{children:[(0,r.jsx)("h1",{className:"text-4xl font-bold text-center gradient-text text-gray-700 mx-10 mt-5 mb-0",children:"Varf\xf6r heter projektet g0vse?"}),(0,r.jsxs)("div",{className:"mx-auto my-5 max-w-5xl",children:[(0,r.jsxs)("p",{className:"m-5 text-xl text-gray-700 mt-0 font-light dark:text-gray-200",children:["Efter solrosrevolutionen i Taiwan skapade digitala aktivister ",(0,r.jsx)("a",{href:"https://www.taiwan-panorama.com/en/Articles/Details?Guid=736828dd-9df4-48fe-9383-71a5353cf4b7",target:"_blank",rel:"noreferrer",className:"underline text-black-700",children:"g0v"}),' (uttalas "gov-zero") och mottot ',(0,r.jsx)("a",{href:"https://www.wired.com/story/taiwan-sunflower-revolution-audrey-tang-g0v/",target:"_blank",rel:"noreferrer",className:"underline text-black-700",children:'"fork the government"'}),". F\xf6r att f\xf6rb\xe4ttra regeringens d\xe5ligt utformade digitala tj\xe4nster utvecklade de b\xe4ttre och mer transparenta alternativ och hostade dem p\xe5 g0v.tw-dom\xe4nen. F\xf6r att byta fr\xe5n de officiella webbplatserna (som slutar p\xe5 gov.tw) till gr\xe4srotsalternativen (som slutar p\xe5 g0v.tw) beh\xf6vde medborgarna bara \xe4ndra en bokstav i webbplatsens URL."]}),(0,r.jsx)("p",{className:"m-5 text-xl text-gray-700 mt-0 font-light dark:text-gray-200",children:"I Sverige \xe4r situationen liknande. Trots vissa insatser har offentlig sektor sv\xe5rt att g\xe5 fr\xe5n reaktiv transparens (analog offentlighetsprincip) till proaktiv transparens med \xf6ppna data. Regeringskansliet publicerar allt mer viktig information p\xe5 regeringen.se, men utan API:er. Detta tvingar civilsamh\xe4llet, journalister och myndigheter till manuellt arbete f\xf6r att komma \xe5t datan. Webbscrapers anv\xe4nds ibland som l\xf6sning, men de \xe4r ofta komplexa och op\xe5litliga."}),(0,r.jsx)("p",{className:"m-5 text-xl text-gray-700 mt-0 font-light dark:text-gray-200",children:"M\xe5let med g0vse \xe4r att bygga den b\xe4sta webscrapern och g\xf6ra data tillg\xe4nglig f\xf6r alla att \xe5teranv\xe4nda. F\xf6rhoppningsvis blir det \xe4nnu b\xe4ttre i framtiden tack vare kollaborativt arbete. Data h\xe4mtas idag p\xe5 ett respektfullt s\xe4tt utan att s\xe4tta press p\xe5 regeringens webbplats och b\xf6r s\xe5 sm\xe5ningom minska pressen p\xe5 den genom att ta bort behovet f\xf6r andras webscrapers."})]})]}),(0,r.jsx)("section",{children:(0,r.jsx)("div",{className:"mx-auto my-5 max-w-5xl text-center",children:(0,r.jsxs)("p",{className:"m-5 text-m text-gray-700 mt-0 font-light dark:text-gray-200 italic",children:["Denna webbsida togs fram av ",(0,r.jsx)("a",{className:"underline",href:"https://www.linkedin.com/in/pierremesure/",target:"_blank",rel:"noreferrer",children:"Pierre Mesure"})," och publiceras som ",(0,r.jsx)("a",{className:"underline",href:"https://github.com/civictechsweden/g0vse",target:"_blank",rel:"noreferrer",children:"\xf6ppen k\xe4llkod"})," ❤️ (AGPLv3)."]})})})]})}function g(){return(0,r.jsxs)("div",{className:"",children:[(0,r.jsxs)(n(),{children:[(0,r.jsx)("title",{children:"g0vse"}),(0,r.jsx)("meta",{name:"description",content:"\xd6ppna data fr\xe5n regeringen.se"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,r.jsx)("meta",{property:"og:title",content:"g0vse - \xd6ppna data fr\xe5n regeringen.se"}),(0,r.jsx)("meta",{property:"og:image",content:"https://raw.githubusercontent.com/civictechsweden/g0vse/refs/heads/master/g0vse.png"})]}),(0,r.jsx)("main",{className:"",children:(0,r.jsx)(o,{})})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[102,636,593,792],()=>t(7276)),_N_E=e.O()}]);