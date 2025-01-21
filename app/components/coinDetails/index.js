import React from "react";
import Wrapper from "../wrapper";
import Image from "next/image";
import obol from "../../assets/obol.svg";
import obol2 from "../../assets/obol2.png";
import smelt from "../../assets/smelt.png";
import CoinFtmLp from "../cointFtmLp";

const CoinDetails = () => {
  let coinDetailsData = [
    {
      name: "GOLD COIN",
      sellTax: "10%",
      currentPrice: "0.21",
      image: obol,
      details: [
        {
          title: "Market Cap",
          amount: "37,806",
        },
        {
          title: "Circulating Supply",
          amount: "180,030",
        },
        {
          title: "Total Supply",
          amount: "5,600,000",
        },
      ],
    },
    {
      name: "GOLD COIN",
      sellTax: "9%",
      currentPrice: "0.21",
      image: smelt,
      details: [
        {
          title: "Market Cap",
          amount: "12,876",
        },
        {
          title: "Circulating Supply",
          amount: "230,030",
        },
        {
          title: "Total Supply",
          amount: "8,750,000",
        },
      ],
    },
  ];

  let coinDetailsFtmData = [
    {
      name: "GOLD COIN",
      sellTax: "11%",
      image: obol2,
      coininfo: [
        {
          coin: {
            index: "1.07",
            title: "OBOL",
          },
          ftm: {
            index: "0.93",
            title: "FTM",
          },
          amount: "0.45",
        },
      ],
      details: [
        {
          title: "Liquidity",
          amount: "51,250",
        },

        {
          title: "Total Supply",
          amount: "4,20,000",
        },
      ],
    },
    {
      name: "GOLD COIN",
      sellTax: "11%",
      image: obol2,
      coininfo: [
        {
          coin: {
            index: "1.07",
            title: "OBOL",
          },
          ftm: {
            index: "0.93",
            title: "FTM",
          },
          amount: "0.45",
        },
      ],
      details: [
        {
          title: "Liquidity",
          amount: "11,250",
        },

        {
          title: "Total Supply",
          amount: "1,825,000",
        },
      ],
    },
  ];
  return (
    <Wrapper>
      <div className="flex items-center justify-between flex-wrap">
        <div className="flex flex-col gap-10">
          {coinDetailsData?.map((signleCoin, index) => {
            return (
              <div className="cointDetails lg:w-[520px] lg:h-[293px] p-4">
                <div key={index + 1}>
                  <div className="flex items-center justify-between">
                    <h2 className="heading">{signleCoin?.name}</h2>
                    <span className="text-white text-[16px] font-[700]">
                      <span className="font-[400]">SELL TAX</span>{" "}
                      {signleCoin?.sellTax}
                    </span>
                  </div>
                  <div className="flex items-center justify-between my-5">
                    <Image src={signleCoin?.image} alt={signleCoin?.name} />
                    <div className="price text-[18px] flex items-center justify-center">
                      <div className="flex items-baseline gap-5">
                        <span className="">Current Price </span>
                        <span className="font-[600] text-[42.8px]">
                          $ {signleCoin?.currentPrice}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    {signleCoin?.details?.map((singleDetail, index) => {
                      return (
                        <div key={index + 1}>
                          <h3 className="text-[18px]">{singleDetail?.title}</h3>
                          <span className="font-[600]">
                            {singleDetail?.amount}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <CoinFtmLp coinDetailsFtmData={coinDetailsFtmData} />
      </div>
    </Wrapper>
  );
};

export default CoinDetails;
