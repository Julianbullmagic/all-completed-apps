import React, {useRef,useState,useEffect} from 'react'
import Comment from './ArticleComment'
import ip from 'ip-in';

export default function Ujamaa() {
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
    let pagecounter=await fetch("/groups/addtopagecounter/ujamaa", options
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
    <h1 style={{textAlign:"center"}}>Ujamaa</h1>
    <div className="vids" style={{bottom:"4%"}}>
  <iframe className="iframeleft" src={"https://www.youtube.com/embed/1t9gJd9p5ZM"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <iframe className="iframeright" src={"https://www.youtube.com/embed/8IYbv0bW43w"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
    <p style={{textAlign:"center"}}>
    Ujamaa was a successful experiment in Humanism that existed in Tanzania from the mid 1960s to mid 1980s. It eventually collapsed due to extraneous circumstances. Ujamaa was an attempt to create a classless society where authority was grounded in knowledge and wisdom rather than wealth and power. The Tanzanian government enforced substantial measures to prevent the corrupting influence of money over politics, they also strongly encouraged the  political participation of the masses. Key industries, national resources and land were nationalised for the common good of society and private enterprises were converted into democratic co-operatives where workers could elect their own company directors and vote in general meetings about issues effecting the company. Traditional Tanzanian society was already largely classless prior to the European invasion, with most people living in small, highly egalitarian village farming communities. The Ujamaa government aimed to build on this while modernising, developing and growing the economy to strengthen Tanzanian and make the population more wealthy. By many statistical indicators, Ujamaa was highly successful, it substantially improved the life expectancy, education and literacy rates and gdp per capita.
    <br/><br/>
    During the Ujamaa period, the Tanzanian government enforced a variety of new restrictions on political leaders that helped to ensure genuine meritocracy and that the wealthy could not simply buy themselves power. In 1967 the leaders delivered the Arusha declaration, a statement of the principles and goals of Ujamaa. This laid out a set of rules to ensure genuinely working class leadership, no elected official could earn income from anything other than their labour (ref #1). They were required by law to divest themselves of all outside business interests- shares and directorships in privately owned companies, rental properties and extra salaries – or resign. Nearly 13000 elected officials and civil servants were forced to comply with these rules (ref #2). During the collapse of British colonial rule, the Tanganyika African National Union (TANU) was a party that was led by Julius Nyerere and constituted mostly of a peasantry population. TANU was able to create a village-organized political structure that facilitated localisation in political representation. This allowed TANU to grow in party support from 100,000 to 1,000,000 million people within only five years (ref#3). In 1960, many of the native representative leadership organisations were beginning to become responsible for administrative obligations on the colony. These organisations were established in smaller local villages to provide limited representation during the colonialist regime. These localized forms of governmental power improved the attendance of village representation. In fact, village representation and attendance at monthly meetings increased to 75% during this time.  The single party system Nyerere founded under the Tanzania African National Union (TANU) was hardly undemocratic, since open debate and competitive candidacies were permitted. Nor did Tanzania experience the pervasive corruption of so many post-independence African states.
    TANU was able to integrate various labor and agricultural cooperatives onto their party to ensure representation of the working class population of the soon to become independent nation. The party leaders would stay in touch with local village leaders (most often the elders of the village) by taking trips known as "Safaris" and discussing issues particular to the community. Once borders became established, individuals were elected to represent the district. As Gerrit Huizer suggests, these elected officials were known as "Cell Boundary Commissions".  The particular function of the Cell Leader was to not only represent issues of the village or district to the higher political body, but to explain to the local population, the legislation formed by the Tanganyika African National Union (ref #4). Ujamaa villages were constructed in particular ways to emphasize community and economic self-reliance. The village was structured with homes in the center in rows with a school and a town hall as the center complex. These villages were surrounded by larger communal agricultural farms.  Each individual household was given about an acre or so of land to be able to harvest individual crops for their own families; however, the surrounding farm lands were created to serve as economic stimulants as structures of production (ref #5). The families in these villages would work together for their common good, the produce of the farm was jointly owned by them. The activities of the village, and the type of production they undertook, as well as the distribution of crops and other goods, were all determined by the villagers themselves (ref #6).
    <br/><br/>
    These improvements to the political system resulted in some very humanistic policies. The Arusha declaration called on the government to take several steps: 1) to consolidate control over the 'major means of production'; 2) to prepare development plans the country could carry out without being overly dependent on foreign loans and grants; 3) to ensure that incomes in the private and public sectors were on a par; and 4) to improve the living standards of the peasantry (ref #7) The first of these objectives was accomplished easily. The day after the declaration was announced, Nyerere nationalised foreign-owned commercial banks, import-export firms, and insurance companies and took over the largest industries and agricultural estates. The government managed these enterprises fairly well. All land was nationalised, a measure that was not offensive or unusual for Tanzanian people considering communal ownership of land was traditional and had occurred for most of the history of the country. In tribal tradition an individual or family secured rights in land for as long as they were using it. It became the family land when it was cleared and planted; for the rest of the time it was tribal land, and it reverted to tribal land if the family stopped working it"(ref #8). The government implementation of free and compulsory education for all Tanzanians in order to sensitize them to the principles of Ujamaa.
    Tanu also sought to create a Tanzanian rather than tribal identity through means such as the use of Swahili (ref #9).
    <br/><br/>
    Tanzania's humanistic system brought substantial measurable improvements to the quality of life of the population. As the Ujamaa villages developed, Tanzania achieved the highest literacy rate in Africa (83%) and also experienced major advances in health care (ref #10). Infant mortality was reduced from 138 per 1000 live births in 1965 to 110 in 1985; life expectancy at birth rose from 37 in 1960 to 52 in 1984; primary school enrollment was raised from 25% of age group (only 16% of females) in 1960 to 72% (85% of females) in 1985 (despite the rapidly increasing population); the adult literacy rate rose from 17% in 1960 to 63% by 1975 (much higher than in other African countries) and continued to rise (ref #11, ref #12, ref #13). Ujamaa brought relatively strong economic growth and poverty alleviation to Tanzania. Australia averaged 3% growth in Gross Domestic Product (GDP) per annum in 1970s. GDP per capita rose on average 12.36% per year. In Tanzania these figures were 3.74% p.a and 10.77%pa (ref #14, ref #15).
    <br/><br/>
    Ujamaa eventually came to an end in the mid 1980s. This resulted from a series of misfortunes and miscalculations that buffeted the country from the late 1970s onwards. Global recession, high oil import prices, Tanzania's military intervention in Uganda, the collapse of export commodity prices (particularly coffee and sisal), a lack of foreign direct investment, two successive droughts, poor crop yields because of drought, and frictions with the international monetary Fund and other aid donors over ill-conceived domestic polices have combined to reduce sharply real economic growth and create substantial current account deficits (ref #16). In 1979, Tanzania sent troops to help Ugandans to liberate their country from the murderous Idi Amin dictatorship. Of course, wars entail enormous economic costs (ref #17). Another issue that created friction in the success of Ujamaa was the importance of self-reliance during a time of neo-liberal international economic policies. These international economic policies made it particularly difficult for newly independent countries such as Tanzania to be able to grow even with the mentality of self-propagated economic production (ref #18).
    <br/><br/>
    On the whole, Ujamaa was a successful experiment in Humanism that substantially improved the lives of the population. It involved a much less corrupt political system and much more direct political participation on the part of the workers in the central government, but also in economic enterprises. Elected representatives were themselves working class people and served the interests of their class very well. Ujamaa brought large improvements to the standards of health, education and reductions in poverty and economic inequality.
    <br/><br/>
    <br/><br/>
    <div style={{textAlign:"left"}}>
    <h2>References</h2>
    1) The Arusha Declaration 1967 <a href="https://www.marxists.org/subject/africa/nyerere/1967/arusha-declaration.htm">https://www.marxists.org/subject/africa/nyerere/1967/arusha-declaration.htm</a>
    2) WEEKLY SUMMARY SPECIAL REPORT NYERERE'S PLANS FOR TANZANIA Page 3 para 6 <a href="https://www.cia.gov/readingroom/docs/CIA-RDP85T00875R001500020003-7.pdf">https://www.cia.gov/readingroom/docs/CIA-RDP85T00875R001500020003-7.pdf</a>
    3) Huizer, Gerrit (June 1973). "Theujamaa village program in tanzania: new forms of rural development". Studies in Comparative International Development. 8 (2): 186. doi:10.1007/bf02810000. ISSN 0039-3606. S2CID 79510406
    4)  Huizer, Gerrit (June 1973). "Theujamaa village program in tanzania: new forms of rural development". Studies in Comparative International Development. 8 (2): 189. doi:10.1007/bf02810000. ISSN 0039-3606. S2CID 79510406
    5)ABRAHAM, P.; ROBINSON, F..Rural development in Tanzania : a review of Ujamaa (English). Studies in employment & rural development series,no. SER 14 Washington, D.C. : World Bank Group. page 4 para 5 http://documents.worldbank.org/curated/en/797601468313489636/Rural-development-in-Tanzania-a-review-of-Ujamaa
    6) Huizer, Gerrit (June 1973). "Theujamaa village program in tanzania: new forms of rural development". Studies in Comparative International Development. 8 (2): 192. doi:10.1007/bf02810000. ISSN 0039-3606. S2CID 79510406.
    7) WEEKLY SUMMARY SPECIAL REPORT NYERERE'S PLANS FOR TANZANIA Page 3 para 4-6 <a href="https://www.cia.gov/readingroom/docs/CIA-RDP85T00875R001500020003-7.pdf">https://www.cia.gov/readingroom/docs/CIA-RDP85T00875R001500020003-7.pdf</a>
    8) UJAMAA:ESSAYS ON SOCIALISM,  Julius Kambarage Nyerere  1971 pp. 84-85.
    9) Pratt, Cranford (1999). "Julius Nyerere: Reflections on the Legacy of his Socialism". Canadian Journal of African Studies. 33 (1): 137–52. doi:10.2307/486390. JSTOR 486390
    10) Julius Nyerere African Socialist Para 6 <a href="https://libcom.org/article/julius-nyerere-african-socialist">https://libcom.org/article/julius-nyerere-african-socialist</a>
    11) Colin Legum, G. R. V. Mmari (1995). Mwalimu: the influence of Nyerere. ISBN 9780852553862.
    12) Martin Plaut, "Africa's bright future", BBC News Magazine, 2 November 2012
    13) Julius Nyerere African Socialist Para 9 <a href="https://libcom.org/article/julius-nyerere-african-socialist">https://libcom.org/article/julius-nyerere-african-socialist</a>
    14) <a href="https://countryeconomy.com/gdp/tanzania">https://countryeconomy.com/gdp/tanzania</a>
    15) <a href="https://countryeconomy.com/gdp/australia">https://countryeconomy.com/gdp/australia</a>
    16) NYERERE AND BEYOND, Page 4 para 2 <a href="https://www.cia.gov/readingroom/docs/CIA-RDP83S00855R000200020006-6.pdf">https://www.cia.gov/readingroom/docs/CIA-RDP83S00855R000200020006-6.pdf</a>
    17) Julius Nyerere African Socialist Para 10 <a href="https://libcom.org/article/julius-nyerere-african-socialist">https://libcom.org/article/julius-nyerere-african-socialist</a>
    18)  Ergas, Zaki (1980). "Why Did the Ujamaa Village Policy Fail? - Towards a Global Analysis". The Journal of Modern African Studies. 18 (3): 387–410. doi:10.1017/S0022278X00011575. ISSN 0022-278X. JSTOR 160361. S2CID 154537221)
    </div>
    <Comment id={"Ujamaa"} tempuser={user}/>
    </p>
      </div>
    )}
