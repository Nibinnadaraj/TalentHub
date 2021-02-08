import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { styles } from './Styles';
import { TextInput, Divider, Button, HelperText, ActivityIndicator } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default class LoginView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "challenge@trois.in",
      password: "Challenge123",
      emailError: false,
      passwordError: false,
      emailMsg: "",
      passwordMsg: ""
    };
  }


  loginFunction = (email, password) => {
    let validatedEmail = false;
    let validatedPassword = false;
    if (email == "") {
      this.setState({
        emailError: true,
        emailMsg: "Email Could Not Be Empty.!"
      });
    } else if (!this.validateEmail(email)) {
      this.setState({
        emailError: true,
        emailMsg: "Enter A Valid Email"
      });
    } else {
      this.setState({
        emailError: false,
        emailMsg: ""
      });

      validatedEmail = true;
    }



    if (password == "") {
      this.setState({
        passwordError: true,
        passwordMsg: "Password Could Not Be Empty.!"
      });
    } else if (password.length < 4) {
      this.setState({
        passwordError: true,
        passwordMsg: "Password Length Must Be Atleast $ Characters.!"
      });
    } else {
      this.setState({
        passwordError: false,
        passwordMsg: ""
      });

      validatedPassword = true;
    }


    if (validatedEmail && validatedPassword) {

      let params = {
        grant_type: "password",
        client_id:"nliCaBuoAAurkdwnWeD9oQGQrfa81tj4",
        audience:"https://hiring.trois.in/api/v2/",
        email: email,
        password: password,
        scope:"openid offline_access",
        client_secret:"kKuOiuszjs2fOjGGH0RBskBAYA5n1j0rgxOcUdsUPex97DBISvDzCxu4NVClVnWu"
      };

      this.props.onLogin(params);

    }

  }


  validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());

  }


  skipToHome = () => {

    let params =
    {
      "user_id": 1,
      "user_name": "guest",
      "user_email": "guest@icelab.in",
      "user_phone": "0",
      "user_image": null,
      "key": "c4ca4238a0b923820dcc509a6f75849b"
    }



    this.props.skipToHome(params);

  }


  render() {
    return (
      <>
        <ScrollView style={styles.scrollView} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} showsHorizontalScrollIndicator={false} >

          <View style={styles.container}>
            <View style={styles.loginContainer}>

              <Text style={styles.HeadingCenter}>Sign In</Text>

              <Divider style={styles.Divider} />

              <View style={styles.clearfix}></View>
              <View style={styles.formContainer}>

                <TextInput
                  style={styles.textInput}
                  type={'outlined'}
                  onChangeText={(email) => this.setState({ email })}
                  label={"Email"}
                  value={this.state.email}
                  placeholder={"Enter Your Valid Email"}
                  theme={{ colors: { primary: '#005E9B', underlineColor: 'transparent', } }}
                />

                <HelperText type="error" visible={this.state.emailError}>
                  {this.state.emailMsg}
                </HelperText>

                <View style={styles.clearfix}></View>

                <TextInput
                  style={styles.textInput}
                  type={'outlined'}
                  onChangeText={(password) => this.setState({ password })}
                  label={"Password"}
                  value={this.state.password}
                  placeholder={"Enter Your Password"}
                  secureTextEntry={true}
                  theme={{ colors: { primary: '#005E9B', underlineColor: 'transparent', } }}
                />
                <HelperText type="error" visible={this.state.passwordError}>
                  {this.state.passwordMsg}
                </HelperText>


                <View style={styles.clearfix}></View>

                <View style={styles.buttonContainer}>

                  <Button
                    disabled={this.props.isLoading}
                    icon={({ size, color }) => (
                      this.props.isLoading && <ActivityIndicator animating={true} color={"#fff"} />
                    )}
                    mode="contained"
                    style={styles.loginButton}
                    onPress={() => this.loginFunction(this.state.email, this.state.password)}>
                    Login
  </Button>

                </View>



              </View>

            </View>


          </View>

        </ScrollView>
      </>
    );
  }



}
