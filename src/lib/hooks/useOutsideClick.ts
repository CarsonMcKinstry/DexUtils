import { useLayoutEffect } from 'react';

export function useOutsideClick(
  ref: React.MutableRefObject<any>,
  handler: React.MouseEventHandler<HTMLElement>,
  when = true
) {
  // i don't like any, but whatevs
  function handle(e: any) {
    if (ref && ref.current && !ref.current.contains(e.target)) {
      handler(e);
    }
  }
  useLayoutEffect(() => {
    if (when) {
      document.addEventListener('click', handle);
      return () => {
        document.removeEventListener('click', handle);
      };
    }
  }, [ref, handler, when]);
}
