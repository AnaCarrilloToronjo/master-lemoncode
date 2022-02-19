import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  getCharacter,
  getMoreCharacter,
} from "../../services/characterServices";
import { CharacterEntity } from "../../model";
import { useDebounce } from "../hooks/use-debounce.hook";
import { MyContext } from "../context/context.provider";
import Button from "@mui/material/Button";

export const Characters = () => {
  const navigate = useNavigate();
  const { originalCharacters, setOriginalCharacters, nextPage, setNextPage } =
    useContext(MyContext);
  const [characters, setcharacters] = useState<CharacterEntity[]>([]);

  const [inputValue, setInputValue] = useState("");
  const debounceValue = useDebounce(inputValue);

  useEffect(() => {
    if (debounceValue) {
      setcharacters(
        originalCharacters.filter((result) => {
          return (
            result.name.toLowerCase().indexOf(debounceValue.toLowerCase()) > -1
          );
        })
      );
    } else {
      if (originalCharacters.length === 0) {
        getCharacter().then((result) => {
          setcharacters(result);
          setOriginalCharacters(result);
        });
      } else {
        setcharacters(originalCharacters);
      }
    }
  }, [debounceValue]);

  const showMoreCharacters = () => {
    let newPage = nextPage + 1;
    setInputValue("");
    setNextPage(newPage);
    getMoreCharacter(newPage).then((data) => {
      let result = [...originalCharacters, ...data];
      setcharacters(result);
      setOriginalCharacters(result);
    });
  };

  return (
    <div className="characters">
      <h1>Rick and morty</h1>
      <div className="character-input">
        <label>Search </label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
      </div>
      <div className="character-container">
        {characters.map((character) => (
          <div
            className="character-card"
            onClick={() => navigate(`/character/${character.id}`)}
            key={character.id}
          >
            <span>{character.name}</span>
            <img src={character.image} />
          </div>
        ))}
      </div>
      <div className="character-button">
        <Button
          variant="outlined"
          color="inherit"
          type="button"
          onClick={showMoreCharacters}
        >
          More images...
        </Button>
      </div>
    </div>
  );
};
