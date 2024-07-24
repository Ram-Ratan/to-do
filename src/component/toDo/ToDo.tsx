import React, { useState } from "react";
import InputField from "../inputFiled/InputField";
import "./ToDo.css";
import Triangle from "../../assets/triangle";
import CustomToggle from "../cutomToggle/CustomToggle";
export interface ToDoI {
  id: string;
  label: string;
  isDone: boolean;
  wellBeingTodo: WellBeingTodo| undefined;
}

type WellBeingTodo = {
  label: string;
  isClickable: boolean;
  url: string | undefined;
};

const wellBeingTodo: WellBeingTodo[] = [
  {
    label: 'Listen to "To-Do" List',
    isClickable: true,
    url: "https://lnk.cloudkid.com/todolist",
  },
  {
    label: "Go for a walk",
    isClickable: false,
    url: undefined,
  },
  {
    label: "Sip a drink by the poolside",
    isClickable: false,
    url: undefined,
  },
  {
    label: "Read a book",
    isClickable: false,
    url: undefined,
  },
  {
    label: "1h of me time",
    isClickable: false,
    url: undefined,
  },
  {
    label: "Book a vacation",
    isClickable: false,
    url: undefined,
  },
  {
    label: "Go skinny dipping",
    isClickable: false,
    url: undefined,
  },
  {
    label: "Drink a cup of tea",
    isClickable: false,
    url: undefined,
  },
  {
    label: "Follow TEYA on Instagram",
    isClickable: true,
    url: "https://www.instagram.com/whothehellisteya/",
  },
  {
    label: "Follow TEYA on TikTok",
    isClickable: true,
    url: "https://www.tiktok.com/@whothehellisteya",
  },
  {
    label: "Follow TEYA on TikTok",
    isClickable: true,
    url: "https://www.tiktok.com/@whothehellisteya",
  },
  {
    label: "Cook a healthy meal",
    isClickable: false,
    url: undefined,
  },
  {
    label: "Play 4 in a Row",
    isClickable: false,
    url: undefined,
  },
  {
    label: "Light a Yankee Candle",
    isClickable: false,
    url: undefined,
  },
  {
    label: "Check out TEYA’s Boutique",
    isClickable: true,
    url: "https://whothehellisteya.allelon.shop/",
  },
  {
    label: "Dance to your favorite song",
    isClickable: false,
    url: undefined,
  },
  {
    label: "Message a loved one",
    isClickable: false,
    url: undefined,
  },
  {
    label: "Do a puzzle",
    isClickable: false,
    url: undefined,
  },
  {
    label: "Meditate",
    isClickable: false,
    url: undefined,
  },
  {
    label: "Stretch",
    isClickable: false,
    url: undefined,
  },
  {
    label: "Take a bath",
    isClickable: false,
    url: undefined,
  },
];

const ToDo: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [toDoList, setToDoList] = useState<ToDoI[]>([]);
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [animatingId, setAnimatingId] = useState<string | null>(null)
  const [wellbeingToDoAnimatingId, setWellbeingToDoAnimatingId] = useState<string | null>(null);
  const [wobbleId, setWobbleId] = useState<string | null>(null);
  const [usedWellBeingTodos, setUsedWellBeingTodos] = useState<WellBeingTodo[]>([]);
  console.log(toDoList);

  const getAvailableWellBeingTodos = () => {
    const usedLabels = toDoList.map(todo => todo.wellBeingTodo?.label)?.filter((i)=> i!==null);
    const unusedTodos = wellBeingTodo.filter(todo => !usedLabels.includes(todo.label));
    
    if (unusedTodos.length === 0) {
      setUsedWellBeingTodos([]);
      return wellBeingTodo;
    }
    
    return unusedTodos;
  };

  const handleAddToDo = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue) {
      const availableWellBeingTodos = getAvailableWellBeingTodos();
      const randomWellBeingTodo = availableWellBeingTodos[Math.floor(Math.random() * availableWellBeingTodos.length)];
      setToDoList([
        ...toDoList,
        {
          id: Date.now().toString(),
          label: inputValue,
          isDone: false,
          wellBeingTodo: randomWellBeingTodo,
        },
      ]);
      setInputValue("");
      setIsAdd(false);
    }
  };

  const handleCheck = (id: string): void => {
    const toDo = toDoList.find((todo) => todo.id === id);
    if (toDo && toDo?.wellBeingTodo) {
      setWobbleId(id);
      setTimeout(() => setWobbleId(null), 500); // Remove wobble effect after animation
    } else {
      setAnimatingId(id);
      setToDoList(
        toDoList?.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              isDone: true,
            };
          } else {
            return todo;
          }
        })
      );
      setTimeout(() => {
        setToDoList(toDoList?.filter((todo) => todo?.id !== id));
      }, 300);
    }
  };

  const handleRadioChange = (toDo: ToDoI): void => {
    setWellbeingToDoAnimatingId(toDo.id);
    setTimeout(()=>{
      setToDoList(
        toDoList.map((todoItem) =>
          todoItem.id === toDo.id
            ? { ...todoItem, wellBeingTodo: undefined }
            : todoItem
        )
      );
    }, 300)
  };


  const renderToggle = (toDo: ToDoI): JSX.Element => {
    return (
      <>
        <CustomToggle
          isChecked={wellbeingToDoAnimatingId === toDo.id}
          onClickToggle={() => handleRadioChange(toDo)}
          variant={"small"}
        />
      </>
    );
  };

  return (
    <div>
      <h1 className="header-1">Create Your To Do List</h1>
      <div className="list__container">
        {toDoList?.map((toDo) => (
          <div
            style={{ position: "relative" }}
            className={`todo-item ${animatingId === toDo.id ? "fade-out-main" : ""}`}
            key={toDo.id}
          >
            <div className="input__box">{toDo.label}</div>
            <CustomToggle
              isChecked={toDo.isDone}
              onClickToggle={() => {
                handleCheck(toDo?.id);
              }}
              variant={"big"}
            />
            {toDo.wellBeingTodo && (
              <div
              style={{
                position: "absolute",
                left: "46px",
                top: "46px",
              }}
              className={`wellBeingToDo ${wellbeingToDoAnimatingId === toDo.id? "fade-out-wellbeing":""}`}
            >
              <div
                style={{ position: "relative" }}
                className={wobbleId === toDo.id ? "quick-wobble" : ""}
              >
                <div
                  className="input__box_2"
                  style={{
                    textDecoration: `${
                      toDo?.wellBeingTodo?.isClickable ? "underline" : ""
                    }`,
                    cursor: `${
                      toDo?.wellBeingTodo?.isClickable ? "pointer" : ""
                    }`,
                  }}
                  onClick={() => {
                    if (toDo?.wellBeingTodo?.isClickable) {
                      window.open(toDo.wellBeingTodo.url, "_blank");
                    }
                  }}
                >
                  {toDo?.wellBeingTodo?.label}
                </div>
                {renderToggle(toDo)}
              </div>
            </div>
            )}
          </div>
        ))}
      </div>
      <InputField
        value={inputValue}
        setValue={setInputValue}
        handleAdd={handleAddToDo}
        handleCheck={handleCheck}
        isAdd={isAdd}
        setIsAdd={setIsAdd}
      />
    </div>
  );
};

export default ToDo;
