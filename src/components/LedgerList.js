import React from 'react'
import {useQuery, gql} from '@apollo/client'
import styled from 'styled-components/native'

import {Text, Pressable, FlatList} from 'react-native'
import LedgerItem from './LedgerItem'

const GET_LEDGERS = gql`
  query Query {
    getLedgers {
      id
      category
      subCategory
      client
      value
    }
  }
`

export default ({ledgers}) => {
  const {loading, error, data} = useQuery(GET_LEDGERS)

  let list
  if (loading) return (list = <Text>loading...</Text>)
  if (error) return (list = <Text>error...</Text>)
  list = data
  console.log('get ledgers: ', list.getLedgers)

  const renderItem = ({item}) => <LedgerItem item={item} />

  return (
    <Container>
      <FilterWrapper>
        <Pressable>
          <Text>전체내역</Text>
        </Pressable>
        <Pressable>
          <Text>내역 추가</Text>
        </Pressable>
      </FilterWrapper>
      {/* 거래내역 */}
      <FlatList
        data={data.getLedgers}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </Container>
  )
}

const Container = styled.View`
  padding: 0 15px;
  background-color: #fff;
`

const FilterWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
`
