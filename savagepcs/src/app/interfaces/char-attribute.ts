import { Bonus } from "./bonus";
import { Die } from "./die";

export interface CharacterAttribute {
    id: number;
    name: string;
    abbreviation: string;
    die: Die;
    penalties: Bonus[];
}