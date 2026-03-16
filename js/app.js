/* Dance Cultures Competition Hub – app.js */
"use strict";
/* ---- DATA ---- */
const C={name:"May 2026 Dance Competition",status:"Active",runtime:"~8m 44s",perfs:[
{id:"eva-fashion",o:1,t:"Eva Solo – Fashion",d:"Eva",ty:"Solo",dur:"1:00",st:"Draft",song:"CORTIS – FaSHioN",
 refs:["https://youtube.com/watch?v=DvfXPcIqDxE"],secs:[{l:"Full",s:"1:00",e:"2:00",len:"60s",st:"Mapped"}],
 notes:["Duration: 1 minute","Focus on fashion-themed choreography","Review reference videos"],mix:"Yes",nr:"Yes",chk:"Done"},
{id:"eliza-maestro",o:2,t:"Eliza Solo – Maestro of My Heart",d:"Eliza",ty:"Solo",dur:"~1:20",st:"In Progress",
 song:"Kiss of Life – Maestro of My Heart",refs:["https://youtube.com/watch?v=q3zf0FwQOxg"],
 secs:[{l:"Section 1",s:"0:01",e:"0:27",len:"26s",st:"Mapped"},{l:"Section 2",s:"0:38",e:"0:45",len:"7s",st:"Mapped"},
  {l:"Section 3",s:"0:58",e:"1:16",len:"18s",st:"Review"},{l:"Section 4",s:"2:00",e:"2:21",len:"21s",st:"Pending Blend"},
  {l:"Section 5",s:"2:52",e:"3:00",len:"8s",st:"Pending Blend"}],
 notes:["Five distinct sections","Transitions to maintain flow","Beat and energy focus","Cleaner bridge into later sections"],mix:"WIP",nr:"Yes",chk:"Pending"},
{id:"albina-no-status",o:3,t:"Albina Solo – No Status",d:"Albina",ty:"Solo",dur:"~0:43",st:"In Progress",
 song:"No-status Status + FREEZE",refs:["https://youtube.com/watch?v=DkqDL4BGaIE","https://youtube.com/watch?v=EvrRSUP13ss"],
 secs:[{l:"No Status",s:"1:30",e:"2:00",len:"30s",st:"Mapped"},{l:"Freeze",s:"2:47",e:"3:10",len:"23s",st:"Mapped"}],
 notes:["Two-song blend","Smooth transition critical","Timing and flow between songs"],mix:"WIP",nr:"Yes",chk:"Pending"},
{id:"savanna-mwa",o:4,t:"Savanna Solo – MWA",d:"Savanna",ty:"Solo",dur:"~1:04",st:"Review",
 song:"MWA!",refs:["https://youtube.com/watch?v=XqVIZ4F8ZWs"],
 secs:[{l:"Section 1",s:"0:00",e:"0:35",len:"35s",st:"Mapped"},{l:"Section 2",s:"1:24",e:"1:38",len:"14s",st:"Mapped"},
  {l:"Section 3",s:"1:40",e:"1:55",len:"15s",st:"Mapped"}],
 notes:["Three distinct sections","Transitions to maintain flow","Review reference for style","Blend sections smoothly"],mix:"Review",nr:"Yes",chk:"Pending"},
{id:"jazz-heart-attack",o:5,t:"Jazz Group – Heart Attack",d:"Group",ty:"Group",dur:"~1:57",st:"Approved",
 song:"LOONA – Heart Attack",refs:["https://youtube.com/watch?v=Nh1HdqjE5kQ"],
 secs:[{l:"Section 1",s:"0:00",e:"1:33",len:"1m33s",st:"Mapped"},{l:"Section 2",s:"2:12",e:"2:33",len:"21s",st:"Mapped"},
  {l:"Section 3",s:"3:11",e:"3:14",len:"3s",st:"Mapped"}],
 notes:["Coordinate all dancers","Main section long – build energy","Precision in short sections","Synchronization critical"],mix:"Yes",nr:"Yes",chk:"Done"},
{id:"hiphop-kawasaki",o:6,t:"HipHop Group – Kawasaki",d:"Group",ty:"Group",dur:"~1:44",st:"In Progress",
 song:"Kawasaki / Power / Bet Your Life",refs:["https://youtube.com/watch?v=SP1Ds-p31ng","https://youtube.com/watch?v=aw45Q_mr0_M","https://youtube.com/watch?v=fDiN7usXAoQ"],
 secs:[{l:"Kawasaki",s:"—",e:"—",len:"—",st:"TBD"},{l:"Power §1",s:"1:13",e:"1:15",len:"2s",st:"Mapped"},
  {l:"Power §2",s:"1:30",e:"1:47",len:"17s",st:"Mapped"},{l:"BYL §1",s:"1:23",e:"1:32",len:"9s",st:"Mapped"},
  {l:"BYL §2",s:"1:42",e:"2:03",len:"21s",st:"Mapped"}],
 notes:["Three songs blended","Kawasaki opening – strong start","Power – energy shifts","Bet Your Life concludes","Group coordination critical"],mix:"Yes",nr:"Yes",chk:"Done"}
]};
/* ---- HELPERS ---- */
const H=(t,a={},...c)=>{const el=document.createElement(t);for(const[k,v]of Object.entries(a)){if(k==="className")el.className=v;else if(k.startsWith("on"))el.addEventListener(k.slice(2).toLowerCase(),v);else el.setAttribute(k,v)}c.flat().forEach(x=>{if(typeof x==="string")el.append(x);else if(x)el.append(x)});return el};
const SC=s=>({"Draft":"status-review","In Progress":"status-review","Review":"status-review","Approved":"status-ready",
 "Done":"status-ready","WIP":"status-review","Pending":"status-warning","Yes":"status-ready","Mapped":"status-ready",
 "Pending Blend":"status-review","TBD":"status-warning"}[s]||"badge");
