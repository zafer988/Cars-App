import React from 'react';
import { SafeAreaView, View, StyleSheet, FlatList, ScrollView, Image, Dimensions } from 'react-native';
import carsData from './src/CarsData.json';
import Cars from './Cars';
import carsBannerData from './src/CarsBannerData.json';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          ListHeaderComponent={() => (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {carsBannerData.map((item) => (
                <Image
                  key={item.id}
                  style={styles.image}
                  source={{ uri: item.imageUrl }} />
              ))}
            </ScrollView>
          )}
          data={carsData}
          renderItem={({ item }) => <Cars car={item} />}
          keyExtractor={(item) => item.id} />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dcdcdc",
  },
  image: {
    height: Dimensions.get('window').height / 6,
    width: Dimensions.get('window').width / 1.3,
    marginRight: 10,
    borderRadius: 8,
  },
});
export default App;
