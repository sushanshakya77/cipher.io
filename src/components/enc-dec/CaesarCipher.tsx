import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CipherType } from "@/constants/type";
import Quiz from "@/view/Quiz";
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
    <div className="mt-[30px] space-y-6 bg-slate-600 px-10 py-14  rounded-xl">
      <Tabs defaultValue="encrypt" className="w-[400px">
        <TabsList className="grid w-full grid-cols-2 mb-10">
          <TabsTrigger
            className="data-[state=active]:bg-slate-500 data-[state=active]:text-slate-100 "
            value="encrypt"
          >
            Encryption/Decryption
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-slate-500 data-[state=active]:text-slate-100 "
            value="quiz"
          >
            Quiz
          </TabsTrigger>
        </TabsList>
        <TabsContent value="encrypt" className="space-y-6">
          <div className="grid grid-cols-2">
            <span className="text-white">Input Text:</span>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="border rounded-[6px] p-1 "
            />
          </div>

          <div className="grid grid-cols-2">
            <span className="text-white">Shift:</span>
            <input
              type="number"
              value={shift}
              onChange={(e) => setShift(parseInt(e.target.value))}
              className="border rounded-[6px] p-1"
            />
          </div>
          <div className="flex gap-[20px]">
            <button
              className="bg-red-200 rounded-[6px] py-2 px-[14px]"
              onClick={handleEncrypt}
            >
              Encrypt
            </button>
            <button
              className="bg-cyan-200 rounded-[6px] py-2 px-[14px]"
              onClick={handleDecrypt}
            >
              Decrypt
            </button>
          </div>
          <div className="grid grid-cols-2 items-center">
            <label className="text-white">Output Text:</label>
            <input
              type="text"
              className="bg-green-100 outline-none p-4 rounded-[6px]"
              value={outputText}
              readOnly
            />
          </div>
        </TabsContent>
        <TabsContent value="quiz">
          <Quiz type={CipherType.Caeser} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CaesarCipher;
