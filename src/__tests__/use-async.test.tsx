import { renderHook } from '@testing-library/react-hooks';

import { useAsync } from '..';

describe('useAsync', (): void => {
  it('should be defined', (): void => {
    expect(useAsync).toBeDefined();
  });

  describe('promise resolved', (): void => {
    const promiseFn = async (): Promise<number> =>
      new Promise((resolve) => {
        const timer = setTimeout(() => {
          clearTimeout(timer);
          resolve(100);
        }, 0);
      });

    it('resolves', async (): Promise<void> => {
      const { result, waitForNextUpdate } = renderHook(({ fn }) => useAsync(fn), {
        initialProps: {
          fn: promiseFn,
        },
      });

      await waitForNextUpdate();

      expect(result.current).toStrictEqual({
        data: 100,
        complete: true,
        error: false,
      });
    });
  });

  describe('promise rejected', (): void => {
    const e = new Error('no data');
    const promiseFn = async (): Promise<number> =>
      new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
          clearTimeout(timer);
          reject(e);
        }, 0);
      });

    it('is rejected', async (): Promise<void> => {
      const { result, waitForNextUpdate } = renderHook(({ fn }) => useAsync(fn), {
        initialProps: {
          fn: promiseFn,
        },
      });

      await waitForNextUpdate();

      expect(result.current).toStrictEqual({
        data: e,
        complete: true,
        error: true,
      });
    });
  });
});
