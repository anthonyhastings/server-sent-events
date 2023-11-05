export const CACHE_TIMES = {
  /** Zero seconds. */
  NEVER: 0,
  /** Thirty seconds. */
  SHORT: 30 * 1000,
  /** Five minutes.  */
  NORMAL: 5 * 60 * 1000,
  /** Thirty minutes. */
  LONG: 30 * 60 * 1000,
} as const;
