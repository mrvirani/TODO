import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default function TodoItem({
  task,
  deleteTask,
  toggleCompleted,
  updateTask,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(task.text);

  const handleSave = () => {
    if (updatedText.trim().length > 0) {
      updateTask(task.id, updatedText.trim());
      setIsEditing(false);
    }
  };

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={() => toggleCompleted(task?.id)}
        style={[
          styles.toggleButton,
          {backgroundColor: task?.completed ? '#4CAF50' : '#f1f1f1'},
        ]}
      />
      {isEditing ? (
        <TextInput
          style={styles.input}
          value={updatedText}
          onChangeText={setUpdatedText}
        />
      ) : (
        <Text
          style={[
            styles.taskText,
            {textDecorationLine: task.completed ? 'line-through' : 'none'},
          ]}>
          {task.text}
        </Text>
      )}
      {isEditing ? (
        <TouchableOpacity
          onPress={handleSave}
          style={[styles.button, styles.saveButton]}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      ) : (
        <>
          <TouchableOpacity
            onPress={() => setIsEditing(true)}
            style={[styles.button, styles.editButton]}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => deleteTask(task.id)}
            style={[styles.button, styles.deleteButton]}>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginHorizontal: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 10, // subtle shadow for better visibility
  },
  toggleButton: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 3,
    width: 24,
    height: 24,
    marginRight: 12,
  },
  taskText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
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
  button: {
    width: 70,
    height: 36,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginLeft: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: '#2196F3', // Blue for edit
  },
  deleteButton: {
    backgroundColor: '#FF5C5C', // Red for delete
  },
  saveButton: {
    backgroundColor: '#4CAF50', // Green for save
  },
});
