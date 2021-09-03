import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "900": '#181B23',
      "800": '#1F2029',
      "700": '#353646',
      "600": '#4B4D63',
      "500": '#616480',
      "400": '#797D9A',
      "300": '#9699B0',
      "200": '#B3B5C6',
      "100": '#D1D2DC',
      "50": '#EEEEF2'
    }
  },
  components: {
    Divider: {
      sizes: {
        xl: {
          h: "56px",
          fontSize: "lg",
          px: "32px",
        },
        sm: {
          w: "10%"
        },
      },
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.600'
      }
    }
  }
})