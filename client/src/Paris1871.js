import React, {useRef,useState,useEffect} from 'react'
import Comment from './ArticleComment'
import ip from 'ip-in';

export default function Paris1871() {
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
    <h1 style={{textAlign:"center"}}>The Paris Commune, the First Real Humanist Revolution</h1>
     <img style={{width:"40vw"}} src={require('./communards.jpg')} />
    <p style={{textAlign:"center"}}>
    The Paris Commune of 1871 is a little known social revolution that is rarely discussed in the mass media despite it's great historic significance. It was the first sincerely democratic social experiment in history, a genuine working class revolution (ref #1). This event
    has many important lessons for us today, many successes to be replicated and mistakes to be corrected. It was the first time that an abstract idea
    of what Utopia might look like, could be put to the test in real life. What turned out to be practical was much less than ideal,
    however, it was still a very substantial improvement on the great injustices and inequities of 19th century French society.
    <br/><br/>
  Without any particularly complex legislation, in a simple, straightforward manner, the working class, which had seized power, carried out the democratisation of the social system, abolished the bureaucracy, and made all official posts elective. All factories and workshops abandoned or shut down by their owners were to be turned over to associations of workers that were to resume production. Very soon, essential services were running normally again without the elite. Shops were open, the postal service continued sending mail and theatres were playing(ref #2). The Commune decreed that the salaries of all administrative and government officials, irrespective of rank, should not exceed the normal wages of a worker, and in no case amount to more than 6,000 francs a year (ref #3). Elected representatives were given limited mandates, could be recalled immediately, and could not reach judgements or make decisions without the consent of the people they represented (ref #4). Paris no longer had rulers, the ministers and their officials, police, magistrates, prefects, landlords, soldiers and generals all fled the city. The Commune was made entirely by the people as a collective communal revolutionary undertaking (ref #5). A number of new rules were created that demonstrated the working class character of the new system. Previously, bakers had been terribly exploited by bakery owners, they were forced to work inhumanly long shifts at night. Night-work in bakeries was forbidden. The system of fines, which represented legalised robbery of the workers, was also abolished(ref #6). Homelessness, prostitution, hunger and begging all came to an end. Canteens were set up to ensure that everyone was fed. Coal, wood and other necessities like bread, salt, sugar and coffee were distributed for free to those in need or at low prices to those who could afford it. Vacant homes, apartments and hotel rooms were appropriated by the Commune and given to the homeless. There were very few robberies or crimes in general, not a single murder (ref #7). Debt repayments were to be phased out gradually over three years (ref #8). Paris became more feministic, the Commune introduced equal pay for equal work, divorce was made legal and easy to obtain, certain rules that discriminated against single or widowed mothers were abolished (ref #9).
  <br/><br/>
  Unfortunately, the Commune only lasted 72 days, it did not grow large or strong enough to survive the aggression of the oligarchs of Europe. The rulers and aristocrats of the continent could not afford to tolerate their own workers and peasants getting the same dangerous ideas. Immediately, they set about trying to destroy the Commune as quickly and ruthlessly as possible, executing and incarcerating many of the leaders (ref #10). The Commune could also be criticised for being too naive, people believed that by demonstrating that a true democracy could be successful, they may be able to persuade the rulers of Europe to join them. The workers greatly underestimated the ruthless character of the European oligarchs, these were psychopaths who had become obscenely wealthy by exploiting millions of human beings and vast amounst of natural resources around the world. While the Commune existed, the Ruling class slandered the people of the Commune terribly as their excuse to the new workers' democracy. The Elite will usually take the most cynical, negative, interpretation possible to any genuinely democratic revolution. The rulers will greatly exaggerate the mistakes, not acknowledge any of the achievements and make very bold lies. This serves as their excuse for trying to mercilessly destroying these humanistic political systems (ref #11). Socialism will never be good enough for the elite. Today, the French ruling class acknowledge the working class character of the Paris Commune, but only because it eventually failed and the Leaders were mercilessly punished. The events serve as a reminder to the population of what the Elite will do to the population if they again try to free themselves.
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
    <Comment id={"Paris"} tempuser={user}/>
    </p>
    <div className="vids" style={{bottom:"4%"}}>
  <iframe className="iframeleft" src={"https://www.youtube.com/embed/SG50bCPA8-I"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <iframe className="iframeright" src={"https://www.youtube.com/embed/jWrnGZ_975I"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
      </div>
    )}
