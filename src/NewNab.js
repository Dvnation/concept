
import {useEffect, useState} from "react";

import { Nets } from "./NET";



export function Newnab({AMPscanLength}){


  


    const [AMP, setAmp] = useState([]);

    const [chapternamer, setchapter] = useState();
  
    const [scannerLength, setScannerlength] = useState();
  
    const [bibleName, setBibleName] = useState();
  
    const [scanners, setscanner] = useState();
    const [CahapterNumbering, setCah] = useState();
  
    const [bibleNamer, setBiblenamer] = useState();
  
    const [NAB, setItem] = useState([]);



    useEffect(() => {
    
        let data = require("../src/JSON/data.json");
    
        setItem([...NAB, data]);



      }, []);


useEffect(()=>{

ult()
},[NAB])


let scanner = [];
let iterate = [];
let scan = [];
let AMPscan = []

const ult = ()=>{
  NAB.map(items => {

   
    console.log("blue");
    let XMLBIBLE = items.XMLBIBLE;

    XMLBIBLE.map(itemss => {
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

        BibleBook.map(items => {
          let list = document.createElement("li");

          let ChapterNumberbuttons = document.createElement("button");
          ChapterNumberbuttons.style.borderRadius = "3px 7px";
          ChapterNumberbuttons.id = "chapterId";

          ChapterNumberbuttons.className = "special";
          ChapterNumberbuttons.innerHTML = items.CHAPTERNUMBER;

          ChapterNumberbuttons.style.background = "darksalmon";
          ChapterNumberbuttons.style.width = "100%";

          let CahapterNumbering = items.CHAPTERNUMBER;

          const listBearer2 = document.createElement("ul");
          listBearer2.className = "ChapterBearer";

          listBearer2.appendChild(ChapterNumberbuttons);

          let sub = document.querySelector("#subChecker");

          setTimeout(() => {
            sub.appendChild(listBearer2);
          }, 100);

          ChapterNumberbuttons.addEventListener("click", function (e) {
            // document.querySelector("#checkerDiv").innerHTML = ""
console.log("blueChapter");
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

            Chapters.map(chapter => {
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

                document.querySelector("#subCheckerDiv").style.display = "none";
                document.querySelector("#Appender2").style.display = "block";

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

              });
            });
          });
        });
      });
    });
  });


}



      return(

        <>
        
        {/* <Nets AMPscan= {AMPscan} AMPscanLength={AMPscan.length} scanner={scanner} scannerLength={scannerLength} bibleName = {bibleName}  CahapterNumbering= {CahapterNumbering}/> */}

        </>
      )

  
  
 
}