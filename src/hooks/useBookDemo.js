import { useCallback } from 'react';
import { DEMO_CAL_NAMESPACE, DEMO_CAL_LINK, DEMO_URL } from '../lib/site';
import { openCalModal } from '../lib/cal';

/* Opens the demo booking as an on-site Cal.com modal. */
export function useBookDemo() {
  return useCallback(() => openCalModal(DEMO_CAL_NAMESPACE, DEMO_CAL_LINK, DEMO_URL), []);
}
