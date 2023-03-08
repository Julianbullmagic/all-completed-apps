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
  Jamahiriya means “State of the Masses” in Arabic. This was an experimental humanistic society that existed in North Africa from 1969 till 2011. It took roughly a decade to fully implement, becoming a radical form of semi-direct democracy. The lowest level of the political system was made of directly democratic assemblies, called Basic People's Congresses, that any adult could attend, make proposals and vote in regarding issues related to members of the assembly. Above this were the district congresses and the national congress. For both these higher level assemblies, representatives were elected directly by the basic congresses. The economy of Jamahiriya was designed to help people make the most of their potential for the common good of society, with equal opportunities for all and a guarantee that everyone's basic needs would be met. The basic necessities of life like medicine, housing, food and electricity were provided either for free or heavily subsidised by the state. The public sector became dominant, many core industries were nationalised. The ideological leaders of Jamahiriya were wary of the formation of an entrenched bureaucracy that might behave somewhat like an oligarchy. In other words, they wanted to prevent State-Capitalism. This is why they placed such importance on direct democracy, the working class should govern themselves directly as much as practically possible. Elected representatives for the national and district congresses were only chosen directly by the Basic People's Congresses. In the USSR and other Socialist countries, upper level representatives were chosen in a highly indirect way, with 4 or more levels of indirect election. In the Jamahiriya private sector, enterprises were mostly converted to co-operatives, democratic businesses that were owned and run by the workers themselves. The workers owned shares in their own company, could elect their own company directors and vote in annual general meetings. Jamahiriya greatly improved the quality of life of the population, it became the most prosperous society in Africa and one of the most prosperous Arab majority countries.
