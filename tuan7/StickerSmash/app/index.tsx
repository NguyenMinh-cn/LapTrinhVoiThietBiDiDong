import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                A premium online store for sporter and their stylish choice
            </Text>
            <View style={styles.body}>
                <View
                    style={{
                        backgroundColor: '#E941411A',
                        height: 300,
                        width: 300,
                        padding: 20,
                        borderRadius: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Image
                        source={require('../assets/images/bifour.png')}
                        style={{ height: 200, width: 220, padding: 20 }}
                    />
                </View>
                <Text style={[styles.title, { paddingHorizontal: 90 }]}>
                    POWER BIKE SHOP
                </Text>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => router.push('/product-list')}>
                <Text
                    style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 20,
                        textAlign: 'center',
                    }}>
                    Get Started
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 8,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
    button: {
        backgroundColor: '#E94141',
        marginHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 60,
    },
    body: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 20,
    },
});
