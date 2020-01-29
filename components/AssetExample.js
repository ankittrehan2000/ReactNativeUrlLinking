import * as React from 'react';
import { Text, View, StyleSheet, Image,Linking } from 'react-native';

export default class AssetExample extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Article{"\n"} 
          <Text style={styles.text} onPress={()=>Linking.openURL('http://google.com')}>Link</Text>
        </Text>
        <Image style={styles.logo} source={require('../assets/snack-icon.png')} />
        <Text style={{fontStyle:'Oblique'}}> Description </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 150,
    width: 128,
  },
  text: {
    color: 'blue',
  }
});
