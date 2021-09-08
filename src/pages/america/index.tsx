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
      <Image w="100%" h='450px' objectFit="cover" filter="brightness(65%)" position="relative" src="https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" alt="América" />
      <Heading position="absolute" size="3xl" top="425px" align="left" mx="auto" px={["20", "40", "60"]} color="white">
        América
      </Heading>
      {isWideVersion ?
        <>
          <HStack spacing="180" w="100%" my="10" maxWidth={1480} mx="auto" px="6">
            <Text w="35%" fontWeight="normal" fontSize="2xl" letterSpacing="tight" lineHeight="50px" align="justify" mt="100">
              A América é o continente localizado
              no hemisfério ocidental e que
              se estende, no sentido norte-sul,
              desde o oceano Ártico até o cabo
              Horn, ao longo de cerca de 15 mil quilômetros.
            </Text>
            <VStack>
              <Text fontSize="6xl" fontWeight="bold" h="70px" mt="75" color="yellow.400">
                35
              </Text>
              <Text fontSize="2xl" fontWeight="bold">
                países
              </Text>
            </VStack>
            <VStack>
              <Text fontSize="6xl" fontWeight="bold" h="70px" mt="75" color="yellow.400">
                8
              </Text>
              <Text fontSize="2xl" fontWeight="bold">
                línguas
              </Text>
            </VStack>
            <VStack>
              <Text fontSize="6xl" fontWeight="bold" h="70px" mt="75" color="yellow.400">
                13
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
                cidade="Nova Iorque"
                pais="EUA"
                foto="https://images.unsplash.com/photo-1445023086979-7244a12345a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                avatar="/images/eua.png"
              />
              <Card
                cidade="Miami"
                pais="EUA"
                foto="https://images.unsplash.com/photo-1589083130544-0d6a2926e519?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                avatar="/images/eua.png"
              />
              <Card
                cidade="Los Angeles"
                pais="EUA"
                foto="https://images.unsplash.com/photo-1460881680858-30d872d5b530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                avatar="/images/eua.png"
              />
              <Card
                cidade="Las Vegas"
                pais="EUA"
                foto="https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80"
                avatar="/images/eua.png"
              />
              <Card
                cidade="Cancún"
                pais="México"
                foto="https://images.unsplash.com/photo-1552074284-5e88ef1aef18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                avatar="/images/mexico.png"
              />
              <Card
                cidade="Orlando"
                pais="EUA"
                foto="https://images.unsplash.com/photo-1575089776834-8be34696ffb9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
                avatar="/images/eua.png"
              />
              <Card
                cidade="Toronto"
                pais="Canadá"
                foto="https://images.unsplash.com/photo-1526417501781-5e7e587b7686?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                avatar="/images/canada.png"
              />
              <Card
                cidade="Vancouver"
                pais="Canadá"
                foto="https://images.unsplash.com/photo-1559511260-66a654ae982a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1392&q=80"
                avatar="/images/canada.png"
              />
              <Card
                cidade="São Francisco"
                pais="EUA"
                foto="https://images.unsplash.com/photo-1445368794737-0cf251429ca0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
                avatar="/images/eua.png"
              />
              <Card
                cidade="Honolulu"
                pais="EUA"
                foto="https://images.unsplash.com/photo-1573992554018-83e7853bd45f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80"
                avatar="/images/eua.png"
              />
              <Card
                cidade="Buenos Aires"
                pais="Argentina"
                foto="https://images.unsplash.com/photo-1528392175875-4ce3ab32663c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80"
                avatar="/images/arg.png"
              />
              <Card
                cidade="Lima"
                pais="Perú"
                foto="https://images.unsplash.com/photo-1577587230708-187fdbef4d91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                avatar="/images/peru.png"
              />
              <Card
                cidade="Rio de Janeiro"
                pais="Brasil"
                foto="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                avatar="/images/brasil.png"
              />
            </SimpleGrid>
          </Flex>
        </>
        : isMediumVersion ?
          <Box>
            <HStack spacing="180" w="100%" my="10" maxWidth={720} mx="auto" align="center" px="6">
              <Text w="100%" fontWeight="normal" fontSize="2xl" letterSpacing="tight" lineHeight="50px" align="justify" mt="100">
                A América é o continente localizado no hemisfério ocidental e que
                se estende, no sentido norte-sul, desde o oceano Ártico até o cabo
                Horn, ao longo de cerca de 15 mil quilômetros.
              </Text>
            </HStack>
            <HStack w="100%" spacing="180" my="10" maxWidth={720} mx="auto" px="6">
              <VStack>
                <Text fontSize="6xl" fontWeight="bold" h="70px" mt="75" color="yellow.400">
                  35
                </Text>
                <Text fontSize="2xl" fontWeight="bold">
                  países
                </Text>
              </VStack>
              <VStack>
                <Text fontSize="6xl" fontWeight="bold" h="70px" mt="75" color="yellow.400">
                  8
                </Text>
                <Text fontSize="2xl" fontWeight="bold">
                  línguas
                </Text>
              </VStack>
              <VStack>
                <Text fontSize="6xl" fontWeight="bold" h="70px" mt="75" color="yellow.400">
                  13
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
                  cidade="Nova Iorque"
                  pais="EUA"
                  foto="https://images.unsplash.com/photo-1445023086979-7244a12345a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                  avatar="/images/eua.png"
                />
                <Card
                  cidade="Miami"
                  pais="EUA"
                  foto="https://images.unsplash.com/photo-1589083130544-0d6a2926e519?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  avatar="/images/eua.png"
                />
                <Card
                  cidade="Los Angeles"
                  pais="EUA"
                  foto="https://images.unsplash.com/photo-1460881680858-30d872d5b530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                  avatar="/images/eua.png"
                />
                <Card
                  cidade="Las Vegas"
                  pais="EUA"
                  foto="https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80"
                  avatar="/images/eua.png"
                />
                <Card
                  cidade="Cancún"
                  pais="México"
                  foto="https://images.unsplash.com/photo-1552074284-5e88ef1aef18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  avatar="/images/mexico.png"
                />
                <Card
                  cidade="Orlando"
                  pais="EUA"
                  foto="https://images.unsplash.com/photo-1575089776834-8be34696ffb9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
                  avatar="/images/eua.png"
                />
                <Card
                  cidade="Toronto"
                  pais="Canadá"
                  foto="https://images.unsplash.com/photo-1526417501781-5e7e587b7686?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  avatar="/images/canada.png"
                />
                <Card
                  cidade="Vancouver"
                  pais="Canadá"
                  foto="https://images.unsplash.com/photo-1559511260-66a654ae982a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1392&q=80"
                  avatar="/images/canada.png"
                />
                <Card
                  cidade="São Francisco"
                  pais="EUA"
                  foto="https://images.unsplash.com/photo-1445368794737-0cf251429ca0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
                  avatar="/images/eua.png"
                />
                <Card
                  cidade="Honolulu"
                  pais="EUA"
                  foto="https://images.unsplash.com/photo-1573992554018-83e7853bd45f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80"
                  avatar="/images/eua.png"
                />
                <Card
                  cidade="Buenos Aires"
                  pais="Argentina"
                  foto="https://images.unsplash.com/photo-1528392175875-4ce3ab32663c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80"
                  avatar="/images/arg.png"
                />
                <Card
                  cidade="Lima"
                  pais="Perú"
                  foto="https://images.unsplash.com/photo-1577587230708-187fdbef4d91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                  avatar="/images/peru.png"
                />
                <Card
                  cidade="Rio de Janeiro"
                  pais="Brasil"
                  foto="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  avatar="/images/brasil.png"
                />
              </SimpleGrid>
            </Flex>
          </Box>

          : < VStack spacing="2" w="100%" my="10" mx="auto" px="6">
            <Text w="100%" fontWeight="normal" fontSize="2xl" letterSpacing="tight" lineHeight="50px" align="justify" mt="100">
              A América é o continente localizado no hemisfério ocidental e que
              se estende, no sentido norte-sul, desde o oceano Ártico até o cabo
              Horn, ao longo de cerca de 15 mil quilômetros.
            </Text>
            <VStack>
              <Text fontSize="6xl" fontWeight="bold" h="70px" mt="75" color="yellow.400">
                35
              </Text>
              <Text fontSize="2xl" fontWeight="bold">
                países
              </Text>
            </VStack>
            <VStack>
              <Text fontSize="6xl" fontWeight="bold" h="70px" mt="75" color="yellow.400">
                8
              </Text>
              <Text fontSize="2xl" fontWeight="bold">
                línguas
              </Text>
            </VStack>
            <VStack>
              <Text fontSize="6xl" fontWeight="bold" h="70px" mt="75" color="yellow.400">
                13
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
                  cidade="Nova Iorque"
                  pais="EUA"
                  foto="https://images.unsplash.com/photo-1445023086979-7244a12345a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                  avatar="/images/eua.png"
                />
                <Card
                  cidade="Miami"
                  pais="EUA"
                  foto="https://images.unsplash.com/photo-1589083130544-0d6a2926e519?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  avatar="/images/eua.png"
                />
                <Card
                  cidade="Los Angeles"
                  pais="EUA"
                  foto="https://images.unsplash.com/photo-1460881680858-30d872d5b530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                  avatar="/images/eua.png"
                />
                <Card
                  cidade="Las Vegas"
                  pais="EUA"
                  foto="https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80"
                  avatar="/images/eua.png"
                />
                <Card
                  cidade="Cancún"
                  pais="México"
                  foto="https://images.unsplash.com/photo-1552074284-5e88ef1aef18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  avatar="/images/mexico.png"
                />
                <Card
                  cidade="Orlando"
                  pais="EUA"
                  foto="https://images.unsplash.com/photo-1575089776834-8be34696ffb9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
                  avatar="/images/eua.png"
                />
                <Card
                  cidade="Toronto"
                  pais="Canadá"
                  foto="https://images.unsplash.com/photo-1526417501781-5e7e587b7686?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  avatar="/images/canada.png"
                />
                <Card
                  cidade="Vancouver"
                  pais="Canadá"
                  foto="https://images.unsplash.com/photo-1559511260-66a654ae982a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1392&q=80"
                  avatar="/images/canada.png"
                />
                <Card
                  cidade="São Francisco"
                  pais="EUA"
                  foto="https://images.unsplash.com/photo-1445368794737-0cf251429ca0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
                  avatar="/images/eua.png"
                />
                <Card
                  cidade="Honolulu"
                  pais="EUA"
                  foto="https://images.unsplash.com/photo-1573992554018-83e7853bd45f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80"
                  avatar="/images/eua.png"
                />
                <Card
                  cidade="Buenos Aires"
                  pais="Argentina"
                  foto="https://images.unsplash.com/photo-1528392175875-4ce3ab32663c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80"
                  avatar="/images/arg.png"
                />
                <Card
                  cidade="Lima"
                  pais="Perú"
                  foto="https://images.unsplash.com/photo-1577587230708-187fdbef4d91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                  avatar="/images/peru.png"
                />
                <Card
                  cidade="Rio de Janeiro"
                  pais="Brasil"
                  foto="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  avatar="/images/brasil.png"
                />
              </SimpleGrid>
            </Flex>
          </VStack>
      }
    </Flex >
  )
}