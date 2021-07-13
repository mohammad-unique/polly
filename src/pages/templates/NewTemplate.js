import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import "./newTemplate.scss";
import PageTitle from "../../components/PageTitle/PageTitle";
import Question from "./Question";
import DummyField from "./DummyField";

const NewTemplate = () => {
  const [surveyTitle, setSurveyTitle] = useState("");
  const [dummyFields, setDummyFields] = useState([]);

  const [questions, setQuestions] = useState([
    {
      questionText: "",
    },
  ]);

  const handleAddDummyFields = () => {
    const newData = [...dummyFields];
    newData.push({
      label: "",
      type: "text",
    });
    setDummyFields(newData);
  };

  const handleAddQuestions = () => {
    const newQuestion = [...questions];
    newQuestion.push({ questionText: "" });
    setQuestions(newQuestion);
  };

  const handleSend = ()=>{
    console.log();
  }

  return (
    <div>
      <PageTitle title={"Create Template"} />
      <form className="template-Container">
        <TextField id="outlined-basic" label="Please Enter Template Titel" variant="outlined"
                   className="template-Container__Items template-Container__Title" />
        {dummyFields.map(item => <DummyField data={item} />)}
        <Button onClick={handleAddDummyFields} variant="contained" color="primary"
                className="template-Container__Items">Add Dummy Field</Button>
        {questions.map(item => <Question />)}
        <Button onClick={handleAddQuestions} variant="contained" color="secondary"
                className="template-Container__Items">Add Question</Button>
        <Button onClick={handleSend} variant="contained" color="secondary"
                className="template-Container__Items">Send To Server</Button>
      </form>
    </div>
  );
};

export default NewTemplate;
