import { useState  } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, Pressable} from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [ courseGoals, setCourseGoals ] = useState([]);

  function goalInputHandler (enteredText) {
    setEnteredGoalText(enteredText);
  } 

  function addGoalHandler () {
    setCourseGoals( currentCourseGoals =>
      [...currentCourseGoals, enteredGoalText]);
      setEnteredGoalText('');
  }

  // function deleteGoalHandler (id) {
  //   setCourseGoals( currentCourseGoals => {
  //     return currentCourseGoals.filter((goal) => goal.id !== id);
  //   })
  // }


  return (
    <View style={styles.all}>

    <View style={styles.myinput}>
      <TextInput style={styles.mytextinput} placeholder='Your Goal'
       onChangeText={goalInputHandler} value={enteredGoalText} />
      <Button onPress={addGoalHandler} title='Add Goal' />
    </View>
    
    <Pressable>
    <View style={styles.mygoal}>
     <ScrollView>
      {courseGoals.map((goal) => 
      <View  key={goal}>
        <Text style={styles.goalAlone}>{goal}</Text>
      </View>      
      )}
     </ScrollView>
    </View>
    </Pressable>
    
    
      
    </View>
  );
}

const styles = StyleSheet.create({
  all : {
     padding : 50,
     backgroundColor : 'blue',
     alignItems : 'center',
  },
  myinput : {
    flexDirection : 'row',
    justifyContent : 'space-around',
    paddingTop : 30,
  },
  mytextinput : {
    borderColor : 'black',
    borderWidth : 2,
    width : '70%',
    borderRadius : 20,
    textAlign : 'center',
    backgroundColor : 'white',
  },
  mygoal : {
    textAlign : 'center',      
    marginTop: 20,
  },
  goalAlone : {
    color: 'white',
    textAlign: 'center',
    backgroundColor : 'green',
    padding : 10,
    borderRadius: 6,
  }
});
