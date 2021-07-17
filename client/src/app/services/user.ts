export interface User {
    _id?: string,
    full_name: string,
    email: string,
    address?: {
        street: string,
        city: string,
        zipcode: number
    },
    todos?: {
        id: string,
        title: string,
        completed: boolean
    },
    posts?: {
        id: string,
        title: string,
        bpdy: string
    }
}
