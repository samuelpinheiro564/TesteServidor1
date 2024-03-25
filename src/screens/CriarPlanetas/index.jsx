import { Text, View,TouchableOpacity,TextInput } from "react-native";
import styles from "./styles";
import {useNavigation} from "@react-navigation/native";
import { useState, useEffect } from "react";
import Title from "../../components/Title";
import planetsRepository from "../../Models/planet/PlanetRepository";
import Planet from "../../Models/planet/Planet";


export default function CriarPlanetas({ route }) {
  
  let {criar,editar} = route.params;

  const[nome,setNome]=useState("");
  const[data,setData]=useState("");
  const[cor1,setCor1]=useState("");
  const[cor2,setCor2]=useState("");
  const[populacao,setPopulacao]=useState("");
  const[loc,setLoc]=useState("");
  const[nome_gov,setNome_gov]=useState("");
  const[titulo_gov,setTitulo_gov]=useState("");

  const[atualizar,setAtualizar]=useState(editar);

  const navigation = useNavigation();

  useEffect(()=>{
if(editar){
  setNome(criar.nome);
  setData(criar.data);
  setCor1(criar.cor1);
  setCor2(criar.cor2);
  setPopulacao(criar.populacao);
  setLoc(criar.loc);
  setNome_gov(criar.nome_gov);
  setTitulo_gov(criar.titulo_gov);

  setAtualizar(true);
}else{
  LimparInputs();
}
  },[criar,editar]);

  const UserAction = () =>{
    if(atualizar){
      planetsRepository.update(criar.id,nome,data,cor1,cor2,populacao,loc,nome_gov,titulo_gov)
      LimparInputs();
    }
    else{
      const newPlanet= new Planet(nome,data,cor1,cor2,populacao,loc,nome_gov,titulo_gov);
      LimparInputs();
    }
    navigation.navigate('Planetas');
  }
  const LimparInputs = () => {
    setAtualizar = (false);
    editar = false;
    setNome('');
    setData('');
    setCor1('');
    setCor2('');
    setPopulacao('');
    setLoc('');
    setNome_gov('');
    setTitulo_gov('');
  }


  return (
    <View style={styles.container}>
      <Title title={atualizar ?"Editar Planeta" : "Crear Planeta"} />

<TextInput 
placeholder='digite o nome do planeta'
onChangeText={setNome}
value={nome}
/>
<TextInput 
placeholder='digite o nome do planeta'
onChangeText={setData}
value={data}
/>
<TextInput 
placeholder='digite o nome do planeta'
onChangeText={setCor1}
value={cor1}
/>
<TextInput 
placeholder='digite o nome do planeta'
onChangeText={setCor2}
value={cor2}
/>
<TextInput 
placeholder='digite o nome do planeta'
onChangeText={setPopulacao}
value={populacao}
/>
<TextInput 
placeholder='digite o nome do planeta'
onChangeText={setLoc}
value={loc}
/>
<TextInput 
placeholder='digite o nome do planeta'
onChangeText={setNome_gov}
value={nome_gov}
/>
<TextInput 
placeholder='digite o nome do planeta'
onChangeText={setTitulo_gov}
value={titulo_gov}
/>
<TouchableOpacity  onPress={UserAction}>
        <Text>{atualizar ? "Salvar Alterações" : "Criar Plaeta"}</Text>
      </TouchableOpacity>

      {atualizar && (
        <TouchableOpacity  onPress={LimparInputs}>
          <Text>Cancelar Edição</Text>
        </TouchableOpacity>
      )}
   
    </View>
  );
}
