import { useState } from "react";
import React from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedBackData from "./data/FeedbackData";

function App() {

  const [feedback, setFeedback] = useState(FeedBackData);
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback}/>
      </div>
    </>
  );
}

export default App;
