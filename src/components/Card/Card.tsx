import { Box, Image, HStack, VStack, Avatar } from '@chakra-ui/react'

interface CardProps {
  cidade: string;
  pais: string;
  foto: string;
  fotoAlt: string;
  avatar: string;
}

export function Card({ cidade, pais, foto, fotoAlt, avatar }: CardProps) {
  return (
    <Box maxW="sm" maxWidth="320px" borderWidth="1px" borderColor="yellow.400" borderRadius="lg" overflow="hidden">
      <Image src={foto} objectFit="cover" w="100%" h="212px" alt={fotoAlt} />
      <HStack>
        <Box p="6" w="214px">
          <VStack alignItems="left">
            <Box
              fontWeight="bold"
              fontSize="2xl"
              lineHeight="tight"
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
          <Avatar name={fotoAlt} src={avatar} />
        </Box>
      </HStack>
    </Box>
  )
}