import { useEffect, useState } from "react";
import { Nets } from "./NET";

export function Kjv({chapters, VERSENUMBER,bibleNamer,chapter,AMPscan,AMPscanLength,scanner,scannerLength,bibleName,CahapterNumbering,VWscan,VWscanLength,asvsScan,asvsScanLength}){

const [getKjv,setKjv] = useState([])

useEffect(()=>{

    let data = require("./JSON/kjv.json");
    setKjv([...getKjv,data])

},[])



let kjvScan = []



getKjv.map(item=>{

    let whole = item.verses
    whole.map(item=>{
    
    let bookname = item.book_name
    let chapter = item.chapter
    let verse = item.verse
    let text = item.text
    
    if(bookname == bibleName && chapter == CahapterNumbering ){
    // console.log(text);
    kjvScan.push(text)
    // console.log(asvsScan);

    }


            // getAsvsscan([...asvsScan,text])

    
    })


})


return <Nets AMPscan= {AMPscan} asvsScan = {asvsScan} asvsScanLength = {asvsScanLength} AMPscanLength={AMPscanLength} scanner={scanner} scannerLength={scannerLength} bibleName = {bibleName}  CahapterNumbering= {CahapterNumbering} VWscanLength={VWscanLength} VWscan={VWscan} kjvScan={kjvScan} kjvScanLength = {kjvScan.length}/>


}