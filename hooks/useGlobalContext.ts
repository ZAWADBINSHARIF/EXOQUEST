import { GlobalContext } from '@/context/GlobalValueProvider';
import { useContext } from 'react';


function useGlobalContext() {

    const GlobalContextValues = useContext(GlobalContext);

    if (GlobalContextValues === null) {
        throw new Error("Wrap the root component using GlobalContextProvider");
    }

    return GlobalContextValues;
}

export default useGlobalContext;