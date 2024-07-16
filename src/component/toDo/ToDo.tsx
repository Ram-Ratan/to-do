import React, { useState } from "react";
import InputField from "../inputFiled/InputField";
import "./ToDo.css";
export interface ToDoI {
  id: string;
  label: string;
  isDone: boolean;
  wellBeingTodo: string;
  isWellBeingDone: boolean;
}









const wellBeingTodo: string[] = [
  "Read a book",
  "Call a friend",
  "Write a journal",
  "Take a walk",
  "Meditate for ten",
  "Plant a tree",
  "Clean your room",
  "Bake some cookies",
  "Exercise for thirty",
  "Learn a recipe",
  "Paint a picture",
  "Watch a documentary",
  "Try a puzzle",
  "Donate old clothes",
  "Listen to music",
  "Volunteer your time",
  "Water the plants",
  "Organize your desk",
  "Send a postcard",
  "Cook a meal",
  "Visit a park",
  "Practice gratitude",
  "Dance to music",
  "Declutter a drawer",
  "Write a poem",
  "Do a workout",
  "Watch a sunrise",
  "Make a scrapbook",
  "Call your family",
  "Play a game",
  "Learn a skill",
  "Start a hobby",
  "Clean your car",
  "Practice deep breathing",
  "Compliment someone",
  "Try a craft",
  "Plan a trip",
  "Update your resume",
  "Do yoga stretches",
  "Make a playlist",
  "Read an article",
  "Cook a new dish",
  "Try a podcast",
  "Feed the birds",
  "Explore your town",
  "Take photos",
  "Plan your week",
  "Write a letter",
  "Go for a jog",
];

const ToDo: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [toDoList, setToDoList] = useState<ToDoI[]>([]);
  const [isAdd, setIsAdd] = useState<boolean>(false);
  console.log(toDoList);

  const handleAddToDo = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue) {
      setToDoList([
        ...toDoList,
        {
          id: Date.now().toString(),
          label: inputValue,
          isDone: false,
          wellBeingTodo: wellBeingTodo[Math.floor(Math.random() * 49)],
          isWellBeingDone: false,
        },
      ]);
      setInputValue("");
      setIsAdd(false);
    }
  };

  const handleCheck = (id: string): void => {
    setToDoList(toDoList?.filter((todo) => todo?.id !== id));
  };

  const handleRadioChange = (toDo: ToDoI): void => {
    console.log("onchange called");
    setToDoList(
      toDoList.map((todoItem) =>
        todoItem.id === toDo.id
          ? { ...todoItem, isWellBeingDone: !todoItem.isWellBeingDone }
          : todoItem
      )
    );
  };

  const renderToggle = (toDo: ToDoI): JSX.Element => {
    return (
      <input
        id={`${toDo.id}`}
        key={toDo.id}
        type="radio"
        value={toDo?.isWellBeingDone ? "1" : "0"}
        checked={toDo?.isWellBeingDone}
        className="radio__button_2"
        onClick={() => handleRadioChange(toDo)}
      ></input>
    );
  };

  return (
    <div>
      <h1 className="header-1">Create Your To Do List</h1>
      <div className="list__container">
        {toDoList?.map((toDo, key) => (
          <div style={{ position: "relative" }}>
            <div className="input__box">{toDo.label}</div>
            <input
              id="to-do-check"
              checked={toDo.isDone}
              type="radio"
              className="radio__button"
              onChange={() => {
                if (toDo?.isWellBeingDone) {
                  handleCheck(toDo?.id);
                }
              }}
            ></input>
            <div
              style={{
                position: "absolute",
                left: "46px",
                top: "46px",
              }}
              className="wellBeingToDo"
            >
              <div style={{ position: "relative" }}>
                <div className="input__box_2">{toDo.wellBeingTodo}</div>
                {renderToggle(toDo)}
              </div>
            </div>
          </div>
        ))}
      </div>
      <InputField
        value={inputValue}
        setValue={setInputValue}
        handleAdd={handleAddToDo}
        handleCheck={handleCheck}
        isAdd = {isAdd}
        setIsAdd={setIsAdd}
      />
    </div>
  );
};

export default ToDo;
