const CharacterInformation = ({ character }) => {
  return (
    <div className="character__information">
      <div className="character__img">
        <img src={character.image} alt="" />
      </div>
      <p className="character__name">
        {character.name} - {character.species}
      </p>
      <ul className="character__list">
        <li className="character__item">
          <span className="character__highlight">Gender: </span>
          {character.gender}
        </li>
        {character.type && (
          <li className="character__item">
            <span className="character__highlight">Type: </span>
            {character.type}
          </li>
        )}
        <li className="character__item">
          <span className="character__highlight">First seen in: </span>
          {character.origin.name}
        </li>
        <li className="character__item">
          <span className="character__highlight">Last known location: </span>
          {character.location.name}
        </li>
      </ul>
      
    </div>
  );
};

export default CharacterInformation;
