import React from 'react';
import { INews } from '../../interfaces/newsInterfaces';
import { useSelector } from 'react-redux';

type Props = {
  data: INews;
};

const FooterBanner = ({ data }: Props) => {
  const userName = useSelector((state: any) => state.user.userName);
  return (
    <div className="w-full xl:max-w-7xl mx-auto my-10 relative h-[420px]">
      <img
        src={data.image}
        alt="News"
        className="w-full h-full rounded-sm object-cover opacity-95 border-[1px] border-black"
      />
      <div className="absolute top-0 left-0 flex justify-start items-center gap-0  h-full w-full">
        <div className="absolute w-[80%] md:w-[65%] lg:w-[55%] bottom-4 mb:bottom-8 lg:bottom-12 left-4 md:left-10 lg:left-20 h-[170px] ">
          <div className="flex justify-start w-full h-full gap-0 items-center">
            <div className="bg-customBg h-[64px] w-[32px] lg:h-[64px] lg:w-[42px] rounded-sm"></div>
            <div className="bg-black h-full w-full rounded-sm py-6 px-10">
              <h1 className="font-bold text-white text-[18px] md:text-[20px] lg:text-[28px] text-start">
                {data.name.length > 80
                  ? data.name.substring(0, 80) + '...'
                  : data.name}
              </h1>
              <div className="hidden md:flex justify-start gap-3 items-center mt-3">
                <div className="h-10 w-10">
                  <img
                    className=" rounded-full  w-full h-full border-[0.5px] border-black p-[0.5px] "
                    src={`https://api.dicebear.com/5.x/micah/svg?seed=${userName}`}
                    alt=""
                  />
                </div>
                <h2 className=" font-bold text-white text-[13px]">
                  {userName}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
