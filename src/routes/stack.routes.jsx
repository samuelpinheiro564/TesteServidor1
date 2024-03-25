import {  createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "../screens/Home";
import CriarPlanetas from "../screens/CriarPlanetas";
import Planetas from "../screens/Planetas";
import Descricao from "../screens/Descricao";
import { planet } from '../data/UserPlanet';



const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    
    <Stack.Navigator>
           {/* <Stack.Screen
        name="Home"
        component={Home}
        options={{
          StackBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          StackBarLabel: "Inicial",
          StackBarActiveTintColor: "#131313",
          StackBarInactiveTintColor: "#D6D6D6",
        }}
      /> */}
       <Stack.Screen
        name="CriarPlanetas"
        component={CriarPlanetas}
        initialParams={{ planet: null, edit : false }}
        options={{
          StackBarIcon: ({ focused }) => (
            <Feather
              name="list"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          StackBarLabel: "Cadastro",
          StackBarActiveTintColor: "#131313",
          StackBarInactiveTintColor: "#D6D6D6",
        }}
        
      /> 
            <Stack.Screen
        name="Descricao"
        component={Descricao}
        initialParams={{ data: planet }}
        options={{
          StackBarIcon: ({ focused }) => (
            <Feather
              name="list"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          StackBarLabel: "Descricao",
          StackBarActiveTintColor: "#131313",
          StackBarInactiveTintColor: "#D6D6D6",
        }}
        
      /> 

        <Stack.Screen
        name="Planetas"
        component={Planetas}
        initialParams={{ data: planet }}
        options={{
          StackBarIcon: ({ focused }) => (
            <Feather
              name="users"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          StackBarLabel: "Usuários",
          StackBarActiveTintColor: "#131313",
          StackBarInactiveTintColor: "#D6D6D6",
        }}
      />
          
    

    </Stack.Navigator>
  );
};

export default StackRoutes;