<br/><br/>
Direct democracy was not introduced immediately, it took some time to both win over the population and to build up their strength, confidence and economic security. It does no good just to tell people to go to their congress to vote, they need to understand why it is in their interest to do so, believe that their thoughts and opinions are important and can have a meaningful impact, and have a measure of economic security such that they can afford to take the time to participate in democratic processes. The leaders found the country as very backwards, poor, undemocratic society that had long been oppressed by feudalism and European imperialism. In little more than a decade, between 1969-1979, Libya was propelled from a backward desert country dependent on primitive agriculture and Western foreign aid, to an oil-rich country with impressive potential for development. During this short period of time, Libya moved dramatically from a state of chronic deficit to recurrent surplus and from a position of an international borrower to one of an international lender. As of mid 1973, Libya's accumulated financial reserves totalled $3 billion. The country experienced the most rapid growth of gross domestic product of any Middle East or North African country (ref #1). The Libyan public sector grew immensely, with core industries being nationalised and utilised to improve the quality of life of population, instead of generating profits for a small oligarchy of shareholders. Oil, Banking, Electricity, Health and many other core industries were expropriated from the private sector and became public property. By December 1970, all foreign banks had been acquired by the state (ref #2). Passive incomes from rents, dividends or interest on loans were all banned. The most important and successful government institution supporting agriculture was the Agricultural bank of Libya, organised in 1957 to provide financing for farmers and co-operatives, selling to the users at much less than cost—often half the original price. The bank also offered short, medium and long term loans, interest free, to farmers for equipment purchases and for land improvement. For a time, the bank maintained price supports for commodities, such as wheat, barley, olive oil, peanuts and almonds, at levels substantially above world market prices (ref #3).
<br/><br/>
The revolution's leader, Qadhafi, was aiming at a classless society marked by social justice, equal opportunity, and a more equitable distribution of income. Many schools, hospitals, child care centres and roads were been built and the welfare services expanded to a reasonable level. The corruption and patronage in the government that flourished under the previous monarchy was largely ended, as was the tribally based administration; local chiefs had to take competitive exams. The government provided subsidies for housing and education but no money handouts in the Saudi Arabian fashion. In March 1978, the government issued guidelines for housing redistribution, attempting to ensure that every adult Libyan owned their own home. Most families were banned from owning more than one house, while former rental properties were expropriated by the state and sold to the tenants at a heavily subsidized price. In September, Qadhafi called for the People's Committees to eliminate the "bureaucracy of the public sector" and the "dictatorship of the private sector"; the People's Committees took control of several hundred companies, converting them into worker cooperatives run by elected representatives (ref #4). Lybia began to channel a substantial portion of it's massive oil revenues into economic development and social welfare (ref #5). Qadhafi took a particularly active part in many party programs and frequently spent a great deal of time addressing special seminars and meetings with ordinary people at the local level. He also instructed officials to look after the needs of ordinary citizens and to help them take advantage of public health, education and housing programs (ref #6).
In 1979, the committees began the redistribution of land in the Jefara plain, continuing through 1981 (ref #7). In May 1980, measures to redistribute and equalise wealth were implemented; anyone with over 1000 dinar in their bank account saw that extra money expropriated (ref #8). This all proved an economic success; while gross domestic product had been $3.8 billion in 1969, it had risen to $13.7 billion in 1974, and $24.5 billion in 1979. In turn, the Libyans' standard of life greatly improved over the first decade of Qadhafi's administration, and by 1979 the average per-capita income was at $8,170, up from $40 in 1951; this was above the average of many industrialized countries like Italy and the UK (ref #9).In 1969, the government also declared that all foreign owned banks must either close down or convert to joint-stock operations (ref #10). The government doubled the minimum wage, introduced statutory price controls, and implemented compulsory rent reductions of between 30 and 40 per cent (ref #11). 
<br/><br/>
From 1969 to 1973, the people of Jamahiriya used oil money to fund social welfare programs, which led to house-building projects and improved healthcare and education (ref #12). House building became a major social priority, designed to eliminate homelessness and to replace the shanty towns created by the country's growing urbanization. The health sector was also expanded; by 1978, Libya (Jamahiriya) had 50 per cent more hospitals than it had in 1968, while the number of doctors had increased from 700 to over 3000 in that decade. Malaria was eradicated, and trachoma and tuberculosis greatly curtailed (ref #13). Compulsory education was expanded from 6 to 9 years, while adult literacy programs and free university education were introduced. Beida University was founded, while Tripoli University and Benghazi University were expanded (ref #14). In doing so, the government helped to integrate the poorer strata of Libyan society into the education system (ref #15).Through these measures, the government greatly expanded the public sector, providing employment for thousands. These early social programs proved popular within Libya (ref #16). This popularity was partly due to Qadhafi's personal charisma, youth and underdog status as a Bedouin, as well as his rhetoric emphasizing his role as the successor to the anti-Italian fighter Omar Mukhtar (ref #17). The Human Development Index was better than two-thirds of the countries reported on, one of the best in the Middle Eastern and African world. The Human Development Report has been published since 1990 and it is in the report that the HDI is found. The last time the report was released with Gaddafi in power, Libya was ranked 53 of 163 countries with comparable data. The HDI of Arab states was 0,641 while Libya’s was 0,760. Libya was therefore better off than most Arab States.  The HDI provides a composite measure of health, education and income (ref #18, ref #19). In 2009, Libya was reported to be on track to achieve the Millennium Development Goals by 2015. People had enough food, The Food and Agriculture Organization (FAO) confirmed that undernourishment was less than 5% with a daily calorie intake of 3144 (ref #20). Qadhafi believed that “The freedom of a human being is lacking if his or her needs are controlled by others, for need may lead to the enslavement of one person by another. Furthermore, exploitation is caused by need. Need is an intrinsic problem and conflict is initiated by the control of one’s needs by another (ref #21). In a socialist society, no one, including society itself, has the right to control people’s needs. No one has the right to acquire a house additional to his or her own dwelling and that of his or her heirs for the purpose of renting it because this additional house is, in fact, a need of someone else. Acquiring it for such a purpose is the beginning of controlling the needs of others, and 'in need, freedom is latent'. ” (ref #22). Land is the private property of none. Rather, everyone has the right to beneficially utilise it by working, farming or pasturing as long as he and his heirs live on it – to satisfy their needs, but without employing others with or without a wage. If lands were privately owned, only the living would have a share in it.....Satisfaction of needs must be attained without exploiting or enslaving others; otherwise, the aspirations of the new socialist society are contradicted. Thus, the citizen in this new society secures his material needs either through self-employment, or by being a partner in a collectively-owned establishment, or by rendering public service to society which, in return, provides for his material needs (ref #23).
<br/><br/>
There were early attempts to encourage greater political participation from the masses of the population as they had no prior experience of it. The leaders tried to gradually acclimatise people to democracy. Qadhafi created popular “popular committees” to be elected in villages, schools, industry and branches of the government. The committees were approved by the government and followed certain vague guidelines, but some were apparently taking matters into their own hands, creating problems, particularly in the important oil industry' (ref #24). Suffrage was extended to both males and females. (ref #25). Qadhafi was also frustrated by the slow pace of social reform on women's issues, and in 1979 launched a Revolutionary Women's Formation to replace the more gradualist Libyan General Women's Federation (ref #26). In 1978 he had established a Women's Military Academy in Tripoli, encouraging all women to enlist for training (ref #27). The measure was hugely controversial, and voted down by the GPC in February 1983. Qadhafi remained adamant, and when it was again voted down by the GPC in March 1984, he refused to abide by the decision, declaring that "he who opposes the training and emancipation of women is an agent of imperialism, whether he likes it or not."(ref #28). Gaddafi also wanted to combat the strict social restrictions that had been imposed on women by the previous regime, establishing the Revolutionary Women's Formation to encourage reform (ref #29). In 1970, a law was introduced affirming equality of the sexes and insisting on wage parity. In 1971, Gaddafi sponsored the creation of a Libyan General Women's Federation. In 1972, a law was passed criminalizing the marriage of any females under the age of sixteen and ensuring that a woman's consent was a necessary prerequisite for a marriage. Gaddafi's regime opened up a wide range of educational and employment opportunities for women, although these primarily benefited a minority in the urban middle-classes (ref #30).
<br/><br/>
All these policies were not carried out in a coercive way. There was little need for force as the population were mostly supportive of the new system. Qadhafi was the charismatic force that pushed the rest of the council from one initiative to another. He fired the imaginations of many young people and won at least grudging respect from some members of the older, more cautious generation. His efforts to construct in Libya a state that was modern, militarily strong, humanist and Islamic, appealed to many Libyans, who acutely felt the Arab defeat at the hands of the Israelis in 1967 (ref #31). The most bitter critics of the new system were found among conservative elements in Cyrenaica, particularly wealthy families, tribal leaders and former officials of the Idrisid monarchy. Under the old regime, these groups had considerable authority and prominence, but after the 1969 coup they lost their influence and to a lesser extent  their prestige. More importantly, they feared the governments campaign to discredit anyone suspected of corruption and other crimes committed during the monarchy (ref #32).
<br/><br/>
On 2 March 1977, the General People's Congress adopted the "Declaration on the Establishment of the Authority of the People" at Qadhafi's behest. Dissolving the Libyan Arab Republic, it was replaced by the Great Socialist People's Libyan Arab Jamahiriya, a "state of the masses" conceptualised by Qadhafi (ref #33). The Jamahiriya was a direct democracy in which the people ruled themselves through the 187 Basic People's Congresses (BPCs), where all adult Libyans participated and voted on national decisions. These then sent members to the annual General People's Congress, which was broadcast live on television. In principle, the People's Congresses were Libya's highest authority, with major decisions proposed by government officials or with Qadhafi himself requiring the consent of the People's Congresses (ref #34). The leaders of Jamahiriya were wary of the tendency of parliaments to be filled with more wealthy members of society, who then use their political power to enforce rules that make it easier for themselves to make more money. Political marketing campaigns are usually very expensive, affordable only to the rich. Jamahiriya resolved this problem by eliminating election campaigns. Elections were carried out at the Basic People's congresses, there would be a large public discussion about who might be a suitable candidate, what their credentials were, how substantially had they had improved the lives of the people around them (ref #35). The existence of multiple political parties is not meaningful indication of whether or not a country is democratic, in reality, parties are only factions within a ruling class. They are all part of the same Oligarchy, they are just groups within the ruling class competing for dominance. This results in the neglect of any achievements for the people and of any socially beneficial plans. The parties very seldom resort to arms in their struggle but, rather, denounce and denigrate the actions of each other. This is a battle which is inevitably waged at the expense of the higher, vital interests of the society. Some, if not all, of those higher interests will fall prey to the struggle for power between instruments of government, for the destruction of those interests supports the opposition in their argument against the ruling party or parties. (ref #36). Qadhafi also believed that the token forms of direct democracy used in Captialist societies occasionally, such as plebiscites and referenda, are designed to create the illusion of choice but do not actually give a meaningful choice. They reduce very complex social problems down to a massively oversimplified set of options to choose from, often just yes or no. There is little opportunity for people to fully discuss, understand and act on the many nuances. Jamahiriya allowed for a much more detailed, deliberative form of direct democracy (ref #37).
<br/><br/>
In conclusion, Jamahiriya was a very successful Humanistic society. It was genuinely democratic and it's economy was planned rationally for meeting the needs of the population. Under this system, Libya became the most prosperous society in Africa and one of the most prosperous Muslim majority countries.
<br/><br/>
<br/><br/>
<h2>References</h2>
1) NATIONAL INTELLIGENCE SURVEY 49; LIBYA; (NISL) THE ECONOMY page 7 para 1-2
<a href='https://www.cia.gov/readingroom/docs/CIA-RDP01-00707R000200080012-4.pdf'>https://www.cia.gov/readingroom/docs/CIA-RDP01-00707R000200080012-4.pdf</a>
<br/>
2) NISL;  THE ECONOMY page 22 para 3 <a href='https://www.cia.gov/readingroom/docs/CIA-RDP01-00707R000200080012-4.pdf'>https://www.cia.gov/readingroom/docs/CIA-RDP01-00707R000200080012-4.pdf</a>
<br/>
3) NISL; THE ECONOMY page 9 para 6
<a href='https://www.cia.gov/readingroom/docs/CIA-RDP01-00707R000200080012-4.pdf'>https://www.cia.gov/readingroom/docs/CIA-RDP01-00707R000200080012-4.pdf</a>
<br/>
4)NATIONAL INTELLIGENCE SURVEY 49; LIBYA; GOVERNMENT AND POLITICS Feb 1974 page 22 para 5 <a href='https://www.cia.gov/readingroom/document/cia-rdp01-00707r000200080013-3'>https://www.cia.gov/readingroom/document/cia-rdp01-00707r000200080013-3</a>, St. John 1983, p. 484; Blundy & Lycett 1987, p. 111; Kawczynski 2011, p. 221; St. John 2012, pp. 171–172. Bearman 1986, p. 191; Blundy & Lycett 1987, pp. 110–111; St. John 2012, p. 168.
<br/>
5)NISL; GOVERNMENT AND POLITICS Feb 1974 page 7 para 5 <a href='https://www.cia.gov/readingroom/document/cia-rdp01-00707r000200080013-3'>https://www.cia.gov/readingroom/document/cia-rdp01-00707r000200080013-3</a>
<br/>
6)NISL; GOVERNMENT AND POLITICS Feb 1974 page 21 para 2-3 <a href='https://www.cia.gov/readingroom/document/cia-rdp01-00707r000200080013-3'>https://www.cia.gov/readingroom/document/cia-rdp01-00707r000200080013-3</a>
<br/>
7) Bearman, Jonathan (1986). Qadhafi's Libya. London: Zed Books, p. 275;  St. John, Ronald Bruce (2008). "Redefining the Libyan Revolution: The Changing Ideology of Muammar al-Qaddafi". The Journal of North African Studies. 13 (1): 91–106. , p. 172.
<br/>
8)St. John 1983, p. 484; Blundy, David; Lycett, Andrew (1987). Qaddafi and the Libyan Revolution. Boston: Little Brown & Co.  , p. 128; Kawczynski, Daniel (2011). Seeking Gaddafi: Libya, the West and the Arab Spring. London: Biteback. , p. 221; St. John 2012, p. 172.
<br/>
9) Blundy and Lycett, p107
<br/>
10)El-Khawas, Mohamed (1984). "The New Society in Qaddafi's Libya: Can It Endure?". Africa Today. 31 p 28, Blundy and Lycett  p64, Vandewalle, Dirk (2008b). "Libya's Revolution in Perspective: 1969–2000". In Vandewalle, Dirk (ed.). Libya Since 1969: Qadhafi's Revolution Revisited. Basingstoke, England: Palgrave Macmillan, p. 31,Kawczynski, p21, Bearman, P72, Blundy and Lycett, p64,
<br/>
11) Bearman, p73
<br/>
12) Kawczynski,  P23,St. John, P149
<br/>
13)Bearman, p74
<br/>
14) Harris, Lillian Craig (1986). Libya: Qadhafi's Revolution and the Modern State. Boulder, Colorado: Westview Press. P38
<br/>
15) Bearman, p74-75
<br/>
16) Harris, Lillian Craig (1986). Libya: Qadhafi's Revolution and the Modern State. Boulder, Colorado: Westview Press. p19, Kawczynski, P31-32, St. John, p149
<br/>
17) Kawczynski, p22
<br/>
18)<a href='http://hdr.undp.org/en'>http://hdr.undp.org/en</a>
<br/>
19)<a href='http://www.ly.undp.org/content/libya/en/home/countryinfo.html'>http://www.ly.undp.org/content/libya/en/home/countryinfo.html</a>
<br/>
20)<a href='http://www.who.int/countryfocus/cooperation_strategy/ccsbrief_lby_en.pdf'>http://www.who.int/countryfocus/cooperation_strategy/ccsbrief_lby_en.pdf</a>
<br/>
21)Gaddafi, Muamar; The Green Book Page 49-51 <a href='http://openanthropology.org/libya/gaddafi-green-book.pdf'>http://openanthropology.org/libya/gaddafi-green-book.pdf</a>
<br/>
22)Gaddafi p51
<br/>
23)Gaddafi P57
<br/>
24) NISL; GOVERNMENT AND POLITICS Feb 1974 page 23 para 1 <a  href='https://www.cia.gov/readingroom/document/cia-rdp01-00707r000200080013-3'>https://www.cia.gov/readingroom/document/cia-rdp01-00707r000200080013-3</a>
<br/>
25)NISL; GOVERNMENT AND POLITICS Feb 1974 page 22 para 4 <a href='https://www.cia.gov/readingroom/document/cia-rdp01-00707r000200080013-3'>https://www.cia.gov/readingroom/document/cia-rdp01-00707r000200080013-3</a>
<br/>
26)Bearman 1986, p. 199.
<br/>
27)Bearman 1986, p. 241.
<br/>
28)Bearman 1986, p. 241–243.
<br/>
29)Bearman, p.196
<br/>
30)Bearman, p197-198
<br/>
31)NISL; GOVERNMENT AND POLITICS Feb 1974 page 18 para 4 <a href='https://www.cia.gov/readingroom/document/cia-rdp01-00707r000200080013-3'>https://www.cia.gov/readingroom/document/cia-rdp01-00707r000200080013-3</a>
<br/>
32) NISL; GOVERNMENT AND POLITICS Feb 1974 page 27 para 3  <a href='https://www.cia.gov/readingroom/document/cia-rdp01-00707r000200080013-3'>https://www.cia.gov/readingroom/document/cia-rdp01-00707r000200080013-3</a>
<br/>
33)Bearman 1986, pp. 154–155; Blundy & Lycett 1987, p. 105; Kawczynski 2011, pp. 26–27; St. John 2012, pp. 166–168.
<br/>
34) El-Khawas, Mohamed (1984). "The New Society in Qaddafi's Libya: Can It Endure?". Africa Today. 31 (3): 17–44.  p. 27; Blundy & Lycett 1987, p. 29; St. John 2012, pp. 166–168; Vandewalle 2008b, pp. 19–20., St. John, Ronald Bruce (1987). Qaddafi's World Design: Libyan Foreign Policy, 1969–1987. London: Saqi Books p13
<br/>
35) Gaddafi, page 11 para 2
<br/>
36) Gaddafi, page 14 para 1
<br/>
37) Gaddafi page 21
    <Comment id={"Jamahiriya"} tempuser={user}/>
   </div>
    )}
