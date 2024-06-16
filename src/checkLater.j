Sure! Below is a basic example of how you can create a file upload component in React.js and scan the uploaded document for keywords using JavaScript:

```jsx
import React, { useState } from 'react';

const KeywordScanner = () => {
  const [keywords, setKeywords] = useState([]);
  
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const text = e.target.result;
      const scannedKeywords = scanForKeywords(text);
      setKeywords(scannedKeywords);
    };

    reader.readAsText(file);
  };

  const scanForKeywords = (text) => {
    const keywordsToScan = ['keyword1', 'keyword2', 'keyword3']; // Add your keywords here
    const foundKeywords = [];

    keywordsToScan.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
      if (regex.test(text)) {
        foundKeywords.push(keyword);
      }
    });

    return foundKeywords;
  };

  return (
    <div>
      <h2>Document Keyword Scanner</h2>
      <input type="file" onChange={handleFileUpload} />
      <h3>Keywords found:</h3>
      <ul>
        {keywords.map((keyword, index) => (
          <li key={index}>{keyword}</li>
        ))}
      </ul>
    </div>
  );
};

export default KeywordScanner;
```

In this example, we have a `KeywordScanner` component that allows users to upload a document. Once a document is uploaded, it's scanned for predefined keywords using the `scanForKeywords` function. The found keywords are then displayed below the upload input.

Make sure to replace `'keyword1', 'keyword2', 'keyword3'` with the actual keywords you want to scan for. Additionally, you may need to enhance the scanning logic based on the specific requirements of your keyword matching criteria.