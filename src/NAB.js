import {useEffect, useState} from "react";
import { NET } from "./NET";

export function Nab({Amp, AMP, NET}) {
  const [stater, Setstater] = useState([]);

  const [NAB, setNab] = useState([]);

//   const [count,setCount] = useState(0)

  const [counter, setcounter] = useState("")
  useEffect(() => {
    let data = require("../src/JSON/data.json");
    setNab([...NAB, data]);
  }, []);

  let scanner = [];
  let iterate = [];
  let scan = [];
//   let AMPscan =+ [];
  // NAB BIBLE
  NAB.map(items => {
    let XMLBIBLE = items.XMLBIBLE;

    XMLBIBLE.map(itemss => {
      let Namebutton = document.createElement("button");
      Namebutton.className = "special";
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

      Namebutton.addEventListener("click", function () {
        document.querySelector("#checkerDiv2").style.display = "block";

        document.querySelector("#subChecker").innerHTML = "";
        document.querySelector("#subCheckerDiv").innerHTML = "";

        document.querySelector("#chapterHeader").style.display = "block";

        let BibleBook = itemss.BIBLEBOOK;

        BibleBook.map(items => {
          let list = document.createElement("li");

          let ChapterNumberbuttons = document.createElement("button");
          ChapterNumberbuttons.style.borderRadius = "3px 7px";

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

          ChapterNumberbuttons.addEventListener("click", function () {
            document.querySelector("#checkerDiv3").style.display = "block";

            document.querySelector("#verseHeader").style.display = "block";

            document.querySelector("#subCheckerDiv").innerHTML = "";

            let Chapters = items.CHAPTER;

            Chapters.map(chapter => {
              let Versebuttons = document.createElement("button");
              const listBearer3 = document.createElement("ul");
              const Header = document.createElement("h1");

              Versebuttons.className = "special";
              Versebuttons.innerHTML = chapter.VERSENUMBER;
              let VERSENUMBER = chapter.VERSENUMBER
              console.log(VERSENUMBER);
              Versebuttons.style.background = "coral";
              Versebuttons.style.borderRadius = "3px 7px";
              Versebuttons.style.width = "3em";
              //  iterate.push(chapter.VERSENUMBER)

              listBearer3.className = "VerseBearer";

              listBearer3.appendChild(Versebuttons);

              const man = document.querySelector("#subCheckerDiv");

              man.appendChild(listBearer3);

            Versebuttons.addEventListener("click", function  () {

                document.querySelector("#Appender2").style.visibility =
                  "visible";

                document.querySelector("#Appender2").innerHTML = "";
                document.querySelector("#BibleText").style.display = "block";

                document.querySelector("#textHeader").innerHTML =
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
                });

                let man = Chapters.filter(
                  item => Versebuttons.innerHTML == item.VERSENUMBER
                );
                iterate = [];
                man.map(item => {
                  iterate.push(item.VERSENUMBER);
                });


                
            



  

  
                //   Setstater([...stater, result]);
  
               
                setTimeout(() => {
                  document.querySelector(`#NET${iterate}`).scrollIntoView();

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
              });


           
// Setstater([...stater, mask])
              
            });
          });
        });
      });
    });
  });
  return (
    <>
    
   {stater} 

    </>
  )

  

  
}
