import { Flex } from '@chakra-ui/react'
// import { Sidebar } from './Sidebar'
// import { Content } from './Content'
import { Component } from './components/Component'

function App() {
  return (
    <Flex justify="center" align="center" h="100vh" bg="#223">
      <Component title="Opportunities" value="59" difference="10%" />
    </Flex>
  )
}

export default App
