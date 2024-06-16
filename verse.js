import CheckBox from "@react-native-community/checkbox";
import {useEffect, useRef, useState} from "react";
import {List} from "./list";
import { Kjv  } from "./kjvNew";

const {
  View,
  StyleSheet,
  NativeAppEventEmitter,
  Text,
  FlatList,
  Button,
  Pressable,
  Alert,
  ScrollView,
} = require("react-native");

export function Verse({verses, kjvScan}) {
  const [reg, setreg] = useState([]);
  const [reg2, setreg2] = useState(false);
  const [ content,setcontent] = useState([])
  useEffect(() => {
    // life()

    setreg2(true);
  }, []);

  const clearverse = () => {
    // setreg2(true)
    // life()
  };

  const clearerverse = () => {
    //    setreg((prev)=>[...prev,"mk"])
    // setreg2(false)
    // setreg(["kjikjkjk"])
    verses.map(item=>{

      // console.log(item);

      if(item.includes("day")){
// console.log(item);
      }
    })
    // console.log(scan);
  };
  
const auto = ()=>{
  content.splice(0,content.length)

for (let i = 0; i < Math.max(kjvScan.length, verses.length); i++) {
if(kjvScan[i]){



  content.push(
    <View style={{marginBottom:"10px"}}>
      <Text style={{backgroundColor:"pink"}}>{kjvScan[i]}</Text>
    </View>
  )
  
}  

if (verses[i]){



// setcontent(prev=>{
//  return [...prev,   <View style={{marginBottom:"10px"}}>
//   <Text style={{backgroundColor:"bisque"}}>{verses[i]}</Text>
// </View>
//   ]
// })



  content.push(
    <View style={{marginBottom:"10px"}}>
      <Text style={{backgroundColor:"bisque"}}>{verses[i]}</Text>
    </View>
  )
  

}
}
}


  return (
    <>
      {reg2 && auto()}

      <ScrollView style={{flex: 1}}>
        <View style={{flex:1, width:"100%"}}>
          {reg2 &&

       content.map(item=>{
       
       return <Text style={{width:"100%"}} >{item}</Text>
       
       })
            }

        </View>
      </ScrollView>

      <View>
        <Button title="clearVerses" onPress={clearerverse} />
      </View>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //   backgroundColor: 'red',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    width: "100%",
    //   marginRight:20,
    //   margin:20,
    // flexDirection:"column",
    // flexWrap:"wrap"
    // flexDirection:"row",
    // flexWrap:"wrap",
    // gap:85
  },

  input: {
    color: "black",
    // alignItems:"flex-start"
    borderWidth: 2,
    backgroundColor: "pink",
    marginBottom: 1,
    paddingBottom: 10,
    borderColor: "white",
    paddingLeft: 4,
  },
});
