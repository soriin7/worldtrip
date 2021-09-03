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
      <Image w="100%" h='450px' objectFit="cover" filter="brightness(65%)" position="relative" src="/images/london2.jpg" alt="Londres" />
      <Heading position="absolute" size="3xl" top="425px" align="left" mx="auto" px={["20", "40", "60"]} color="white">
        Europa
      </Heading>
      {isWideVersion ?
        <>
          <HStack spacing="180" w="100%" my="10" maxWidth={1480} mx="auto" px="6">
            <Text w="35%" fontWeight="normal" fontSize="2xl" letterSpacing="tight" lineHeight="50px" align="justify" mt="100">A Europa é, por convenção, um dos seis
              continentes do mundo. Compreendendo a
              península ocidental da Eurásia, a Europa
              geralmente divide-se da Ásia a leste pela
              divisória de águas dos montes Urais, o rio Ural, o
              mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
            </Text>
            <VStack>
              <Text fontSize="6xl" fontWeight="bold" h="70px" mt="75" color="yellow.400">
                50
              </Text>
              <Text fontSize="2xl" fontWeight="bold">
                países
              </Text>
            </VStack>
            <VStack>
              <Text fontSize="6xl" fontWeight="bold" h="70px" mt="75" color="yellow.400">
                60
              </Text>
              <Text fontSize="2xl" fontWeight="bold">
                línguas
              </Text>
            </VStack>
            <VStack>
              <Text fontSize="6xl" fontWeight="bold" h="70px" mt="75" color="yellow.400">
                27
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
                cidade="Londres"
                pais="Reino Unido"
                foto="/images/londonMini.jpg"
                fotoAlt="United Kingdon"
                avatar="/images/UKF.png"
              />
              <Card
                cidade="Paris"
                pais="França"
                foto="/images/Paris.jpg"
                fotoAlt="France"
                avatar="/images/FF.png"
              />
              <Card
                cidade="Roma"
                pais="Itália"
                foto="/images/Rome.jpg"
                fotoAlt="Italy"
                avatar="/images/IF.png"
              />
              <Card
                cidade="Barcelona"
                pais="Espanha"
                foto="/images/barcelona.jpg"
                fotoAlt="Spain"
                avatar="/images/EF.png"
              />
            </SimpleGrid>
          </Flex>
        </>
        : isMediumVersion ?
          <Box>
            <HStack spacing="180" w="100%" my="10" maxWidth={720} mx="auto" align="center" px="6">
              <Text w="100%" fontWeight="normal" fontSize="2xl" letterSpacing="tight" lineHeight="50px" align="justify" mt="100">A Europa é, por convenção, um dos seis
                continentes do mundo. Compreendendo a
                península ocidental da Eurásia, a Europa
                geralmente divide-se da Ásia a leste pela
                divisória de águas dos montes Urais, o rio Ural, o
                mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
              </Text>
            </HStack>
            <HStack w="100%" spacing="180" my="10" maxWidth={720} mx="auto" px="6">
              <VStack>
                <Text fontSize="6xl" fontWeight="bold" h="70px" mt="75" color="yellow.400">
                  50
                </Text>
                <Text fontSize="2xl" fontWeight="bold">
                  países
                </Text>
              </VStack>
              <VStack>
                <Text fontSize="6xl" fontWeight="bold" h="70px" mt="75" color="yellow.400">
                  60
                </Text>
                <Text fontSize="2xl" fontWeight="bold">
                  línguas
                </Text>
              </VStack>
              <VStack>
                <Text fontSize="6xl" fontWeight="bold" h="70px" mt="75" color="yellow.400">
                  27
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
                  cidade="Londres"
                  pais="Reino Unido"
                  foto="/images/londonMini.jpg"
                  fotoAlt="United Kingdon"
                  avatar="/images/UKF.png"
                />
                <Card
                  cidade="Paris"
                  pais="França"
                  foto="/images/Paris.jpg"
                  fotoAlt="France"
                  avatar="/images/FF.png"
                />
                <Card
                  cidade="Roma"
                  pais="Itália"
                  foto="/images/Rome.jpg"
                  fotoAlt="Italy"
                  avatar="/images/IF.png"
                />
                <Card
                  cidade="Barcelona"
                  pais="Espanha"
                  foto="/images/barcelona.jpg"
                  fotoAlt="Spain"
                  avatar="/images/EF.png"
                />
              </SimpleGrid>
            </Flex>
          </Box>

          : < VStack spacing="2" w="100%" my="10" mx="auto" px="6">
            <Text w="100%" fontWeight="normal" fontSize="2xl" letterSpacing="tight" lineHeight="50px" align="justify" mt="100">A Europa é, por convenção, um dos seis
              continentes do mundo. Compreendendo a
              península ocidental da Eurásia, a Europa
              geralmente divide-se da Ásia a leste pela
              divisória de águas dos montes Urais, o rio Ural, o
              mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
            </Text>
            <VStack>
              <Text fontSize="6xl" fontWeight="bold" h="70px" mt="75" color="yellow.400">
                50
              </Text>
              <Text fontSize="2xl" fontWeight="bold">
                países
              </Text>
            </VStack>
            <VStack>
              <Text fontSize="6xl" fontWeight="bold" h="70px" mt="75" color="yellow.400">
                60
              </Text>
              <Text fontSize="2xl" fontWeight="bold">
                línguas
              </Text>
            </VStack>
            <VStack>
              <Text fontSize="6xl" fontWeight="bold" h="70px" mt="75" color="yellow.400">
                27
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
                  cidade="Londres"
                  pais="Reino Unido"
                  foto="/images/londonMini.jpg"
                  fotoAlt="United Kingdon"
                  avatar="/images/UKF.png"
                />
                <Card
                  cidade="Paris"
                  pais="França"
                  foto="/images/Paris.jpg"
                  fotoAlt="France"
                  avatar="/images/FF.png"
                />
                <Card
                  cidade="Roma"
                  pais="Itália"
                  foto="/images/Rome.jpg"
                  fotoAlt="Italy"
                  avatar="/images/IF.png"
                />
                <Card
                  cidade="Barcelona"
                  pais="Espanha"
                  foto="/images/barcelona.jpg"
                  fotoAlt="Spain"
                  avatar="/images/EF.png"
                />
              </SimpleGrid>
            </Flex>
          </VStack>
      }
    </Flex >
  )
}