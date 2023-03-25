import React, {useRef,useState,useEffect} from 'react'
import Comment from './ArticleComment'
import ip from 'ip-in';

export default function Kerala() {
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
    let pagecounter=await fetch("/groups/addtopagecounter/kerala", options
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
    <h1 style={{textAlign:"center"}}>Kerala</h1>
    <div className="vids" style={{bottom:"4%"}}>
  <iframe className="iframeleft" src={"https://www.youtube.com/embed/1t9gJd9p5ZM"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <iframe className="iframeright" src={"https://www.youtube.com/embed/8IYbv0bW43w"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
    <p style={{textAlign:"center"}}>
    The State of Kerala in India has a highly successful humanistic political-economic-social system. This region has the highest human development indicators of any part of India, figures that are on a similar level to many first world countries and in some cases even better. Kerala has the second lowest poverty rate in India, highest life expectancy, highest literacy rates and the fewest homeless people to name a few of the many positive characteristics. Most private enterprises are co-operatives, democratic businesses owned and run by the workers themselves. Company directors are elected by the people who work for the business. Most of the state's energy is produced from renewable sources.
    <br/><br/><br/>
    <h2>Economy</h2>
    <br/><br/>
    The leaders of Kerala judge the success of their economy not just by growth of Gross Domestic Product but mostly by human development statistical indicators regarding health, education, cost of living, quality of life, gender and sex equality and a number of others. The state has the highest Human Development Index in all of India (HDI), 0.784 in 2018 (0.712 in 2015) (ref #1). Most of the data for this is gathered by the Capitalist government of India and still makes Kerala look very humanistic despite the ideological disagreements between the National Indian government and the Kerala State government.
    <br/><br/>
    Kerala is the second-least impoverished state in India according to the Annual Report of Reserve Bank of India published in 2013. (ref #2, ref #3). In 2007–08 and it had a consumption-based HDI of 0.920, which is better than that of many developed countries.(ref #4). Kerala, which accounts for 2.8% of India's population and 1.2% of its land area, contributes more than 4% to the GDP of India. Thus, the southern state's per capita income is 60% higher than India's average.
    <br/><br/>
    Kerala's high GDP and productivity figures with higher development figures is often dubbed the "Kerala Phenomenon" or the "Kerala Model" of development by economists, political scientists, and sociologists. Economists have noted that despite low income rates, the state had high literacy rates, healthy citizens, and a politically active population. Researchers began to delve more deeply into what was going in the Kerala model, since human development indices seemed to show a standard of living which was comparable with life in developed nations, on a fraction of the income (ref #5). Kerala is also one of the Indian states which spend a larger proportion of its revenue for human resource development including educational and healthcare uplifting. (ref #6)
    <br/><br/>
    After independence, the state was managed as a democratic socialist welfare economy (ref #7).From the 1990s, liberalisation of the mixed economy allowed Licence Raj restrictions against capitalism and foreign direct investment to be lightened, leading to economic expansion and an increase in employment. In the fiscal year 2018–19, the nominal gross state domestic product (GSDP) was ₹7.82 lakh crore (US$98 billion).GSDP growth; 11.4% in 2018–2019 and 10.5% in 2017–2018 (ref #8) had been high compared to an average of 2.3% annually in the 1980s and between 5.1%: 8  and 6.0% (ref #9) in the 1990s.(ref #10).
    <br/><br/><br/>
    <h2>Democracy At Work, Co-operatives</h2>
    <br/><br/>
    Kerala’s cooperative sector is a prime example of the success of the cooperative model. The cooperative sector in Kerala is one of the largest and most diversified in India. There are over 26,000 co-operative societies in Kerala, with a membership of over 60 million people, the total population is 35. It seems like almost all people in the state are members of at least one co-operative, many are members of more than one (ref #11, ref #12). This means that workplaces are democratic, workers can elect their own company directors and have some say in how the profit is distributed.
    <br/><br/><br/>
    Homelessness and Home Ownership
    <br/><br/>
    Kerala has the lowest proportion of homeless people in rural India, less than 0.1%, (ref #13) and the state is attempting to reach the goal of becoming the first "Zero Homeless State", in addition to its acclaimed "Zero landless project", with private organisations and the expatriate Malayali community funding projects for building homes for the homeless (ref #14). 90.7% of families own their own home in Kerala, in Australia this figure is about 66%(ref #15)
    <br/><br/><br/>

    <h2>Health</h2>
    <br/><br/>
    The State has the highest life expectancy in India, 77.3 years (ref #16) Kerala's maternal mortality ratio is the lowest in India at 53 deaths per 100,000 live births.(ref #17). Over 95% of Keralite births are hospital delivered and the state also has the lowest infant mortality rate in the country. The third National Family Health Survey ranks Kerala first in "Institutional Delivery" with 100% births in medical facilities (ref #18).The United Nations Children's Fund (UNICEF) and the World Health Organization designated Kerala the world's first "baby-friendly state" because of its effective promotion of breast-feeding over formulas (ref #19, ref #20).
    <br/><br/>
    The state was also among the lowest in the India State Hunger Index next only to Punjab. In 2015 Kerala became the first "complete digital state" by implementing e-governance initiatives (ref #21).
    Kerala is a pioneer in implementing the universal health care program (ref #22). The sub-replacement fertility level and infant mortality rate are lower compared to those of other states, estimated from 12 (ref #23, ref #24) 5  deaths per 1,000 live births; as per the National Family Health Survey 2015–16, it has dropped to 6 (ref #25). According to a study commissioned by Lien Foundation, a Singapore-based philanthropic organisation, Kerala is considered to be the best place to die in India based on the state's provision of palliative care for patients with serious illnesses (ref #26). Kerala's 13.3% prevalence of low birth weight is higher than that of many first world nations (ref #27),
    In 2014, Kerala became the first state in India to offer free cancer treatment to the poor, via a program called Sukrutham (ref #28). In April 2016, the Economic Times reported that 250,000 residents undergo treatment for cancer. It also reported that approximately 150 to 200 liver transplants are conducted in the region's hospitals annually. Approximately 42,000 cancer cases are reported in the region annually. This is believed to be an underestimate as private hospitals may not be reporting their figures. Long waiting lists for kidney donations has stimulated illegal trade in human kidneys, and prompted the establishment of the Kidney Federation of India which aims to support financially disadvantaged patients (ref #29). As of 2017–18, there are 6,691 modern medicine institutions under the department of health services, of which the total bed strength is 37,843; 15,780 in rural areas and 22,063 in urban (ref #30).
    <br/><br/><br/>
    <h2>Education</h2>
    <br/><br/>
    Kerala has the highest literacy rate in India, 96.2% in the 2018 literacy survey conducted by the National Statistical Office, India;(ref #31, ref #32).
    According to the first economic census, conducted in 1977, 99.7% of the villages in Kerala had a primary school within 2 kilometres (1.2 mi), 98.6% had a middle school within 2 kilometres (1.2 mi) and 96.7% had a high school or higher secondary school within 5 kilometres (3.1 mi) (ref #33). In 2006–2007, the state topped the Education Development Index (EDI) of the 21 major states in India (ref #34). As of 2007, enrolment in elementary education was almost 100%; and, unlike other states in India, educational opportunity was almost equally distributed among sexes, social groups, and regions (ref #35). In January 2016, Kerala became the first Indian state to achieve 100% primary education through its Athulyam literacy programme (ref #36).
    <br/><br/>
    The KITE Kerala is a state owned special purpose company under education department of the Government of Kerala (ref #37). It was developed to support ICT enabled education for schools in the state. The erstwhile IT@School Project was transformed into KITE for extending its scope of operations in August 2017 (ref #38, ref #39). Kerala is the first Indian state to have ICT-enabled education with hi-tech classrooms in all public schools (ref #40). Kerala topped in the School Education Quality Index published by NITI Aayog in 2019 (ref #41).
    <br/><br/><br/>
    <h2>Women</h2>
    <br/><br/>
    Kerala has the highest score on the Gender Development index in India, as demonstrated by the relatively high literacy rate, sex ratio, and mean age at marriage for women, as well as low fertility and infant mortality rates compared to the rest of the country (ref #42 ).In fact, women in Kerala have played a crucial role in increasing the state's literacy rates, with the mobilization of educated, unemployed women making up two-thirds of volunteer teachers involved in the literacy drive during a 1990 campaign to eliminate illiteracy(ref #43). The literacy gap between males and females in India is lowest in Kerala, with the female literacy rate just 5% lower than that of males(ref #44).
    <br/><br/>
    There is a tradition of matrilineal inheritance in Kerala, where the mother is the head of the household (ref #45). As a result, women in Kerala have had a much higher standing and influence in the society. This was common among certain influential castes and is a factor in the value placed on daughters. Christian missionaries also influenced Malayali women in that they started schools for girls from poor families (ref #46). Opportunities for women such as education and gainful employment often translate into a lower birth rate, (ref #47) which in turn, make education and employment more likely to be accessible and more beneficial for women. This creates an upward spiral for both the women and children of the community that is passed on to future generations. According to the Human Development Report of 1996, Kerala's Gender Development Index was 597; higher than any other state of India. Factors, such as high rates of female literacy, education, work participation and life expectancy, along with favourable sex ratio, contributed to it (ref #48). Kerala's sex ratio of 1.084 (females to males) is higher than that of the rest of India and is the only state where women outnumber men(ref #49).
    <br/><br/><br/>
    <h2>Environmentalism, Conservation and Sustainability</h2>
    <br/><br/>
    Renewable energy sources constitute the bulk of electricity generated in Kerala. KSEB Ltd has 31 hydro-electric projects, 11 solar projects, 2 diesel power plants & 7 wind farms. Power generation is also undertaken by Captive Mode Projects, Independent Power Mode Projects & Co-generation mode projects other than KSEBL (ref #50).
    <br/><br/>
    India's largest floating solar power plant set up on the Banasura Sagar reservoir in Wayanad, Kerala. It is the 500 kWp (kilowatt peak) solar plant of the Kerala state electricity board (KSEB) floats on 1.25 acres of water surface of the reservoir.
    India's first solar ferry used for public transport, ADITYA, operates in Kerala. The Cochin International Airport the first airport in the world that runs entirely on solar power, is in Kerala. The Kochi Metro is planning 78 solar-electric ferry boats for the city, which will be the largest integrated water transport system in the world.
    The state topped in the country to achieve the Sustainable Development Goals according to the annual report of NITI Aayog published in 2019 (ref # 51).The state has the highest media exposure in India with newspapers publishing in nine languages, mainly Malayalam and sometimes English. Hinduism is practised by more than half of the population, followed by Islam and Christianity.
    <br/><br/><br/>
    <h2>LGTBIQ</h2>
    <br/><br/>
    Kerala has been at the forefront of LGBT issues in India (ref #52). Kerala is one of the first states in India to form a welfare policy for the transgender community. In 2016, the Kerala government introduced free sex reassignment surgery through government hospitals (ref #53, ref #54, ref #55) Queerala is one of the major LGBT organisations in Kerala. It campaigns for increased awareness of LGBT people and sensitisation concerning healthcare services, workplace policies and educational curriculum.(ref #56) Since 2010, Kerala Queer Pride has been held annually across various cities in Kerala (ref #57).
    <br/><br/>
    In June 2019, the Kerala government passed a new order that members of the transgender community should not be referred to as the "third gender" or "other gender" in government communications. Instead, the term "transgender" should be used. Previously, the gender preferences provided in government forms and documents included male, female, and other/third gender (ref #58, ref #59).

    <br/><br/>
    <br/><br/>
    <div style={{textAlign:"left"}}>
    <h2>References</h2>
  1)Sourav, Kumar, Status of Human Development in India (November 14, 2019). Available at SSRN: https://ssrn.com/abstract=3541151 or http://dx.doi.org/10.2139/ssrn.3541151<br/>
  2)"Table 162, Number and Population Below Poverty Line". Reserve Bank of India, Government of India. 2013. Archived from the original on 2 June 2017.<br/>
  3)"SDGs India Index". https://sdgindiaindex.niti.gov.in/#/ranking 31 December 2019<br/>
  4)"India Human Development Report 2011: Towards Social Inclusion"(PDF). Institute of Applied Manpower Research, Planning Commission, Government of India. Retrieved 24 October 2014.https://www.im4change.org/docs/340IHDR_Summary.pdf<br/>
  5)Parayil, Govindan (December 1996). "The 'Kerala model' of development: Development and sustainability in the Third World". Third World Quarterly. 17 (5): 941–958. http://www.tandfonline.com/doi/abs/10.1080/01436599615191<br/>
  6)Economic Review 2020 - Volume I (PDF). Thiruvananthapuram: Kerala State Planning Board. 2021. https://spb.kerala.gov.in/sites/default/files/2021-01/English-Vol-1_0.pdf<br/>
  7) Heller, Patrick (18 April 2020). "A virus, social democracy, and dividends for Kerala". The Hindu. Retrieved 2 February 2021 https://www.thehindu.com/opinion/lead/a-virus-social-democracy-and-dividends-for-kerala/article31370554.ece<br/>
  8)"Gross State Domestic Product of Kerala". Department of Economics and Statistics, Govt. of Kerala. Government of Kerala. Retrieved 4 December 2020. https://www.ecostat.kerala.gov.in/index.php/economy<br/>
  9)Economy – Kerala – States and Union Territories – Know India: National Portal of India". National Informatics Centre. Retrieved 6 December 2013.<br/>
  10)Mohindra KS (2003). "A report on women Self-Help Groups (SHGs) in Kerala state, India: a public health perspective". Université de Montréal Department de Medicine Social et Prévention. https://en.wikipedia.org/wiki/National_Informatics_Centre<br/>
  11)https://unacademy.com/content/kerala-psc/study-material/kerala/a-thriving-model-for-economic-growth/<br/>
  12)Annual Vital Statistics Report – 2018 (PDF). Thiruvananthapuram: Department of Economics and Statistics, Government of Kerala. 2020. p. 55. https://www.ecostat.kerala.gov.in/images/pdf/publications/Vital_Statistics/data/vital_statistics_2018.pdf<br/>
  13)"Population of homeless in rural India dips". The Times of India. India. 7 December 2013. Retrieved 14 November 2015. https://timesofindia.indiatimes.com/india/Population-of-homeless-in-rural-India-dips/articleshow/26981896.cms<br/>
  14)"CM told to pursue Zero Homeless Kerala project link". The Hindu.  Pathanamthitta, India. 3 November 2013. https://www.thehindu.com/news/national/kerala/cm-told-to-pursue-zero-homeless-kerala-project/article5309749.ece<br/>
  15)"Houses and household amenities and assets" (PDF). Census of India 2011. Retrieved 13 January 2017. http://censusindia.gov.in/2011census/hlo/Data_sheet/India/HLO_Indicators.pdf<br/>
  16)Report 2018, Government of Kerala, Annual Vital Statistics (2019). "ANNUAL VITAL STATISTICS REPORT – 2018, Vital Statistics Division Department of Economics & Statistics Thiruvananthapuram, Kerala 2019" (PDF). www.ecostat.kerala.gov.in.<br/>
  17) GBD India Compare | IHME Viz Hub". vizhub.healthdata.org. Retrieved 13 September 2021<br/>
  18)National Family Health 2005–06 Survey (NFHS-3) Kerala (PDF). Deonar, Mumbai: International Institute for Population Sciences. 2008. Retrieved 30 May 2015. https://www.ncscm.org/cms/geo/pdf/research/kerala_fact_sheet.pdf<br/>
  19) "Kerala Named World's First WHO-UNICEF "Baby-Friendly State"". United Nations Foundation. August 2002. Archived from the original on 6 March 2010. Retrieved 14 March 2009.<br/>
  20)"Indian state wins 'baby-friendly' award". BBC News. Kochi, India. 1 August 2002. https://news.bbc.co.uk/2/hi/south_asia/2166677.stm<br/>
  21)"Kerala-becomes-Indias-first-complete-digital-state link". The Times of India. New Delhi, India. 15 August 2015.<br/>
  22)Maya, C (12 December 2013). "The road to universal health care in State". The Hindu. Retrieved 14 November 2015.<br/>
  23)Kutty VR (2004). Nair PR, Shaji H (eds.). Why low birth weight (LBW) is still a problem in Kerala: A preliminary exploration (PDF). Kerala Research Programme on Local Level Development. Thiruvananthapuram: Centre for Development Studies. p. 6.<br/>
  24)Krishnaswami P (2004). Neelakantan S, Nair PR, Shaji H (eds.). Morbidity Study: Incidence, Prevalence, Consequences, and Associates (PDF). Kerala Research Programme on Local Level Development. Thiruvananthapuram: Centre for Development Studies.<br/>
  25)"Kerala as good as US, OECD in saving newborn children". The Times of India. Retrieved 9 March 2017. https://timesofindia.indiatimes.com/india/kerala-as-good-as-us-oecd-in-saving-newborn-children/articleshow/57438366.cms <br/>
  26)Patel, Atish (4 May 2016). "Why Kerala is the best place in India to die". https://www.bbc.com/news/world-asia-india-36137285 <br/>
  27)Kutty VR (2004). Nair PR, Shaji H (eds.). Why low birth weight (LBW) is still a problem in Kerala: A preliminary exploration (PDF). Kerala Research Programme on Local Level Development. Thiruvananthapuram: Centre for Development Studies. p. 6. ISBN 978-8187621607. Retrieved 12 November 2007.<br/>
  28)"Kerala becomes first state to provide free cancer treatment – Free Press Journal". www.freepressjournal.in. 11 October 2014. Retrieved 18 May 2016 https://www.freepressjournal.in/kerala-becomes-first-state-to-provide-free-cancer-treatment/457976 <br/>
  29)Krishnakumar, P. K.; Sanandakumar, S. (23 April 2016). "Health crisis in Kerala: The increase in cancer, kidney and liver diseases – The Economic Times". The Economic Times. Retrieved 18 May 2016. <br/>
  30)Statistics Wing, Health Information Cell (2019). List of modern medicine institutions (2017–18) (PDF). Thiruvananthapuram: Directorate of Health Services, Government of Kerala. pp. 1, 7 https://economictimes.indiatimes.com/industry/healthcare/biotech/healthcare/health-crisis-in-kerala-the-increase-in-cancer-kidney-and-liver-diseases/articleshow/51950836.cms?intenttarget=no <br/>
  31)"Literacy Survey, India (2017–18)". Firstpost. 8 September 2020. Retrieved 9 September 2020. "Literacy Rate in Kerala – 2018"<br/>
  32)"Tripura tops literacy rate with 94.65 per cent, leaves behind Kerala". IBNLive. 9 September 2013. Archived from the original on 13 September 2013. Retrieved 12 February 2015. https://web.archive.org/web/20130913005546/https://ibnlive.in.com/news/tripura-tops-literacy-rate-with-with-9465-per-cent-leaves-behind-kerala/420560-3-224.html <br/>
  33)Srikumar Chattopadhyay; Richard W. Franke (2006). Striving for Sustainability: Environmental Stress and Democratic Initiatives in Kerala. ISBN 978-8180692949. Retrieved 19 March 2019. https://books.google.com/books?id=gOrvghLklKoC&pg=PA110<br/>
  34)D Suresh Kumar (13 October 2008). "Kerala tops primary education index". The Times of India. Retrieved 30 July 2009. https://timesofindia.indiatimes.com/india/Kerala-tops-primary-education-index/articleshow/3587924.cms <br/>
  35)D Suresh Kumar (13 October 2008). "Kerala tops primary education index". The Times of India. Retrieved 30 July 2009. https://timesofindia.indiatimes.com/india/Kerala-tops-primary-education-index/articleshow/3587924.cms <br/>
  36)"Kerala becomes 1st Indian state to achieve 100% primary education". International Business Times. 12 January 2016. Retrieved 14 January 2016. https://www.ibtimes.co.in/kerala-becomes-1st-indian-state-achieve-100-primary-education-662878 <br/>
  37)"Kerala's 'IT@school' project now a government company 'KITE'". indianexpress.com. 7 August 2017. Retrieved 6 September 2018.   "Kerala Infrastructure and Technology for Education". Kerala Infrastructure and Technology for Education about us page. Retrieved 6 September 2018. https://indianexpress.com/article/education/keralas-itschool-project-now-a-government-company-kite-cm-pinarayi-vijayan-launches-logo-4785993/ <br/>
  38)"Kerala's IT@school project now a govt company". www.thehindubusinessline.com. Retrieved 6 September 2018. https://www.thehindubusinessline.com/news/national/keralas-itschool-project-now-a-govt-company/article9805422.ece <br/>
  39)S, Shihaubudeen Kunju (7 August 2017). "Kerala Government's IT@school Project Formed Into Government Company". NDTV. Retrieved 22 December 2018.<br/>
  40)"Kerala becomes first state to have hitech classrooms in all public schools". Financial Express. 12 October 2020.  "Kerala becomes first state to have hitech classrooms in all public schools, says CM". NDTV. 12 October 2020. https://www.ndtv.com/education/kerala-has-become-first-state-have-hi-tech-classrooms-in <br/>
  41) Bakshi, Gorki (30 September 2019). "Niti Aayog's School Education Quality Index: Kerala tops, UP worst performer". Jagranjosh. Retrieved 4 December 2020 https://www.jagranjosh.com/current-affairs/niti-aayogs-school-education-quality-index-kerala-tops-up-worst-performer-1569845124-1 <br/>
  42)Kumar, B. Pradeep (1 December 2020). "Does Gender Status Translate into Economic Participation of Women? Certain Evidence from Kerala" (PDF). Shanlax International Journal of Economics. Rochester, NY. 1 (9): 50–56.<br/>
  43)Chacko, Elizabeth (2003). "Marriage, Development, and the Status of Women in Kerala, India". Gender and Development. 11 (2): 52–59. <br/>
  44)Education". Kerala Government. Archived from the original on 26 July 2010. Retrieved 17 July 2010. <br/>
  45)"International Women's Day 2017: Kerala and the myth of matriarchy-Living News , Firstpost". Firstpost. 5 March 2017. Retrieved 16 July 2021. <br/>
  46)Lankina; Tomila V.; Getachew, Lullit (2013). "Competitive religious entrepreneurs: Christian missionaries and female education in colonial and post-colonial India" (PDF). British Journal of Political Science. 43: 103–31.<br/>
  47)Lankina; Tomila V.; Getachew, Lullit (2013). "Competitive religious entrepreneurs: Christian missionaries and female education in colonial and post-colonial India" (PDF). British Journal of Political Science. 43: 103–31.<br/>
  48)Ammu Joseph (1999). Oommen M.A. (ed.). Rethinking Development: Kerala's Development Experience. Concept Publishing Company. pp. 479–86. ISBN 978-8170227656. Retrieved 30 May 2015. <br/>
  49) Tharamangalam J (2005). "The Perils of Social Development without Economic Growth: The Development Debacle of Kerala, India" (PDF). Political Economy for Environmental Planners. Archived from the original (PDF) on 15 November 2013. Retrieved 28 December 2008<br/>
  50)"Kerala State Electricity Board Limited - Generation". <br/>
  51)Gireesh Chandra Prasad (30 December 2019). "Kerala tops sustainable development goals index". Livemint. Retrieved 4 December 2020.<br/>
  52)"Kerala Government Has Unveiled A Policy To Enforce Constitutional Rights Of Transgenders". The Huffington Post. 12 November 2015. Retrieved 28 June 2016.<br/>
  53)Devasia, T. K. "Why Kerala's free sex-change surgeries will offer a new lifeline for the transgender community". Scroll.in. Retrieved 5 July 2019.<br/>
  54)”After She-Taxi, Kerala to launch G-Taxi for transgenders". Times of India. Thiruvananthapuram. PTI. 31 January 2016. Retrieved 25 March 2016.<br/>
  55)"How Kerala left the country behind on transgender rights". dna. 14 November 2015. Retrieved 19 March 2016.<br/>
  56) "Affirming their right, they march with pride". The Hindu. 13 August 2017. ISSN 0971-751X. Retrieved 4 April 2022.<br/>
  57)"Kerala to host its first gay parade". The Times of India. 30 June 2010.<br/>
  58)"Kerala govt passes order to use 'transgender' instead of 'third/other gender'". www.thenewsminute.com. 30 June 2019. Retrieved 8 July 2019.<br/>
  59)Roshni, R. k (30 June 2019). "Only 'transgender' in official communication". The Hindu. ISSN 0971-751X. Retrieved 8 July 2019.<br/>
    </div>
    <Comment id={"Ujamaa"} tempuser={user}/>
    </p>
      </div>
    )}