const badge=(txt,cls)=>H("span",{className:`status ${cls||SC(txt)}`},txt);
const find=id=>C.perfs.find(p=>p.id===id);
const ytId=url=>{const m=url.match(/[?&]v=([^&]+)/)||url.match(/embed\/([^?&]+)/)||url.match(/youtu\.be\/([^?&]+)/);return m?m[1]:null};
/* ---- AUTH STATE ---- */
const DEV_USER={email:"dev@local.test",password:"DevPassword123!",fullName:"Developer"};
const authState={
 token:localStorage.getItem("authToken"),
 user:JSON.parse(localStorage.getItem("authUser")||"null"),
 get isAuthenticated(){return Boolean(this.token);}
};
function authLogin(token,user){
 authState.token=token;authState.user=user;
 localStorage.setItem("authToken",token);localStorage.setItem("authUser",JSON.stringify(user));
}
function authLogout(){
 authState.token=null;authState.user=null;
 localStorage.removeItem("authToken");localStorage.removeItem("authUser");
 location.hash="#login";
}

/* ---- ROUTER ---- */
const PUBLIC_ROUTES=new Set(["login","register","forgot-password","check-email","reset-password","password-updated","verify-email"]);
const PROTECTED_ROUTES=new Set(["dashboard","performances","performance","mix-builder","competition-day","assets","settings"]);

function nav(){
 const raw=location.hash.replace("#","")||"";
 const[s,...r]=raw.split("/");const p=r.join("/");
 const screen=s||"";

 /* Auth gate: resolve route based on auth state */
 if(!authState.isAuthenticated && !PUBLIC_ROUTES.has(screen)){
  location.hash="#login";return;
 }
 if(authState.isAuthenticated && PUBLIC_ROUTES.has(screen)){
  location.hash="#dashboard";return;
 }

 const authRoot=document.getElementById("auth-root");
 const appShell=document.querySelector(".app-shell");

 if(PUBLIC_ROUTES.has(screen)){
  appShell.style.display="none";authRoot.style.display="";authRoot.innerHTML="";
  const authFn={login:renderLogin,register:renderRegister,"forgot-password":renderForgotPassword,
   "check-email":renderCheckEmail,"reset-password":renderResetPassword,
   "password-updated":renderPasswordUpdated,"verify-email":renderVerifyEmail}[screen]||renderLogin;
  authRoot.append(authFn());return;
 }

 authRoot.style.display="none";appShell.style.display="";
 const root=document.getElementById("page-content");root.innerHTML="";
 const fn={dashboard:renderDash,performances:renderPerfs,performance:()=>renderDetail(p),"mix-builder":()=>renderMix(p),
  "competition-day":renderDay,assets:renderAssets,settings:renderSettings}[screen]||renderDash;
 root.append(fn());
 document.querySelectorAll(".main-nav a").forEach(a=>a.classList.toggle("active",a.dataset.screen===screen));
}
window.addEventListener("hashchange",nav);
window.addEventListener("DOMContentLoaded",nav);

