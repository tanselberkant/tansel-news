import { useQuery } from '@tanstack/react-query';
import { RootNews } from '../interfaces/newsInterfaces';
import newsService from '../services/newsService';
import LeftBanner from '../components/home/LeftBanner';
import Loading from '../components/loader/Loader';
import BannerRight from '../components/home/BannerRight';
import FooterBanner from '../components/home/FooterBanner';

const HomePage = () => {
  const { isLoading, error, data } = useQuery<RootNews, Error>(
    ['homePageNews'],
    {
      queryFn: () => newsService.getNews(),
      staleTime: Infinity,
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) return <Loading />;

  return (
    <div className="w-full mx-auto max-w-7xl mb-20 px-2">
      <h2 className="text-start text-[16px] xl:text-[20px] text-[#005D99] font-bold uppercase my-8 ">
        OPINION
      </h2>

      {data?.result ? (
        <>
          <div className="w-full grid grid-cols-12 lg:gap-8 xl:gap-14 ">
            <div className="lg:col-span-6 col-span-12">
              <LeftBanner data={data?.result[0]} />
            </div>
            <div className="lg:col-span-6 col-span-12">
              <BannerRight data={data?.result} />
            </div>
          </div>
          <div className="w-[98%] mx-auto border-[1px] border-[##E1E6EB] "></div>
          <FooterBanner data={data.result[7]} />
        </>
      ) : (
        <div className="my-2 w-full">GETTING DATA FAILED!</div>
      )}
    </div>
  );
};

export default HomePage;
