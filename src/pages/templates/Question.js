import React, { useState } from "react";
import { Checkbox, FormControlLabel, Grid, IconButton, TextField } from "@material-ui/core";
import "./newTemplate.scss";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const Question = () => {

  const [question, setQuestion] = useState({
    text: "",
    hasAnswer: false,
    hasComment: false,
  });

  const handleDelete = () => {

  };

  const handleQuestionTextChange = (e) => {
    const newQuestion = { ...question };
    newQuestion.text = e.target.value;
    setQuestion(newQuestion);
  };

  const handleChangeHasAnswer = (e) => {
    const newQuestion = { ...question };
    newQuestion.hasAnswer = e.target.checked;
    setQuestion(newQuestion);
  };

  const handleChangeHasComment = (e) => {
    const newQuestion = { ...question };
    newQuestion.hasComment = e.target.checked;
    setQuestion(newQuestion);
  };

  return (
    <section>
      <IconButton onClick={handleDelete}>
        <DeleteForeverIcon />
      </IconButton>
      <TextField id="outlined-basic" onChange={handleQuestionTextChange} value={question.text}
                 label="Please Enter Question" variant="outlined"
                 className="template-Container__Items template-Container__Question" />
      <Grid container direction={"row"}>
        <FormControlLabel control={<Checkbox onChange={handleChangeHasAnswer}
                                             checked={question.hasAnswer} />} label={"Add answer options 1-6"}
                          variant="outlined" color="primary"
                          className="template-Container__Items" />
        <FormControlLabel control={<Checkbox onChange={handleChangeHasComment}
                                             checked={question.hasComment} />} label={"Has Comment"} variant="outlined"
                          color="primary"
                          className="template-Container__Items" />
      </Grid>
    </section>
  );
};

export default Question;
