import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

type Product = {
    id: string;
    name: string;
    price: number;
    description: string;
    category: string;
    img: any;
};
const products = [
    {
        id: '1',
        name: 'Pinarello',
        price: 1800,
        description:
            'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
        category: 'Roadbike',
        img: require('../assets/images/1.png'),
    },
    {
        id: '2',
        name: 'Pina Mountai',
        price: 1700,
        description:
            'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
        category: 'Mountain',
        img: require('../assets/images/2.png'),
    },
    {
        id: '3',
        name: 'Pina Bike',
        price: 1500,
        description:
            'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
        category: 'Mountain',
        img: require('../assets/images/3.png'),
    },
    {
        id: '4',
        name: 'Pinarello',
        price: 1900,
        description:
            'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
        category: 'Roadbike',
        img: require('../assets/images/4.png'),
    },
    {
        id: '5',
        name: 'Pinarello',
        price: 2700,
        description:
            'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
        category: 'Roadbike',
        img: require('../assets/images/5.png'),
    },
    {
        id: '6',
        name: 'Pinarello',
        price: 1350,
        description:
            'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
        category: 'Roadbike',
        img: require('../assets/images/6.png'),
    },
];

export default function ProductList() {
    const [like, setLike] = useState<Record<string, boolean>>({});
    const [selectedCategory, setSelectedCategory] = useState('All');
    const router = useRouter();

    const toggleLike = (id: string) => {
        setLike((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const filteredProducts =
        selectedCategory === 'All'
            ? products
            : products.filter((p) => p.category === selectedCategory);

    return (
        <View style={styles.container}>
            <View style={styles.filterRow}>
                {['All', 'Roadbike', 'Mountain'].map((cat) => (
                    <TouchableOpacity
                        key={cat}
                        style={styles.filterBtn}
                        onPress={() => setSelectedCategory(cat)}>
                        <Text
                            style={{
                                color:
                                    selectedCategory === cat
                                        ? '#E94141'
                                        : 'gray',
                                textAlign: 'center',
                            }}>
                            {cat}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <FlatList
                data={filteredProducts}
                numColumns={2}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.com}
                        onPress={() =>
                            router.push({
                                pathname: '/product-details',
                                params: { product: JSON.stringify(item) },
                            })
                        }>
                        <TouchableOpacity
                            style={styles.likeBtn}
                            onPress={() => toggleLike(item.id)}>
                            <AntDesign
                                name={like[item.id] ? 'heart' : 'hearto'}
                                color="#000"
                                size={20}
                            />
                        </TouchableOpacity>
                        <Image
                            source={item.img}
                            style={{ width: 110, height: 105 }}
                            resizeMode="contain"
                        />
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: '500',
                                color: 'gray',
                            }}>
                            {item.name}
                        </Text>
                        <Text style={{ fontSize: 16, fontWeight: '600' }}>
                            ${item.price}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'white', padding: 8 },
    com: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7BA8326',
        height: 200,
        width: 150,
        margin: 10,
        borderRadius: 30,
        position: 'relative',
    },
    likeBtn: {
        position: 'absolute',
        top: 8,
        left: 8,
    },
    filterBtn: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#E94141',
        width: 100,
        textAlign: 'center',
        padding: 5,
        margin: 10,
    },
    filterRow: {
        flexDirection: 'row',
    },
});
