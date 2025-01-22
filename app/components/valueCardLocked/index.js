import Image from "next/image";
import React from "react";
import fontisto_locked from "../../assets/fontisto_locked.png";
import Wrapper from "../wrapper";

const ValueCardLocked = () => {
  let totalValueLocked = [
    {
      title: "Total Value Locked",
      amount: "643,004",
    },
  ];

  return (
    <div className="mt-40">
      <Wrapper>
        <div className="valueCardLocked flex items-center justify-around max-sm:min-w-[389px]">
          <div className="flex items-center justify-center h-[75px] w-[75px] bg-white rounded-[8px]">
            <Image src={fontisto_locked} alt="...locked" />
          </div>
          {totalValueLocked?.map((obj, index) => {
            return (
              <div key={index + 1}>
                <h2 className="heading">{obj?.title}</h2>
                <p className="amount">$ {obj?.amount}</p>
              </div>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default ValueCardLocked;
