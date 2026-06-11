import { useCallback, useContext } from 'react';
import { AnnounceContext } from '../components/common/LiveRegion';

export function useAnnounce() {
  const announce = useContext(AnnounceContext);
  return useCallback(
    (message, priority) => {
      if (announce) announce(message, priority);
    },
    [announce]
  );
}
