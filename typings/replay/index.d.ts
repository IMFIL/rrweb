import Timer from './timer';
import { eventWithTime, playerConfig, playerMetaData, Handler } from '../types';
import './styles/style.css';
export declare class Replayer {
  wrapper: HTMLDivElement;
  iframe: HTMLIFrameElement;
  timer: Timer;
  private events;
  private config;
  private mouse;
  private emitter;
  private baselineTime;
  private lastPlayedEvent;
  private nextUserInteractionEvent;
  private noramlSpeed;
  private missingNodeRetryMap;
  private playing;
  constructor(
    events: Array<eventWithTime | string>,
    config?: Partial<playerConfig>,
  );
  on(event: string, handler: Handler): void;
  setConfig(config: Partial<playerConfig>): void;
  getMetaData(): playerMetaData;
  getCurrentTime(): number;
  getTimeOffset(): number;
  play(timeOffset?: number): void;
  pause(): void;
  resume(timeOffset?: number): void;
  addEvent(rawEvent: eventWithTime | string): void;
  private setupDom;
  private handleResize;
  private getDelay;
  private getCastFn;
  private rebuildFullSnapshot;
  private waitForStylesheetLoad;
  private applyIncremental;
  private resolveMissingNode;
  private moveAndHover;
  private hoverElements;
  private isUserInteraction;
  private restoreSpeed;
  private warnNodeNotFound;
  private debugNodeNotFound;
}
