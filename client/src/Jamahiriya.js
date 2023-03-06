import React, {useRef,useState,useEffect} from 'react'
import Comment from './ArticleComment'
import ip from 'ip-in';

export default function Tennomar() {
  const [ready, setReady] = useState(false)
  const [user, setUser] = useState("")

  useEffect(()=> {
    pageCounter()
    window.open('https://discord.gg/caUvjJ6MMR', '_blank', 'noreferrer')
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
    let pagecounter=await fetch("/groups/addtopagecounter/jamahiriya", options
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
    <h1 style={{textAlign:"center"}}>Jamahiriya; State of the Masses</h1>
    <div className="vids" style={{bottom:"4%"}}>
  <iframe className="iframeleft" src={"https://www.youtube.com/embed/hmOzL8KSOvc"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <iframe className="iframeright" src={"https://www.youtube.com/embed/K7rfEhtspC8"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
    <Comment id={"Jamahiriya"} tempuser={user}/>
   </div>
    )}
