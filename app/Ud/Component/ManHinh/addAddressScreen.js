import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';

const AddAddressScreen = (props) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [state, setState] = useState('');

  // const handleAutoFillAddress = () => {
  //   // Thực hiện tự động điền địa chỉ
  //   // Gọi API hoặc thực hiện xử lý ở đây
  //   const autoFilledAddress = {
  //     name: 'Nguyễn Văn A',
  //     phoneNumber: '0123456789',
  //     streetAddress: '123 Đường ABC',
  //     email: 'example@email.com',
  //     state: 'Hà Nội',
  //   };

  //   setName(autoFilledAddress.name);
  //   setPhoneNumber(autoFilledAddress.phoneNumber);
  //   setStreetAddress(autoFilledAddress.streetAddress);
  //   setEmail(autoFilledAddress.email);
  //   setState(autoFilledAddress.state);
  // };

  const handleSaveAddress = () => {
    let objPro = { name: name, phone: phone, address: address, email:email,state:state }
    let url_api_diachi = 'http://192.168.1.59:9999/themdiachi';

    fetch(url_api_diachi, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(objPro)
    }).then((res) => {
        if (res.status == 201)
            alert("Bạn đã thêm địa chỉ thành công")
            console.log("thanh cong")

    })
        .catch((e) => {
            console.log(e);
        })
    alert('Địa chỉ đã được lưu thành công');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add a new address</Text>
      <Text style={styles.label}>Name</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
      </View>


      <Text style={styles.label}>Phone</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Phone"
          value={phone}
          onChangeText={setPhone}
        />
      </View>


      <Text style={styles.label}>Street address</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Street address"
          value={address}
          onChangeText={setAddress}
        />
      </View>


      <Text style={styles.label}>Email</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
      </View>


      <Text style={styles.label}>State</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="State"
          value={state}
          onChangeText={setState}
        />
      </View>

     

      <TouchableOpacity style={styles.button} onPress={handleSaveAddress}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  nameText: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    flex: 1,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },

  button: {
    backgroundColor: '#DF5A5A',
    padding: 10,
    borderRadius: 20,
    marginTop: 70,
    marginBottom:50
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default AddAddressScreen;