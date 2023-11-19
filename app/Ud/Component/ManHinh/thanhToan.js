import React, { useMemo, useState, useEffect } from 'react';
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';
import { View, TextInput, StyleSheet, FlatList, VirtualizedList, Image, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import DropDownPicker from 'react-native-dropdown-picker';

const ThanhToan = (props) => {
    const [cartItems, setCartItems] = useState([]);
    const [tennguoimua, settennguoimua] = useState();
    const [sdt, setsdt] = useState();
    const [diachi, setdiachi] = useState();
    const [tongtien, settongtien] = useState(props.route.params);
    const [isLoginInfoLoaded, setIsLoginInfoLoaded] = useState(false);
    const [isLoading, setisLoading] = useState(true);
    const [open, setOpen] = useState(false);  // sổ list xuống hay không
    const [value, setValue] = useState(null);  // giá trị người dùng chọn
    const [pttt, setpttt] = useState([    // mảng các phần tử
        { label: 'Tại nhà', value: 'Tại nhà' }
    ]);
    const [loginInfo3, setloginInfo3] = useState('');
    const [loginInfo2, setloginInfo2] = useState(props.route.params);
    const clearCart = () => {
        setCartItems([]);
    };


    const totalPrice = props.route.params;

    const DelPro = () => {
        let url_api_del = 'http://192.168.1.59:9999/giohang/xoa/' + loginInfo3._id;

        fetch(url_api_del, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((res) => {
                if (res.status === 201) {
                    console.log(loginInfo3._id);
                    // Perform any additional actions or logic here
                } else {
                    console.log('Error:', res.status);
                    // Handle other status codes or errors
                }
            })
            .catch((e) => {
                console.log(e);
                // Handle network errors or exceptions
            });
    };
    const Save_UserMua = () => {
        let objUserMua = {
            tennguoimua: tennguoimua, sdt: sdt, diachi: diachi, pttt: value
            , tongtien: tongtien
        }
        let url_api_hoadon = 'http://192.168.1.59:9999/hoadon/them/' + loginInfo3._id;
        fetch(url_api_hoadon, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(objUserMua)
        }).then((res) => {
            if (res.status == 201) {
                alert("đặt hàng thành công")
                DelPro();
                props.navigation.navigate('Profile')
            }

            // DelPro();

        })
            .catch((e) => {
                console.log(e);
            })


    }
    const getLoginInfo = async () => {
        try {
            const valuee = await AsyncStorage.getItem('loginInfo')
            if (valuee !== null) {
                // láy được dữ liệu 
                setloginInfo3(JSON.parse(valuee))
                //setloginInfo2(JSON.parse(valuee))
            }
        } catch (e) {

            console.log(e);
        }
    }
    useEffect(() => {
        const loadData = async () => {
            await getLoginInfo();
            setIsLoginInfoLoaded(true);
        };
        loadData();
    }, []);

    useEffect(() => {
        if (isLoginInfoLoaded) {
            setisLoading(true)
            console.log(loginInfo3._id);
            //console.log(loginInfo2._id);
        }

    }, [isLoginInfoLoaded]);
    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            // khi màn hình đc active thì lệnh hoạt động
            if (isLoginInfoLoaded) {
                setisLoading(true)
                console.log(loginInfo3._id);
                // console.log(loginInfo2._id);
            }
        });

        return unsubscribe;
    }, [isLoginInfoLoaded])


    const navigation = useNavigation();
    const handleAddDiaChi = () => {
        navigation.navigate('SanPham');
    };
    const handleAddCard = () => {
        navigation.navigate('SanPham');
    };


    const [selectedId, setSelectedId] = useState("");


    return (
        <View style={styles.container}>


            <ScrollView>
                <View>
                    <View style={{
                        flexDirection: 'row',
                        paddingBottom: 10,

                    }}>

                    </View>
                    <TouchableOpacity>



                    </TouchableOpacity>
                    <View style={{ flexDirection: 'column', paddingTop: 15 }}>
                        <Text style={{ fontSize: 30, paddingLeft: 20 }}>
                            Price Details
                        </Text>
                        <View style={{ flexDirection: 'row', paddingTop: 20, paddingLeft: 20 }}>

                            <View>
                                <TextInput style={styles.chu} placeholder='Tên người mua' onChangeText={(txt) => settennguoimua(txt)}>
                                </TextInput>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', paddingTop: 20, paddingLeft: 20 }}>
                            <View>
                                <TextInput style={styles.chu} placeholder='Số điện thoại' onChangeText={(txt) => setsdt(txt)}>
                                </TextInput>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', paddingTop: 20, paddingLeft: 20 }}>
                            <View>
                                <TextInput style={styles.chu} placeholder='Địa chỉ' onChangeText={(txt) => setdiachi(txt)}>
                                </TextInput>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', paddingTop: 20, paddingLeft: 20 }}>


                            <DropDownPicker

                                style={styles.chu1}
                                open={open}
                                value={value}
                                items={pttt}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setpttt}
                                defaultValue="1"
                                placeholder={"Chọn phương thức thanh toán"} // hoặc placeholder={null}


                            />

                        </View>
                        <View style={{ flexDirection: 'row', borderTopWidth: 1 }}>
                            <Text style={{ fontSize: 20, fontWeight: '700', paddingTop: 30, paddingLeft: 20 }}>
                                Total Price
                            </Text>
                            <Text style={{ fontSize: 20, paddingLeft: 230, fontWeight: '700', paddingTop: 30, }}>
                                ${totalPrice}
                            </Text>
                        </View>
                    </View>
                    <View >
                        <TouchableOpacity onPress={Save_UserMua}>
                            <Text style={styles.button} >Checkout</Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </ScrollView>
        </View>


    );
};

export default ThanhToan

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
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

    },
    chu1: {
        fontSize: 15,
        width: 450,
        height: 50,
        borderWidth: 1,
        marginBottom: 30,
        marginTop: 20,
    }
});