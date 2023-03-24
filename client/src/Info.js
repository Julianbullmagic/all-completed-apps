import React, {useRef,useState,useEffect} from 'react'
import ip from 'ip-in';

export default function Info() {
  const [ready, setReady] = useState(false)
  const [extraReady, setExtraReady] = useState(false)
  const [user, setUser] = useState("")

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
    let pagecounter=await fetch("/groups/addtopagecounter/info", options
    ).then(res => {
    return res.json()
    }).catch(err => {
    console.error(err);
    })
    pagecounter=pagecounter.data
    console.log(pagecounter,"pagecounter")
    let visitorinfo=Object.values(use).join(",")
    console.log(visitorinfo,"visitorinfo")
    setReady(true)
    setExtraReady(true)

    // if(pagecounter.psychologicalwar.includes(visitorinfo)&&pagecounter.info.includes(visitorinfo)){
    //   setReady(true)
    //   }
    //   if(pagecounter.cooperatives.includes(visitorinfo)||pagecounter.tennomar.includes(visitorinfo)||pagecounter.neatugua.includes(visitorinfo)){
    //     console.log("TRUE")
    //     setExtraReady(true)
    //     }
    }

return (
  <div style={{marginLeft:"5vw",marginTop:"2vw",width:"90vw",textAlign:"center"}}>
  <a style={{color:"black",textDecoration:"none",display:"block"}} href="/Kerala">
  <div className="articlelink">
  <h2>Kerala</h2>
  <h3>India most humanistic State</h3>
  <h3>Read More</h3>
  </div>
  </a>
  <a style={{color:"black",textDecoration:"none",display:"block"}} href="/Jamahiriya">
  <div className="articlelink">
  <h2>Jamahiriya</h2>
  <h3>State of the Masses, a humanist direct democracy</h3>
  <h3>Read More</h3>
  </div>
  </a>
  <a style={{color:"black",textDecoration:"none",display:"block"}} href="/Tennomar">
  <div className="articlelink">
  <h2>The Humanist Federal Republic of Tennomar</h2>
  <h3>Read More</h3>
  <img style={{width:"20vw"}} src={require('./tenomarflag.png')} />
  </div>
  </a>
  <a style={{color:"black",textDecoration:"none",display:"block"}} href="/Neatugua">
  <div className="articlelink">
  <h2>Neatugua</h2>
  <h3>Read More</h3>
  <img style={{width:"20vw"}} src={require('./neatuguaflag.png')} />
  </div>
  </a>
  <a style={{color:"black",textDecoration:"none",display:"block"}} href="/Cooperatives">
  <div className="articlelink">
  <h2>Co-operatives Article</h2>
  <p>
  Co-operatives are democratic businesses owned and run by the people who work for them. Decisions are made with either direct or representative democracy.
  </p>
  <h2>Read More</h2>
  </div>
  </a>
  {extraReady&&<>
    <a style={{color:"black",textDecoration:"none",display:"block"}} href="/ManufacturingConsentVideos">
    <div className="articlelink">
    <h2>Manufacturing Consent, the mass media is much less democratic than it seems</h2>
    <p>
    <center><iframe className="infovid" seamless frameborder="0" scrolling="no" src="https://www.youtube.com/embed/34LGPIXvU5M"></iframe></center>
    </p>
    <h2>See More Videos</h2>
    </div>
    </a>
    <a style={{color:"black",textDecoration:"none",display:"block"}} href="/cooperativesvideos">
    <div className="articlelink">
    <h2>Cooperatives Videos</h2>
    <p>
    <center><iframe className="infovid" seamless frameborder="0" scrolling="no" src="https://www.youtube.com/embed/8ZoI0C1mPek"></iframe></center>
    </p>
    <h2>See More Videos</h2>
    </div>
    </a>
    <a style={{color:"black",textDecoration:"none",display:"block"}} href="/spain">
    <div className="articlelink">
    <h2>Spanish Worker Self Management during the Civil War</h2>
    <p>
    </p>
    <h2>Read More</h2>
    </div>
    </a>
  <a style={{color:"black",textDecoration:"none",display:"block"}} href="/libertariansocialismvideos">
  <div className="articlelink">
  <h2>Libertarianism</h2>
  <p>
  </p>
  <center><iframe className="infovid" seamless frameborder="0" scrolling="no" src="https://www.youtube.com/embed/pTzC_QqSqwc"></iframe></center>
  <h2>See More Videos</h2>
  </div>
  </a>
  <a style={{color:"black",textDecoration:"none",display:"block"}} href="/Paris1871">
  <div className="articlelink">
  <h2>Paris 1871, the First Real Humanist Revolution</h2>
  <p>
  In 1871 Paris experienced the first working class, genuinely democratic social experiment in history.
  </p>
  <h2>Read More</h2>
  </div>
  </a>
  <a style={{color:"black",textDecoration:"none",display:"block"}} href="/democracyvideos">
  <div className="articlelink">
  <h2>Democracy?</h2>
  <p>
  </p>
  <center><iframe className="infovid" seamless frameborder="0" scrolling="no" src="https://www.youtube.com/embed/NpiqX6ouM-8"></iframe></center>
  <h2>See More Videos</h2>
  </div>
  </a>
  <a style={{color:"black",textDecoration:"none",display:"block"}} href="/Democracy">
  <div className="articlelink">
  <h2>Australian Democracy?</h2>
  <p>
  Our Political system is heavily biased in favour of the rich. An elite group of wealthy people, who make up a small minority of the population,
  rig the system in their own favour.
  </p>
  <h2>Read More</h2>
  </div>
  </a>
  <a style={{color:"black",textDecoration:"none",display:"block"}} href="/Psychological-War">
  <div className="articlelink">
  <h2>The Psychological War On Humanism</h2>
  <p>
  Since the birth of humanism, the Capitalist ruling class have gone to great lengths to destroy it. They have tried their absolute best to destroy people's perception of Humanism...
  </p>
  <h2>Read More</h2>
  </div>
  </a>
  <a style={{color:"black",textDecoration:"none",display:"block"}} href="/Ujamaa">
  <div className="articlelink">
  <h2>Ujamaa</h2>
  <p>
  Tanzania's experiment in Co-operative economics under the leadership of Julius Nyerere, harnessing and modernising the traditional egalitarianism of Tanzanian society.
  </p>
  <h2>Read More</h2>
  </div>
  </a>
  </>}
  </div>
)}






