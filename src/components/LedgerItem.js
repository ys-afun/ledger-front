import React from 'react'
import {View} from 'react-native'
import styled from 'styled-components/native'
import {Colors} from 'react-native/Libraries/NewAppScreen'

const CATEGORIES = {
  INCOME: '수입',
  EXPENDITURE: '지출',
}

export default ({item}) => {
  const {category, subCategory, client, value} = item
  return (
    <LedgerItem>
      <Category>
        <CategoryLabel>{CATEGORIES[category]}</CategoryLabel>
      </Category>
      <View>
        <Client>{client}</Client>
        <SubCategory>{subCategory}</SubCategory>
      </View>
      <Value>{value.toLocaleString()}원</Value>
    </LedgerItem>
  )
}

const LedgerItem = styled.View`
  flex-direction: row;
  margin-top: 10px;
`

const Category = styled.Pressable`
  width: 40px;
  height: 40px;
  background-color: beige;
  border-radius: 20px;
  margin-right: 8px;
`

const CategoryLabel = styled.Text`
  text-align: center;
  font-size: 14px;
  font-weight: 300;
  line-height: 40px;
`

const Client = styled.Text`
  font-size: 14px;
  font-weight: 300;
  line-height: 21px;
`

const SubCategory = styled.Text`
  font-size: 12px;
  font-weight: 300;
  line-height: 18px;
  color: #666;
`

const Value = styled.Text`
  margin-left: auto;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  color: ${({income}) => (income ? Colors.green : '#000')};
`
