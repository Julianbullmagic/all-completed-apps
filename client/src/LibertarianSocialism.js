import React, {useRef,useState,useEffect} from 'react'
import ip from 'ip-in';

export default function Info() {
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
  let pagecounter=await fetch("/groups/addtopagecounter/info", options
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
    {ready&&<><p style={{width:"90vw"}}>If you've looked at some of the references to the Tennomar article, it should be clear that
    "The Humanist Federal Republic of Tennomar" is a pseudonym name for "The Socialist Federal Republic of Yugoslavia". All the sources for this essay
     are genuine formerly classified CIA documents that you can find on their website. When you read what the Agency has to say about Communism, it is
    clear that the Bourgoisie have put enormous effort into slandering Socialism, attempting to destroy people's perception of it. Communism is actually
    radically humanistic, in many cases resulting in enormous improvements to the standard of living, health, real wage growth, reductions in the cost of
    living and unemployment rates. In many cases there has also been substantial reduction in social, economic and political inequality. We've written a short history based
    almost entirely on sources taken from United States government sources, primarily the CIA. At this point in history the truth is very clear. The
    Bourgoisie are proud of their acheivement, they think they've pulled of the most ingenious heist ever. They are itching to let you know how stupid
    they think you are, but cannot do this too openly because there would probably be a revolution.
        Download a pdf version by clicking the image below.</p>
        <a style={{width:"15vw"}} href="https://drive.google.com/file/d/1c6OYuD-lcxd_r-rvtGiRJh-3FXDH0SHg/view?usp=sharing">
          <img style={{width:"15vw"}} src={require('./TitlePage.png')} />
          </a><br/><br/><br/><br/><hr/></>}
    <h1>Libertarian Socialism</h1>
    <h3>The Paris Commune, The Spanish Revolution, The Zapatistas, Rojava</h3>

     <img style={{width:"35vw"}} src={require('./tenomarflag.png')} />
    <p style={{textAlign:"center"}}>

    <br/><br/>
    <a href="/Psychological-War">
    <img style={{width:"35vw"}} src={require('./brain.png')} />
    </a>
    <br/><br/>
    <div style={{textAlign:"left"}}>
    <h2>References</h2>
      </div>
    </p>
      </div>
    )}