// {ready&&<><p style={{width:"90vw"}}>If you've looked at some of the references to the Tennomar or Neatugua articles, it should be clear that
// these countries have pseudonym names, really they are Communist countries, Tennomar is Yugoslavia and Neatugua is Cuba. All the sources for these essays
// are genuine formerly classified CIA documents that you can find on their website. When you read what the Agency has to say about Communism, it is
// clear that the Bourgoisie have put enormous effort into slandering Socialism, attempting to destroy people's perception of it. Communism is actually
// radically humanistic, in many cases resulting in enormous improvements to the standard of living, health, real wage growth, reductions in the cost of
// living and unemployment rates. In many cases there has also been substantial improvement to social, economic and political equality. We've written a short history based
// almost entirely on sources taken from United States government sources, primarily the CIA. At this point in history the truth is very clear. The
// Bourgoisie are proud of their achievement, they think they've pulled of the most ingenious heist ever. They are itching to let you know how stupid
// they think you are, but cannot do this too openly because there would probably be a revolution.
// Download a pdf version by clicking the image below.</p>
// <a style={{width:"15vw"}} href="https://drive.google.com/file/d/1c6OYuD-lcxd_r-rvtGiRJh-3FXDH0SHg/view?usp=sharing">
// <img style={{width:"15vw"}} src={require('./TitlePage.png')} />
// </a><br/><br/><br/><br/><hr/></>}
