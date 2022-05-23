import React from 'react';
import {Text, View, Share, TouchableOpacity} from 'react-native';
import styles from './style';

export default function ResultIMC(props) {
  const onShare = async () => {
    const result = await Share.share({
      message: 'Meu imc hoje é: ' + props.ResultIMC,
    });
  };

  return (
    <View style={styles.resultImc}>
      <View style={styles.boxShareButton}>
        <Text style={styles.information}>{props.messageResultIMC}</Text>
        <Text style={styles.numberImc}>{props.ResultIMC}</Text>
        <TouchableOpacity onPress={() => onShare()} style={styles.shared}>
          <Text style={styles.sharedText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
