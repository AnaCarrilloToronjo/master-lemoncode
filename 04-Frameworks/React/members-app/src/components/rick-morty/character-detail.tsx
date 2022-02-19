import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCharacterDetail } from "../../services/characterServices";
import { CharacterEntity } from "../../model";

const createDefaultMemberDetail = () => ({
  id: "",
  image: "",
  name: "",
  status: "",
  species: "",
  gender: "",
});

export const CharacterDetail = () => {
  const [character, setcharacter] = useState<CharacterEntity>(() =>
    createDefaultMemberDetail()
  );
  const { id } = useParams();

  useEffect(() => {
    getCharacterDetail(id).then((data) => setcharacter(data));
  }, []);
  return character ? (
    <div className="detail-character">
      <h1>Detail rick and morty</h1>
      <div className="detail-character-container" key={character.id}>
        <img src={character.image} />
        <div>
          <h2>{character.name}</h2>
          <div>Status: {character.status}</div>
          <div>Species: {character.species}</div>
          <div>Gender: {character.gender}</div>
        </div>
      </div>
    </div>
  ) : (
    <>Loading...</>
  );
};
