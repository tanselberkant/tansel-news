import React from 'react';
import { INews } from '../../interfaces/newsInterfaces';
import { useSelector } from 'react-redux';

type Props = {
  data: INews;
};

const LeftBanner = ({ data }: Props) => {
  const userName = useSelector((state: any) => state.user.userName);
  return (
    <div className="mb-10 lg:mb-0">
      <img
        src={data.image}
        className="border-2 w-full h-[350px] object-cover rounded-sm"
      />
      <h2 className="w-full text-start my-4 leading-[30px] lg:leading-[44px] font-bold text-[20px] lg:text-[32px] xl:text-[36px]  text-black">
        {data.name}{' '}
      </h2>
      <p className="text-[15px] my-4 font-normal text-start lg:text-[18px]">
        {data.description}
      </p>
      <div className="flex justify-start gap-3 items-center">
        <div className="h-12 w-12">
          <img
            className=" rounded-full  w-full h-full border-[0.5px] border-black p-[0.5px] "
            src={`https://api.dicebear.com/5.x/micah/svg?seed=${userName}`}
            alt=""
          />
        </div>
        <h2 className=" font-bold text-black text-[11px] lg:text-[12px]">
          {userName}
        </h2>
      </div>
    </div>
  );
};

export default LeftBanner;
