import { View, ImageBackground, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TouchButton from "../../components/TouchButton"
import styles from "./styles";
import Title from "../../components/Title";

export default function Comandante() {
  const navigation = useNavigation();
  return (
 
  
    <View style={styles.container}>
    <ImageBackground
          source={require("../../../assets/fotogalaxia1.jpg")}
          style={styles.imageBackground}
        >   <ScrollView>

    
    <Title title="Conquistador" />
    
            <TouchButton
            route="CriarPlanetas"
            title="Crie novos Planetas"
/>      
<TouchButton
            route="Planetas"
            title="Veja os Planetas Criados"
/>      
<TouchButton
            route="Conquistador"
            title="Conheça nosso Conquistador"
/>      


</ScrollView>
    </ImageBackground>
    </View>
 
  );
}