/* ---- DASHBOARD ---- */
function renderDash(){
 const pg=H("div",{className:"page dashboard-page"});
 // header
 const hdr=H("header",{className:"page-header"},
  H("div",{},H("p",{className:"eyebrow"},"Competition"),H("h2",{},C.name),H("p",{},"Status: "+C.status)),
  H("div",{className:"page-actions"},H("button",{type:"button"},"Add Performance"),H("button",{type:"button",className:"secondary"},"Export Summary")));
 pg.append(hdr);
 // summary cards
 const ready=C.perfs.filter(p=>p.st==="Approved"||p.st==="Final").length;
 const review=C.perfs.filter(p=>p.st==="Review"||p.st==="In Progress").length;
 const cards=H("section",{className:"summary-cards","aria-label":"Summary"},
  H("article",{className:"summary-card"},H("h3",{},"Performances"),H("p",{},""+C.perfs.length)),
  H("article",{className:"summary-card"},H("h3",{},"Total Runtime"),H("p",{},C.runtime)),
  H("article",{className:"summary-card"},H("h3",{},"Ready Mixes"),H("p",{},ready+"/"+C.perfs.length)),
  H("article",{className:"summary-card"},H("h3",{},"Needs Review"),H("p",{},""+review)));
 pg.append(cards);
 // grid: status list + priorities + quick actions
 const grid=H("section",{className:"dashboard-grid"});
 // perf status
 const statusPanel=H("section",{className:"panel"});
 statusPanel.append(H("header",{},H("h3",{},"Performance Status")));
 const ul=H("ul",{className:"performance-status-list"});
 C.perfs.forEach(p=>{
  const li=H("li",{},H("a",{href:"#performance/"+p.id},badge(p.st),H("span",{},p.t)));
  ul.append(li);});
 statusPanel.append(ul);grid.append(statusPanel);
 // priorities
 const pri=H("section",{className:"panel"},H("header",{},H("h3",{},"Upcoming Priorities")),
  H("ol",{},H("li",{},"Finish Albina song blend"),H("li",{},"Confirm Savanna transitions"),
   H("li",{},"Export HipHop final mix"),H("li",{},"Send preview links to owner")));
 grid.append(pri);
 // quick actions
 const qa=H("section",{className:"panel"},H("header",{},H("h3",{},"Quick Actions")),
  H("div",{className:"action-list"},H("button",{type:"button"},"New Routine"),H("button",{type:"button",className:"secondary"},"Add Song Cut"),
   H("button",{type:"button",className:"secondary"},"Attach Reference Video"),H("button",{type:"button",className:"secondary"},"Generate Checklist")));
 grid.append(qa);pg.append(grid);
 // recent activity
 const act=H("section",{className:"panel"},H("header",{},H("h3",{},"Recent Activity")),
  H("ul",{className:"activity-feed"},
   H("li",{},H("time",{datetime:"2026-03-12"},"03/12"),H("span",{},"Updated cut points for Maestro of My Heart")),
   H("li",{},H("time",{datetime:"2026-03-12"},"03/12"),H("span",{},"Added reference link for MWA")),
   H("li",{},H("time",{datetime:"2026-03-13"},"03/13"),H("span",{},"Exported Jazz Group preview v2")),
   H("li",{},H("time",{datetime:"2026-03-14"},"03/14"),H("span",{},"Marked HipHop transitions as approved"))));
 pg.append(act);
 return pg;
}

