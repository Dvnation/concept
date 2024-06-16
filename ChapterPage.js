import CheckBox from "@react-native-community/checkbox";
import {useEffect, useRef, useState} from "react";
import {List} from "./list";
import {Verse} from "./verse";
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
} = require("react-native");

export function ChapterPage({numbers, name}) {
  const [NABstate, setNAB] = useState([]);
  const [reg, setreg] = useState();

  let [verseOutline, setVerseOutline] = useState([]);
  let [numberss, setnumberss] = useState()

  useState(() => {
    let NAB = require("./JSON/data.json");

    setNAB([...NABstate, NAB]);
  }, [NABstate]);

  const textpress = number => {
    setreg(true);
    setnumberss(prev=>prev=number)
    // console.log(number +"is here");

    NABstate.map(item => {
      let XMLBIBLE = item.XMLBIBLE;

      XMLBIBLE.map(item => {
        let bibleName = item.BIBLENAME;
        let bibleBook = item.BIBLEBOOK;

        // }
        if (bibleName == name) {
          let Verse = bibleBook[parseInt(number) - parseInt(1)].CHAPTER;

          for (let i = 0; i < Math.max(bibleBook.length, Verse.length); i++) {
            // let i = number
            if (bibleBook[i]) {
              const element =
                bibleBook[parseInt(number) - parseInt(1)].CHAPTERNUMBER;
              // console.log(element);
            }

            if (Verse[i]) {
              const versess = Verse[i].VERSE;
              // console.log(versess);

              // setVerseOutline([...verseOutline,versess])
              verseOutline.splice(0, verseOutline.length);

              // verseOutline.push(versess)

              setVerseOutline(preV => {
                const newArray = [...preV, versess ];
                return newArray;
              });
            }
          }
        }
      });
    });
  };

  // setTimeout(() => {
  //     if(reg == true){
  //         setreg(false)
  //         setVerseOutline([])
  //         // verseOutline.splice(0,verseOutline.length)
  //     // console.log("spefd");
  //     }

  // },0);

  const clearchapter = () => {
    // setreg(false)
    setVerseOutline([""]);
  };

  return (
    <>
      {
    // console.log(numberss +"choke")
  }

      <ScrollView style={{margin: 20, width: "90%", flex: 1, display: "flex"}}>
        <View style={styles.container}>
          {numbers.map(item => {
            return (
              <Text onPress={() => textpress(item)} style={styles.list}>
                {item}
              </Text>
            );
          })}
        </View>
      </ScrollView>

      {/* <Button title="clearChapter" onPress={clearchapter} /> */}

      {/* {reg && <Verse verses={verseOutline} name={name} numberss = {numberss} />} */}
{reg && <Kjv name={name} chapters={numberss} verseOutline={verseOutline}/>
}
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

  list: {
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
