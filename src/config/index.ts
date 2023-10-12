let API_TOKEN: string;

if (process.env.REACT_APP_ENV === 'production') {
  API_TOKEN = process.env.REACT_APP_BASE_URL_PROD!;
} else if (process.env.REACT_APP_ENV === 'development') {
  API_TOKEN = process.env.REACT_APP_BASE_URL_DEV!;
}

export default API_TOKEN!;
