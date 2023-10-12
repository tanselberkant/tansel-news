import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../features/userSlice';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../components/layout/LanguageSwitcher';

export default function Login() {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (name.length < 0 || name === '') console.log('O öyle olmaz kanks');
    // console.log(name);
    dispatch(setUser(name));
  };

  return (
    <div>
      <div className="bg-[#005D99] py-10 px-10 flex w-full justify-center items-center ">
        {/* <h3>{currentLanguage}</h3> */}
        <LanguageSwitcher />
      </div>
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('LoginTitle')}
          </h2>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                {t('LoginNameLabel')}
              </label>
              <div className="mt-2.5">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t('LoginNamePlaceHolder')}
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md  px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm bg-[#005D99] "
            >
              {t('LoginBtn')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
