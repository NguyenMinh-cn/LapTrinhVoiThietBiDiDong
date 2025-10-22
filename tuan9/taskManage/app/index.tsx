import { useState, useEffect, useCallback } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from 'react-native';
import {
  SQLiteProvider,
  useSQLiteContext,
  type SQLiteDatabase,
} from 'expo-sqlite';
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from '@expo/vector-icons/Ionicons';
interface ItemEntity {
  id: number;
  done: boolean;
  value: string;
}
import JobItem from "../components/JobItem";
export default function Index() {
  return (
    <SQLiteProvider databaseName="db.db" onInit={migrateDbIfNeeded}>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image
              source={{ uri: "https://i.pinimg.com/736x/d4/92/e2/d492e2e24f062340335c4c59f1f18d81.jpg" }}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.name}>Hi "Twinkle"</Text>
              <Text style={styles.subtitle}>Have a great day ahead</Text>
            </View>
            
          </View>
          <Main />
        </View>
        
      </SafeAreaView>
      
    </SQLiteProvider>
  );
}

function Main() {
  const db = useSQLiteContext();
  const [text, setText] = useState('');
  const [todoItems, setTodoItems] = useState<ItemEntity[]>([]);
  const [doneItems, setDoneItems] = useState<ItemEntity[]>([]);

  const refetchItems = useCallback(() => {
    async function refetch() {
      await db.withExclusiveTransactionAsync(async () => {
        setTodoItems(
          await db.getAllAsync<ItemEntity>(
            'SELECT * FROM items WHERE done = ?',
            false
          )
        );
        setDoneItems(
          await db.getAllAsync<ItemEntity>(
            'SELECT * FROM items WHERE done = ?',
            true
          )
        );
      });
    }
    refetch();
  }, [db]);

  useEffect(() => {
    refetchItems();
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search"
        style={styles.search}
      />

      <View style={styles.flexRow}>
        <TextInput
          onChangeText={(text) => setText(text)}
          onSubmitEditing={async () => {
            await addItemAsync(db, text);
            await refetchItems();
            setText('');
          }}
          placeholder="what do you need to do?"
          style={styles.input}
          value={text}
        />
      </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeading}>Todo</Text>
          <FlatList 
            data={todoItems}
            renderItem={({ item }) => (
              <JobItem 
                name={item.value} 
                done={item.done}
                onDelete={async () => {
                  await deleteItemAsync(db, item.id);  
                  await refetchItems();        
                }}
                onToggleDone={async () => {
                  await updateItemAsDoneAsync(db, item.id);
                  await refetchItems();
                }}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />


        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeading}>Completed</Text>
          {doneItems.map((item) => (
            <Item 
              key={item.id}
              item={item}
              onPressItem={async (id) => {
                await deleteItemAsync(db, id);
                await refetchItems();
              }}
            />
          ))}
        </View>

    </View>
  );
}

function Item({
  item,
  onPressItem,
}: {
  item: ItemEntity;
  onPressItem: (id) => void | Promise<void>;
}) {
  const { id, done, value } = item;
  return (
    <TouchableOpacity
      onPress={() => onPressItem && onPressItem(id)}
      style={[styles.item, done && styles.itemDone]}
    >
      <Text style={[styles.itemText, done && styles.itemTextDone]}>
        {value}
      </Text>
    </TouchableOpacity>
  );
}

//#endregion

//#region Database Operations

async function addItemAsync(db: SQLiteDatabase, text: string): Promise<void> {
  if (text !== '') {
    await db.runAsync(
      'INSERT INTO items (done, value) VALUES (?, ?);',
      false,
      text
    );
  }
}

async function updateItemAsDoneAsync(
  db: SQLiteDatabase,
  id: number
): Promise<void> {
  await db.runAsync('UPDATE items SET done = ? WHERE id = ?;', true, id);
}

async function deleteItemAsync(db: SQLiteDatabase, id: number): Promise<void> {
  await db.runAsync('DELETE FROM items WHERE id = ?;', id);
}

async function migrateDbIfNeeded(db: SQLiteDatabase) {
  const DATABASE_VERSION = 1;
  let { user_version: currentDbVersion } = await db.getFirstAsync<{
    user_version: number;
  }>('PRAGMA user_version');
  if (currentDbVersion >= DATABASE_VERSION) {
    return;
  }
  if (currentDbVersion === 0) {
    await db.execAsync(`
PRAGMA journal_mode = 'wal';
CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY NOT NULL, done INT, value TEXT);
`);
    currentDbVersion = 1;
  }
  // if (currentDbVersion === 1) {
  //   Add more migrations
  // }
  await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
}

//#endregion

//#region Styles

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    marginHorizontal: 20
  },
  heading: {
    flexDirection: "row", 
    alignItems: "center", 
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  avatar: { 
    width: 50, 
    height: 50, 
    borderRadius: 25, 
    marginRight: 10 },
  name: { 
    fontWeight: "bold", 
    fontSize: 18 },  
  flexRow: {
    flexDirection: 'row',
  },
  subtitle: { color: "gray" },
  input: {
    borderColor: '#4630eb',
    borderRadius: 4,
    borderWidth: 1,
    flex: 1,
    height: 48,
    margin: 16,
    padding: 8,
  },
  listArea: {
    backgroundColor: '#f0f0f0',
    flex: 1,
    paddingTop: 16,
  },
  sectionContainer: {
    marginBottom: 16,
    marginHorizontal: 16,
  },
  sectionHeading: {
    fontSize: 18,
    marginBottom: 8,
  },
  item: {
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
    padding: 8,
  },
  itemDone: {
    backgroundColor: '#1c9963',
  },
  itemText: {
    color: '#000',
  },
  itemTextDone: {
    color: '#fff',
  },
  header: { 
    flexDirection: "row", 
    alignItems: "center", 
    marginBottom: 20 },
  search: { 
    borderWidth: 1, 
    borderColor: "#ccc", 
    borderRadius: 10, 
    padding: 10, 
    marginBottom: 10 },
  text: {
    flex: 1,
    marginLeft: 8,
    fontSize: 15,
    fontWeight: 'bold'
  },
});
