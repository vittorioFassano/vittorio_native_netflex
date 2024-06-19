import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { CardFlatlist } from "../../Components/CardFlatlist";
import { TextInputComponent } from "../../Components/TextInput";
import { styles } from "./style";

type PropsApi = {
  id: string;
  name: string;
  description: string;
  year: number;
  rate: number;
  director: string;
};

export function Home() {
  const [dataApi, setDataApi] = useState<PropsApi[]>([]);
  const [filterName, setFilterName] = useState<string>("");

  const loadApi = async () => {
    const url = "https://6671caa6e083e62ee43d1d06.mockapi.io/movies";

    try {
      const response = await fetch(url);
      const data = await response.json();
      setDataApi(data);
    } catch (error) {
      console.log("Erro ao buscar a api", error);
    }
  };

  const handleSearch = (name: string) => {
    setFilterName(name);
  };

  const filteredData = dataApi.filter((item) => {
    const inputName = filterName.toLowerCase();
    const name = item.name.toLowerCase();
    const description = item.description.toLowerCase();
    const director = item.director.toLowerCase();
    const year = item.year.toString();
    const rate = item.rate.toString();

    return (
      name.includes(inputName) ||
      description.includes(inputName) ||
      director.includes(inputName) ||
      year.includes(inputName) ||
      rate.includes(inputName)
    );
  });

  useEffect(() => {
    loadApi();
  }, []);

  return (
    <View style={styles.container}>
      <TextInputComponent
        placeholder="Explore nosso catálogo ..."
        onChangeValue={handleSearch}
      />

      <FlatList
        data={filteredData}
        renderItem={({ item }) => <CardFlatlist comovaireceber={item} />}
        keyExtractor={(item) => item.id}
      />

      {dataApi.length === 0 && <Text>Loading...</Text>}
    </View>
  );
}
