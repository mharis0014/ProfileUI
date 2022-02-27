import {StyleSheet, Dimensions} from 'react-native'

const {height, width} = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 4,
  },
  smallText: {
    fontSize: 14,
    color: '#888',
    marginBottom: 30,
  },
  inputContainer: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    width: width * 0.9,
    height: height / 12,
    backgroundColor: '#fff',
  },
  inputText: {
    color: '#888',
    fontSize: 12,
    marginLeft: 10,
  },
  blackText: {color: '#000', fontSize: 13},
  boldText: {color: '#3d37cd', fontWeight: 'bold'},
})
