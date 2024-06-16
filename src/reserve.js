import {useEffect, useState} from "react";
import "./bible.css";
import { Amp } from "./AMP";
import { Test } from "./tester";


export function Bibler() {


  const [NAB, setItem] = useState([]);

  const [NET, SetNET] = useState([]);

  const [Vw, setVw] = useState([]);

  const [AMP, setAmp] = useState([])
  const [scann,setscann] = useState()

  const [sam, setsam] = useState();

  const [con, setcon] = useState([]);

  const [height, setHeight] = useState(0);

  const [chapternamer,setchapter] = useState()

  const [scannerLength, setScannerlength] = useState()

  const [bibleName,setBibleName] = useState()


  const[scanners,setscanner] = useState()
  const [CahapterNumbering, setCah] = useState()

  const [bibleNamer,setBiblenamer] = useState()

  useEffect(() => {
    const getHeight = () => {
      console.log(document.body.scrollHeight);

      // setHeight(document.body.scrollHeight)
      setHeight(window.innerHeight);

console.log(scanners);

};
    getHeight();
    let man = [2, 3, 4, 5, 6];
    let woman = [10, 20, 30, 40];

    for (let i = 0; i < Math.max(man.length, woman.length); i++) {
      if (man) {
        console.log(man[i]);
      }

      if (woman) {
        console.log(woman[i]);
      }
    }
  }, []);

  useEffect(() => {
    let data = require("../src/JSON/data.json");
    let AMPs = require("../src/JSON/AMP.json");
    let VW = require("../src/JSON/VW.json");

    let net = require("../src/JSON/net.json");

    setItem([...NAB, data]);

    setVw([...Vw, VW]);

    SetNET([...NET, net]);

    setAmp([...AMP, AMPs ])
  }, []);

  useEffect(() => {
    checkmate();
  });



let scanner = [];
    let iterate = [];
    let scan = []
    let AMPscan = []

  const checkmate = () => {
 


// NAB BIBLE
  let sky =   NAB.map(items => {

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

            

            // document.querySelector("#Appender").removeChild(document.querySelector("#listBearer"))
            const listBearer2 = document.createElement("ul");
            listBearer2.className = "ChapterBearer";

            listBearer2.appendChild(ChapterNumberbuttons);

            let sub = document.querySelector("#subChecker");

            // document.querySelector("#checkerDiv2").appendChild(sub)

            setTimeout(() => {
              sub.appendChild(listBearer2);
            }, 100);

            ChapterNumberbuttons.addEventListener("click", function () {
              document.querySelector("#checkerDiv").removeChild(listBearer);



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
                Versebuttons.style.background = "coral";
                Versebuttons.style.borderRadius = "3px 7px";
                Versebuttons.style.width = "3em";
               

                listBearer3.className = "VerseBearer";

                listBearer3.appendChild(Versebuttons);

                const man = document.querySelector("#subCheckerDiv");

                man.appendChild(listBearer3);

                Versebuttons.addEventListener("click", function () {
                  document.querySelector("#checkerDiv").innerHTML = ""


                    setCah(CahapterNumbering)

                    setchapter(chapter.VERSENUMBER)



                    setBiblenamer(bibleName.toUpperCase())

                    setBibleName(bibleName)
                    
                    document.querySelector("#Appender2").style.visibility = "visible"


                    iterate = []
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

                    setscanner(scanner)
                    setScannerlength(scanner.length)
                  });

                  let man = Chapters.filter(
                    item => Versebuttons.innerHTML == item.VERSENUMBER
                  );
                  man.map(item => {
                 
                    iterate.push(item.VERSENUMBER);
                  });





               

                  setTimeout(() => {
                    document.querySelector(`#NET${iterate}`).scrollIntoView();

                    setTimeout(() => {
                      document.querySelector(
                        `#NET${iterate}`
                      ).style.opacity = 0;
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
                      document.querySelector(
                        `#NET${iterate}`
                      ).style.opacity = 1;
                    }, 600);
                  }, 200);

                   

 scan = []
 scanner = []
 AMPscan = []

                  


                });
              });
            });
          });
        });
      });
      
return (

  <>
  
  {scanners}
 
  </>
)
    });



return sky
    


  };

  const maximize = () => {
    document.querySelector("#Appender").style.display = "none";
    document.querySelector("#BibleText").style.width = "100%";
    document.querySelector("#Appender2").style.marginLeft = "0";

    document.querySelector("#maxnimizer").style.justifyContent = "flex-start";
  };

  const minimize = () => {
    document.querySelector("#Appender2").style.width = "100%";
    document.querySelector("#Appender").style.display = "flex";
    document.querySelector("#Appender2").style.marginLeft = "2%";

  };

  return (
    <>
    
<Amp AMP= {AMP}  bibleName = {bibleName} bibleNamer={bibleNamer} scanner={scanners} scannerLength = {scannerLength} chapter= {CahapterNumbering} CahapterNumbering={CahapterNumbering}/>
    

 

      <div id="overall">
        <div id="Appender" style={{display: "flex"}}>
          <div id="BibleSection " style={{height: "100vh"}}>
            <h4 style={{textAlignLast: "center"}}>BIBLE BOOKS</h4>
            <div id="checkerDiv"></div>
          </div>

          <div id="checkerDiv2">
            <h4
              id="chapterHeader"
              style={{display: "none", textAlignLast: "center"}}
            >
              CHAPTERS
            </h4>
            <div id="subChecker"></div>
          </div>

          <div id="checkerDiv3">
            <h4
              id="verseHeader"
              style={{display: "none", textAlignLast: "center"}}
            >
              VERSES
            </h4>

            <div id="subCheckerDiv"></div>
          </div>
        </div>

        <div style={{display: "block", height: "100vh"}}>
          <div id="BibleText">
            <h4 id="textHeader"></h4>
            <div
              id="maxnimizer"
              style={{
                display: "flex",
                paddingRight: "3px",
                justifyContent: "end",
              }}
            >
              <button
                style={{
                  paddingRight: "9px",
                  margin: "4px",
                  background: "sandybrown",
                }}
                onClick={() => {
                  maximize();
                }}
              >
                Maximize
              </button>
              <button style={{margin: "4px"}} onClick={() => minimize()}>
                Minimize
              </button>
            </div>
          </div>

          <div id="Appender2"></div>
        </div>
      </div>
    </>
  );
              }