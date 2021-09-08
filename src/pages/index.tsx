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
                <Image width="100%" loading='lazy' h='450px' objectFit="cover" filter="brightness(75%)" position="absolute" src="https://images.unsplash.com/photo-1490642914619-7955a3fd483c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1370&q=80" alt="Europa" />
                <Heading position="absolute" size="3xl" top="190px" align="center" w="100%" color="white">
                  Europa
                </Heading>
                <Heading position="absolute" size="lg" top="260px" align="center" w="100%" color="gray.50">
                  O continente mais antigo.
                </Heading>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/america">
                <Image w="100%" h='450px' objectFit="cover" filter="brightness(75%)" position="relative" src="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="América" />
                <Heading position="absolute" size="3xl" top="190px" align="center" w="100%" color="white">
                  América
                </Heading>
                <Heading position="absolute" size="lg" top="260px" align="center" w="100%" color="gray.50">
                  O novo mundo.
                </Heading>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/oceania">
                <Image w="100%" h='450px' objectFit="cover" filter="brightness(75%)" position="relative" src="https://images.unsplash.com/photo-1589330273594-fade1ee91647?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80" alt="Oceânia" />
                <Heading position="absolute" size="3xl" top="190px" align="center" w="100%" color="white">
                  Oceânia
                </Heading>
                <Heading position="absolute" size="lg" top="260px" align="center" w="100%" color="gray.50">
                  O maior arquipélago.
                </Heading>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/asia">
                <Image w="100%" h='450px' objectFit="cover" filter="brightness(75%)" position="relative" src="https://images.unsplash.com/photo-1621415814107-4595c7b2b4fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1454&q=80" alt="Asia" />
                <Heading position="absolute" size="3xl" top="190px" align="center" w="100%" color="white">
                  Ásia
                </Heading>
                <Heading position="absolute" size="lg" top="260px" align="center" w="100%" color="gray.50">
                  O maior continente.
                </Heading>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/africa">
                <Image w="100%" h='450px' objectFit="cover" filter="brightness(75%)" position="relative" src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" alt="Africa" />
                <Heading position="absolute" size="3xl" top="190px" align="center" w="100%" color="white">
                  África
                </Heading>
                <Heading position="absolute" size="lg" top="260px" align="center" w="100%" color="gray.50">
                  A maior diversidade cultural.
                </Heading>
              </Link>
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
                <Image width="100%" loading='lazy' h='450px' objectFit="cover" filter="brightness(75%)" position="absolute" src="https://images.unsplash.com/photo-1490642914619-7955a3fd483c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1370&q=80" alt="Europa" />
                <Heading position="absolute" size="3xl" top="190px" align="center" w="100%" color="white">
                  Europa
                </Heading>
                <Heading position="absolute" size="lg" top="260px" align="center" w="100%" color="gray.50">
                  O continente mais antigo.
                </Heading>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/america">
                <Image w="100%" h='450px' objectFit="cover" filter="brightness(75%)" position="relative" src="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="América" />
                <Heading position="absolute" size="3xl" top="190px" align="center" w="100%" color="white">
                  América
                </Heading>
                <Heading position="absolute" size="lg" top="260px" align="center" w="100%" color="gray.50">
                  O novo mundo.
                </Heading>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/oceania">
                <Image w="100%" h='450px' objectFit="cover" filter="brightness(75%)" position="relative" src="https://images.unsplash.com/photo-1589330273594-fade1ee91647?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80" alt="Oceânia" />
                <Heading position="absolute" size="3xl" top="190px" align="center" w="100%" color="white">
                  Oceânia
                </Heading>
                <Heading position="absolute" size="lg" top="260px" align="center" w="100%" color="gray.50">
                  O maior arquipélago.
                </Heading>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/asia">
                <Image w="100%" h='450px' objectFit="cover" filter="brightness(75%)" position="relative" src="https://images.unsplash.com/photo-1621415814107-4595c7b2b4fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1454&q=80" alt="Asia" />
                <Heading position="absolute" size="3xl" top="190px" align="center" w="100%" color="white">
                  Ásia
                </Heading>
                <Heading position="absolute" size="lg" top="260px" align="center" w="100%" color="gray.50">
                  O maior continente.
                </Heading>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/africa">
                <Image w="100%" h='450px' objectFit="cover" filter="brightness(75%)" position="relative" src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" alt="Africa" />
                <Heading position="absolute" size="3xl" top="190px" align="center" w="100%" color="white">
                  África
                </Heading>
                <Heading position="absolute" size="lg" top="260px" align="center" w="100%" color="gray.50">
                  A maior diversidade cultural.
                </Heading>
              </Link>
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
                <Image width="100%" loading='lazy' h='450px' objectFit="cover" filter="brightness(75%)" position="absolute" src="https://images.unsplash.com/photo-1490642914619-7955a3fd483c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1370&q=80" alt="Europa" />
                <Heading position="absolute" size="3xl" top="190px" align="center" w="100%" color="white">
                  Europa
                </Heading>
                <Heading position="absolute" size="lg" top="260px" align="center" w="100%" color="gray.50">
                  O continente mais antigo.
                </Heading>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/america">
                <Image w="100%" h='450px' objectFit="cover" filter="brightness(75%)" position="relative" src="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="América" />
                <Heading position="absolute" size="3xl" top="190px" align="center" w="100%" color="white">
                  América
                </Heading>
                <Heading position="absolute" size="lg" top="260px" align="center" w="100%" color="gray.50">
                  O novo mundo.
                </Heading>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/oceania">
                <Image w="100%" h='450px' objectFit="cover" filter="brightness(75%)" position="relative" src="https://images.unsplash.com/photo-1589330273594-fade1ee91647?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80" alt="Oceânia" />
                <Heading position="absolute" size="3xl" top="190px" align="center" w="100%" color="white">
                  Oceânia
                </Heading>
                <Heading position="absolute" size="lg" top="260px" align="center" w="100%" color="gray.50">
                  O maior arquipélago.
                </Heading>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/asia">
                <Image w="100%" h='450px' objectFit="cover" filter="brightness(75%)" position="relative" src="https://images.unsplash.com/photo-1621415814107-4595c7b2b4fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1454&q=80" alt="Asia" />
                <Heading position="absolute" size="3xl" top="190px" align="center" w="100%" color="white">
                  Ásia
                </Heading>
                <Heading position="absolute" size="lg" top="260px" align="center" w="100%" color="gray.50">
                  O maior continente.
                </Heading>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/africa">
                <Image w="100%" h='450px' objectFit="cover" filter="brightness(75%)" position="relative" src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" alt="Africa" />
                <Heading position="absolute" size="3xl" top="190px" align="center" w="100%" color="white">
                  África
                </Heading>
                <Heading position="absolute" size="lg" top="260px" align="center" w="100%" color="gray.50">
                  A maior diversidade cultural.
                </Heading>
              </Link>
            </SwiperSlide>
          </Swiper>
        </Box>
      </Flex>
    )
  }

}
