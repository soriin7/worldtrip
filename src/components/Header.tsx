import { Flex, Image } from '@chakra-ui/react'
import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronLeftIcon } from '@chakra-ui/icons'
import Head from 'next/head';


export function Header() {
  const { asPath } = useRouter()

  if (asPath !== '/') {
    return (
      <>
        <Head>
          <title>Posts | Ignews</title>
        </Head>
        <Flex
          w="100%"
          as="header"
          maxWidth={1480}
          h="20"
          mx="auto"
          mt="4"
          align="center"
          px="1"
        >
          <Link href="/" >
            <ChevronLeftIcon fontSize="3xl" _hover={{ "cursor": "pointer" }} />
          </Link>
          <Image m="auto" src="/images/Logoworld.svg" alt="Logo World Trip" />
        </Flex>
      </>
    );
  } {
    return (
      <>
        <Head>
          <title>Posts | Ignews</title>
        </Head>
        <Flex
          w="100%"
          as="header"
          maxWidth={1480}
          h="20"
          mx="auto"
          mt="4"
          align="center"
          px="1"
        >
          <Image m="auto" src="/images/Logoworld.svg" alt="Logo World Trip" />
        </Flex>
      </>
    );
  }
}