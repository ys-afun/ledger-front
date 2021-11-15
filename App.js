/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
// import type {Node} from 'react'
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native'
import {ApolloClient, InMemoryCache, ApolloProvider, gql} from '@apollo/client'

import {Colors} from 'react-native/Libraries/NewAppScreen'
import Ledger from './src/screens/Ledger'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
})

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Ledger />
      </SafeAreaView>
    </ApolloProvider>
  )
}

export default App
