exports.id=348,exports.ids=[348],exports.modules={6820:(e,t,r)=>{Promise.resolve().then(r.bind(r,17945)),Promise.resolve().then(r.t.bind(r,55374,23))},11717:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(35743),o=r(86250);function n({children:e}){return(0,s.jsxs)("div",{className:"flex h-screen flex-col md:flex-row md:overflow-hidden",children:[(0,s.jsx)("div",{className:"w-full flex-none md:w-64",children:(0,s.jsx)(o.Ay,{})}),(0,s.jsx)("div",{className:"flex-grow p-6 md:overflow-y-auto md:p-12",children:e})]})}},16063:(e,t,r)=>{"use strict";r.d(t,{default:()=>u});var s=r(44517),o=r(18856),n=r(84915),i=r(64843),a=r(56728),c=r.n(a),l=r(85279),d=r(22398);let m=[{name:"Home",href:"/dashboard",icon:o.A},{name:"Invoices",href:"/dashboard/invoices",icon:n.A},{name:"Customers",href:"/dashboard/customers",icon:i.A}];function u(){let e=(0,l.usePathname)();return(0,s.jsx)(s.Fragment,{children:m.map(t=>{let r=t.icon;return(0,s.jsxs)(c(),{href:t.href,className:(0,d.A)("flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",{"bg-sky-100 text-blue-600":e===t.href}),children:[(0,s.jsx)(r,{className:"w-6"}),(0,s.jsx)("p",{className:"hidden md:block",children:t.name})]},t.name)})})}},17945:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});let s=(0,r(27841).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/home/josedev/Escritorio/proyectos/nextjs_curso/nextjs-dashboard/app/ui/dashboard/nav-links.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/josedev/Escritorio/proyectos/nextjs_curso/nextjs-dashboard/app/ui/dashboard/nav-links.tsx","default")},37586:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a,metadata:()=>i});var s=r(35743);r(83102);var o=r(8149),n=r.n(o);let i={title:{template:"%s | Panel admin",default:"Acme Dashboard"},description:"The official Next.js Learn Dashboard built with App Router.",metadataBase:new URL("https://next-learn-dashboard.vercel.sh")};function a({children:e}){return(0,s.jsx)("html",{lang:"en",children:(0,s.jsx)("body",{className:`${n().className} antialiased`,children:e})})}},49758:()=>{},56531:(e,t,r)=>{"use strict";r.d(t,{YL:()=>n,c6:()=>o,vv:()=>s});let s=e=>(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"}),o=(e,t="en-US")=>{let r=new Date(e);return new Intl.DateTimeFormat(t,{day:"numeric",month:"short",year:"numeric"}).format(r)},n=e=>{let t=[],r=1e3*Math.ceil(Math.max(...e.map(e=>e.revenue))/1e3);for(let e=r;e>=0;e-=1e3)t.push(`$${e/1e3}K`);return{yAxisLabels:t,topLabel:r}}},59972:(e,t,r)=>{Promise.resolve().then(r.bind(r,16063)),Promise.resolve().then(r.t.bind(r,56728,23))},62709:(e,t,r)=>{"use strict";r.d(t,{Jv:()=>m,CI:()=>u});var s=r(17702),o=r(7809),n=r(6195),i=r(5486),a=r.n(i);let c=(0,r(65636).A)(process.env.POSTGRES_URL,{ssl:"require"});async function l(e){try{return(await c`SELECT * FROM users WHERE email=${e}`)[0]}catch(e){throw console.error("Failed to fetch user:",e),Error("Failed to fetch user.")}}let{auth:d,signIn:m,signOut:u}=(0,s.Ay)({...{pages:{signIn:"/login"},callbacks:{authorized({auth:e,request:t}){let r=!!e?.user;return t.nextUrl.pathname.startsWith("/dashboard")?!!r:!r||Response.redirect(new URL("/dashboard",t.nextUrl.origin))}},providers:[]},providers:[(0,o.A)({async authorize(e){let t=n.z.object({email:n.z.string().email(),password:n.z.string().min(6)}).safeParse(e);if(t.success){let{email:e,password:r}=t.data,s=await l(e);if(!s)return null;if(await a().compare(r,s.password))return s}return console.log("Invalid credentials"),null}})]})},64108:(e,t,r)=>{"use strict";r.d(t,{MX:()=>l,Pt:()=>d,Q5:()=>a,Yu:()=>m,gn:()=>u,nr:()=>i,zP:()=>c});var s=r(65636),o=r(56531);let n=(0,s.A)(process.env.POSTGRES_URL,{ssl:"require"});async function i(){try{console.log("Fetching revenue data..."),await new Promise(e=>setTimeout(e,3e3));let e=await n`SELECT * FROM revenue`;return console.log("Data fetch completed after 3 seconds."),e}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch revenue data.")}}async function a(){try{return(await n`
      SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      ORDER BY invoices.date DESC
      LIMIT 5`).map(e=>({...e,amount:(0,o.vv)(e.amount)}))}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch the latest invoices.")}}async function c(){try{let e=n`SELECT COUNT(*) FROM invoices`,t=n`SELECT COUNT(*) FROM customers`,r=n`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`,s=await Promise.all([e,t,r]),i=Number(s[0][0].count??"0"),a=Number(s[1][0].count??"0"),c=(0,o.vv)(s[2][0].paid??"0"),l=(0,o.vv)(s[2][0].pending??"0");return{numberOfCustomers:a,numberOfInvoices:i,totalPaidInvoices:c,totalPendingInvoices:l}}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch card data.")}}async function l(e,t){try{return await n`
      SELECT
        invoices.id,
        invoices.amount,
        invoices.date,
        invoices.status,
        customers.name,
        customers.email,
        customers.image_url
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
        customers.name ILIKE ${`%${e}%`} OR
        customers.email ILIKE ${`%${e}%`} OR
        invoices.amount::text ILIKE ${`%${e}%`} OR
        invoices.date::text ILIKE ${`%${e}%`} OR
        invoices.status ILIKE ${`%${e}%`}
      ORDER BY invoices.date DESC
      LIMIT ${6} OFFSET ${(t-1)*6}
    `}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch invoices.")}}async function d(e){try{let t=await n`SELECT COUNT(*)
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE
      customers.name ILIKE ${`%${e}%`} OR
      customers.email ILIKE ${`%${e}%`} OR
      invoices.amount::text ILIKE ${`%${e}%`} OR
      invoices.date::text ILIKE ${`%${e}%`} OR
      invoices.status ILIKE ${`%${e}%`}
  `;return Math.ceil(Number(t[0].count)/6)}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch total number of invoices.")}}async function m(e){try{return(await n`
      SELECT
        invoices.id,
        invoices.customer_id,
        invoices.amount,
        invoices.status
      FROM invoices
      WHERE invoices.id = ${e};
    `).map(e=>({...e,amount:e.amount/100}))[0]}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch invoice.")}}async function u(){try{return await n`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch all customers.")}}},79832:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,23900,23)),Promise.resolve().then(r.t.bind(r,58258,23)),Promise.resolve().then(r.t.bind(r,28466,23)),Promise.resolve().then(r.t.bind(r,33785,23)),Promise.resolve().then(r.t.bind(r,46277,23)),Promise.resolve().then(r.t.bind(r,45153,23)),Promise.resolve().then(r.t.bind(r,75161,23)),Promise.resolve().then(r.t.bind(r,80785,23)),Promise.resolve().then(r.t.bind(r,29187,23))},83102:()=>{},86250:(e,t,r)=>{"use strict";r.d(t,{Ay:()=>u,xK:()=>m});var s=r(35743),o=r(43276);r(58712);var n=r(55374),i=r.n(n),a=r(17945),c=r(95277),l=r(52402),d=r(62709);let m=async function(){await (0,d.CI)({redirectTo:"/"})};function u(){return(0,s.jsxs)("div",{className:"flex h-full flex-col px-3 py-4 md:px-2",children:[(0,s.jsx)(i(),{className:"mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40",href:"/",children:(0,s.jsx)("div",{className:"w-32 text-white md:w-40",children:(0,s.jsx)(c.A,{})})}),(0,s.jsxs)("div",{className:"flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2",children:[(0,s.jsx)(a.default,{}),(0,s.jsx)("div",{className:"hidden h-auto w-full grow rounded-md bg-gray-50 md:block"}),(0,s.jsx)("form",{action:(0,o.A)(m,"00a1047a31ac040e1fbec0a6b018c081ff243dee27",null),children:(0,s.jsxs)("button",{className:"flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",children:[(0,s.jsx)(l.A,{className:"w-6"}),(0,s.jsx)("div",{className:"hidden md:block",children:"Sign Out"})]})})]})]})}},86550:()=>{},90872:(e,t,r)=>{"use strict";function s(){for(var e,t,r=0,s="",o=arguments.length;r<o;r++)(e=arguments[r])&&(t=function e(t){var r,s,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t)if(Array.isArray(t)){var n=t.length;for(r=0;r<n;r++)t[r]&&(s=e(t[r]))&&(o&&(o+=" "),o+=s)}else for(s in t)t[s]&&(o&&(o+=" "),o+=s);return o}(e))&&(s&&(s+=" "),s+=t);return s}r.d(t,{$:()=>s,A:()=>o});let o=s},95277:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var s=r(35743),o=r(61573),n=r(22618),i=r.n(n);function a(){return(0,s.jsxs)("div",{className:`${i().className} flex flex-row items-center leading-none text-white`,children:[(0,s.jsx)(o.A,{className:"h-12 w-12 rotate-[15deg]"}),(0,s.jsx)("p",{className:"text-[44px]",children:"Acme"})]})}},95512:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,10722,23)),Promise.resolve().then(r.t.bind(r,95540,23)),Promise.resolve().then(r.t.bind(r,55048,23)),Promise.resolve().then(r.t.bind(r,57723,23)),Promise.resolve().then(r.t.bind(r,50251,23)),Promise.resolve().then(r.t.bind(r,95819,23)),Promise.resolve().then(r.t.bind(r,17603,23)),Promise.resolve().then(r.t.bind(r,90163,23)),Promise.resolve().then(r.t.bind(r,58613,23))}};