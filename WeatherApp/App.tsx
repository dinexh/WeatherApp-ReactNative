import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';

interface WeatherData {
  location: {
    name: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
    wind_kph: number;
    humidity: number;
  };
}

const API_KEY = '33ec03da15964a488c9155040250102';  
const BASE_URL = 'https://api.weatherapi.com/v1/current.json';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState('');

  // Fetch weather data
  const fetchWeather = () => {
    if (!city) return;

    axios
      .get(`${BASE_URL}?key=${API_KEY}&q=${city}&aqi=no`)
      .then((response) => {
        setWeatherData(response.data);
        setError('');
      })
      .catch((err) => {
        setError('City not found');
        setWeatherData(null);
      });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Weather Forecast</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter City"
          placeholderTextColor="#666"
          value={city}
          onChangeText={setCity}
        />
        <TouchableOpacity style={styles.button} onPress={fetchWeather}>
          <Text style={styles.buttonText}>Get Weather</Text>
        </TouchableOpacity>
      </View>
      
      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        weatherData && (
          <View style={styles.weatherInfo}>
            <Text style={styles.cityName}>{weatherData.location.name}</Text>
            <Image
              style={styles.weatherIcon}
              source={{ uri: `https:${weatherData.current.condition.icon}` }}
            />
            <Text style={styles.temp}>{weatherData.current.temp_c}°C</Text>
            <Text style={styles.condition}>{weatherData.current.condition.text}</Text>
            <View style={styles.detailsContainer}>
              <Text style={styles.details}>
                Wind: {weatherData.current.wind_kph} km/h
              </Text>
              <Text style={styles.details}>
                Humidity: {weatherData.current.humidity}%
              </Text>
            </View>
          </View>
        )
      )}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Designed and Developed by Dinesh korukonda</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: '#111111',
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    letterSpacing: 1,
  },
  inputContainer: {
    padding: 20,
  },
  input: {
    height: 55,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    marginBottom: 15,
    color: '#000000',
  },
  button: {
    backgroundColor: '#1e90ff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  weatherInfo: {
    margin: 20,
    padding: 25,
    backgroundColor: '#111111',
    borderRadius: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333333',
  },
  cityName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 15,
  },
  weatherIcon: {
    width: 150,
    height: 150,
    marginVertical: 20,
  },
  temp: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#ffffff',
    marginVertical: 10,
  },
  condition: {
    fontSize: 24,
    color: '#cccccc',
    marginBottom: 20,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#333333',
  },
  details: {
    fontSize: 18,
    color: '#cccccc',
    marginHorizontal: 10,
  },
  errorText: {
    fontSize: 18,
    color: '#ff4444',
    textAlign: 'center',
    marginTop: 20,
    backgroundColor: '#111111',
    padding: 20,
    margin: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#333333',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#111111',
    marginTop: 'auto',
    borderTopWidth: 1,
    borderTopColor: '#333333',
  },
  footerText: {
    fontSize: 14,
    color: '#cccccc',
    textAlign: 'center',
  },
});

export default WeatherApp;
