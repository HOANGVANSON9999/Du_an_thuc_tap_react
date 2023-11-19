import React, { useMemo, useState, useEffect } from 'react';
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';
import { View, TextInput, StyleSheet, FlatList, VirtualizedList, Image, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';

const AllDiachi = (props) => {
    const [dsPro, setdsPro] = useState([]);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [state, setState] = useState('');
    const getListPro = async () => {
        let url_api_diachi = 'http://192.168.1.59:9999/diachi'

        try {
            const response = await fetch(url_api_diachi);
            const json = await response.json();
            setdsPro(json);
        } catch (e) {
            console.log(e);
        } finally {
            setisLoading(false)

        }
    }
    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            // khi màn hình đc active thì lệnh hoạt động
            getListPro();

        });

        return unsubscribe;
    }, [props.navigation]);


    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 16,
                    backgroundColor: '#E0FFFF',
                    borderRadius: 10,
                    marginTop:30
                }}>

                    <View
                        style={{ flexDirection: 'row', padding: 20,paddingLeft:60}}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{}}>
                                Deliver to Tradly Team, 75119
                            </Text>
                            <Text style={{ color: 'grey' }}>
                                Kualalumpur, Malaysia
                            </Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={{
                                backgroundColor: 'red',
                                borderRadius: 20,
                                padding: 10,
                            
                                left: 100,
                                width: 100,
                                textAlign: 'center',
                                color: 'white'
                            }}
                            >Chọn</Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </ScrollView>
        </View>


    );
};

export default AllDiachi

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DF5A5A',
    },
    button: {
        left: 90,
        margin: 30,
        width: 200,
        paddingVertical: 10,
        borderRadius: 20,
        color: "white",
        fontSize: 25,
        fontWeight: "700",
        textAlign: "center",
        backgroundColor: "red",
    },
    chu: {
        fontSize: 15,
        width: 450,
        marginTop: 20,
        height: 50,
        borderWidth: 1,
        marginLeft: 20
    },
    chu1: {
        fontSize: 15,
        width: 450,
        height: 50,
        borderWidth: 1,
        marginLeft: 20,
        marginBottom: 30,
        marginTop: 20,
    }
});