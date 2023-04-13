import React, {useEffect} from 'react'

export default function HumanistUnion() {

  useEffect(() => {
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
fetch("/groups/addtopagecounter/humanistunion", options
).then(res => {
return res.json()
}).catch(err => {
console.error(err);
})
}

  return (
    <div style={{marginLeft:"5vw",marginTop:"3vw",width:"90vw",textAlign:"center"}}>
    <h1>The Humanist Union</h1>
    <iframe style={{height:"60vh",width:"50vw"}} src={"https://www.youtube.com/embed/7zbjWPLnbPw"} title="YouTube video player" frameborder="0"allowfullscreen></iframe>
    </div>
  )}
