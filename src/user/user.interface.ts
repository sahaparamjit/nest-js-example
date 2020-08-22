import { Person } from "./person.interface";

export interface User {
    page: Int32Array;
    per_page: Int32Array;
    total: Int32Array;
    total_pages: Int32Array;
    data: Person[];
}
