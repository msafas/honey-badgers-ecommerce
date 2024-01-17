// styles.js

import { StyleSheet } from 'react-native';
import { screenWidth } from '../../utils/sizeHelper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    flexGrow: 1,
    margin: 20,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: screenWidth * 0.4,
    height: screenWidth * 0.4,
  },
  textHeader: {
    fontSize: 26,
    fontWeight: '600',
  },
  textSubHeader: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5,
    marginBottom: 40,
  },
  textInput: {
    fontSize: 16,
    fontWeight: '600',
   
  },
  forgotPassword: {
    borderBottomWidth: 1,

    fontSize: 14,
    fontWeight: 'bold',
  },
  buttonContent: {
    height: 60,

  },
  button:{
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
