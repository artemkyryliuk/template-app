import {
  VStack,
  Box,
  Text,
  Flex,
  Link,
  Image,
  Tooltip,
  Button,
} from '@chakra-ui/react'
import { useState } from 'react'
import arrowUp from '../assets/arrowUp.svg'
import questionCircle from '../assets/question-circle.svg'

export const Component = ({ title, value, difference }) => {
  const data = [
    { value: 17, label: 'won', color: '#0D4D99' },
    { value: 33, label: 'lost', color: '#2980E6' },
    { value: 25, label: 'denied', color: 'red' },
    { value: 21, label: 'confirmed', color: 'green' },
    { value: 50, label: 'open', color: '#DCDCDC', isLight: true },
  ]

  let total = 0

  {
    data.map((el, i) => (total += data[i].value))
  }

  const ratio = 340.33 / total

  const textStyle = {
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '15px',
    color: '#333',
  }

  const helpTooltip = 'Total accounts on this site'

  const [isToggled, setToggled] = useState(false)

  const handleToggle = () => {
    setToggled(!isToggled)
  }

  return (
    <VStack spacing={5} transform={isToggled ? 'scale(3)' : 'scale(1)'}>
      <Box
        px="20px"
        w="380.33px"
        h="200px"
        bg="#fff"
        borderRadius="10px"
        boxShadow="0px 1px 10px 1px rgba(0, 0, 0, 0.08)"
      >
        <Text
          my="20px"
          fontWeight="600"
          fontSize="14px"
          lineHeight="24px"
          color="#333"
        >
          {title}
        </Text>
        <Flex align="baseline" gap="12px">
          <Text
            fontWeight="700"
            fontSize="30px"
            lineHeight="38px"
            color="#0D4D99"
          >
            {value}
          </Text>
          <Flex align="center" gap="3.8px">
            <Text
              fontWeight="400"
              fontSize="12px"
              lineHeight="15px"
              color="#00A875"
            >
              {difference}
            </Text>
            <Image src={arrowUp} pointerEvents="none" />
          </Flex>
        </Flex>
        <Flex my="10px" h="8px" gap="1px">
          {data.map((el, i) => (
            <Tooltip
              bg={data[i].color}
              color={data[i].isLight && '#000'}
              label={`${((100 / total) * data[i].value).toFixed(1)}% ${
                data[i].label
              }`}
              placement="top"
              key={i}
              fontSize={isToggled ? '36px' : '16px'}
            >
              <Box w={ratio * data[i].value} bg={data[i].color} />
            </Tooltip>
          ))}
        </Flex>
        <Flex wrap="wrap" justify="stretch" gap="0px 30px">
          {data.map((el, i) => {
            return (
              <Flex align="center" gap="6px" key={i}>
                <Box w="8px" h="8px" bg={data[i].color} />
                <Text {...textStyle}>{`${(
                  (100 / total) *
                  data[i].value
                ).toFixed(1)}% ${data[i].label}`}</Text>
              </Flex>
            )
          })}
        </Flex>
        <Flex align="center" my="20px" gap="4px">
          <Link _hover={{ color: '#0D4D99', textDecoration: 'none' }}>
            <Flex gap="4px">
              <Text
                fontWeight="700"
                fontSize="12px"
                lineHeight="15px"
                color="#0D4D99"
              >
                42
              </Text>
              <Text
                fontWeight="400"
                fontSize="12px"
                lineHeight="15px"
                color="#0D4D99"
              >
                accounts in total
              </Text>
            </Flex>
          </Link>
          <Tooltip
            label={helpTooltip}
            aria-label="Help Tooltip"
            placement="right-end"
            fontSize={isToggled ? '36px' : '16px'}
          >
            <Box>
              <Image src={questionCircle} pointerEvents="none" />
            </Box>
          </Tooltip>
        </Flex>
      </Box>
      <Button colorScheme="blue" onClick={handleToggle}>
        {isToggled ? 'Уменьшить' : 'Увеличить'}
      </Button>
    </VStack>
  )
}
