import React from 'react';

import {
  Image
} from 'react-native';
import AvatarImg from '../../assets/avatar.png'
import { styles } from './styles';

const SIZES = {
  SMALL: {
    containerSize: 32,
    avatarSize: 28
  },
  NORMAL: {
    containerSize: 48,
    avatarSize: 42
  }
}

type Props = {
  imageUri: string | undefined,
  sizes?: 'SMALL' | 'NORMAL'
}

const AvatarDefault = Image.resolveAssetSource(AvatarImg).uri

export function UserPhoto({ imageUri, sizes = 'NORMAL' }: Props) {
  const { containerSize, avatarSize } = SIZES[sizes]
  return (
    <Image
      source={{ uri: imageUri || AvatarDefault }}
      style={[
        styles.avatar,
        {
          width: avatarSize,
          height: avatarSize,
          borderRadius: avatarSize / 2
        }
      ]}
    />
  );
}