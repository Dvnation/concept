import { useState, useEffect } from "react";
import { Nets } from "./NET";
import { Vw } from "./VW";

export function Amp({
  bibleName,
  chapter,
  AMP,
  scan,
  scanner,
  CahapterNumbering,
  NET,
  scannerLength,
  bibleNamer
}) {
  const [AMPscan, setAMPscan] = useState([]);

  useEffect(() => {
    const scanResults = [];

    AMP.forEach(item => {
      const XMLBIBLE = item.XMLBIBLE;
      XMLBIBLE.forEach(item => {
        const BIBLEBOOK = item.BIBLEBOOK;
        BIBLEBOOK.forEach(item => {
          const CHAPTER = item.CHAPTER;
          CHAPTER.forEach(item => {
            if (item.BOOKNAME === bibleNamer && CHAPTER[chapter]) {
              const shake = CHAPTER[chapter].VERS;
              shake.forEach(item => {
                scanResults.push(item);
              });
            }
          });
        });
      });
    });

    setAMPscan(scanResults);
  }, [AMP, bibleNamer, chapter]);

  return (
    <>
      <Vw
        AMPscan={AMPscan}
        chapter={chapter}
        bibleNamer={bibleNamer}
        AMPscanLength={AMPscan.length}
        scanner={scanner}
        scannerLength={scannerLength}
        bibleName={bibleName}
        CahapterNumbering={CahapterNumbering}
      />
    </>
  );
}
