import React, {useRef,useState,useEffect} from 'react'
import ip from 'ip-in';

export default function Paris1871() {
  const [ready, setReady] = useState(false)
  useEffect(()=> {
    pageCounter()
  }, [])
let user
async function getVisitorInfo(){
  let ipAddress = await ip.getIpAddress()
 console.log('ipAddress',ipAddress)
 user = await ip.getCountryDetails()
 console.log('countryDetails',user)
}


  async function pageCounter(){
    await getVisitorInfo()
    delete user.lat
    delete user.lon
  const options = {
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }
  let pagecounter=await fetch("/groups/addtopagecounter/democracy", options
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
    <h1>Australian Democracy?</h1>
    <p style={{textAlign:"center"}}>
    The Australian political system is heavily biased in favour of the rich. There are a number of reasons for this, nomination fees for candidates can be very expensive, running an election campaign is costly because of the marketing expenses and time needed to be taken off paid employment, parties also receive bribes to help pay for these campaigns. This means that almost all our elected representatives are part of the top 5% most wealthy Australians. There is nothing inherently wrong with being rich, assuming your wealth has come from your own hard work and not at the expense of anyone else. However, there is also no particular reason to think that having large amounts of money makes you a good leader. There are also strong reasons to think our politicians have gained their wealth from the exploitation of working class people. They use their political power to create and enforce rules that make it easier for themselves and the ruling class to get richer. They use their authority for their own benefit and not to serve the masses. For the last 40 years, there has been a very clear trend of worsening economic conditions for working class people, the vast majority of the population. The labour movement has grown gradually poorer and weaker, the elite richer and stronger. This has resulted in growing economic inequality, a dramatically rising cost of living, declining wage growth and substantially higher unemployment rates. All of these trends are an indicator that Australia is much more of an Oligarchy than it is a Democracy.
<br/><br/>
Almost all of our politicians are wealthy people. Almost all of them receive some sort of passive income from rents, dividends, interest on loans or royalties. Many have several investment properties and/or receive substantial dividends from shares they own (ref #1, ref #2, ref #3). In 2010, Business Review Weekly found that the average wealth of Liberal MPs was $4.9 million, nearly three times the average of Labor MPs, at $1.7 million (ref #4, ref #5). The amount of money someone has tells us little about whether or not there are good leader.
<br/><br/>
There are several reasons why wealthy people tend to be elected. Political parties often receive bribes from other wealthy people to help pay for their campaigns (they call it "lobbying"). In this way, they attempt to influence the creation of legislation that is favourable to themselves, making it easier to gain more money. To just nominate a candidate in the federal election costs $2000 (ref #6, ref #7). In addition to this, election campaigns themselves are very expensive, the cost of marketing in the mass media and paying a team of people to promote a candidate can be high (ref #8). Running the campaign also requires a certain level of financial stability and security as large amounts of time are invested that would otherwise be spent working a paid job.
The Australian Electoral Commission’s annual report on donations to political parties on February 1 2021 was a sober reminder that Australia is still a plutocracy — a country ruled by the rich. Further, more than a third of political donations are anonymous because of longstanding loopholes in the disclosure rules. While the report revealed that the big end of town is clearly giving more money to the Coalition parties ($84 million) than Labor ($67 million), the second- and third-biggest donations (after Pratt’s biggest donation to the Liberals) went to a right-wing organisation associated with the “Freedom” protests around the country, according to Crikey.com (ref #9).
<br/><br/>
The level of Democracy in Australia has varied over time, in roughly the middle of the 20th century the labour movement was much more powerful, left wing political parties were more dominant, rates of union membership were much higher. Since the 1980s, the working class have grown gradually weaker and the elite more dominant. This has caused growing economic inequality, a rising cost of living, declining wage growth and much higher unemployment rates. Data gathered by our own statistics bureau demonstrates this clearly. You might expect the rich to try to conceal these problems, after all, elite politicians appoint the directors of the statistics bureau. They don't hide these issues because they simply do not find them shameful. All they care about is whether the rich are getting richer.
<br/><br/>
<img style={{width:"40vw",height:"40vh",display:"inline"}} src={require('./Trade-union-density-in-Australia-percentage-of-employees-1960-2011-a-a-Trade-union.png')}/>
<img style={{marginLeft:"5vw",width:"40vw",height:"40vh",display:"inline"}} src={require('./WageSlowdown.jpg')}/>
<img style={{width:"40vw",height:"40vh",display:"inline"}} src={require('./toponepercent.png')}/>
<img style={{marginLeft:"5vw",width:"40vw",height:"40vh",display:"inline"}} src={require('./real-wages-compared-with-productivity.jpg')}/>
<img style={{width:"40vw",height:"40vh",display:"inline"}} src={require('./housing-prices-Australia.png')}/>
<img style={{marginLeft:"5vw",width:"40vw",height:"40vh",display:"inline"}} src={require('./gini.png')}/>
<img style={{marginLeft:"5vw",width:"40vw",height:"40vh",display:"inline"}} src={require('./Australian-unemployment-rates.png')}/>
<br/><br/>
Of course, being wealthy is not inherently bad, assuming it has come from your own work and not at anyone else's expense. This is not the case for most of our politicians, most of them have become rich from the exploitation of working class people. As we saw earlier in this essay, most politicians own investments, either shares, bonds, properties or debts. From these they usually receive passive income in the form of rents, dividends, interest on loans or royalties. Human labour time is the source of economic value. If you receive a “passive” income, that money is not simply appearing from nowhere magically, it is being taken from someone else. This is probably the clearest fact in the field of economics. The accounts gathered by the statistics bureaus of all developed countries show a very strong correlation between human labour time and value. You search on the Australian Bureau of Statistics Bureau website for the labour time accounts to see the total number of human hours worked in each industry and the value created in each industry. You can plot this on a graph in order to see that there is roughly a 95% correlation. This does not necessarily mean that everyone's hours are equal. Some people have jobs that are more difficult or stressful and therefore fewer people will be willing to do them. A competitive labour market will naturally result in a higher payment for these jobs, a higher price will need to be paid in order to provide an incentive for people to do less desirable jobs. However, we see the correlation between labour time and value when we look at very aggregated statistics, like all the jobs in a particular industry. It's like if you look at the surface of the Earth close up, you see hills, valleys and mountains. If you go up kilometres into the atmosphere the surface starts to look flat (ref #10)(ref #11)(ref #12). With passive income from dividends, we see further evidence for the labour theory of value in worker co-operatives. These are democratic businesses where the workers are also the shareholders, instead of external investors who don't actually do the work that is creating value. Co-operative workers tend to be better paid than their capitalist counterparts because they can vote on how profit is distributed (ref #13). The profit that is paid to shareholders as dividends is the difference between the true value of the workers' labour, and the amount the corporation pays them as their wage. They need people to undervalue themselves, otherwise their are no dividends. Capitalists do take some risk when they invest their money in an corporation, but this is equivalent to the
risk an armed robber takes when then steal money from a shop or bank. They could potentially make large amounts of money, but they could also end up in prison. Stealing from people is inherently risky because they will usually resist you. We have another article on this website that demonstrates Co-operative businesses are much less volatile to start up and this risk is shared more evenly between the workers.
<br/><br/>
In conclusion, the Australian political system is largely controlled by a parasitic oligarchy who are a burden on the working class population. We should establish a better system that eliminates the influence of money. We could achieve this by banning all donations to political parties, removing nomination fees and having a guaranteed equal campaign marketing budget provided at public expense to all nominated candidates. Candidates could be chosen at public gatherings that everyone is encouraged to attend, these events would also be publicised and promoted at public expense. Anyone could submit their resume and we have group conversations about who is the most suitable. Who actually has the best leadership qualities? Who has demonstrated their ability to improve the lives of their constituency? Who is reducing the cost of living, growing real wages, creating jobs etc? Who brings out the best qualities in the people they represent? Which leaders make you believe in yourself and other human beings? This may sound outlandish and Utopian, but there are actually many organisations and even whole countries that have successfully put these principles into practice. Continue reading the other articles on this website if you would like to learn more about this.
    <br/><br/>
    <h3>Please fill out our survey at the bottom of this page</h3>
    <br/><br/>
    <div style={{textAlign:"left"}}>
    <h2>References</h2>
    1) https://www.abc.net.au/news/2017-04-20/australian-politician-property-ownership-details/8453782?nw=0&r=HtmlFragment<br/>
    2) https://www.smh.com.au/politics/federal/houses-of-parliament-politicians-own-an-estimated-370m-of-property-20170420-gvp2g5.html <br/>
    3)https://www.aph.gov.au/Parliamentary_Business/Committees/Senate/Senators_Interests/Register_of_Senators_Interests<br/>
    4) https://www.eurekastreet.com.au/article/the-rich-list-of-australian-politics<br/>
    5) https://www.traveller.com.au/politicians-wealth-revealed-as-malcolm-turnbull-makes-rich-list-again-wd6y<br/>
    6) https://www.elections.nsw.gov.au/NSWEC/media/NSWEC/State%20by-elections/SE-202-Registered-political-party-candidate-nomination.pdf<br/>
    7)https://www.aec.gov.au/elections/candidates/files/nomination-guide-candidates.pdf 8)https://www.aph.gov.au/About_Parliament/Parliamentary_Departments/Parliamentary_Library/FlagPost/2022/May/The_price_of_democracy<br/>
    9) https://www.greenleft.org.au/content/reminder-australia-plutocracy<br/>
    10) https://www.abs.gov.au/statistics/labour/labour-accounts#:~:text=Labour%20Account%20Australia,increased%205.5%25%20to%201.0%20million<br/>
    11)Zachariah, D. (2006). Labour value and equalisation of profit rates : a multi-country study<br/>
    12)Nitzan, J., & Bichler, S. (2014). The Empirics of the Labour Theory of Value: Reply to Nitzan and Bichler<br/>
    13) WORKER COOPERATIVES AND REVOLUTION: HISTORY AND POSSIBILITIES IN THE UNITED STATES Chris Wright 2014 Published by BookLocker.com, Inc., Bradenton, Florida. page 44 para 2<br/>
    </div>
    </p>
    <div style={{bottom:"4%",width:"90vw",display:"flex"}}>
    <div style={{width:"40vw",display:"inline",top:"0vh",height:"1000vh"}}>
