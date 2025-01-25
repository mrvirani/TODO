import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import TodoItem from './TodoItem';
import {showErrorToast, showSuccessToast} from '../../utils/toastUtils';

export default function TodoList() {
  const [tasks, setTasks] = useState([
    {id: 1, text: 'Task 1', completed: true},
    {id: 2, text: 'Task 2', completed: false},
  ]);
  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState(null);

  const addTask = () => {
    if (text.trim().length === 0) return;
    const newTask = {id: Date.now(), text: text.trim(), completed: false};
    setTasks([...tasks, newTask]);
    setText('');
    showSuccessToast('Task is added successfully!!');
  };

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
    showErrorToast('Task is deleted successfully!!');
  };

  const toggleCompleted = id => {
    setTasks(
      tasks.map(task =>
        task.id === id ? {...task, completed: !task.completed} : task,
      ),
    );
  };

  const updateTask = (id, newText) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? {...task, text: newText.trim()} : task,
      ),
    );
    setEditingId(null); // Exit editing mode
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TodoItem
            task={item}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
            startEditing={id => setEditingId(id)}
            isEditing={editingId === item.id}
            updateTask={updateTask}
          />
        )}
        contentContainerStyle={{paddingBottom: 100, marginTop: 16}}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Enter a new task"
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 10,
    backgroundColor: '#f9f9f9',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
