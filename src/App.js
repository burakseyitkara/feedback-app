import { useState } from "react";
import React from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedBackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App() {

  const [feedback, setFeedback] = useState(FeedBackData);
  const deleteFeedback = (id) => {
    if(window.confirm("Are you sure you want to delete this feedback?")){
      setFeedback(feedback.filter((item) => item.id !== id));
    };
  }
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedbackParam={feedback}
          handleDelete={deleteFeedback}
        />
      </div>
    </>
  );
}

export default App;
