export interface Skill {
  id: string | number;
  title: string;
  image: string;
}

export const EMPTY_SKILL: Skill = {
  id: null,
  title: null,
  image: null,
};
