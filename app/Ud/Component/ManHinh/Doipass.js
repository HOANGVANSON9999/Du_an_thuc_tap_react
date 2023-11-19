import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Doipass = (props) => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [id, setId] = useState('');
  const doLogin = (item) => {
   
     if (password === '' || newPassword==='') {
      alert('Vui lòng nhập mật khẩu cũ, mật khẩu mới');
      return;
    }
    // const item = { id: '6548b338bed7bb54dcd802be' }; // Replace 'YOUR_ITEM_ID' with the actual item ID

    const url_api = `http://192.168.1.59:9999/User/update/`+item.id;

    fetch(url_api, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ newPassword: newPassword}),
    })
      .then((response) => {
        console.log('Response status:', response.status);
        return response.json();
      })
      .then((data) => {  // Fix: Replace 'response' with 'data'
        console.log('Response data:', data);
        if (data.status === 200) {
          alert('Đổi mật khẩu thành công');
          // Handle success or perform any necessary actions
        } else {
          alert('Đổi mật khẩu không thành công');
          // Handle failure or perform any necessary actions
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle the error or display an error message
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Đổi mật khẩu</Text>
      <Text style={styles.txt1}>
        Mật khẩu của bạn phải có ít nhất 6 ký tự, bao gồm cả chữ số, chữ cái và ký tự đặc biệt (!$@%).
      </Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        placeholder="Mật khẩu cũ"
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        secureTextEntry
        placeholder="Mật khẩu mới"
        value={newPassword}
        onChangeText={setNewPassword}
      />
      <TouchableOpacity style={styles.button} onPress={doLogin}>
        <Text style={styles.buttonText}>Đổi mật khẩu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#DF5A5A',
  },
  txt: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 100,
  },
  txt1: {
    marginBottom: 60,
    marginTop: 70,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 40,
    paddingHorizontal: 8,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    marginTop: 70,
  },
  buttonText: {
    color: '#DF5A5A',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Doipass;