import React from 'react'
import { ReactComponent as ArrowIcon } from '../assets/arrowUp.svg'
import { VStack, Box, Text, Flex, Link, Image, Tooltip } from '@chakra-ui/react'
import questionCircle from '../assets/question-circle.svg'

export const InfoBlock = ({ data, title, value, accountNum, difference }) => {
  let total = 0

  data.map((el, i) => (total += data[i].value))

  const textStyle = {
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '15px',
    color: '#333',
  }

  const helpTooltip = 'Number of registered accounts'

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
            <ArrowIcon />
          </Flex>
        </Flex>
        <Flex my="10px" h="8px" gap="1px">
          {data.map((item) => (
            <Tooltip
              bg={item.color}
              color={item.isLight && '#000'}
              label={`${((100 / total) * item.value).toFixed(1)}% ${
                item.label
              }`}
              placement="top"
              key={item}
            >
              <Box w={item.value * (340.33 / total)} bg={item.color} />
            </Tooltip>
          ))}
        </Flex>
        <Flex wrap="wrap" justify="stretch" gap="0px 30px">
          {data.map((item) => {
            return (
              <Flex align="center" gap="6px" key={item}>
                <Box w="8px" h="8px" bg={item.color} />
                <Text {...textStyle}>{`${(item.value * (100 / total)).toFixed(
                  1
                )}% ${item.label}`}</Text>
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
                {accountNum}
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
          >
            <Box>
              <Image src={questionCircle} pointerEvents="none" />
            </Box>
          </Tooltip>
        </Flex>
      </Box>
    </VStack>
  )
}
