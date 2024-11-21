# react-native-shrinkable-view #
### easy responsive react-native UI with static sized view ###
<img src="https://i.postimg.cc/VNmCX91V/with-Shrink.png" width="762" height="772">

### Installation ###
```bash
npm i react-native-shrinkable-view
or
yarn add react-native-shrinkable-view
```

### Usage ###
```js
// import
import ShrinkableView from 'react-native-shrinkable-view'

// use
<ShrinkableView height={100} width={100} />
```
## Properties ##
| name       | required | type       | default   |
| -----------| -------- | ---------- | --------- |
|  width     |   X      |  number    | 0         |
|  height    |   X      |  number    | 0         |
|  minRatio  |   X      |  number    | 2         |
|  style     |   X      |  ViewStyle | undefined |

### Example ###
```js
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import ShrinkableView from 'react-native-shrinkable-view'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TextCard>card1</TextCard>
      <ShrinkableView height={100} />
      <TextCard>card2</TextCard>
      <ShrinkableView height={100} />
      <TextCard>card3</TextCard>
      <ShrinkableView height={100} />
      <TextCard>card4</TextCard>
    </SafeAreaView>
  )
}

const TextCard = ({children}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: '#FF702A',
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 32,
  },
})

export default App
```
