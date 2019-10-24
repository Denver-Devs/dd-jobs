import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import Layout from '../theme/layout'
import Post from "../components/Post/Post"

import { bpSmall } from '../styles/base/variables'

const StyledContainer = styled.div`

  @media(${bpSmall}) {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat( auto-fit, minmax(500px, 1fr) );
  }
`


export default () => {
  const [hasError, setErrors] = useState( false )
  const [messages, setMessages] = useState( [] )

  const SLACK_REQ = `https://slack.com/api/conversations.history?token=${process.env.GATSBY_SLACK_TOKEN}&channel=${process.env.GATSBY_SLACK_CHANNEL_ID}`


  const fetchData = () => {
    axios.get( SLACK_REQ )
      .then( res => setMessages( res.data.messages ) )
      .catch( err => setErrors( err ) )
  }

  useEffect( () => {
    fetchData()
  }, [])

  const posts = messages.map(message => message.client_msg_id ? <Post key={message.client_msg_id} postData={message} /> : null)

  return (
    <Layout>
      <h1>Jobs</h1>
      <StyledContainer>
        {posts}
      </StyledContainer>
    </Layout>
  )
}
