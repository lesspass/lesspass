import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Linking,
  Text,
} from 'react-native';
import {Button, Paragraph, Title} from 'react-native-paper';
import MasterPassword from '../password/MasterPassword';
import TextInput from '../ui/TextInput';
import Styles from '../ui/Styles';
import {addError} from '../errors/errorsActions';
import {signIn} from './authActions';
import routes from '../routes';
import {useNavigation} from '@react-navigation/native';
import {setSettings} from '../settings/settingsActions';

export default function SignInScreen() {
  const defaultBaseURL = useSelector(state => state.settings.baseURL);
  const [baseURL, setBaseURL] = useState(defaultBaseURL);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const encryptMasterPassword = useSelector(
    state => state.settings.encryptMasterPassword,
  );
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={Styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={Styles.innerContainer}>
          <Title style={Styles.title}>Connect to your Lesspass Database</Title>
          <TextInput
            mode="outlined"
            label="LessPass Database Url"
            value={baseURL}
            onChangeText={setBaseURL}
          />
          <TextInput
            mode="outlined"
            label="Email"
            value={email}
            onChangeText={setEmail}
          />
          <MasterPassword
            label={encryptMasterPassword ? 'Master Password' : 'Password'}
            masterPassword={password}
            hideFingerprint={!encryptMasterPassword}
            onChangeText={password => setPassword(password)}
          />
          <Button
            icon={'account-circle'}
            mode="contained"
            style={{
              marginTop: 10,
              marginBottom: 30,
            }}
            disabled={
              baseURL === '' || email === '' || password === '' || isLoading
            }
            onPress={() => {
              setIsLoading(true);
              dispatch(setSettings({baseURL}));
              dispatch(
                signIn(
                  {
                    email: email.trim(),
                    password,
                  },
                  encryptMasterPassword,
                ),
              )
                .then(() => navigation.navigate(routes.PASSWORD_GENERATOR))
                .catch(() => {
                  setIsLoading(false);
                  let errorMessage =
                    'Unable to log in with provided credentials.';
                  if (encryptMasterPassword) {
                    errorMessage +=
                      " Your master password is encrypted. Uncheck this option in your settings if you don't use it.";
                  }
                  dispatch(addError(errorMessage));
                });
            }}>
            Sign In
          </Button>
          <Paragraph>
            LessPass Database is decommissioned. You must use your own server.{' '}
            <Text
              style={{color: 'blue'}}
              onPress={() =>
                Linking.openURL(
                  'https://blog.lesspass.com/2022-12-29/decommissioning-lesspass-database',
                )
              }>
              See blog post
            </Text>
          </Paragraph>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
