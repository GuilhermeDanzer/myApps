import { Audio } from 'expo-av';

const buttonPress = new Audio.Sound(require('./tatiltadocabelorosa.mp3'), error => console.log(error));
export const playButtonPress = () => {
  buttonPress.play((success) => buttonPress.reset());
}

