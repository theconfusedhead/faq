import React, { useEffect, useState } from "react";

const FAQItem = ({ questions, index }) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => {
    setShow((currentState) => !currentState);
  };

  useEffect(() => {
    if (index === 0) {
      setShow(true);
    }
  }, []);
  return (
    <section className="box">
      <div>
        <div className="ques">{questions.question}</div>
        {show && <div>{questions.answer}</div>}
      </div>
      <button onClick={handleToggle} className={show ? "arrow" : ""}>
        ⬅️
      </button>
    </section>
  );
};

export default FAQItem;
