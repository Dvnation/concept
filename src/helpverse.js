// import { useState } from "react";

// export function HelpVerse(chapter,iterate,Chapters,scanner,Versebuttons,scan,AMPscan,e)
// {
    
//     // const [AMP, setAmp] = useState([]);

//     // const [chapternamer, setchapter] = useState();
  
//     // const [scannerLength, setScannerlength] = useState();
  
//     // const [bibleName, setBibleName] = useState();
  
//     // const [scanners, setscanner] = useState();
//     // // const [CahapterNumbering, setCah] = useState();
  
//     // const [bibleNamer, setBiblenamer] = useState();
  
//     // const [NAB, setItem] = useState([]);
  
//     // const [VNUMBER, setVNUMBER] = useState();

//     let versesId = document.querySelectorAll("#verseId");

//     for (let i = 0; i < versesId.length; i++) {
//       versesId[i].style.background = "darksalmon";

//       if (versesId[i].innerHTML == e.target.innerHTML) {
//         versesId[i].style.background = "green";
//       }
//     }

//     let VERSENUMBERses = e.target.innerHTML
//     console.log(VERSENUMBERses);

//     setVNUMBER(VERSENUMBERses)
//     document.querySelector("#subCheckerDiv").style.display = "none";
//     document.querySelector("#Appender2").style.display = "block";

//     document.querySelector("#header").style.display = "none"
//     document.querySelector("#header2").style.display = "block"
//     document.querySelector("#header2Div").style.display = "block"




//     if (window.innerWidth < 1200) {
//       document.querySelector("#Appender2").style.width = "100%";
//       document.querySelector("#Appender2").style.margin = "auto";
//     }

//     setCah(CahapterNumbering);

//     setchapter(chapter.VERSENUMBER);

//     setBiblenamer(bibleName.toUpperCase());

//     setBibleName(bibleName);

//     iterate = [];
//     document.querySelector("#Appender2").innerHTML = "";

//     document.querySelector("#ChapterInfo").style.display = "block";

//     document.querySelector("#ChapterInfo").innerHTML =
//       bibleName.toUpperCase() + " " + CahapterNumbering;



//       document.querySelector("#ChapterInfo2").innerHTML =
//       bibleName.toUpperCase() + " " + CahapterNumbering;


//     Chapters.map(rex => {
//       let list = document.createElement("li");

//       list.style.border = "2px solid black";
//       list.style.borderRadius = "3px 7px";
//       list.style.background = "wheat";
//       let verseList = document.createElement("ul");
//       verseList.style.padding = "3px 0px";
//       verseList.style.margin = "0px";
//       // list.innerHTML = verse.VERSEN

//       let Bname = document.createElement("div");
//       Bname.innerHTML = "NAB";
//       Bname.style.background = "blue";

//       list.innerHTML = ` ${Bname.innerHTML} : ${rex.VERSE}`;

//       scanner.push(list.innerHTML);

//       setscanner(scanner);
//       setScannerlength(scanner.length);
//     });

//     let man = Chapters.filter(
//       item => Versebuttons.innerHTML == item.VERSENUMBER
//     );
//     man.map(item => {
//       iterate.push(item.VERSENUMBER);
//     });

//     setTimeout(() => {
//       document.querySelector(`#NET${iterate}`).scrollIntoView();
//       document.querySelector(`#section1`).scrollIntoView();

//       setTimeout(() => {
//         document.querySelector(`#NET${iterate}`).style.opacity = 0;
//       }, 100);

//       setTimeout(() => {
//         document.querySelector(
//           `#NET${iterate}`
//         ).style.opacity = 0.1;
//       }, 200);
//       setTimeout(() => {
//         document.querySelector(
//           `#NET${iterate}`
//         ).style.opacity = 0.4;
//       }, 300);
//       setTimeout(() => {
//         document.querySelector(
//           `#NET${iterate}`
//         ).style.opacity = 0.5;
//       }, 400);
//       setTimeout(() => {
//         document.querySelector(
//           `#NET${iterate}`
//         ).style.opacity = 0.7;
//       }, 500);
//       setTimeout(() => {
//         document.querySelector(`#NET${iterate}`).style.opacity = 1;
//       }, 600);
//     }, 200);

//     scan = [];
//     scanner = [];
//     AMPscan = [];
// }