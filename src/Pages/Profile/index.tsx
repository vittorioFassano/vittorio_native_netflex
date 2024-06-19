import React from "react";
import { Button, Image, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ButtonComponent } from "../../Components/ButtonComponent";
import Banner from "../../Assets/banner.webp";
import { styles } from "./style";

export function Profile() {
  const navigator = useNavigation();

  const handleLogout = () => {
    navigator.navigate("StackLogin", { name: "Login" });
  };
  return (
    <View style={styles.container}>
      <Image style={styles.backLogo} source={Banner} alt="Foto de background" />
      <ButtonComponent title="Trocar Usuário" handleOnChange={handleLogout} />
    </View>
  );
}
