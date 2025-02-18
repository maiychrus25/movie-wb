import{c as i,j as e,d as T,I as $,C as k,r as D,e as I,u as v,L as R,B as A,f as C,R as V,h as d}from"./index-DvJrJ-MJ.js";import{u as E}from"./useFetchDataDetail-20MXsPQq.js";const b=({tvInfo:s={}})=>e.jsxs("div",{className:"ml-14",children:[e.jsx("h2",{className:"mb-4 text-center text-[1.4vw] font-bold",children:"Information"}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h3",{className:"mb-1 text-left text-[1.2vw] font-bold",children:"Original Title"}),e.jsx("p",{className:"text-left text-[1.1vw]",children:s.original_title})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h3",{className:"mb-1 text-left text-[1.2vw] font-bold",children:"Original Country"}),e.jsx("p",{className:"grid grid-cols-10 gap-2 text-left",children:(s.origin_country||[]).map(t=>e.jsx("img",{src:`${T}${t.toLowerCase()}.png`,className:"mr-1 w-[1.5vw] object-contain"},t))})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h3",{className:"mb-1 text-left text-[1.2vw] font-bold",children:"Status"}),e.jsx("p",{className:"text-left text-[1.1vw]",children:s.status})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h3",{className:"mb-1 text-left text-[1.2vw] font-bold",children:"Network"}),(s.networks||[]).map(t=>e.jsx("img",{src:`https://media.themoviedb.org/t/p/h30${t.logo_path}`,alt:"network.png",className:"mb-2 invert"},t.id))]})]});b.propTypes={tvInfo:i.shape({original_title:i.string,origin_country:i.array,status:i.string,budget:i.number,revenue:i.number})};const u=({season:s})=>e.jsxs("div",{className:"flex items-center gap-5 rounded-lg border border-slate-200 p-3 shadow-md",children:[e.jsx($,{width:130,height:195,src:`https://media.themoviedb.org/t/p/w300${s.poster_path}`,className:"h-[195px] w-1/4 rounded-lg object-contain"}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("h2",{className:"text-[1.4vw] font-bold",children:s.name}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h3",{className:"font-bold",children:"Rating: "}),e.jsx(k,{percent:`${Math.round(s.vote_average*10)}`,size:2.5,strokeWidth:.2})]}),e.jsxs("h3",{children:[e.jsx("span",{className:"font-bold",children:"Release Date:"})," ",s.air_date]}),e.jsxs("h3",{className:"font-bold",children:[s.episode_count," Episodes"]}),e.jsx("p",{children:s.overview})]})]},s.id);u.propTypes={season:i.object};const f=({seasons:s=[]})=>{const[t,c]=D.useState(!1);let r=s.slice(0,4);return t&&(r=s),e.jsxs("div",{className:"mb-4 mt-8 text-[1.3vw]",children:[e.jsx("h2",{className:"mb-4 text-[1.5vw] font-bold",children:"Seasons"}),e.jsx("div",{className:"mb-2 space-y-2",children:r.map(n=>e.jsx(u,{season:n},n.id))}),e.jsx("div",{className:"cursor-pointer text-[1.2vw] text-gray-400 hover:text-gray-200",onClick:()=>c(!t),children:t?"Show less":"Show more"})]})};f.propTypes={seasons:i.array};const B=()=>{var m,h,x,p,j,g;const{id:s}=I(),{data:t,isLoading:c}=v({url:`${d}${s}?append_to_response=content_ratings,aggregate_credits,videos`}),{data:r}=E({url:`${d}${s}`}),{data:n,isLoading:N}=v({url:`${d}${s}/recommendations`});if(c)return e.jsx(R,{});const _=(((m=t.aggregate_credits)==null?void 0:m.cast)||[]).map(a=>{var l,o;return{...a,character:(l=a.roles[0])==null?void 0:l.character,episode_count:(o=a.roles[0])==null?void 0:o.episode_count}}),w=(((h=t.aggregate_credits)==null?void 0:h.crew)||[]).filter(a=>{const l=(a.jobs||[]).map(o=>o.job);return["Director","Writer"].some(o=>l.find(S=>S===o))}).slice(0,10).map(a=>({id:a.id,job:a.jobs[0].job,name:a.name})),y=((p=(((x=t.content_ratings)==null?void 0:x.results)||[]).find(a=>a.iso_3166_1==="US"))==null?void 0:p.rating)||"N/A",L=(g=(((j=t.videos)==null?void 0:j.results)||[]).find(a=>a.type=="Trailer"))==null?void 0:g.key;return e.jsxs("div",{children:[e.jsx(A,{title:r.name,genres:r.genres,overview:r.overview,poster_path:r.poster_path,release_date:r.first_air_date,point:Number(r.vote_average),backdrop_path:r.backdrop_path,certification:y,crews:w,trailerVideoKey:L}),e.jsx("div",{className:"bg-black text-white",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"flex-[2]",children:[e.jsx(C,{data:_}),e.jsx(f,{seasons:(t.seasons||[]).reverse()}),e.jsx(V,{title:"More Like This",mediaList:n.results||[],isLoading:N})]}),e.jsx("div",{className:"flex-1",children:e.jsx(b,{tvInfo:r})})]})})]})};export{B as default};
