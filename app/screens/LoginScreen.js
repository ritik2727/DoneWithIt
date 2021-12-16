import React,{useContext, useState} from 'react';
import Screen from '../components/Screen'
import { Image } from 'react-native';
import { StyleSheet } from 'react-native';
import * as Yup from "yup";
import authApi from '../api/auth';
import { ErrorMessage } from '../components/forms';
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import jwtDecode from 'jwt-decode';
import AuthContext from '../auth/context';
import useAuth from '../auth/useAuth';

const validationSchema = Yup.object().shape({
    email:Yup.string().required().email().label("Email"),
    password:Yup.string().required().min(4).label("Password")
})

function LoginScreen(props) {
    const auth = useAuth();
    const authContext = useContext(AuthContext)
    const [loginFailed, setLoginFailed] = useState(false);

    const handleSubmit = async ({email,password}) =>{
        const response = await authApi.login(email,password)
        if(!response.ok) return setLoginFailed(true);

        setLoginFailed(false)
        auth.logIn(response.data);
    }
 
    return (
       <Screen style={styles.container}>
           <Image 
                style={styles.logo}
                source={require('../assets/logo-red.png')}
            />
            <AppForm
                initialValues={{ email:'', password:''}}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <ErrorMessage
                    error="Invalid email and/or password."
                    visible={loginFailed}
                />
                <AppFormField
                    autoCapilaize='none'
                    autoCorrect={false}
                    icon='email'
                    name='email'
                    keyboardType='email-address'
                    placeholder='Email'
                    textContextType='email Address'
                />
                <AppFormField
                    autoCapilaize='none'
                    autoCorrect={false}
                    icon='lock'
                    name='password'
                    secureTextEntry
                    placeholder='Password'
                    textContextType='password'
                />
                <SubmitButton title='login' />
            </AppForm>
       </Screen>
    );
}
const styles = StyleSheet.create({
    container:{
        padding:10
    },
    logo:{
        width:80,
        height:80,
        alignSelf:'center',
        marginTop:50,
        marginBottom:20
    }
})

export default LoginScreen;