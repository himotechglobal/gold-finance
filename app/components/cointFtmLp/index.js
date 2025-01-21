import Image from "next/image";
import React from "react";
import Button from "../button";

const CoinFtmLp = ({ coinDetailsFtmData }) => {
  return (
    <div className="flex flex-col gap-10">
      {coinDetailsFtmData?.map((signleCoin, index) => {
        console.log(signleCoin);
        return (
          <div className="cointDetails lg:w-[520px] lg:h-[293px]  p-4">
            <div key={index + 1}>
              <div className="flex items-center justify-between">
                <h2 className="heading">{signleCoin?.name}-FTM LP</h2>
                <span className="text-white text-[16px] font-[700]">
                  <span className="font-[400]">SELL TAX</span>{" "}
                  {signleCoin?.sellTax}
                </span>
              </div>
              <div className="flex items-center justify-between my-5">
                <Image src={signleCoin?.image} alt={signleCoin?.name} />
                {signleCoin?.coininfo?.map((obj, index) => {
                  return (
                    <div
                      key={index + 1}
                      className="flex items-center justify-between gap-20"
                    >
                      <div className="font-[700] text-[16px]">
                        <span>{obj.coin.index}</span>{" "}
                        <span>{obj.coin.title}</span> /
                        <span>{obj.ftm.index}</span>{" "}
                        <span>{obj.ftm.title}</span> <p>$ {obj.amount}</p>
                      </div>
                      <Button text="ADD LP" />
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center justify-center gap-10">
                {signleCoin?.details?.map((singleDetail, index) => {
                  return (
                    <div key={index + 1}>
                      <h3 className="text-[18px]">{singleDetail?.title}</h3>
                      <span className="font-[600]">{singleDetail?.amount}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CoinFtmLp;
