import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Image } from 'react-native';

import Detalhes from '../Detalhes';

export default function Filmes({ data }) {
    const [visibleModal, setVisibleModal] = useState(false);

    return (
        <View>

            <View style={styles.card}>
                <Text style={styles.titulo} >{data.nome}</Text>
                <Image
                    style={styles.capa}
                    source={{ uri: data.foto }}
                />
                
                
                <View style={styles.areaBotao}>
                    <TouchableOpacity
                    style={styles.botao}
                    onPress={ ()=> setVisibleModal(true) }
                    >
                        <Text style={styles.textoBotao}>LEIA MAIS</Text>
                    </TouchableOpacity>
                    
                    <Modal
                    transparent={true}
                    animationType= 'slide'
                    visible={visibleModal}
                    >
                        <Detalhes filme={data} voltar={ ()=>setVisibleModal(false) } />
                    </Modal>

                </View>


            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        margin: 15,
        elevation: 2,
        backgroundColor: '#FFF'
    },
    titulo: {
        fontSize: 18,
        color: '#121212',
        padding: 15,
        fontWeight: 'bold'
    },
    capa: {
        height: 250,
        zIndex: 2
    },
    areaBotao:{
        alignItems: 'flex-end',
        marginTop: -40,
        zIndex: 9
    },
    botao:{
        backgroundColor: '#09A6FF',
        width: 100,
        padding: 8,
        opacity: 1,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    textoBotao:{
        color:'#fff',
        textAlign: 'center'
    }

})