/* ---- PERFORMANCES LIST ---- */
function buildVideoCarousel(p){
 const ids=p.refs.map(ytId).filter(Boolean);
 if(!ids.length) return null;
 const carousel=H("section",{className:"routine-video-carousel","aria-label":"Routine reference videos"});
 const frame=H("div",{className:"carousel-frame"});
 const prevBtn=H("button",{className:"carousel-btn prev",type:"button","aria-label":"Previous video"},"\u2039");
 const nextBtn=H("button",{className:"carousel-btn next",type:"button","aria-label":"Next video"},"\u203A");
 const track=H("div",{className:"carousel-track"});
 ids.forEach((vid,i)=>{
  const slide=H("div",{className:"carousel-slide"+(i===0?" is-active":""),"data-index":""+i},
   H("div",{className:"video-embed"},H("iframe",{src:"https://www.youtube.com/embed/"+vid,
    title:p.t+" reference video "+(i+1),loading:"lazy",
    allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
    allowfullscreen:""})));
  track.append(slide);
 });
 frame.append(prevBtn,track,nextBtn);carousel.append(frame);
 const countSpan=H("span",{className:"carousel-count"},"1 / "+ids.length);
 const dotsWrap=H("div",{className:"carousel-dots",role:"tablist","aria-label":"Select routine video"});
 ids.forEach((_,i)=>{dotsWrap.append(H("button",{className:"carousel-dot"+(i===0?" is-active":""),type:"button","aria-label":"Go to video "+(i+1)}));});
 carousel.append(H("div",{className:"carousel-meta"},
  H("p",{className:"carousel-caption"},"Reference Video ",countSpan),dotsWrap));
 return carousel;
}
function initCarousels(root){
 root.querySelectorAll(".routine-video-carousel").forEach(carousel=>{
  const slides=Array.from(carousel.querySelectorAll(".carousel-slide"));
  const dots=Array.from(carousel.querySelectorAll(".carousel-dot"));
  const prevBtn=carousel.querySelector(".carousel-btn.prev");
  const nextBtn=carousel.querySelector(".carousel-btn.next");
  const count=carousel.querySelector(".carousel-count");
  const dotsWrap=carousel.querySelector(".carousel-dots");
  let cur=0;
  function go(i){slides.forEach((s,j)=>s.classList.toggle("is-active",j===i));
   dots.forEach((d,j)=>d.classList.toggle("is-active",j===i));
   if(count)count.textContent=(i+1)+" / "+slides.length;cur=i;}
  if(slides.length<=1){if(prevBtn)prevBtn.hidden=true;if(nextBtn)nextBtn.hidden=true;
   if(dotsWrap)dotsWrap.hidden=true;if(count)count.textContent="1 / 1";return;}
  prevBtn?.addEventListener("click",()=>go((cur-1+slides.length)%slides.length));
  nextBtn?.addEventListener("click",()=>go((cur+1)%slides.length));
  dots.forEach((d,i)=>d.addEventListener("click",()=>go(i)));
  go(0);
 });
}
function renderPerfs(){
 const pg=H("div",{className:"page performances-page"});
 pg.append(H("header",{className:"page-header"},
  H("div",{},H("p",{className:"eyebrow"},"Performances"),H("h2",{},"All Routines"),
   H("p",{},"Manage solos, group numbers, timings, references, and mix status.")),
  H("div",{className:"page-actions"},H("button",{type:"button",className:"secondary"},"Filter"),
   H("button",{type:"button",className:"secondary"},"Sort"),H("button",{type:"button"},"Add Performance"))));
 const grid=H("section",{className:"performance-card-grid"});
 C.perfs.forEach(p=>{
  const card=H("article",{className:"performance-card"},
   H("header",{},H("h3",{},H("a",{href:"#performance/"+p.id},p.t)),H("span",{className:"badge"},p.ty)));
  const vc=buildVideoCarousel(p);if(vc)card.append(vc);
  card.append(H("p",{},"Duration: "+p.dur),H("p",{},"Status: "+p.st),
   H("footer",{},H("a",{href:"#performance/"+p.id,className:"button secondary"},"Open"),
    H("a",{href:"#mix-builder/"+p.id,className:"button secondary"},"Mix Builder")));
  grid.append(card);
 });
 pg.append(grid);
 requestAnimationFrame(()=>initCarousels(pg));
 return pg;
}

/* ---- PERFORMANCE DETAIL ---- */
function renderDetail(id){
 const p=find(id);if(!p) return H("div",{className:"page"},H("h2",{},"Performance not found"));
 const pg=H("div",{className:"page performance-detail-page"});
 // breadcrumb + header
 pg.append(H("header",{className:"page-header"},
  H("div",{},H("nav",{"aria-label":"Breadcrumb"},H("ol",{className:"breadcrumb"},
   H("li",{},H("a",{href:"#dashboard"},"Dashboard")),H("li",{},H("a",{href:"#performances"},"Performances")),
   H("li",{"aria-current":"page"},p.t))),
  H("h2",{},p.t),H("p",{},p.ty+" performance – "+p.secs.length+" timing section"+(p.secs.length>1?"s":""))),
  H("div",{className:"page-actions"},H("a",{href:"#mix-builder/"+p.id,className:"button"},"Mix Builder"),
   H("button",{type:"button",className:"secondary"},"Export"))));
 const grid=H("section",{className:"detail-grid"});
 // info panel
 const dl=H("dl",{},H("dt",{},"Type"),H("dd",{},p.ty),H("dt",{},"Dancer"),H("dd",{},p.d),
  H("dt",{},"Song"),H("dd",{},p.song),H("dt",{},"Duration"),H("dd",{},p.dur),H("dt",{},"Status"),H("dd",{},p.st));
 grid.append(H("article",{className:"panel"},H("header",{},H("h3",{},"Performance Info")),dl));
 // sections table
 const tbl=H("table",{},H("caption",{},"Selected timing sections"),
  H("thead",{},H("tr",{},H("th",{scope:"col"},"Section"),H("th",{scope:"col"},"Start"),
   H("th",{scope:"col"},"End"),H("th",{scope:"col"},"Length"),H("th",{scope:"col"},"Status"))));
 const tb=H("tbody",{});
 p.secs.forEach(s=>{tb.append(H("tr",{},H("th",{scope:"row"},s.l),H("td",{},s.s),H("td",{},s.e),H("td",{},s.len),H("td",{},badge(s.st))));});
 tbl.append(tb);grid.append(H("article",{className:"panel"},H("header",{},H("h3",{},"Mix Structure")),tbl));
 // references
 const refUl=H("ul",{});p.refs.forEach(r=>{refUl.append(H("li",{},H("a",{href:r,target:"_blank",rel:"noopener noreferrer"},r)));});
 grid.append(H("article",{className:"panel"},H("header",{},H("h3",{},"References")),refUl));
 // notes
 const nUl=H("ul",{});p.notes.forEach(n=>{nUl.append(H("li",{},n));});
 grid.append(H("article",{className:"panel"},H("header",{},H("h3",{},"Notes")),nUl));
 // deliverables
 grid.append(H("article",{className:"panel"},H("header",{},H("h3",{},"Deliverables")),
  H("ul",{className:"deliverables-list"},
   H("li",{},H("span",{},"Preview Mix v1"),H("button",{type:"button",className:"secondary"},"Download")),
   H("li",{},H("span",{},"Final Mix"),H("button",{type:"button",className:"secondary"},"Generate")),
   H("li",{},H("span",{},"Coach Notes PDF"),H("button",{type:"button",className:"secondary"},"Create")))));
 pg.append(grid);return pg;
}

