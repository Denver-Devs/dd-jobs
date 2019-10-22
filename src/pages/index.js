import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Post from "../components/Post"


export default () => {
  const [hasError, setErrors] = useState( false )
  const [messages, setMessages] = useState( [] )

  const SLACK_REQ = `https://slack.com/api/conversations.history?token=${process.env.SLACK_TOKEN}&channel=${process.env.SLACK_CHANNEL_ID}`


  const fetchData = () => {
    axios.get( SLACK_REQ )
      .then( res => setMessages( res.data.messages ) )
      .catch( err => setErrors( err ) )
  }

  useEffect( () => {
    fetchData()
  }, [] )

  const posts = messages.map(message => message.client_msg_id ? <Post key={message.client_msg_id} postData={message} /> : null)

  return (
    <div>
      <h1>Jobs</h1>
      {posts}
    </div>
  )
}
