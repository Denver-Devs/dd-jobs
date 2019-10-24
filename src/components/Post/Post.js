import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import { StyledPost } from './StyledPost'
import { LinkButton } from '../Global/Button'

const StyledUserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.45rem;

  img {
    border-radius: 50%;
    margin-bottom: 0;
    max-width: 72px;
    margin-right: 1.45rem;
  }

  p {
    margin: 0;
  }
`

const Post = ( props ) => {
  const [hasError, setErrors] = useState( false )
  const [userInfo, setUserInfo] = useState( {} )
  const { user, text } = props.postData

  const SLACK_REQ = `https://slack.com/api/users.profile.get?token=${process.env.GATSBY_SLACK_TOKEN}&user=${user}`


  const fetchData = () => {
    axios.get( SLACK_REQ )
      .then( res => setUserInfo( res.data.profile ) )
      .catch( err => setErrors( err ) )
  }

  useEffect( () => {
    fetchData()
  }, [] )

  return(
    <StyledPost>
      <div className="content">
        <StyledUserInfo>
          <img src={userInfo.image_72} alt=""/>
          <p>{userInfo.real_name_normalized}</p>
        </StyledUserInfo>
        <p>{text}</p>
      </div>
      <LinkButton href="#">Apply Now!</LinkButton>
    </StyledPost>
  )
}

export default Post