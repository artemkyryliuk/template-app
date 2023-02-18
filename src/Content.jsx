import { Flex, Heading } from '@chakra-ui/react'
import { Props } from './components/Props'
import { PropsCode } from './components/PropsCode'
import { UseState } from './components/UseState'
import { UseStateCode } from './components/UseStateCode'
import { RandomNumber } from './components/RandomNumber'

export const Content = () => {
  return (
    <Flex direction="column" p="50px" w="1200px" bg="#323">
      <Heading id="props" color="#cfced1">
        Props #
      </Heading>
      <Props text="Button Text" />
      <PropsCode />
      <Heading id="usestate" mt="80px" color="#cfced1">
        useState #
      </Heading>
      <UseState />
      <UseStateCode />
      <Heading id="usestate" mt="80px" color="#cfced1">
        Random number #
      </Heading>
      <RandomNumber />
    </Flex>
  )
}
