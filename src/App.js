import './App.css';
import Data from './data.json';
import IMAGES from './images';

function App() {
  return (
    <div className="App">
      <div className="post">
        {Data.map((post) => {
          return (
            <div key={post.id}>
              <h3>{post.name}</h3>
              <p>{post.content}</p>
            </div>
          );
        })}
      </div>

      <img src={IMAGES.img1} alt="" />
    </div>
  );
}

export default App;
