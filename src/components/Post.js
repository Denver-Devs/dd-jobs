import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Post = ( props ) => {
  const [hasError, setErrors] = useState( false )
  const [userInfo, setUserInfo] = useState( {} )
  const { user, text } = props.postData

  const SLACK_REQ = `https://slack.com/api/users.profile.get?token=${process.env.SLACK_TOKEN}&user=${user}`


  const fetchData = () => {
    axios.get( SLACK_REQ )
      .then( res => setUserInfo( res.data.profile ) )
      .catch( err => setErrors( err ) )
  }

  useEffect( () => {
    fetchData()
  }, [] )

  return(
    <div>
      <img src={userInfo.image_72} alt=""/>
      <h1>{userInfo.display_name}</h1>
      <p>{text}</p>
    </div>
  )
}

export default Post