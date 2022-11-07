import React, {useRef,useState,useEffect} from 'react'
import Comment from './ArticleComment'
import ip from 'ip-in';

export default function LibertarianSocialismVideos() {
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
    let pagecounter=await fetch("/groups/addtopagecounter/cooperativesvideos", options
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
    <h2>Not all companies have bosses, there are many hugely successful business that are owned and run by the people who work in that company. From the
    point of view of the workers, this is superior to Capitalist enterprise in almost every way. They are usually better paid, there is greater job Security,
    the work environment is more friendly and the company directors are much more likely to listen to and consult with the workers.</h2>
    <br/>
    <center><iframe className="infovid" seamless frameborder="0" scrolling="no" src="https://www.youtube.com/embed/8ZoI0C1mPek"></iframe></center>
    <center><iframe className="infovid" seamless frameborder="0" scrolling="no" src="https://www.youtube.com/embed/zaJ1hfVPUe8"></iframe></center>
    <center><iframe className="infovid" seamless frameborder="0" scrolling="no" src="https://www.youtube.com/embed/5dm114sD4I8"></iframe></center>
    <center><iframe className="infovid" seamless frameborder="0" scrolling="no" src="https://www.youtube.com/embed/fr1Dv086cXw"></iframe></center>
    <center><iframe className="infovid" seamless frameborder="0" scrolling="no" src="https://www.youtube.com/embed/kLVI6brXRNU"></iframe></center>
    <center><iframe className="infovid" seamless frameborder="0" scrolling="no" src="https://www.youtube.com/embed/1SASI0rcpr0"></iframe></center>
    <center><iframe className="infovid" seamless frameborder="0" scrolling="no" src="https://www.youtube.com/embed/KXvlVIXETd0"></iframe></center>
    <center><iframe className="infovid" seamless frameborder="0" scrolling="no" src="https://www.youtube.com/embed/2qNGKFS9oGM"></iframe></center>
    <center><iframe className="infovid" seamless frameborder="0" scrolling="no" src="https://www.youtube.com/embed/BDiDt74Fyss"></iframe></center>
    <center><iframe className="infovid" seamless frameborder="0" scrolling="no" src="https://www.youtube.com/embed/TGT2CzkUfdM"></iframe></center>
    <center><iframe className="infovid" seamless frameborder="0" scrolling="no" src="https://www.youtube.com/embed/_4g4WJBVkwY"></iframe></center>
    <Comment id={"CooperativesVideos"} tempuser={user}/>
      </div>
    )}
