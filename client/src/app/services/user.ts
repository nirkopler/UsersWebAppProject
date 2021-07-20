export interface Todo {
    _id?: string,
    title: string,
    completed?: boolean
}

export interface Post {
    _id?: string,
    title: string,
    body: string
}

export interface Address {
    street: string,
    city: string,
    zipcode: number
}

export interface User {
    _id?: string,
    full_name: string,
    email: string,
    address?: Address,
    todos?: Array<Todo>,
    posts?: Array<Post>
}