import { useParams } from "react-router-dom";

import useCharacter from "../hooks/useCharacter";

const Character = () => {
  const { id } = useParams();
  const { error, data, loading } = useCharacter(id);

  console.log({ error, data, loading });

  return <div></div>;
};

export default Character;
