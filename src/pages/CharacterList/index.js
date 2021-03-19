import React, {useEffect, useState} from 'react';
import Container from "../../components/Container";
import {getCharacters} from "../../services/characters";
import Card from "../../components/Card";

function CharacterList() {
  const [characters, setCharacters] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchCharacteres() {
      setLoading(true)
      const response = await getCharacters()
      setCharacters(response.data.data.results)
      setLoading(false)
    }

    fetchCharacteres()
  }, [])

  if (loading) {
    return null
  }

  return (
    <Container>
      {characters.length > 0 && characters.map(character => <Card key={character.id} character={character} />)}
    </Container>
  )
}

export default CharacterList;
