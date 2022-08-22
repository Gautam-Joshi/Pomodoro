import {Text} from 'react-native';
import {styles} from "../stylesheet"
import {useFonts} from 'expo-font'

export default function HelloUser(props) {
  const [fontsLoaded] = useFonts({
    'InterBlack': require('../inter/InterBlack.otf')
  })

	return <Text style={styles.textLabel}>Hello, {props.user}!</Text>
}