/* ---- MIX BUILDER ---- */
function renderMix(id){
 const p=find(id||"savanna-mwa");if(!p) return H("div",{className:"page"},H("h2",{},"Not found"));
 const pg=H("div",{className:"page mix-builder-page"});
 pg.append(H("header",{className:"page-header"},
  H("div",{},H("p",{className:"eyebrow"},"Mix Builder"),H("h2",{},p.t),
   H("p",{},"Build transitions and assemble the final performance cut.")),
  H("div",{className:"page-actions"},H("button",{type:"button",className:"secondary"},"Preview"),
   H("button",{type:"button",className:"secondary"},"Save Version"),H("button",{type:"button"},"Export MP3"))));
 const lay=H("section",{className:"mix-builder-layout"});
 // timeline
 const tl=H("article",{className:"panel"},H("header",{},H("h3",{},"Timeline")));
 const tracks=H("ol",{className:"timeline"});
 p.secs.forEach(s=>{tracks.append(H("li",{},H("time",{},s.s+" – "+s.e),H("span",{},s.l+" ("+s.len+")")));});
 tl.append(tracks);lay.append(tl);
 // source tracks
 const src=H("article",{className:"panel"},H("header",{},H("h3",{},"Source Tracks")));
 const srcUl=H("ul",{});
 srcUl.append(H("li",{},H("h4",{},"Track: "+p.song)));
 p.secs.forEach(s=>{srcUl.append(H("li",{},s.l+": "+s.s+" – "+s.e));});
 src.append(srcUl);lay.append(src);
 pg.append(lay);
 // output
 pg.append(H("section",{className:"panel"},H("header",{},H("h3",{},"Output")),
  H("dl",{},H("dt",{},"Total Time"),H("dd",{},p.dur),H("dt",{},"Current Version"),H("dd",{},"v1")),
  H("div",{className:"output-actions"},H("button",{type:"button",className:"secondary"},"Preview Mix"),H("button",{type:"button"},"Export MP3"))));
 return pg;
}

/* ---- COMPETITION DAY ---- */
function renderDay(){
 const pg=H("div",{className:"page competition-day-page"});
 pg.append(H("header",{className:"page-header"},
  H("div",{},H("p",{className:"eyebrow"},"Competition Day"),H("h2",{},"May 2026 Event Board"),
   H("p",{},"Track readiness, check-ins, and performance order.")),
  H("div",{className:"page-actions"},H("button",{type:"button",className:"secondary"},"Print Board"),H("button",{type:"button"},"Export Checklist"))));
 // run order table
 const tbl=H("table",{},H("caption",{},"Competition performance lineup"),
  H("thead",{},H("tr",{},H("th",{scope:"col"},"#"),H("th",{scope:"col"},"Performance"),H("th",{scope:"col"},"Type"),
   H("th",{scope:"col"},"Length"),H("th",{scope:"col"},"Mix Ready"),H("th",{scope:"col"},"Notes Ready"),H("th",{scope:"col"},"Check-In"))));
 const tb=H("tbody",{});
 C.perfs.forEach(p=>{tb.append(H("tr",{},H("td",{},""+p.o),H("td",{},H("a",{href:"#performance/"+p.id},p.t)),
  H("td",{},p.ty),H("td",{},p.dur),H("td",{},badge(p.mix)),H("td",{},badge(p.nr)),H("td",{},badge(p.chk))));});
 tbl.append(tb);
 pg.append(H("section",{className:"panel"},H("header",{},H("h3",{},"Run Order")),tbl));
 // bottom grid
 const bg=H("section",{className:"competition-day-bottom-grid"});
 bg.append(H("article",{className:"panel"},H("header",{},H("h3",{},"Totals")),H("p",{},"Total Show Time: "+C.runtime)));
 bg.append(H("article",{className:"panel"},H("header",{},H("h3",{},"Alerts")),
  H("ul",{},H("li",{},"Eliza mix still needs final blend"),H("li",{},"Albina transition needs approval"))));
 bg.append(H("article",{className:"panel"},H("header",{},H("h3",{},"Emergency Access")),
  H("ul",{},H("li",{},H("button",{type:"button",className:"secondary"},"Open Backup Mix Folder")),
   H("li",{},H("button",{type:"button",className:"secondary"},"Download All MP3s")),
   H("li",{},H("button",{type:"button",className:"secondary"},"Show Contact Sheet")))));
 pg.append(bg);return pg;
}

