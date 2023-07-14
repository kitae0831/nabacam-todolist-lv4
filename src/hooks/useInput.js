import { useState } from "react";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handler = (e) => {
    setValue(e.target.value);
  };

  return [value, handler];
}

export default useInput;

// 원래는 이런 구조인데 자주 쓰는 Hook을 지정해두고 import로 불러오기

// const [title, setTitle] = useState("");

// // 제목 추가
// const titleChangeHandler = (event) => {
//   setTitle(event.target.value);
// };
