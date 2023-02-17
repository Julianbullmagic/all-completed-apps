
import React, {useRef,useState,useEffect} from 'react'
import Comment from './ArticleComment'
import ip from 'ip-in';

export default function Spain() {
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
    let pagecounter=await fetch("/groups/addtopagecounter/spain", options
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
    <h1 style={{textAlign:"center"}}>Workers Self-management and Libertarian Socialism in Revolutionary Spain</h1>
    <p style={{textAlign:"center"}}>
    “I had dropped more or less by chance into the only community of any size in Western Europe where political consciousness and disbelief in capitalism were more normal than their opposites. Up here in Aragon one was among tens of thousands of people, mainly though not entirely of working-class origin, all living at the same level and mingling on terms of equality. In theory it was perfect equality, and even in practice it was not far from it. There is a sense in which it would be true to say that one was experiencing a foretaste of Socialism, by which I mean that the prevailing mental atmosphere was that of Socialism. Many of the normal motives of civilized life — snobbishness, money-grubbing, fear of the boss, etc. — had simply ceased to exist. The ordinary class-division of society had disappeared to an extent that is almost unthinkable in the money-tainted air of England; there was no one there except the peasants and ourselves, and no one owned anyone else as his master. Of course such a state of affairs could not last. It was simply a temporary and local phase in an enormous game that is being played over the whole surface of the earth. But it lasted long enough to have its effect upon anyone who experienced it. However much one cursed at the time, one realized afterwards that <strong>one had been in contact with something strange and valuable. One had been in a community where hope was more normal than apathy or cynicism, where the word ‘comrade’ stood for comradeship and not, as in most countries, for humbug. One had breathed the air of equality.</strong> I am well aware that it is now the fashion to deny that Socialism has anything to do with equality. In every country in the world a huge tribe of party-hacks and sleek little professors are busy ‘proving’ that Socialism means no more than a planned state-capitalism with the grab-motive left intact. But fortunately there also exists a vision of Socialism quite different from this.”
    ― George Orwell, Homage to Catalonia
    <br/><br/>
    <div className="vids">
  <iframe style={{width:"40vw",height:"40vh",display:"inline"}} src={"https://www.youtube.com/embed/6-tOSrfHMBc"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <iframe style={{marginLeft:"5vw",width:"40vw",height:"40vh",display:"inline"}} src={"https://www.youtube.com/embed/HAEhRRDvHHQ"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
    The war lasted for three years and ended with Franco's victory, aided by fascist Italy and Nazi Germany. The revolution saw huge swathes of Spanish industry and agriculture socialised and run collectively by the workers and peasants.
    <br/><br/>
    The fascists launched a coup on July 17th 1936. The initial step was taken when Franco seized Morocco and issued a "radical manifesto". This was picked up by a loyal radio operator who passed it on to the Minister for the Navy. The news of the coup was kept secret until 7pm on the 18th while they tried to come to terms with the fascists. The cabinet resigned on the 18th and Barrio, a right wing republican, was made prime minister.
    <br/><br/>
    The coup was only smashed by the activity of the working class. The fascists made some headway in parts of the country but in Catalonia, and especially Barcelona, the CNT (Anarcho-Syndicalist union) showed how to fight. They declared a general strike and took to the streets looking for arms which the government refused to give them. In the end they stormed the barracks, and took what they needed.
    <br/><br/>
    The workers immediately set up barricades and within hours the rising had been defeated. Arms were seized and given to workers who were dispatched to other areas to prevent risings. Madrid was also saved because of the heroism and initiative of the workers. Hearing of what had happened in Barcelona they had stormed the main army base in the city.
    <br/><br/>
    The action of the rank and file saved the Spanish Republic. Not just the CNT but the UGT (Socialist union) and POUM (Anti-Stalinist Communists) joined in the fighting. For these workers this was not just a war to defeat the fascists but the beginning of revolution. Workers' militias were established. Workplaces were taken over and in peasants seized the land.
    <br/><br/>
    <h3>The Militias</h3>
    The government found itself in a peculiar situation after July 19th. It remained the government but had no way of exercising authority. Where the rebellion had been defeated the army was disbanded and workers armed. Militias were formed and these became units of a revolutionary army. Ten days after the coup there were 18,000 workers organised in the militias of Catalonia (mostly from the CNT). Overall there were 150,000 volunteers willing to fight whenever they were needed.
    <br/><br/>
    This was no ordinary army. This was a revolutionary army with revolutionary principles. The basic unit was the group, composed generally of ten, which elected a delegate. Ten groups formed a century which also elected a delegate. Any number of centuries formed a column, which had a war committee responsible for the overall activities of the column. This was elected and accountable to the workers.
    <br/><br/>
    Workers joined columns voluntarily. They understood the need to fight and the necessity of creating a "popular army". They accepted discipline because they understood the need to act in a co-ordinated manner. These were political organisations that understood the link between revolutionary politics and the war. The militias formed in Barcelona lost no time in marching on Aragon where the capital, Saragossa, had been taken by the fascists. The Durruti Column led this march and gradually liberated village after village.
    <br/><br/>
    The Durruti column showed how to fight fascism. As they gained victory after victory they encouraged peasants to take over the land and collectivise. The Column provided the defence that allowed this to be done. The peasants rallied to them and many joined. Indeed Buenaventura Durutti had to plead with some of them not to join so that the land would not be depopulated and the task of collectivisation could be carried through.
    <br/><br/>
    As the anarchist militias achieved successes ground was being lost on other fronts. Saragossa, though, was not taken and a long front developed. The militia system was blamed for this. The Stalinists said the workers were undisciplined and would not obey orders. They accused the anarchists of being unwilling to work with others to defeat the fascists. Of course this was nonsense. The anarchists continually called for a united war effort and even for a single command. What they did demand, though, was that control of the army stayed with the working class and not a new militarist officer caste.
    <br/><br/>
    The major problem facing the militias was a lack of arms. The munitions industry been cut off and the workers in Barcelona went to great lengths to improvise. George Orwell (who fought in one of the POUM militias) described the arms situation on the Aragon front. The infantry "were far worse armed than an English public school Officers Training Corps, with worn out Mauser rifles which usually jammed after five shots; approximately one machine gun to fifty men and one pistol or revolver to about thirty men. These weapons, so necessary in trench warfare, were not issued by the government.... A government which sends boys of fifteen to the front with rifles forty years old and keeps its biggest men and newest weapons in the rear is manifestly more afraid of the revolution than the fascists".
    <br/><br/>
    And how right he was. Moscow sold arms but when they arrived there was a systematic refusal to supply the anarchist-controlled Aragon front. The arms that did arrive were sent only to Stalinist centres. A member of the war ministry referring to the arms which arrived in September commented "I noticed that these were not being given out in equal quantities, but there was a marked preference for the units which made up the [Stalinist] Fifth Regiment".
    <br/><br/>
    It is a common lie that the militias, supposedly undisciplined and uncontrollable, were responsible for Franco's advance. All who saw the militias in action had nothing but praise for the heroism they witnessed. The government made a deliberate choice. It chose to starve the revolutionary workers of arms, it decided that defeating the revolution was more important than defeating fascism.
    <br/><br/>
    <h3>The Land</h3>
    It was in the countryside that the Spanish revolution was most far reaching. The anarchist philosophy had been absorbed by large layers of the downtrodden peasants and the outbreak of revolution was the opportunity to put these ideas into practice.
    <br/><br/>
    Collectivisation of the land was extensive. Close on two thirds of all land in the Republican zone was taken over. In all between five and seven million peasants were involved. The major areas were Aragon where there were 450 collectives, the Levant (the area around Valencia) with 900 collectives and Castille (the area surrounding Madrid) with 300 collectives.
    <br/><br/>
    Collectivisation was voluntary and thus different from the forced ‘collectivisation’ in Russia. Usually a meeting was called and all present would agree to pool together whatever land, tools and animals they had. The land was divided into rational units and groups of workers were assigned to work them. Each group had its delegate who represented their views at meetings. A management committee was also elected and was responsible for the overall running of the collective. Each collective held regular general meetings of all its participants.
    <br/><br/>
    If you didn't want to join the collective you were given some land but only as much as you could work yourself. Not only production was affected, distribution was on the basis of what people needed. In many areas money was abolished. If there were shortages rationing would be introduced to ensure that everyone got their fair share.
    <br/><br/>
    Production greatly increased. Technicians and agronomists helped the peasants to make better use of the land. Scientific methods were introduced and in some areas yields increased by as much as 50%. Food was handed over to the supply committees who looked after distribution in the urban areas.
    <br/><br/>
    However, slander was also thrown at the collectives. It was claimed that each only looked after itself. This was rubbish as in many areas equalisation funds were set up to redistribute wealth. Machinery and expertise were shifted to areas most in need. One indicator of the solidarity is the fact that 1,000 collectivists from the advanced Levant moved to Castille to help out.
    <br/><br/>
    Federations of collectives were established, the most successful being in Aragon. In June 1937 a plenum of Regional Federations of Peasants was held. Its aim was the formation of a national federation "for the co-ordination and extension of the collectivist movement and also to ensure an equitable distribution of the produce of the land, not only between the collectives but for the whole country". Unfortunately many collectives were smashed by the Stalinists before this could be done.
    <br/><br/>
    The collectivists also had a deep commitment to education and many children received an education for the first time. The methods of Francisco Ferrer, the world famous anarchist educationalist, were employed. Children were given basic literacy and inquisitive skills were encouraged.
    <br/><br/>
    <h3>Industry</h3>
    Although the revolution didn't go as far in the cities as it did in the country, many achievements are worth noting.
    <br/><br/>
    To give some idea of the extent of the collectivisation here is a list provided by one observer (Burnett Bolloten, The Grand Camouflage. By no means an anarchist book!). He says:
    <br/><br/>
    "railways, traincars and buses, taxicabs and shipping, electric light and power companies, gasworks and waterworks, engineering and automobile assembly plants, mines and cement works, textile mills and paper factories, electrical and chemical concerns, glass bottle factories and perfumeries, food processing plants and breweries were confiscated and controlled by workmens's committees, either term possessing for the owners almost equal significance". He goes on "motion picture theatres and legitimate theatres, newspapers and printing, shops, department stores and hotels, de-lux restaurants and bars were likewise sequestered".
    <br/><br/>
    In each workplace the assembly of all the workers was the basic unit. Within the factory workers would elect delegates to represent them on day-to-day issues. Anything of overall importance had to go to the assembly. This would elect a committee of between five and fifteen worker, which would elect a manager to oversee the day-to-day running of the workplace. Within each industry there was an Industrial Council which had representatives of the two main unions (CNT and UGT) and representatives from the committees.
    <br/><br/>
    Within workplaces wages were equalised and conditions greatly improved. Take for example the tramways. Out of the 7,000 workers, 6,500 were members of the CNT. Street battles had brought all transport to a halt. The transport syndicate appointed a commission of seven to occupy the administrative offices while others inspected the tracks and drew up a plan of repair work that needed to be done. Five days after the fighting stopped, 700 tramcars, instead of the usual 600, all painted in the black and red colours of the CNT were operating on the streets of Barcelona.
    <br/><br/>
    With the profit motive gone, safety became more important and the number of accidents was reduced. Fares were lowered and services improved. In 1936, 183,543,516 passengers were carried. In 1937 this had gone up by 50 million. The trams were running so efficiently that the workers were able to give money to other sections of urban transport. Also, free medical care was provided for the work force.
    <br/><br/>
    In 1937 the central government admitted that the war industry of Catalonia produced ten times more than the rest of Spanish industry put together and that this output could have been quadrupled if Catalonia had the access to necessary means of purchasing raw materials.
    <br/><br/>
    <h3>The Counter Revolution</h3>
    The behaviour of the Spanish Communist Party and the United Socialist Party of a Catalonia (PSUC) had more to do with what was in Stalin’s best interests than the Spanish working class’. They went out of their way to deny that a revolution had taken place then did all they could to repress this revolution they pretended had not happened. As far as they were concerned the Civil War was only about restoring democracy to Spain.
    <br/><br/>
    <h3>Popular Fronts</h3>
    To prevent the British and French settling their differences with Hitler at the expense of the Soviets, in order to guarantee that the Franco-Soviet Pact would not fall by the wayside and in order to conclude similar pacts with the governments of other countries, notably Britain, it was essential that governments hostile to German aims in Eastern Europe should be brought to power. It was to this end that the Popular Front line was adopted at the 7th World Congress of the Comintern in August 1935. This body collected together all the Communist Parties under Russian leadership.
    <br/><br/>
    This was a class collaborationist anti-fascist people’s front in which the Communist Parties were to play down revolutionary politics. This was to be a struggle to preserve bourgeois democracy.
    <br/><br/>
    The policy of wooing the British and French ruling classes was from the beginning doomed to failure. Not only because of their military unpreparedness but because of their belief that if they became involved at this stage in a war with Hitler, both they and the Nazis would be weakened and thus the position of Russia would be enhanced. At all times right up to the outbreak of WW2 the British sought to come to terms with Hitler which would leave him free to attack Russia in the East.
    <br/><br/>
    <h3>Russian Arms</h3>
    The point about the Communist Party is that they directed the counter-revolution. They called the shots. They were the only people who were clear about the 'necessity' for the counter-revolution and had the determination to carry it through. Their ability to do this was derived from the prestige that came with the fact that Russia was the only country supplying major quantities of arms to the Republic. The Russians not only supplied arms but also military advisors and technicians who gradually took over the running of the war.
    <br/><br/>
    <h3>Militarisation</h3>
    Because of this control of arms the Communists, supported by the others, enforced militarisation. The militia system was broken up. A regular army was rebuilt with the militias who refused to come under the command of the War Ministry (and many CNT and POUM militias did refuse) were starved of arms. They were left with no choice.
    <br/><br/>
    The police were also rebuilt, especially the hated Civil Guards, who had been a bulwark of repression against the CNT. They were now to be called the National Republican Guard. The Assault Guards were re- established and had 28,000 recruits by the beginning of December. The Carabineros, who were the border police in charge of customs and under the control of Minister of Finance Negrin (a known Communist sympathiser) grew to 40,000 members.
    <br/><br/>
    The state was giving itself a monopoly of force. The workers' patrols which had sprung up in July were disbanded. Workers were ordered to hand in their arms and those who declined to do so were considered 'fascists'. It was said that these arms were needed at the front. While it is true that arms were needed at the front this argument was only put forward as a means of disarming revolutionary workers. There were plenty of arms under the control of the police. George Orwell observed after the May Days in Barcelona "the Anarchists were well aware that even if they surrendered their arms, the PSUC would retain theirs, and this is in fact what happened after the fighting was over. Meanwhile actually visible on the streets, there were quantities of arms which would have been very welcome at the front, but which were being retained for the 'non-political' police forces in the rear". (Homage to Catalonia p.151).
    <br/><br/>
    <h3>The May Days</h3>
    On May 3rd 1937, three lorry loads of police led by the Stalinist Salas, Commissar of Public Order, attempted to take over the telephone exchange in Barcelona which had been controlled by a joint CNT-UGT committee since the outbreak of the war.
    <br/><br/>
    The police captured the first floor because of the surprise nature of their attack but got no further. Firing started. Word spread and within hours the local defence committees of the CNT-FAI went into action arming themselves and building barricades. Soon the workers were in control of most of the city.
    <br/><br/>
    In other areas of Catalonia action was also taken. Civil Guards were disarmed and offices of the PSUC were seized as a "preventive measure". There was no firing on the first night and by the second day the workers were spreading the barricades further into the suburbs.
    <br/><br/>
    The negotiations which went on, led to nothing as regards control of the telephone phone exchange. The workers were ordered off the barricades and unfortunately they went. On Thursday (May 6th) the building was vacated and the PSUC took it over. On the same day the railway station was taken over by the PSUC. The CNT had also controlled that. This happened throughout Catalonia.
    <br/><br/>
    On Friday 5,000 Assault Guards arrived from Valencia. The repression that followed was severe. The May Days left 500 dead and 1,100 wounded. Hundreds more were killed during the "mopping up" of the next few weeks. The counter-revolution broke out in earnest after May with decree after decree undermining the revolutionary committees. This was now possible as the backbone of the revolution, the Catalan workers, had been crushed.
    <br/><br/>
    <h3>The Friends of Durruti</h3>
    The Friends of Durruti was an expression of opposition to the collaborationism of the CNT. Not only in their paper, The Friends of the People, but in countless local publications of the CNT, and indeed of the UGT, POUM and Libertarian Youth you can find such opposition. However it must be said this was only given a clear expression when it was too late. The FoD did not have enough time to win the masses to their position. They understood the need for a regroupment to take on the leadership of the CNT.
    <br/><br/>
    Here we see a recognition of the need for a revolutionary minority to organise itself to provide leadership of ideas. An understanding of what has gone wrong and what needs to be done. That the FoD did not set themselves up as "all-knowing leaders' was clear in their proposal.
    <br/><br/>
    The Spanish Revolution does not negate anarchism. If anything, long before Poland, Czechoslovakia or Hungary it showed the bankruptcy of Stalinism and the State Capitalism of Russia. The activities of the Stalinists were far from what real socialists would have done.
    <br/><br/>
    On the other hand the anarchist masses threw themselves into a fight against fascism, and its cause, capitalism. Unfortunately the revolution was not complete, the CNT leaders held it back. Indeed their behaviour highlights the effect that power can have on even those who lay claim to anarchism. Spain provided important lessons for anarchists. It showed the inadequacy of syndicalism, the need for political anarchism and the need for an anarchist political organisation. We have to understand that the state and political power does not 'die'; it has to be smashed.
    <br/><br/>
    Above all, Spain showed what ordinary people can do given the right conditions. The next time somebody says workers are stupid and could not take over the running of society, point to Spain. Show them what the workers and peasants (most of whom were illiterate) did. Tell them Anarchism is possible.
    <br/><br/>
    <Comment id={"Spain"} tempuser={user}/>
    </p>
      </div>
    )}
