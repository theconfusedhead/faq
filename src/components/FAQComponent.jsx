import React from "react";
import FAQItem from "./FAQItem";

const FAQComponent = () => {
  const faqQueAns = [
    {
      question: "How many bones does a cat have?",
      answer: "A cat has 230 bones - 6 more than a human",
    },
    {
      question: "How much do cats sleep?",
      answer: "The average cat sleeps 12-16 hours per day",
    },
    {
      question: "How long do cats live",
      answer:
        "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
    },
  ];
  return (
    <div className="container">
      <h1>Frequently Asked Questions</h1>
      {faqQueAns.map((questions, index) => {
        return <FAQItem questions={questions} index={index} />;
      })}
    </div>
  );
};

export default FAQComponent;
