import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import Checkbox from 'expo-checkbox';
import axios from 'axios';
import Papa from 'papaparse';

const kepler = () => {

    const [data, setData] = useState([]);

    const parseCSV = (csv: string) => {
        return new Promise((resolve, reject) => {
            Papa.parse(csv, {
                header: true,
                complete: (results) => {
                    resolve(results.data);
                },
                error: (error) => {
                    reject(error);
                }
            });
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=cumulative&where=koi_prad<2 and koi_teq>180 and koi_teq<303 and koi_disposition like 'CANDIDATE'`);

                parseCSV(response.data)
                    .then(data => {
                        // console.log(data);
                        setData(data);
                    })
                    .catch(error => {
                        console.error(error);
                    });

            } catch (error) {
                console.log(error);
            }
        };

        fetchData(); // Call fetchData directly inside useEffect
    }, []);

    return (
        <View
            className='bg-black flex-1'
        >
            <View
                className='flex-1 flex-row'
            >

                <View className='flex-1 '>

                    {/* <ScrollView>

                        <View className='flex-row justify-around py-3 px-2 bg-red-700 border-2 border-white'>
                            // <View className='min-w-10'><Text className='text-white text-xl font-[default]'>KOI Name</Text></View>
                            <View className='min-w-10'><Text className='text-white text-xl font-[default]'>Orbital Period [Days]</Text></View>
                            <View className='min-w-10'><Text className='text-white text-xl font-[default]'>Transit Duration [hrs]</Text></View>
                            <View className='min-w-10'><Text className='text-white text-xl font-[default]'>Equilibrium Temperature [k]</Text></View>
                            <View className='min-w-10'><Text className='text-white text-xl font-[default]'>Stellar Radius [Solar radii]</Text></View>
                        </View>


                        {data.map((item, index) => {
                            console.log(item);
                            return (
                                <View key={index} className='flex-row justify-around py-3 px-2 bg-red-700 border-2 border-white'>
                                    <View className='min-w-10'><Text className='text-white text-lg font-[default]'>{item?.kepoi_name}</Text></View>
                                    <View className='min-w-10'><Text className='text-white text-lg font-[default]'>{item?.koi_period}</Text></View>
                                    <View className='min-w-10'><Text className='text-white text-lg font-[default]'>{item?.koi_duration}</Text></View>
                                    <View className='min-w-10'><Text className='text-white text-lg font-[default]'>{item?.koi_teq}</Text></View>
                                    <View className='min-w-10'><Text className='text-white text-lg font-[default]'>{item?.koi_srad}</Text></View>
                                </View>
                            );
                        })}

                    </ScrollView> */}

                    <ScrollView>

                        <View style={styles.table}>
                            <View style={styles.row}>
                                <Text style={styles.cell}>KOI Name</Text>
                                <Text style={styles.cell}>Orbital Period [Days]</Text>
                                <Text style={styles.cell}>Transit Duration [hrs]</Text>
                                <Text style={styles.cell}>Equilibrium Temperature [k]</Text>
                                <Text style={styles.cell}>Stellar Radius [Solar radii]</Text>
                            </View>

                            {data.map((item, index) => {

                                return (
                                    <View style={styles.row} key={index}>
                                        <Text style={styles.cell}>
                                            {item.koi_name}
                                        </Text>
                                        <Text style={styles.cell}>
                                            {item?.koi_period}
                                        </Text>
                                        <Text style={styles.cell}>
                                            {item?.koi_duration}
                                        </Text>
                                        <Text style={styles.cell}>

                                            {item?.koi_teq}
                                        </Text>
                                        <Text style={styles.cell}>
                                            {item?.koi_srad}
                                        </Text>
                                    </View>
                                );
                            })

                            }
                        </View>

                    </ScrollView>

                </View>

                <View className='w-fit gap-3 pt-10 border-l-2 border-white'>
                    <Text className=' text-white text-2xl font-[default]'>Filter</Text>
                    <View className='flex-row space-x-3'>
                        <Checkbox value />
                        <Text className='text-white text-lg font-[default]'>KOI</Text></View>
                    <View className='flex-row space-x-3'>
                        <Checkbox value />
                        <Text className='text-white text-lg font-[default]'>Orbital Period [Days]</Text></View>
                    <View className='flex-row space-x-3'>
                        <Checkbox value />
                        <Text className='text-white text-lg font-[default]'>Transit Duration [hrs]</Text></View>
                    <View className='flex-row space-x-3'>
                        <Checkbox value />
                        <Text className='text-white text-lg font-[default]'>Equilibrium Temperature [k]</Text></View>
                    <View className='flex-row space-x-3'>
                        <Checkbox value />
                        <Text className='text-white text-lg font-[default]'>Stellar Radius [Solar radii]</Text></View>
                </View>

            </View>

        </View >
    );
};

export default kepler;


const styles = StyleSheet.create({
    table: {
        borderWidth: 1,
        borderColor: "black",
        marginBottom: 10,
        marginTop: 30,
    },
    row: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "balck",
    },
    cell: {
        flex: 1,
        // padding: 10,
        borderWidth: 1,
        // width: 200,
        // height: 200,
        textAlign: "center",
        fontSize: 18,
        color: "white",
        borderColor: "white",
    },
});