/* ---- ASSETS ---- */
function renderAssets(){
 const pg=H("div",{className:"page assets-page"});
 pg.append(H("header",{className:"page-header"},
  H("div",{},H("p",{className:"eyebrow"},"Assets & References"),H("h2",{},"Media Library"),
   H("p",{},"Store videos, music files, exports, and backup assets.")),
  H("div",{className:"page-actions"},H("button",{type:"button",className:"secondary"},"Upload File"),H("button",{type:"button"},"Create Folder"))));
 const lay=H("section",{className:"assets-layout"});
 // folders
 const folders=H("aside",{className:"panel"});
 folders.append(H("h3",{},"Folders"));
 const fUl=H("ul",{className:"folder-panel"});
 C.perfs.forEach(p=>{fUl.append(H("li",{},H("a",{href:"#performance/"+p.id},p.t)));});
 folders.append(fUl);lay.append(folders);
 // file table placeholder
 const files=H("section",{className:"panel"});
 files.append(H("header",{},H("h3",{},"Selected Folder Contents")));
 const tbl=H("table",{},H("thead",{},H("tr",{},H("th",{scope:"col"},"File Name"),H("th",{scope:"col"},"Type"),
  H("th",{scope:"col"},"Version"),H("th",{scope:"col"},"Updated"),H("th",{scope:"col"},"Action"))));
 const tb=H("tbody",{});
 [["maestro-preview-v1.mp3","Audio","v1","2026-03-12"],["reference-video-link","Reference","—","2026-03-12"],
  ["coach-notes.pdf","Document","v2","2026-03-14"]].forEach(([n,t,v,d])=>{
  tb.append(H("tr",{},H("td",{},n),H("td",{},t),H("td",{},v),H("td",{},d),H("td",{},H("button",{type:"button",className:"secondary"},"Open"))));
 });
 tbl.append(tb);files.append(tbl);lay.append(files);
 pg.append(lay);return pg;
}

/* ---- SETTINGS ---- */
function renderSettings(){
 const pg=H("div",{className:"page settings-page"});
 pg.append(H("header",{className:"page-header"},H("div",{},H("p",{className:"eyebrow"},"Settings"),H("h2",{},"App Settings"))));
 pg.append(H("section",{className:"panel"},H("header",{},H("h3",{},"Team Branding")),
  H("p",{},"Configure studio name, colors, and logo.")));
 pg.append(H("section",{className:"panel"},H("header",{},H("h3",{},"Status Labels")),
  H("p",{},"Customize the status labels and colors used across the app.")));
 pg.append(H("section",{className:"panel"},H("header",{},H("h3",{},"Export Defaults")),
  H("p",{},"Set default audio format, naming conventions, and output folder.")));
 return pg;
}

/* ===========================================================
   AUTH SCREENS
   =========================================================== */

/* Shared brand-panel builder for Login & Register (split-screen) */
function authBrandPanel(eyebrow,headline,desc){
 return H("section",{className:"auth-brand-panel","aria-label":"Brand introduction"},
  H("div",{className:"auth-brand-content"},
   H("a",{href:"#dashboard",className:"auth-logo"},"Dance Cultures Hub"),
   H("p",{className:"auth-eyebrow"},eyebrow),
   H("h1",{},headline),
   H("p",{className:"auth-description"},desc),
   H("ul",{className:"auth-feature-list"},
    H("li",{},"Routine management"),
    H("li",{},"Reference video tracking"),
    H("li",{},"Mix builder workflow"),
    H("li",{},"Competition day prep"))));
}

/* Shared auth card header */
function authCardHeader(eyebrow,title,desc){
 return H("header",{className:"auth-card-header"},
  H("p",{className:"auth-eyebrow"},eyebrow),H("h2",{},title),H("p",{},desc));
}

