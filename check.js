import CheckBox from "@react-native-community/checkbox";
import { useEffect, useRef, useState } from "react";
import { List } from "./list";
import { ChapterPage } from "./ChapterPage";


const { View, StyleSheet, NativeAppEventEmitter, Text, FlatList,Button, Pressable, TextInput, Alert, ScrollView } = require("react-native");

export function Checks(){

    const refer = useRef()


    

    const [bibleName,setBiblename] = useState()
    const [ chapter,setChapter] = useState()
    const [verse,setVerse] = useState()
    const [kjvStae,setKjv] = useState([])
    const [middle,setMiddle] = useState("")

    const [texter,setTester] = useState([""])
    const [dater,setDater] = useState()
const [textlevel, setit] = useState([""])
const [textlevels, setits] = useState([""])

const [combined, setCombined] = useState([""])
const [asvsTate, setAsvs]= useState([])


// const combined = [""]


const [mapped,setMapped] = useState(false)
useState(()=>{

    let kjv = require("./JSON/kjv.json");

setKjv([...kjvStae, kjv])

let asvs = require("./JSON/asvs.json")
setAsvs([...asvsTate,asvs])



},[kjvStae])


useEffect(()=>{



},[])

// const textlevel = []

const data = [
    {
        id:2,name:"divine1"
    }, {
        id:3,name:"divine2"
    }, {
        id:4,name:"divine3"
    }
]


const data2 = [
    {
        id:23,name:"divine1"
    }, {
        id:33,name:"divine2"
    }, {
        id:43,name:"divine3"
    }
]

// const may = () =>{
//     // let doc = document.querySelector("#checkerId").value
//     // let doc2 = document.querySelector("#map")

//     setMapped(true)
// console.log(bibleName);

// kjvStae.map(item=>{
// let kjvIntro = item.verses

// kjvIntro.map(item=>{
//   let  bibleNames = item.book_name
//    let chapters = item.chapter
//    let verses = item.verse
//    let text = item.text

//     if(bibleNames == bibleName && chapters == chapter){

//         textlevel.push(item.text)

//         // console.log(textlevel);

//         // console.log(bibleName);



      
//     }


  
//     // textlevel.push(item.book_name)


 
   
// })



// })


// }


const may = ()=>{

setMapped(true)


    
kjvStae.map(item=>{
    let kjvIntro = item.verses
    
    kjvIntro.map(item=>{
      let  bibleNames = item.book_name
       let chapters = item.chapter
       let verses = item.verse
       let text = item.text
    
        if(bibleNames == bibleName && chapters == chapter){
    
            textlevel.push(item.text)
    
    
    
    
    
          
        }}
    )})



    asvsTate.map(item=>{
        let asvsIntro = item.verses
        
        asvsIntro.map(item=>{
          let  bibleNames = item.book_name
           let chapters = item.chapter
           let verses = item.verse
           let text = item.text
        
            if(bibleNames == bibleName && chapters == chapter){
        
                textlevels.push(item.text)
        
        
        
        
        
              
            }}
        )})

    for (let i = 0; i < Math.max(textlevels.length,textlevel.length); i++) {
        if(textlevel[i]){
        // combined.push(i+1+" "+"KJV"+":"+ " "+  textlevel[i])
        combined.push(<Text style={{color:"green"}}>{textlevel[i]}</Text>)
        }    
        
        if(textlevels[i]){
            // combined.push(i+1+" "+"ASVS" + ":" + " " +  textlevels[i])
            combined.push(<Text style={{color:"blue"}}>{textlevel[i]}</Text>)
        }  

        }


        
}
const clears = ()=>{
setMapped(false)
    setBiblename("")
    setChapter("")
    // setVerse("")
    // setMiddle("")
    setit([])
    setCombined([])
setits([])
    
}



    return(
        <>

        <ChapterPage/>
        
<View style={{ marginTop:50, width:"100%", flex:1, alignItems:"center", justifyContent:"center", border:"2px solid red", borderWidth:1, height:"10%",borderColor:"red"}}>
    
<TextInput   style={styles.input} placeholder="BibleName" onChangeText={text=>setBiblename(text)}>{bibleName}</TextInput>

<TextInput  style={styles.input} placeholder="Chapter" onChangeText={(text)=>setChapter(text)}>{chapter}</TextInput>
<TextInput  placeholder="verse" style={styles.input} id="checkerId" onChangeText={(text)=>setVerse(text)}>{verse}</TextInput>


</View>
       
           <View style={{justifyContent:"center",border:"2px solid red", flex:1, width:"100%", borderWidth:1, height:"10%",borderColor:"blue"}}> 


           
            <Button  title="search" onPress={may}/>
            <Button title="clear" onPress={clears}/>
</View>
            


{

    mapped 
    &&
    <ScrollView style={{flex:1,marginBottom:70, borderWidth:2, borderColor:"yellow"}}>
<View style={{backgroundColor:"pink", border:"2px solid", borderColor:"yellow", paddingTop:15, paddingBottom:15}}> 
      { combined.map(item=>{
        // console.log("sifshish"+ item);

       return (

<Text styler>
    {item}
</Text>

       )
    })}
</View>
      </ScrollView>

}


  



          
        </>
            
            
    
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    texter:{
        color:"blue",
        flex:1
    },
    input:{
        color:"black",
borderColor: "red",
border: "2px solid",
height: "40",
borderColor: "black",
borderWidth: 1,

width:"80%",
padding:"10"


    }

  });