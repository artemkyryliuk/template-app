import { Flex } from '@chakra-ui/react'
// import { Sidebar } from './Sidebar'
// import { Content } from './Content'
import { Component } from './components/Component'

function App() {
  const dataOpportunities = [
    { value: 17, label: 'won', color: '#0D4D99' },
    { value: 33, label: 'lost', color: '#2980E6' },
    { value: 25, label: 'denied', color: 'red' },
    { value: 21, label: 'confirmed', color: 'green' },
    { value: 50, label: 'open', color: '#DCDCDC', isLight: true },
  ]

  return (
    <Flex justify="center" align="center" h="100vh" bg="#223">
      <Component
        title="Opportunities"
        value="59"
        accountNuь="42"
        difference="10%"
        data={dataOpportunities}
      />
    </Flex>
  )
}

export default App
