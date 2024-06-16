import CheckBox from "@react-native-community/checkbox";
import {useEffect, useRef, useState} from "react";
import {List} from "./list";
import {ChapterPage} from "./ChapterPage";
import { Kjv } from "./kjvNew";

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
  TextInput,
} = require("react-native");

export function Start() {
  const [NABstate, setNAB] = useState([]);
  const [bname, setBname] = useState();
  const [bibleNames, setBiblenames] = useState([]);
  const [reg, setReg] = useState();
  const [reg2, SetReg2] = useState();
  const [reg3, setReg3] = useState();

  const [searches, setsearh] = useState();

  const [sdisplay, setdisplay] = useState([]);

  const [chapterNumbers, setChapterNumber] = useState([]);

  const [img, setimg] = useState();

  useState(() => {
    let NAB = require("./JSON/data.json");

    setNAB([...NABstate, NAB]);
  }, [NABstate]);

  useEffect(() => {
    return active();
  }, [NABstate]);

  const active = () => {
    setReg(true);
    NABstate.map(item => {
      let XMLBIBLE = item.XMLBIBLE;

      XMLBIBLE.map(item => {
        let bibleBook = item.BIBLENAME;
        //   console.log(bibleBook);

        bibleNames.push(bibleBook);
      });
    });
  };

  const EnterChapter = name => {
    setimg(name);
    SetReg2(true);
    chapterNumbers.splice(0, chapterNumbers.length);

    NABstate.map(item => {
      let XMLBIBLE = item.XMLBIBLE;

      XMLBIBLE.map(item => {
        let bibleName = item.BIBLENAME;
        let BIBLEBOOK = item.BIBLEBOOK;

        if (bibleName == name) {
          //   console.log(name);
          // setChapterNumber([])

          for (let i = 0; i < BIBLEBOOK.length; i++) {
            const element = BIBLEBOOK[i].CHAPTERNUMBER;
            // console.log(element);
            chapterNumbers.push(element);
            // return chapterNumbers = [element]
          }
        }
      });
    });
  };

  const searching = () => {
    // setsearh(query)

    setReg3(true);

    // console.log(searches);

    NABstate.map(item => {
      let XMLBIBLE = item.XMLBIBLE;

      XMLBIBLE.map(item => {
        let bibleBook = item.BIBLENAME;
        let BIBLEBOOK = item.BIBLEBOOK;

        if (searches) {
          for (let i = 0; i < BIBLEBOOK.length; i++) {
            let mmm = BIBLEBOOK[i].CHAPTER;

            mmm.filter(item => {
              // console.log(item.VERSE);
              let verse = item.VERSE;
              if (
                verse &&
                verse.includes(
                  searches.toLowerCase() || searches.toUpperCase() || searches
                )
              ) {
                // console.log(verse);
                sdisplay.splice(0, sdisplay.length);
                setdisplay(prev => {
                  return [
                    ...prev,
                    <Text style={{color: "black", fontWeight: "heavy"}}>
                      {bibleBook.toUpperCase() + ":"}{" "}
                      <Text style={{color: "grey", fontWeight: "normal"}}>
                        {verse}
                      </Text>
                    </Text>,
                  ];
                });
              }
           
            });
          }
        }

        // BIBLEBOOK.map(item=>{

        //   let CHAPTER = item.CHAPTER

        //   CHAPTER.map(item=>{
        //     if (bibleBook == "Genesis") {
        //       console.log(item.VERSE)

        //     }
        //   })
        // })

        // for (let i = 0; i < BIBLEBOOK.length; i++) {
        //    if(bibleBook == "Genesis" && BIBLEBOOK[0].CHAPTERNUMBER == "1"){
        //     const element = BIBLEBOOK[0].CHAPTER.VERSE
        //     console.log(element);

        //    }
        // }
      });
    });
  };

  const clearchapter = () => {
    SetReg2(false);
    setChapterNumber([]);
    // chapterNumbers = [""]
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.font}>BOOKS</Text>
        <Text style={styles.font}>CHAPTER</Text>
        <Text style={styles.font}>VERSE</Text>
      </View>

      <View style={{flexDirection: "row"}}>
        <TextInput
          style={{borderColor: "black", borderWidth: 1, width: "50%"}}
          placeholder="search"
          onChangeText={query => setsearh(query)}
        ></TextInput>
        <Button title="search item" onPress={searching} />
      </View>
      <ScrollView style={{flex: 1}}>
        <View style={{flex: 1}}>
          {reg3 &&
            sdisplay.map(item => {
              return (
                <>
                <Text style={styles.list2}>{item}</Text>
                {/* <Text>{img}</Text> */}
                </>
              );
            })}
        </View>
      </ScrollView>
      {reg && (
        <ScrollView
          style={{flex: 1, width: "90%", backgroundColor: "white", margin: 20}}
        >
          <View style={styles.containerDiv2}>
            {bibleNames.map(item => {
              return (
                <Text onPress={() => EnterChapter(item)} style={styles.list}>
                  {item}
                </Text>
              );
            })}
          </View>
        </ScrollView>
      )}

      <View style={styles.containerDiv}>
        {/* <Button style={{paddingTop: 40}} title="click" onPress={clearchapter} /> */}
      </View>
      {/* {console.log(chapterNumbers)} */}

      {reg && <ChapterPage numbers={chapterNumbers} name={img} />}

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderColor: "blue",
    borderWidth: 2,
    justifyContent: "space-around",
    width: "100%",
    marginTop: 30,
  },

  font: {
    color: "grey",
    fontWeight: "bold",
  },
  containerDiv: {
    borderWidth: 2,
    borderColor: "red",
    width: "100%",
  },
  containerDiv2: {
    flex: 1,
    borderWidth: 2,
    borderColor: "green",
    width: "100%",

    // justifyContent:"flex-end"
  },

  list: {
    color: "black",
    // alignItems:"flex-start"
    borderWidth: 2,
    backgroundColor: "pink",
    marginBottom: 1,
    paddingBottom: 10,
    borderColor: "white",
  },
  list2: {
    color: "black",
    // alignItems:"flex-start"
    borderWidth: 2,
    backgroundColor: "whitesmoke",
    marginBottom: 1,
    paddingBottom: 10,
    borderColor: "white",
  },
});
