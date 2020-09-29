import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  display: {
    alignSelf: 'center',
    marginTop: 30,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#424242',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 5,
    justifyContent: 'space-between',
  },
  itemNome: {
    fontSize: 18,
    marginLeft: 10,
  },
  itemPizzas: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemPizzasText: {fontSize: 18},
  itemBtnAdd: {
    borderRadius: 100,
    padding: 10,
    marginTop: 0,
    marginHorizontal: 0,
    marginLeft: 15,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    marginHorizontal: 20,
    flex: 1,
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mensagemText: {
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 25,
    fontFamily: 'Poppins-Bold',
    color: '#303030',
  },
  mensagemContainer: {
    flex: 1,
    marginTop: 20,
  },
  image: {
    resizeMode: 'cover',
    height: 200,
  },
  container: {
    flex: 1,
  },
  button: {
    marginTop: 0,
    marginBottom: 10,
  },
});

export default styles;
