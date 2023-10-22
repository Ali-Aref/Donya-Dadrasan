import { StatusBar } from 'expo-status-bar';
import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native';
import styles from './src/styles';
import data from "./data.json"

type songType = {
  id: number,
  name: string,
  url: string,
}

export default function App() {
  return (
    <ImageBackground source={require("./src/assets/background.jpg")} style={styles.homeImgBackgroud}>
      <StatusBar style="auto" />
      <FlatList
        data={data.Songs}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }: { item: songType }) => (
          <View key={`song-${item.id}`} style={{
            padding: 15,
            marginVertical: 2,
            marginHorizontal: 10,
            borderRadius: 10,
            backgroundColor: "rgba(255,255,255,0.25)",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
            <Text style={styles.songName}>{item.name}</Text>
            <Text style={styles.songName}>{item.name}</Text>
          </View>
        )}
        ListFooterComponent={
          <View style={styles.playerContainer}>
            <View style={{}}>

            </View>
          </View>
        }
      />

    </ImageBackground>
  );
}

// for web
// npx expo install react-native-web@~0.19.6 react-dom@18.2.0 @expo/webpack-config@^19.0.0