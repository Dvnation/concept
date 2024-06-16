import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Button, Clipboard } from 'react-native';
import { Vw } from './VW';

export function Nets({
  scanner,
  bibleName,
  AMPscan,
  CahapterNumbering,
  scannerLength,
  AMPscanLength,
  VWscan,
  VWscanLength,
  asvsScan,
  asvsScanLength,
  kjvScan,
  kjvScanLength,
}) {
  const [Net, setNet] = useState([]);
  const [copied, setCopied] = useState([]);

  useEffect(() => {
    const net = require('../concept/JSON/net.json');
    setNet([net]);
  }, []);


  let scan = [];
  Net.map(content => {
    let books = content.verses;
    books.map(item => {
      if (item.chapter == CahapterNumbering && item.book_name == bibleName) {
        let texts = item.text;
        scan.push(texts);
        // console.log(scan);
      }
    });
    let Ulist = document.createElement("ul");
    Ulist.style.padding = "0px";
    Ulist.style.width = "fit-content";
    Ulist.style.paddingBottom = "23px";
    // Ulist.style.overflow = "scroll";
    Ulist.id = "UlistId";

    for (
      let i = 0;
      i <
      Math.max(
        scan.length,
        scannerLength,
        AMPscanLength,
        VWscanLength,
        asvsScanLength,
        kjvScanLength
      );
      i++
    ) {
      if (scan[i]) {
        let list = document.createElement("li");
        list.style.background = "pink";
        list.id = `NET${i + 1}`;
        list.style.overflow = "scroll";

        let man = document.createElement("h1");
        man.innerText = "NET";
        man.style.color = "red";
        list.style.marginBottom = "9px";
        list.style.boxShadow = "1px 3px 8px 0px";
        list.style.marginLeft = "1.3%";
        list.style.marginRight = "1.3%";
        list.style.paddingLeft = "2.2%";
        list.style.paddingRight = "2%";

        list.innerHTML = `${i + 1} ${man.innerText}  : ${scan[i]}`;
        Ulist.appendChild(list);

        document.querySelector("#NETCheck").addEventListener("change", e => {
          if (e.target.checked) {
            list.style.display = "block";
          } else {
            list.style.display = "none";
          }
        });

        list.addEventListener("click", function (e) {
          if (list.style.textDecoration !== "underline") {
            list.style.textDecoration = "underline";
            copied.push(list.innerHTML);
            document.querySelector("#copyBid").style.display = "block";
          } else {
            list.style.textDecoration = "none";
            let ii = copied.indexOf(list.innerHTML);
            copied.splice(ii, 1);
            if (copied == "") {
              document.querySelector("#copyBid").style.display = "none";
            }
          }

          //     list.style.textDecoration = "underline"

          navigator.clipboard.writeText(copied);
        });
      }

      if (scanner[i]) {
        let list = document.createElement("li");
        list.id = `NAB${i + 1}`;
        list.style.background = "yellow";
        list.style.marginBottom = "9px";
        list.style.boxShadow = "1px 3px 8px 0px";
        list.style.marginLeft = "1.3%";
        list.style.marginRight = "1.3%";
        list.style.paddingLeft = "2.2%";
        list.style.paddingRight = "2%";
        list.style.paddingTop = "1%";
        list.style.paddingBottom = "1%";

        // list.innerHTML = scanner[i];
        list.innerHTML = `${i + 1} ${scanner[i]}`;

        Ulist.appendChild(list);

        document.querySelector("#NABCheck").addEventListener("change", e => {
          if (e.target.checked) {
            list.style.display = "block";
          } else {
            list.style.display = "none";
          }
        });

        list.addEventListener("click", function (e) {
          console.log(e.target.innerHTML);
          if (list.style.textDecoration !== "underline") {
            list.style.textDecoration = "underline";
            copied.push(list.innerHTML);
            document.querySelector("#copyBid").style.display = "block";
          } else {
            list.style.textDecoration = "none";
            let ii = copied.indexOf(list.innerHTML);
            copied.splice(ii, 1);
            if (copied == "") {
              document.querySelector("#copyBid").style.display = "none";
            }
          }

          //     list.style.textDecoration = "underline"

          navigator.clipboard.writeText(copied);
        });
      }

      if (AMPscan) {
        let list = document.createElement("li");
        list.id = `MSG${i + 1}`;
        list.style.background = "coral";
        list.style.marginBottom = "9px";
        list.style.boxShadow = "1px 3px 8px 0px";
        list.style.marginLeft = "1.3%";
        list.style.marginRight = "1.3%";
        list.style.paddingLeft = "2.2%";
        list.style.paddingRight = "2%";
        list.style.paddingTop = "1%";
        list.style.paddingBottom = "1%";

        list.innerHTML = `${i + 1} MSG :  ${AMPscan[i]}`;

        Ulist.appendChild(list);

        document.querySelector("#MSGCheck").addEventListener("change", e => {
          if (e.target.checked) {
            list.style.display = "block";
          } else {
            list.style.display = "none";
          }
        });

        list.addEventListener("click", function (e) {
          console.log(e.target.innerHTML);
          if (list.style.textDecoration !== "underline") {
            list.style.textDecoration = "underline";
            copied.push(list.innerHTML);
            document.querySelector("#copyBid").style.display = "block";
          } else {
            list.style.textDecoration = "none";
            let ii = copied.indexOf(list.innerHTML);
            copied.splice(ii, 1);
            if (copied == "") {
              document.querySelector("#copyBid").style.display = "none";
            }
          }

          //     list.style.textDecoration = "underline"

          navigator.clipboard.writeText(copied);
        });
      }

      if (VWscan) {
        let list = document.createElement("li");
        list.id = `AMP${i + 1}`;
        list.style.background = "bisque";
        list.style.marginBottom = "9px";
        list.style.boxShadow = "1px 3px 8px 0px";
        list.style.marginLeft = "1.3%";
        list.style.marginRight = "1.3%";
        list.style.paddingLeft = "2.2%";
        list.style.paddingRight = "2%";
        list.style.paddingTop = "1%";
        list.style.paddingBottom = "1%";

        list.addEventListener("click", function (e) {
          console.log(e.target.innerHTML);
          if (list.style.textDecoration !== "underline") {
            list.style.textDecoration = "underline";
            copied.push(list.innerHTML);
            document.querySelector("#copyBid").style.display = "block";
          } else {
            list.style.textDecoration = "none";
            let ii = copied.indexOf(list.innerHTML);
            copied.splice(ii, 1);
            if (copied == "") {
              document.querySelector("#copyBid").style.display = "none";
            }
          }

          //     list.style.textDecoration = "underline"

          navigator.clipboard.writeText(copied);
        });

        list.innerHTML = `${i + 1} AMP : ${VWscan[i]}`;
        Ulist.appendChild(list);

        document.querySelector("#AMPCheck").addEventListener("change", e => {
          if (e.target.checked) {
            list.style.display = "block";
          } else {
            list.style.display = "none";
          }
        });
      }

      if (asvsScan) {
        let list = document.createElement("li");
        list.id = `ASVS${i + 1}`;
        list.style.background = "gold";
        list.style.marginBottom = "9px";
        list.style.boxShadow = "1px 3px 8px 0px";
        list.style.marginLeft = "1.3%";
        list.style.marginRight = "1.3%";
        list.style.paddingLeft = "2.2%";
        list.style.paddingRight = "2%";
        list.style.paddingTop = "1%";
        list.style.paddingBottom = "1%";

        list.innerHTML = `${i + 1} ASVS : ${asvsScan[i]}`;
        Ulist.appendChild(list);

        document.querySelector("#ASVSCheck").addEventListener("change", e => {
          if (e.target.checked) {
            list.style.display = "block";
          } else {
            list.style.display = "none";
          }
        });

        list.addEventListener("click", function (e) {
          console.log(e.target.innerHTML);
          if (list.style.textDecoration !== "underline") {
            list.style.textDecoration = "underline";
            copied.push(list.innerHTML);
            document.querySelector("#copyBid").style.display = "block";
          } else {
            list.style.textDecoration = "none";
            let ii = copied.indexOf(list.innerHTML);
            copied.splice(ii, 1);
            if (copied == "") {
              if (copied == "") {
                document.querySelector("#copyBid").style.display = "none";
              }
            }
          }

          //     list.style.textDecoration = "underline"

          navigator.clipboard.writeText(copied);
        });
      }

      if (kjvScan) {
        let list = document.createElement("li");
        list.id = `KJV${i + 1}${"man".toUpperCase()}`;
        list.className = "sparrow";
        list.style.background = "aquamarine";
        list.style.marginBottom = "35px";
        list.style.boxShadow = "1px 3px 8px 0px";
        list.style.marginLeft = "1.3%";
        list.style.marginRight = "1.3%";
        list.style.paddingLeft = "2.2%";
        list.style.paddingRight = "2%";
        list.style.paddingTop = "1%";
        list.style.paddingBottom = "1%";

        list.innerHTML = `${i + 1} KJV : ${kjvScan[i]}`;
        Ulist.appendChild(list);

        document.querySelector("#kjvCheck").addEventListener("change", e => {
          if (e.target.checked) {
            list.style.display = "block";
            document.querySelector(`#ASVS${i + 1}`).style.marginBottom = "9px";
          } else {
            list.style.display = "none";
            document.querySelector(`#ASVS${i + 1}`).style.marginBottom = "35px";
          }
        });

        list.addEventListener("click", function (e) {
          console.log(e.target.innerHTML);
          if (list.style.textDecoration !== "underline") {
            list.style.textDecoration = "underline";
            copied.push(list.innerHTML);
            document.querySelector("#copyBid").style.display = "block";
          } else {
            list.style.textDecoration = "none";
            let ii = copied.indexOf(list.innerHTML);
            copied.splice(ii, 1);

            if (copied == "") {
              document.querySelector("#copyBid").style.display = "none";
            }
          }

          //     list.style.textDecoration = "underline"

          navigator.clipboard.writeText(copied);
        });
      }
    }

    let copyB = document.createElement("button");
    copyB.id = "copyBid";
    copyB.innerHTML = "COPY";
    copyB.style.position = "fixed";

    copyB.style.display = "none";

    let copyBDiv = document.createElement("div");
    copyBDiv.appendChild(copyB);
    Ulist.appendChild(copyBDiv);

    copyB.addEventListener("click", function sem() {
      // navigator.clipboard
      // .writeText("hihihi")

      navigator.clipboard
        .readText()

        .then(textRead => {
          console.log(textRead.indexOf());
          // setCopied("");
          console.log(textRead);
          if (copied !== "") {
            for (let i = 0; i < copied.length; i++) {
              const element = copied[i];
              console.log(element);
              let parags = document.createElement("p");
              parags.innerHTML = element;
              // document.querySelector("#copier").innerHTML = ""

              document.querySelector("#copier").appendChild(parags);

              if (document.querySelector("#copier").appendChild(parags)) {
                document.querySelector("body").style.overflow = "auto";
              } else {
                document.querySelector("#copier").innerHTML = "";
                document.querySelector("body").style.overflow = "hidden";
              }
            }
          } else {
            let jugger = copied.indexOf(textRead);
            copied.splice(jugger, 1);
            console.log(copied.toString());
          }
        });
    });

    document.querySelector("#Appender2").innerHTML = "";

    document.querySelector("#Appender2").appendChild(Ulist);

    //
  });

  return <></>;
 
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  listItem: {
    marginBottom: 9,
    padding: 10,
    borderRadius: 5,
    boxShadow: '1px 3px 8px 0px',
  },
  pink: {
    backgroundColor: 'pink',
  },
  yellow: {
    backgroundColor: 'yellow',
  },
  coral: {
    backgroundColor: 'coral',
  },
  bisque: {
    backgroundColor: 'bisque',
  },
  gold: {
    backgroundColor: 'gold',
  },
  aquamarine: {
    backgroundColor: 'aquamarine',
  },
  underline: {
    textDecorationLine: 'underline',
  },
});
