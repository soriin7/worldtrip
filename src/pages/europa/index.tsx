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
      <Image w="100%" h='450px' objectFit="cover" filter="brightness(65%)" position="relative" src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80" alt="Europa" />
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
                29
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
                foto="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                avatar="/images/UKF.png"
              />
              <Card
                cidade="Paris"
                pais="França"
                foto="https://images.unsplash.com/photo-1431274172761-fca41d930114?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                avatar="/images/FF.png"
              />
              <Card
                cidade="Roma"
                pais="Itália"
                foto="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1286&q=80"
                avatar="/images/IF.png"
              />
              <Card
                cidade="Barcelona"
                pais="Espanha"
                foto="https://images.unsplash.com/photo-1583422409516-2895a77efded?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                avatar="/images/EF.png"
              />
              <Card
                cidade="Praga"
                pais="Republica Tcheca"
                foto="https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                avatar="/images/tcheka.png"
              />
              <Card
                cidade="Amsterdã"
                pais="Países Baixos"
                foto="https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                avatar="/images/baixos.png"
              />
              <Card
                cidade="Milão"
                pais="Itália"
                foto="https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80"
                avatar="/images/IF.png"
              />
              <Card
                cidade="Viena"
                pais="Áustria"
                foto="https://images.unsplash.com/photo-1516550893923-42d28e5677af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
                avatar="/images/austria.png"
              />
              <Card
                cidade="Berlim"
                pais="Alemanha"
                foto="https://images.unsplash.com/photo-1587330979470-3595ac045ab0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                avatar="/images/alemanha.png"
              />
              <Card
                cidade="Atenas"
                pais="Grécia"
                foto="https://images.unsplash.com/photo-1503152394-c571994fd383?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                avatar="/images/grecia.png"
              />
              <Card
                cidade="Moscou"
                pais="Rússia"
                foto="https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                avatar="/images/russia.png"
              />
              <Card
                cidade="Veneza"
                pais="Itália"
                foto="https://images.unsplash.com/photo-1533676802871-eca1ae998cd5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1491&q=80"
                avatar="/images/IF.png"
              />
              <Card
                cidade="Madri"
                pais="Espanha"
                foto="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                avatar="/images/EF.png"
              />
              <Card
                cidade="Dublin"
                pais="Irlanda"
                foto="https://images.unsplash.com/photo-1584796353969-30d8473ce76f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                avatar="/images/irlanda.jpg"
              />
              <Card
                cidade="Florença"
                pais="Itália"
                foto="https://images.unsplash.com/photo-1476362174823-3a23f4aa6d76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                avatar="/images/IF.png"
              />
              <Card
                cidade="Munique"
                pais="Alemanha"
                foto="https://images.unsplash.com/photo-1599982890963-3aabd60064d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                avatar="/images/alemanha.png"
              />
              <Card
                cidade="São Petesburgo"
                pais="Rússia"
                foto="https://images.unsplash.com/photo-1561994381-9b1e23f4828f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80"
                avatar="/images/russia.png"
              />
              <Card
                cidade="Bruxelas"
                pais="Bélgica"
                foto="https://images.unsplash.com/photo-1564005213136-4d35e8026fa0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                avatar="/images/belgica.png"
              />
              <Card
                cidade="Budapeste"
                pais="Hungria"
                foto="https://images.unsplash.com/photo-1551867633-194f125bddfa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                avatar="/images/hungria.png"
              />
              <Card
                cidade="Lisboa"
                pais="Portugal"
                foto="https://images.unsplash.com/photo-1525207934214-58e69a8f8a3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
                avatar="/images/portugal.png"
              />
              <Card
                cidade="Heraclião"
                pais="Grécia"
                foto="https://images.unsplash.com/photo-1597485116741-e21978d9d411?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
                avatar="/images/grecia.png"
              />
              <Card
                cidade="Copenhagen"
                pais="Dinamarca"
                foto="https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                avatar="/images/dinamarca.png"
              />
              <Card
                cidade="Cracóvia"
                pais="Polônia"
                foto="https://images.unsplash.com/photo-1606992894456-799462dacd65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                avatar="/images/polonia.png"
              />
              <Card
                cidade="Varsóvia"
                pais="Polônia"
                foto="https://images.unsplash.com/photo-1519197924294-4ba991a11128?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"
                avatar="/images/polonia.png"
              />
              <Card
                cidade="Frankfurt"
                pais="Alemanha"
                foto="https://images.unsplash.com/photo-1577185816322-21f2a92b1342?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                avatar="/images/alemanha.png"
              />
              <Card
                cidade="Estocolmo"
                pais="Suécia"
                foto="https://images.unsplash.com/photo-1516382772789-f9bfd7cb7532?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=958&q=80"
                avatar="/images/suecia.png"
              />
              <Card
                cidade="Nice"
                pais="França"
                foto="https://images.unsplash.com/photo-1491166617655-0723a0999cfc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                avatar="/images/FF.png"
              />
              <Card
                cidade="Porto"
                pais="Portugal"
                foto="https://images.unsplash.com/photo-1569959220744-ff553533f492?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1045&q=80"
                avatar="/images/portugal.png"
              />
              <Card
                cidade="Rodes"
                pais="Grécia"
                foto="https://images.unsplash.com/photo-1582030826710-a16d19043d98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                avatar="/images/grecia.png"
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
                  29
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
                  foto="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  avatar="/images/UKF.png"
                />
                <Card
                  cidade="Paris"
                  pais="França"
                  foto="https://images.unsplash.com/photo-1431274172761-fca41d930114?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  avatar="/images/FF.png"
                />
                <Card
                  cidade="Roma"
                  pais="Itália"
                  foto="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1286&q=80"
                  avatar="/images/IF.png"
                />
                <Card
                  cidade="Barcelona"
                  pais="Espanha"
                  foto="https://images.unsplash.com/photo-1583422409516-2895a77efded?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  avatar="/images/EF.png"
                />
                <Card
                  cidade="Praga"
                  pais="Republica Tcheca"
                  foto="https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  avatar="/images/tcheka.png"
                />
                <Card
                  cidade="Amsterdã"
                  pais="Países Baixos"
                  foto="https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  avatar="/images/baixos.png"
                />
                <Card
                  cidade="Milão"
                  pais="Itália"
                  foto="https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80"
                  avatar="/images/IF.png"
                />
                <Card
                  cidade="Viena"
                  pais="Áustria"
                  foto="https://images.unsplash.com/photo-1516550893923-42d28e5677af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
                  avatar="/images/austria.png"
                />
                <Card
                  cidade="Berlim"
                  pais="Alemanha"
                  foto="https://images.unsplash.com/photo-1587330979470-3595ac045ab0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  avatar="/images/alemanha.png"
                />
                <Card
                  cidade="Atenas"
                  pais="Grécia"
                  foto="https://images.unsplash.com/photo-1503152394-c571994fd383?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  avatar="/images/grecia.png"
                />
                <Card
                  cidade="Veneza"
                  pais="Itália"
                  foto="https://images.unsplash.com/photo-1533676802871-eca1ae998cd5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1491&q=80"
                  avatar="/images/IF.png"
                />
                <Card
                  cidade="Moscou"
                  pais="Rússia"
                  foto="https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  avatar="/images/russia.png"
                />
                <Card
                  cidade="Madri"
                  pais="Espanha"
                  foto="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  avatar="/images/EF.png"
                />
                <Card
                  cidade="Dublin"
                  pais="Irlanda"
                  foto="https://images.unsplash.com/photo-1584796353969-30d8473ce76f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  avatar="/images/irlanda.jpg"
                />
                <Card
                  cidade="Florença"
                  pais="Itália"
                  foto="https://images.unsplash.com/photo-1476362174823-3a23f4aa6d76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                  avatar="/images/IF.png"
                />
                <Card
                  cidade="Munique"
                  pais="Alemanha"
                  foto="https://images.unsplash.com/photo-1599982890963-3aabd60064d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                  avatar="/images/alemanha.png"
                />
                <Card
                  cidade="São Petesburgo"
                  pais="Rússia"
                  foto="https://images.unsplash.com/photo-1561994381-9b1e23f4828f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80"
                  avatar="/images/russia.png"
                />
                <Card
                  cidade="Bruxelas"
                  pais="Bélgica"
                  foto="https://images.unsplash.com/photo-1564005213136-4d35e8026fa0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  avatar="/images/belgica.png"
                />
                <Card
                  cidade="Budapeste"
                  pais="Hungria"
                  foto="https://images.unsplash.com/photo-1551867633-194f125bddfa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  avatar="/images/hungria.png"
                />
                <Card
                  cidade="Lisboa"
                  pais="Portugal"
                  foto="https://images.unsplash.com/photo-1525207934214-58e69a8f8a3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
                  avatar="/images/portugal.png"
                />
                <Card
                  cidade="Heraclião"
                  pais="Grécia"
                  foto="https://images.unsplash.com/photo-1597485116741-e21978d9d411?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
                  avatar="/images/grecia.png"
                />
                <Card
                  cidade="Copenhagen"
                  pais="Dinamarca"
                  foto="https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  avatar="/images/dinamarca.png"
                />
                <Card
                  cidade="Cracóvia"
                  pais="Polônia"
                  foto="https://images.unsplash.com/photo-1606992894456-799462dacd65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  avatar="/images/polonia.png"
                />
                <Card
                  cidade="Varsóvia"
                  pais="Polônia"
                  foto="https://images.unsplash.com/photo-1519197924294-4ba991a11128?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"
                  avatar="/images/polonia.png"
                />
                <Card
                  cidade="Frankfurt"
                  pais="Alemanha"
                  foto="https://images.unsplash.com/photo-1577185816322-21f2a92b1342?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                  avatar="/images/alemanha.png"
                />
                <Card
                  cidade="Estocolmo"
                  pais="Suécia"
                  foto="https://images.unsplash.com/photo-1516382772789-f9bfd7cb7532?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=958&q=80"
                  avatar="/images/suecia.png"
                />
                <Card
                  cidade="Nice"
                  pais="França"
                  foto="https://images.unsplash.com/photo-1491166617655-0723a0999cfc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  avatar="/images/FF.png"
                />
                <Card
                  cidade="Porto"
                  pais="Portugal"
                  foto="https://images.unsplash.com/photo-1569959220744-ff553533f492?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1045&q=80"
                  avatar="/images/portugal.png"
                />
                <Card
                  cidade="Rodes"
                  pais="Grécia"
                  foto="https://images.unsplash.com/photo-1582030826710-a16d19043d98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  avatar="/images/grecia.png"
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
                29
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
                  foto="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  avatar="/images/UKF.png"
                />
                <Card
                  cidade="Paris"
                  pais="França"
                  foto="https://images.unsplash.com/photo-1431274172761-fca41d930114?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  avatar="/images/FF.png"
                />
                <Card
                  cidade="Roma"
                  pais="Itália"
                  foto="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1286&q=80"
                  avatar="/images/IF.png"
                />
                <Card
                  cidade="Barcelona"
                  pais="Espanha"
                  foto="https://images.unsplash.com/photo-1583422409516-2895a77efded?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  avatar="/images/EF.png"
                />
                <Card
                  cidade="Praga"
                  pais="Republica Tcheca"
                  foto="https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  avatar="/images/tcheka.png"
                />
                <Card
                  cidade="Amsterdã"
                  pais="Países Baixos"
                  foto="https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  avatar="/images/baixos.png"
                />
                <Card
                  cidade="Milão"
                  pais="Itália"
                  foto="https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80"
                  avatar="/images/IF.png"
                />
                <Card
                  cidade="Viena"
                  pais="Áustria"
                  foto="https://images.unsplash.com/photo-1516550893923-42d28e5677af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
                  avatar="/images/austria.png"
                />
                <Card
                  cidade="Berlim"
                  pais="Alemanha"
                  foto="https://images.unsplash.com/photo-1587330979470-3595ac045ab0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  avatar="/images/alemanha.png"
                />
                <Card
                  cidade="Atenas"
                  pais="Grécia"
                  foto="https://images.unsplash.com/photo-1503152394-c571994fd383?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  avatar="/images/grecia.png"
                />
                <Card
                  cidade="Veneza"
                  pais="Itália"
                  foto="https://images.unsplash.com/photo-1533676802871-eca1ae998cd5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1491&q=80"
                  avatar="/images/IF.png"
                />
                <Card
                  cidade="Moscou"
                  pais="Rússia"
                  foto="https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  avatar="/images/russia.png"
                />
                <Card
                  cidade="Madri"
                  pais="Espanha"
                  foto="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  avatar="/images/EF.png"
                />
                <Card
                  cidade="Dublin"
                  pais="Irlanda"
                  foto="https://images.unsplash.com/photo-1584796353969-30d8473ce76f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  avatar="/images/irlanda.jpg"
                />
                <Card
                  cidade="Florença"
                  pais="Itália"
                  foto="https://images.unsplash.com/photo-1476362174823-3a23f4aa6d76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                  avatar="/images/IF.png"
                />
                <Card
                  cidade="Munique"
                  pais="Alemanha"
                  foto="https://images.unsplash.com/photo-1599982890963-3aabd60064d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                  avatar="/images/alemanha.png"
                />
                <Card
                  cidade="São Petesburgo"
                  pais="Rússia"
                  foto="https://images.unsplash.com/photo-1561994381-9b1e23f4828f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80"
                  avatar="/images/russia.png"
                />
                <Card
                  cidade="Bruxelas"
                  pais="Bélgica"
                  foto="https://images.unsplash.com/photo-1564005213136-4d35e8026fa0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  avatar="/images/belgica.png"
                />
                <Card
                  cidade="Budapeste"
                  pais="Hungria"
                  foto="https://images.unsplash.com/photo-1551867633-194f125bddfa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  avatar="/images/hungria.png"
                />
                <Card
                  cidade="Lisboa"
                  pais="Portugal"
                  foto="https://images.unsplash.com/photo-1525207934214-58e69a8f8a3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
                  avatar="/images/portugal.png"
                />
                <Card
                  cidade="Heraclião"
                  pais="Grécia"
                  foto="https://images.unsplash.com/photo-1597485116741-e21978d9d411?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
                  avatar="/images/grecia.png"
                />
                <Card
                  cidade="Copenhagen"
                  pais="Dinamarca"
                  foto="https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  avatar="/images/dinamarca.png"
                />
                <Card
                  cidade="Cracóvia"
                  pais="Polônia"
                  foto="https://images.unsplash.com/photo-1606992894456-799462dacd65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  avatar="/images/polonia.png"
                />
                <Card
                  cidade="Varsóvia"
                  pais="Polônia"
                  foto="https://images.unsplash.com/photo-1519197924294-4ba991a11128?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"
                  avatar="/images/polonia.png"
                />
                <Card
                  cidade="Frankfurt"
                  pais="Alemanha"
                  foto="https://images.unsplash.com/photo-1577185816322-21f2a92b1342?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                  avatar="/images/alemanha.png"
                />
                <Card
                  cidade="Estocolmo"
                  pais="Suécia"
                  foto="https://images.unsplash.com/photo-1516382772789-f9bfd7cb7532?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=958&q=80"
                  avatar="/images/suecia.png"
                />
                <Card
                  cidade="Nice"
                  pais="França"
                  foto="https://images.unsplash.com/photo-1491166617655-0723a0999cfc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  avatar="/images/FF.png"
                />
                <Card
                  cidade="Porto"
                  pais="Portugal"
                  foto="https://images.unsplash.com/photo-1569959220744-ff553533f492?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1045&q=80"
                  avatar="/images/portugal.png"
                />
                <Card
                  cidade="Rodes"
                  pais="Grécia"
                  foto="https://images.unsplash.com/photo-1582030826710-a16d19043d98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  avatar="/images/grecia.png"
                />
              </SimpleGrid>
            </Flex>
          </VStack>
      }
    </Flex >
  )
}