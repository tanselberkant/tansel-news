import React from 'react';
import { INews } from '../../interfaces/newsInterfaces';
import { useSelector } from 'react-redux';

type Props = {
  data: INews[];
};

const Banner = ({ data }: Props) => {
  const userName = useSelector((state: any) => state.user.userName);

  return (
    <div className="">
      {data.map((data, index) => (
        <React.Fragment key={index}>
          <div className="w-full h-full">
            <img
              src={data.image}
              className="border-2 w-full h-[180px] rounded-sm"
            />
            <h2 className="text-start leading-[24px] my-4  text-[18px] font-bold text-black">
              {data.name}{' '}
            </h2>
            <p className="text-[14px] my-4 font-normal text-start ">
              {data.description}
            </p>
            <div className="flex justify-start gap-3 items-center">
              <div className="h-10 w-10">
                <img
                  className=" rounded-full  w-full h-full border-[0.5px] border-black p-[0.5px] "
                  src={`https://api.dicebear.com/5.x/micah/svg?seed=${userName}`}
                  alt=""
                />
              </div>
              <h2 className=" font-bold text-black text-[12px]">{userName}</h2>
            </div>
          </div>
          {index === 0 ? (
            <div className="my-3 w-[90%] border-[1px] border-[#E1E6EB] rounded-xl mx-auto "></div>
          ) : (
            ''
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Banner;
