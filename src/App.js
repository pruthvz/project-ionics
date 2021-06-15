import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Coin from "./Coin";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=GBP&order=market_cap_desc&per_page=50&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        // console.log(res.data);
      })
      .catch((error) =>
        alert("Please check the api, the api isn't working properly.")
      );
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  const closeWindow = () => {
    window.close();
  };

  return (
    <div className="coinApp">
      <header class="py-5 bg-gray-700 text-white text-center">
        Ionics - View Crypto Currency.
        <h3 id="remoteBtn" className="absolute inset-y-0 right-0">
          <i
            onClick={closeWindow}
            class="fas fa-times bg-gray-500 p-3 pl-5 pr-5 hover:bg-red-500"
          ></i>
        </h3>
      </header>
      <div>
        <div className="coin-container bg-gray-700 pb-10">
          <body class="antialiased font-sans bg-gray-700">
            <div class="container mx-auto px-4 sm:px-8">
              <div class="py-8">
                <div>
                  <h2 class="text-gray-100 text-1xl font-semibold leading-tight">
                    {dateBuilder(new Date())}
                  </h2>
                </div>
                <div class="my-2 flex sm:flex-row flex-col">
                  <div class="flex flex-row mb-1 sm:mb-0">
                    <div class="relative">
                      <select class=" h-full p-3 rounded-l  block appearance-none w-full bg-gray-800 mr-4 border-gray-400 text-gray-300 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-gray-900 focus:border-gray-500">
                        <option>5</option>
                        <option>10</option>
                        <option>20</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          class="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                    <div class="relative ml-2">
                      <select class="bg-gray-800 p-3 h-full rounded-r sm:rounded-r-none sm:border-r-0 border- block appearance-none w-full  border-gray-400 text-gray-400 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-gray-900 focus:text-gray-300 focus:border-gray-500">
                        <option>All</option>
                        <option>Active</option>
                        <option>Unavailable</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          class="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="block relative">
                    <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                      <svg
                        viewBox="0 0 24 24"
                        class="ml-2 h-4 w-4 fill-current text-gray-500"
                      >
                        <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
                      </svg>
                    </span>
                    <input
                      placeholder="Search"
                      onChange={handleChange}
                      class="appearance-none rounded-r rounded-l sm:rounded-l-none border ml-2 transition duration-200 border-gray-600 border-b block pl-8 pr-6 py-2 w-full bg-gray-800 text-sm placeholder-gray-600 text-gray-400 focus:bg-gray-900 focus:placeholder-gray-600 focus:text-gray-400 focus:outline-none"
                    />
                  </div>
                </div>
                <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-hidden">
                  <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table class="min-w-full leading-normal ">
                      <thead>
                        <tr>
                          <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                            Name
                          </th>
                          <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                            Symbol
                          </th>
                          <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                            Price
                          </th>
                          <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                            Volume
                          </th>
                          <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                            Status
                          </th>
                          <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                            Market Cap
                          </th>
                        </tr>
                      </thead>
                      {filteredCoins.map((coin) => {
                        return (
                          <Coin
                            key={coin.id}
                            name={coin.name}
                            image={coin.image}
                            symbol={coin.symbol}
                            marketcap={coin.market_cap}
                            price={coin.current_price}
                            priceChange={coin.price_change_percentage_24h}
                            volume={coin.total_volume}
                          />
                        );
                      })}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </body>
        </div>
      </div>
      <footer>
        <div className=" bg-gray-800 p-4 stick-bottom">
          <h5 className="text-center text-gray-300">Copyright @2021 ionics</h5>
          <div className="justify-items-center text-center">
            <a href="https://twitter.com/justpruthvi" target="_blank">
              <i class="fab fa-twitter text-gray-400 mr-1"></i>
            </a>
            <a href="https://github.com/pruthvz" target="_blank">
              <i class="fab fa-github text-gray-400"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
