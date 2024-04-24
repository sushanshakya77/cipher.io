import { CipherType } from "@/constants/type";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

type IQuiz = {
  type: CipherType;
};

const Quiz = ({ type }: IQuiz) => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [collectPoints, setCollectPoints] = useState(0);
  const [value, setValue] = useState("");

  const questions =
    type === CipherType.Caeser
      ? [
          {
            question: "What is the Caesar cipher?",
            options: [
              "A type of salad dressing",
              "A substitution cipher",
              "A secret military code",
              "An ancient encryption method",
            ],
            answer: "A substitution cipher",
          },
          {
            question:
              "Who is credited with the invention of the Caesar cipher?",
            options: [
              "Julius Caesar",
              "Leonardo da Vinci",
              "Albert Einstein",
              "Isaac Newton",
            ],
            answer: "Julius Caesar",
          },
          {
            question: "How does the Caesar cipher work?",
            options: [
              "By reversing the alphabet",
              "By shifting each letter by a fixed number",
              "By scrambling letters randomly",
              "By converting letters to numbers",
            ],
            answer: "By shifting each letter by a fixed number",
          },
          {
            question: "What is the key used in a Caesar cipher?",
            options: [
              "The recipient's name",
              "The number of letters in the message",
              "The alphabet",
              "The number of shifts",
            ],
            answer: "The number of shifts",
          },
          {
            question:
              "If a Caesar cipher has a shift of 3, what letter would 'A' be encrypted to?",
            options: ["A", "D", "C", "F"],
            answer: "D",
          },
          {
            question: "What is the decryption process in a Caesar cipher?",
            options: [
              "Adding the shift value",
              "Subtracting the shift value",
              "Multiplying the shift value",
              "Dividing the shift value",
            ],
            answer: "Subtracting the shift value",
          },
        ]
      : [
          {
            question: "What is a monoalphabetic cipher?",
            options: [
              "A cipher that uses multiple alphabets for encryption",
              "A cipher that uses the same alphabet for encryption",
              "A cipher that uses a key to encrypt messages",
              "A cipher that uses a different alphabet for each letter",
            ],
            answer: "A cipher that uses the same alphabet for encryption",
          },
          {
            question:
              "How does a Caesar cipher differ from a monoalphabetic cipher?",
            options: [
              "A Caesar cipher uses a fixed shift, while a monoalphabetic cipher uses a variable shift",
              "A Caesar cipher uses a variable shift, while a monoalphabetic cipher uses a fixed shift",
              "A Caesar cipher is a type of monoalphabetic cipher",
              "A Caesar cipher is a type of polyalphabetic cipher",
            ],
            answer: "A Caesar cipher is a type of monoalphabetic cipher",
          },
          {
            question: "What is the purpose of a monoalphabetic cipher?",
            options: [
              "To provide secure communication over a long distance",
              "To provide secure communication over a short distance",
              "To provide a simple way to encrypt messages",
              "To provide a complex way to encrypt messages",
            ],
            answer: "To provide a simple way to encrypt messages",
          },
          {
            question:
              "What is the most common weakness of a monoalphabetic cipher?",
            options: [
              "It is easy to break using a brute force attack",
              "It is easy to break using a frequency analysis attack",
              "It is easy to break using a cryptanalysis attack",
              "It is impossible to break using any attack",
            ],
            answer: "It is easy to break using a frequency analysis attack",
          },
          {
            question:
              "What is a common technique used to break a monoalphabetic cipher?",
            options: [
              "Brute force attack",
              "Frequency analysis attack",
              "Cryptanalysis attack",
              "Kerckhoffs's principle attack",
            ],
            answer: "Frequency analysis attack",
          },
          {
            question:
              "What is the difference between a monoalphabetic cipher and a polyalphabetic cipher?",
            options: [
              "A monoalphabetic cipher uses the same alphabet for encryption, while a polyalphabetic cipher uses multiple alphabets for encryption",
              "A monoalphabetic cipher uses a key to encrypt messages, while a polyalphabetic cipher does not use a key",
              "A monoalphabetic cipher is easy to break, while a polyalphabetic cipher is impossible to break",
              "A monoalphabetic cipher uses a variable shift, while a polyalphabetic cipher uses a fixed shift",
            ],
            answer:
              "A monoalphabetic cipher uses the same alphabet for encryption, while a polyalphabetic cipher uses multiple alphabets for encryption",
          },
          {
            question:
              "In a monoalphabetic cipher, how many possible keys are there?",
            options: ["26", "52", "10", "1"],
            answer: "26",
          },
        ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value) {
      questions.length - 1 !== activeQuestion &&
        setActiveQuestion((prev) => prev + 1);
      setCollectPoints(
        questions[activeQuestion].answer === value
          ? collectPoints + 1
          : collectPoints
      );
    }
  };
  type;

  return (
    <form onSubmit={handleSubmit} className="w-2/3 space-y-6">
      {questions.length - 1 !== activeQuestion ? (
        <>
          <h4>
            {activeQuestion + 1}. {questions[activeQuestion].question}
          </h4>

          <RadioGroup>
            {questions[activeQuestion].options.map((answer) => (
              <div className="flex items-center space-x-2" key={answer}>
                <RadioGroupItem
                  onClick={() => {
                    console.log(answer);
                    setValue(answer);
                  }}
                  value={answer}
                  id={answer}
                />
                <Label htmlFor={answer}>{answer}</Label>
              </div>
            ))}
          </RadioGroup>

          <Button type="submit">
            {questions.length - 1 !== activeQuestion ? "Next" : "Submit"}
          </Button>
        </>
      ) : (
        <>
          <div>Your total point is {collectPoints}🎉</div>
          <button onClick={() => setActiveQuestion(0)}>Restart</button>
        </>
      )}
    </form>
  );
};

export default Quiz;
