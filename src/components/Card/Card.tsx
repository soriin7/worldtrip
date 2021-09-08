import { Box, Image, HStack, VStack, Avatar } from '@chakra-ui/react'

interface CardProps {
  cidade: string;
  pais: string;
  foto: string;
  avatar: string;
}

export function Card({ cidade, pais, foto, avatar }: CardProps) {
  return (
    <Box maxW="sm" maxWidth="320px" borderWidth="1px" borderColor="yellow.400" borderRadius="lg" overflow="hidden">
      <Image src={foto} objectFit="cover" w="100%" h="212px" alt={cidade} />
      <HStack>
        <Box p="6" w="214px" h="116">
          <VStack alignItems="left">
            <Box
              fontWeight="bold"
              fontSize="2xl"
              lineHeight="tight"
              w="200px"
            >
              {cidade}
            </Box>
            <Box
              fontWeight="SemiBold"
              fontSize="1xl"
              lineHeight="tight"
            >
              {pais}
            </Box>
          </VStack>
        </Box>
        <Box p="6" >
          <Avatar name={cidade} src={avatar} />
        </Box>
      </HStack>
    </Box>
  )
}