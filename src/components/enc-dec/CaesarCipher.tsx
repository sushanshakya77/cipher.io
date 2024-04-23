import React, { useState } from "react";

const CaesarCipher: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const [shift, setShift] = useState<number>(0);
  const [outputText, setOutputText] = useState<string>("");

  const encrypt = (text: string, shift: number): string => {
    return text
      .split("")
      .map((char: string) => {
        if (char.match(/[a-z]/i)) {
          const code: number = char.charCodeAt(0);
          let shiftedCode: number = code + shift;
          if (char === char.toLowerCase()) {
            if (shiftedCode > 122) shiftedCode -= 26;
            else if (shiftedCode < 97) shiftedCode += 26;
          } else {
            if (shiftedCode > 90) shiftedCode -= 26;
            else if (shiftedCode < 65) shiftedCode += 26;
          }
          return String.fromCharCode(shiftedCode);
        }
        return char;
      })
      .join("");
  };

  const decrypt = (text: string, shift: number): string => {
    return encrypt(text, -shift);
  };

  const handleEncrypt = (): void => {
    setOutputText(encrypt(inputText, shift));
  };

  const handleDecrypt = (): void => {
    setOutputText(decrypt(inputText, shift));
  };

  return (
    <div>
      <h2>Caesar Cipher</h2>
      <div>
        <label className="text-red-500">
          Input Text:
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className=""
          />
        </label>
      </div>
      <div>
        <label>
          Shift:
          <input
            type="number"
            value={shift}
            onChange={(e) => setShift(parseInt(e.target.value))}
          />
        </label>
      </div>
      <div>
        <button onClick={handleEncrypt}>Encrypt</button>
        <button onClick={handleDecrypt}>Decrypt</button>
      </div>
      <div>
        <label>
          Output Text:
          <input type="text" value={outputText} readOnly />
        </label>
      </div>
    </div>
  );
};

export default CaesarCipher;
