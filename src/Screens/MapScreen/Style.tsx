// styles.js

import { StyleSheet } from 'react-native';
import { screenWidth } from '../../utils/sizeHelper';

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  addressContainer: {
      padding: 16,
      backgroundColor: 'white',
      position: 'absolute',
      bottom: 30,
      left: 0,
      right: 0,
  },
  header: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  map: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
 
});


export default styles;
