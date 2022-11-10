import React, {useRef,useState,useEffect} from 'react'
import Comment from './ArticleComment'
import ip from 'ip-in';

export default function Cooperatives() {
  const [ready, setReady] = useState(false)
  const [user, setUser] = useState("")

  let videos=["https://www.youtube.com/embed/tTBWfkE7BXU","https://www.youtube.com/embed/34LGPIXvU5M",
  "https://www.youtube.com/embed/8ZoI0C1mPek","https://www.youtube.com/embed/emnYMfjYh1Q","https://www.youtube.com/embed/Hgwtd4X_qFM",
  "https://www.youtube.com/embed/7IIEB5JiyNs","https://www.youtube.com/embed/xgKPyIj8Q60","https://www.youtube.com/embed/-zIqCH00V4I",
  "https://www.youtube.com/embed/uNkADHZStDE","https://www.youtube.com/embed/6s17IAj-XpU","https://www.youtube.com/embed/2qNGKFS9oGM",
  "https://www.youtube.com/embed/KXvlVIXETd0","https://www.youtube.com/embed/uXBU9qcsa-I","https://www.youtube.com/embed/t4jAhVKNufs"]
  videos = videos.sort(() => .5 - Math.random()).sort(() => .5 - Math.random()).slice(0, 2);
  videos = videos.sort(() => .5 - Math.random()).sort(() => .5 - Math.random()).slice(0, 2);

  useEffect(()=> {
    pageCounter()
  }, [])
async function getVisitorInfo(){
  let ipAddress = await ip.getIpAddress()
 console.log('ipAddress',ipAddress)
 let use = await ip.getCountryDetails()
 delete use.lat
 delete use.lon
 if(use.status=="fail"){
   use=ipAddress
 }
 console.log('countryDetails',use)
 setUser(use)
 return use
}


  async function pageCounter(){
    let use=await getVisitorInfo()
console.log(use,"use")
  let options = {
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
  }
  if (typeof use=="string"){
    let item={user:use}
    options.body=JSON.stringify(item)
  }else{
    let item={user:Object.values(use).join(",")}
    options.body=JSON.stringify(item)
  }
  console.log(options,"options")
  let pagecounter=await fetch("/groups/addtopagecounter/cooperatives", options
  ).then(res => {
  return res.json()
  }).catch(err => {
  console.error(err);
  })
  pagecounter=pagecounter.data
  console.log(pagecounter,"pagecounter")
  let visitorinfo=Object.values(user).join(",")
  console.log(visitorinfo,"visitorinfo")
  if(pagecounter.psychologicalwar.includes(visitorinfo)&&pagecounter.info.includes(visitorinfo)){
    setReady(true)
    }
  }

  return (
    <div style={{marginLeft:"5vw",marginTop:"2vw",width:"90vw",textAlign:"center"}}>
    <h1>Co-operatives</h1>
    <p style={{textAlign:"center"}}>
Co-operatives, or "co-ops", are democratic businesses owned and run by the people who work for them. There are many very successful ones, notably
The Mondragon Corporation, Huawei and Ohio Co-operative Solar. In Australia, the Dairy Farmers Milk Co-operative, NRMA and CBH are very large prosperous
co-ops. In this form of organization, workers are also shareholders, they usually democratically elect the directors of the company, directly or indirectly.
Some smaller ones practice direct democracy without representatives. This form of oganisation has many benefits, co-ops tend to be more productive,
economically resilient, workers are better paid and there is lower income inequality.
<br/><br/>

Co-ops have a substantially lower ratio of difference between their highest and lowest incomes, they are much more equitable. In the U.S. the average
ratio of CEO compensation in the Fortune 500 companies to the ordinary worker’s has recently been reported as 344:1,49 in co-ops the pay-differential between
management and the average worker rarely exceeds 4:1. In collectives, everyone is usually paid the same amount (ref #1). Co-operative Workers are generally better paid than Capitalist ones (ref #2).
 Democratic business are also less risky to start up, with twice the number of co-operatives (80%) surviving their first five years compared with other business ownership models (41%) according to data from United
Kingdom (ref #3). They tend to have a longer lifespan than other types of business. This resilience has been attributed to how cooperatives share risks and rewards between members, how they harness
the ideas of many and how members have a tangible ownership stake in the business. Additionally, "cooperative banks build up counter-cyclical buffers
that function well in case of a crisis," and are less likely to lead members and clients towards a debt trap (ref #4).
In a 2007 study by the World Council of Credit Unions, the five-year survival rate of cooperatives in the United States was found to be 90% in comparison
to 3-5% for traditional businesses (ref#5). Credit unions, a type of cooperative bank, had five times lower failure rate than other banks during the financial
crisis (ref #6) and more than doubled lending to small businesses between 2008 and 2016, from $30 billion to $60 billion, while lending to small businesses
overall during the same period declined by around $100 billion. Public trust in credit unions stands at 60%, compared to 30% for big banks and
small businesses are five times less likely to be dissatisfied with a credit union than with a big bank (ref #7). It is reported universally in the
literature that the prospect of laying off or firing fellow workers is very painful. This is especially so in collectives, where the communities are tightly
knit and people develop bonds of friendship with each other. Even in situations where close friendships do not develop, there usually remains mutual respect
and a sense of obligation to each other—a sense of “we’re in this thin together.”. As a rule, workers prefer the continued employment of as much of the
workforce as possible to the retention of high revenues (ref #8). Worker-owners take their “supervisor” much less
seriously than in conventional workplaces because his continued employment depends on their goodwill (ref #9).
<br/><br/>
The Mondragon Corporation in Spain is currently the largest co-operative in the world. It comprises about 250 companies that
together employ 80,000 people and have annual sales of 13 billion
euros, elevating Mondragon into the class of major multinational
corporations (ref #10).
In the case of the Mondragon, if workers are made redundant, perhaps because of automation, the company will pay them to retrain in a new
job, the corporation actually owns a university for this purpose. If absolutely necessary, workers can receive unemployment insurance payments of 80%
their normal pay.
(ref #11).
In this same company, cooperative members can spend much of their lives and
satisfy many of their needs within their own cooperative structures. They can
attend school from day care through post graduate instruction within a
cooperative structure. Members can shop in several hundred cooperative stores,
some of them the size of K Marts with a similarly diverse merchandise selection.
Although only a small proportion of the food products they buy might have been
grown and processed in their own agricultural cooperatives, they could buy most
of their appliances from cooperative factories. Medical care, home, auto,
business and life insurance, disability benefits, family allowances, unemployment
insurance and pensions are all financed and managed through their cooperative
system. Their bank is a cooperative. So is their travel agency
(ref #12).
    <br/><br/>
From the point of view of working class people, a co-operative is clearly a superior form of organization that much better serves their interests. Co-op
members are better paid, their work environment is more friendly, the work more rewarding and there is greater job security. You're probably wondering
why you don't hear about these organizations much in the mass media. On the info page of this website we have a link to another article called
"The Psychological War on Humanism" where we provide a comprehensive answer to this question.
<br/><br/>
<h3>Please fill out our survey at the bottom of this page</h3>
<br/><br/>
    <div style={{textAlign:"left"}}>
    <h2>References</h2>
1)WORKER COOPERATIVES AND REVOLUTION: HISTORY AND POSSIBILITIES IN THE UNITED STATES Chris Wright 2014 Published by BookLocker.com, Inc., Bradenton,
Florida. page 27 para 1<br/>
2)^Chris Wright page 44 para 2<br/>
3)Michelle Chen (26 March 2016). "Worker Cooperatives Are More Productive Than Normal Companies". The Nation. Archived from the original on 26 January
2021. Retrieved 27 January 2021
4)Capital and the Debt Trap Capital and the Debt Trap: Learning from cooperatives in the global crisis 2011th Edition
by Claudia Sanchez Bajo (Author), Bruno Roelants  (Author) 2011, p.219<br/>
5)"How Did Bank Lending to Small Business in the United States Fare After the Financial Crisis? - The U.S. Small Business Administration – SBA.gov".
www.sba.gov. Archived from the original on 28 August 2019. Retrieved 29 November 2018<br/>
6)"A11 Report – Alberta Co-op Survival (PDF)" (PDF). Archived (PDF) from
the original on 14 July 2016. Retrieved 1 April 2017<br/>
7)"Credit Unions Twice as Trusted as Big Banks". Archived from the original on 29 November 2018. Retrieved 29 November 2018<br/>
8)^Chris Wright page 18 para 2, page 29 para 2
9)^Chris Wright page 38 para 4<br/>
10)^Chris Wright page 14 para 2<br/>
11)David Morris The Mondragon System: Cooperation at work May 1992 https://www.ilsr.org/wp-content/uploads/files/images/mondragon.pdf Institute for Local
Self-Reliance page 38 para 4-5<br/>
12)^David Morris page 2 para 4<br/>
    </div>
    <Comment id={"Cooperatives"} tempuser={user}/>

    </p>
  <iframe className="iframeleft" src={"https://www.youtube.com/embed/_4g4WJBVkwY"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <iframe className="iframeright" src={"https://www.youtube.com/embed/KXvlVIXETd0"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <iframe className="iframeleft" src={"https://www.youtube.com/embed/4Y7W6G6LQmM"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <iframe className="iframeright" src={"https://www.youtube.com/embed/TGT2CzkUfdM"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <iframe className="iframeleft" src={"https://www.youtube.com/embed/8ZoI0C1mPek"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <iframe className="iframeright" src={"https://www.youtube.com/embed/5dm114sD4I8"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <iframe className="iframeleft" seamless frameborder="0" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT9i42lbtQCST96RuSOTAO9wICXZgi07WLVx8gUHt7Mbq_kyzEFMpjWTPkXAJmyl_lUcOIxkwc8JNX_/pubchart?oid=1601411393&amp;format=interactive"></iframe>
  <iframe className="iframeright" src="https://docs.google.com/forms/d/e/1FAIpQLSd0ZLCkp2UK-3Rd8TSvUScSQMqMVRZRgB-BIoAS88I6tdiG6w/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
  </div>
    )}
