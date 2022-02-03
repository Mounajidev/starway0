
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

const Whitepaper = () => {
    
    const [isMinting, setIsMinting] = useState(false);
    const [imageSrc, setImageSrc] = useState("");
    const { active, account } = useWeb3React();
    const mounajiTestContract = useMounajiTestContract();
    const toast = useToast();
    
  
  
    
    return (
      <Box>
        <h1>Whitepaper</h1>
      </Box>
    );
    
};




export default Whitepaper;