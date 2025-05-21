import { CharacterAttribute } from "./char-attribute";
import { CharacterDescription } from "./char-description";

export interface Character {
    id: number;
    description: CharacterDescription;
    attributes: CharacterAttribute[];
}