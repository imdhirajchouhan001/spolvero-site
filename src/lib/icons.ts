// Untitled UI icon set (@untitledui/icons), keyed by the short names used in src/data.
import {
  ArrowRight, ArrowUpRight, BarChart10, Bell01, BookOpen01, BookOpen02, Browser, Calculator, Camera01, Check,
  CheckCircle, Clock, ClockRewind, Columns03, Dice3, Edit05, EyeOff, Globe01, HelpCircle, LayersThree01, Lock01,
  Mail01, Menu02, MessageChatCircle, Monitor01, Moon01, Palette, PenTool01, Percent02, Phone01, PieChart01,
  PlayCircle, SearchLg, ShieldTick, Stars02, Target04, Tool02, Users01, Wallet02, XClose, Zap,
} from "@untitledui/icons";

export const icons = {
  wallet: Wallet02, bell: Bell01, zap: Zap, users: Users01, target: Target04, split: Columns03, layers: LayersThree01,
  shield: ShieldTick, book: BookOpen01, utensils: PieChart01, clock: Clock, chart: BarChart10, camera: Camera01,
  notebook: Edit05, orbit: Moon01, globe: Globe01, message: MessageChatCircle, quote: BookOpen02, calculator: Calculator,
  percent: Percent02, search: SearchLg, history: ClockRewind, gamepad: Dice3, monitor: Monitor01, wrench: Tool02,
  check: Check, checkCircle: CheckCircle, arrow: ArrowRight, external: ArrowUpRight, palette: Palette, phone: Phone01,
  pen: PenTool01, lock: Lock01, eyeoff: EyeOff, sparkles: Stars02, play: PlayCircle, mail: Mail01, menu: Menu02,
  close: XClose, help: HelpCircle, browser: Browser,
};

export type IconName = keyof typeof icons;
export const getIcon = (name: string) => icons[name as IconName] ?? Stars02;
