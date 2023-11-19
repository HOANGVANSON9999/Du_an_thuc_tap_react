import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const MhChao = (props) => {


  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);


  return (
    <View style={styles.mau}>
      <View style={styles.container}>
        <View  >
          <Image
            style={{
              width: 480, height: 300, borderWidth: 1, backgroundColor: "white",
              borderColor: "black"
            }}
            source={{ uri: 'https://tse3.mm.bing.net/th?id=OIP.w8Jqx1Yb4KNssodBH_EzJwHaE7&pid=Api&P=0&h=220' }}
          />
        </View>
        <View>
          <Text style={styles.chu1}>Chào mừng bạn đã đến với app bán điện</Text>
          <Text style={styles.chu2}>thoại SMARTS của chúng tôi</Text>

        </View>
        <View style={styles.canbang}>
          <Image
            style={{
              width: 100, height: 170,
              borderRadius: 15, marginTop: 40, marginLeft: 70
            }}
            source={{ uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAB0AFgDASIAAhEBAxEB/8QAGgABAQEBAQEBAAAAAAAAAAAAAAUGBAIDAf/EADgQAAICAgEABwMLAgcAAAAAAAECAAMEEQUGEiExQVFhEyIyFBUjUnGBkZKhseFU8RYzQlNiY9H/xAAYAQADAQEAAAAAAAAAAAAAAAAAAgMBBP/EACERAAMAAgICAwEBAAAAAAAAAAABAgMREjEhQRMyUQQi/9oADAMBAAIRAxEAPwDZxEQAT8Zgo2xAHmZ+zI9LLXfkKaC5FQQHXgCSe2PjjnWgNV7er/dT8wnpXVxtWDD0O5heV47HxLaUw7zkGwdoGid/d5z69HmuxuaqqPWTr7V0I14E90s8C48kwNvEROYBE4OV5WnjKdt79rfAg8fX7JneMyczl+Zqe6xilZ65UdiqB6Ss4nUuvQGxiIkgEREAEx/SoA8rX1uweyXZ+8zYTjz+MxuRC+3U9Ze5lOiJTFaitsDLZnyPjczGv4y0WlRtgTsT3gZlmf0joyLFCkkjS+ACmV/8L4P17/zD/wAnXgcNiYFntKgzWa0Gc71LvLHH9YFCIicgGJ6S7PM2+ir+wl7o5x/yPC9pYNW3e8fQeAk3KbDs6Su+VYPZLrw2CwA7DNSpDKCpBBGwROnJb4KQP2IicwCIni2xaq2ssPVVRsmAHFzHI/N2MGUBrXOkB/edlFhtx67CNF1DHXqJjORy35HML6OvhRfITaUp7OlE+qoEtkjhK/TWtHuIiRMEnc1nfIcIlD9LZ7qenmZRmV6Su1nIpWASFQaHqZTFPKtM1ETql28SxP4ze4FLUYNFT/EiAGZbBarjMzrZtDNYoBUAj3d+nnNZjZNWVSttLdZT+kt/RTevw1n1iInKKJE6TXMuNVSp0LGJPrr+8tyJ0mTdFD+TkfiP4lMX3Rq7IWCyV5tL2j3FcEyrnHJ5Ll2w67jVWg/Hs7/WRtS4+KmU9VuHkBcta1LL2jegPGdGXtMMng9cLdkY+fdgX2GxUBKknu1Ozn3dOLc1syt1l7VOj3z48VkmzLevJpRcpR22BQCfPc+3PjfGsP8AkJzv7ony/wA7INfKZi4LYm3Lsdq+z1gsocPkLTxl2Vk/SPW5Cs3a3cNAGdeNi0nja8goParQVDfdM8bGGKtA+Hrlj6nQEpKV+EbL20j5ZFz5N722nbsdmarg8ZsbjlDjTOeuR5bkPjq8arK3yHWTq6KqV7D9s1aOroGRgynuIPYZuavCldFaPURE5hBIvSRvoaU82J/AfzLUg9Itm2jy6plMX3Q09kTUtpg5KrRlYZ95q12Ozs7PWR9TX4Q1hUD/AK1/aXzVrRuaVS0zj43AtqvfJyT9K3hufflMezJxDXUNt1ge/U7InNye9kVCU8TlpodONFJHv+zK6346nPxmIcSh/lKKCG6wJ0dDUpSbzlli4grrBJsbR0PCbO29foyhbRA5C8ZWbZco0rHQ+wdk0vE0NjYFaWfEfeI8tzg4riSrC/JXRHaqH9zLcpltNcV6KU10hERICCSefq61FVgHwto/f/aVpxcsN8fZ6aP6x4eqQ09ozOpXo5oVUpWaCSqgb63f+kl6jU66lV2dDlPssfPw/pz+f+I+fh/Tn8/8SPqNRfigX45LHz8P6c/n/idmBnNm9Y+xKKv+re9mS8HinvIe4FK/LxaXq0WtAiKFUdwEhfBeJJVxXhHqIiSEEREAEnczcFxhUO9z+glGfOymq0g2Vq5Hd1hubL09my9PZlgpJ0Bsz714OTZ8NLfaRr95pFREGkVV+wanqWeZ+kVeV+kRKuGtb/NdUHkO0yjj8fj4+iqdZvrN2mdUSbun2TdtiIiIKIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAf/Z' }}
          />
          <Text style={styles.texthello}>SMARTS Shop</Text>
        </View>
      </View>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    height: 300,
    width: 480
  },
  mau: {
    flex: 1,
    backgroundColor: "#DF5A5A",
  },
  texthello: {
    color: "red",
    fontSize: 35,
    marginTop: 95,
    marginLeft: 20
  },
  canbang: {
    flexDirection: "row",
    marginTop: 50
  },
  button: {
    width: "50%",
    paddingVertical: 10,
    borderRadius: 8,
    color: "red",
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
    backgroundColor: "white",
  },
  chu1: {
    marginTop: 60,
    marginLeft: 20,
    color: "red",
    fontSize: 24
  },
  chu2: {
    marginLeft: 80,
    color: "red",
    fontSize: 24
  }
});
export default MhChao