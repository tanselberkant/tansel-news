import React from 'react';
import { INews } from '../../interfaces/newsInterfaces';
import { useSelector } from 'react-redux';

type Props = {
  data: INews[];
};

const NewsList = ({ data }: Props) => {
  const userName = useSelector((state: any) => state.user.userName);
  return (
    <div className="">
      <h1 className="text-[#22262A] font-bold text-[14px] text-start mb-3 uppercase">
        Popular
      </h1>
      {data.map((data, index) => (
        <React.Fragment key={index}>
          <div className="flex w-full  justify-start gap-8 items-center">
            <div className="text-[48px] -mt-2 lg:mt-0 text-[#BFC3C9] font-bold">
              {index + 1}{' '}
            </div>
            <div key={index} className="w-full h-full">
              <h2 className="text-start leading-[24px] my-4  text-[18px] font-bold text-[#22262A] ">
                {data.name}{' '}
              </h2>

              <h2 className=" font-bold text-black text-[12px]">{userName}</h2>
              {index === 6 ? (
                ''
              ) : (
                <div className="my-3 w-[90%] border-[0.5px] border-[#E1E6EB] rounded-xl mx-auto "></div>
              )}
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default NewsList;
