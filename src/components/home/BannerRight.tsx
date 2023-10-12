import { INews } from '../../interfaces/newsInterfaces';
import Banner from './Banner';
import NewsList from './NewsList';

type Props = {
  data: INews[];
};

const BannerRight = ({ data }: Props) => {
  return (
    <div className="w-full grid grid-cols-4 gap-14">
      <div className="hidden xl:block xl:col-span-2">
        <Banner data={data.slice(0, 2)} />
      </div>
      <div className="col-span-4 xl:col-span-2">
        <NewsList data={data.slice(0, 7)} />
      </div>
      <div className="col-span-2"></div>
    </div>
  );
};

export default BannerRight;
