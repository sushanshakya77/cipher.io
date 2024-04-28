import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CipherType } from "@/constants/type";
import Quiz from "@/view/Quiz";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
    <div className="flex flex-col my-10">
      <div className="">
        <Accordion type="single" collapsible className="w-[600px]">
          <AccordionItem value="item-1">
            <AccordionTrigger>Teaching material no 1</AccordionTrigger>
            <AccordionContent>
              <img
                src="https://images.unsplash.com/photo-1714244274381-0f4a3e27c579?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-[400px] w-full object-cover rounded-md "
              />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium provident laudantium magni dolore consequuntur quis
              natus laboriosam velit error commodi? Aut modi veritatis totam
              assumenda placeat nihil, in esse accusantium!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Teaching material no 2</AccordionTrigger>
            <AccordionContent>
              <img
                src="https://images.unsplash.com/photo-1714244274381-0f4a3e27c579?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-[400px] w-full object-cover rounded-md "
              />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
              culpa error provident adipisci unde at, natus quia delectus
              asperiores quas iure eius, hic architecto corrupti totam laborum
              porro soluta dolores!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Teaching material no 3</AccordionTrigger>
            <AccordionContent>
              <img
                src="https://images.unsplash.com/photo-1714244274381-0f4a3e27c579?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-[400px] w-full object-cover rounded-md "
              />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
              culpa error provident adipisci unde at, natus quia delectus
              asperiores quas iure eius, hic architecto corrupti totam laborum
              porro soluta dolores!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="mt-[30px] space-y-6 bg-slate-600 px-10 py-14  rounded-xl">
        <Tabs defaultValue="encrypt" className="">
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
    </div>
  );
};

export default CaesarCipher;
