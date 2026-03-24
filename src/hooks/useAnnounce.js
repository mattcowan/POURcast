import { useCallback, useContext } from 'react';
import { AnnounceContext } from '../components/common/LiveRegion';

export function useAnnounce() {
  const announce = useContext(AnnounceContext);
  return useCallback(
    (message) => {
      if (announce) announce(message);
    },
    [announce]
  );
}
