import { Routes } from "@/models";
import { Card, Navigator } from "../../../components";
import { getCharacters } from "./services";

const fetchCharacters = async () => {
  return getCharacters();
};

const Characters = async () => {
  const characters = await fetchCharacters();
  return (
    <>
      <Navigator pathNames={[Routes.HOME, Routes.LOCATIONS]} />
      {characters.map((character) => (
        <Card key={character.id} data={character} />
      ))}
    </>
  );
};

export default Characters;
