import { useNavigate } from 'react-router-dom';
import './LandingPage.css'
import { useState } from 'react';

function LandingPage() {
  const navigate = useNavigate();
  const [desc, setDesc] = useState<string>("awooga");

  const handleMouseOut = () => {
    setDesc("awooga");
  }

  const handleMouseOver = (newStr:string) => {
    setDesc(newStr);
  }

  return (
    <>
      <h1>Trainee 23T3 react workshop!</h1>
      <p>Yayy you're in!</p>
      <div id="card">
        <button 
          onClick={() => navigate('/example')}
          onMouseOver={() => handleMouseOver("Code from the demo!")}
          onMouseOut={() => handleMouseOut()}>
          Demo example
        </button>

        <button onClick={() => navigate('/exercise')}
        onMouseOver={() => handleMouseOver("Todo-List ")}
        onMouseOut={() => handleMouseOut()}>
          Exercise (not-so-blank)
        </button>

        <button onClick={() => navigate('/solution')}
        onMouseOver={() => handleMouseOver("Stuck but shy? :'0 ")}
        onMouseOut={() => handleMouseOut()}>
          Exercise (solutions)
        </button>

        <p id="desc-text"> {desc} </p>
      </div>
    </>
  )
}

export default LandingPage;
