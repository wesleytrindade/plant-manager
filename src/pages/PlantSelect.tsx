import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { EnviromentButton } from '../components/EnviromentButton';
import { Header } from '../components/Header';
import { Load } from '../components/Load';
import { PlantCardPrimary } from '../components/PlantCardPrimary';

import api from '../services/api';


interface EnviromentProps {
    key: string,
    title: string
}

interface PlantProps {
    id: string,
    name: string,
    about: string,
    water_tips: string,
    photo: string,
    environments: string[],
    frequency: {
        times: string,
        repeat_every: string
    }
}
export function PlantSelect() {

    const [enviroments, setEnviroments] = useState<EnviromentProps[]>([]);
    const [plants, setPlants] = useState<PlantProps[]>([]);
    const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([])
    const [enviromentSelected, setEnviromentSelected] = useState('all');
    const [loading, setLoading] = useState(true);

    const [page, setPage] = useState(1);
    const [loadingMore, setLoadingMore] = useState(false);
    const [loadedAll, setLoadedAll] = useState(false);


    function handleEnvironmentSelected(environment: string) {

        setEnviromentSelected(environment);

        if (environment == 'all') {
            return setFilteredPlants(plants);
        }

        const filtered = plants.filter(plant => {
            return plant.environments.includes(environment)
        });

        setFilteredPlants(() => filtered);
    }

    function handleFetchMore(distance: number) {
        if (distance < 1)
            return;

        setLoadingMore(true);
        if (!loadedAll) {
            setPage(oldValue => oldValue + 1);
            fetchPlants();
        }
    }

    async function fetchPlants() {
        const { data } = await api.get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`);
        
        if (data.length == 0) { 
            setLoadedAll(true);
            setLoadingMore(false);
            return setLoading(false);
        }

        if (page > 1) {
            setPlants(oldValue => [...oldValue, ...data]);
            setFilteredPlants(oldValue => [...oldValue, ...data]);
        }

        else {
            setPlants(data);
            setFilteredPlants(data);
        }
        setLoading(false);
        setLoadingMore(false);
    }

    useEffect(() => {
        async function fetchEnviroment() {
            const { data } = await api.get('plants_environments?_sort=title&_order=asc');
            setEnviroments([{
                key: 'all',
                title: 'Todos'
            }, ...data]);
        }

        fetchEnviroment()
    }, []);

    useEffect(() => {
        fetchPlants();
    }, []);

    if (loading) {

        return (
            <Load />
        )

    }

    else {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Header />

                    <Text style={styles.title}>
                        Em qual ambiente
            </Text>
                    <Text style={styles.subtitle}>
                        você quer colocar a sua planta?
            </Text>
                </View>

                <View>
                    <FlatList
                        horizontal
                        data={enviroments}
                        keyExtractor = {(item)=> String(item.key)}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.enviromentList}
                        renderItem={({ item }) => (
                            <EnviromentButton
                                title={item.title}
                                active={item.key === enviromentSelected}
                                onPress={() => handleEnvironmentSelected(item.key)}
                            >

                            </EnviromentButton>)}
                    >

                    </FlatList>
                </View>

                <View style={styles.plants}>
                    <FlatList
                        data={filteredPlants}
                        keyExtractor = {(item)=> String(item.id)}
                        numColumns={2}
                        renderItem={({ item }) => (
                            <PlantCardPrimary data={item} />)
                        }
                        showsVerticalScrollIndicator={false}
                        onEndReachedThreshold={0.1}
                        onEndReached={({ distanceFromEnd }) =>
                            handleFetchMore(distanceFromEnd)
                        }
                        ListFooterComponent={
                            loadingMore ?
                                <ActivityIndicator color={colors.green} />
                                : <></>
                        }

                    />
                </View>

            </View>
        )
    }

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        // alignItems:'center',
        // justifyContent:'space-around',
        backgroundColor: colors.background
    },

    title: {
        fontSize: 17,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 20,
        marginTop: 15
    },

    subtitle: {
        fontSize: 17,
        fontFamily: fonts.text,
        lineHeight: 20,
        color: colors.heading
    },

    header: {
        paddingHorizontal: 30,
    },
    enviromentList: {
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        marginLeft: 32,
        marginVertical: 32,
        paddingRight: 32
    },
    plants: {
        flex: 1,
        marginLeft: 32,
        paddingRight: 32

    },

});