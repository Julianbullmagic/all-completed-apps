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
    let pagecounter=await fetch("/groups/addtopagecounter/libertariansocialismvideos", options
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
    <h1>Libertarian Socialism</h1>
    <h3>The essence of Libertarian philosophy is that people should have complete freedom as long as they are not restricting other people's freedom
    or hurting others. Coercion should be used as minimally as is necessary in order to achieve this freedom. Libertarians believe that there are inherent
    benefits in co-operative relationships, such as strength in numbers, sharing of knowledge and resources. These benefits mean that it is not necessary to
    force people to co-operate for common goals. We can simply persuade and convince others to work with us. If you force someone to do something,
    when you can instead persuade them, you are wasting effort. The person will resist you and you must put energy into watching to see if they are disobedient
    and disciplining them if they are. People always carry out a task with more enthusiasm if they have chosen to do it themselves, rather than if they
    have been forced. Libertarians favour a more direct form of democracy. On a local level, there are no representatives, only one big assembly anybody
    can attend, make suggestions and vote in. For larger areas, cities, regions or countries, representatives are usually elected, but these have little
    real power, they can be recalled by their constituents at any time and generally must have explicit consent from them for all decisions.
    </h3>
    <br/>
    <center><iframe className="infovid" seamless frameborder="0" scrolling="no" src="https://www.youtube.com/embed/pTzC_QqSqwc"></iframe></center>
    <center><iframe className="infovid" seamless frameborder="0" scrolling="no" src="https://www.youtube.com/embed/lDNuzFQW3uI"></iframe></center>
    <center><iframe className="infovid" seamless frameborder="0" scrolling="no" src="https://www.youtube.com/embed/zXlHGseyvfw"></iframe></center>
    <center><iframe className="infovid" seamless frameborder="0" scrolling="no" src="https://www.youtube.com/embed/6-tOSrfHMBc"></iframe></center>
    <center><iframe className="infovid" seamless frameborder="0" scrolling="no" src="https://www.youtube.com/embed/I0XhRnJz8fU"></iframe></center>
    <center><iframe className="infovid" seamless frameborder="0" scrolling="no" src="https://www.youtube.com/embed/Ww46lxIc6-w"></iframe></center>
    <center><iframe className="infovid" seamless frameborder="0" scrolling="no" src="https://www.youtube.com/embed/cDnenjIdnnE"></iframe></center>
    <center><iframe className="infovid" seamless frameborder="0" scrolling="no" src="https://www.youtube.com/embed/ojXxz1u1R4c"></iframe></center>
    <center><iframe className="infovid" seamless frameborder="0" scrolling="no" src="https://www.youtube.com/embed/ihqLJ4Cayrw"></iframe></center>
    <center><iframe className="infovid" seamless frameborder="0" scrolling="no" src="https://www.youtube.com/embed/Cc5i5Xau4xs"></iframe></center>
    <center><iframe className="infovid" seamless frameborder="0" scrolling="no" src="https://www.youtube.com/embed/d-TT4qAKM4w"></iframe></center>
    <center><iframe className="infovid" seamless frameborder="0" scrolling="no" src="https://www.youtube.com/embed/Peyoc7-W0lc"></iframe></center>
    <center><iframe className="infovid" seamless frameborder="0" scrolling="no" src="https://www.youtube.com/embed/r8i4RAxLB-o"></iframe></center>
    <center><iframe className="infovid" seamless frameborder="0" scrolling="no" src="https://www.youtube.com/embed/2fipJAwje68"></iframe></center>
    <center><iframe className="infovid" seamless frameborder="0" scrolling="no" src="https://www.youtube.com/embed/UOGd30eFuqI"></iframe></center>
    <center><iframe className="infovid" seamless frameborder="0" scrolling="no" src="https://www.youtube.com/embed/yyqG-71zOi0"></iframe></center>
    <Comment id={"LibertarianSocialismVideos"} tempuser={user}/>
      </div>
    )}
