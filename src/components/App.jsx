import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [x, setx] = useState([]);
  const [Text, setText] = useState("");
  const [Title, setTitle] = useState("");

  function Change1(event) {
    setText(event.target.value);
  }
  function Change2(event) {
    setTitle(event.target.value);
  }
  function Change3(event) {
    Text.length === 0
      ? alert("note must not be empty")
      : setx((prev) => {
          return [...prev, { Title, Text }];
        });

    event.preventDefault();
    console.log(x);
    setText("");
    setTitle("");
  }
  function Change4(id) {
    setx((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
    console.log(id);
  }
  function Notes({ Title, Text }, index) {
    return (
      <Note
        key={index}
        id={index}
        title={Title}
        content={Text}
        check={Change4}
      />
    );
  }

  return (
    <div>
      <Header />
      <CreateArea
        Change1={Change1}
        Change2={Change2}
        Change3={Change3}
        Text={Text}
        Title={Title}
      />
      {x.map(Notes)}
      <Footer />
    </div>
  );
}

export default App;
