import useLocalStorage from '@/hooks/useLocalStorage';
import React, { createContext, useEffect, useState } from 'react';


export interface GlobalValues {
    username: string,
    setUsername: React.Dispatch<React.SetStateAction<string>>;
    selectedCharacter: string;
    setSelectedCharacter: React.Dispatch<React.SetStateAction<string>>;
    fuel: number,
    setFuel: React.Dispatch<React.SetStateAction<number>>;
    point: number,
    setPoint: React.Dispatch<React.SetStateAction<number>>;
}


export const GlobalContext = createContext<GlobalValues | null>(null);


const GlobalValueProvider = ({ children }: { children: React.ReactNode; }) => {

    const { setItem, getItem } = useLocalStorage();

    const [username, setUsername] = useState("");
    const [selectedCharacter, setSelectedCharacter] = useState("");
    const [fuel, setFuel] = useState<number>(-1);
    const [point, setPoint] = useState<number>(0);


    useEffect(() => {
        if (fuel >= 0) {
            setItem("fuel", fuel.toString());
        }
    }, [fuel]);

    useEffect(() => {
        if (point > 0) {
            setItem('point', point.toString());
        }
    }, [point]);

    useEffect(() => {

        if (!username || !selectedCharacter)
            return;

        setItem('username', username);
        setItem('selectedCharacter', selectedCharacter);

    }, [username, selectedCharacter]);

    useEffect(() => {

        const setValuesFromLocalStorage = async () => {
            const name = await getItem('username');
            const character = await getItem('selectedCharacter');
            const fuel_data = await getItem("fuel");
            const point = await getItem("point");

            if (name && character) {
                setUsername(name);
                setSelectedCharacter(character);
            }

            if (fuel_data) {
                setFuel(parseInt(fuel_data));
            } else {
                console.log("ok");
                setFuel(3);
            }
            if (point) {
                setPoint(parseInt(point));
            }
        };

        setValuesFromLocalStorage();

    }, []);

    return (
        <GlobalContext.Provider value={{
            username,
            setUsername,
            selectedCharacter,
            setSelectedCharacter,
            setFuel,
            fuel,
            point,
            setPoint
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalValueProvider;