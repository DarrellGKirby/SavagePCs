import { Die } from "./die";

export interface CharacterAttribute {
    id: number;
    name: string;
    abbreviation: string;
    die: Die;
}