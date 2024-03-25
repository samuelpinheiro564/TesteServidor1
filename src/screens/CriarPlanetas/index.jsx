import { Text, View,TouchableOpacity,TextInput } from "react-native";
import styles from "./styles";
import {useNavigation} from "@react-navigation/native";
import { useState, useEffect } from "react";
import planetsRepository from "../../Models/planet/PlanetRepository";
import Planet from "../../Models/planet/Planet";
import Title from "../../components/Title";


export default function CriarPlanetas({ route }) {
  let {planet,edit} = route.params;

  const[nome,setNome]=useState("");
  const[data,setData]=useState("");
  const[cor1,setCor1]=useState("");
  const[cor2,setCor2]=useState("");
  const[populacao,setPopulacao]=useState("");
  const[loc,setLoc]=useState("");
  const[nome_gov,setNome_gov]=useState("");
  const[titulo_gov,setTitulo_gov]=useState("");

  const[atualizar,setAtualizar]=useState(edit);

  const navigation = useNavigation();

  useEffect(()=>{
if(edit){
  setNome(planet.nome);
  setData(planet.data);
  setCor1(planet.cor1);
  setCor2(planet.cor2);
  setPopulacao(String(planet.populacao));
  setLoc(planet.loc);
  setNome_gov(planet.nome_gov);
  setTitulo_gov(planet.titulo_gov);
setAtualizar(true);
}else{
  ClearInputs();
}
  },[planet,edit]);

  const UserAction = () =>{
    if(edit){
      planetsRepository.update(planet.id,nome,data,cor1,cor2,populacao,loc,nome_gov,titulo_gov != "")
      ClearInputs();
    }
    else{
      const newPlanet= new Planet(nome,data,cor1,cor2,populacao,loc,nome_gov,titulo_gov);
      planetsRepository.add(newPlanet);
      ClearInputs();
    }
    navigation.navigate('Planetas');
  };
  const ClearInputs = () => {
    setAtualizar(false);
    edit = false;
    setNome("");
    setData("");
    setCor1("");
    setCor2("");
    setPopulacao("");
    setLoc("");
    setNome_gov("");
    setTitulo_gov("");
  };

  return (
    <View style={styles.container}>
      <Title title={atualizar ?"editar Planeta" : "Criar Planeta"} />

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
        <Text>{atualizar ? "Salvar Alterações" : "Criar Planeta"}</Text>
      </TouchableOpacity>

      {atualizar && (
        <TouchableOpacity  onPress={ClearInputs}>
          <Text>Cancelar Edição</Text>
        </TouchableOpacity>
      )}
   
    </View>
  );
}


