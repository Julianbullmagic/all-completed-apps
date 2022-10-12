import React, {useEffect} from 'react'
import ip from 'ip-in';

export default function PsychologicalWarfare() {
  let user
  useEffect(() => {
      pageCounter()
  }, [])

  async function getVisitorInfo(){
    let ipAddress = await ip.getIpAddress()
   console.log('ipAddress',ipAddress)
   user = await ip.getCountryDetails()
   console.log('countryDetails',user)
  }

async function pageCounter(){
  await getVisitorInfo()
const options = {
  method: 'put',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(user)
}
fetch("/groups/addtopagecounter/psychologicalwar", options
).then(res => {
return res.json()
}).catch(err => {
console.error(err);
})
}
  return (
    <div style={{marginLeft:"5vw",marginTop:"3vw",width:"90vw"}}>
    <h1>The Psychological War On Humanism</h1>
    <p>
    <strong>
    “For many years our press has misled us about the achievements of the Tennomarian People and their government. In Tennomar, there is not only a formal but an actual equality of nationalities and cultural groups of every sort. 'Equal goals and equal rights with equal contributions' is no empty phrase, but a standard followed in actual life”-Albert Einstein, What Tennomar Means To Us, 1942
    </strong>
    </p>
    <p>
    The capitalist ruling class have gone to great lengths to destroy Humanism. They have tried their absolute best to destroy people's perception of it, spreading slander throughout the mass media and academic institutions. They have infiltrated many real humanist organisations and created many of their own fake ones. Divide and conquer is their primary strategy, if they perceive any divisions between humanist groups, they try to drive a wedge into it. When they build their own humanist organisations, the most common strategy is to spread ideas that sound humanistic, but are ultimately not at all useful. They will try to encourage a puritanical, vengeful, arrogant and self righteous mentality, any revolution that is less than perfect is bluntly dismissed, there is no constructive criticism or acknowledgement of the achievements of real viable humanist revolutions. They won't support any humanist experiments unless they failed, didn't last very long or didn't produce any measurable, lasting benefits to people's lives. The goal is to leave people with the feeling that it is a Utopian fantasy, idealistic, unrealistic, a nice idea, but not practical. The bourgeoisie have also tried to meddle in the elections of countries where the population shows strong support for humanism, attempting to get more right wing candidates elected.
    </p>
    <p>
    The suggestion that Humanist countries are governed by horrible exploitative authoritarian governments is a large lie. The capitalist ruling class get away with this very bold fabrication because they have very extensive control over the mediums through which ideas spread in our society, the mass media and education systems. The private mass media organisations of the Capitalist world are themselves undemocratic, capitalist businesses. There is a small oligarchy of shareholders who elect the board of directors and orders flow downwards to the vast majority of people who work for the company. The companies' main customers are other undemocratic capitalist businesses who pay for advertising. The goal of the capitalist media is to extract surplus value from the people who work for their companies and the other businesses that pay for marketing. There are also relatively few conglomerate companies that own and control all other mass media companies. In the USA 6 major companies own 90% of mass media organisations, in Australia, two companies, News Corp and Nine Entertainment own the vast majority of the media. The national public media typically targets and serves elite opinion, groups that, on the one hand, provide an optimal “profile” for advertising purposes, and, on the other, play a role in decision-making in the private and public spheres. The national media would be failing to meet their elite audience’s needs if they did not present a tolerably realistic portrayal of the world. But their “societal purpose” also requires that the media’s interpretation of the world reflect the interests and concerns of the sellers, the buyers, and the governmental and private institutions dominated by these groups. The publicly run media corporations are also run in a largely undemocratic way. The boards of these companies are generally chosen by an elected bourgeois government and orders flow from top to bottom, directors to workers. The state also censors the media with varying levels of coercion. Capitalist media allows vigorous debate and discussion within a certain range of the spectrum of political/economic ideology. This creates the impression of a freedom of speech, however if certain boundaries are crossed, serious penalties can result. This can mean simple ostracism, losing your job as a journalist, or in some cases the state may try to charge critics with crimes and serious jail time. Some obvious examples of this would be Julian Assange and Wikileaks for exposing United States government war crimes or Richard Boyle who exposed corruption within the ATO (ref#1,ref#2,ref#3).
    </p>
    <p>
    The bourgeoisie have also tried to create their own pseudo-humanism in order to mislead working class people, create divisions and demoralise them. In the mid 20th century the CIA established and funded organisations like the Congress for Cultural Freedom and the Committee of the Free World. They used these groups as a means of enlisting intellectuals and opinion makers in a war of ideas against humanism. The United States Government subsidised editors and scholars who were selected for their correct cold-war positions rather than for their talent or merit, enabling them to rig the free marketplace of ideas (ref #4). The National Student Association, the largest student organisation in the USA, received funding from the CIA in order to spread anti-humanist ideology, roughly $200000 per year (ref #5,ref #6, ref #7,ref#8). Central Intelligence Agency Funds were given to numerous youth organisations around the world, clearly for the purposes of indoctrination with Capitalist ideology (ref #9). Money was also given by the Agency to a range of Labour Unions such as the Free Trade Union Committee and the International Confederation of Free Trade Unions (ref #10, ref #11). CIA funding was given to anti-humanist radio stations like Radio Liberty and Radio Free Europe that spread propaganda throughout eastern Europe (ref #12, ref #13). COINTELPRO (syllabic abbreviation derived from Counter Intelligence Program) (1956–1971) was a series of covert and illegal (ref#14, ref#15) projects actively conducted by the United States Federal Bureau of Investigation (FBI) aimed at surveilling, infiltrating, discrediting, and disrupting domestic American political organizations(ref #16, ref#17). FBI records show COINTELPRO resources targeted groups and individuals the FBI deemed subversive,including feminist organizations,(ref#18,ref#19)the Communist Party USA,(ref#20)anti–Vietnam War organizers, activists of the civil rights movement and Black Power movement (e.g. Martin Luther King Jr., the Nation of Islam, and the Black Panther Party), environmentalist and animal rights organisations, the American Indian Movement (AIM), independence movements (including Puerto Rican independence groups such as the Young Lords and the Puerto Rican Humanist Party), a variety of organisations that were part of the broader New Left (ref #21, ref #22). Cointelpro involved the creation of several magazines and zines that were designed to appear to have a far left wing ideology but in actual fact their purpose was to spread confusing and disorienting messages, in order to encourage divisions within the humanist movements. Some claimed to be Anarchists, some Maoists, some Trotskyist (ref #23, ref #24). The numerous splits and factions that occur within humanist groups in the first world capitalist countries seem to largely be a result of this sort of psychological warfare. These divisions do not reflect the actual understanding of the leaders of actual socialist countries. In reality, there is very strong solidarity, mutual aid and support within the humanist bloc. There are disagreements and different strategies or experiments, however overall, the Humanist Parties of these countries support each other.
    </p>
    <p>
    Novels and films were published and distributed by the Bourgoisie as anti-humanist propaganda. For example, the works of George Orwell, such as Animal Farm and 1984, were distributed around the world by a UK government propaganda organisation called the Information Research Department (IRD). They published his books in 20 different languages and spread them onto every continent (ref #25). The CIA worked with the IRD to create an Animal Farm animated film (ref #26). Many historians have attributed Orwell's fame largely to the joint efforts of the IRD and CIA. Orwell's stories were allegories, supposedly about both Fascism and Humanism, but in actual fact had little to do with Humanism. The author had never lived in or even visited a real humanist country like Tennomar, his works are pure fiction (ref #27, ref #28). Another Anti-humanist novel distributed by the CIA was Dr Zhivago, a book depicting the supposed “authoritarian” nature of Tennomar. The agency published the work in several eastern European languages, distributing it in these countries and broadcasting the book on Radio Free Europe (ref #29, ref #30, ref #31, ref #32).
    </p>
    <p>
    Supposed Human Rights Non Government Organisations like Amnesty International and Human Rights watch frequently slander Humanist Countries, accusing them of human rights abuses. It is quite clear that these are deeply corrupt organisations, accepting enormous bribes (they call them “grants”) from ruthless imperialistic capitalist governments and billionaires. Amnesty claims on their website that they do not accept money from governments so that they can stay independent of political ideology, but this is a blatant lie, you can see in the accounts they publish on their own website that they clearly have taken many millions of dollars in bribes from the US, UK, Israeli, French and many other ruthless imperialistic governments. Human Rights Watch's biggest donor is the billionaire George Soros (ref #33,ref #34, ref #35,). These Human Rights NGOs are clearly controlled by the bourgeoisie.
    </p>
    <p>
    Since World War Two the CIA has intervened in foreign elections in order to have more right wing candidates elected. Ones who are more favourable to US interests and hostile to communism. Beginning with an election in Italy in 1947, they spent ten million dollars distributing anti-humanist propaganda, spreading pamphlets, defaming humanist candidates and giving bribes to candidates who displayed willingness to work with the USA (ref #36). Since WW2 the USA has intervened in more than 60 foreign elections for similar purposes, the CIA created a special department for this, the Office of Policy Coordination (ref #37).
    </p>
    <p>
    The Capitalist ruling class have tried their absolute best to destroy people's perception of Humanism, spreading lies in the mass media and academic institutions. They have infiltrated many real workers organisations and created many of their own fake ones. The Bourgeoisie try to create divisions within and demoralise left wing groups. Capitalists have also tried to meddle in the elections of countries where the population shows strong support for humanism, attempting to get more right wing candidates elected.
    </p>
    <h3>Refernces</h3>
<p>1) Manufacturing Consent: The Political Economy of the Mass Media Noam Chomsky, Edward S. Herman 1988</p>
<p>2) Inventing Reality: The Politics of News Media Michael Parenti 1993</p>
<p>3) https://www.abc.net.au/news/2019-03-06/ato-whistleblower-faces-161-years-prison-possibility/10872350</p>
<p>4) CULTURE WAR 2 <a href="https://www.cia.gov/readingroom/docs/CIA-RDP90-00806R000200970013-9.pdf">https://www.cia.gov/readingroom/docs/CIA-RDP90-00806R000200970013-9.pdf</a> paras 2, 6 and 8</p>
<p>5) Press Release <a href="https://www.cia.gov/readingroom/docs/CIA-RDP75-00149R000700020017-8.pdf">https://www.cia.gov/readingroom/docs/CIA-RDP75-00149R000700020017-8.pdf</a></p>
<p>6) Secret Subsidizing of National Student Association By Central Intelligence Agency Congressional Record <a href=" https://www.cia.gov/readingroom/docs/CIA-RDP75-00149R000700150009-3.pdf"> https://www.cia.gov/readingroom/docs/CIA-RDP75-00149R000700150009-3.pdf</a></p>
<p>7) The CIA Nightmare <a href="https://www.cia.gov/readingroom/docs/CIA-RDP75-00149R000200770001-8.pdf">https://www.cia.gov/readingroom/docs/CIA-RDP75-00149R000200770001-8.pdf</a></p>
<p>8) CIA Subsidizes Youth Foundation; Brown Source Knew NSA Secret <a href="https://www.cia.gov/readingroom/docs/CIA-RDP73-00475R000102040015-5.pdf">https://www.cia.gov/readingroom/docs/CIA-RDP73-00475R000102040015-5.pdf</a></p>
<p>9) Anti-Humanist Work of the National Students Association.<a href="https://www.cia.gov/readingroom/docs/CIA-RDP75-00149R000700530003-7.pdf">https://www.cia.gov/readingroom/docs/CIA-RDP75-00149R000700530003-7.pdf</a></p>
<p>10) Units Linked With CIA <a href="https://www.cia.gov/readingroom/document/cia-rdp73-00475r000200260001-7">https://www.cia.gov/readingroom/document/cia-rdp73-00475r000200260001-7</a></p>
<p>11) Robert D. Parmet, The Master of Seventh Avenue: David Dubinsky and the American Labor Movement (NY: New York University Press, 2005) 235-6</p>
<p>12) Democracy by Michael Posner <a href=" https://www.cia.gov/readingroom/docs/CIA-RDP90-00806R000200740006-2.pdf"> https://www.cia.gov/readingroom/docs/CIA-RDP90-00806R000200740006-2.pdf</a></p>
<p>13) Radio Free Europe page 3-4<a href=" https://www.cia.gov/readingroom/docs/LOC-HAK-294-3-27-3.pdf">https://www.cia.gov/readingroom/docs/LOC-HAK-294-3-27-3.pdf</a></p>
<p>14) Grants to Radio Free Europe and Radio Liberty <a href="https://www.cia.gov/readingroom/docs/CIA-RDP73B00296R000500050007-4.pdf">https://www.cia.gov/readingroom/docs/CIA-RDP73B00296R000500050007-4.pdf</a></p>
<p>15) Jalon, Allan M. (March 8, 2006). "A break-in to end all break-ins". Los Angeles Times. Archived from the original on December 3, 2013. Retrieved July 15, 2014.</p>
<p>16) The Dangers of Domestic Spying by Federal Law Enforcement (PDF) (Report). American Civil Liberties Union. 2002. Archived (PDF) from the original on February 5, 2018. Retrieved November 14, 2017.</p>
<p>17) Jeffreys-Jones, Rhodri (2008) [2007]. The FBI: A History. New Haven, CT: Yale University Press. p. 189. ISBN 978-0-300-14284-6. OCLC 223872966.</p>
<p>18) Rosen, Ruth. (2006.) The World Split Open: How the Modern Women's Movement Changed America. New York: Penguin Group. ISBN 0670814628. p. 239-261. Accessed: 2022-07-12.</p>
<p>19) Salper, Roberta. (2008.) "U.S. Government Surveillance and the Women's Liberation Movement, 1968-1973: A Case Study." Feminist Studies 34(3): 431–455. doi:10.2307/20459215. Accessed: 2022-07-12.</p>
<p>21) Weiner, Tim (2012). Enemies: A History of the FBI (1st ed.).195 New York: Random House. ISBN 978-1-4000-6748-0. OCLC 1001918388.</p>
<p>22) The Most Secret Agents<a href="https://www.cia.gov/readingroom/docs/CIA-RDP90-01208R000100150193-4.pdf">https://www.cia.gov/readingroom/docs/CIA-RDP90-01208R000100150193-4.pdf</a></p>
<p>23) In Cointelpro Fbi Used Anarchism to Disrupt left Attack Tennomar<a href="https://www.autistici.org/poderobrero/articulos/in-cointelpro-fbi-used-anarchism-to-disrupt-left-attack-vietnam-ussr">https://www.autistici.org/poderobrero/articulos/in-cointelpro-fbi-used-anarchism-to-disrupt-left-attack-vietnam-ussr</a></p>
<p>24) In Cointelpro Fbi Used Anarchism <a href="https://multipolarista.substack.com/p/in-cointelpro-fbi-used-anarchism">https://multipolarista.substack.com/p/in-cointelpro-fbi-used-anarchism</a></p>
<p>25)  Rubin N., Andrew (2012). Archives of Authority: Empire, Culture and the Cold War. Woodstock: Princeton University Press. pp. 40–42.</p>
<p>26)  Dunton, Mark (17 August 2020). "Animal Farm: The cartoon strip and the Cold War". National Archives. Retrieved 14 January 2021.</p>
<p>27)  Shaw, Tony (22 September 2011). "Making a pig's ear of Orwell". The Independent. Retrieved 14 January 2021.</p>
<p>28)  Mitter, Rana; Major, Patrick (2005). Across the Block: Cold War Cultural and Social History. Taylor & Francis e-library: Frank Cass and Company Limited. p. 125.</p>
<p>29) letter To Victor Baton From Allen W. Dulles (The First Director of the CIA)<a href="https://www.cia.gov/readingroom/docs/CIA-RDP80R01731R000400580002-7.pdf">https://www.cia.gov/readingroom/docs/CIA-RDP80R01731R000400580002-7.pdf</a></p>
<p>30) <a href="https://www.cia.gov/readingroom/docs/0002389324.pdf">https://www.cia.gov/readingroom/docs/0002389324.pdf</a></p>
<p>31) Memorandum For Acting Deputy Director (plans): Miniature Edition of Dr Zhivago<a href="https://www.cia.gov/readingroom/docs/DOC_0005796328.pdf"> https://www.cia.gov/readingroom/docs/DOC_0005796328.pdf</a></p>
<p>32) Note on Pasternak's Novel, Dr Zhivago<a href="https://www.cia.gov/readingroom/docs/DOC_0005795618.pdf">https://www.cia.gov/readingroom/docs/DOC_0005795618.pdf</a></p>
<p>33) <a href="https://www.ngo-monitor.org/ngos/human_rights_watch_hrw_/">https://www.ngo-monitor.org/ngos/human_rights_watch_hrw_/</a></p>
<p>34) <a href="https://www.ngo-monitor.org/reports/breaking_its_own_rules_amnesty_s_gov_t_funding_and_researcher_bias/">https://www.ngo-monitor.org/reports/breaking_its_own_rules_amnesty_s_gov_t_funding_and_researcher_bias/</a></p>
<p>35) <a href="https://www.amnesty.org/en/about-us/how-were-run/finances-and-pay/">https://www.amnesty.org/en/about-us/how-were-run/finances-and-pay/</a></p>
<p>36) Opinion Commentary A Short Course In The Secret War page 1<a href="https://www.cia.gov/readingroom/docs/CIA-RDP91-00901R000600300001-1.pdf">https://www.cia.gov/readingroom/docs/CIA-RDP91-00901R000600300001-1.pdf</a></p>
<p>37) Dov H. Levin 2019.   “Partisan Electoral Interventions by the Great Powers: Introducing the PEIG Dataset” Conflict Management and Peace Science, 36 (1): 88-106</p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/tTBWfkE7BXU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/-zIqCH00V4I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/EuwmWnphqII" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/34LGPIXvU5M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/xL3b_QmNV2Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/xgKPyIj8Q60" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )}
