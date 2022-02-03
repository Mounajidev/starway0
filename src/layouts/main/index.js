import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NavLink from "./nav-link";
import Footer from "./footer";
import WalletData from "./wallet-data";

const Links = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "SwapTokens",
    to: "/swaptokens",
  },
  {
    name: "Ecosystem",
    to: "/ecosystem",
  },
  {
    name: "Roadmap",
    to: "/roadmap",
      },
  
  {
    name: "Whitepaper",
    to: "/whitepaper",
  },


  {
    name: "PlayWebGL",
    to: "/playwebgl",
  },

];

const MainLayout = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex minH="100vh" direction="column">
      <Box
        mx="auto"
        maxW={"7xl"}
        width="100%"
        bg={useColorModeValue("white", "gray.800")}
        px={4}
      >
         
        <Flex
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}


          py={{ base: 0 }}
          px={{ base: 0 }}

          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("blue.200", "blue.900")}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <IconButton
            size={"sm"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />


          <HStack spacing={8} alignItems={"center"}>
            <Flex alignItems="center">
              <Image src="./images/StarWayForWeb.png" width="150px" />
              
            </Flex>
</HStack>
         
          <HStack spacing={0} alignItems={"left"} >

            
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map(({ name, to }) => (
                <NavLink key={name} to={to}>
                  {name}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <WalletData />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}  >
            <Stack as={"nav"} spacing={4}>
              {Links.map(({ name, to }) => (
                <NavLink key={name} to={to}>
                  {name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      <Box mx="auto" flex={1} p={4} maxW={"7xl"} width="100%">
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};

export default MainLayout;
