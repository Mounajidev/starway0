import useMounajiTestContract from "../../hooks/useMounajiTestContract";
import {
  Stack,
  Flex,
  Heading,
  Text,
  Box,
  Button,
  Image,
  Badge,
  useToast
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import { useCallback, useEffect, useState } from "react";

const Ecosystem = () => {
  const [isMinting, setIsMinting] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const { active, account } = useWeb3React();
  const mounajiTestContract = useMounajiTestContract();
  const toast = useToast();
  



  
  return (

  <Box
  maxW='fixed' borderWidth='1px' borderRadius='lg'
  zIndex={'-5'}
  backgroundImage="'/images/fondoespacio.png'"
  pos={"absolute"}
  align={"center"}
  justify={"center"}
  backgroundRepeat={"no-repeat"}
  backgroundSize={"cover"}
  margin={"0"}
  top={"55px" }
  left={"0"}
  w={"100%"}
  h={"100%"}
>
<Stack
align={'column'}>

<Image 
  maxW='700px' borderWidth='1px' borderRadius='lg'
  alignSelf={'center'}
  marginTop={'-150px'}
  zIndex={'-5'}
  
  src={"/images/starway.png"}
  />
</Stack>

  
  
  


  
<Stack
      
      align={"center"}
      spacing={{ base: 8, md: 10 }}
       py={{ base: -920, md: -920 }}
      direction={{ base: "column-reverse", md: "row" }}
    >

      <Stack flex={1} spacing={{ base: 5, md: 10 }}>
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
        >
        
        </Heading>
        <Text color={"gray.500"}>
          Star token is a cryto-currency that is used for participate in Rank modes on Starway 

        </Text>
        <Text color={"green.500"}>
          Get your Stars and start ean for playing now !
        </Text>
        <Stack
          spacing={{ base: 4, sm: 6 }}
          direction={{ base: "column", sm: "row" }}
        >
          <Button
            rounded={"full"}
            size={"lg"}
            fontWeight={"normal"}
            px={6}
            colorScheme={"green"}
            bg={"green.400"}
            _hover={{ bg: "green.500" }}
            disabled={!mounajiTestContract}
            
          >
            Get your Star Token !
          </Button>
          <Link to="/swaptokens">
            <Button rounded={"full"} size={"lg"} fontWeight={"normal"} px={6}>
              SwapTokens
            </Button>
          </Link>
        </Stack>
      </Stack>
      <Flex
        flex={1}
        direction="column"
        justify={"center"}
        align={"center"}
        position={"relative"}
        w={"full"}
      >
        <Image 
        src={active ? imageSrc : "../../images/starway.png"} />
        {active ? (
          <>
            
          </>
        ) : (
          <Badge mt={2}>Wallet desconectado</Badge>
        )}
      </Flex>
    </Stack>
    </Box>  
      
    
  );
};

export default Ecosystem;









