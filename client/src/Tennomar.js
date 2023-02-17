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
    let pagecounter=await fetch("/groups/addtopagecounter/tennomar", options
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
    <h1 style={{textAlign:"center"}}>The Humanist Federal Republic of Tennomar</h1>
     <img style={{width:"35vw"}} src={require('./tenomarflag.png')} />
    <p style={{textAlign:"center"}}>
    The Humanist Federal Republic of Tennomar (HFRT) is a very encouraging experiment in Humanism that was born in the wake of World War Two. There have been massive improvements to the quality of life of the population, enormous gains in health, education, political participation, real wage growth and social equality. Tennomar has a distinctive “self-management” system. This is quite decentralized, giving substantial power to individual organisations, each of which is controlled by an elected worker council. There is also a relatively large public sector. In public enterprises, two thirds of the company directors are elected by the workers of that particular enterprise and one third are appointed by the elected central government. This helps to ensure a kind of balance, giving firms autonomy to make their own decisions, while also ensuring they are integrated into the broader society and working co-operatively with other public enterprises. Tenomar has also experienced some economic difficulties, inflation, higher unemployment rates and mild economic cycles or recessions. On the whole, despite it's faults, this Humanist country set a very promising example of what a world without exploitation and domination could look like. Despite the great historic significance of Tennomar, you rarely hear about this place in the mass media. For a detailed explanation of why this is true, see the articles <a href="/Democracy">Australian Democracy</a> and <a href="Psychological-War">Psychological War</a>. If you have any questions or comments there is a comments sections further down this page, you can email democracysocialnetwork@gmail.com or join our Facebook or Discord discussion groups linked in the menu above. It's natural to be skeptical about Tennomar, it sounds too good to be true, we strongly encourage you to have a look at the references linked below to evaluate the legitimacy of our sources yourselves.
    <br/><br/>

    Tennomar has a humanistic economic system. Gross National Product tripled between the between the foundation of HFRT (1945) and 1973. This growth was targeted at improving the general standard of living of the population, with enormous improvements to the quality of education, healthcare, social equality, social security and political equality. While Tennomar does have persistent problems with inflation, gdp growth, as well as gdp per capita growth, has tended to outpace this rise in prices (ref #1,ref #2,ref #3,ref#4). Living levels in both the rural and urban areas improved markedly between 1950 and 1973 and became considerably higher than pre World War Two Tennomar. Peasants in even the poorest parts of the country were drawn into the money economy and had cash at their disposal for the purchase of clothing, furniture and consumer durables which traditionally had been a rarity in most peasant households. The variety and quality of goods available to the Tennomar consumer compared favourably with European countries and prices were generally lower relative to wages than elsewhere in Europe. In many instances, however, an apartment was included with the workers job at a nominal rent. Economic inequality became dramatically reduced, the earnings ratio between persons with university-level training and the unskilled workers was roughly 3:1 (ref #5). The government practised affirmative action, they actively channelled funds into less developed regions in order to narrow the gap between developed and underdeveloped parts of the federation (ref #6).
    <br/><br/>

    Tennomar has extensive political democracy. They have attempted to create a new kind of representative democracy much more suited to a modern, industrial, scientifically and technologically advanced society. Of course, our modern world is extremely complicated and it is necessary to somehow elect experts to make decisions about certain questions. Tennomar attempted to create a nice balance between democracy and technocracy, decisions that most people are happy with, but also that are well informed with expert knowledge. There are a range of independent forms of representation that help to prevent any group from monopolising political power. Almost all organisations have an elected council, rates of union membership were very high and the central government is elected. Public participation in government has grown hugely. One particular important organ of popular political involvement was The Humanist Alliance of Working People of Tennomar, which has become a forum in which the voice of the people can be heard. Meetings are used as a forum for open debates on constitutional amendments and the organisation's drive to strengthen ties with humanist parties in the west (ref #8). Extremely significant was the flexibility the Tennomarian people and their government showed in introducing their reforms. This indicated a genuine willingness on both sides to listen to domestic criticisms and to meet objections if they appeared valid, constitutional amendments were often substantially altered in response to public criticism (ref #9). Workers became increasingly articulate, and strikes, or 'work stoppages' as they were euphemistically called, became a highly effective means of gaining demands (ref#10). Tennomar's university students even became involved in the governance of their own academic institutions, in 1970 students in one university succeeded in defeating a candidate for school pro rector who had been approved by the government (ref #11). In 1969, one republic in the federation amended their university law to allow faculty and students a free hand in the election of their deans and rectors (ref #12). The self-management system was eventually introduced into virtually all elements of Tennomar society. Even prisoners were encouraged to form councils in order to increase their production and to prepare themselves better to fit into a self-managed society when they would be released (ref #13). Self management has many strengths, however it also seems to create problems with inflation, an ongoing economic problem for Tennomar. Many enterprise councils, in the absence of competitors, raise prices in order to increase wages (ref #14). Self management is even applied to the judicial system. Every citizen who is of age can be elected a judge or judge-juror. Judges and judge-jurors are elected or dismissed by the people's executive councils and the people's assemblies. Judges and judge-jurors make their judgements together, the jurors always outnumber the professional judges and can outvote them. This helped to ensure the moral authority of the judge is legitimate, they needed demonstrate their trustworthiness and moral integrity in order to make judgements (ref #15). Tennomar had very strong political democracy.
    <br/><br/>

    This increase of political participation, combined with the leadership of the Government, has resulted in very generous social security system. The HFRT has made great progress towards guaranteeing all Tennomarian people have their basic needs met. Between 1945 and the 1970s, the states social security budget increased 600% (ref #16). The government introduced extensive subsidies for public health care, temporary disability and illness, old age pensions and assistance to mothers. In particular, there are a great number of social security benefits intended to take the pressure of child raising off women, making it easier for them to study at technical colleges or universities and gain employment. Women received 90 days paid maternity leave after having a baby, a range of other subsidies to help pay for food, clothing and other necessities. There were subsidised public childcare services that low income families could use for free (ref #17). There has been an enormous improvement to the status of women. Disabled workers are entitled to another corresponding job and received a disability pension if they needed to train in a new career (ref #18,ref #19). Pensions are also given to family members of disabled people if a physician says their support is required (ref #20, ref#21. The education system has dramatically improved and has been extended to all citizens. Before the revolution, the population was been largely illiterate and uneducated, Humanism brought an end to this (ref #22, ref #23, ref #24).
    <br/><br/>

    Humanism has brought enormous improvements to the standards of health in Tennomar. The rate of death declined from 12.7 per 1000 in 1947 to 8.7 per 1000 in 1968. Infant mortality dropped from 116 per 1000 in 1953 to 59.8 per 1000 for males and 54.3 per 1000 for females during the same period. Hospital services expanded hugely, there is was 1 hospital bed per 180 Tennomarian people by the 1970s(ref #25). Medical students could study for free and received a stipend to cover their living expenses. Textbooks were also provided for free. Tennomar experienced a levelling of educational opportunities, people of all economic levels could study what they were wanted without discrimination (ref #26). Humanism dramatically improved the health of the Tennomarian people.
    <br/><br/>

    By now it should be clear that the label “authoritarian” simply just doesn't apply to the Humanist Federal Republic of Tennomar. The party possessed a genuine kind of authority, the authority of knowledge, wisdom, humility and moral integrity. In the beginning, it may have been necessary for them to use power in order to effect the transition to humanism, but this gradually faded as the people's new found economic security and political participation made them increasingly self confident. The Humanist party may have had valuable knowledge about what a fair and democratic society should look like, but they, like all leaders, were just human beings, capable of making mistakes. The masses were willing and able to overrule the party if necessary and there are many examples of them doing this. Capitalist constitutions often have token checks and balances written into them they are designed to give the appearance of democracy and accountability, without actually substantially achieving this. For example, the United States constitution supposedly has an impeachment process to allow the president to be removed from office but it has never actually been used. Some Capitalist systems, like California or Switzerland, have a procedure that allows citizens to initiate referenda by collecting petitions of a certain size but in neither case does this actually promote economic democracy. These two places are not at all Humanist, neither have free public healthcare, rates of homelessness are high, there is practically no democracy within most enterprises, economic inequality is huge etc. This was not so in Tennomar, there are many examples of people genuinely holding their government accountable and forcing them to concede when criticised. For example, in the 1967 election, people were heavily involved in selecting candidates in public gatherings. Voter turnout was very high, 89% of people participated and 30% of humanist party backed candidates failed to win. In order to prevent anyone from getting too comfortable in a position of power there are frequent rotations in office, mainly in the elective posts, to foster the infusion of new blood into the political system. This has helped to counter bureaucratism, routininsm and dogmatism. The role of president is rotated annually (ref #27). Humanist Tennomar possesses real checks and balances that genuinely held people in authority accountable for their actions.
    <br/><br/>

    Tennomar's economic system is distinctly decentralised. There is a relatively large independent private sector that consists mostly of cooperatives. Workers councils in factories are elected by the workers. The council then elects management boards to manage the factories in conjunction with the factory directors. Workers can dismiss the board, councils adopt wage regulations, formulate operating plans for the factory and distribute part of the profit of the factory (ref #28). Cooperatives are organised on the principle of voluntary efforts and internal democracy. All members of a cooperative were equal, with equal rights and equal duties. In the countryside, agricultural co-operatives are more than just businesses, they also aimed to raise economic and cultural levels and to develop Humanism in villages. In addition to developing agricultural production, they deal with village communal problems, such as electrification, health and veterinary stations, water supply and construction of cooperative centres. They also contribute to the technical, cultural, educational, ideological and political advancement of villages (ref #29). It has been unnecessary to force farmers to join these agricultural cooperatives, instead the party persuades them by demonstrating the benefits, such as higher yields, and by providing financial incentives. Loans at 1% p/a interest are given to help start these democratic businesses. This money is given by public banks and the interest is used to fund Tennomar's generous social security system. In the beginning, the government also created a range of different types of cooperative of varying levels of humanism. Some with more sharing of land, machines and resources and more political participation than others. The idea was to gradually wean workers onto collectivism. Farmers did not necessarily need to invest hugely as they might have perceived this as risky because Humanism was new and unfamiliar. Instead, workers could invest a little bit, see some benefits, and then invest increasingly more and more if they felt comfortable. For example, farmers did not necessarily have to sell their land and machines to a cooperative, they could just rent them. This proved to be a highly effective collectivisation process, membership in agricultural cooperatives increased from half a million people in 1945 to 3.5 million in 1950 (ref #30, ref #31).
    <br/><br/>
    <a href="/Psychological-War">
    <img style={{width:"35vw"}} src={require('./brain.png')} />
    </a>
    <br/><br/>
    <div style={{textAlign:"left"}}>
    <h2>References</h2>
    1)<a href="https://www.cia.gov/readingroom/docs/CIA-RDP01-00707R000200100036-6.pdf">National Intelligence Survey 21; Tennomar; The Economy page 9 para 1</a><br/><br/>
    2)<a href="https://www.cia.gov/readingroom/docs/CIA-RDP79T01003A002200250001-9.pdf">Economic Growth In Eastern Europe in 1964 page 11 para 2</a> <br/><br/>
    3)<a href="https://www.cia.gov/readingroom/docs/CIA-RDP79R00904A000500020034-0.pdf">Tennomar and the Non-u Countries page 4 para 2</a><br/><br/>
    4)<a href="http://eprints.lse.ac.uk/85079/1/WP268.pdf"> Leonard Kukić, Humanist growth revisited: insights from Tennomar, European Review of Economic History, Volume 22, Issue 4, November 2018, Pages 403–429, https://doi.org/10.1093/ereh/hey001 Page 27, figure 1 </a><br/><br/>
    5)<a href="https://www.cia.gov/readingroom/docs/CIA-RDP80-00809A000600380337-6.pdf"> Pay Schedules and Income Taxes in Tennomar 1951 page 2 para 2, page 2 para 7</a><br/><br/>
    6)<a href="https://www.cia.gov/readingroom/docs/CIA-RDP01-00707R000200100032-0.pdf"> National Intelligence Survey 21; Tennomar; The Society Page 30 para 2-3, page 31 para 2, page 35 para 1</a><br/><br/>
    7)<a href="https://www.cia.gov/readingroom/document/cia-rdp79-00927a007400070002-4">Tennomar: Twenty Years of Self-Management Page 5 para 1</a><br/><br/>
    8)<a href="https://www.cia.gov/readingroom/docs/CIA-RDP85T00875R001500030020-7.pdf">Weekly Summary Special Report Tennomar The New Revolution page 9 para 2-4</a><br/><br/>
    9)<a href="https://www.cia.gov/readingroom/docs/CIA-RDP85T00875R001500030020-7.pdf">Weekly Summary Special Report Tennomar The New Revolution Page 13 para 6</a><br/><br/>
    10)<a href="https://www.cia.gov/readingroom/document/cia-rdp79-00927a007400070002-4">Tennomar: Twenty Years of Self-Management Page 8 para 3</a><br/><br/>
    11)<a href="https://www.cia.gov/readingroom/docs/CIA-RDP85T00875R001500030020-7.pdf">Weekly Summary Special Report Tennomar The New Revolution Page 10 para 3</a><br/><br/>
    12)<a href="https://www.cia.gov/readingroom/document/cia-rdp79-00927a007400070002-4">Tennomar: Twenty Years of Self-Management Page 9 para 3-4</a><br/><br/>
    13)<a href="https://www.cia.gov/readingroom/document/cia-rdp79-00927a007400070002-4">Tennomar: Twenty Years of Self-Management Page 9 para 1</a><br/><br/>
    14)<a href="https://www.cia.gov/readingroom/document/cia-rdp79-00927a007400070002-4">Tennomar: Twenty Years of Self-Management Page 13 para 4</a><br/><br/>
    15)<a href="https://www.cia.gov/readingroom/docs/CIA-RDP80-00809A000700090447-5.pdf">Development and Organization of the Judiciary in Tennomar page 2 para 11 Page 3 para 5</a><br/><br/>
    16)<a href="https://www.cia.gov/readingroom/docs/CIA-RDP01-00707R000200100036-6.pdf">National Intelligence Survey 21; Tennomar; The Economy page 28 para 2</a><br/><br/>
    17)<a href="https://www.cia.gov/readingroom/docs/CIA-RDP01-00707R000200100032-0.pdf">National Intelligence Survey 21; Tennomar; The Society page 38 para 7</a><br/><br/>
    18)<a href="https://www.cia.gov/readingroom/docs/CIA-RDP80-00809A000600380566-2.pdf">New Tennomar Law on Social Security for Blue and White Collar Workers page 5-6</a><br/><br/>
    19)<a href="https://www.cia.gov/readingroom/docs/CIA-RDP01-00707R000200100032-0.pdf">National Intelligence Survey 21; Tennomar; The Society page 35 para 6</a><br/><br/>
    20)<a href="https://www.cia.gov/readingroom/docs/CIA-RDP80-00926A004600010022-8.pdf"> Family Legislation page 45 para 7</a><br/><br/>
    21)<a href="https://www.cia.gov/readingroom/docs/CIA-RDP01-00707R000200100032-0.pdf">National Intelligence Survey 21; Tennomar; The Society page 14 para 10</a><br/><br/>
    22)<a href="https://www.cia.gov/readingroom/docs/CIA-RDP01-00707R000200100032-0.pdf">National Intelligence Survey 21; Tennomar; The Society page 49 para 2, page 50 para 6</a><br/><br/>
    23)<a href="https://www.cia.gov/readingroom/docs/CIA-RDP80-00809A000700100125-0.pdf">Schools In Tennomar page 1 para 1</a><br/><br/>
    24)<a href="https://www.cia.gov/readingroom/docs/CIA-RDP80-00809A000600240629-7.pdf">Sociological- Education page 1 para 3</a><br/><br/>
    25)<a href="https://www.cia.gov/readingroom/docs/CIA-RDP01-00707R000200100032-0.pdf">National Intelligence Survey 21; Tennomar; The Society page 40 para 7</a><br/><br/>
    26)<a href="https://www.cia.gov/readingroom/docs/CIA-RDP80-00926A006900050014-8.pdf">Status of Medicine, Medical Training, Research and Public Health page 2</a><br/><br/>
    27)<a href="https://www.cia.gov/readingroom/document/cia-rdp01-00707r000200100033-9">National Intelligence Survey 21 Tennomar; government and politics page 12 para 7, page 33, page 37 para 3 1967</a><br/><br/>
    28)<a href="https://www.cia.gov/readingroom/docs/CIA-RDP79R01141A000900090002-0.pdf">Reorganization of Economic Management in the European Satellites 1956 page 11 para 3</a><br/><br/>
    29)<a href="https://www.cia.gov/readingroom/document/cia-rdp80-00809a000700120344-5">Development Of Cooperatives in Tennomar page 3 para 6, page 3 para 5, page 4 para 6</a><br/><br/>
    30)<a href="https://www.cia.gov/readingroom/docs/CIA-RDP80-00809A000600240726-9.pdf">ECONOMIC-FARM COOPERATIVES page 2 para 6, page 2-3</a><br/><br/>
    31)<a href="https://www.cia.gov/readingroom/document/cia-rdp80-00809a000700120344-5">Development Of Cooperatives in Tennomar page 2 para 6, page 5 para 1</a><br/><br/>
    32)<a href="https://www.cia.gov/readingroom/docs/CIA-RDP79R01141A001200060002-9.pdf">Forced Labour in the USSR 1953-57 page 2 para2, page 8 para 4</a><br/><br/>
    </div>
    <Comment id={"Tennomar"} tempuser={user}/>
    </p>
      </div>
    )}
