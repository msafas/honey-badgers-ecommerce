import NetInfo from '@react-native-community/netinfo';
import { Alert } from 'react-native';

export const checkInternetConnection = () => {
  NetInfo.fetch().then(state => {
    if (!state.isConnected) {
      Alert.alert(
        'Bağlantı Hatası',
        'İnternet bağlantısı bulunamadı. Lütfen internet bağlantınızı kontrol edin.',
        [{ text: 'Tamam' }]
      );
    }
  });
};
