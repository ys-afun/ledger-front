import React from 'react'
import {View, Text, Pressable} from 'react-native'
import {useQuery, gql} from '@apollo/client'
import styled from 'styled-components/native'

import LedgerList from '../components/LedgerList'

export default () => {
  return (
    <Container>
      <LedgerHeader>
        <Text>11월</Text>
        <InlineBox>
          <Text>지출</Text>
          <Text>381,350</Text>
        </InlineBox>
        <InlineBox>
          <Text>수입</Text>
          <Text>500,000</Text>
        </InlineBox>
      </LedgerHeader>
      <LedgerList />
    </Container>
  )
}

const Container = styled.View`
  background-color: #eee;
`

const LedgerHeader = styled.View`
  margin-bottom: 10px;
  padding: 20px 15px;
  background-color: #fff;
`

const InlineBox = styled.View`
  flex-direction: row;
  align-items: center;
`