/* ---- 1) LOGIN ---- */
function renderLogin(){
 const main=H("main",{className:"auth-page login-page"});
 const shell=H("div",{className:"auth-shell"});
 shell.append(authBrandPanel("Competition Content Management",
  "Create mixes. Track routines. Stay competition-ready.",
  "Manage music cuts, reference videos, routine notes, and competition-day readiness in one place."));
 const card=H("div",{className:"auth-card"});
 card.append(authCardHeader("Welcome Back","Log in to your account",
  "Access routines, mixes, assets, and competition planning tools."));
 const form=H("form",{className:"auth-form"});
 form.append(
  H("div",{className:"form-group"},H("label",{for:"login-email"},"Email Address"),
   H("input",{id:"login-email",name:"email",type:"email",autocomplete:"email",placeholder:"name@example.com",required:""})),
  H("div",{className:"form-group"},H("label",{for:"login-password"},"Password"),
   H("input",{id:"login-password",name:"password",type:"password",autocomplete:"current-password",placeholder:"Enter your password",required:""})),
  H("div",{className:"auth-row"},
   H("label",{className:"checkbox-field",for:"remember-me"},
    H("input",{id:"remember-me",name:"remember_me",type:"checkbox"}),H("span",{},"Remember me")),
   H("a",{href:"#forgot-password",className:"auth-link"},"Forgot password?")),
  H("div",{className:"form-actions"},H("button",{type:"submit"},"Log In")));
 form.addEventListener("submit",e=>{e.preventDefault();
  const em=form.querySelector("#login-email").value.trim();
  const pw=form.querySelector("#login-password").value;
  if(em===DEV_USER.email&&pw===DEV_USER.password){
   authLogin("dev-token-"+Date.now(),{email:DEV_USER.email,fullName:DEV_USER.fullName});
   location.hash="#dashboard";
  }else{
   let err=form.querySelector(".auth-error");
   if(!err){err=H("p",{className:"auth-error"});form.prepend(err);}
   err.textContent="Invalid email or password. Use dev@local.test / DevPassword123!";
  }
 });
 card.append(form);
 card.append(H("div",{className:"auth-divider","aria-hidden":"true"},H("span",{},"Or continue with")));
 card.append(H("div",{className:"social-auth"},H("button",{type:"button"},"Continue with Google")));
 card.append(H("footer",{className:"auth-card-footer"},
  H("p",{},"Don\u2019t have an account? ",H("a",{href:"#register",className:"auth-link"},"Sign up"))));
 shell.append(H("section",{className:"auth-form-panel","aria-label":"Login form area"},card));
 main.append(shell);return main;
}

/* ---- 2) REGISTER ---- */
function renderRegister(){
 const main=H("main",{className:"auth-page register-page"});
 const shell=H("div",{className:"auth-shell"});
 shell.append(authBrandPanel("Set Up Your Workspace",
  "Build your competition workflow from day one.",
  "Create an account to organize routines, track edits, store references, and prepare for performance day."));
 const card=H("div",{className:"auth-card"});
 card.append(authCardHeader("Create Account","Start your workspace",
  "Set up your account for routine management and music production planning."));
 const form=H("form",{className:"auth-form"});
 form.append(
  H("div",{className:"form-group"},H("label",{for:"register-name"},"Full Name"),
   H("input",{id:"register-name",name:"full_name",type:"text",autocomplete:"name",placeholder:"Your full name",required:""})),
  H("div",{className:"form-group"},H("label",{for:"register-email"},"Email Address"),
   H("input",{id:"register-email",name:"email",type:"email",autocomplete:"email",placeholder:"name@example.com",required:""})),
  H("div",{className:"form-group"},H("label",{for:"register-password"},"Password"),
   H("input",{id:"register-password",name:"password",type:"password",autocomplete:"new-password",placeholder:"Create a password",required:""})),
  H("div",{className:"form-group"},H("label",{for:"register-confirm-password"},"Confirm Password"),
   H("input",{id:"register-confirm-password",name:"confirm_password",type:"password",autocomplete:"new-password",placeholder:"Confirm your password",required:""})),
  H("label",{className:"checkbox-field",for:"accept-terms"},
   H("input",{id:"accept-terms",name:"accept_terms",type:"checkbox",required:""}),
   H("span",{},"I agree to the Terms and Privacy Policy")),
  H("div",{className:"form-actions"},H("button",{type:"submit"},"Create Account")));
 form.addEventListener("submit",e=>{e.preventDefault();location.hash="#verify-email";});
 card.append(form);
 card.append(H("footer",{className:"auth-card-footer"},
  H("p",{},"Already have an account? ",H("a",{href:"#login",className:"auth-link"},"Log in"))));
 shell.append(H("section",{className:"auth-form-panel","aria-label":"Registration form area"},card));
 main.append(shell);return main;
}

