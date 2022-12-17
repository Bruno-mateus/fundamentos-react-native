import { Alert, Button, FlatList, LogBox, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {styles} from './styles'
import { Participant } from '../../components/Participant';
import { useState } from 'react';




export function Home() {
const [participants,setParticipants] = useState<string[]>([])
const [participantName,setParticipantName] = useState<string>()

  const dateNow = new Date()

  const date = `${dateNow.getDate()}/${dateNow.getMonth()}/${dateNow.getFullYear()}`;

  function handleRemoveParticipant(name:string){
    
      Alert.alert("Remove particpant",`You want remove ${name}?`,[
        {
          text:'Yes',
          onPress: ()=>setParticipants(state=>state.filter(participant=>participant!=name))
        },
        {
          text:'Not',
          style:'cancel'
        }
      ])

  }
  function handleAddParticipant(){
    const findParticpant = participants.find(participant=>participant===participantName)
    if(findParticpant) return Alert.alert("Participant already exist","You already added participant with same name")
    if(!participantName)return Alert.alert("Invalid Name", "Please enter a valid name")
    setParticipants((state)=>[...state, participantName])
    setParticipantName('')
  }

    return (
      <View style={styles.container}>
        <Text style={styles.eventName}>Name Event</Text>
        <Text style={styles.eventDate}>{`${date}`}</Text>

        <View style={styles.form}>
            <TextInput style={styles.input}
             placeholder={'Add a particpant'}
             onChangeText={setParticipantName}
             // ou pode ser; onchange={e=>setParticipantName(e)}
              value={participantName}
             />
            <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
                <Text style={styles.buttonText} >
                     +
                </Text>
            </TouchableOpacity>
        </View>
      {
        participants.length<=0?(
          <Text style={{fontSize:18,fontWeight:'bold',textAlign:'center'}}>No particpant was appended</Text>
        ):(
          <FlatList
          data={participants}
          keyExtractor={item => item}
          renderItem={({item})=>(
            <Participant name={item} onRemove={()=> handleRemoveParticipant(item)}/>
          )}
          showsVerticalScrollIndicator={false}
  
        />
        )
      }



   
      </View>
    );
  }