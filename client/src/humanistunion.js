import React, {useEffect} from 'react'

export default function HumanistUnion() {

  useEffect(() => {
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
    let pagecounter=await fetch("/groups/addtopagecounter/humanistunion", options
    ).then(res => {
    return res.json()
    }).catch(err => {
    console.error(err);
    })
    pagecounter=pagecounter.data
    console.log(pagecounter,"pagecounter")
    let visitorinfo=Object.values(user).join(",")
    console.log(visitorinfo,"visitorinfo")
    }

  return (
    <div style={{marginLeft:"5vw",marginTop:"3vw",width:"90vw",textAlign:"center"}}>
    <h1>The Humanist Union</h1>
    <iframe style={{height:"60vh",width:"50vw"}} src={"https://www.youtube.com/embed/7zbjWPLnbPw"} title="YouTube video player" frameborder="0"allowfullscreen></iframe>
    </div>
  )}
