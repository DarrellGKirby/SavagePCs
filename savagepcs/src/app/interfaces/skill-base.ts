import { Bonus } from "./bonus";
import { Die } from "./die";

export interface SkillBase {
    name: string;
    die: Die;
    penalties: Bonus[];
}