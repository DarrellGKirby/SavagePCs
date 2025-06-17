import { CharacterAttribute } from "./char-attribute";
import { CharacterDescription } from "./char-description";
import { CharacterEdge } from "./char-edge";
import { CharacterHindrance } from "./char-hindrance";
import { Skill } from "./skill";

export interface Character {
    id: number;
    description: CharacterDescription;
    attributes: CharacterAttribute[];
    skills: Skill[];
    hindrances: CharacterHindrance[];
    edges: CharacterEdge[];
}