import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";

type PropsApi = {
  id: string;
  name: string;
  description: string;
  year: number;
  rate: number;
  director: string;
};

interface PropsComponent {
  comovaireceber: PropsApi;
}

export function CardFlatlist({ comovaireceber }: PropsComponent) {
  return (
    <View style={styles.containerInfo}>
      <Text style={styles.name}>{comovaireceber.name}</Text>
      <Text style={styles.description}>{comovaireceber.description}</Text>
      <View style={styles.infoContainer}>
        <View style={styles.infoColumn}>
          <Text style={styles.infoLabel}>Year</Text>
          <Text style={styles.infoValue}>{comovaireceber.year}</Text>
        </View>
        <View style={styles.infoColumn}>
          <Text style={styles.infoLabel}>Rate</Text>
          <Text style={styles.infoValue}>{comovaireceber.rate}</Text>
        </View>
        <View style={styles.infoColumn}>
          <Text style={styles.infoLabel}>Director</Text>
          <Text style={styles.infoValue}>{comovaireceber.director}</Text>
        </View>
      </View>
    </View>
  );
}