/* ---- 3) FORGOT PASSWORD ---- */
function renderForgotPassword(){
 const main=H("main",{className:"auth-page forgot-password-page"});
 const shell=H("div",{className:"auth-shell auth-shell-centered"});
 const card=H("div",{className:"auth-card"});
 card.append(authCardHeader("Forgot Password","Reset your password",
  "Enter your email address and we\u2019ll send you a password reset link."));
 const form=H("form",{className:"auth-form"});
 form.append(
  H("div",{className:"form-group"},H("label",{for:"forgot-email"},"Email Address"),
   H("input",{id:"forgot-email",name:"email",type:"email",autocomplete:"email",placeholder:"name@example.com",required:""})),
  H("div",{className:"form-actions"},H("button",{type:"submit"},"Send Reset Link")));
 form.addEventListener("submit",e=>{e.preventDefault();location.hash="#check-email";});
 card.append(form);
 card.append(H("footer",{className:"auth-card-footer"},
  H("p",{},H("a",{href:"#login",className:"auth-link"},"Back to Log In"))));
 shell.append(H("section",{className:"auth-form-panel","aria-label":"Forgot password form area"},card));
 main.append(shell);return main;
}

/* ---- 4) CHECK EMAIL ---- */
function renderCheckEmail(){
 const main=H("main",{className:"auth-page check-email-page"});
 const shell=H("div",{className:"auth-shell auth-shell-centered"});
 const card=H("div",{className:"auth-card auth-card-message"});
 card.append(H("header",{className:"auth-card-header"},
  H("p",{className:"auth-eyebrow"},"Check Your Email"),
  H("h2",{},"Password reset link sent"),
  H("p",{},"We sent a password reset link to ",H("strong",{},"user@email.com"),
   ". Open the link in your inbox to continue.")));
 card.append(H("div",{className:"message-actions"},
  H("button",{type:"button"},"Resend Email"),
  H("a",{href:"#login",className:"auth-link-button"},"Back to Log In")));
 shell.append(H("section",{className:"auth-form-panel","aria-label":"Check email message"},card));
 main.append(shell);return main;
}

/* ---- 5) RESET PASSWORD ---- */
function renderResetPassword(){
 const main=H("main",{className:"auth-page reset-password-page"});
 const shell=H("div",{className:"auth-shell auth-shell-centered"});
 const card=H("div",{className:"auth-card"});
 card.append(authCardHeader("Reset Password","Create a new password",
  "Choose a strong password for your account."));
 const form=H("form",{className:"auth-form"});
 form.append(
  H("div",{className:"form-group"},H("label",{for:"new-password"},"New Password"),
   H("input",{id:"new-password",name:"new_password",type:"password",autocomplete:"new-password",placeholder:"Enter new password",required:""})),
  H("div",{className:"form-group"},H("label",{for:"confirm-new-password"},"Confirm New Password"),
   H("input",{id:"confirm-new-password",name:"confirm_new_password",type:"password",autocomplete:"new-password",placeholder:"Confirm new password",required:""})),
  H("section",{className:"password-rules","aria-label":"Password requirements"},
   H("h3",{},"Password requirements"),
   H("ul",{},H("li",{},"At least 8 characters"),H("li",{},"At least 1 number"),H("li",{},"At least 1 special character"))),
  H("div",{className:"form-actions"},H("button",{type:"submit"},"Update Password")));
 form.addEventListener("submit",e=>{e.preventDefault();location.hash="#password-updated";});
 card.append(form);
 shell.append(H("section",{className:"auth-form-panel","aria-label":"Reset password form area"},card));
 main.append(shell);return main;
}

/* ---- 6) PASSWORD UPDATED ---- */
function renderPasswordUpdated(){
 const main=H("main",{className:"auth-page password-updated-page"});
 const shell=H("div",{className:"auth-shell auth-shell-centered"});
 const card=H("div",{className:"auth-card auth-card-message"});
 card.append(H("header",{className:"auth-card-header"},
  H("p",{className:"auth-eyebrow"},"Success"),
  H("h2",{},"Password updated"),
  H("p",{},"Your password has been updated successfully. You can now log in to your account.")));
 card.append(H("div",{className:"message-actions"},
  H("a",{href:"#login",className:"auth-link-button"},"Go to Log In")));
 shell.append(H("section",{className:"auth-form-panel","aria-label":"Password update confirmation"},card));
 main.append(shell);return main;
}

/* ---- 7) VERIFY EMAIL ---- */
function renderVerifyEmail(){
 const main=H("main",{className:"auth-page verify-email-page"});
 const shell=H("div",{className:"auth-shell auth-shell-centered"});
 const card=H("div",{className:"auth-card auth-card-message"});
 card.append(H("header",{className:"auth-card-header"},
  H("p",{className:"auth-eyebrow"},"Verify Your Email"),
  H("h2",{},"Account created"),
  H("p",{},"Your account has been created. We sent a verification email to ",
   H("strong",{},"user@email.com"),"."),
  H("p",{},"Please verify your email before accessing the full dashboard.")));
 card.append(H("div",{className:"message-actions"},
  H("button",{type:"button"},"Resend Email"),
  H("a",{href:"#login",className:"auth-link-button"},"Go to Log In")));
 shell.append(H("section",{className:"auth-form-panel","aria-label":"Verify email message"},card));
 main.append(shell);return main;
}