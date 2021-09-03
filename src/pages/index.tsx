import { Image, Divider, Text, Heading, Box, Link, Flex, useBreakpointValue } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation, Pagination, Mousewheel, Keyboard
} from 'swiper';

import "swiper/css";

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);


export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    xl: true
  });
  const isMediumVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  if (isWideVersion) {
    return (
      <Flex direction="column">

        <Header />
        <Image w="100%" mt="4" src="/images/Banner.svg" alt="Banner World Trip" />

        <Image w="80%" m="auto" mt="100" src="/images/TravelTypes.svg" alt="Travel Types" />
        <Divider m="auto" h="75" w="250px" />
        <Heading m="auto" mt="75" w="100%" align="center" >Vamos nessa?</Heading>
        <Heading m="auto" mt="5" w="100%" align="center" >Então escolha seu continente</Heading>
        <Box
          maxWidth={1480}
          mx="auto"
          mt="10"
          mb="20"
        >
          <Swiper
            style={{ '--swiper-navigation-color': '#FFBA08', '--swiper-pagination-color': '#FFBA08' }}
            cssMode={true} navigation={true} pagination={true} mousewheel={true} keyboard={true} autoHeight={true}
          >
            <SwiperSlide>
              <Link href="/europa">
                <Image width="100%" loading='lazy' h='450px' objectFit="cover" filter="brightness(75%)" position="absolute" src="/images/london.jpg" alt="Europa" />
                <Heading position="absolute" size="3xl" top="190px" align="center" w="100%" color="white">
                  Europa
                </Heading>
                <Heading position="absolute" size="lg" top="260px" align="center" w="100%" color="gray.50">
                  O continente mais antigo.
                </Heading>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Image w="100%" h='450px' objectFit="cover" filter="brightness(75%)" position="relative" src="/images/sul.jpg" alt="América do Sul" />
              <Heading position="absolute" size="3xl" top="190px" align="center" w="100%" color="white">
                América
              </Heading>
              <Heading position="absolute" size="lg" top="260px" align="center" w="100%" color="gray.50">
                O novo mundo.
              </Heading>
            </SwiperSlide>
            <SwiperSlide>
              <Image w="100%" h='450px' objectFit="cover" filter="brightness(75%)" position="relative" src="/images/oceania.jpg" alt="Oceânia" />
              <Heading position="absolute" size="3xl" top="190px" align="center" w="100%" color="white">
                Oceânia
              </Heading>
              <Heading position="absolute" size="lg" top="260px" align="center" w="100%" color="gray.50">
                O maior arquipélago.
              </Heading>
            </SwiperSlide>
            <SwiperSlide>
              <Image w="100%" h='450px' objectFit="cover" filter="brightness(75%)" position="relative" src="/images/asia.jpg" alt="Asia" />
              <Heading position="absolute" size="3xl" top="190px" align="center" w="100%" color="white">
                Ásia
              </Heading>
              <Heading position="absolute" size="lg" top="260px" align="center" w="100%" color="gray.50">
                O maior continente.
              </Heading>
            </SwiperSlide>
            <SwiperSlide>
              <Image w="100%" h='450px' objectFit="cover" filter="brightness(75%)" position="relative" src="/images/africa.jpg" alt="Africa" />
              <Heading position="absolute" size="3xl" top="190px" align="center" w="100%" color="white">
                África
              </Heading>
              <Heading position="absolute" size="lg" top="260px" align="center" w="100%" color="gray.50">
                A maior diversidade cultural.
              </Heading>
            </SwiperSlide>
          </Swiper>
        </Box>
      </Flex>
    )
  } if (isMediumVersion) {
    return (
      <Flex direction="column">

        <Header />
        <Image w="100%" mt="4" src="/images/Banner.svg" alt="Banner World Trip" />

        <Image w="80%" m="auto" mt="100" src="/images/TravelTypes.svg" alt="Travel Types" />
        <Divider m="auto" h="75" w="250px" />
        <Heading m="auto" mt="75" w="100%" align="center" >Vamos nessa?</Heading>
        <Heading m="auto" mt="5" w="100%" align="center" >Então escolha seu continente</Heading>
        <Box
          maxWidth={720}
          mx="auto"
          mt="10"
          mb="20"
        >
          <Swiper
            style={{ '--swiper-navigation-color': '#FFBA08', '--swiper-pagination-color': '#FFBA08' }}
            cssMode={true} navigation={true} pagination={true} mousewheel={true} keyboard={true} autoHeight={true}
          >
            <SwiperSlide>
              <Link href="/europa">
                <Image width="100%" loading='lazy' h='450px' objectFit="cover" filter="brightness(75%)" position="absolute" src="/images/london.jpg" alt="Europa" />
                <Heading position="absolute" size="3xl" top="190px" align="center" w="100%" color="white">
                  Europa
                </Heading>
                <Heading position="absolute" size="lg" top="260px" align="center" w="100%" color="gray.50">
                  O continente mais antigo.
                </Heading>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Image w="100%" h='450px' objectFit="cover" filter="brightness(75%)" position="relative" src="/images/sul.jpg" alt="América do Sul" />
              <Heading position="absolute" size="3xl" top="190px" align="center" w="100%" color="white">
                América
              </Heading>
              <Heading position="absolute" size="lg" top="260px" align="center" w="100%" color="gray.50">
                O novo mundo.
              </Heading>
            </SwiperSlide>
            <SwiperSlide>
              <Image w="100%" h='450px' objectFit="cover" filter="brightness(75%)" position="relative" src="/images/oceania.jpg" alt="Oceânia" />
              <Heading position="absolute" size="3xl" top="190px" align="center" w="100%" color="white">
                Oceânia
              </Heading>
              <Heading position="absolute" size="lg" top="260px" align="center" w="100%" color="gray.50">
                O maior arquipélago.
              </Heading>
            </SwiperSlide>
            <SwiperSlide>
              <Image w="100%" h='450px' objectFit="cover" filter="brightness(75%)" position="relative" src="/images/asia.jpg" alt="Asia" />
              <Heading position="absolute" size="3xl" top="190px" align="center" w="100%" color="white">
                Ásia
              </Heading>
              <Heading position="absolute" size="lg" top="260px" align="center" w="100%" color="gray.50">
                O maior continente.
              </Heading>
            </SwiperSlide>
            <SwiperSlide>
              <Image w="100%" h='450px' objectFit="cover" filter="brightness(75%)" position="relative" src="/images/africa.jpg" alt="Africa" />
              <Heading position="absolute" size="3xl" top="190px" align="center" w="100%" color="white">
                África
              </Heading>
              <Heading position="absolute" size="lg" top="260px" align="center" w="100%" color="gray.50">
                A maior diversidade cultural.
              </Heading>
            </SwiperSlide>
          </Swiper>
        </Box>
      </Flex>
    )
  } {
    return (
      <Flex direction="column">

        <Header />
        <Image w="100%" mt="4" src="/images/BannerMobile.svg" alt="Banner World Trip" />

        <Image w="80%" m="auto" mt="100" src="/images/TravelTypesMobile.svg" alt="Travel Types" />
        <Divider m="auto" h="75" w="250px" />
        <Heading m="auto" mt="75" w="100%" align="center" >Vamos nessa?</Heading>
        <Heading m="auto" mt="5" w="100%" align="center" >Então escolha seu continente</Heading>
        <Box
          maxWidth={320}
          mx="auto"
          mt="10"
          mb="20"
        >
          <Swiper
            style={{ '--swiper-navigation-color': '#FFBA08', '--swiper-pagination-color': '#FFBA08' }}
            cssMode={true} navigation={true} pagination={true} mousewheel={true} keyboard={true} autoHeight={true}
          >
            <SwiperSlide>
              <Link href="/europa">
                <Image width="100%" loading='lazy' h='450px' objectFit="cover" filter="brightness(75%)" position="absolute" src="/images/london.jpg" alt="Europa" />
                <Heading position="absolute" size="3xl" top="190px" align="center" w="100%" color="white">
                  Europa
                </Heading>
                <Heading position="absolute" size="lg" top="260px" align="center" w="100%" color="gray.50">
                  O continente mais antigo.
                </Heading>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Image w="100%" h='450px' objectFit="cover" filter="brightness(75%)" position="relative" src="/images/sul.jpg" alt="América do Sul" />
              <Heading position="absolute" size="3xl" top="190px" align="center" w="100%" color="white">
                América
              </Heading>
              <Heading position="absolute" size="lg" top="260px" align="center" w="100%" color="gray.50">
                O novo mundo.
              </Heading>
            </SwiperSlide>
            <SwiperSlide>
              <Image w="100%" h='450px' objectFit="cover" filter="brightness(75%)" position="relative" src="/images/oceania.jpg" alt="Oceânia" />
              <Heading position="absolute" size="3xl" top="190px" align="center" w="100%" color="white">
                Oceânia
              </Heading>
              <Heading position="absolute" size="lg" top="260px" align="center" w="100%" color="gray.50">
                O maior arquipélago.
              </Heading>
            </SwiperSlide>
            <SwiperSlide>
              <Image w="100%" h='450px' objectFit="cover" filter="brightness(75%)" position="relative" src="/images/asia.jpg" alt="Asia" />
              <Heading position="absolute" size="3xl" top="190px" align="center" w="100%" color="white">
                Ásia
              </Heading>
              <Heading position="absolute" size="lg" top="260px" align="center" w="100%" color="gray.50">
                O maior continente.
              </Heading>
            </SwiperSlide>
            <SwiperSlide>
              <Image w="100%" h='450px' objectFit="cover" filter="brightness(75%)" position="relative" src="/images/africa.jpg" alt="Africa" />
              <Heading position="absolute" size="3xl" top="190px" align="center" w="100%" color="white">
                África
              </Heading>
              <Heading position="absolute" size="lg" top="260px" align="center" w="100%" color="gray.50">
                A maior diversidade cultural.
              </Heading>
            </SwiperSlide>
          </Swiper>
        </Box>
      </Flex>
    )
  }

}
