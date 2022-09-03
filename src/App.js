import { useEffect } from "react";
import { useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import data from "./data";

function App() {
  const [index, setIndex] = useState(0);
  const [background, setBackground] = useState(data);
  useEffect(()=>{
    let lastIndex = background.length-1;
    if(index < 0){
      setIndex(lastIndex)
    }
    if(index > lastIndex){
      setIndex(0)
    }
  }, [index, background])
  useEffect(()=>{
    let timerId = setInterval(()=>{
      setIndex(index + 1)
    }, 3000);
    return ()=>{clearInterval(timerId)}
  }, [index])
  return (
    <div className="wrapper">
      <h1 className="title">Image slider</h1>
      <section className="section-container">
        {background.map((data, dataIndex) => {
          const { image, name, id } = data;
          let position = "nextSlide";
          if (dataIndex === index) {
            position = "active";
          }
          if(dataIndex === index -1 || (index === 0 && dataIndex === background.length-1)){
            position = 'prevSlide'
          }
          return (
            <div className={`content ${position}`} key={id}>
              <img className="image" src={image} alt={name} />
            </div>
          );
        })}

        <div className="btn-container">
          <button onClick={() => setIndex(index - 1)} className="btn">
            <FiChevronLeft />
          </button>
          <button onClick={() => setIndex(index + 1)} className="btn">
            <FiChevronRight />
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
