(()=>{var e={};e.id=530,e.ids=[530],e.modules={11055:(e,t,a)=>{"use strict";e.exports=a(46871)},21820:e=>{"use strict";e.exports=require("os")},27910:e=>{"use strict";e.exports=require("stream")},29021:e=>{"use strict";e.exports=require("fs")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},29727:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page-experimental.runtime.prod.js")},34631:e=>{"use strict";e.exports=require("tls")},45664:(e,t,a)=>{"use strict";a.r(t),a.d(t,{patchFetch:()=>U,routeModule:()=>v,serverHooks:()=>R,workAsyncStorage:()=>I,workUnitAsyncStorage:()=>L});var s={};a.r(s),a.d(s,{GET:()=>O});var r=a(11055),i=a(47160),n=a(56407),u=a(86113),o=a(29929);let m=[{id:"410544b2-4001-4271-9855-fec4b6a6442a",name:"User",email:"user@nextmail.com",password:"123456"}],d=[{id:"d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",name:"Evil Rabbit",email:"evil@rabbit.com",image_url:"/customers/evil-rabbit.png"},{id:"3958dc9e-712f-4377-85e9-fec4b6a6442a",name:"Delba de Oliveira",email:"delba@oliveira.com",image_url:"/customers/delba-de-oliveira.png"},{id:"3958dc9e-742f-4377-85e9-fec4b6a6442a",name:"Lee Robinson",email:"lee@robinson.com",image_url:"/customers/lee-robinson.png"},{id:"76d65c26-f784-44a2-ac19-586678f7c2f2",name:"Michael Novotny",email:"michael@novotny.com",image_url:"/customers/michael-novotny.png"},{id:"CC27C14A-0ACF-4F4A-A6C9-D45682C144B9",name:"Amy Burns",email:"amy@burns.com",image_url:"/customers/amy-burns.png"},{id:"13D07535-C59E-4157-A011-F8D2EF4E0CBB",name:"Balazs Orban",email:"balazs@orban.com",image_url:"/customers/balazs-orban.png"}],c=[{customer_id:d[0].id,amount:15795,status:"pending",date:"2022-12-06"},{customer_id:d[1].id,amount:20348,status:"pending",date:"2022-11-14"},{customer_id:d[4].id,amount:3040,status:"paid",date:"2022-10-29"},{customer_id:d[3].id,amount:44800,status:"paid",date:"2023-09-10"},{customer_id:d[5].id,amount:34577,status:"pending",date:"2023-08-05"},{customer_id:d[2].id,amount:54246,status:"pending",date:"2023-07-16"},{customer_id:d[0].id,amount:666,status:"pending",date:"2023-06-27"},{customer_id:d[3].id,amount:32545,status:"paid",date:"2023-06-09"},{customer_id:d[4].id,amount:1250,status:"paid",date:"2023-06-17"},{customer_id:d[5].id,amount:8546,status:"paid",date:"2023-06-07"},{customer_id:d[1].id,amount:500,status:"paid",date:"2023-08-19"},{customer_id:d[5].id,amount:8945,status:"paid",date:"2023-06-03"},{customer_id:d[2].id,amount:1e3,status:"paid",date:"2022-06-05"}],p=[{month:"Jan",revenue:2e3},{month:"Feb",revenue:1800},{month:"Mar",revenue:2200},{month:"Apr",revenue:2500},{month:"May",revenue:2300},{month:"Jun",revenue:3200},{month:"Jul",revenue:3500},{month:"Aug",revenue:3700},{month:"Sep",revenue:2500},{month:"Oct",revenue:2800},{month:"Nov",revenue:3e3},{month:"Dec",revenue:4800}],l=(0,o.A)(process.env.POSTGRES_URL,{ssl:"require"});async function T(){return await l`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`,await l`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `,await Promise.all(m.map(async e=>{let t=await u.Ay.hash(e.password,10);return l`
        INSERT INTO users (id, name, email, password)
        VALUES (${e.id}, ${e.name}, ${e.email}, ${t})
        ON CONFLICT (id) DO NOTHING;
      `}))}async function N(){return await l`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`,await l`
    CREATE TABLE IF NOT EXISTS invoices (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      customer_id UUID NOT NULL,
      amount INT NOT NULL,
      status VARCHAR(255) NOT NULL,
      date DATE NOT NULL
    );
  `,await Promise.all(c.map(e=>l`
        INSERT INTO invoices (customer_id, amount, status, date)
        VALUES (${e.customer_id}, ${e.amount}, ${e.status}, ${e.date})
        ON CONFLICT (id) DO NOTHING;
      `))}async function E(){return await l`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`,await l`
    CREATE TABLE IF NOT EXISTS customers (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      image_url VARCHAR(255) NOT NULL
    );
  `,await Promise.all(d.map(e=>l`
        INSERT INTO customers (id, name, email, image_url)
        VALUES (${e.id}, ${e.name}, ${e.email}, ${e.image_url})
        ON CONFLICT (id) DO NOTHING;
      `))}async function A(){return await l`
    CREATE TABLE IF NOT EXISTS revenue (
      month VARCHAR(4) NOT NULL UNIQUE,
      revenue INT NOT NULL
    );
  `,await Promise.all(p.map(e=>l`
        INSERT INTO revenue (month, revenue)
        VALUES (${e.month}, ${e.revenue})
        ON CONFLICT (month) DO NOTHING;
      `))}async function O(){try{return await l.begin(e=>[T(),E(),N(),A()]),Response.json({message:"Database seeded successfully"})}catch(e){return Response.json({error:e},{status:500})}}let v=new r.AppRouteRouteModule({definition:{kind:i.RouteKind.APP_ROUTE,page:"/seed/route",pathname:"/seed",filename:"route",bundlePath:"app/seed/route"},resolvedPagePath:"C:\\Users\\henrr\\Downloads\\curso-nextjs-main\\curso-nextjs-main\\app\\seed\\route.ts",nextConfigOutput:"",userland:s}),{workAsyncStorage:I,workUnitAsyncStorage:L,serverHooks:R}=v;function U(){return(0,n.patchFetch)({workAsyncStorage:I,workUnitAsyncStorage:L})}},46871:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route-experimental.runtime.prod.js")},55511:e=>{"use strict";e.exports=require("crypto")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},73923:()=>{},74603:()=>{},74998:e=>{"use strict";e.exports=require("perf_hooks")},91645:e=>{"use strict";e.exports=require("net")}};var t=require("../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),s=t.X(0,[407,929,113],()=>a(45664));module.exports=s})();