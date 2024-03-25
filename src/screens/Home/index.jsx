import { View,ImageBackground} from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import Title from "../../components/Title";
import { ScrollView } from "react-native-gesture-handler";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      
      <ScrollView>
      <ImageBackground source={require('../../../assets/fotogalaxia1.jpg')} style={styles.imageBackground}>
  
           <Title title="Home " />

           </ImageBackground>
      </ScrollView>
    </View>
  );
}
