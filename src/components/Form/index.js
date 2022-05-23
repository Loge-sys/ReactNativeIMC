import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Vibration,
  Pressable,
  Keyboard,
  FlatList,
} from 'react-native';
import ResultIMC from './ResultIMC';
import styles from './style';

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState('Preencha o peso e altura');
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState('Calcular');
  const [errorMessage, setErrorMessage] = useState(null);
  const [imcList, setImcList] = useState([]);

  function imcCalculator() {
    let heightFormat = height.replace(',', '.');
    let totalImc = (weight / (heightFormat * heightFormat)).toFixed(2);
    setImcList(arr => [...arr, {id: new Date().getTime(), imc: totalImc}]);
    setImc(totalImc);
  }

  function validationImc() {
    if (weight != null && height != null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc('Seu IMC é igual: ');
      setTextButton('Calcular novamente');
      setErrorMessage(null);
    } else {
      verificationImc();
      setImc(null);
      setTextButton('Calcular');
      setMessageImc('Preencha o peso e altura');
    }
  }

  function verificationImc() {
    if (imc == null) {
      Vibration.vibrate();
      setErrorMessage('campo obrigatório');
    }
  }
  return (
    <View style={styles.formContext}>
      {imc == null ? (
        <Pressable onPress={Keyboard.dismiss} style={styles.form}>
          <Text style={styles.formLabel}>Altura</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
            style={styles.formInput}
            onChangeText={setHeight}
            value={height}
            keyboardType="numeric"
            placeholder="Ex. 1.75"
          />
          <Text style={styles.formLabel}>Peso</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
            style={styles.formInput}
            onChangeText={setWeight}
            value={weight}
            keyboardType="numeric"
            placeholder="Ex. 72.352"
          />
          <TouchableOpacity
            style={styles.buttonCalculator}
            onPress={() => validationImc()}>
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
          </TouchableOpacity>
        </Pressable>
      ) : (
        <View style={styles.exhibitionResultImc}>
          <ResultIMC messageResultIMC={messageImc} ResultIMC={imc} />
          <TouchableOpacity
            style={styles.buttonCalculator}
            onPress={() => validationImc()}>
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
          </TouchableOpacity>
        </View>
      )}
      <FlatList
      showsVerticalScrollIndicator={false}
        data={imcList.reverse()}
        renderItem={({item}) => {
          return (
            <Text style={styles.resultImcItem}>
              <Text style={styles.textResultItemList}>Resultado IMC = </Text>
              {item.imc}
            </Text>
          );
        }}
        keyExtractor={item => {
          item.id;
        }}
      />
    </View>
  );
}
