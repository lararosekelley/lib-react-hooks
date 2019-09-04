import { useState, useEffect } from 'react';

const useAsync = (fn: () => Promise<any>, context?: any): UseAsyncResolution => {
  const [ res, setRes ] = useState({ data: null, complete: false, error: false });
  let shouldCall = true;

  useEffect((): () => void => {
    const callAsync = async (): Promise<void> => {
      const boundFn = context ? fn.bind(context) : fn;

      try {
        const data = await boundFn();

        if (shouldCall) setRes({ data, complete: true, error: false });
      } catch (e) {
        if (shouldCall) setRes({ data: e, complete: true, error: true });
      }
    };

    callAsync();

    return (): void => {
      shouldCall = false;
    };
  }, []);

  return res;
};

export interface UseAsyncArguments {
  fn: () => Promise<any>;
  context?: any;
}

export interface UseAsyncResolution {
  data?: any;
  complete: boolean;
  error: boolean;
}

export default useAsync;
