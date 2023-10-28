import React, { useEffect,useRef,useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "./codestyle.css";

export default function Code({ code, language }) {
  const codeRef = useRef(null);
  const [copyText, setCopyText] = useState('copy');

  // funtion for copy
  const copytoclipboard=(text)=>{
    navigator.clipboard.writeText(text)
  }

  const copyhandleclicked=()=>{
    copytoclipboard(code);
    setCopyText('copied')
    setTimeout(() => {
      setCopyText('copy')
    }, 2000);
  }

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightAll(codeRef.current);
    }
    }, [code]);
  return (
    <div className="codeblock">
      <pre  className="block-code">
      <button className="copy-button" onClick={copyhandleclicked} >{copyText}</button>
        <code ref={codeRef} className={` language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}
