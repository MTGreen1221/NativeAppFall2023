import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [answer, setAnswer] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [output, setOutput] = useState('');
  function encrypt() {
    let temp = [];
    if(isNaN(answer2) == false){
      let x = parseInt(answer2);
      for(let index = 0; index < answer.length; index++){
        switch (answer.charAt(index)) {
          case 'a':
            temp[index] = (1+x);
            break;
          case 'b':
            temp[index] = (2+x);
            break;
          case 'c':
            temp[index] = (3+x);
            break;
          case 'd':
            temp[index] = (4+x);
            break;
          case 'e':
            temp[index] = (5+x);
            break;
          case 'f':
            temp[index] = (6+x);
            break;
          case 'g':
            temp[index] = (7+x);
            break;
          case 'h':
            temp[index] = (8+x);
            break;
          case 'i':
            temp[index] = (9+x);
            break;
          case 'j':
            temp[index] = (10+x);
            break;
          case 'k':
            temp[index] = (11+x);
            break;
          case 'l':
            temp[index] = (12+x);
            break;
          case 'm':
            temp[index] = (13+x);
            break;
          case 'n':
            temp[index] = (14+x);
            break;
          case 'o':
            temp[index] = (15+x);
            break;
          case 'p':
            temp[index] = (16+x);
            break;
          case 'q':
            temp[index] = (17+x);
            break;
          case 'r':
            temp[index] = (18+x);
            break;
          case 's':
            temp[index] = (19+x);
            break;
          case 't':
            temp[index] = (20+x);
            break;
          case 'u':
            temp[index] = (21+x);
            break;
          case 'v':
            temp[index] = (22+x);
            break;
          case 'w':
            temp[index] = (23+x);
            break;
          case 'x':
            temp[index] = (24+x);
            break;
          case 'y':
            temp[index] = (25+x);
            break;
          case 'z':
            temp[index] = (26+x);
            break;
          default:
            temp[index] = (answer.charAt(index));
            break;
        }
      }
      for(index = 0; index < temp.length; index++){
        while(temp[index] > 26){
          temp[index] = temp[index] - 26;
        }
        switch (temp[index]) {
          case 1:
            temp[index] = 'a';
            break;
          case 2:
            temp[index] = 'b';
            break;
          case 3:
            temp[index] = 'c';
            break;
          case 4:
            temp[index] = 'd';
            break;
          case 5:
            temp[index] = 'e';
            break;
          case 6:
            temp[index] = 'f';
            break;
          case 7:
            temp[index] = 'g';
            break;
          case 8:
            temp[index] = 'h';
            break;
          case 9:
            temp[index] = 'i';
            break;
          case 10:
            temp[index] = 'j';
            break;
          case 11:
            temp[index] = 'k';
            break;
          case 12:
            temp[index] = 'l';
            break;
          case 13:
            temp[index] = 'm';
            break;
          case 14:
            temp[index] = 'n';
            break;
          case 15:
            temp[index] = 'o';
            break;
          case 16:
            temp[index] = 'p';
            break;
          case 17:
            temp[index] = 'q';
            break;
          case 18:
            temp[index] = 'r';
            break;
          case 19:
            temp[index] = 's';
            break;
          case 20:
            temp[index] = 't';
            break;
          case 21:
            temp[index] = 'u';
            break;
          case 22:
            temp[index] = 'v';
            break;
          case 23:
            temp[index] = 'w';
            break;
          case 24:
            temp[index] = 'x';
            break;
          case 25:
            temp[index] = 'y';
            break;
          case 26:
            temp[index] = 'z';
            break;
          default:
            break;
        }
      }
      for(index = 0; index < answer.length; index++){
        switch (answer.charAt(index)) {
          case 'A':
            temp[index] = (1+x);
            break;
          case 'B':
            temp[index] = (2+x);
            break;
          case 'C':
            temp[index] = (3+x);
            break;
          case 'D':
            temp[index] = (4+x);
            break;
          case 'E':
            temp[index] = (5+x);
            break;
          case 'F':
            temp[index] = (6+x);
            break;
          case 'G':
            temp[index] = (7+x);
            break;
          case 'H':
            temp[index] = (8+x);
            break;
          case 'I':
            temp[index] = (9+x);
            break;
          case 'J':
            temp[index] = (10+x);
            break;
          case 'K':
            temp[index] = (11+x);
            break;
          case 'L':
            temp[index] = (12+x);
            break;
          case 'M':
            temp[index] = (13+x);
            break;
          case 'N':
            temp[index] = (14+x);
            break;
          case 'O':
            temp[index] = (15+x);
            break;
          case 'P':
            temp[index] = (16+x);
            break;
          case 'Q':
            temp[index] = (17+x);
            break;
          case 'R':
            temp[index] = (18+x);
            break;
          case 'S':
            temp[index] = (19+x);
            break;
          case 'T':
            temp[index] = (20+x);
            break;
          case 'U':
            temp[index] = (21+x);
            break;
          case 'V':
            temp[index] = (22+x);
            break;
          case 'W':
            temp[index] = (23+x);
            break;
          case 'X':
            temp[index] = (24+x);
            break;
          case 'Y':
            temp[index] = (25+x);
            break;
          case 'Z':
            temp[index] = (26+x);
            break;
          default:
            break;
        }
      }
      for(index = 0; index < temp.length; index++){
        while(temp[index] > 26){
          temp[index] = temp[index] - 26;
        }
        switch (temp[index]) {
          case 1:
            temp[index] = 'A';
            break;
          case 2:
            temp[index] = 'B';
            break;
          case 3:
            temp[index] = 'C';
            break;
          case 4:
            temp[index] = 'D';
            break;
          case 5:
            temp[index] = 'E';
            break;
          case 6:
            temp[index] = 'F';
            break;
          case 7:
            temp[index] = 'G';
            break;
          case 8:
            temp[index] = 'H';
            break;
          case 9:
            temp[index] = 'I';
            break;
          case 10:
            temp[index] = 'J';
            break;
          case 11:
            temp[index] = 'K';
            break;
          case 12:
            temp[index] = 'L';
            break;
          case 13:
            temp[index] = 'M';
            break;
          case 14:
            temp[index] = 'N';
            break;
          case 15:
            temp[index] = 'O';
            break;
          case 16:
            temp[index] = 'P';
            break;
          case 17:
            temp[index] = 'Q';
            break;
          case 18:
            temp[index] = 'R';
            break;
          case 19:
            temp[index] = 'S';
            break;
          case 20:
            temp[index] = 'T';
            break;
          case 21:
            temp[index] = 'U';
            break;
          case 22:
            temp[index] = 'V';
            break;
          case 23:
            temp[index] = 'W';
            break;
          case 24:
            temp[index] = 'X';
            break;
          case 25:
            temp[index] = 'Y';
            break;
          case 26:
            temp[index] = 'Z';
            break;
          default:
            break;
        }
      }
    }
    setOutput(temp);
  }
  function decrypt() {
    let temp2 = [];
    if(isNaN(answer2) == false){
      let y = parseInt(answer2);
      for(let index2 = 0; index2 < answer.length; index2++){
        switch (answer.charAt(index2)) {
          case 'a':
            temp2[index2] = (1-y);
            break;
          case 'b':
            temp2[index2] = (2-y);
            break;
          case 'c':
            temp2[index2] = (3-y);
            break;
          case 'd':
            temp2[index2] = (4-y);
            break;
          case 'e':
            temp2[index2] = (5-y);
            break;
          case 'f':
            temp2[index2] = (6-y);
            break;
          case 'g':
            temp2[index2] = (7-y);
            break;
          case 'h':
            temp2[index2] = (8-y);
            break;
          case 'i':
            temp2[index2] = (9-y);
            break;
          case 'j':
            temp2[index2] = (10-y);
            break;
          case 'k':
            temp2[index2] = (11-y);
            break;
          case 'l':
            temp2[index2] = (12-y);
            break;
          case 'm':
            temp2[index2] = (13-y);
            break;
          case 'n':
            temp2[index2] = (14-y);
            break;
          case 'o':
            temp2[index2] = (15-y);
            break;
          case 'p':
            temp2[index2] = (16-y);
            break;
          case 'q':
            temp2[index2] = (17-y);
            break;
          case 'r':
            temp2[index2] = (18-y);
            break;
          case 's':
            temp2[index2] = (19-y);
            break;
          case 't':
            temp2[index2] = (20-y);
            break;
          case 'u':
            temp2[index2] = (21-y);
            break;
          case 'v':
            temp2[index2] = (22-y);
            break;
          case 'w':
            temp2[index2] = (23-y);
            break;
          case 'x':
            temp2[index2] = (24-y);
            break;
          case 'y':
            temp2[index2] = (25-y);
            break;
          case 'z':
            temp2[index2] = (26-y);
            break;
          default:
            temp2[index2] = (answer.charAt(index2));
            break;
        }
      }
      for(index2 = 0; index2 < temp2.length; index2++){
        if(temp2[index2] === ' '){}
        else{
          while(temp2[index2] <= 0){
            temp2[index2] = temp2[index2] + 26;
          }
        }
        switch (temp2[index2]) {
          case 1:
            temp2[index2] = 'a';
            break;
          case 2:
            temp2[index2] = 'b';
            break;
          case 3:
            temp2[index2] = 'c';
            break;
          case 4:
            temp2[index2] = 'd';
            break;
          case 5:
            temp2[index2] = 'e';
            break;
          case 6:
            temp2[index2] = 'f';
            break;
          case 7:
            temp2[index2] = 'g';
            break;
          case 8:
            temp2[index2] = 'h';
            break;
          case 9:
            temp2[index2] = 'i';
            break;
          case 10:
            temp2[index2] = 'j';
            break;
          case 11:
            temp2[index2] = 'k';
            break;
          case 12:
            temp2[index2] = 'l';
            break;
          case 13:
            temp2[index2] = 'm';
            break;
          case 14:
            temp2[index2] = 'n';
            break;
          case 15:
            temp2[index2] = 'o';
            break;
          case 16:
            temp2[index2] = 'p';
            break;
          case 17:
            temp2[index2] = 'q';
            break;
          case 18:
            temp2[index2] = 'r';
            break;
          case 19:
            temp2[index2] = 's';
            break;
          case 20:
            temp2[index2] = 't';
            break;
          case 21:
            temp2[index2] = 'u';
            break;
          case 22:
            temp2[index2] = 'v';
            break;
          case 23:
            temp2[index2] = 'w';
            break;
          case 24:
            temp2[index2] = 'x';
            break;
          case 25:
            temp2[index2] = 'y';
            break;
          case 26:
            temp2[index2] = 'z';
            break;
          default:
            break;
        }
      }
      for(index2 = 0; index2 < answer.length; index2++){
        switch (answer.charAt(index2)) {
          case 'A':
            temp2[index2] = (1-y);
            break;
          case 'B':
            temp2[index2] = (2-y);
            break;
          case 'C':
            temp2[index2] = (3-y);
            break;
          case 'D':
            temp2[index2] = (4-y);
            break;
          case 'E':
            temp2[index2] = (5-y);
            break;
          case 'F':
            temp2[index2] = (6-y);
            break;
          case 'G':
            temp2[index2] = (7-y);
            break;
          case 'H':
            temp2[index2] = (8-y);
            break;
          case 'I':
            temp2[index2] = (9-y);
            break;
          case 'J':
            temp2[index2] = (10-y);
            break;
          case 'K':
            temp2[index2] = (11-y);
            break;
          case 'L':
            temp2[index2] = (12-y);
            break;
          case 'M':
            temp2[index2] = (13-y);
            break;
          case 'N':
            temp2[index2] = (14-y);
            break;
          case 'O':
            temp2[index2] = (15-y);
            break;
          case 'P':
            temp2[index2] = (16-y);
            break;
          case 'Q':
            temp2[index2] = (17-y);
            break;
          case 'R':
            temp2[index2] = (18-y);
            break;
          case 'S':
            temp2[index2] = (19-y);
            break;
          case 'T':
            temp2[index2] = (20-y);
            break;
          case 'U':
            temp2[index2] = (21-y);
            break;
          case 'V':
            temp2[index2] = (22-y);
            break;
          case 'W':
            temp2[index2] = (23-y);
            break;
          case 'X':
            temp2[index2] = (24-y);
            break;
          case 'Y':
            temp2[index2] = (25-y);
            break;
          case 'Z':
            temp2[index2] = (26-y);
            break;
          default:
            break;
        }
      }
      for(index2 = 0; index2 < temp2.length; index2++){
        if(temp2[index2] === ' '){}
        else{
          while(temp2[index2] <= 0){
            temp2[index2] = temp2[index2] + 26;
          }
        }
        switch (temp2[index2]) {
          case 1:
            temp2[index2] = 'A';
            break;
          case 2:
            temp2[index2] = 'B';
            break;
          case 3:
            temp2[index2] = 'C';
            break;
          case 4:
            temp2[index2] = 'D';
            break;
          case 5:
            temp2[index2] = 'E';
            break;
          case 6:
            temp2[index2] = 'F';
            break;
          case 7:
            temp2[index2] = 'G';
            break;
          case 8:
            temp2[index2] = 'H';
            break;
          case 9:
            temp2[index2] = 'I';
            break;
          case 10:
            temp2[index2] = 'J';
            break;
          case 11:
            temp2[index2] = 'K';
            break;
          case 12:
            temp2[index2] = 'L';
            break;
          case 13:
            temp2[index2] = 'M';
            break;
          case 14:
            temp2[index2] = 'N';
            break;
          case 15:
            temp2[index2] = 'O';
            break;
          case 16:
            temp2[index2] = 'P';
            break;
          case 17:
            temp2[index2] = 'Q';
            break;
          case 18:
            temp2[index2] = 'R';
            break;
          case 19:
            temp2[index2] = 'S';
            break;
          case 20:
            temp2[index2] = 'T';
            break;
          case 21:
            temp2[index2] = 'U';
            break;
          case 22:
            temp2[index2] = 'V';
            break;
          case 23:
            temp2[index2] = 'W';
            break;
          case 24:
            temp2[index2] = 'X';
            break;
          case 25:
            temp2[index2] = 'Y';
            break;
          case 26:
            temp2[index2] = 'Z';
            break;
          default:
            break;
        }
      }
    }
    setOutput(temp2);
  }
  return (
    <View style={styles.container}>
      <Text>Enter message to decode or encode:</Text>
      <TextInput id='answer' style={{ padding:8, backgroundColor:'#f5f5f5'}}
        onChangeText={text => setAnswer(text)}
      />
      <Text>Enter number:</Text>
      <TextInput id='answer2' style={{ padding:8, backgroundColor:'#f5f5f5'}}
        onChangeText={text => setAnswer2(text)}
      />
      <View style={styles.container2}>
        <Button title='encrypt'
          onPress={function(){
            if(answer != '' && answer2 != ''){
              encrypt();
            }
          }}
          />
        <Button title='decrypt'
          onPress={function(){
            if(answer != '' && answer2 != ''){
              decrypt();
            }
          }}
        />
      </View>
      <Text>Output:</Text>
      <Text>{output}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
