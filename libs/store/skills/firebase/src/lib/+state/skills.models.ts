import { Skill } from '@dges/types/skill';

/**
 * Interface for the 'Skills' data
 */
export interface SkillsEntity extends Skill {
  id: string | number; // Primary ID
}
