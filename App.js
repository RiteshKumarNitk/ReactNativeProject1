import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <TouchableOpacity className="bg-orange-500 p-3 rounded-lg shadow-md shadow-gray-900">
      <Text className="text-white text-3xl font-bold ">your app!</Text>
      </TouchableOpacity>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    color:'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
