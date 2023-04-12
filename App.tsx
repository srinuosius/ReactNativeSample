/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';
import ActivityScreen from './screens/ActivityScreen';
import AddScreen from './screens/AddScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SearchScreen from './screens/SearchScreen';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';

function App(): JSX.Element {
  const Tab = createBottomTabNavigator();
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({
    username: '',
    password: '',
  });
  const [errorData, setErrorData] = useState({
    username: '',
    password: '',
  });

  console.log({errorData});

  const onLogin = () => {
    console.log('Trigger');
    if (data.username && data.password) {
      setLogin(!login);
    } else {
      setErrorData({
        password: 'Required Field *',
        username: 'Required Field *',
      });
    }
  };
  return (
    <>
      {login ? (
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({route}: any) => ({
              tabBarIcon: ({focused, size, color}) => {
                let iconName: any;
                if (route.name == 'Home') {
                  iconName = focused ? 'ios-home' : 'ios-home-outline';
                  size = focused ? size + 8 : size + 5;
                } else if (route.name == 'Search') {
                  iconName = focused ? 'search-sharp' : 'search-outline';
                  size = focused ? size + 8 : size + 5;
                } else if (route.name == 'Add') {
                  iconName = focused ? 'add-circle' : 'add-circle-outline';
                  size = focused ? size + 8 : size + 5;
                } else if (route.name == 'Activity') {
                  iconName = focused ? 'heart' : 'heart-outline';
                  size = focused ? size + 8 : size + 5;
                } else if (route.name == 'Profile') {
                  iconName = focused
                    ? 'person-circle-sharp'
                    : 'person-circle-outline';
                  size = focused ? size + 8 : size + 5;
                }
                return <Ionic name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'black',
              tabBarStyle: {
                // backgroundColor: '#bad',
              },
              headerShown: false,
            })}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Add" component={AddScreen} />
            <Tab.Screen name="Activity" component={ActivityScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      ) : (
        <View style={styles.viewStyle}>
          <View style={styles.btnsView}>
            <Text style={styles.titleText}>Welcome</Text>
            <SafeAreaView>
              <TextInput
                style={styles.input}
                placeholder="Enter Username"
                onChangeText={e => {
                  setData({
                    ...data,
                    username: e,
                  });

                  if (e) {
                    setErrorData({
                      ...errorData,
                      username: '',
                    });
                  } else {
                    setErrorData({
                      ...errorData,
                      username: 'Required Field *',
                    });
                  }
                }}
                value={data.username}
              />
              <View>
                <Text style={styles.errorMsg}>
                  {errorData?.username ? errorData.username : ''}
                </Text>
              </View>
              <TextInput
                style={styles.input}
                // keyboardType="phone-pad"
                secureTextEntry={true}
                onChangeText={e => {
                  setData({
                    ...data,
                    password: e,
                  });
                  if (e) {
                    setErrorData({
                      ...errorData,
                      password: '',
                    });
                  } else {
                    setErrorData({
                      ...errorData,
                      password: 'Required Field *',
                    });
                  }
                }}
                placeholder="Enter Password"
                value={data.password}
              />
              <View>
                <Text style={styles.errorMsg}>
                  {errorData?.password ? errorData.password : ''}
                </Text>
              </View>
            </SafeAreaView>
            {/* <View style={styles.btnStyle}>
            <Button
              onPress={() => setLogin(!login)}
              title="Login"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
            </View> */}
            <TouchableOpacity
              onPress={() => onLogin()}
              style={styles.buttonStyle}>
              <Text style={styles.buttonText}> LET'S GET STARTED </Text>
            </TouchableOpacity>

            <View style={styles.bottomView}>
              <TouchableOpacity>
                <Text>Sign-Up ?</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>Forgot Password</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </>
  );
}

export default App;

export const styles = StyleSheet.create({
  viewStyle: {
    height: '100%',
    backgroundColor: 'pink',
    justifyContent: 'center',
    // alignItems: 'center',
    fontFamily: 'sand-serif',
  },
  titleText: {
    fontSize: 30,
    letterSpacing: 5,
    fontWeight: '500',
    marginBottom: 5,
    textAlign: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#1d86ff',
    paddingVertical: 8,

    // backgroundColor: '#0A6ABB',
    // width: 300,
    // height: 45,
    // borderColor: '#FFFFFF',
    // borderWidth: 2,
    borderRadius: 5,
    // marginTop: 50,
  },
  buttonText: {
    color: 'white',
  },
  input: {
    height: 40,
    width: '100%',
    marginVertical: 10,
    // borderWidth: 1,
    borderBottomWidth: 1,
    padding: 10,
    // borderRadius: 10,
  },
  btnsView: {
    paddingHorizontal: 10,
  },
  bottomView: {
    paddingHorizontal: 5,
    marginTop: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  errorMsg: {
    color: 'red',
    marginLeft: 4,
  },
});
