import React from "react";

const SurveyPreview = () => {

  const surveyData = {
    title: "title",
    questions: [
      {
        text: "q 1",
        hasAnswer: false,
        hasComment: true,
      }, {
        text: "q 2",
        hasAnswer: true,
        hasComment: false,
      }, {
        text: "q 3",
        hasAnswer: true,
        hasComment: true,
      },
    ],
    dummys: [
      {
        label: "age",
        type: "number",
      },
      {
        label: "class",
        type: "text",
      },
      {
        label: "desc",
        type: "richText",
      },
    ],
  };

  return (
    <div>
      <h1>{surveyData.title}</h1>
      <h3>other fields</h3>
      {surveyData.dummys.map(item => {
        if (item.type === "text")
          return <label>{item.label}<input placeholder={item.label} /></label>;
        else if (item.type === "number")
          return <label>{item.label}<input type={"number"} placeholder={item.label} /></label>;
        else if (item.type === "richText")
          return <label>{item.label}<textarea type={"number"} placeholder={item.label} /></label>;
      })}
      {surveyData.questions.map(item => <div>
        <p>{item.text}</p>
        {item.hasAnswer &&
        <>
          <label><input type={"radio"} />1</label>
          <label><input type={"radio"} />2</label>
          <label><input type={"radio"} />3</label>
          <label><input type={"radio"} />4</label>
          <label><input type={"radio"} />5</label>
          <label><input type={"radio"} />6</label>
        </>
        }
        {item.hasComment &&
        <input placeholder={"comment"} />
        }
      </div>)}
    </div>
  );
};

export default SurveyPreview;
