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
  const options = {
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }
  let pagecounter=await fetch("/groups/addtopagecounter/paris", options
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
    <h1>The Paris Commune</h1>
     <img style={{width:"40vw"}} src={require('./communards.jpg')} />
    <p style={{textAlign:"center"}}>
    most politicians rich
    correlation between wealth and right wing votes
    undemocratic Media
    economic policy biased in favour of the rich, rising cost of living, low wage growth
    exploitation, rents, dividends, interest on loans

    Capitalism is not very democratic. For the US political system, statistical analysis has shown that the views of ordinary people have close to zero impact on
    decisions made by the government. People only have a very token choice of one of of two elite political parties every few years. The views of the rich have a
    vastly disproportionate influence.

    https://scholar.princeton.edu/sites/default/files/mgilens/files/gilens_and_page_2014_-testing_theories_of_american_politics.doc.pdf

    The Australian poplitical system is generally regarded by political scientists as being a hybrid of the US and UK systems with distinctive Australian
    characteristics. However, like the USA, the rich have a hugely disproportionate influence. It is government by the rich, for the rich.

    https://www.abc.net.au/news/2017-04-20/australian-politician-property-ownership-details/8453782?nw=0&r=HtmlFragment
    https://www.smh.com.au/politics/federal/houses-of-parliament-politicians-own-an-estimated-370m-of-property-20170420-gvp2g5.html
    https://www.aph.gov.au/Parliamentary_Business/Committees/Senate/Senators_Interests/Register46thparl

    Data from our own statistics bureau shows that the economic situation for most Australians has grown much worse since the 1970s, the cost of living is much
    more expensive, unemployment rates have tripled, wage growth has declined substantially. The root of these problems is that our political system is biased in
    favour of the rich. We need a new form of representative democracy that selects more responsible leaders and prevents people from accumulating too much power.
    Our representatives should have the authority of knowledge, wisdom and moral integrity instead of coercive, exploitative power.
    <br/><br/>
    <div style={{textAlign:"left"}}>
    <h2>References</h2>
    1) Lenin Collected Works, Progress Publishers, [1974], Moscow, Volume 17, pages 139-143. para 4-5<br/>
    2) The Paris Commune a Revolutionary Democracy Donny Gluckstein 2006 Bookmarks page 19 para 2<br/>
    3) ^Lenin para 10<br/>
    4) ^Gluckstein 2006 Bookmarks page 18 para 1-2<br/>
    5) ^Gluckstein 2006 Bookmarks page 14 para 2-5<br/>
    6) ^Gluckstein 2006 Bookmarks page 18 para 1-2<br/>
    7) ^Gluckstein 2006 Bookmarks page 20-21<br/>
    8) ^Gluckstein 2006 Bookmarks page 25 para 4<br/>
    9) ^Gluckstein 2006 Bookmarks page 35 para 1<br/>
    10)  ^Lenin para 7 ,para 12<br/>
    11) Florian Grams A Short History of the Paris Commune Para 13 https://www.rosalux.de/en/news/id/43896/a-short-history-of-the-paris-commune<br/>
    12) History of the Paris Commune of 1871 Prosper-Olivier Lissagaray18 March 2021 page 11 Chapter 6 https://www.marxist.com/history-of-the-paris-commune-of-1871/6.-the-mayors-and-the-assembly-combine-against-paris.htm para 12<br/>
    </div>
    </p>
    <div className="vids" style={{bottom:"4%"}}>
  <iframe style={{width:"40vw",height:"40vh",display:"inline"}} src={"https://www.youtube.com/embed/SG50bCPA8-I"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <iframe style={{marginLeft:"5vw",width:"40vw",height:"40vh",display:"inline"}} src={"https://www.youtube.com/embed/jWrnGZ_975I"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
      </div>
    )}
