import { useWeb3React } from '@web3-react/core';
import React from 'react';
import { useCallback, useEffect, useState } from "react"; 
import PunkCard from '../../components/punk-card';
import Loading from '../../components/loading';
import RequestAccess from '../../components/request-access';
import useMounajiTestSwap from '../../hooks/useMounajiTestSwap';
import useMounajiTestContract from "../../hooks/useMounajiTestContract";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
    Stack,
    Flex,
    Heading,
    Text,
    Button,
    Image,
    Badge,
    useToast
  } from "@chakra-ui/react";
  import { Link } from "react-router-dom";
    

const SwapTokens = () => {

  const { active, account } = useWeb3React();
  const [isBuying, setIsBuying] = useState(false); 
    const  mounajiTestSwap  = useMounajiTestSwap();
    const mounajiTestContract = useMounajiTestContract();
    const [totalSupply, setTotalSupply] = useState();
    const [getBalance, setBalance] = useState();
    const [inputValue, setInputValue] = React.useState();

    const handleChange = (inputValue) => setInputValue(inputValue)
console.log (inputValue)
    
    
    // state = {tokenAmount};

    // const updateTokenAmount = (event) =>{
      

    //   setInputValue( event.target.value);
        
    // };
     


    // this.handleChange = this.handleChange.bind(this);
    
    const toast = useToast();
    
    

    const getMounajiTestContractData = useCallback(async () => {
        if (mounajiTestContract) {
          const totalSupply = await mounajiTestContract.methods.totalSupply().call();
          setTotalSupply(totalSupply/ 1e18);

          const getBalance = await mounajiTestContract.methods.balanceOf(account).call();
          setBalance(getBalance/ 1e18);
          
        }
      }, [mounajiTestContract, account]);

      
      useEffect(() => {
        getMounajiTestContractData();
      }, [getMounajiTestContractData]);


      const buy = () => {
        setIsBuying(true);
              
          mounajiTestSwap.methods
          .buyTokens()
          .send({
            from: account,
            value: (inputValue * 1e18 ) / 100,

          })
          .on('transactionHash', (txHash) => {
            toast({
              tittle:'Transaccion enviada',
              description: txHash,
              status: 'info'
            })
            
          })
          .on('receipt', () => {
            setIsBuying(false);
            toast({
              tittle:'Purchase succefull !',
              description: 'Enjoy playing Starway!',
              status: 'success'
            })
             

          })
          .on('error', (error) => {
            setIsBuying(false);
            toast({
              tittle:'Ops, Transaccion failed',
              description: error.message,
              status: 'error'
            })

          })

        //  inputValue(setInputValue);

    };

    // console.log( JSON.stringify(mounajiTestSwap) )
       
    if (!active) return <RequestAccess />;
    
    return (
        
            <Stack
              align={"center"}
              spacing={{ base: 8, md: 10 }}
              py={{ base: 20, md: 0 }}
              
            >
              <Stack>
              <Text
                    as={"span"}
                    position={"relative"}
                     fontSize={'46px'}
                    _after={{
                      content: "''",
                      width: "full",
                      height: "30%",
                      position: "absolute",
                      bottom: 1,
                      left: 0,
                      bg: "green.400",
                      zIndex: -1,
                    }}
                  >
                    Token Exchange
                  </Text>
                
              </Stack>

                 

              <Stack flex={2} spacing={{ base: 10, md: 5 }} align={'center'}>
                <Heading
                marginTop={'-10'}
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                  align='center'


                >
                  
                  <Text as={"span"} color={"blue.400"}>
                    Buy and Sell Star Tokens !
                  </Text>
                  
                </Heading>
                <Text color={"gray.500"}>
                  Total Supply of Start Tokens: {totalSupply} 
                </Text>
                <Text color={"gray.500"}>
                  Stars Tokens you own : {getBalance} 
                </Text>
                <Text color={"green.900"}>
                  Get your Stars and start ean for playing now !
                </Text>
                <Stack
                  spacing={{ base: 4, sm: 6 }}
                  
                >
                          <NumberInput value={inputValue} type='number' allowMouseWheel defaultValue={0} min={0}
                          onChange= {handleChange}
                          
                           >
      <NumberInputField />
     
    </NumberInput>
                  <Button
                    rounded={"full"}
                    size={"lg"}
                    fontWeight={"normal"}
                    px={20}
                    colorScheme={"green"}
                    bg={"green.400"}
                    _hover={{ bg: "green.500" }}
                    disabled={!mounajiTestContract}
                    onClick={buy}
                    isLoading= {isBuying}

                  >
                    Buy Stars Tokens
                  </Button>
                  <Text color={"gray.500"} alignSelf={'center'} >
            Star token is a cryto-currency that is used for participate in Rank modes on Starway 
  
          </Text>
          
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
                
                {active ? (
                  <>
                    <Flex mt={2}>
                      <Badge>
                        Next ID:
                        <Badge ml={1} colorScheme="green">
                          1
                        </Badge>
                      </Badge>
                    
                       
                     
                    </Flex>
                    <Button
                      onClick={getMounajiTestContractData}
                      mt={4}
                      size="xs"
                      colorScheme="green"
                    >
                      Actualizar
                    </Button>
                  </>
                ) : (
                  <Badge mt={2}>Wallet desconectado</Badge>
                )}
              </Flex>
            </Stack>
          );
        };
        
        
        
        <p>Get your Start Tokens !</p>
        
        
    


export default SwapTokens;