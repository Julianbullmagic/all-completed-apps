import React, {useRef,useState,useEffect} from 'react'
import Comment from './ArticleComment'
import ip from 'ip-in';

export default function ManufacturingConsentVideos() {
  const [ready, setReady] = useState(false)
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
   if(use.status==="fail"){
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
    let pagecounter=await fetch("/groups/addtopagecounter/manufacturingconsentvideos", options
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
    <h1>Manufacturing Consent</h1>
    <h2>Have you ever wondered why the mass media is cynical? Why are there so many distopian science fiction films and so few Utopian ones? Why doesn't the media often talk about Co-operative, democratic enterprises? Why don't you hear about the many
    successful social revolutions? The social
    sciences have a clear explanation.</h2>
    <br/>
    <center><iframe className="infovid" seamless frameborder="0" scrolling="no" src="https://www.youtube.com/embed/34LGPIXvU5M"></iframe></center>
    <center><iframe className="infovid" seamless frameborder="0" scrolling="no" src="https://www.youtube.com/embed/tTBWfkE7BXU"></iframe></center>
    <center><iframe className="infovid" seamless frameborder="0" scrolling="no" src="https://www.youtube.com/embed/h2OhID5pFfg"></iframe></center>
    <center><iframe className="infovid" seamless frameborder="0" scrolling="no" src="https://www.youtube.com/embed/EuwmWnphqII"></iframe></center>
    <center><iframe className="infovid" seamless frameborder="0" scrolling="no" src="https://www.youtube.com/embed/4cGw3oVVDwk"></iframe></center>
    <center><iframe className="infovid" seamless frameborder="0" scrolling="no" src="https://www.youtube.com/embed/txBRml8k86M"></iframe></center>
    <center><iframe className="infovid" seamless frameborder="0" scrolling="no" src="https://www.youtube.com/embed/AQXginhTsHE"></iframe></center>
    <Comment id={"ManufacturingConsentVideos"} tempuser={user}/>
      </div>
    )}
