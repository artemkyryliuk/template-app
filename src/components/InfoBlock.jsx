import React from 'react'
import { ReactComponent as ArrowIcon } from '../assets/arrow.svg'
import { ReactComponent as QuestionIcon } from '../assets/question-circle.svg'
import { VStack, Box, Text, Flex, Link } from '@chakra-ui/react'

export const InfoBlock = ({ steps, title, value, accountNum, difference }) => {
  const array = steps.slice(0)
  const sum = steps.reduce((a, b) => a + b.value, 0)

  const text = {
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '15px',
    color: '#333',
  }

  return (
    <VStack spacing={5}>
      <Box
        px="20px"
        w="380.33px"
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
              color={difference > 0 ? '#00A875' : 'red'}
            >
              {difference}%
            </Text>
            <ArrowIcon
              fill={difference > 0 ? '#00A875' : 'red'}
              transform={difference > 0 ? 'rotate(0)' : 'rotate(180)'}
            />
          </Flex>
        </Flex>
        <Flex my="10px" h="8px" gap="1px">
          {array.map((item, i) => (
            <Box w={`${(item.value / sum) * 100}%`} key={i} bg={item.color} />
          ))}
        </Flex>
        <Flex wrap="wrap" justify="stretch" gap="0px 30px">
          {array.map((item, i) => {
            return (
              <Flex align="center" gap="6px" key={i}>
                <Box w="8px" h="8px" bg={item.color} />
                <Text {...text}>{`${((item.value / sum) * 100).toFixed(1)}% ${
                  item.label
                }`}</Text>
              </Flex>
            )
          })}
        </Flex>
        <Flex align="center" my="20px" gap="4px">
          <Link _hover={{ textDecoration: 'none' }}>
            <Flex gap="4px" fontSize="12px" lineHeight="15px" color="#0D4D99">
              <Text fontWeight="700">{accountNum}</Text>
              <Text fontWeight="400">accounts in total</Text>
            </Flex>
          </Link>
          <QuestionIcon />
        </Flex>
      </Box>
    </VStack>
  )
}
