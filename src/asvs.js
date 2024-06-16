import { useEffect, useState } from "react";
import { Nets } from "./NET";
import { Kjv } from "./kjv";

export function Bishop({chapters, VERSENUMBER,bibleNamer,chapter,AMPscan,AMPscanLength,scanner,scannerLength,bibleName,CahapterNumbering,VWscan,VWscanLength}){


    const [Bishop, setgetBishop] = useState([])
    // const [asvsScan, getAsvsscan] = useState([])

    useEffect(()=>{

        let data = require("./JSON/asvs.json");
        setgetBishop([...Bishop,data])


    },[])


   
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
        // console.log(asvsScan);

        }


                // getAsvsscan([...asvsScan,text])

        
        })

        
        })
       
   return     (
    <>
       <Kjv chapters={chapter} AMPscan= {AMPscan} asvsScan = {asvsScan} asvsScanLength = {asvsScan.length} AMPscanLength={AMPscanLength} scanner={scanner} scannerLength={scannerLength} bibleName = {bibleName}  CahapterNumbering= {CahapterNumbering} VWscanLength={VWscanLength} VWscan={VWscan}/>

    </>
   )  
   


}