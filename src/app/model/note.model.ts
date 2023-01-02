import {v4 as uuidv4} from "uuid"

export class Note {
    id: string

    /**
     * 
     * @param title Text that signifies the title of the note
     * @param content Text that signifies the body of the note
     */
    constructor(public title: string, public content: string) {
        this.id = uuidv4()
    }
}