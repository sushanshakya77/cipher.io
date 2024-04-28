import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CipherType } from "@/constants/type";
import Quiz from "@/view/Quiz";
import { useState } from "react";

const Monoalphabetic = () => {
  const [inputText, setInputText] = useState<string>("");
  const [outputText, setOutputText] = useState<string>("");
  const [encryptionKey, setEncryptionKey] = useState<string>(
    "abcdefghijklmnopqrstuvwxyz"
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEncryptionKey(event.target.value.toLowerCase());
  };

  const encrypt = (text: string, key: string) => {
    const normalizedInput = text.toLowerCase().replace(/[^a-z]/g, "");
    const encryptedText = normalizedInput
      .split("")
      .map((char) => {
        const index = "abcdefghijklmnopqrstuvwxyz".indexOf(char);
        return index !== -1 ? key[index] : char;
      })
      .join("");
    return encryptedText;
  };

  const decrypt = (text: string, key: string) => {
    const decryptedText = text
      .split("")
      .map((char) => {
        const index = key.indexOf(char);
        return index !== -1 ? "abcdefghijklmnopqrstuvwxyz"[index] : char;
      })
      .join("");
    return decryptedText;
  };

  const handleEncrypt = () => {
    const encryptedText = encrypt(inputText, encryptionKey);
    setOutputText(encryptedText);
  };

  const handleDecrypt = () => {
    const decryptedText = decrypt(outputText, encryptionKey);
    setOutputText(decryptedText);
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
              id="inputText"
              type="text"
              value={inputText}
              onChange={handleInputChange}
              className="border rounded-[6px] p-1 "
            />
          </div>

          <div className="grid grid-cols-2">
            <span className="text-white">Shift:</span>
            <input
              type="text"
              id="encryptionKey"
              value={encryptionKey}
              onChange={handleKeyChange}
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
          <Quiz type={CipherType.Monoalphabetic} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Monoalphabetic;
