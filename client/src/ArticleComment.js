import React, {useRef,useState,useEffect} from 'react'
import auth from './auth/auth-helper'
const mongoose = require("mongoose");


export default function Comment(props) {
  const commentValue = React.useRef('')
  const emailValue = React.useRef('')
  const nameValue = React.useRef('')
  const [userIdentifier, setUserIdentifier] = useState();
  const [comments, setComments] = useState();

  useEffect(() => {
    console.log(props.tempuser,"props.tempuser")
setUserIdentifier(props.tempuser)
    fetch("/posts/getcomments/"+props.id)
    .then(res => {
      return res.json();
    }).then(comments => {
      setComments(comments.data)})
      .catch(err => {
        console.error(err);
      })
    },[props])



    function deleteComment(e,id) {
      e.preventDefault()
      var commentscopy=JSON.parse(JSON.stringify(comments))
      var filteredarray = commentscopy.filter(function( obj ) {
        return obj._id !== id;
      });
      setComments(filteredarray);

      const options={
        method: "Delete",
        body: '',
        headers: {
          "Content-type": "application/json; charset=UTF-8"}}

          fetch("/posts/deletecomment/"+id, options)
          .then(response => response.json())
          .then(json =>console.log(json))
            .catch(err => {
              console.error(err);
            })

          }

          async function handleSubmit(e) {
            e.preventDefault()
            var d = new Date();
            var n = d.getTime();
            var commentId=mongoose.Types.ObjectId()
            commentId=commentId.toString()
            console.log(userIdentifier,"userIdentifier")
            let newComment={
              _id:commentId,
              postid:props.id,
              comment: commentValue.current.value,
              timecreated:n,
              email:emailValue.current.value,
              name:nameValue.current.value,
              identifier:userIdentifier
            }

              newComment.email=emailValue.current.value
              newComment.name=nameValue.current.value
              newComment.identifier=userIdentifier


            var commentscopy=JSON.parse(JSON.stringify(comments))
            commentscopy.push(newComment)
            setComments(commentscopy);


            const options={
              method: "POST",
              body: JSON.stringify(newComment),
              headers: {
                "Content-type": "application/json; charset=UTF-8"}}


                await fetch("/posts/createcomment/"+commentId, options)
                .then(response => response.json())
                .then(json =>console.log(json))
                  .catch(err => {
                    console.error(err);
                  })

                  const optionstwo = {
                    method: 'put',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: ''
                  }

                }


                if(comments){
                  var commentsmapped=comments.map((item,i)=>{
                    return (
                      <>
                      <div key={i} className="comment">
                      <p className="commp" style={{margin:'1vw',fontSize:"small"}}>{item.comment}</p>
                      <div classname="comm">
                      {item.createdby&&<p style={{display:"inline",margin:'1vw',fontSize:"small"}}><strong>Comment by {item.createdby.name}</strong></p>}
                      {item.name&&<p style={{display:"inline",margin:'1vw',fontSize:"small"}}><strong>Comment by {item.name}</strong></p>}
                      {item.createdby&&<button style={{display:"inline"}} onClick={(e)=>deleteComment(e,item._id)}>Delete comment?</button>}
                      </div>
                      </div>
                      </>
                    )})}

                    return (
                      <div className='articlecomments'>
                      <div className='commentform'>
                      <div>
                      <div style={{display:"inline"}}>
                      <p style={{display:"inline",fontSize:"small",marginRight:"1vw"}} htmlFor='name'><strong>Name</strong></p>
                      <input className='nameinput'
                      type='text'
                      style={{overflowY:"auto"}}
                      name='nameValue'
                      id='nameValue'
                      ref={nameValue}
                      />
                      </div>
                      <div style={{display:"inline"}}>
                      <p style={{display:"inline",fontSize:"small",marginLeft:"2vw",marginRight:"1vw"}} htmlFor='name'><strong>Email</strong></p>
                      <input className='emailinput'
                      type='text'
                      style={{overflowY:"auto"}}
                      name='emailValue'
                      id='emailValue'
                      ref={emailValue}
                      />
                      </div>
                      </div>
                      <div>
                      <p style={{display:"inline",fontSize:"small"}} htmlFor='name'><strong>Comment</strong></p>
                      <input className='commentinput'
                      type='text'
                      style={{overflowY:"auto"}}
                      name='commentValue'
                      id='commentValue'
                      ref={commentValue}
                      />
                      </div>
                      <button style={{display:"inline"}} onClick={(e) => handleSubmit(e)}>Submit Comment</button>
                      </div>
                      <hr/>
                      <div className="commentsdisplay">
                      {commentsmapped&&commentsmapped}
                      </div>

                      </div>

                    )}
