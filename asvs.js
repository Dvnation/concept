import { useEffect, useState } from "react";
import { Kjv } from "./kjvNew";

export function Bishop({
  chapters,
  VERSENUMBER,
  bibleNamer,
  chapter,
  AMPscan,
  AMPscanLength,
  scanner,
  scannerLength,
  bibleName,
  CahapterNumbering,
  VWscan,
  VWscanLength
}) {
  const [Bishop, setBishopData] = useState([]);
//   const [asvsScan, setAsvsScan] = useState([]);

  useEffect(() => {
    const data = require("./JSON/asvs.json");
    setBishopData([...Bishop,data]);
  }, []);

    
let asvsScan = []


Bishop.map(item=>{

    let whole = item.verses
    whole.map(item=>{
    
    let bookname = item.book_name
    let chapter = item.chapter
    let verse = item.verse
    let text = item.text
    
    if(bookname == bibleName && chapter == CahapterNumbering ){
    asvsScan.push(text)

    }})

    
    })
  return (
   <>
    <Kjv
      chapters={chapter}
      AMPscan={AMPscan}
      asvsScan={asvsScan}
      asvsScanLength={asvsScan.length}
      AMPscanLength={AMPscanLength}
      scanner={scanner}
      scannerLength={scannerLength}
      bibleName={bibleName}
      CahapterNumbering={CahapterNumbering}
      VWscanLength={VWscanLength}
      VWscan={VWscan}
    />
    </>
  );
}
