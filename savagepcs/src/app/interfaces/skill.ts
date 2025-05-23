import { SkillBase } from "./skill-base";

export interface Skill extends SkillBase {
    attribute: string;
    proficient: boolean;
    specializations: SkillBase[];
    defaultDie: number;
}