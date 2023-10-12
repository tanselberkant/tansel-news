export interface INews {
  key: string | number;
  url: string;
  description: string;
  image: string;
  name: string;
  source: string;
  date: string;
}

export interface RootNews {
  success: boolean;
  result: INews[];
}
