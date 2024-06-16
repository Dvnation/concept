import { useState, useEffect } from "react"
import { Nets } from "./NET";
import { Bishop } from "./asvs";







export function Vw({bibleNamer,chapter,AMPscan,AMPscanLength,scanner,scannerLength,bibleName,CahapterNumbering}){

    const [VWversion,setVWversion] = useState([])

    useEffect(() => {
        let data = require("../src/JSON/realAmp.json");
        setVWversion([...VWversion, data]);
      }, [])


    let VWscan = []


    const [VWscanLength,setVWScanLength] = useState()
  
    VWversion.map(item=>{
      let XMLBIBLE = item.XMLBIBLE
      
      XMLBIBLE.map(item=>{
          let BIBLEBOOK = item.BIBLEBOOK
      
          BIBLEBOOK.map(item=>{
              let CHAPTER = item.CHAPTER
      
      
      CHAPTER.map(item=>{
        
        // console.log(item.BOOKNAME)
          if(item.BOOKNAME == bibleNamer && CHAPTER[chapter]){

      
            let shake = CHAPTER[chapter].VERS

            shake.map(item=>{
              VWscan.push(item)

  
  
            })
            
  
    
        }
  
        })
    
    
       })
     })
    return(
  
      <>
    
      </>
    )
    })


    return(
        <>
       
<Bishop VWscan={VWscan} VWscanLength={VWscan.length} AMPscan= {AMPscan} chapters={chapter}  bibleNamer = {bibleNamer} AMPscanLength={AMPscanLength} scanner={scanner} scannerLength={scannerLength} bibleName = {bibleName}  CahapterNumbering= {CahapterNumbering}/>
        
        </>
    )


}