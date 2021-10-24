import React, {useRef,useState} from 'react'



export default function ExplanationPage() {
  return (
  <>
  <br/>
  <br/>
  <div style={{margin:"4vw"}}>
<h1>How does Democracy Book Work?</h1>
<p>This democratic social network is guided by the principle that if something is relevant to you and you have the
expertise to understand it, you should be directly involved in making decisions about it. Authority should be grounded
in wisdom, knowledge and moral integrity instead of coercive, exploitative power. People's ability to
participate should be independent of how wealthy they are.
</p>
<p>
At the bottom level there are small groups of less than 50 people, anyone can create one of these. Each of these can elect
delegates to higher level groups that represent larger groups of people. These teams can all create and enforce rules together with
direct democracy.
</p>
<p>
In order to promote equality and cooperation between groups there are higher level representative assemblies.
There are no particular election events, instead you can just vote or withdraw a vote for anyone in your groups at any time.
These leaders can have their authority taken away at any time if the group chooses. This provides a much stronger incentive
for leaders to consult and discuss with people in order to make choices that most people are happy with and to lead the group in a
direction that is in the best interest of the group. Higher level representative groups can vote to propose rules and events to
the lower groups. One of our goals is for people to mostly only be choosing leaders they know personally. This allows us to have
more confidence in the quality of our leaders' character, their trustworthyness, integrity, competence and wisdom.
</p>
<p>
All the groups in this network are relatively small. This is intended to promote deliberative democracy. We want people to be
making informed choices, have discussions in order to share information, correct each others mistakes and try to arrive
at decisions that are much better informed than any individual could come up with. It is not enough for people to simply consent
to a group decision, their should be informed consent.
</p>
<p>
In this application, all voting is open. You can see exactly who has voted for what, you can even visit higher level representative groups
in order to observe their discussions. If you are worried about people persecuting you for expressing your thoughts and
opinions, there are much deeper problems than whether or not voting is secret and anonymous. The real issue is that there
are imbalances of power that must be fixed. Anonymity mostly makes it easier for people to stab each other in the back.
It encourages passive aggressive behaviour. If you are going to vote for something that oppresses, abuses or exploits someone else,
they should be able to see this and
confront you. Open voting encourages discussion, if you disagree with people you can try to share information with each
other in order to reach a mutual understanding. If you don't know who has voted for what, you won't know who you need to
start the conversation with. It is much harder to dehumanize people if you must interact with them personally and witness
their emotional response to your abuse. For example, in worker cooperatives, democratic businesses that are owned and run by
their own workers, people very rarely get fired. The managers and directors are elected by the workers and usually work
fairly closely with them. In a large Capitalist business, the upper level managers and directors who make most decisions about
who to hire and fire practically never meet or work directly with the lower level workers and thus they very easily dispose
of them when their work is no longer profitable to the business.
</p>
<p>
Errors are a natural, inevitable and useful
part of the learning process. A "debate" is an irrational form of discussion that leads to sophistry. Finding the truth is not a
contest. If we think of our disagreements as a competition, we will try to rationalise our point of view, we will try to
manipulate or distort the truth in order to fit our perspective. We will selective focus on information that confirms our biases.
We only think this way because our society is so hierarchical. Powerful people do not need to have valid arguments,
they can simply impose their views onto others. Often when we disagree with people, we worry that an admission of error will be
interpretted as an admission of inferiority. However, whether you are right or wrong about any particular question tells us nothing about
your overall worth as a person. When we mutually arrive at the most accurate answers, everybody wins, regardless of whether
any individual is right or wrong. If I am correct and I fail to persuade you, we both lose. Failure to understand this is the
root cause of most of the bureaucratic bullshit in our society. Bees can demonstrate the benefits of this sort of thinking.
When honeybees need to find a new place to build a nest they
send out hundreds of scouts to search for one. They know exactly what they are all looking for, they need certain height, temperature,
protection from the weather, access to food etc. The more bees they send out, the greater the chance they will find a better quality
home. While hundreds of bees investigate, only the best place is chosen and they all unanimously agree to move to this new location
because it is in everyone's interest to do this.
</p>
<p>
The principles outlined above are not just some abstract theory, they are ones that have proven to be extremely practical and
viable. Countries that have systems similar to this are generally much more humanistic than Capitalist ones in almost every way.
If you look at statistics from the World Bank, World Health Organization and United Nations Development Programme you can see
that Socialist countries have much better standards of mental and physical health, the rates of death from most of the most
common causes are much lower, including infant mortalities, diabetes, lung infections, suicide and heart disease. The cost of living is usually much cheaper,
wages rise much more rapidly and unemployment rates are lower, housing is much more afforable and there are very few homeless people.
There are much fewer violent crimes, rates of criminal re-offending are much lower. The quality and standards of education are much better,
and university much cheaper. Often, socialist countries are much more feministic, with much higher rates of female participation
in the representative assemblies. Childcare is usually very cheap, there are much fewer teenage pregnancies, the gender wage gap is
usually lower.

We made a simple app to display this data.
<iframe src="https://socialism-beats-capitalism.herokuapp.com/">
</iframe>

</p>
</div>
<br/>

  </>
  )}

  // <p>
  // The main group composed of everyone of Democracy Book is subdivided up into smaller groups that are federated or linked
  // together, all are less than 50 people in size. At the top level, level 0, are local groups
  // composed of roughly 40 people or less. We put you with people who live closest to your location.
  // For roughly each four of these local groups there is a lower level group that represents them both. This group is
  // composed of roughly 20 people chosen at random from the 160 members of the local groups above and 20 elected by the upper
  // groups. For each four of these higher level groups there is an even lower representative group composed of 20 people chosen
  // at random from the top 640 users and 20 elected by them. This pattern of linking or "federating" groups together
  // repeats until all members are linked together. Level one groups represent 160 people, level two groups
  // represent 640 people, level three represents 2560, level four 10240 and so on. Lower level groups cannot impose
  // onto the groups above them, but they can make proposals. They can suggest rules and events to be approved by referendum.
  // Local groups can also make their own rules and events. You can click to vote on any rule or event in a group you are a member
  //  of. In lower level groups if a rule or event does not receive the approval of the majority of representatives in that group
  //  it is deleted. If it does get more than 50% approval, it is passed up to the local groups for a referendum and all relevant
  //  members can vote. If it doesn't get more than 50% approval after one month, the event or rule is deleted.
  //
  //  Users can visit and watch all groups in democracy book but you can propose rules or events or write posts in lower level groups
  //  unless you are chosen to be a representative. All users will at some time be chosen and everyone has an equal opportunity.
  //  Half of these representatives are chosen at random because this ensures a good mix of all demographic groups. By this I
  //  mean there will be a proportionate number of men and women (50:50), a proportionate number of Asian, African, Young, Elderly,
  //  Indigenous and so on. The other half of representatives are elected. Users can vote to give or withdraw approval from a
  //  candidate at any time. They can also propose a candidate at any time. This gives elected representatives a greater
  //  incentive to consult with and discuss with the people they represent, if they don't do what the people want, or lead them
  //  in a direction that is in the best interests of the group, they can have their authority revoked. Ideally, all members of Democracy
  //  Book will have a high level of political and social conscious and even the randomly chosen representatives will just voluntarily
  //  try their best to also lead the whole group in a direction that is their best interests.
  //
  // Users can also join groups for particular subjects or issues. These are subdivided and linked in the same way as all the local groups
  //
  // The subdivided groups are relatively small, roughly 40 people. This means that all members can participate in discussion and we can
  // have more in depth conversations and discussions in order to reach the most informed decisions. We are trying to create deliberative democracy.
  // </p>
