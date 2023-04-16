import React, {useEffect} from 'react'
import ip from 'ip-in';

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
    }

  return (
    <div style={{marginLeft:"5vw",marginTop:"3vw",width:"90vw",textAlign:"center"}}>
    <h1>The Humanist Union</h1>
    <iframe style={{height:"60vh",width:"50vw"}} src={"https://www.youtube.com/embed/XemG71hMUVQ"} title="YouTube video player" frameborder="0"allowfullscreen></iframe>
    <div style={{textAlign:"left"}}>
    <h2>References</h2>
    <p>
<h3>Education</h3>
Organization of the Medical Profession; Administration of Public Health; and Status of Medical Sciences in the Humanist Union Page 48 para 1-3 <a href="https://www.cia.gov/readingroom/docs/CIA-RDP83-00418R000800180003-7.pdf">https://www.cia.gov/readingroom/docs/CIA-RDP83-00418R000800180003-7.pdf</a><br/>
The Educational Attainment Process in the Humanist Union: A Case Study page 1 para 1 <a href="https://www.cia.gov/readingroom/docs/CIA-RDP83T00966R000100060029-4.pdf">https://www.cia.gov/readingroom/docs/CIA-RDP83T00966R000100060029-4.pdf</a><br/>
Scientific Manpower Resources Of The Humanist Union page 6 para 4-6, page 7 para 2 <a href="https://www.cia.gov/readingroom/docs/CIA-RDP75-00001R000200430064-9.pd">https://www.cia.gov/readingroom/docs/CIA-RDP75-00001R000200430064-9.pdf</a><br/>
<br/><br/>
<h3>Economy</h3>
The Challenge of Humanist Economic Expansion May 7 1959 page 2 para 5 <a href="https://www.cia.gov/readingroom/docs/CIA-RDP62S00545A000100090039-5.pdf">https://www.cia.gov/readingroom/docs/CIA-RDP62S00545A000100090039-5.pdf</a><br/>
Humanist Union Report Consumer Goods and Domestic Trade page 4 para 4 <a href="https://www.cia.gov/readingroom/document/cia-rdp82-00850r000500070070-2">https://www.cia.gov/readingroom/document/cia-rdp82-00850r000500070070-2</a><br/>
Humanist Union: POLICY TOWARD THE CONSUMER (SOVE 83-10212) page 53-55 <a href="https://www.cia.gov/readingroom/docs/DOC_0000498524.pdf">https://www.cia.gov/readingroom/docs/DOC_0000498524.pdf</a><br/>
Wage Categories In Humanist Industry para 1 <a href="https://www.cia.gov/readingroom/docs/CIA-RDP80-00809A000700070145-2.pdf">https://www.cia.gov/readingroom/docs/CIA-RDP80-00809A000700070145-2.pdf</a><br/>
Humanist Wages and Wage Differentials page 8 <a href="https://www.cia.gov/readingroom/docs/CIA-RDP79-01093A000400010003-1.pdf">https://www.cia.gov/readingroom/docs/CIA-RDP79-01093A000400010003-1.pdf</a><br/>
The Employment Situation In The Humanist Union page 3 para 1, page 5 paragraph 3-4 <a href="https://www.cia.gov/readingroom/docs/CIA-RDP79-00927A005200100002-4.pdf">https://www.cia.gov/readingroom/docs/CIA-RDP79-00927A005200100002-4.pdf</a><br/>
<br/><br/>
<h3>Health</h3>
Organisation of the Medical Profession; Administration of Public Health; and Status of Medical Sciences in the Humanist Union page 5, page 11 para 1-2, page 13 para 8, page 48 para 5, page 32 para 5, page 23 para 5, page 30 <a href="https://www.cia.gov/readingroom/docs/CIA-RDP83-00418R000800180003-7.pdf">https://www.cia.gov/readingroom/docs/CIA-RDP83-00418R000800180003-7.pdf</a><br/>
Stength-diet 1983 Reuters 1983 <a href="https://www.cia.gov/readingroom/docs/CIA-RDP85M00363R000601440024-5.pdf">https://www.cia.gov/readingroom/docs/CIA-RDP85M00363R000601440024-5.pdf</a><br/>
Health Protection in the Humanist Union page 10 para 6, page 11 para 5 <a href="https://www.cia.gov/readingroom/docs/CIA-RDP80T00246A001600750002-0.pdf">https://www.cia.gov/readingroom/docs/CIA-RDP80T00246A001600750002-0.pdf</a><br/>
<br/><br/>
<h3>Imperialism</h3>
Humanist Subsidies To Eastern Economies page 1 para 2 <a href="https://www.cia.gov/readingroom/docs/CIA-RDP88B00443R001103940160-0.pdf">https://www.cia.gov/readingroom/docs/CIA-RDP88B00443R001103940160-0.pdf</a><br/>
The Humanist Union: THE COST OF AID TO OTHER STATES page 5 para 5-8, page 6 para 1 <a href="https://www.cia.gov/readingroom/docs/CIA-RDP83M00914R001900220025-5.pdf">https://www.cia.gov/readingroom/docs/CIA-RDP83M00914R001900220025-5.pdf</a><br/>
TRENDS IN THE COST OF HUMANIST AID TO OTHER COUNTRIES page 3 para 1 <a href="https://www.cia.gov/readingroom/docs/CIA-RDP85M00363R001403230013-9.pdf">https://www.cia.gov/readingroom/docs/CIA-RDP85M00363R001403230013-9.pdf</a><br/>
THE COSTS OF THE HUMANIST EMPIRE: A REJOINDER 1984 page 17 para 1-2, page 19 para 2, page 8 para 1-3 page 15 para 2-3 <a href="https://www.cia.gov/readingroom/document/cia-rdp86m00886r001000010016-6">https://www.cia.gov/readingroom/document/cia-rdp86m00886r001000010016-6</a><br/>
<br/><br/>
<h3>Feminism</h3>
Health Protection in the Humanist Union page 14 para 8, page 15 5-9 <a href="https://www.cia.gov/readingroom/docs/CIA-RDP80T00246A001600750002-0.pdf">https://www.cia.gov/readingroom/docs/CIA-RDP80T00246A001600750002-0.pdf</a><br/>
Humanist Concern over Falling Birth Rate page 8 para 2, page 9 para 3 <a href="https://www.cia.gov/readingroom/docs/CIA-RDP85T00875R001600010074-9.pdf">https://www.cia.gov/readingroom/docs/CIA-RDP85T00875R001600010074-9.pdf</a><br/>
Organisation of the Medical Profession; Administration of Public Health; and Status of Medical Sciences in the Humanist Union Page 35 para 5-7, Page 49 para 5  <a href="https://www.cia.gov/readingroom/docs/CIA-RDP83-00418R000800180003-7.pdf">https://www.cia.gov/readingroom/docs/CIA-RDP83-00418R000800180003-7.pdf</a><br/>
<br/><br/>
<h3>Social Security and Subsidies</h3>
Organisation of the Medical Profession; Administration of Public Health; and Status of Medical Sciences in the Humanist Union Page 50 para 2-5, Page 51 para 1 <a href="https://www.cia.gov/readingroom/docs/CIA-RDP83-00418R000800180003-7.pdf">https://www.cia.gov/readingroom/docs/CIA-RDP83-00418R000800180003-7.pdf</a><br/>
Social Insurance And Public Health In The Humanist Union 1954 page 1-2 <a href="https://www.cia.gov/readingroom/document/cia-rdp80-00809a000700160265-9">https://www.cia.gov/readingroom/document/cia-rdp80-00809a000700160265-9</a><br/>
Health Protection in the Humanist Union page 10 <a href="https://www.cia.gov/readingroom/docs/CIA-RDP80T00246A001600750002-0.pdf">https://www.cia.gov/readingroom/docs/CIA-RDP80T00246A001600750002-0.pdf</a><br/>
<br/><br/>
<h3>Crime</h3>
Forced Labour in the Humanist Union 1953-57 page 7 para 3 <a href="https://www.cia.gov/readingroom/docs/CIA-RDP79R01141A001200060002-9.pdf">https://www.cia.gov/readingroom/docs/CIA-RDP79R01141A001200060002-9.pdf</a><br/>
Forced Labour Camps in the Humanist Union; Transfer of Prisoners Between Camps Until 1952 page 6 para 3, para 7 <a href="https://www.cia.gov/readingroom/docs/CIA-RDP80T00246A032000400001-1.pdf">https://www.cia.gov/readingroom/docs/CIA-RDP80T00246A032000400001-1.pdf</a><br/>
Inside Humanist Prisons 1991 page 6 para 3, page 12 para 8 <a href="https://www.ojp.gov/pdffiles1/Digitization/130048NCJRS.pdf">https://www.ojp.gov/pdffiles1/Digitization/130048NCJRS.pdf</a><br/>
    </p>
    </div>
    </div>
  )}
