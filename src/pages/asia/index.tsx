import { Flex, Image, Heading, Text, HStack, VStack, Tooltip, SimpleGrid, Box, useBreakpointValue } from "@chakra-ui/react";
import { InfoOutlineIcon } from '@chakra-ui/icons'
import { Header } from "../../components/Header";
import { Card } from "../../components/Card/Card";
import Head from 'next/head';


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
    <>
      <Head>
        <title>Worldtrip | Ásia</title>
      </Head>
      <Flex direction="column">
        <Header />
        <Image w="100%" h='450px' objectFit="cover" filter="brightness(65%)" position="relative" src="https://images.unsplash.com/photo-1535139262971-c51845709a48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Ásia" />
        <Heading position="absolute" size="3xl" top="425px" align="left" mx="auto" px={["20", "40", "60"]} color="white">
          Ásia
        </Heading>
        {isWideVersion ?
          <>
            <HStack spacing="150" w="100%" my="10" maxWidth={1480} mx="auto" px="6">
              <Text w="35%" fontWeight="normal" fontSize="2xl" letterSpacing="tight" lineHeight="50px" align="justify" mt="100">
                A Ásia é o maior dos continentes, tanto em área como em população.
                Abrange um terço das partes sólidas da superfície da Terra e é
                responsável por abrigar quase três quintos da população mundial.
                A Ásia faz fronteira no lado ocidental com a África e com a Europa,
                e no lado oriental com o oceano Pacífico, a Oceania e, em menor
                proporção, com a América do Norte, pelo Estreito de Bering.
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
                  +2000
                </Text>
                <Text fontSize="2xl" fontWeight="bold">
                  línguas
                </Text>
              </VStack>
              <VStack>
                <Text fontSize="6xl" fontWeight="bold" h="70px" mt="75" color="yellow.400">
                  51
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
                  cidade="Hong Kong"
                  pais="Hong Kong"
                  foto="https://images.unsplash.com/photo-1594973782943-3314fe063f68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
                  avatar="/images/hongkong.png"
                />
                <Card
                  cidade="Bangkok"
                  pais="Tailândia"
                  foto="https://images.unsplash.com/photo-1531169628939-e84f860fa5d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  avatar="/images/tailandia.png"
                />
                <Card
                  cidade="Macau"
                  pais="Macau"
                  foto="https://images.unsplash.com/photo-1552912809-6d4240af286b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1073&q=80"
                  avatar="/images/macau.png"
                />
                <Card
                  cidade="Singapura"
                  pais="Singapura"
                  foto="https://images.unsplash.com/photo-1496939376851-89342e90adcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
                  avatar="/images/singapura.png"
                />
                <Card
                  cidade="Dubai"
                  pais="Emirados Árabes Unidos"
                  foto="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                  avatar="/images/emirados.png"
                />
                <Card
                  cidade="Kuala Lumpur"
                  pais="Malásia"
                  foto="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1045&q=80"
                  avatar="/images/malasia.png"
                />
                <Card
                  cidade="Istambul"
                  pais="Turquia"
                  foto="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                  avatar="/images/turquia.png"
                />
                <Card
                  cidade="Delhi"
                  pais="Índia"
                  foto="https://images.unsplash.com/photo-1597040663342-45b6af3d91a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
                  avatar="/images/india.png"
                />
                <Card
                  cidade="Antália"
                  pais="Turquia"
                  foto="https://images.unsplash.com/photo-1593238739364-18cfde30e522?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1496&q=80"
                  avatar="/images/turquia.png"
                />
                <Card
                  cidade="Shenzhen"
                  pais="China"
                  foto="https://images.unsplash.com/photo-1522614288668-a697127e9b21?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  avatar="/images/china.png"
                />
                <Card
                  cidade="Mumbai"
                  pais="Índia"
                  foto="https://images.unsplash.com/photo-1595658658481-d53d3f999875?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                  avatar="/images/india.png"
                />
                <Card
                  cidade="Phuket"
                  pais="Tailândia"
                  foto="https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=990&q=80"
                  avatar="/images/tailandia.png"
                />
                <Card
                  cidade="Tóquio"
                  pais="Japão"
                  foto="https://images.unsplash.com/photo-1549693578-d683be217e58?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1056&q=80"
                  avatar="/images/japao.png"
                />
                <Card
                  cidade="Taipei"
                  pais="Taiwan"
                  foto="https://images.unsplash.com/photo-1550760146-f2f4cf8961f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                  avatar="/images/taiwan.jpg"
                />
                <Card
                  cidade="Mecca"
                  pais="Arábia Saudita"
                  foto="https://images.unsplash.com/photo-1565019001609-0e34a6a22189?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                  avatar="/images/saudita.png"
                />
                <Card
                  cidade="Guangzhou"
                  pais="China"
                  foto="https://images.unsplash.com/photo-1583996829982-823143cc975a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  avatar="/images/china.png"
                />
                <Card
                  cidade="Medina"
                  pais="Arábia Saudita"
                  foto="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  avatar="/images/saudita.png"
                />
                <Card
                  cidade="Seoul"
                  pais="Coréia do Sul"
                  foto="https://images.unsplash.com/photo-1534274867514-d5b47ef89ed7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=970&q=80"
                  avatar="/images/coreia.png"
                />
                <Card
                  cidade="Agra"
                  pais="Índia"
                  foto="https://images.unsplash.com/photo-1612810436541-336b73fbcf9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                  avatar="/images/india.png"
                />
                <Card
                  cidade="Osaka"
                  pais="Japão"
                  foto="https://images.unsplash.com/photo-1590253230532-a67f6bc61c9e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1016&q=80"
                  avatar="/images/japao.png"
                />
                <Card
                  cidade="Ho Chi Minh"
                  pais="Vietnã"
                  foto="https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  avatar="/images/vietna.png"
                />
                <Card
                  cidade="Denpasar"
                  pais="Indonésia"
                  foto="https://images.unsplash.com/photo-1611813683129-92a96f784598?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
                  avatar="/images/indonesia.png"
                />
                <Card
                  cidade="Chennai"
                  pais="Índia"
                  foto="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                  avatar="/images/india.png"
                />
                <Card
                  cidade="Johor Bahru"
                  pais="Malásia"
                  foto="https://images.unsplash.com/photo-1595435193556-fcc65eeb827c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                  avatar="/images/malasia.png"
                />
                <Card
                  cidade="Jaipur"
                  pais="Índia"
                  foto="https://images.unsplash.com/photo-1477587458883-47145ed94245?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  avatar="/images/india.png"
                />
                <Card
                  cidade="Ha Long"
                  pais="Vietnã"
                  foto="https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                  avatar="/images/vietna.png"
                />
                <Card
                  cidade="Riyadh"
                  pais="Arábia Saudita"
                  foto="https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  avatar="/images/saudita.png"
                />
                <Card
                  cidade="Hanói"
                  pais="Vietnã"
                  foto="https://images.unsplash.com/photo-1599708153386-62bf3f035c78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  avatar="/images/vietna.png"
                />
                <Card
                  cidade="Jacarta"
                  pais="Indonésia"
                  foto="https://images.unsplash.com/photo-1555899434-94d1368aa7af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  avatar="/images/indonesia.png"
                />
                <Card
                  cidade="Pequim"
                  pais="China"
                  foto="https://images.unsplash.com/photo-1577706881850-bf7c7d8906a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
                  avatar="/images/china.png"
                />
                <Card
                  cidade="Jerusalém"
                  pais="Israel"
                  foto="https://images.unsplash.com/photo-1552423314-cf29ab68ad73?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  avatar="/images/israel.jpg"
                />
                <Card
                  cidade="Dammam"
                  pais="Arábia Saudita"
                  foto="https://images.unsplash.com/photo-1578895101408-1a36b834405b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=985&q=80"
                  avatar="/images/saudita.png"
                />
                <Card
                  cidade="Ilha de Penang"
                  pais="Malásia"
                  foto="https://images.unsplash.com/photo-1586446912667-0e9d25cd90f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  avatar="/images/malasia.png"
                />
                <Card
                  cidade="Kyoto"
                  pais="Japão"
                  foto="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  avatar="/images/japao.png"
                />
                <Card
                  cidade="Zhuhai"
                  pais="China"
                  foto="https://images.unsplash.com/photo-1568947577887-1bcb41962122?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  avatar="/images/china.png"
                />
                <Card
                  cidade="Chiang Mai"
                  pais="Tailândia"
                  foto="https://images.unsplash.com/photo-1597629008285-a10132d20913?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  avatar="/images/tailandia.png"
                />
                <Card
                  cidade="Kolkata"
                  pais="Índia"
                  foto="https://images.unsplash.com/photo-1558431382-27e303142255?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                  avatar="/images/india.png"
                />
                <Card
                  cidade="Cebu"
                  pais="Filipinas"
                  foto="https://images.unsplash.com/photo-1505449307143-eb99f132e28f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                  avatar="/images/filipinas.jpg"
                />
                <Card
                  cidade="Tel Aviv"
                  pais="Israel"
                  foto="https://images.unsplash.com/photo-1500990702037-7620ccb6a60a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  avatar="/images/israel.jpg"
                />
                <Card
                  cidade="Guilin"
                  pais="China"
                  foto="https://images.unsplash.com/photo-1537531383496-f4749b8032cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                  avatar="/images/china.png"
                />
                <Card
                  cidade="Mugla"
                  pais="Turquia"
                  foto="https://images.unsplash.com/photo-1600194795031-e8c60926db4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1267&q=80"
                  avatar="/images/turquia.png"
                />
                <Card
                  cidade="Chiba"
                  pais="Japão"
                  foto="https://images.unsplash.com/photo-1624601573012-efb68931cc8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  avatar="/images/japao.png"
                />
                <Card
                  cidade="Da Nang"
                  pais="Vietnã"
                  foto="https://images.unsplash.com/photo-1445272727255-681d14e89af1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80"
                  avatar="/images/vietna.png"
                />
                <Card
                  cidade="Batam"
                  pais="Indonésia"
                  foto="https://images.unsplash.com/photo-1629643570024-e6062c016143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
                  avatar="/images/indonesia.png"
                />
                <Card
                  cidade="Fukuoka"
                  pais="Japão"
                  foto="https://images.unsplash.com/photo-1573045736454-1abc56c6571d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
                  avatar="/images/japao.png"
                />
                <Card
                  cidade="Abu Dhabi"
                  pais="Emirados Árabes Unidos"
                  foto="https://images.unsplash.com/photo-1603565095944-2a6f33bb517c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                  avatar="/images/emirados.png"
                />
                <Card
                  cidade="Jeju"
                  pais="Coréia do Sul"
                  foto="https://images.unsplash.com/photo-1596941248238-0d49dcaa4263?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  avatar="/images/coreia.png"
                />
                <Card
                  cidade="Krabi"
                  pais="Tailândia"
                  foto="https://images.unsplash.com/photo-1585086814041-c5d629a6b8c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  avatar="/images/tailandia.png"
                />
                <Card
                  cidade="Bangalore"
                  pais="Índia"
                  foto="https://images.unsplash.com/photo-1580667309332-1706b07f21e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
                  avatar="/images/india.png"
                />
              </SimpleGrid>
            </Flex>
          </>
          : isMediumVersion ?
            <Box>
              <HStack spacing="180" w="100%" my="10" maxWidth={720} mx="auto" align="center" px="6">
                <Text w="100%" fontWeight="normal" fontSize="2xl" letterSpacing="tight" lineHeight="50px" align="justify" mt="100">
                  A Ásia é o maior dos continentes, tanto em área como em população.
                  Abrange um terço das partes sólidas da superfície da Terra e é
                  responsável por abrigar quase três quintos da população mundial.
                  A Ásia faz fronteira no lado ocidental com a África e com a Europa,
                  e no lado oriental com o oceano Pacífico, a Oceania e, em menor
                  proporção, com a América do Norte, pelo Estreito de Bering.
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
                    +2000
                  </Text>
                  <Text fontSize="2xl" fontWeight="bold">
                    línguas
                  </Text>
                </VStack>
                <VStack>
                  <Text fontSize="6xl" fontWeight="bold" h="70px" mt="75" color="yellow.400">
                    51
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
                    cidade="Hong Kong"
                    pais="Hong Kong"
                    foto="https://images.unsplash.com/photo-1594973782943-3314fe063f68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
                    avatar="/images/hongkong.png"
                  />
                  <Card
                    cidade="Bangkok"
                    pais="Tailândia"
                    foto="https://images.unsplash.com/photo-1531169628939-e84f860fa5d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    avatar="/images/tailandia.png"
                  />
                  <Card
                    cidade="Macau"
                    pais="Macau"
                    foto="https://images.unsplash.com/photo-1552912809-6d4240af286b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1073&q=80"
                    avatar="/images/macau.png"
                  />
                  <Card
                    cidade="Singapura"
                    pais="Singapura"
                    foto="https://images.unsplash.com/photo-1496939376851-89342e90adcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
                    avatar="/images/singapura.png"
                  />
                  <Card
                    cidade="Dubai"
                    pais="Emirados Árabes Unidos"
                    foto="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                    avatar="/images/emirados.png"
                  />
                  <Card
                    cidade="Kuala Lumpur"
                    pais="Malásia"
                    foto="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1045&q=80"
                    avatar="/images/malasia.png"
                  />
                  <Card
                    cidade="Istambul"
                    pais="Turquia"
                    foto="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                    avatar="/images/turquia.png"
                  />
                  <Card
                    cidade="Delhi"
                    pais="Índia"
                    foto="https://images.unsplash.com/photo-1597040663342-45b6af3d91a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
                    avatar="/images/india.png"
                  />
                  <Card
                    cidade="Antália"
                    pais="Turquia"
                    foto="https://images.unsplash.com/photo-1593238739364-18cfde30e522?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1496&q=80"
                    avatar="/images/turquia.png"
                  />
                  <Card
                    cidade="Shenzhen"
                    pais="China"
                    foto="https://images.unsplash.com/photo-1522614288668-a697127e9b21?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    avatar="/images/china.png"
                  />
                  <Card
                    cidade="Mumbai"
                    pais="Índia"
                    foto="https://images.unsplash.com/photo-1595658658481-d53d3f999875?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                    avatar="/images/india.png"
                  />
                  <Card
                    cidade="Phuket"
                    pais="Tailândia"
                    foto="https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=990&q=80"
                    avatar="/images/tailandia.png"
                  />
                  <Card
                    cidade="Tóquio"
                    pais="Japão"
                    foto="https://images.unsplash.com/photo-1549693578-d683be217e58?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1056&q=80"
                    avatar="/images/japao.png"
                  />
                  <Card
                    cidade="Taipei"
                    pais="Taiwan"
                    foto="https://images.unsplash.com/photo-1550760146-f2f4cf8961f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                    avatar="/images/taiwan.jpg"
                  />
                  <Card
                    cidade="Mecca"
                    pais="Arábia Saudita"
                    foto="https://images.unsplash.com/photo-1565019001609-0e34a6a22189?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                    avatar="/images/saudita.png"
                  />
                  <Card
                    cidade="Guangzhou"
                    pais="China"
                    foto="https://images.unsplash.com/photo-1583996829982-823143cc975a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    avatar="/images/china.png"
                  />
                  <Card
                    cidade="Medina"
                    pais="Arábia Saudita"
                    foto="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    avatar="/images/saudita.png"
                  />
                  <Card
                    cidade="Seoul"
                    pais="Coréia do Sul"
                    foto="https://images.unsplash.com/photo-1534274867514-d5b47ef89ed7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=970&q=80"
                    avatar="/images/coreia.png"
                  />
                  <Card
                    cidade="Agra"
                    pais="Índia"
                    foto="https://images.unsplash.com/photo-1612810436541-336b73fbcf9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                    avatar="/images/india.png"
                  />
                  <Card
                    cidade="Osaka"
                    pais="Japão"
                    foto="https://images.unsplash.com/photo-1590253230532-a67f6bc61c9e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1016&q=80"
                    avatar="/images/japao.png"
                  />
                  <Card
                    cidade="Ho Chi Minh"
                    pais="Vietnã"
                    foto="https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    avatar="/images/vietna.png"
                  />
                  <Card
                    cidade="Denpasar"
                    pais="Indonésia"
                    foto="https://images.unsplash.com/photo-1611813683129-92a96f784598?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
                    avatar="/images/indonesia.png"
                  />
                  <Card
                    cidade="Chennai"
                    pais="Índia"
                    foto="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                    avatar="/images/india.png"
                  />
                  <Card
                    cidade="Johor Bahru"
                    pais="Malásia"
                    foto="https://images.unsplash.com/photo-1595435193556-fcc65eeb827c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                    avatar="/images/malasia.png"
                  />
                  <Card
                    cidade="Jaipur"
                    pais="Índia"
                    foto="https://images.unsplash.com/photo-1477587458883-47145ed94245?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    avatar="/images/india.png"
                  />
                  <Card
                    cidade="Ha Long"
                    pais="Vietnã"
                    foto="https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                    avatar="/images/vietna.png"
                  />
                  <Card
                    cidade="Riyadh"
                    pais="Arábia Saudita"
                    foto="https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    avatar="/images/saudita.png"
                  />
                  <Card
                    cidade="Hanói"
                    pais="Vietnã"
                    foto="https://images.unsplash.com/photo-1599708153386-62bf3f035c78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    avatar="/images/vietna.png"
                  />
                  <Card
                    cidade="Jacarta"
                    pais="Indonésia"
                    foto="https://images.unsplash.com/photo-1555899434-94d1368aa7af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    avatar="/images/indonesia.png"
                  />
                  <Card
                    cidade="Pequim"
                    pais="China"
                    foto="https://images.unsplash.com/photo-1577706881850-bf7c7d8906a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
                    avatar="/images/china.png"
                  />
                  <Card
                    cidade="Jerusalém"
                    pais="Israel"
                    foto="https://images.unsplash.com/photo-1552423314-cf29ab68ad73?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    avatar="/images/israel.jpg"
                  />
                  <Card
                    cidade="Dammam"
                    pais="Arábia Saudita"
                    foto="https://images.unsplash.com/photo-1578895101408-1a36b834405b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=985&q=80"
                    avatar="/images/saudita.png"
                  />
                  <Card
                    cidade="Ilha de Penang"
                    pais="Malásia"
                    foto="https://images.unsplash.com/photo-1586446912667-0e9d25cd90f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    avatar="/images/malasia.png"
                  />
                  <Card
                    cidade="Kyoto"
                    pais="Japão"
                    foto="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    avatar="/images/japao.png"
                  />
                  <Card
                    cidade="Zhuhai"
                    pais="China"
                    foto="https://images.unsplash.com/photo-1568947577887-1bcb41962122?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    avatar="/images/china.png"
                  />
                  <Card
                    cidade="Chiang Mai"
                    pais="Tailândia"
                    foto="https://images.unsplash.com/photo-1597629008285-a10132d20913?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    avatar="/images/tailandia.png"
                  />
                  <Card
                    cidade="Kolkata"
                    pais="Índia"
                    foto="https://images.unsplash.com/photo-1558431382-27e303142255?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                    avatar="/images/india.png"
                  />
                  <Card
                    cidade="Cebu"
                    pais="Filipinas"
                    foto="https://images.unsplash.com/photo-1505449307143-eb99f132e28f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                    avatar="/images/filipinas.jpg"
                  />
                  <Card
                    cidade="Tel Aviv"
                    pais="Israel"
                    foto="https://images.unsplash.com/photo-1500990702037-7620ccb6a60a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    avatar="/images/israel.jpg"
                  />
                  <Card
                    cidade="Guilin"
                    pais="China"
                    foto="https://images.unsplash.com/photo-1537531383496-f4749b8032cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                    avatar="/images/china.png"
                  />
                  <Card
                    cidade="Mugla"
                    pais="Turquia"
                    foto="https://images.unsplash.com/photo-1600194795031-e8c60926db4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1267&q=80"
                    avatar="/images/turquia.png"
                  />
                  <Card
                    cidade="Chiba"
                    pais="Japão"
                    foto="https://images.unsplash.com/photo-1624601573012-efb68931cc8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    avatar="/images/japao.png"
                  />
                  <Card
                    cidade="Da Nang"
                    pais="Vietnã"
                    foto="https://images.unsplash.com/photo-1445272727255-681d14e89af1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80"
                    avatar="/images/vietna.png"
                  />
                  <Card
                    cidade="Batam"
                    pais="Indonésia"
                    foto="https://images.unsplash.com/photo-1629643570024-e6062c016143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
                    avatar="/images/indonesia.png"
                  />
                  <Card
                    cidade="Fukuoka"
                    pais="Japão"
                    foto="https://images.unsplash.com/photo-1573045736454-1abc56c6571d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
                    avatar="/images/japao.png"
                  />
                  <Card
                    cidade="Abu Dhabi"
                    pais="Emirados Árabes Unidos"
                    foto="https://images.unsplash.com/photo-1603565095944-2a6f33bb517c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                    avatar="/images/emirados.png"
                  />
                  <Card
                    cidade="Jeju"
                    pais="Coréia do Sul"
                    foto="https://images.unsplash.com/photo-1596941248238-0d49dcaa4263?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    avatar="/images/coreia.png"
                  />
                  <Card
                    cidade="Krabi"
                    pais="Tailândia"
                    foto="https://images.unsplash.com/photo-1585086814041-c5d629a6b8c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    avatar="/images/tailandia.png"
                  />
                  <Card
                    cidade="Bangalore"
                    pais="Índia"
                    foto="https://images.unsplash.com/photo-1580667309332-1706b07f21e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
                    avatar="/images/india.png"
                  />
                </SimpleGrid>
              </Flex>
            </Box>

            : < VStack spacing="2" w="100%" my="10" mx="auto" px="6">
              <Text w="100%" fontWeight="normal" fontSize="2xl" letterSpacing="tight" lineHeight="50px" align="justify" mt="100">
                A Ásia é o maior dos continentes, tanto em área como em população.
                Abrange um terço das partes sólidas da superfície da Terra e é
                responsável por abrigar quase três quintos da população mundial.
                A Ásia faz fronteira no lado ocidental com a África e com a Europa,
                e no lado oriental com o oceano Pacífico, a Oceania e, em menor
                proporção, com a América do Norte, pelo Estreito de Bering.
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
                  +2000
                </Text>
                <Text fontSize="2xl" fontWeight="bold">
                  línguas
                </Text>
              </VStack>
              <VStack>
                <Text fontSize="6xl" fontWeight="bold" h="70px" mt="75" color="yellow.400">
                  51
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
                    cidade="Hong Kong"
                    pais="Hong Kong"
                    foto="https://images.unsplash.com/photo-1594973782943-3314fe063f68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
                    avatar="/images/hongkong.png"
                  />
                  <Card
                    cidade="Bangkok"
                    pais="Tailândia"
                    foto="https://images.unsplash.com/photo-1531169628939-e84f860fa5d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    avatar="/images/tailandia.png"
                  />
                  <Card
                    cidade="Macau"
                    pais="Macau"
                    foto="https://images.unsplash.com/photo-1552912809-6d4240af286b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1073&q=80"
                    avatar="/images/macau.png"
                  />
                  <Card
                    cidade="Singapura"
                    pais="Singapura"
                    foto="https://images.unsplash.com/photo-1496939376851-89342e90adcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
                    avatar="/images/singapura.png"
                  />
                  <Card
                    cidade="Dubai"
                    pais="Emirados Árabes Unidos"
                    foto="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                    avatar="/images/emirados.png"
                  />
                  <Card
                    cidade="Kuala Lumpur"
                    pais="Malásia"
                    foto="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1045&q=80"
                    avatar="/images/malasia.png"
                  />
                  <Card
                    cidade="Istambul"
                    pais="Turquia"
                    foto="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                    avatar="/images/turquia.png"
                  />
                  <Card
                    cidade="Delhi"
                    pais="Índia"
                    foto="https://images.unsplash.com/photo-1597040663342-45b6af3d91a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
                    avatar="/images/india.png"
                  />
                  <Card
                    cidade="Antália"
                    pais="Turquia"
                    foto="https://images.unsplash.com/photo-1593238739364-18cfde30e522?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1496&q=80"
                    avatar="/images/turquia.png"
                  />
                  <Card
                    cidade="Shenzhen"
                    pais="China"
                    foto="https://images.unsplash.com/photo-1522614288668-a697127e9b21?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    avatar="/images/china.png"
                  />
                  <Card
                    cidade="Mumbai"
                    pais="Índia"
                    foto="https://images.unsplash.com/photo-1595658658481-d53d3f999875?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                    avatar="/images/india.png"
                  />
                  <Card
                    cidade="Phuket"
                    pais="Tailândia"
                    foto="https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=990&q=80"
                    avatar="/images/tailandia.png"
                  />
                  <Card
                    cidade="Tóquio"
                    pais="Japão"
                    foto="https://images.unsplash.com/photo-1549693578-d683be217e58?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1056&q=80"
                    avatar="/images/japao.png"
                  />
                  <Card
                    cidade="Pattaya"
                    pais="Tailândia"
                    foto="https://images.unsplash.com/photo-1563413306991-45f87bd3ae8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
                    avatar="/images/tailandia.png"
                  />
                  <Card
                    cidade="Taipei"
                    pais="Taiwan"
                    foto="https://images.unsplash.com/photo-1550760146-f2f4cf8961f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                    avatar="/images/taiwan.jpg"
                  />
                  <Card
                    cidade="Mecca"
                    pais="Arábia Saudita"
                    foto="https://images.unsplash.com/photo-1565019001609-0e34a6a22189?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                    avatar="/images/saudita.png"
                  />
                  <Card
                    cidade="Guangzhou"
                    pais="China"
                    foto="https://images.unsplash.com/photo-1583996829982-823143cc975a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    avatar="/images/china.png"
                  />
                  <Card
                    cidade="Medina"
                    pais="Arábia Saudita"
                    foto="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    avatar="/images/saudita.png"
                  />
                  <Card
                    cidade="Seoul"
                    pais="Coréia do Sul"
                    foto="https://images.unsplash.com/photo-1534274867514-d5b47ef89ed7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=970&q=80"
                    avatar="/images/coreia.png"
                  />
                  <Card
                    cidade="Agra"
                    pais="Índia"
                    foto="https://images.unsplash.com/photo-1612810436541-336b73fbcf9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                    avatar="/images/india.png"
                  />
                  <Card
                    cidade="Osaka"
                    pais="Japão"
                    foto="https://images.unsplash.com/photo-1590253230532-a67f6bc61c9e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1016&q=80"
                    avatar="/images/japao.png"
                  />
                  <Card
                    cidade="Shanghai"
                    pais="China"
                    foto="https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    avatar="/images/china.png"
                  />
                  <Card
                    cidade="Ho Chi Minh"
                    pais="Vietnã"
                    foto="https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    avatar="/images/vietna.png"
                  />
                  <Card
                    cidade="Denpasar"
                    pais="Indonésia"
                    foto="https://images.unsplash.com/photo-1611813683129-92a96f784598?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
                    avatar="/images/indonesia.png"
                  />
                  <Card
                    cidade="Chennai"
                    pais="Índia"
                    foto="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                    avatar="/images/india.png"
                  />
                  <Card
                    cidade="Johor Bahru"
                    pais="Malásia"
                    foto="https://images.unsplash.com/photo-1595435193556-fcc65eeb827c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                    avatar="/images/malasia.png"
                  />
                  <Card
                    cidade="Jaipur"
                    pais="Índia"
                    foto="https://images.unsplash.com/photo-1477587458883-47145ed94245?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    avatar="/images/india.png"
                  />
                  <Card
                    cidade="Ha Long"
                    pais="Vietnã"
                    foto="https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                    avatar="/images/vietna.png"
                  />
                  <Card
                    cidade="Riyadh"
                    pais="Arábia Saudita"
                    foto="https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    avatar="/images/saudita.png"
                  />
                  <Card
                    cidade="Hanói"
                    pais="Vietnã"
                    foto="https://images.unsplash.com/photo-1599708153386-62bf3f035c78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    avatar="/images/vietna.png"
                  />
                  <Card
                    cidade="Jacarta"
                    pais="Indonésia"
                    foto="https://images.unsplash.com/photo-1555899434-94d1368aa7af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    avatar="/images/indonesia.png"
                  />
                  <Card
                    cidade="Pequim"
                    pais="China"
                    foto="https://images.unsplash.com/photo-1577706881850-bf7c7d8906a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
                    avatar="/images/china.png"
                  />
                  <Card
                    cidade="Jerusalém"
                    pais="Israel"
                    foto="https://images.unsplash.com/photo-1552423314-cf29ab68ad73?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    avatar="/images/israel.jpg"
                  />
                  <Card
                    cidade="Dammam"
                    pais="Arábia Saudita"
                    foto="https://images.unsplash.com/photo-1578895101408-1a36b834405b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=985&q=80"
                    avatar="/images/saudita.png"
                  />
                  <Card
                    cidade="Ilha de Penang"
                    pais="Malásia"
                    foto="https://images.unsplash.com/photo-1586446912667-0e9d25cd90f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    avatar="/images/malasia.png"
                  />
                  <Card
                    cidade="Kyoto"
                    pais="Japão"
                    foto="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    avatar="/images/japao.png"
                  />
                  <Card
                    cidade="Zhuhai"
                    pais="China"
                    foto="https://images.unsplash.com/photo-1568947577887-1bcb41962122?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    avatar="/images/china.png"
                  />
                  <Card
                    cidade="Chiang Mai"
                    pais="Tailândia"
                    foto="https://images.unsplash.com/photo-1597629008285-a10132d20913?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    avatar="/images/tailandia.png"
                  />
                  <Card
                    cidade="Kolkata"
                    pais="Índia"
                    foto="https://images.unsplash.com/photo-1558431382-27e303142255?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                    avatar="/images/india.png"
                  />
                  <Card
                    cidade="Cebu"
                    pais="Filipinas"
                    foto="https://images.unsplash.com/photo-1505449307143-eb99f132e28f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                    avatar="/images/filipinas.jpg"
                  />
                  <Card
                    cidade="Tel Aviv"
                    pais="Israel"
                    foto="https://images.unsplash.com/photo-1500990702037-7620ccb6a60a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    avatar="/images/israel.jpg"
                  />
                  <Card
                    cidade="Guilin"
                    pais="China"
                    foto="https://images.unsplash.com/photo-1537531383496-f4749b8032cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                    avatar="/images/china.png"
                  />
                  <Card
                    cidade="Mugla"
                    pais="Turquia"
                    foto="https://images.unsplash.com/photo-1600194795031-e8c60926db4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1267&q=80"
                    avatar="/images/turquia.png"
                  />
                  <Card
                    cidade="Chiba"
                    pais="Japão"
                    foto="https://images.unsplash.com/photo-1624601573012-efb68931cc8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    avatar="/images/japao.png"
                  />
                  <Card
                    cidade="Da Nang"
                    pais="Vietnã"
                    foto="https://images.unsplash.com/photo-1445272727255-681d14e89af1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80"
                    avatar="/images/vietna.png"
                  />
                  <Card
                    cidade="Batam"
                    pais="Indonésia"
                    foto="https://images.unsplash.com/photo-1629643570024-e6062c016143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
                    avatar="/images/indonesia.png"
                  />
                  <Card
                    cidade="Fukuoka"
                    pais="Japão"
                    foto="https://images.unsplash.com/photo-1573045736454-1abc56c6571d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
                    avatar="/images/japao.png"
                  />
                  <Card
                    cidade="Abu Dhabi"
                    pais="Emirados Árabes Unidos"
                    foto="https://images.unsplash.com/photo-1603565095944-2a6f33bb517c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                    avatar="/images/emirados.png"
                  />
                  <Card
                    cidade="Jeju"
                    pais="Coréia do Sul"
                    foto="https://images.unsplash.com/photo-1596941248238-0d49dcaa4263?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    avatar="/images/coreia.png"
                  />
                  <Card
                    cidade="Krabi"
                    pais="Tailândia"
                    foto="https://images.unsplash.com/photo-1585086814041-c5d629a6b8c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    avatar="/images/tailandia.png"
                  />
                  <Card
                    cidade="Bangalore"
                    pais="Índia"
                    foto="https://images.unsplash.com/photo-1580667309332-1706b07f21e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
                    avatar="/images/india.png"
                  />
                </SimpleGrid>
              </Flex>
            </VStack>
        }
      </Flex >
    </>
  )
}