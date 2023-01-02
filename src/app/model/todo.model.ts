import { v4 as uuidav4 } from "uuid"

export class Todo {
    id: string
    completed?: boolean

    constructor(public text: string ) {
        this.id = uuidav4()
    }
}