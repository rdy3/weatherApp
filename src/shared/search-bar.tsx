import { useState } from "react";

interface SearchBarProps {
  onSearch: (value: string) => void;
}

export function SearchBar(props: SearchBarProps) {
  const { onSearch } = props;
  const [text, setText] = useState("");

  return (
    <div className="p-4">
      <input
        onChange={(event) => setText(event.target.value)}
        value={text}
        className="grow rounded-sm border-2 border-slate-300 "
      />{" "}
      <button
        onClick={() => onSearch(text)}
        className="grow rounded-sm border-2 border-slate-300 "
      >
        Поиск
      </button>
    </div>
  );
}
