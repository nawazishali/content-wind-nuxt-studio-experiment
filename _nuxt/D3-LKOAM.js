import{d as m,an as f,x as d,G as c,c as I,e as x,aj as v,ao as S,k as _}from"./Ds4bxGj0.js";const y=m({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(u){f(e=>({"225c89d9":p.value}));const t=d(),s=u,l=c(()=>{var e,n;return(n=(e=t.nuxtIcon)==null?void 0:e.aliases)!=null&&n[s.name]?t.nuxtIcon.aliases[s.name]:s.name}),r=c(()=>S(l.value)),p=c(()=>{var o,a;const e=(a=(o=t.nuxtIcon)==null?void 0:o.iconifyApiOptions)==null?void 0:a.url;if(e)try{new URL(e)}catch{console.warn("Nuxt IconCSS: Invalid custom Iconify API URL");return}return`url('${e||"https://api.iconify.design"}/${r.value.prefix}/${r.value.name}.svg')`}),i=c(()=>{var n,o,a;if(!s.size&&typeof((n=t.nuxtIcon)==null?void 0:n.size)=="boolean"&&!((o=t.nuxtIcon)!=null&&o.size))return;const e=s.size||((a=t.nuxtIcon)==null?void 0:a.size)||"1em";return String(Number(e))===e?`${e}px`:e});return(e,n)=>(I(),x("span",{style:v({width:i.value,height:i.value})},null,4))}}),C=_(y,[["__scopeId","data-v-b1d80059"]]);export{C as default};
