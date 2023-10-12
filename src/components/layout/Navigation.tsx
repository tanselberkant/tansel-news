import { Fragment, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  ArrowLeftOnRectangleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { classNames } from '../../utils/ConditionalClasses';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../../features/userSlice';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { Link } from 'react-router-dom';

export default function Navigation() {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'tr' : 'en';
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
  };
  const userName = useSelector((state: any) => state.user.userName);
  const dispatch = useDispatch();

  const navigation = [
    { name: t('navigation.news'), href: '/news', current: true },
    { name: t('navigation.features'), href: '/features', current: false },
  ];

  return (
    <Disclosure as="nav" className="bg-customBg ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <div className="text-center w-full hidden sm:block ">
                    <div className="text-white   font-extrabold font-custom ">
                      <span className="p-2 border-2 border-white  text-[12px] rounded-lg ">
                        Tansel Berkant Oflaz
                      </span>
                    </div>
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:block"></div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="sm:flex space-x-4 hidden  ">
                  {navigation.map((item: any) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        'rounded-md px-3 py-2 text-base text-white uppercase hover:text-gray-500 '
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div className="flex items-center space-x-2">
                    <img
                      className="h-8 w-8 rounded-full border-2 border-white p-[0.5px] "
                      src={`https://api.dicebear.com/5.x/micah/svg?seed=${userName}`}
                      alt=""
                    />
                    <div className="text-white hidden md:block">
                      {userName.substring(0, 10)}
                    </div>
                    <button
                      onClick={() => {
                        dispatch(deleteUser());
                      }}
                      type="button"
                      className="relative rounded-full "
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Logut</span>
                      <ArrowLeftOnRectangleIcon className="h-6 w-6 text-white cursor-pointer" />
                    </button>
                    <LanguageSwitcher />
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  ></Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <Link to={'/'}>
              <div className="text-white flex justify-center my-4 py-3  font-extrabold font-custom ">
                <span className="p-2 border-2 border-white  text-[12px] rounded-lg ">
                  Tansel Berkant Oflaz
                </span>
              </div>
            </Link>
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item: any) => (
                <Link to={item.href} key={item.name}>
                  <Disclosure.Button
                    as="div"
                    className={
                      'block rounded-md px-3 py-2 text-base text-white hover:text-gray-500 font-medium uppercase'
                    }
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
