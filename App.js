import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
  Linking,
  ScrollView,
} from 'react-native';
import Constants from 'expo-constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from 'react-navigation';
//import { createBottomTabNavigator } from 'react-navigation-tabs';
//import { createStackNavigator } from 'react-navigation-stack';
//import Browser from './Browser'

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class ArticleScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Making a new application</Text>
        <ScrollView>
          <Card
            onPress={ () =>
              Linking.openURL('https://snack.expo.io/@atre/6be094')
            }
            style={styles.card}>
            <AssetExample />
          </Card>
          <Card
            onPress={
              () => Linking.openURL('https://snack.expo.io/@atre/6be094')
            }
            style={styles.card}>
            <AssetExample />
          </Card>
          <Card
            onPress={() =>
              Linking.openURL('https://snack.expo.io/@atre/6be094')
            }
            style={styles.card}>
            <AssetExample />
          </Card>
          <Card
            onPress={() =>
              Linking.openURL('https://snack.expo.io/@atre/6be094')
            }
            style={styles.card}>
            <AssetExample />
          </Card>
        </ScrollView>
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'Center',
          alignItems: 'center',
          margin: 5,
          paddingTop: 100,
        }}>
        <Text
          style={{
            margin: 5,
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          UPcoming Home Screen1
        </Text>
        <Button
          title="go somewhere"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return <Text>Wassup</Text>;
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#D3D3D3',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    padding: 8,
    margin: 5,
  },
});
