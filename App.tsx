import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { LogBox, Platform, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppThemeProvider } from './src/Contexts/AppThemeProvider';
import { ToastProvider } from './src/Contexts/ToastProvider';
import { AppRouter } from './src/Routers/AppRouter';
import { useTheme } from 'react-native-paper';
import { Provider } from 'react-redux'
import { checkInternetConnection } from './src/utils/InternetUtil';
import NetInfo from '@react-native-community/netinfo';
import { NavigationContainer } from '@react-navigation/native';
import { ConfigProvider } from './src/Contexts/ConfigProvider';
import store from './src/Redux/Store';





//   console.error = () => { };
//  console.log = () => { };
//   console.warn = () => { };

if (__DEV__) {
  // Disable logbox
  LogBox.ignoreAllLogs();
}


export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (!state.isConnected) {
        checkInternetConnection();
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);




  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <ConfigProvider>
          {/* <LanguageProvider> */}
            <AppThemeProvider>
              <AppContent />
            </AppThemeProvider>
          {/* </LanguageProvider> */}
        </ConfigProvider>
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  innerContainer: {
    flex: 1,

  }
});
function AppContent() {
  const theme = useTheme();
  return <View style={{
    ...styles.container,
    backgroundColor: theme.colors.background
  }}>
    <View style={styles.innerContainer}>
      <StatusBar style="auto" />
      <NavigationContainer >

          <ToastProvider>
            <AppRouter />
          </ToastProvider>

      </NavigationContainer>
    </View>
  </View >;
}

