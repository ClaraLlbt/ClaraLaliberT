import{_ as g,H as y,F as V,N as w,r as m,o as x,c as T,a as r,b as u,w as p,v as _,d as E,e as F}from"./index.266e8635.js";const c={_origin:"https://api.emailjs.com"},L=(t,e="https://api.emailjs.com")=>{c._userID=t,c._origin=e},h=(t,e,n)=>{if(!t)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class v{constructor(e){this.status=e.status,this.text=e.responseText}}const b=(t,e,n={})=>new Promise((i,o)=>{const a=new XMLHttpRequest;a.addEventListener("load",({target:s})=>{const l=new v(s);l.status===200||l.text==="OK"?i(l):o(l)}),a.addEventListener("error",({target:s})=>{o(new v(s))}),a.open("POST",c._origin+t,!0),Object.keys(n).forEach(s=>{a.setRequestHeader(s,n[s])}),a.send(e)}),C=(t,e,n,i)=>{const o=i||c._userID;h(o,t,e);const a={lib_version:"3.2.0",user_id:o,service_id:t,template_id:e,template_params:n};return b("/api/v1.0/email/send",JSON.stringify(a),{"Content-type":"application/json"})},S=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},q=(t,e,n,i)=>{const o=i||c._userID,a=S(n);h(o,t,e);const s=new FormData(a);return s.append("lib_version","3.2.0"),s.append("service_id",t),s.append("template_id",e),s.append("user_id",o),b("/api/v1.0/email/send-form",s)},D={init:L,send:C,sendForm:q};const B={name:"contact",components:{HdrBanner:y,FooterVue:V,NavbarVue:w},data(){return{email:"",message:""}},mounted(){this.slideTxt()},methods:{slideTxt(){const t=document.querySelector(".span-1"),e=document.querySelector(".span-2"),n=document.querySelector(".btn-dl-cv");t.classList.add("active"),e.classList.add("active2"),n.classList.add("active3")},sendEmail(){const t=document.querySelector("#sendBtn"),e=document.getElementById("form").addEventListener("submit",function(n){n.preventDefault(),t.innerText="En cours...";const i="service_696tmpa",o="template_bhiwqld",a="OkYb3_3x2XbgyN8aT";D.sendForm(i,o,e,a,{email:this.email,message:this.message}).then(s=>{alert(s),t.innerText="Email Envoy\xE9",window.location.reload()},s=>{t.innerText="Une erreur est survenue"})})}}},H={id:"contact",class:"contact"},N={class:"row contact-form"},I=F('<div class="col-12 col-md-6 span-txt"><h2>Contactez-moi !</h2><span class="span-1">Vous souhaitez discuter de mes motivations ? Je vous invite \xE0 me contacter. Vous pouvez t\xE9l\xE9charger mon cv ou utiliser le formulaire.</span><div class="col-12 btn-dl-cv"><a href="/ClaraLaliberT/lib/web/CV_HAULTCOEUR_CLARA.pdf" download=""><button type="button" class="btn btn-light"><i class="bi bi-file-pdf"></i> T\xE9l\xE9charger mon CV</button></a></div><span class="span-2">A Bient\xF4t !</span></div>',1),j={class:"col-12 col-md-6 form"},O={action:""},M=r("h3",null,"Formulaire de contact",-1),R=r("label",{for:"reply_to",class:"form-label"},"Email:",-1),U=r("label",{for:"message",class:"form-label"},"Votre message:",-1),k={class:"button"};function z(t,e,n,i,o,a){const s=m("NavbarVue"),l=m("HdrBanner"),f=m("FooterVue");return x(),T(E,null,[r("div",H,[u(s),u(l),r("div",N,[I,r("div",j,[r("form",O,[M,r("div",null,[R,p(r("input",{"onUpdate:modelValue":e[0]||(e[0]=d=>o.email=d),type:"email",class:"form-control",id:"reply_to",name:"reply_to",placeholder:"Laissez moi votre Email","aria-describedby":"emailHelp"},null,512),[[_,o.email]])]),r("div",null,[U,p(r("textarea",{"onUpdate:modelValue":e[1]||(e[1]=d=>o.message=d),class:"form-control",id:"message",name:"message",rows:"3",placeholder:"Je serais ravie de prendre contact avec vous..."},null,512),[[_,o.message]])]),r("div",k,[r("button",{id:"sendBtn",onClick:e[2]||(e[2]=d=>a.sendEmail()),type:"submit",value:"Send Email",class:"btn btn-light"},"Envoyer")])])])])]),u(f)],64)}const J=g(B,[["render",z]]);export{J as default};
