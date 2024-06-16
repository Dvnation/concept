import { useEffect, useState } from "react";
import { Nets } from "./NET";

export function Nab({ Amp, AMP, NET }) {
  const [data, setData] = useState([]);
  const [selectedBible, setSelectedBible] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [selectedVerses, setSelectedVerses] = useState([]);
  const [scannedVerses, setScannedVerses] = useState([]);
  const [copiedVerses, setCopiedVerses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await import("../concept/JSON/data.json");
      setData(data.XMLBIBLE);
    };
    fetchData();
  }, []);

  const handleBibleSelect = (bible) => {
    setSelectedBible(bible);
    setSelectedChapter(null);
    setSelectedVerses([]);
  };

  const handleChapterSelect = (chapter) => {
    setSelectedChapter(chapter);
    setSelectedVerses([]);
  };

  const handleVerseSelect = (verseNumber) => {
    const verses = selectedChapter.CHAPTER.filter(
      (verse) => verse.VERSENUMBER === verseNumber
    );
    setSelectedVerses(verses);
    const verseTexts = verses.map((verse) => `NAB : ${verse.VERSE}`);
    setScannedVerses(verseTexts);
  };

  const handleCopyText = (text) => {
    setCopiedVerses((prev) => {
      const updatedCopiedVerses = [...prev];
      if (updatedCopiedVerses.includes(text)) {
        const index = updatedCopiedVerses.indexOf(text);
        updatedCopiedVerses.splice(index, 1);
      } else {
        updatedCopiedVerses.push(text);
      }
      navigator.clipboard.writeText(updatedCopiedVerses.join("\n"));
      return updatedCopiedVerses;
    });
  };

  return (
    <div>
      <div id="checkerDiv">
        {data.map((bible, idx) => (
          <button
            key={idx}
            className="special"
            style={{ background: "pink", width: "100%" }}
            onClick={() => handleBibleSelect(bible)}
          >
            {bible.BIBLENAME}
          </button>
        ))}
      </div>

      {selectedBible && (
        <div id="checkerDiv2">
          {selectedBible.BIBLEBOOK.map((book, idx) => (
            <button
              key={idx}
              className="special"
              style={{ background: "darksalmon", width: "100%" }}
              onClick={() => handleChapterSelect(book)}
            >
              {book.CHAPTERNUMBER}
            </button>
          ))}
        </div>
      )}

      {selectedChapter && (
        <div id="checkerDiv3">
          {selectedChapter.CHAPTER.map((chapter, idx) => (
            <button
              key={idx}
              className="special"
              style={{ background: "coral", borderRadius: "3px 7px", width: "3em" }}
              onClick={() => handleVerseSelect(chapter.VERSENUMBER)}
            >
              {chapter.VERSENUMBER}
            </button>
          ))}
        </div>
      )}

      <ul id="Appender2" style={{ visibility: scannedVerses.length > 0 ? "visible" : "hidden" }}>
        {scannedVerses.map((verse, idx) => (
          <li
            key={idx}
            style={{ border: "2px solid black", borderRadius: "3px 7px", background: "wheat" }}
            onClick={() => handleCopyText(verse)}
          >
            {verse}
          </li>
        ))}
      </ul>

      {copiedVerses.length > 0 && (
        <button
          id="copyBid"
          style={{ position: "fixed" }}
          onClick={() => navigator.clipboard.writeText(copiedVerses.join("\n"))}
        >
          COPY
        </button>
      )}
    </div>
  );
}
