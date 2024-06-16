// import { ProductSearchClient } from "@google-cloud/vision"

import { Nets } from "./NET";
import { useState } from "react";
import { Vw } from "./VW";




export function Amp({bibleName,chapter,AMP,scan,scanner,CahapterNumbering,NET,scannerLength,bibleNamer}){
  let AMPscan = []


  const [AMPscanLength,setAmpScanLength] = useState()

  AMP.map(item=>{
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
            AMPscan.push(item)
            // console.log(item);


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

   

 

  // <Vw bibleNamer={bibleNamer} chapter={chapter} />
 

return(

  <>

  {/* <Newnab AMPscanLength={AMPscan.length} /> */}

  <Vw AMPscan= {AMPscan} chapter={chapter}  bibleNamer = {bibleNamer} AMPscanLength={AMPscan.length} scanner={scanner} scannerLength={scannerLength} bibleName = {bibleName}  CahapterNumbering= {CahapterNumbering}/>
  </>
)


  
 
  
}




// // import { ProductSearchClient } from "@google-cloud/vision"

// export function Amp(props){

//   props.AMP.map(item=>{
//     let XMLBIBLE = item.XMLBIBLE
    
//     XMLBIBLE.map(item=>{
//         let BIBLEBOOK = item.BIBLEBOOK
    
//         BIBLEBOOK.map(item=>{
//             let CHAPTER = item.CHAPTER
    
    
         
//     CHAPTER.map(item=>{
//       let  man = props.chapter
//       let won = `${man}.VERSENUMBER`
//       console.log(won)
//         if(item.BOOKNAME == props.bibleName && CHAPTER[won]){
    
  
//             let shake = CHAPTER[props.chapter].VERS
//             shake.map(item=>{
//            return      props.AMPscan.push(item)
//             })
            
  
    
//         }

//         console.log(won)
//     })
  
      
  
  
//      })
//    })
//   return props.AMPscan
//   })
  
//   return props.AMPscan

// }