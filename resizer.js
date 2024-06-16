import React, { useEffect, useState } from 'react';
import { ScrollView, Text, Button, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Amp } from './AMP';
import './bible.css'
// import Newnab from './NewNab';
import Bishop from './asvs';
// import TMest from './tester';
// import HelpVerse from './helpverse';

export function Resizer() {
  const [AMP, setAmp] = useState([]);
  const [chapternamer, setchapter] = useState();
  const [scannerLength, setScannerlength] = useState();
  const [bibleName, setBibleName] = useState();
  const [scanners, setscanner] = useState([]);
  const [CahapterNumbering, setCah] = useState();
  const [bibleNamer, setBiblenamer] = useState();
  const [NAB, setItem] = useState([]);
  const [VNUMBER, setVNUMBER] = useState();

  useEffect(() => {
    let AMPs = require('../concept/JSON/AMP.json');
    let data = require('../concept/JSON/data.json');

    setItem([...NAB, data]);
    setAmp([...AMP, AMPs]);
  }, []);

  useEffect(() => {
    KickStart();
  }, [NAB]);

  let scanner = []
  let iterate = []
  let scan = []
  let AMPscan = []

  const KickStart = () => {
    NAB.map((items) => {
      console.log('blue');
      let XMLBIBLE = items.XMLBIBLE;

      XMLBIBLE.map((itemss) => {
        let Namebutton = document.createElement("button");
        Namebutton.className = "special";
        Namebutton.id = "NameButtonId";
        Namebutton.style.background = "pink";
  
        Namebutton.style.width = "100%";
  
        Namebutton.innerHTML = itemss.BIBLENAME;
  
        let bibleName = itemss.BIBLENAME;



        

      let listBearer = document.createElement("ul");
      listBearer.className = "listBearerNames";

      listBearer.style.margin = "9px";
      listBearer.style.padding = "0px";

      let list = document.createElement("li");
      Namebutton.style.borderRadius = "3px 7px";

      list.style.listStyle = "none";

      list.appendChild(Namebutton);

      listBearer.appendChild(list);


      document.querySelector("#checkerDiv").appendChild(listBearer);

      //  console.log(Namebutton);

      Namebutton.addEventListener("click", function (e) {
        document.querySelector('#CHAPTERS').style.color = "green"
        document.querySelector('#VERSES').style.color = "black"
        document.querySelector('#BOOKS').style.color = "black"


        document.querySelector('#BOOKS').style.textDecoration= "none"
        document.querySelector('#CHAPTERS').style.textDecoration = "underline"
        document.querySelector('#VERSES').style.textDecoration = "none"




        console.log("blueNmae");
        document.querySelector("#checkerDiv").style.display = "none";

        document.querySelector("#subChecker").style.display = "grid";

        console.log(document.querySelectorAll("#NameButtonId").innerHTML);
        console.log(e.target.innerHTML);
        let man = document.querySelectorAll("#NameButtonId");
        for (let i = 0; i < man.length; i++) {
          man[i].style.background = "pink";
          if (man[i].innerHTML == e.target.innerHTML) {
            man[i].style.background = "green";
          }
        }

        document.querySelector("#subChecker").innerHTML = "";




        let BibleBook = itemss.BIBLEBOOK;

        BibleBook.map((items) => {

          let list = document.createElement("li");

          let ChapterNumberbuttons = document.createElement("button");
          ChapterNumberbuttons.style.borderRadius = "3px 7px";
          ChapterNumberbuttons.id = "chapterId";

          ChapterNumberbuttons.className = "special";
          ChapterNumberbuttons.innerHTML = items.CHAPTERNUMBER;

          ChapterNumberbuttons.style.background = "darksalmon";
          ChapterNumberbuttons.style.width = "100%";

          
          let CahapterNumbering = items.CHAPTERNUMBER;


          let Chapters = items.CHAPTER;


          const listBearer2 = document.createElement("ul");
          listBearer2.className = "ChapterBearer";

          listBearer2.appendChild(ChapterNumberbuttons);

          let sub = document.querySelector("#subChecker");

          setTimeout(() => {
            sub.appendChild(listBearer2);
          }, 100);

          ChapterNumberbuttons.addEventListener("click", function (e) {


            document.querySelector('#CHAPTERS').style.color = "black"
            document.querySelector('#VERSES').style.color = "green"
            document.querySelector('#BOOKS').style.color = "black"


            document.querySelector('#BOOKS').style.textDecoration= "none"
            document.querySelector('#CHAPTERS').style.textDecoration = "none"
            document.querySelector('#VERSES').style.textDecoration = "underline"
  
            let chapters = document.querySelectorAll("#chapterId");

            for (let i = 0; i < chapters.length; i++) {
              chapters[i].style.background = "darksalmon";

              if (chapters[i].innerHTML == e.target.innerHTML) {
                chapters[i].style.background = "green";
              }
            }

            document.querySelector("#subChecker").style.display = "none";

            document.querySelector("#subCheckerDiv").innerHTML = "";

            let Chapters = items.CHAPTER;

          Chapters.map((chapter) => {
            let Versebuttons = document.createElement("button");
            const listBearer3 = document.createElement("ul");
            const Header = document.createElement("h1");
            Versebuttons.id = "verseId";

            Versebuttons.className = "special";
            Versebuttons.innerHTML = chapter.VERSENUMBER;
            Versebuttons.style.background = "lightcoral";
            Versebuttons.style.borderRadius = "3px 7px";
            Versebuttons.style.width = "100%";
            

            listBearer3.className = "VerseBearer";

            listBearer3.appendChild(Versebuttons);

            const man = document.querySelector("#subCheckerDiv");
            man.style.display = "grid";

            if (window.innerWidth < 1200) {
              man.style.gridTemplateColumns = "auto auto auto auto auto";
            }

            man.appendChild(listBearer3);

            Versebuttons.addEventListener("click", function (e) {


              let versesId = document.querySelectorAll("#verseId");

              for (let i = 0; i < versesId.length; i++) {
                versesId[i].style.background = "darksalmon";

                if (versesId[i].innerHTML == e.target.innerHTML) {
                  versesId[i].style.background = "green";
                }
              }

              let VERSENUMBERses = e.target.innerHTML
              console.log(VERSENUMBERses);

              setVNUMBER(VERSENUMBERses)
              document.querySelector("#subCheckerDiv").style.display = "none";
              document.querySelector("#Appender2").style.display = "block";

              document.querySelector("#header").style.display = "none"
              document.querySelector("#header2").style.display = "block"
              document.querySelector("#header2Div").style.display = "block"




              if (window.innerWidth < 1200) {
                document.querySelector("#Appender2").style.width = "100%";
                document.querySelector("#Appender2").style.margin = "auto";
              }

              setCah(CahapterNumbering);

              setchapter(chapter.VERSENUMBER);

              setBiblenamer(bibleName.toUpperCase());

              setBibleName(bibleName);

              iterate = [];
              document.querySelector("#Appender2").innerHTML = "";

              document.querySelector("#ChapterInfo").style.display = "block";

              document.querySelector("#ChapterInfo").innerHTML =
                bibleName.toUpperCase() + " " + CahapterNumbering;



                document.querySelector("#ChapterInfo2").innerHTML =
                bibleName.toUpperCase() + " " + CahapterNumbering;

                document.querySelector('#VerseContent').style.display = "block"


                document.querySelector("#ChapterInfo2").addEventListener("click",function(){
                  
                })

                

              Chapters.map(rex => {
                let list = document.createElement("li");

                list.style.border = "2px solid black";
                list.style.borderRadius = "3px 7px";
                list.style.background = "wheat";
                let verseList = document.createElement("ul");
                verseList.style.padding = "3px 0px";
                verseList.style.margin = "0px";
                // list.innerHTML = verse.VERSEN

                let Bname = document.createElement("div");
                Bname.innerHTML = "NAB";
                Bname.style.background = "blue";

                list.innerHTML = ` ${Bname.innerHTML} : ${rex.VERSE}`;

                scanner.push(list.innerHTML);

                setscanner(scanner);
                setScannerlength(scanner.length);
              });

              let man = Chapters.filter(
                item => Versebuttons.innerHTML == item.VERSENUMBER
              );
              man.map(item => {
                iterate.push(item.VERSENUMBER);
              });

              setTimeout(() => {
                document.querySelector(`#NET${iterate}`).scrollIntoView();
                document.querySelector(`#section1`).scrollIntoView();

                setTimeout(() => {
                  document.querySelector(`#NET${iterate}`).style.opacity = 0;
                }, 100);

                setTimeout(() => {
                  document.querySelector(
                    `#NET${iterate}`
                  ).style.opacity = 0.1;
                }, 200);
                setTimeout(() => {
                  document.querySelector(
                    `#NET${iterate}`
                  ).style.opacity = 0.4;
                }, 300);
                setTimeout(() => {
                  document.querySelector(
                    `#NET${iterate}`
                  ).style.opacity = 0.5;
                }, 400);
                setTimeout(() => {
                  document.querySelector(
                    `#NET${iterate}`
                  ).style.opacity = 0.7;
                }, 500);
                setTimeout(() => {
                  document.querySelector(`#NET${iterate}`).style.opacity = 1;
                }, 600);
              }, 200);

              scan = [];
              scanner = [];
              AMPscan = [];
                              // HelpVerse(chapter,iterate,Chapters,scanner,Versebuttons,scan,AMPscan,e)
                              // HelpVerse()
            });
          




          });
        })
        });
      });
    });
  })
}
  

  const book = () => {

    document.querySelector('#BOOKS').style.color = "green"
    document.querySelector('#CHAPTERS').style.color = "black"
    document.querySelector('#VERSES').style.color = "black"

    document.querySelector('#BOOKS').style.textDecoration= "underline"
    document.querySelector('#CHAPTERS').style.textDecoration = "none"
    document.querySelector('#VERSES').style.textDecoration = "none"




    
    document.querySelector("#checkerDiv").style.display = "block";
    document.querySelector("#subChecker").style.display = "none";
    document.querySelector("#subCheckerDiv").style.display = "none";
    document.querySelector("#Appender2").style.display = "none";
    document.querySelector("#ChapterInfo").style.display = "none";
  };

  const verse = () => {

    document.querySelector('#BOOKS').style.color = "black"
    document.querySelector('#CHAPTERS').style.color = "black"
    document.querySelector('#VERSES').style.color = "green"
    document.querySelector('#VERSES').style.color = "green"

    document.querySelector('#BOOKS').style.textDecoration= "none"
    document.querySelector('#CHAPTERS').style.textDecoration = "none"
    document.querySelector('#VERSES').style.textDecoration = "underline"


    document.querySelector("#checkerDiv").style.display = "none";
    document.querySelector("#subChecker").style.display = "none";
    document.querySelector("#subCheckerDiv").style.display = "grid";
    document.querySelector("#Appender2").style.display = "none";
    document.querySelector("#ChapterInfo").style.display = "none";  };

  const chapter = () => {

    document.querySelector('#BOOKS').style.color = "black"
    document.querySelector('#CHAPTERS').style.color = "green"
    document.querySelector('#VERSES').style.color = "black"

    document.querySelector('#BOOKS').style.textDecoration= "none"
    document.querySelector('#CHAPTERS').style.textDecoration = "underline"
    document.querySelector('#VERSES').style.textDecoration = "none"

    document.querySelector("#checkerDiv").style.display = "none";
    document.querySelector("#subChecker").style.display = "grid";
    document.querySelector("#subCheckerDiv").style.display = "none";
    document.querySelector("#Appender2").style.display = "none";
    document.querySelector("#ChapterInfo").style.display = "none";
  };

  const returns = () => {

    document.querySelector('#VerseContent').style.display = "none"
    document.querySelector('#subChecker').style.display = "grid"
    document.querySelector('#header2Div').style.display = "none"
    document.querySelector('#header').style.display = "block"
    document.querySelector('#CHAPTERS').style.color = "green"
    document.querySelector('#CHAPTERS').style.textDecoration = "underline"
    document.querySelector('#VERSES').style.color = "black"
    document.querySelector('#VERSES').style.textDecoration = "none"

  };

  return (
    <ScrollView style= {styles.container}>
      <Amp
        AMP={AMP}
        bibleName={bibleName}
        bibleNamer={bibleNamer}
        scanner={scanners}
        scannerLength={scannerLength}
        chapter={CahapterNumbering}
        CahapterNumbering={CahapterNumbering}
      />

      <View id="header" >
        <View id="section1" style= {styles.section} >
          <TouchableOpacity onPress={() => book()}>
            <Text id="BOOKS" >{"BOOKS"}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => chapter()}>
            <Text id="CHAPTERS">CHAPTERS</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => verse()}>
            <Text id="VERSES" >VERSES</Text>
          </TouchableOpacity>
        </View>
        <Text id="ChapterInfo" ></Text>
      </View>

      <View id="header2Div" >
        <View id="header2">
          <Text id="ChapterInfo2" onPress={() => returns()}></Text>
        </View>
      </View>

      <View id="checkerDiv" ></View>
      <View id="subChecker" ></View>
      <View id="subCheckerDiv" ></View>

      <View id="blank">small</View>
      <View id="checkerDiv2">
        <Text id="chapterHeader" >CHAPTERS</Text>
        <View id="subChecker" ></View>
      </View>

      <View id="VerseContent">
        <View id="Appender2" ></View>
        <View id="copier"></View>

        <View>
          {/* Additional content */}
        </View>

        <View id="checkBoxes" >
                 
<legend>   NET<input id="NETCheck" type="checkbox"  defaultChecked={true}  /></legend>
<legend>   NAB<input id="NABCheck" type="checkbox" defaultChecked={true}  /></legend>
<legend>   MSG<input id="MSGCheck" type="checkbox" defaultChecked={true}  /></legend>
<legend>   AMP<input id="AMPCheck" type="checkbox" defaultChecked={true}  /></legend>
<legend>   ASVS<input id="ASVSCheck" type="checkbox" defaultChecked={true}  /></legend>
<legend>   kjv<input id="kjvCheck" type="checkbox" defaultChecked={true}  /></legend>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 0,
  },
  section: {
    justifyContent: 'space-between',
    flex: 1
  },
  tab: {
    color: 'black',
  },
  activeTab: {
    color: 'green',
    textDecorationLine: 'underline',
  },
  hidden: {
    display: 'none',
  },
  checkerDiv: {
    // Add styles for checkerDiv
  },
  chapterInfo: {
    display: 'block',
    width: '15em',
    margin: 'auto',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
