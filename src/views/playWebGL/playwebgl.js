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
import Unity, { UnityContent, UnityContext } from "react-unity-webgl";



const PlayWebGL = () => {
    
    const [isMinting, setIsMinting] = useState(false);
    const [imageSrc, setImageSrc] = useState("");
    const { active, account } = useWeb3React();
    const mounajiTestContract = useMounajiTestContract();
    const toast = useToast();

    const unityContent = new UnityContent(
      './Build/WebGL.json',
      './Build/UnityLoader.js'
    )
    unityContent.on("quitted", () => {
      console.log('Game quit')
    })
    unityContent.on("loaded", () => {
      console.log('Game loaded')
    })
    unityContent.on("progress", progression => {
      console.log('Game loading', progression)
    })
    unityContent.on("error", message => {
      console.log('Game errored', message)
    })
    unityContent.on("DemoUnityToReact", (params) => {
      console.log('DemoUnityToReact', params)
    })
         
    
    return (
        
    <Box
    maxW='fixed' borderWidth='1px' borderRadius='lg'
    // backgroundImage="'/images/fondoespacio.png'"
    image="./images.starway.png"
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
    <Stack marginTop={'20px'}>
      
    <h1>Play Starway from the web browser !</h1>
    </Stack>

    <Unity unityContent={unityContent} width="100%" height="100%" />  
      
    
       </Box>  
        
      
    );
  };






export default PlayWebGL;