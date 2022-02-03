import useMounajiTestContract from "../../hooks/useMounajiTestContract";
import {
  AspectRatio,
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

const Home = () => {
  const [isMinting, setIsMinting] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const { active, account } = useWeb3React();
  const mounajiTestContract = useMounajiTestContract();
  const toast = useToast();
  
  const getMounajiTestContractData = useCallback(async () => {
    if (mounajiTestContract) {
      const totalSupply = await mounajiTestContract.methods.totalSupply().call();
      const getBalance = await mounajiTestContract.methods.balanceOf(account).call();
      //   .deterministicPseudoRandomDNA(totalSupply, account)
      //   .call();
      // const image = await mounajiTestContract.methods.imageByDNA(dnaPreview).call();
      // setImageSrc(image);
    }
  }, [mounajiTestContract, account]);

  useEffect(() => {
    getMounajiTestContractData();
  }, [getMounajiTestContractData]);

  const mint = () => {
    setIsMinting(true);

mounajiTestContract.methods.mint(account, 1000000).send({


  from: account,
  value: 1e18

})
.on('transactionHash', (txHash) => {
  setIsMinting(false);
   toast({
     title: 'transaccion enviada',
     description: 'txHash',
     status: 'info'
   })

})
.on('receipt',() => {
  setIsMinting(false);
  toast({
    title: 'Transaccion confirmada !',
    description: 'Enjoy playing Starway !',
    status: 'success'

  })

})
.on('error', (error) => {
  setIsMinting(false);
  toast({
    title: 'Transaccion fallida',
    description: error.message,
    status: 'error',
  })

})
  }
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
        marginTop={'-100px'}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
         py={{ base: -920, md: -920 }}
        direction={{ base: "column-reverse", md: "row" }}
      >
  
        <Stack flex={4} spacing={{ base: 5, md: 10 } }>
          
          <Text color={"gray.500"} alignSelf={'center'} >
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

  export default Home;
    
//   <Box
//   maxW='fixed' borderWidth='1px' borderRadius='lg'
  
//   backgroundcolor='blue'
  
//   pos={"absolute"}
//   align={"center"}
//   justify={"center"}
//   backgroundRepeat={"no-repeat"}
//   backgroundSize={"cover"}
//   margin={"0"}
//   top={"55px" }
//   left={"0"}
//   w={"100%"}
//   h={"100%"}
// >
// <Image 
//   maxW='700px' borderWidth='1px' borderRadius='lg' overflow='scroll' position='top'
//   marginTop={"-200px"}
//   src={"../images/starway.png"}
  
  
  
  
// />

// <Stack
      
//       align={"center"}
//       spacing={{ base: 8, md: 10 }}
//        py={{ base: -20, md: -20 }}
//       direction={{ base: "column-reverse", md: "row" }}
      
//     >
      
        
      
   
//       <Stack flex={1} spacing={{ base: 5, md: 10 }} marginTop={'250px'}>
        
      
//         <AspectRatio maxW='500px' ratio={1}   >
//   <iframe
//     title='naruto'
//     pos={'absolute'}
//     width={'100px'}
//     src='https://www.youtube.com/embed/ES6SQhlEXfI'
//     allowFullScreen
    
//   />
// </AspectRatio>

       
//         <Text color={"gray.500"}>
//           Star token is a cryto-currency that is used for participate in Rank modes on Starway 
//         </Text>
//         <Text color={"green.500"}>
//           Get your Stars and start ean for playing now !
//         </Text>
//         <Stack
//           spacing={{ base: 4, sm: 6 }}
//           direction={{ base: "column", sm: "row" }}
//         >
//           <Button
//             rounded={"full"}
//             size={"lg"}
//             fontWeight={"normal"}
//             px={6}
//             colorScheme={"green"}
//             bg={"green.400"}
//             _hover={{ bg: "green.500" }}
//             disabled={!mounajiTestContract}
//             onClick={mint}
//             isLoading= {isMinting}
//           >
//             Get your Star Token !
//           </Button>
//           <Link to="/swaptokens">
//             <Button rounded={"full"} size={"lg"} fontWeight={"normal"} px={6}>
//               SwapTokens
//             </Button>
//           </Link>
//         </Stack>
//       </Stack>
//       <Flex
//         flex={1}
//         direction="column"
//         justify={"center"}
//         align={"center"}
//         position={"relative"}
//         w={"full"}
//       >
//         <Image 
//         src={active ? imageSrc : "../../images/starway.png"} />
//         {active ? (
//           <>
            
//           </>
//         ) : (
//           <Badge mt={2}>Wallet desconectado</Badge>
//         )}
//       </Flex>
//     </Stack>
//     </Box>  
      
    











// import { useWeb3React } from '@web3-react/core';
// import { useCallback, useEffect, useState } from 'react';
// import useMounajiTestContract from '../../hooks/useMounajiTestContract';

// const Home = () => {
//   const { active }  = useWeb3React(); 
//   const [totalSupply, setTotalSupply] = useState();

//   const mounajiTestContract = useMounajiTestContract();

//   const getTotalSupply = useCallback(async () => {
//     if(mounajiTestContract){
//       const result = await mounajiTestContract.methods.totalSupply().call();
//       setTotalSupply(result);
//     }

//   }, [mounajiTestContract])

//   useEffect (() => {
//       getTotalSupply();
//   }, [getTotalSupply]);

//   if (!active) return "Connect your wallet"

//   return (
//     <>
//       <p>Max supply:{totalSupply} </p>
//     </>
//   );
// };

// export default Home;
