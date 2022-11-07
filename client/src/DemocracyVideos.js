import React, {useRef,useState,useEffect} from 'react'
import Comment from './ArticleComment'
import ip from 'ip-in';

export default function DemocracyVideos() {
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
    let pagecounter=await fetch("/groups/addtopagecounter/democracyvideos", options
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
    <h1>Capitalism is not really democracy</h1>
    <h2>Capitalism can much more accurately be described as plutocracy than democracy. It is government by the rich, for the rich.</h2>
    <center><iframe className="infovid" seamless frameborder="0" scrolling="no" src="https://www.youtube.com/embed/NpiqX6ouM-8"></iframe></center>
    <center><iframe className="infovid" seamless frameborder="0" scrolling="no" src="https://www.youtube.com/embed/Xz9HWMX40T8"></iframe></center>
    <center><iframe className="infovid" seamless frameborder="0" scrolling="no" src="https://www.youtube.com/embed/KLmZSOvaWnM"></iframe></center>
    <center><iframe className="infovid" seamless frameborder="0" scrolling="no" src="https://www.youtube.com/embed/ejpDTfvmb2s"></iframe></center>
    <center><iframe className="infovid" seamless frameborder="0" scrolling="no" src="https://www.youtube.com/embed/srfeHpQNEAI"></iframe></center>
    <center><iframe className="infovid" seamless frameborder="0" scrolling="no" src="https://www.youtube.com/embed/GB4s5b9NL3I"></iframe></center>
    <center><iframe className="infovid" seamless frameborder="0" scrolling="no" src="https://www.youtube.com/embed/xgRYAMRsxcY"></iframe></center>
    <center><iframe className="infovid" seamless frameborder="0" scrolling="no" src="https://www.youtube.com/embed/DiyQc42YkTY"></iframe></center>
    <Comment id={"DemocracyVideos"} tempuser={user}/>
      </div>
    )}
