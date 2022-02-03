import { useMemo } from 'react';
import { useWeb3React } from '@web3-react/core';
import MounajiTestSwapArtifact from '../../config/web3/artifacts/MounajiTestSwapContract';

const { address, abi } = MounajiTestSwapArtifact;

const    useMounajiTestSwap = () => {
    const { active, library, chainId } = useWeb3React();

    const mounajiTestSwap = useMemo (
        () => 
            {
               if (active) 
                return new library.eth.Contract(abi, address[chainId])
            },
        [active, chainId, library?.eth?.Contract]
    );

    return mounajiTestSwap;
};

export default useMounajiTestSwap;