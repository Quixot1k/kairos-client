import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialIcons} from "@expo/vector-icons";
import SessionScreen from "../screens/shared/SessionScreen";
import SettingScreen from "../screens/shared/SettingScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import GymListScreen from "../screens/trainer/GymListScreen";
import TrainerListScreen from "../screens/client/TrainerListScreen";
import ClientListScreen from "../screens/trainer/ClientListScreen";
import ProfileUpdateScreen from "../screens/shared/ProfileUpdateScreen";
import IntSpecScreen from "../screens/shared/IntSpecScreen";
import SessionDetailScreen from "../screens/shared/SessionDetailScreen";
import ClientDetailScreen from "../screens/trainer/ClientDetailScreen";
import TrainerDetailScreen from "../screens/client/TrainerDetailScreen";
import ScheduleScreen from "../screens/shared/ScheduleScreen";
import TrainerLocationScreen from "../screens/trainer/TrainerLocationScreen";
import {useStore} from "../store";

// Dashboard
const NestedDashboard = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{
      headerBackTitleVisible: false
    }}>
      <Stack.Screen
        name="Session"
        component={SessionScreen}
        options={{headerTitle: "Session"}}
      />
      <Stack.Screen
        name="ScheduleScreen"
        component={ScheduleScreen}
        options={{headerTitle: "Schedule"}}
      />
      <Stack.Screen
        name="GymListScreen"
        component={GymListScreen}
        options={{headerTitle: "Gym"}}
      />
      <Stack.Screen
        name="TrainerListScreen"
        component={TrainerListScreen}
        options={{headerTitle: "Trainer"}}
      />
      <Stack.Screen
        name="ClientListScreen"
        component={ClientListScreen}
        options={{headerTitle: "Client"}}
      />
      <Stack.Screen
        name="SessionDetailScreen"
        component={SessionDetailScreen}
        options={{headerTitle: "Session Detail"}}
      />
      <Stack.Screen
        name="ClientDetailScreen"
        component={ClientDetailScreen}
        options={{headerTitle: "Client Detail"}}
      />
      <Stack.Screen
        name="TrainerDetailScreen"
        component={TrainerDetailScreen}
        options={{headerTitle: "Trainer Detail"}}
      />
    </Stack.Navigator>
  );
}
// Settings
const NestedSettings = () => {
  const {role} = useStore((state) => state);
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerBackTitleVisible: false}}>
      <Stack.Screen
        name="Settings"
        component={SettingScreen}
        options={{headerTitle: "Settings"}}
      />
      <Stack.Screen
        name="ProfileUpdateScreen"
        component={ProfileUpdateScreen}
        options={{
          title: "Update your profile",
        }}
      />
      <Stack.Screen
        name="IntSpecUpdateScreen"
        component={IntSpecScreen}
        options={{
          title: "Update " + (role === "client" ? "Interest" : "Speciality"),
        }}
      />
      <Stack.Screen
        name="TrainerLocationUpdateScreen"
        component={TrainerLocationScreen}
        options={{
          title: "Update Training Locations",
        }}
      />
    </Stack.Navigator>
  );
}

export default function TabNavigator() {
  const Tab = createBottomTabNavigator();
  return (<Tab.Navigator
    screenOptions={{
      // tabBarShowLabel: false,
      headerShown: false,
      tabBarActiveTintColor: "#000", tabBarInactiveTintColor: "gray",
    }}
  >
    <Tab.Screen
      name="NestedDashboard"
      component={NestedDashboard}
      options={{
        tabBarLabel: "Home",
        tabBarIcon: ({color}) => (<MaterialIcons name="home" size={26} color={color}/>),
      }}
    />
    <Tab.Screen
      name="NestedSettings"
      component={NestedSettings}
      options={{
        tabBarLabel: "Settings", tabBarIcon: ({color}) => (<MaterialIcons name="settings" size={26} color={color}/>),
      }}
    />
  </Tab.Navigator>);
}