<iframe style={{width:"40vw",display:"block",height:"55vh"}} seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT9i42lbtQCST96RuSOTAO9wICXZgi07WLVx8gUHt7Mbq_kyzEFMpjWTPkXAJmyl_lUcOIxkwc8JNX_/pubchart?oid=1601411393&amp;format=interactive"></iframe>
<iframe style={{width:"40vw",display:"block",height:"55h"}} seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRUuvg0SJEXcuZ49DguG8BizwVQon6CzmfaTPmp_mNWk4KL8Usb_bDBy4pmu_wVww00L0mzsdw_8nRs/pubchart?oid=1115745066&amp;format=interactive"></iframe>
<iframe style={{width:"40vw",display:"block",height:"55vh"}} seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRUuvg0SJEXcuZ49DguG8BizwVQon6CzmfaTPmp_mNWk4KL8Usb_bDBy4pmu_wVww00L0mzsdw_8nRs/pubchart?oid=1679919600&amp;format=interactive"></iframe>
<iframe style={{width:"40vw",display:"block",height:"55vh"}} seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRUuvg0SJEXcuZ49DguG8BizwVQon6CzmfaTPmp_mNWk4KL8Usb_bDBy4pmu_wVww00L0mzsdw_8nRs/pubchart?oid=1941203838&amp;format=interactive"></iframe>
<iframe style={{width:"40vw",display:"block",height:"55vh"}} seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRUuvg0SJEXcuZ49DguG8BizwVQon6CzmfaTPmp_mNWk4KL8Usb_bDBy4pmu_wVww00L0mzsdw_8nRs/pubchart?oid=1837810909&amp;format=interactive"></iframe>
<iframe style={{width:"40vw",display:"block",height:"55vh"}} seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRUuvg0SJEXcuZ49DguG8BizwVQon6CzmfaTPmp_mNWk4KL8Usb_bDBy4pmu_wVww00L0mzsdw_8nRs/pubchart?oid=288198991&amp;format=interactive"></iframe>
<iframe style={{width:"40vw",display:"block",height:"55vh"}} seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRUuvg0SJEXcuZ49DguG8BizwVQon6CzmfaTPmp_mNWk4KL8Usb_bDBy4pmu_wVww00L0mzsdw_8nRs/pubchart?oid=11657505&amp;format=interactive"></iframe>
</div>
<iframe style={{width:"40vw",display:"inline",height:"1000vh",marginLeft:"5vw"}} scrolling="no" src="https://docs.google.com/forms/d/e/1FAIpQLSfSSjXLRfogBYhRyozV60Mq9c2rGR0t4wSaMxZsxCnWPEfD5w/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
  </div>
      </div>
    )}
