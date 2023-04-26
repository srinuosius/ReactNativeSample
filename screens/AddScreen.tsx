import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Loader from '../components/Loader';

const AddScreen = ({navigation}: any) => {
  const [data, setData] = useState({
    vendor_name: '',
    vendor_phone: '',
    brandName: '',
    quantity: '',
  });
  const [loader, setLoader] = useState(false);

  const addData = () => {
    setLoader(true);
    try {
      const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
      };
      fetch('http://10.0.2.2:3005/addbrands', requestOptions)
        .then(res => res.json())
        .then(data => {
          navigation.navigate('Home');
          setLoader(false);
          setData({
            vendor_name: '',
            vendor_phone: '',
            brandName: '',
            quantity: '',
          });
        });
    } catch (err) {
      setLoader(false);
      console.log(err);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{}}>
          <Text style={styles.textStyle}>Add Brand Item</Text>
          {loader ? (
            <Loader />
          ) : (
            <View style={{padding: 10}}>
              <Text style={styles.inputTitle}>Vendor Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Vendor name"
                onChangeText={e => {
                  setData({
                    ...data,
                    vendor_name: e,
                  });
                }}
                value={data?.vendor_name}
              />
              <Text style={styles.inputTitle}>Vendor Phone</Text>
              <TextInput
                style={styles.input}
                placeholder="Vendor phone"
                keyboardType="number-pad"
                onChangeText={e => {
                  setData({
                    ...data,
                    vendor_phone: e,
                  });
                }}
                value={data?.vendor_phone}
              />
              <Text style={styles.inputTitle}>Brand Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Brand name"
                onChangeText={e => {
                  setData({
                    ...data,
                    brandName: e,
                  });
                }}
                value={data?.brandName}
              />
              <Text style={styles.inputTitle}>Quantity</Text>
              <TextInput
                style={styles.input}
                placeholder="Quantity"
                keyboardType="number-pad"
                onChangeText={e => {
                  setData({
                    ...data,
                    quantity: e,
                  });
                }}
                value={data?.quantity}
              />
              <TouchableOpacity
                onPress={() => addData()}
                style={styles.buttonStyle}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddScreen;

export const styles = StyleSheet.create({
  // viewStyle: {
  //   height: '100%',
  //   backgroundColor: 'green',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  textStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 5,
    backgroundColor: 'green',
    textAlign: 'center',
    paddingVertical: 5,
  },
  input: {
    height: 45,
    width: '100%',
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
    borderColor: 'silver',
  },
  inputTitle: {fontSize: 18, color: 'black'},
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#1d86ff',
    paddingVertical: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});
