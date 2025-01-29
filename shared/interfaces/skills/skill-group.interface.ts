import { ISkill } from "./skill.interface"

export interface ISkillGroup {
  id:             number
  title:          string
  skills:         ISkill[]
}