import React, {useState, useEffect, useRef} from 'react'
import auth from './../auth/auth-helper'
const mongoose = require("mongoose");


export default function Poll (props) {
  const [suggestions, setSuggestions] = useState([]);
  const [poll, setPoll] = useState(props.poll);
  const [group, setGroup] = useState(props.group);
  const pollsuggestion = React.useRef('')

  useEffect(() => {
console.log("props",props)
setGroup(props.group)
setPoll(props.poll)
    fetch("/polls/getsuggestions/"+props.poll._id)
    .then(res => {
      return res.json();
    }).then(suggestions => {
      console.log("suggestions!!!!!!!!!!!!!!!!!!",suggestions)
  setSuggestions(suggestions.data)})
  .catch(err => {
    console.log(err);
  })
},[props])



function sendPollDown(){
  console.log("sending poll down",poll)

  if(!poll.sentdown){
    var pollcopy=JSON.parse(JSON.stringify(poll))

  pollcopy.sentdown=true

    setPoll(pollcopy)


          const options = {
            method: 'put',
            headers: {
              'Content-Type': 'application/json'
            },
               body: ''
          }

          fetch("/polls/marksentdown/" + poll._id, options
    ).then(res => {
     console.log(res);
    }).catch(err => {
     console.log(err);
    })

    console.log("GROUPS BELOW",group)
    let lowergroupids=[]
    for (let grou of group.groupsbelow){
      console.log("GROUP",grou,poll)
      if(grou.groupsbelow){
        lowergroupids.push(...grou.groupsbelow)
      }
  lowergroupids.push(grou._id)
        }
        console.log("lowergroupids",lowergroupids)
  for (let gr of lowergroupids){
    console.log("Lower GROUP",gr,poll._id)
    fetch("/polls/sendpolldown/" + poll._id +"/"+ gr, options
  ).then(res => {
  console.log(res);
  }).catch(err => {
  console.log(err);
  })
  }
  }
}

function approveOfSendingPollDown(e,pollId){
  var pollcopy=JSON.parse(JSON.stringify(poll))

  let approval=0


  if(!pollcopy.approval.includes(auth.isAuthenticated().user._id)){
  pollcopy.approval.push(auth.isAuthenticated().user._id)
  }

  if(group.members.length>0){
    approval=Math.round((pollcopy.approval.length/group.members.length)*100)
  }
  console.log("APPROVAL",group)
  if (approval>45){
    sendPollDown()
  }
  if (approval<75&&(n-poll.timecreated)>604800000){
    // this.deletePoll(item)
  }
  if(approval>=10&&!poll.notificationsent){
    // this.sendPollNotification(item)
  }

  setPoll(pollcopy)


        const options = {
          method: 'put',
          headers: {
            'Content-Type': 'application/json'
          },
             body: ''
        }

        fetch("/polls/approveofsendingpolldown/" + pollId +"/"+ auth.isAuthenticated().user._id, options
  ).then(res => {
   console.log(res);
  }).catch(err => {
   console.log(err);
  })
}

function withdrawApprovalOfSendingPollDown(e,pollId){
  var pollcopy=JSON.parse(JSON.stringify(poll))

  function checkPoll(userid) {
    return userid!=auth.isAuthenticated().user._id
  }

      var filteredapproval=pollcopy.approval.filter(checkPoll)
      pollcopy.approval=filteredapproval

  setPoll(pollcopy)

        const options = {
          method: 'put',
          headers: {
            'Content-Type': 'application/json'
          },
             body: ''
        }

        fetch("/polls/withdrawapprovalofsendingpolldown/" + pollId +"/"+ auth.isAuthenticated().user._id, options
  ).then(res => {
   console.log(res);
  }).catch(err => {
   console.log(err);
  })
}


  function handleSubmit(e){
e.preventDefault()
      var d = new Date();
      var n = d.getTime();
      var pollSuggestionId=mongoose.Types.ObjectId()

      const newPollSuggestion={
        _id:pollSuggestionId,
        suggestion:pollsuggestion.current.value,
        pollid:props.poll._id,
        timecreated:n,
        approval:[auth.isAuthenticated().user._id],
        createdby:auth.isAuthenticated().user._id
      }


console.log("newpollsuggestion",newPollSuggestion)
      var suggestionscopy=JSON.parse(JSON.stringify(suggestions))
      suggestionscopy.push(newPollSuggestion)
      setSuggestions(suggestionscopy)
      console.log(suggestionscopy)
      const options={
          method: "POST",
          body: JSON.stringify(newPollSuggestion),
          headers: {
              "Content-type": "application/json; charset=UTF-8"}}


        fetch("/polls/createpollsuggestion/"+pollSuggestionId, options)
                .then(response => response.json())
                .then(json => console.log(json))
                .catch(err => {
                  console.log(err);
                })
  }


    function deletePollSuggestion(e,id) {
      e.preventDefault()
      var suggestionscopy=JSON.parse(JSON.stringify(suggestions))
      var filteredarray =suggestionscopy.filter(function( obj ) {
   return obj._id !== id;
   });
      setSuggestions(filteredarray);

        console.log(filteredarray)
        const options={
            method: "Delete",
            body: '',
            headers: {
                "Content-type": "application/json; charset=UTF-8"}}


           fetch("/polls/deletesuggestion/"+id, options)
                  .then(response => response.json())
                  .then(json => console.log(json))
                  .catch(err => {
                    console.log(err);
                  })

    }


    function approveofsuggestion(e,id){
var suggestionscopy=JSON.parse(JSON.stringify(suggestions))
function checkSuggestion() {
return id!==auth.isAuthenticated().user._id
}
for (var suggestion of suggestionscopy){
if (suggestion._id==id){

if(!suggestion.approval.includes(auth.isAuthenticated().user._id)){
suggestion.approval.push(auth.isAuthenticated().user._id)
}

setSuggestions(suggestionscopy)
}
}

setSuggestions(suggestionscopy)
      const options = {
        method: 'put',
        headers: {
          'Content-Type': 'application/json'
        },
           body: ''
      }

      fetch("/polls/approveofsuggestion/" + id +"/"+ auth.isAuthenticated().user._id, options
).then(res => {
 console.log(res);
}).catch(err => {
 console.log(err);
})

}


    function withdrawapprovalofsuggestion(e,id){

      console.log("ID!!!!!",id)
      var suggestionscopy=JSON.parse(JSON.stringify(suggestions))
      function checkSuggestion(userid) {
        return userid!=auth.isAuthenticated().user._id
      }
      for (var suggestion of suggestionscopy){
        if (suggestion._id==id){


          var filteredapproval=suggestion.approval.filter(checkSuggestion)
          suggestion.approval=filteredapproval
        }
      }
      setSuggestions(suggestionscopy)

      const options = {
        method: 'put',
        headers: {
          'Content-Type': 'application/json'
        },
           body: ''
      }

      fetch("/polls/withdrawapprovalofsuggestion/" + id +"/"+ auth.isAuthenticated().user._id, options
) .then(res => {
 console.log(res);
}).catch(err => {
 console.log(err);
})
    }


let suggestionsmapped=<></>
if(suggestions&&props.users){
  console.log("users in Poll",props.users)
  var d = new Date();
  var n = d.getTime();


  if(suggestions.length>=3&&!props.poll.notificationsent){
    console.log("SENDING POLL NOTIFICCATION")
    props.sendPollNotification(props.poll)
  }

  suggestionsmapped=suggestions.map(item=>{
    let approval=<></>
    let wholegroupapproval=<></>

    let allmembers=[]
    for (let g of group.groupsbelow){
    allmembers.push(g.members)
    for (let gr of g.groupsbelow){
    allmembers.push(gr.members)
  }}

      if(group.level>poll.level){
        wholegroupapproval=Math.round((item.approval.length/allmembers.length)*100)
      }
      approval=Math.round((item.approval.length/group.members.length)*100)

    if (approval<75&&(n-item.timecreated)>604800000){
      this.deletePollSuggestion(item)
    }


    let width=`${(item.approval.length/props.users.length)*100}%`

    return (<>
      <div className="pollbox">
<h5 className="ruletext">{item.suggestion}, suggested by {item.createdby.name}, </h5>
<h5 className="ruletext">{approval}% of members in this group approve this suggestion, {item.approval.length}/{group.members.length}</h5>
{(group.level>poll.level)&&<h5 className="ruletext">{wholegroupapproval}% of all members in all groups represented by this one approve this suggestion, {item.approval.length}/{allmembers.length}</h5>}

{!item.approval.includes(auth.isAuthenticated().user._id)&&<button className="ruletext" onClick={(e)=>approveofsuggestion(e,item._id)}>Approve this suggestion?</button>}
{item.approval.includes(auth.isAuthenticated().user._id)&&<button className="ruletext" onClick={(e)=>withdrawapprovalofsuggestion(e,item._id)}>Withdraw Approval?</button>}
<div className="percentagecontainer"><div style={{width:width}} className="percentage"></div></div>
{(group.level>poll.level)&&<p>This poll has been passed down by a higher group, all of it's children groups can vote on this question</p>}
</div>
    </>)})
}
let approval=<></>

if(group.members){
  approval=Math.round((poll.approval.length/group.members.length)*100)
}

let approveenames=[]
for (let user of group.members){
  for (let approvee of poll.approval){
    if (approvee==user._id){
      approveenames.push(user.name)
    }
  }
}
let width=`${(poll.approval.length/group.members.length)*100}%`

    return (
  <>
  <div>
  <div className="pollbox">
  <h3 className="ruletext">{props.poll.pollquestion}  </h3>
  <h4 className="ruletext">Poll Created By {props.poll.createdby.name}</h4>
  <button onClick={(e)=>props.deletePoll(e,props.poll)}>Delete?</button>
  <form>
          <div >
          <h5 className="ruletext">Create Poll Suggestion</h5>
        <button className="ruletext" onClick={(e) => handleSubmit(e)}>New Poll Suggestion?</button>
      <textarea ref={pollsuggestion} id="story" rows="2" />
          </div>
        </form>
        </div>
        <div>
        {suggestionsmapped}

        {(group.level==poll.level)&&<>
          <div className="pollbox">
          <h5 className="ruletext">Send Down?</h5>
            {(!poll.approval.includes(auth.isAuthenticated().user._id))&&<button onClick={(e)=>approveOfSendingPollDown(e,poll._id)}>Send poll down to children groups?</button>}
          {(poll.approval.includes(auth.isAuthenticated().user._id))&&<button onClick={(e)=>withdrawApprovalOfSendingPollDown(e,poll._id)}>Don't send poll down to children groups?</button>}
        {group.members&&<h4 className="ruletext">{approval}% of members want to send this poll to lower groups, {poll.approval.length}/{group.members.length}. {poll.approval.length>0&&<h4 style={{display:'inline'}}>Approvees=</h4>}</h4>}
        {approveenames&&approveenames.map((item,index)=>{return(<><h4 className="ruletext">{item}{(index<(approveenames.length-2))?", ":(index<(approveenames.length-1))?" and ":"."}</h4></>)})}
        <div className="percentagecontainer"><div style={{width:width}} className="percentage"></div></div></div>
        </>}
        </div>
        </div>
        </>
    )
}
