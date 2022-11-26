import {createContext} from 'react';

const SplashCtxDefaultValue = {
  splashLoading: true,
  setSplashLoading: (boolean: boolean) => {},
  defaultData: {
    video: '',
    logo: '',
    tagline: '',
    header: '',
  },
  setDefaultData: (object: {
    video: string,
    logo: string,
    tagline: string,
    header: string,
  }) => {},
}

export const SplashContext = createContext(SplashCtxDefaultValue);