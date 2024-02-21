import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [quoteData, setQuoteData] = useState([]);

  useEffect(() => {
    getQuoteData();
  }, []);

  const getQuoteData = () => {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const colors = [
          "#16a085",
          "#27ae60",
          "#4dff4d",
          "#f39c12",
          "#e74c3c",
          "#9b59b6",
          "#FB6964",
          "#e6ac00",
          "#3973ac",
          "#BDBB99",
          "#77B1A9",
          "#73A857",
        ];
        const randomNumber = Math.floor(Math.random() * data.quotes.length);
        const randomColorIndex = Math.floor(Math.random() * colors.length);
        setQuoteData({
          quote: data.quotes[randomNumber].quote,
          author: data.quotes[randomNumber].author,
          link: data.quotes[randomNumber].author.replace(/ /g, ""),
          wiki: data.quotes[randomNumber].author.replace(/ /g, "_"),
          color: colors[randomColorIndex],
        });
      });
  };

  return (
    <div className="App" style={{ backgroundColor: quoteData.color }}>
      <header className="App-header">
        <div id="quote-box">
          <p id="text" style={{ color: quoteData.color }}>
            "{quoteData.quote}"
          </p>
          <p id="author" style={{ color: quoteData.color }}>
            - {quoteData.author}
          </p>
          <button
            onClick={getQuoteData}
            id="new-quote"
            className="btn right"
            style={{
              backgroundColor: quoteData.color,
              border: 0,
              color: "black",
            }}
          >
            <p>New Quote</p>
          </button>
          <button
            className="btn left"
            style={{
              backgroundColor: quoteData.color,
              border: 0,
              color: "white",
            }}
          >
            <a
              id="tweet-quote"
              href={
                `https://twitter.com/intent/tweet?hashtags=${quoteData.link}&text=` +
                quoteData.quote
              }
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="2em"
                viewBox="0 0 512 512"
              >
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
              </svg>
            </a>
          </button>
          <button
            className="btn left"
            style={{
              backgroundColor: quoteData.color,
              border: 0,
              color: "white",
            }}
          >
            <a
              id="wiki-quote"
              href={`https://en.wikipedia.org/wiki/${quoteData.wiki}`}
              target="_blank"
              rel="noreferrer"
            >
              <svg
                id="wiki"
                xmlns="http://www.w3.org/2000/svg"
                height="1.5em"
                viewBox="0 0 640 512"
              >
                <path d="M640 51.2l-.3 12.2c-28.1.8-45 15.8-55.8 40.3-25 57.8-103.3 240-155.3 358.6H415l-81.9-193.1c-32.5 63.6-68.3 130-99.2 193.1-.3.3-15 0-15-.3C172 352.3 122.8 243.4 75.8 133.4 64.4 106.7 26.4 63.4.2 63.7c0-3.1-.3-10-.3-14.2h161.9v13.9c-19.2 1.1-52.8 13.3-43.3 34.2 21.9 49.7 103.6 240.3 125.6 288.6 15-29.7 57.8-109.2 75.3-142.8-13.9-28.3-58.6-133.9-72.8-160-9.7-17.8-36.1-19.4-55.8-19.7V49.8l142.5.3v13.1c-19.4.6-38.1 7.8-29.4 26.1 18.9 40 30.6 68.1 48.1 104.7 5.6-10.8 34.7-69.4 48.1-100.8 8.9-20.6-3.9-28.6-38.6-29.4.3-3.6 0-10.3.3-13.6 44.4-.3 111.1-.3 123.1-.6v13.6c-22.5.8-45.8 12.8-58.1 31.7l-59.2 122.8c6.4 16.1 63.3 142.8 69.2 156.7L559.2 91.8c-8.6-23.1-36.4-28.1-47.2-28.3V49.6l127.8 1.1.2.5z" />
              </svg>
            </a>
          </button>
        </div>
      </header>
      <footer className="App-footer">
        <p>by alitarika</p>
      </footer>
    </div>
  );
}

export default App;
