import { useState } from "react";
import "./App.css";
import InfiniteScroll from "react-infinite-scroll-component";

function App() {
  const [data, setData] = useState(Array.from({ length: 25 }, (a, b) => b + 1));
  const [hasMOre, setMore] = useState(true);
  const AddData = () => {
    if (data.length < 100) {
      setTimeout(() => {
        setData((data) => [
          ...data,
          ...Array.from({ length: 25 }, (a, b) => b + data.length + 1),
        ]);
      }, 2000);
    } else {
      setMore(false);
    }
  };

  console.log(data);
  return (
    <>
      <p className="read-the-docs">
        <em>
          This is an example of <b>infinite scroll</b>{" "}
        </em>
      </p>
      <InfiniteScroll
        dataLength={data.length}
        next={AddData}
        hasMore={hasMOre}
        loader={
          <h4>
            <p style={{ textAlign: "center" }}>
              <b>Wait, Loading...</b>
            </p>
          </h4>
        }
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {data.map((item) => (
          <div className="item">
            <p>This is {item}th div</p>
          </div>
        ))}
      </InfiniteScroll>
    </>
  );
}

export default App;
