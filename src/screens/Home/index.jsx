import { View, ImageBackground, Text, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import Title from "../../components/Title";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView>
        <Title title="Conquistador" />
        <ImageBackground
          source={require("../../../assets/fotogalaxia1.jpg")}
          style={styles.imageBackground}
        >
          <Title style={styles.titulo} title="Samuel Pinheiro" />
          <Image
            source={require("../../../assets/gerenciamento.jpg")}
            style={styles.imagem_conquistador}
          />

          <View style={styles.containerIcons}>
            <Image
              style={styles.icons}
              source={require("../../../assets/html.png")}
            />
            <Image
              style={styles.icons}
              source={require("../../../assets/css-3.png")}
            />
            <Image
              style={styles.icons}
              source={require("../../../assets/nodejs.png")}
            />
            <Image
              style={styles.icons}
              source={require("../../../assets/react.png")}
            />
            <Image
              style={styles.icons}
              source={require("../../../assets/js.png")}
            />
            <Image
              style={styles.icons}
              source={require("../../../assets/canva.png")}
            />
            <Image
              style={styles.icons}
              source={require("../../../assets/excel.png")}
            />
          </View>
          
          <Text style={styles.text}>
            Atualmente sou um estudante do Novo Ensino Medio onde estudamos
            tanto no Sesi quanto no Senai com o ensino tecnico.
          </Text>

          <Title style={styles.titulo} title="Objetivo" />

          <Text style={styles.text}>
            Desenvolver minhas habilidades e conhecimentos na area de
            TI, e me tornar um profissional de sucesso.
          </Text>
          <Title style={styles.titulo} title="Habilidades" />

          <Text style={styles.text}>
             Boa comunicação, trabalho em
            equipe, organização e responsabilidade.
          </Text>
          <Title style={styles.titulo} title="Formação" />
          <Text style={styles.text}> Ensino Medio Andamento</Text>
          <Text style={styles.text}> Desenvolvimento de Sistemas</Text>
          <Title style={styles.titulo} title="Contato" />
          <Text style={styles.text}>Linkedin: </Text>
          <Text style={styles.text}>GitHub: </Text>
          <Text style={styles.text}>Telefone: +55 (19) 99581-8492;</Text>
          <Text style={styles.text}>
            Email: samuel.pinheiro2@aluno.senai.br
          </Text>
        </ImageBackground>
      </ScrollView>
    </View>
  );
}
