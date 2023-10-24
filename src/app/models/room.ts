import {Student} from "./student";

export interface Room {
    id: string,
    tipi: string,
    kapaciteti: number,
    zene: boolean,
    studente_ne_dhome: number,
    students: Student[]
}
