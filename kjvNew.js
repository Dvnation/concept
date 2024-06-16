import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
// import { Nets } from "./NET";
import { Verse } from "./verse";


export function Kjv({
  name,chapters, verseOutline
}) {
  const [getKjv, setKjv] = useState([]);
  const [kjvScan, setKjvScan] = useState([])

  useEffect(() => {
    let data = require("./JSON/kjv.json");
    setKjv([...getKjv,data]);
  }, []);

  kjvScan.splice(0, kjvScan.length)

  getKjv.forEach(item => {
    let whole = item.verses;
    whole.forEach(verse => {
      let bookname = verse.book_name;
      let chapter = verse.chapter;
      let text = verse.text;

      if (bookname === name && chapter == chapters) {
        kjvScan.push(text);
       
      }
    });
  });

  return (
    <>
    
           <Verse verses={verseOutline} kjvScan = {kjvScan}  />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
