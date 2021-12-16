import React ,{useState} from 'react';
import { StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import * as Yup from "yup";
import usersApi from "../api/user";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import { ErrorMessage } from '../components/forms';
import useApi from "../hooks/useApi";
import ActivityIndicator from '../components/ActivityIndicator';


const validationSchema = Yup.object().shape({
    name:Yup.string().required().label('Name'),
    email:Yup.string().required().email().label("Email"),
    password:Yup.string().required().min(4).label("Password")
})

function RegisterScreen(props) {
    const registerApi = useApi(usersApi.register);
    const loginApi = useApi(authApi.login);
    const auth = useAuth();
    const [error, setError] = useState();

    const handleSubmit = async (userInfo) =>{
        const result = await registerApi.request(userInfo);

        if(!result.ok){
            if(result.data) setError(result.data.error);
            else {
                setError("An unexpected error occurred.");
                console.log(result);
              }
            return;
        }
        const { data: authToken } = await loginApi.request(
            userInfo.email,
            userInfo.password
          );
          auth.logIn(authToken);
    }
    return (
        <>
        <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
       <Screen style={styles.container}>
           <AppForm
                initialValues={{ name:'',email:'', password:''}}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <ErrorMessage error={error} visible={error} />
                 <AppFormField
                    autoCorrect={false}
                    icon='account'
                    name='name'
                    placeholder='name'
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
       </>
    );
}
const styles = StyleSheet.create({
    container:{
        padding:10
    }
})
export default RegisterScreen;