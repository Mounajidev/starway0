import { useMemo } from 'react';
import { useWeb3React } from '@web3-react/core';
import MounajiTestArtifact from '../../config/web3/artifacts/MounajiTestContract';

const { address, abi } = MounajiTestArtifact;

const    useMounajiTestContract = () => {
    const { active, library, chainId } = useWeb3React();

    const mounajiTestContract = useMemo (
        () => 
            {
               if (active) 
                return new library.eth.Contract(abi, address[chainId])
            },
        [active, chainId, library?.eth?.Contract]
    );

    return mounajiTestContract;
};

export default useMounajiTestContract;