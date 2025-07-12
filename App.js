import 'react-native-gesture-handler';
import * as React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, FlatList, Alert } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Data dummy untuk Barang
const dummyBarang = [
  { id: '1', nama: 'Produk A', stok: 20, harga: 50000 },
  { id: '2', nama: 'Produk B', stok: 15, harga: 35000 },
  { id: '3', nama: 'Produk C', stok: 8, harga: 45000 },
];

// Data dummy untuk History
const dummyHistory = [
  { id: '1', tanggal: '12 Jul 2025 14:30', jenis: 'Penjualan', detail: '5 pcs Produk A', status: 'Selesai' },
  { id: '2', tanggal: '11 Jul 2025 10:00', jenis: 'Pembelian', detail: '10 pcs Produk B', status: 'Pending' },
  { id: '3', tanggal: '10 Jul 2025 09:15', jenis: 'Penjualan', detail: '2 pcs Produk C', status: 'Selesai' },
];

// Data dummy untuk UMKM
const dummyUMKM = {
  nama: 'Toko FastMove',
  alamat: 'Jl. Contoh No.123, Kota X',
  kontak: '0812-3456-7890',
  produk: ['Produk A', 'Produk B'],
  omzetBulanan: 50000000,
  produkTerlaris: 'Produk A',
};

function DashboardScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📊 FastMove - Dashboard</Text>
      <TouchableOpacity style={[styles.button, { backgroundColor: '#4CAF50' }]} onPress={() => navigation.navigate('Barang')}>
        <Text style={styles.buttonText}>📦 Barang</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: '#2196F3' }]} onPress={() => navigation.navigate('History')}>
        <Text style={styles.buttonText}>📖 History</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: '#FF9800' }]} onPress={() => navigation.navigate('UMKM')}>
        <Text style={styles.buttonText}>🏪 UMKM Kecil</Text>
      </TouchableOpacity>
    </View>
  );
}

function BarangScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Barang</Text>
      <FlatList
        data={dummyBarang}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listTitle}>{item.nama}</Text>
            <Text>Stok: {item.stok}</Text>
            <Text>Harga: Rp{item.harga.toLocaleString()}</Text>
          </View>
        )}
      />
      <View style={{ marginTop: 20 }}>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#9C27B0' }]} onPress={() => Alert.alert('Fungsi tambah barang belum tersedia')}>
          <Text style={styles.buttonText}>+ Tambah Barang Baru (Dummy)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function HistoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>History</Text>
      <FlatList
        data={dummyHistory}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listTitle}>{item.tanggal}</Text>
            <Text>{item.jenis} - {item.detail}</Text>
            <Text>Status: {item.status}</Text>
          </View>
        )}
      />
    </View>
  );
}

function UMKMScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>UMKM Kecil</Text>
      <Text style={styles.umkmInfo}><Text style={{ fontWeight: 'bold' }}>Nama UMKM:</Text> {dummyUMKM.nama}</Text>
      <Text style={styles.umkmInfo}><Text style={{ fontWeight: 'bold' }}>Alamat:</Text> {dummyUMKM.alamat}</Text>
      <Text style={styles.umkmInfo}><Text style={{ fontWeight: 'bold' }}>Kontak:</Text> {dummyUMKM.kontak}</Text>

      <Text style={[styles.header, { marginTop: 20 }]}>Produk/Jasa:</Text>
      {dummyUMKM.produk.map((p, i) => (
        <Text key={i} style={styles.umkmInfo}>- {p}</Text>
      ))}

      <Text style={[styles.header, { marginTop: 20 }]}>Statistik:</Text>
      <Text style={styles.umkmInfo}>Omzet Bulanan: Rp{dummyUMKM.omzetBulanan.toLocaleString()}</Text>
      <Text style={styles.umkmInfo}>Produk Terlaris: {dummyUMKM.produkTerlaris}</Text>

      <View style={{ marginTop: 20 }}>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#3F51B5' }]} onPress={() => Alert.alert('Fungsi update profil belum tersedia')}>
          <Text style={styles.buttonText}>Update Profil (Dummy)</Text>
        </TouchableOpacity>
        <View style={{ height: 10 }} />
        <TouchableOpacity style={[styles.button, { backgroundColor: '#009688' }]} onPress={() => Alert.alert('Fungsi tambah produk belum tersedia')}>
          <Text style={styles.buttonText}>Tambah Produk Baru (Dummy)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Barang" component={BarangScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
        <Stack.Screen name="UMKM" component={UMKMScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff', justifyContent: 'center' },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 30, textAlign: 'center', color: '#333' },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 10, color: '#222' },
  listItem: { padding: 15, borderBottomWidth: 1, borderColor: '#ddd' },
  listTitle: { fontSize: 18, fontWeight: '600' },
  umkmInfo: { fontSize: 16, marginBottom: 5 },

  // Tombol dashboard
  button: {
    borderRadius: 360,
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginVertical: 10,
    elevation: 4, // shadow android
    shadowColor: '#000', // shadow ios
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
  },
});
