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
    if(pagecounter.psychologicalwar.includes(visitorinfo)&&pagecounter.info.includes(visitorinfo)){
      setReady(true)
      }
      if(pagecounter.cooperatives.includes(visitorinfo)||pagecounter.tennomar.includes(visitorinfo)||pagecounter.neatugua.includes(visitorinfo)){
        console.log("TRUE")
        setExtraReady(true)
        }
    }

return (
  <div style={{marginLeft:"5vw",marginTop:"2vw",width:"90vw",textAlign:"center"}}>
  {ready&&<><p style={{width:"90vw"}}>If you've looked at some of the references to the Tennomar or Neatugua articles, it should be clear that
  these countries have pseudonym names, really they are Communist countries, Tennomar is Yugoslavia and Neatugua is Cuba. All the sources for these essays
  are genuine formerly classified CIA documents that you can find on their website. When you read what the Agency has to say about Communism, it is
  clear that the Bourgoisie have put enormous effort into slandering Socialism, attempting to destroy people's perception of it. Communism is actually
  radically humanistic, in many cases resulting in enormous improvements to the standard of living, health, real wage growth, reductions in the cost of
  living and unemployment rates. In many cases there has also been substantial improvement to social, economic and political equality. We've written a short history based
  almost entirely on sources taken from United States government sources, primarily the CIA. At this point in history the truth is very clear. The
  Bourgoisie are proud of their achievement, they think they've pulled of the most ingenious heist ever. They are itching to let you know how stupid
  they think you are, but cannot do this too openly because there would probably be a revolution.
  Download a pdf version by clicking the image below.</p>
  <a style={{width:"15vw"}} href="https://drive.google.com/file/d/1c6OYuD-lcxd_r-rvtGiRJh-3FXDH0SHg/view?usp=sharing">
  <img style={{width:"15vw"}} src={require('./TitlePage.png')} />
  </a><br/><br/><br/><br/><hr/></>}
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
  Co-operatives are democratic businesses owned and run by the people who work for them. Decisions are made with either direct or
  representative democracy. If there is a board of directors, they are elected by the people who work for the company. These are businesses
  that don't have really "bosses", the leaders of the company can be hired or fired by the workers and are therefore much more likely to
  consult and discuss with them in order to try to reach decisions that most people are happy with. This form of organization has many benefits,
  co-ops are usually more productive, have a longer lifespan, are less risky to startup and workers are better paid and taken care of.
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
  In 1871 Paris experienced the first working class, genuinely democratic social experiment in history. Representatives were given very little
  real power, they could not make any decisions without the consent of their consituency. This resulted in some very substantially humanistic
  economic policies, the eradication of homelessness, hunger and prostitution. Numerous feministic policies were created, such as equal pay for
  equal work and the abolishion of rules that discriminated against single or widowed mothers.
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
  rig the system in their own favour. For the last few decades this problem has grown gradually worse and worse and is the fundamental reason we are
  dealing with a cost of living crisis, declining wage growth and much higher unemployment rates.
  </p>
  <h2>Read More</h2>
  </div>
  </a>
  <a style={{color:"black",textDecoration:"none",display:"block"}} href="/Psychological-War">
  <div className="articlelink">
  <h2>The Psychological War On Humanism</h2>
  <p>
  Since the birth of humanism, the Capitalist ruling class have gone to great lengths to destroy it. They have tried their absolute best to destroy people's perception of Humanism, spreading slander throughout the mass media and academic institutions. They have infiltrated many real humanist organisations and created many of their own fake ones. Divide and conquer is their primary strategy, if they perceive any divisions between humanist groups, they try to drive a wedge into it. When they build their own Humanist organisations, the most common strategy is to spread ideas that sound humanistic, but are ultimately not at all useful. They will try to encourage a puritanical, vengeful, arrogant and self righteous mentality, any revolution that is less than perfect is bluntly dismissed, there is no constructive criticism or acknowledgement of the achievements of real viable humanist revolutions. They won't support any humanist experiments unless they failed, didn't last very long or didn't produce any measurable, lasting benefits to people's lives. The goal is to leave people with the feeling that humanism is a Utopian fantasy, idealistic, unrealistic, a nice idea, but not practical. The bourgeoisie have also tried to meddle in the elections of countries where the population shows strong support for humanism, attempting to get more right wing candidates elected.
  </p>
  <h2>Read More</h2>
  </div>
  </a>
  <a style={{color:"black",textDecoration:"none",display:"block"}} href="/Psychological-War">
  <div className="articlelink">
  <h2>Ujamaa</h2>
  <p>
  Tanzania's experiment in Co-operative economics under the leadership of Julius Nyerere, harnessing the traditional egalitarianism of African societies.
  </p>
  <h2>Read More</h2>
  </div>
  </a>
  </>}
  </div>
)}
