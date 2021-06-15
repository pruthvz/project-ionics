import React from "react";

const Coin = ({
  image,
  name,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  return (
    <tbody>
      <tr className="transition duration-300">
        <td className="px-5 py-5 border-b border-gray-600 bg-gray-900  text-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-10 h-10">
              <img className="w-full h-full rounded-full" src={image} alt="" />
            </div>
            <div className="ml-3">
              <p className="text-gray-100 whitespace-no-wrap">{name}</p>
            </div>
          </div>
        </td>
        <td className="px-5 py-5 border-b border-gray-600 bg-gray-900 text-sm">
          <p className="text-gray-300 whitespace-no-wrap">
            {symbol.toUpperCase()}
          </p>
        </td>
        <td className="px-5 py-5 border-b border-gray-600 bg-gray-900 text-sm">
          <p className="text-white whitespace-no-wrap">£{price}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-600 bg-gray-900 text-sm">
          <p className="text-gray-100 whitespace-no-wrap">
            £{volume.toLocaleString()}
          </p>
        </td>
        {priceChange < 0 ? (
          <td className="px-5 py-5 border-b border-gray-600  bg-gray-900 text-sm ">
            <span className="relative inline-block px-3 py-1 font-semibold text-black leading-tight">
              <span
                aria-hidden
                className="absolute inset-0 bg-red-400 rounded-full"
              ></span>
              <span className="relative">{priceChange.toFixed(2)}%</span>
            </span>
          </td>
        ) : (
          <td className="px-5 py-5 border-b border-gray-600 bg-gray-900 text-sm">
            <span className="relative inline-block px-3 py-1 font-semibold text-black leading-tight">
              <span
                aria-hidden
                className="absolute inset-0 bg-green-400 rounded-full"
              ></span>
              <span className="relative">{priceChange.toFixed(2)}%</span>
            </span>
          </td>
        )}
        <td className="px-5 py-5 border-b border-gray-600 bg-gray-900 text-sm">
          <span className="relative inline-block px-3 py-1 font-semibold  text-gray-200  leading-tight">
            <span className="relative">£{marketcap.toLocaleString()}</span>
          </span>
        </td>
      </tr>
    </tbody>
  );
};

export default Coin;
