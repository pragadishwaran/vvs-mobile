
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, Button, StyleSheet, FlatList, View, Image, TouchableOpacity,
  Linking
 } from 'react-native';

const EventCard = ({ event }) => {
  const handleLocationPress = () => {
    if (event.location) {
      Linking.openURL(event.location);
    }
  };
  return (
    <View style={styles.card}>
      {/* Date Section */}
      <View style={styles.dateContainer}>
        <Text style={styles.date}>{event.date}</Text>
      </View>

      {/* Content Section */}
      <View style={styles.content}>
        <Image source={
          event.raguanna
            ? require('../assets/raguanna.jpeg') // if true
            : require('../assets/anna.jpeg') // if false
        } style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.type}>{event.type}</Text>
          <TouchableOpacity onPress={handleLocationPress}>
            <Text style={styles.title}>{event.title}</Text>
          </TouchableOpacity>
          <Text style={styles.time}>{event.time}</Text>
          {/* New Location Link */}
          {/* {event.location && (
            <TouchableOpacity onPress={handleLocationPress}>
              <Text style={styles.locationLink}>Location</Text>
            </TouchableOpacity>
          )} */}
        </View>
      </View>
    </View>
  );
};

export default function Satsang() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Example JSON data (can be replaced with API or local file)
    const jsonData = [
      {
        id: "1",
        date: "OCT 22",
        type: "Pravachan",
        title: "Sri Bindavanam Trichy",
        raguanna: true,
        time: "6:20 PM - 11:20 AM",
        image: "https://via.placeholder.com/100x80.png?text=Movie",
        location: "https://maps.app.goo.gl/4DVDoqU6AxFJGhqS7"
      },
      {
        id: "2",
        date: "Nov 10",
        type: "Keerthan",
        raguanna: false,
        title: "Vittal vihar kadayanallur",
        time: "6:20 PM - 11:20 AM",
        image: "https://via.placeholder.com/100x80.png?text=Fight"
      },
      {
        id: "3",
        date: "Nov 14",
        type: "Pravachan",
        raguanna: true,
        title: "Krishna Gana sabha, chennai",
        time: "6:20 PM - 11:20 AM",
        image: "https://via.placeholder.com/100x80.png?text=Concert",
        location: "https://maps.app.goo.gl/4DVDoqU6AxFJGhqS7"
      }
    ];
    setEvents(jsonData);
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <EventCard event={item} />}
        contentContainerStyle={{ padding: 10 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginVertical: 8,
    borderRadius: 8,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    overflow: "hidden"
  },
  dateContainer: {
    backgroundColor: "#f4b000",
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    width: 70
  },
  date: {
    color: "#000",
    fontWeight: "bold",
    textAlign: "center"
  },
  content: {
    flex: 1,
    flexDirection: "row",
    padding: 10
  },
  image: {
    width: 80,
    height: 60,
    borderRadius: 6,
    marginRight: 10
  },
  details: {
    flex: 1
  },
  type: {
    color: "#8a2be2",
    fontSize: 12,
    fontWeight: "600"
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
    marginVertical: 2,
    color: '#1E90FF',
    textDecorationLine: 'underline'
  },
  info: {
    fontSize: 12,
    color: "#555"
  },
  time: {
    fontSize: 12,
    color: "#333",
    marginTop: 2
  },
  locationLink: {
    fontSize: 16,
    color: '#1E90FF',
    textDecorationLine: 'underline'
  }
});
