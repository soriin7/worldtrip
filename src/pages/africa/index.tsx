import { Flex, Image, Heading, Text, HStack, VStack, Tooltip, SimpleGrid, Box, useBreakpointValue } from "@chakra-ui/react";
import { InfoOutlineIcon } from '@chakra-ui/icons'
import { Header } from "../../components/Header";
import { Card } from "../../components/Card/Card";

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    xl: true
  });
  const isMediumVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Flex direction="column">
      <Header />
      <Image w="100%" h='450px' objectFit="cover" filter="brightness(65%)" position="relative" src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" alt="Ocêania" />
      <Heading position="absolute" size="3xl" top="425px" align="left" mx="auto" px={["20", "40", "60"]} color="white">
        África
      </Heading>
      {isWideVersion ?
        <>
          <HStack spacing="160" w="100%" my="10" maxWidth={1480} mx="auto" px="6">
            <Text w="35%" fontWeight="normal" fontSize="2xl" letterSpacing="tight" lineHeight="50px" align="justify" mt="100">
              A África é o terceiro continente mais extenso com cerca de 30 milhões
              de quilômetros quadrados, cobrindo 20,3% da área total da terra firme
              do planeta. É o segundo continente mais populoso da Terra com cerca
              de um bilhão de pessoas e apresenta grande diversidade étnica,
              cultural, social e política.
            </Text>
            <VStack>
              <Text fontSize="6xl" fontWeight="bold" h="70px" mt="75" color="yellow.400">
                54
              </Text>
              <Text fontSize="2xl" fontWeight="bold">
                países
              </Text>
            </VStack>
            <VStack>
              <Text fontSize="6xl" fontWeight="bold" h="70px" mt="75" color="yellow.400">
                +1250
              </Text>
              <Text fontSize="2xl" fontWeight="bold">
                línguas
              </Text>
            </VStack>
            <VStack>
              <Text fontSize="6xl" fontWeight="bold" h="70px" mt="75" color="yellow.400">
                4
              </Text>
              <HStack>
                <Text fontSize="2xl" fontWeight="bold">
                  cidades +100
                </Text>
                <Tooltip hasArrow label="Representam as cidades mais visitadas do mundo que o continente possui." placement="bottom" bg="yellow.400" color="black">
                  <InfoOutlineIcon />
                </Tooltip>
              </HStack>
            </VStack>
          </HStack>
          <Heading fontWeight="medium" fontSize="5xl" w="100%" my="10" mt="100" maxWidth={1480} mx="auto" px="6">
            Cidades +100
          </Heading>
          <Flex w="100%" my="10" maxWidth={1480} mx="auto" px="6">
            <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
              <Card
                cidade="Cairo"
                pais="Egito"
                foto="https://images.unsplash.com/photo-1600520611035-84157ad4084d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80"
                avatar="/images/egito.png"
              />
              <Card
                cidade="Joanesburgo"
                pais="África do Sul"
                foto="https://images.unsplash.com/photo-1577948000111-9c970dfe3743?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                avatar="/images/asul.png"
              />
              <Card
                cidade="Marrakech"
                pais="Marrocos"
                foto="https://images.unsplash.com/photo-1545041552-becc2efcccc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                avatar="/images/marrocos.png"
              />
              <Card
                cidade="Hurghada"
                pais="Egito"
                foto="https://images.unsplash.com/photo-1562679300-60018575a875?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
                avatar="/images/egito.png"
              />
            </SimpleGrid>
          </Flex>
        </>
        : isMediumVersion ?
          <Box>
            <HStack spacing="180" w="100%" my="10" maxWidth={720} mx="auto" align="center" px="6">
              <Text w="100%" fontWeight="normal" fontSize="2xl" letterSpacing="tight" lineHeight="50px" align="justify" mt="100">
                A África é o terceiro continente mais extenso com cerca de 30 milhões
                de quilômetros quadrados, cobrindo 20,3% da área total da terra firme
                do planeta. É o segundo continente mais populoso da Terra com cerca
                de um bilhão de pessoas e apresenta grande diversidade étnica,
                cultural, social e política.
              </Text>
            </HStack>
            <HStack w="100%" spacing="180" my="10" maxWidth={720} mx="auto" px="6">
              <VStack>
                <Text fontSize="6xl" fontWeight="bold" h="70px" mt="75" color="yellow.400">
                  54
                </Text>
                <Text fontSize="2xl" fontWeight="bold">
                  países
                </Text>
              </VStack>
              <VStack>
                <Text fontSize="6xl" fontWeight="bold" h="70px" mt="75" color="yellow.400">
                  +1250
                </Text>
                <Text fontSize="2xl" fontWeight="bold">
                  línguas
                </Text>
              </VStack>
              <VStack>
                <Text fontSize="6xl" fontWeight="bold" h="70px" mt="75" color="yellow.400">
                  4
                </Text>
                <HStack>
                  <Text fontSize="2xl" fontWeight="bold">
                    cidades +100
                  </Text>
                  <Tooltip hasArrow label="Representam as cidades mais visitadas do mundo que o continente possui." placement="bottom" bg="yellow.400" color="black">
                    <InfoOutlineIcon />
                  </Tooltip>
                </HStack>
              </VStack>
            </HStack>
            <Heading fontWeight="medium" fontSize="5xl" w="100%" my="10" mt="100" maxWidth={720} mx="auto" px="6">
              Cidades +100
            </Heading>
            <Flex w="100%" my="10" maxWidth={720} mx="auto" px="6">
              <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
                <Card
                  cidade="Cairo"
                  pais="Egito"
                  foto="https://images.unsplash.com/photo-1600520611035-84157ad4084d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80"
                  avatar="/images/egito.png"
                />
                <Card
                  cidade="Joanesburgo"
                  pais="África do Sul"
                  foto="https://images.unsplash.com/photo-1577948000111-9c970dfe3743?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                  avatar="/images/asul.png"
                />
                <Card
                  cidade="Marrakech"
                  pais="Marrocos"
                  foto="https://images.unsplash.com/photo-1545041552-becc2efcccc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                  avatar="/images/marrocos.png"
                />
                <Card
                  cidade="Hurghada"
                  pais="Egito"
                  foto="https://images.unsplash.com/photo-1562679300-60018575a875?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
                  avatar="/images/egito.png"
                />
              </SimpleGrid>
            </Flex>
          </Box>

          : < VStack spacing="2" w="100%" my="10" mx="auto" px="6">
            <Text w="100%" fontWeight="normal" fontSize="2xl" letterSpacing="tight" lineHeight="50px" align="justify" mt="100">
              A África é o terceiro continente mais extenso com cerca de 30 milhões
              de quilômetros quadrados, cobrindo 20,3% da área total da terra firme
              do planeta. É o segundo continente mais populoso da Terra com cerca
              de um bilhão de pessoas e apresenta grande diversidade étnica,
              cultural, social e política.
            </Text>
            <VStack>
              <Text fontSize="6xl" fontWeight="bold" h="70px" mt="75" color="yellow.400">
                54
              </Text>
              <Text fontSize="2xl" fontWeight="bold">
                países
              </Text>
            </VStack>
            <VStack>
              <Text fontSize="6xl" fontWeight="bold" h="70px" mt="75" color="yellow.400">
                +1250
              </Text>
              <Text fontSize="2xl" fontWeight="bold">
                línguas
              </Text>
            </VStack>
            <VStack>
              <Text fontSize="6xl" fontWeight="bold" h="70px" mt="75" color="yellow.400">
                4
              </Text>
              <HStack mt="10">
                <Text fontSize="2xl" fontWeight="bold">
                  cidades +100
                </Text>
                <Tooltip hasArrow label="Representam as cidades mais visitadas do mundo que o continente possui." placement="bottom" bg="yellow.400" color="black">
                  <InfoOutlineIcon />
                </Tooltip>
              </HStack>
            </VStack>
            <Box>
              <Heading fontWeight="medium" fontSize="5xl" w="100%" my="1" mt="100" maxWidth={320} align="center" mx="auto">
                Cidades +100
              </Heading>
            </Box>
            <Flex w="100%" my="10" mx="auto" px="1" alignContent="center">
              <SimpleGrid flex="1" mr="4" gap="4" minChildWidth="320px" align="flex-start">
                <Card
                  cidade="Cairo"
                  pais="Egito"
                  foto="https://images.unsplash.com/photo-1600520611035-84157ad4084d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80"
                  avatar="/images/egito.png"
                />
                <Card
                  cidade="Joanesburgo"
                  pais="África do Sul"
                  foto="https://images.unsplash.com/photo-1577948000111-9c970dfe3743?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                  avatar="/images/asul.png"
                />
                <Card
                  cidade="Marrakech"
                  pais="Marrocos"
                  foto="https://images.unsplash.com/photo-1545041552-becc2efcccc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                  avatar="/images/marrocos.png"
                />
                <Card
                  cidade="Hurghada"
                  pais="Egito"
                  foto="https://images.unsplash.com/photo-1562679300-60018575a875?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
                  avatar="/images/egito.png"
                />
              </SimpleGrid>
            </Flex>
          </VStack>
      }
    </Flex >
  )
}