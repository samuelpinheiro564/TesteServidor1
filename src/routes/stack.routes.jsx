import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import CriarPlaneta from "../screens/CriarPlaneta";


const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen
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
      />


      <Stack.Screen
        name="CriarPlaneta"
        component={CriarPlaneta}
        options={{
          StackBarIcon: ({ focused }) => (
            <Feather
              name="list"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          StackBarLabel: "Categorias",
          StackBarActiveTintColor: "#131313",
          StackBarInactiveTintColor: "#D6D6D6",
        }}
      />
    </Stack.Navigator>
  );
};

export default StackRoutes;
