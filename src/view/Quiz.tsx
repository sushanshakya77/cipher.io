import { CipherType } from "@/constants/type";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

type IQuiz = {
  type: CipherType;
};

const questions = [
  {
    question: "What is the Caesar cipher?",
    options: [
      "A type of salad dressing",
      "A substitution cipher",
      "A secret military code",
      "An ancient encryption method",
    ],
    answer: "A substitution cipher",
    points: 1,
  },
  {
    question: "Who is credited with the invention of the Caesar cipher?",
    options: [
      "Julius Caesar",
      "Leonardo da Vinci",
      "Albert Einstein",
      "Isaac Newton",
    ],
    answer: "Julius Caesar",
    points: 1,
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
    points: 1,
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
    points: 1,
  },
  {
    question:
      "If a Caesar cipher has a shift of 3, what letter would 'A' be encrypted to?",
    options: ["A", "D", "C", "F"],
    answer: "D",
    points: 1,
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
    points: 1,
  },
];

const Quiz = ({ type }: IQuiz) => {
  const [activeQuestion, setActiveQuestion] = useState(0);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    questions.length - 1 !== activeQuestion &&
      setActiveQuestion((prev) => prev + 1);
  }
  type;

  return (
    <form onSubmit={handleSubmit} className="w-2/3 space-y-6">
      <h4>{questions[activeQuestion].question}</h4>

      <RadioGroup>
        {questions[activeQuestion].options.map((answer) => (
          <div className="flex items-center space-x-2" key={answer}>
            <RadioGroupItem value={answer} id={answer} />
            <Label htmlFor={answer}>{answer}</Label>
          </div>
        ))}
      </RadioGroup>

      <Button type="submit">Next</Button>
    </form>
  );
};

export default Quiz;
