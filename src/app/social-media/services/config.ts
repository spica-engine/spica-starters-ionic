import { InjectionToken } from '@angular/core';

export interface RealtimeConfig {
  poolSize: number;
  url: string;
}
export const REALTIME_CONFIG = new InjectionToken<RealtimeConfig>(
  "REALTIME_CONFIG"
);
