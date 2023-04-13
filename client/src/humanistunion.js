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
    <div style={{marginLeft:"5vw",marginTop:"3vw",width:"90vw"}}>
    <br/><br/><br/><br/>
    <h1>The Humanist Union</h1>
    <iframe src={"https://www.youtube.com/embed/7zbjWPLnbPw"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )}
