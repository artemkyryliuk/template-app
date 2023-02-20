import { Flex } from '@chakra-ui/react'
import { InfoBlock } from './components/InfoBlock'
import { opportunities } from './data/opportunities'

function App() {
  return (
    <Flex justify="center" align="center" h="100vh" bg="#223">
      <InfoBlock
        title="Opportunities"
        value={59}
        accountNum={42}
        difference={10}
        data={opportunities}
      />
    </Flex>
  )
}

export default App
