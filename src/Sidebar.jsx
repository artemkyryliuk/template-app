import { Box, Stack, HStack, Image, Text, Link } from '@chakra-ui/react'
import logo from './assets/favicon-32x32.png'

export const Sidebar = () => {
  return (
    <Box px="20px" py="30px" minW="250px" bg="#1f1d2b">
      <HStack>
        <Image src={logo} />
        <Text fontSize="20px" color="#fff">
          React Test App
        </Text>
      </HStack>
      <Text my="30px" fontSize="20px" color="#cfced1">
        Navigation
      </Text>
      <Stack mt="20px" m="16px" spacing="20px" color="#cfced1">
        <Link href="#props">Props</Link>
        <Link href="#usestate">useState</Link>
      </Stack>
    </Box>
  )
}
