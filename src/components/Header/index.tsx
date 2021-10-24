import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { styles } from './styles';
import { UserPhoto } from '../UserPhoto/index'
import LogoSvg from '../../assets/logo.svg'

export function Header() {
  return (
    <View style={styles.container}>
      <LogoSvg />
      <UserPhoto imageUri={`https://github.com/gabrielmelogm.png`} />
      <TouchableOpacity>
        <Text style={styles.logoutText}>
          Sair
        </Text>
      </TouchableOpacity>
    </View>
  );
}