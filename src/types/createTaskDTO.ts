import { TaskStatus } from "./statusEnum"

export interface createTaskDTO{
    header: String
    body?: string
    date: Date
    limitDate: Date
    status?: TaskStatus
}