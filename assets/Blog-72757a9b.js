import{r as o,j as s,G as d,L as x}from"./index-cf625009.js";function m(){const[t,a]=o.useState([]),[r,c]=o.useState(!1),i=()=>{fetch("https://jsonplaceholder.typicode.com/posts").then(e=>e.json()).then(e=>a(e)).catch(e=>console.error("Error fetching data:",e))};o.useEffect(()=>{i()},[]);const l=t.map(e=>({...e})),n=r?l:l.slice(0,20);return s.jsxs("main",{className:"related px-10 pt-20 lg:py-36 lg:px-40 z-[1000]",children:[s.jsxs("h1",{className:"md:px-20 px-6 relative md:text-3xl uppercase tracking-wide titleEffect flex pb-11 mb-5 pt-2.5 z-50",children:["Mad",s.jsx(d,{size:15,className:"rotate-90 self-center fill-[#ff3700]"}),"Blog"]}),s.jsxs("div",{className:"lg:grid lg:grid-rows-5 lg:grid-cols-4 lg:gap-5",children:[t.map(e=>s.jsx(x,{to:`blog/${e.userId}`,children:s.jsxs("div",{className:"p-5",children:[s.jsx("img",{src:"../../public/assets/games/theDayBefore_bg.jpg",alt:"blog_image"}),s.jsx("h4",{className:"text-white capitalize bg-[#12121299] border-t-2 border-[#ff3700] borderImgGrad backdrop-blur-xl sm:pt-2.5  flex flex-col",children:e.title}),s.jsx("p",{className:"text-zinc-600 text-xs s:text-base",children:e.body})]})},e.id)),t.length>n&&s.jsx("button",{className:"sm:w-[138px] sm:mx-[15px] py-[5px] px-4 no-underline md:text-lg text-sm font-normal uppercase bg-[#ff3700] text-white duration-300 !cursor-pointer border-0 rounded hover:!text-[#ff3700] hover:!bg-white self-center",onClick:()=>c(!r),children:r?"Show Less":"Show More"})]})]})}export{m as Component,m as default};
