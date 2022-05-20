import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "Anum sardar also known as CHANGARI belongs to pakhi was family",
      rating: 10,
    },
    {
      id: 2,
      text: " one day a ch tanveer hussain picked her up from garbage",
      rating: 10,
    },
    {
      id: 3,
      text: "Anum has many issues of kapre washong, tayyyaba and gucci and baba ashfaq",
      rating: 5,
    },
    {
      id: 4,
      text: "Anum ko kapre dhonay aur sukanay ki jaga nai milti and maid base ESTEE LAUDER KI LE GYE MANHUS",
      rating: 3,
    },
  ]);

  //Feedback edit
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  //Add Feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  //Delete Feedback
  const deleteFeedback = (id) => {
    if (window.confirm("are you sure you want to hh delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  //update the item
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
    setFeedbackEdit({
      ...feedbackEdit,
      edit: false,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
