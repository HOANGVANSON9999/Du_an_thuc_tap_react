import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, FlatList, Image, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth / 2; // Two products per row

const HomeScreen = (props) => {

    const data = [
        { id: '1', image: require('../images/ip1.png') },
        { id: '2', image: require('../images/ip2.png') },
        { id: '3', image: require('../images/ip3.png') },
    ];
    const [isLoading, setisLoading] = useState(true);
    const [showDialog, setshowDialog] = useState(true)
    const [dsPro, setdsPro] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [numColumns, setNumColumns] = useState(2);
    const [isLoginInfoLoaded, setIsLoginInfoLoaded] = useState(false);
    const [loginInfo1, setloginInfo] = useState('');
    const handleNumColumnsChange = (newNumColumns) => {
        setNumColumns(newNumColumns);
    };
    const getListPro = async () => {

        let api_url_pro = 'http://192.168.1.59:9999/sanpham';
        try {
            const response = await fetch(api_url_pro);
            const json = await response.json();
            setdsPro(json);
        } catch (e) {
            console.log("Error parsing JSON:", error);
        } finally {
            setisLoading(false);
        }
    };
    const filterProducts = () => {
        if (searchText === "") {
            return dsPro;
        }
        return dsPro.filter((item) =>
            item.tensp.toLowerCase().includes(searchText.toLowerCase())
        );
    };




    const renderItem = ({ item }) => {
        //const itemCopy = { ...item }; // Sao chép đối tượng item
        return (
            <TouchableOpacity>
                <View style={{ marginHorizontal: 10, borderRadius: 20 }}>
                    <Image source={item.image} style={styles.image1} />
                </View>
            </TouchableOpacity>
        );
    };
    const renderItem1 = ({ item }) => {
        // const discountedPrice = item.price - (item.price * item.discount);
        return (
            <TouchableOpacity onPress={() => { props.navigation.navigate('SanPham', { item_sp: item }) }}>
                <View style={styles.itemContainer}>
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: item.img }} style={styles.image} />
                        <View style={styles.overlay}>
                            <Text style={styles.name}>{item.tensp}</Text>
                            <Text style={styles.discountedPrice}>
                                <Text> ${item.giasp}</Text>
                                {/* <Text> ${discountedPrice.toFixed(2)}</Text> */}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>

        );
    };

    // const navigation = useNavigation();
    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            // khi màn hình đc active thì lệnh hoạt động
            getListPro();

        });

        return unsubscribe;
    }, [props.navigation]);
    return (

        <View style={styles.container}>
            <View style={styles.menu}>
                {/* <Ionicons name="menu" size={24} color="#8a6fcf" /> */}
                <Ionicons name="notifications" size={24} color="#8a6fcf" />
            </View>
            <View style={styles.icon}>
                <Ionicons name="search" size={24} color="#888" />
                <TextInput
                    onChangeText={(text) => setSearchText(text)}
                    style={styles.input}
                    placeholder="Tìm kiếm..."
                    placeholderTextColor="#888"
                    value={searchText}
                />
                <Ionicons name="close-circle" size={24} color="#888" onPress={() => { setSearchText("") }} />
            </View>
            <View style={{ marginTop: 20 }}>
                <FlatList
                    data={data}
                    horizontal
                    //showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                />
            </View>

            <View>
                <Text style={{ fontSize: 20, marginTop: 15 }} onPress={() => { props.navigation.navigate('gioHang') }}>Các sản phẩm </Text>
                <Text style={{ borderBottomColor: '#F38E8E', borderBottomWidth: 1 }}></Text>
            </View>



                <View style={styles.container}>

                    <FlatList
                        style={{ marginLeft: 20 }}
                        data={filterProducts()}
                        keyExtractor={(item_db, index) => (item_db.id ?? "") + "_" + index}  // Use a combination of item_db.id and index as the key
                        numColumns={numColumns}
                        renderItem={renderItem1}

                        key={`${numColumns}`} // Update the key prop based on numColumns
                    />

                </View>
          

        </View>





    );
};

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#DF5A5A"
    },
    menu: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 10,
        marginTop: 15
    },
    icon: {
        padding: 15,
        margin: 20,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 15
    },

    input: {
        flex: 1,
        fontSize: 20,
        color: '#333',
    },
    itemContainer: {
        margin: 10,

    },
    imageContainer: {
        borderRadius: 20,
        overflow: 'hidden',
        position: 'relative',
    },
    image: {
        width: 200,
        height: 200,
    },
    image1: {
        width: 200,
        height: 200,
        borderRadius: 20
    },

    price: {
        marginBottom: 2,
        size: '20',
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    discountedPrice: {
        fontSize: 16,
        color: 'green',
    },
    strikeThrough: {
        textDecorationLine: 'line-through',
        color: 'red',
    },
});