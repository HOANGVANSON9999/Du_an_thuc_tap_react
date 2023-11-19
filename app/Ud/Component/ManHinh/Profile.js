import React from 'react';
import { View, TextInput, StyleSheet, FlatList, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
const Profile = (props) => {

    const [loginInfo, setloginInfo] = useState('');
    const [isLoading, setisLoading] = useState(true);
    const [tennguoimua, setTennguoimua] = useState('');
    const [phone, setPhone] = useState('');
    const [dspro, setdspro] = useState([]);
    const [isLoginInfoLoaded, setIsLoginInfoLoaded] = useState(false);
    const getListPro = async () => {
        let api_url_pro = 'http://192.168.1.59:9999/thongtin/' + loginInfo.id
        try {
            const response = await fetch(api_url_pro);
            const json = await response.json();
            setdspro(json);
        } catch (e) {
            console.log(e);
        } finally {
            setisLoading(false);
        }
    };
    const getLoginInfo = async () => {
        try {
            const value = await AsyncStorage.getItem('loginInfo')
            if (value !== null) {
                // láy được dữ liệu 
                setloginInfo(JSON.parse(value))
            }
        } catch (e) {

            console.log(e);
        }

    };
    useEffect(() => {
        const loadData = async () => {
            await getLoginInfo();
            setIsLoginInfoLoaded(true);
        };
        loadData();
    }, []);

    useEffect(() => {
        if (isLoginInfoLoaded) {
            getListPro();
            setisLoading(true)
            console.log(loginInfo._id);
        }

    }, [isLoginInfoLoaded]);
    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            // khi màn hình đc active thì lệnh hoạt động
            if (isLoginInfoLoaded) {
                getListPro();
                setisLoading(true)
                console.log(loginInfo._id);
            }
        });

        return unsubscribe;
    }, [isLoginInfoLoaded])
    const handleLinkPress = () => {
        Linking.openURL('https://www.facebook.com/pham.haibang78');
    };
    return (

        <View style={styles.bagach}>
            <View style={styles.container}>
                <View style={styles.canbang}>
                    <Image
                        style={{
                            width: 100, height: 170,
                            borderRadius: 15, marginTop: 40, marginLeft: 70
                        }}
                        source={{ uri: 'data:image/jpeg;base64,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' }}
                    />
                    <Text style={styles.texthello}>SMARTS Shop</Text>
                </View>
                <View>
                    <Text style={styles.gmail}>Email: {loginInfo.email}</Text>
                </View>
            </View>
            <View >
                <Text style={styles.chu1} onPress={() => { props.navigation.navigate('Thongtin') }}>Cập nhật thông tin</Text>
                <Text style={styles.chu1} onPress={() => { props.navigation.navigate('LichSu') }}>Lịch Sử</Text>
                <Text style={styles.chu1} onPress={() => { props.navigation.navigate('Login') }}>Log out</Text>
                <TouchableOpacity onPress={() => { props.navigation.navigate('Doipass') }}>
                    <Text style={styles.chu1}>Đổi mật khẩu</Text>
                </TouchableOpacity>
                <Text style={{
                    borderBottomColor: '#F38E8E',
                    borderBottomWidth: 1, marginTop: 10
                }}></Text>
                <TouchableOpacity>
                    <Text style={styles.chu} onPress={handleLinkPress}>Liên hệ</Text>

                </TouchableOpacity>

            </View>
        </View>
    )


};

export default Profile

const styles = StyleSheet.create({
    container: {
        height: 300,
        width: 480,
        backgroundColor: "#DF5A5A",
    },
    texthello: {
        color: "red",
        fontSize: 40,
        marginTop: 75,
        marginLeft: 20
    },
    canbang: {
        flexDirection: "row",
    },
    gmail: {
        marginLeft: 50,
        marginBottom: 20,
        marginTop: 20,
        fontSize: 15
    },
    ten: {
        fontSize: 15,
        marginLeft: 50,
        marginBottom: 20
    },
    bagach: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    chu: {
        marginTop: 50,
        marginLeft: 60,
        color: "red",
        fontSize: 15
    },
    chu1: {
        marginTop: 40,
        marginLeft: 60,
        color: "red",
        fontSize: 15
    }

});