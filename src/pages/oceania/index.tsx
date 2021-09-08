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
      <Image w="100%" h='450px' objectFit="cover" filter="brightness(65%)" position="relative" src="https://images.unsplash.com/photo-1484007880226-8849602bb447?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1936&q=80" alt="Ocêania" />
      <Heading position="absolute" size="3xl" top="425px" align="left" mx="auto" px={["20", "40", "60"]} color="white">
        Ocêania
      </Heading>
      {isWideVersion ?
        <>
          <HStack spacing="180" w="100%" my="10" maxWidth={1480} mx="auto" px="6">
            <Text w="35%" fontWeight="normal" fontSize="2xl" letterSpacing="tight" lineHeight="50px" align="justify" mt="100">
              A Ocêania é uma região geográfica composta por vários grupos de ilhas
              do oceano Pacífico (Polinésia, Melanésia e Micronésia). O termo
              Ocêania foi criado em 1831 pelo explorador francês Dumont d'Urville.
              O termo é usado hoje em vários idiomas para designar uma região g
              eográfica e política que compreende o continente da Austrália e ilhas
              do Oceano Pacífico adjacentes.
            </Text>
            <VStack>
              <Text fontSize="6xl" fontWeight="bold" h="70px" mt="75" color="yellow.400">
                16
              </Text>
              <Text fontSize="2xl" fontWeight="bold">
                países
              </Text>
            </VStack>
            <VStack>
              <Text fontSize="6xl" fontWeight="bold" h="70px" mt="75" color="yellow.400">
                18
              </Text>
              <Text fontSize="2xl" fontWeight="bold">
                línguas
              </Text>
            </VStack>
            <VStack>
              <Text fontSize="6xl" fontWeight="bold" h="70px" mt="75" color="yellow.400">
                3
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
                cidade="Sidney"
                pais="Austrália"
                foto="https://images.unsplash.com/photo-1527048272542-01226422db13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1072&q=80"
                avatar="/images/australia.png"
              />
              <Card
                cidade="Melbourne"
                pais="Austrália"
                foto="https://images.unsplash.com/photo-1505642257289-9f2d7dd73641?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1094&q=80"
                avatar="/images/australia.png"
              />
              <Card
                cidade="Auckland"
                pais="Nova Zelândia"
                foto="https://images.unsplash.com/photo-1595125990323-885cec5217ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                avatar="/images/zelandia.png"
              />
            </SimpleGrid>
          </Flex>
        </>
        : isMediumVersion ?
          <Box>
            <HStack spacing="180" w="100%" my="10" maxWidth={720} mx="auto" align="center" px="6">
              <Text w="100%" fontWeight="normal" fontSize="2xl" letterSpacing="tight" lineHeight="50px" align="justify" mt="100">
                A Ocêania é uma região geográfica composta por vários grupos de ilhas
                do oceano Pacífico (Polinésia, Melanésia e Micronésia). O termo
                Ocêania foi criado em 1831 pelo explorador francês Dumont d'Urville.
                O termo é usado hoje em vários idiomas para designar uma região g
                eográfica e política que compreende o continente da Austrália e ilhas
                do Oceano Pacífico adjacentes.
              </Text>
            </HStack>
            <HStack w="100%" spacing="180" my="10" maxWidth={720} mx="auto" px="6">
              <VStack>
                <Text fontSize="6xl" fontWeight="bold" h="70px" mt="75" color="yellow.400">
                  16
                </Text>
                <Text fontSize="2xl" fontWeight="bold">
                  países
                </Text>
              </VStack>
              <VStack>
                <Text fontSize="6xl" fontWeight="bold" h="70px" mt="75" color="yellow.400">
                  18
                </Text>
                <Text fontSize="2xl" fontWeight="bold">
                  línguas
                </Text>
              </VStack>
              <VStack>
                <Text fontSize="6xl" fontWeight="bold" h="70px" mt="75" color="yellow.400">
                  3
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
                  cidade="Sidney"
                  pais="Austrália"
                  foto="https://images.unsplash.com/photo-1527048272542-01226422db13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1072&q=80"
                  avatar="/images/australia.png"
                />
                <Card
                  cidade="Melbourne"
                  pais="Austrália"
                  foto="https://images.unsplash.com/photo-1505642257289-9f2d7dd73641?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1094&q=80"
                  avatar="/images/australia.png"
                />
                <Card
                  cidade="Auckland"
                  pais="Nova Zelândia"
                  foto="https://images.unsplash.com/photo-1595125990323-885cec5217ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  avatar="/images/zelandia.png"
                />
              </SimpleGrid>
            </Flex>
          </Box>

          : < VStack spacing="2" w="100%" my="10" mx="auto" px="6">
            <Text w="100%" fontWeight="normal" fontSize="2xl" letterSpacing="tight" lineHeight="50px" align="justify" mt="100">
              A Ocêania é uma região geográfica composta por vários grupos de ilhas
              do oceano Pacífico (Polinésia, Melanésia e Micronésia). O termo
              Ocêania foi criado em 1831 pelo explorador francês Dumont d'Urville.
              O termo é usado hoje em vários idiomas para designar uma região g
              eográfica e política que compreende o continente da Austrália e ilhas
              do Oceano Pacífico adjacentes.
            </Text>
            <VStack>
              <Text fontSize="6xl" fontWeight="bold" h="70px" mt="75" color="yellow.400">
                16
              </Text>
              <Text fontSize="2xl" fontWeight="bold">
                países
              </Text>
            </VStack>
            <VStack>
              <Text fontSize="6xl" fontWeight="bold" h="70px" mt="75" color="yellow.400">
                18
              </Text>
              <Text fontSize="2xl" fontWeight="bold">
                línguas
              </Text>
            </VStack>
            <VStack>
              <Text fontSize="6xl" fontWeight="bold" h="70px" mt="75" color="yellow.400">
                3
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
                  cidade="Sidney"
                  pais="Austrália"
                  foto="https://images.unsplash.com/photo-1527048272542-01226422db13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1072&q=80"
                  avatar="/images/australia.png"
                />
                <Card
                  cidade="Melbourne"
                  pais="Austrália"
                  foto="https://images.unsplash.com/photo-1505642257289-9f2d7dd73641?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1094&q=80"
                  avatar="/images/australia.png"
                />
                <Card
                  cidade="Auckland"
                  pais="Nova Zelândia"
                  foto="https://images.unsplash.com/photo-1595125990323-885cec5217ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  avatar="/images/zelandia.png"
                />
              </SimpleGrid>
            </Flex>
          </VStack>
      }
    </Flex >
  )
}