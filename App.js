import React, {useState} from 'react';
import { StatusBar,StyleSheet, Text, TextInput, SafeAreaView, TouchableOpacity, TouchableNativeFeedbackComponent } from 'react-native';

export default function App() {

  const [celsius, setCelsius] = useState(null)
  const [farenhaits, setFarenhaits] = useState(null)
  const [kelvins, setKelvins] = useState(null)

  function calcFar(){
    // Função para calcular de Celsius para Farenhaits.
    return setFarenhaits(((parseFloat(celsius)*(9/5)) + 32).toFixed(1));
  }

  function calcKel(){
    // Função para calcular de Celsius para Kelvin.
    return setKelvins((parseFloat(celsius) + 273.15).toFixed(1))
  }

  function conversor(){
    // Função q verifica se o input está vazio ou não.
    if(celsius != null){

      calcKel();

      calcFar();
      setCelsius('');
     
    return
    }
    else{
      // Vai alertar se não colocar nenhum valor no input.
      return alert('Você deve colocar um valor para converter.');
    };
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.textoPrincipal}>Conversor de Temperatura</Text>
      <Text style={styles.textoTemp}>Digite a temperatura</Text>
      
      <TextInput
      onChangeText={setCelsius}
      value={celsius}
      placeholder='Ex. 24'
      style={styles.input}
      keyboardType='numeric'
      />
      
      <TouchableOpacity style={styles.botao} onPress={()=>conversor()}>
        <Text>Clique aqui para converter</Text>
      </TouchableOpacity>
      
      <Text style={styles.texto}>Graus em Farenhaits: {farenhaits}</Text>
      <Text style={styles.texto}>Graus em Kelvins: {kelvins}</Text>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9C5',
    alignItems: 'center',
    justifyContent: 'center',

  },
  input:{
    width:267,
    marginVertical:10,
    borderWidth:1,
    padding:0,
    paddingLeft:2,
    fontSize:15,
  },
  botao:{
    borderWidth:1,
    borderRadius:10,
    padding:10,
    backgroundColor:'#FAD9A1',
  },
  texto:{
    fontSize:17,
    fontFamily:'bold',
    marginVertical:5
  },
  textoTemp:{
    fontSize:17,
    fontFamily:'bold'
  },
  textoPrincipal:{
    fontSize:20,
    fontWeight:'bold',
    borderBottomWidth:2,
    marginBottom:10
  }
});
