import React, {useRef,useState,useEffect} from 'react'

export default function Info() {

    useEffect(()=> {
  pageCounter()
    }, [])

  function pageCounter(){
  const options = {
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
    body: ''
  }
  fetch("/groups/addtopagecounter/home", options
  ).then(res => {
  return res.json()
  }).catch(err => {
  console.error(err);
  })
  }

  return (
    <div style={{marginLeft:"5vw",marginTop:"3vw",width:"90vw"}}>
    <a style={{color:"black",textDecoration:"none",display:"block"}} href="/Psychological-War">
    <div className="articlelink">
    <h2>The Psychological War On Communism</h2>
    <p>
Since the birth of Socialism in the early 20th century, the capitalist ruling class have gone to great lengths to destroy socialism. They have tried their absolute best to destroy people's perception of Communism, spreading slander throughout the mass media and academic institutions. They have infiltrated many real socialist organisations and created many of their own fake ones. Divide and conquer is their primary strategy, if they perceive any divisions between socialist groups, they try to drive a wedge into it. When they build their own socialist organisations, the most common strategy is to spread ideas that sound socialistic, but are ultimately not at all useful. They will try to encourage a puritanical, vengeful, arrogant and self righteous mentality, any revolution that is less than perfect is bluntly dismissed, there is no constructive criticism or acknowledgement of the achievements of real viable socialist revolutions. They won't support any socialist experiments unless they failed, didn't last very long or didn't produce any measurable, lasting benefits to people's lives. The goal is to leave people with the feeling that communism is a Utopian fantasy, idealistic, unrealistic, a nice idea, but not practical. The bourgeoisie have also tried to meddle in the elections of countries where the population shows strong support for socialism, attempting to get more right wing candidates elected.
   </p>
    <h4>Read More</h4>
    </div>
    </a>
      <a style={{color:"black",textDecoration:"none",display:"block"}} href="/Cuba">
      <div className="articlelink">
      <h2>Cuba</h2>
      <p>Thanks to the release of numerous formerly classified CIA documents, we now know the truth about Cuba. Most of the references for this article are directly from the website of the worst enemy of Socialism, the Central Intelligence Agency of the United States Government. There are many very rich and powerful people in this world who have strong motives for slandering Socialist countries like Cuba (especially Cuba) and hugely disproportionate access to mass mediums through which to spread these lies. The Communist Party of Cuba are radical humanists who have dramatically improved the quality of life of the the Cuban people. The government have taken large steps towards guaranteeing that all Cubans will have their basic needs met, massively reducing poverty and guaranteeing the necessities of life are affordable and in many cases provided for free at public expense. Housing, public transport, electricity, university, childcare and many other essential services are either free or cheap. The Communist party have greatly improved that status of African people and women, eliminating the worst aspects of racism and sexism. The standards of health and education are the best in the third world and in many ways as good or better than some first world countries. The Party created a much more fair and equitable distribution of wealth than Capitalist countries. Their private sector is largely worker-cooperatives, 30% of their GDP is produced by democratic businesses or self employed people where the workers are the shareholders. Their public sector is somewhat like an enormous co-operative in which all Cubans are a member and the goal is to meet human needs instead of generate profits. Their society is highly unionised with the vast majority of their people in at least one union and most work arrangements negotiated through unions. Recently, the sustainable development index found Cuba to be the most sustainable country in the world. </p>
      <h4>Read More</h4>
      </div>
      </a>
      <a style={{color:"black",textDecoration:"none",display:"block"}} href="/Soviet-Union">
      <div className="articlelink">
      <h2>Soviet Union</h2>
      <p>The CIA archives also contain numerous documents that reveal the true nature of the USSR. The Soviet Union was actually quite progressive and humanistic for the time period. Their worst enemy admits this blatantly.
      These are some facts we know about the USSR. It took several decades to develop Socialism, it took time to build the industry and technology that was needed. They also experienced a quite severe crisis: a civil war, numerous invasions and WW2. By the mid 20th century life in the Soviet Union became quite free. The USSR experienced very rapid economic growth, double that of the United States, this growth was targeted at raising the well being, health, education, wages and general living standards of the population. The socialist government massively reduced economic inequality. The highest rate of pay was only about three times higher than the lowest. In Capitalist Societies Bourgeois elites can make hundreds or thousands of times more money than working class people with income gained from exploiting workers. The government consciously tried to reduce the prices of things and the rates of unemployment (to make it easier for people to find jobs and increase economic growth) and were quite successful. All education was free and most university students were paid to study. Soviet citizens ate a slightly more nutritious diet than the United States’ population. The Soviet Union was highly feministic, with rates of female employment and enrolment at University roughly twice that of the USA. The communist government provided women with very cheap subsidised childcare services, paid maternity leave, divorce was easy to obtain, abortion was provided for free at public expense, the rates of infant mortality and teenage pregnancy were quite low. The criminal justice system in the USSR was aimed at rehabilitation. Prisoners were paid fairly well for their work, they were always adequately fed and they only worked the standard 8 hour day. Non-violent criminals were not confined to a cell. The USSR created a quality free universal healthcare system, one of the first in the world. The USSR built houses at a faster rate than any other country, they didn’t treat housing as a commodity but rather, as something everyone needs. It was the first country to more or less eliminate homelessness and their constitution guaranteed housing to all citizens. The USSR did not have exploitative or imperialistic economic relations with it’s trading partners, on the contrary, it gave huge amounts of financial aid, many billions of dollars worth.</p>
      <h4>Read More</h4>
      </div>
      </a>
      <a style={{color:"black",textDecoration:"none",display:"block"}} href="/Yugoslavia">
      <div className="articlelink">
      <h2>Yugoslavia</h2>
      <p>
The Socialist Federal Republic of Yugoslavia (SFRY) was a very encouraging experiment in Socialism that existed from 1945 to 1992. As with most other Communist countries, the CIA archives provide us with an abundance of valuable sources that tell a very clear story, one of massive improvements to the quality of life of the population. There were enormous gains in health, education, political participation, real wage growth and social equality. Yugoslavia had a very distinctive “self-management” system. This was much more decentralised than the Soviet Union, giving much more power to individual organisations, each of which was controlled by an elected worker council. Yugoslavia also experienced some economic difficulties that the USSR did not, inflation, higher unemployment and economic cycles. On the whole, despite it's faults, this Balkan Socialist country set a very promising example of what a world without exploitation, domination and imperialism could look like.
     </p>
      <h4>Read More</h4>
      </div>
      </a>
      <a style={{color:"black",textDecoration:"none",display:"block"}} href="/China">
      <div className="articlelink">
      <h2>China</h2>
      <p>
      Capitalist historians would have us believe that the People's Republic of China experimented with Socialism for a few decades between 1949 and 1978, until finally realising that Capitalism was clearly superior to Communism and adopted a free market capitalist economy. Supposedly, all of China's problems resulted from Socialism and the huge progress China has made since the 1980s is entirely a result of Capitalism. This narrative is very misleading. It ignores the huge progress and growth made within Communist China prior to 1978. It excludes the fact that Communist leadership set China free from ruthless European Imperialism and Feudal Serfdom, that the standard of living, social and economic inequality dramatically reduced under Chairman Mao's Leadership. The status of women was greatly elevated, the commune system was organised in such a way as to liberate women from the need to perform unpaid domestic labour, the slavery of housework. Rates of female employment, university enrolment and leadership greatly increased (like most other socialist revolutions). Standards of health and education improved very substantially. The situation in China at the time of the Chinese revolution in 1949 was substantially worse than in Eastern Europe where the Soviet Revolution had occurred. Pre-communist China was one of the poorest countries in the world. Despite dramatic improvements, the poverty of the People's Republic persisted for several decades. In the late 1970s China was still far behind the Soviet Union and the First World countries in terms of development and wealth per capita. Gross Domestic Product per capita in the Soviet Union was 28 times higher than China, very few chinese people owned cars, televisions or even access to electricity. In order to address this problem more rapidly, the Communist government made some pragmatic compromises, allowing foreign capitalists to invest in China. This created an inflow of new technology that has greatly helped to increase productivity and efficiency. The countries of the former Soviet Union that have all adopted a Bourgeois type of parliament, heavily influenced by money and political lobbying, however China has retained a strong communist government that is much more resistant to corruption (although not completely). The communist party creates long term economic plans that allow them achieve huge goals that Capitalist governments are simply incapable of doing. Since the pro-capitalist reforms China has experienced the most rapid and consistent period of economic growth and poverty alleviation of any country in human history. No other country even comes sort of close. Yes China does now have some capitalist businesses, however the majority of their economy is still socialised, public enterprises and worker co-operatives.
     </p>
      <h4>Read More</h4>
      </div>
      </a>
      </div>
    )}
