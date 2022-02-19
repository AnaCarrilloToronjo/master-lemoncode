import React, { createContext, useState } from "react";
import { CharacterEntity } from "../../model";

const initialContextValue = {
  org: "",
  setOrg: (value: string) => {},
  page: 1,
  setPage: (value: number) => {},
  originalCharacters: [],
  setOriginalCharacters: (value: React.SetStateAction<CharacterEntity[]>) => {},
  nextPage: 1,
  setNextPage: (value: number) => {},
};

export const MyContext = createContext(initialContextValue);

export const MyContextProvider: React.FC = ({ children }) => {
  const [org, setOrg] = useState<string>("lemoncode");
  const [page, setPage] = useState<number>(1);
  const [originalCharacters, setOriginalCharacters] = useState<
    CharacterEntity[]
  >([]);
  const [nextPage, setNextPage] = useState<number>(1);

  return (
    <MyContext.Provider
      value={{
        org,
        setOrg,
        page,
        setPage,
        originalCharacters,
        setOriginalCharacters,
        nextPage,
        setNextPage,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
