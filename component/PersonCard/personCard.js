import './style.css'

export const PersonCard = ({ text, text1 }) => {
    return (
      <div className="person-card">
        <div className="rectangle" />
        <div className="overlap-group">
          <img
            className="vector"
            alt="Vector"
            src="https://cdn.animaapp.com/projects/6518667a3915e9964b3cb837/releases/651872ea50db98ef28f8c517/img/vector-3.svg"
          />
          <div className="div" />
        </div>
        <div className="sahas-kumaraguru">{text}</div>
        <div className="team-captain">{text1}</div>
      </div>
    );
  };