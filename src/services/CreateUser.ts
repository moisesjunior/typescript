interface Children {
    name: string,
    rg: string
}

interface CreateUserData {
    name?: string;
    email: string;
    password: string;
    address?: string;
    children: Array<Children>;
}

export default function createUser({ name, email, password, address, children }: CreateUserData){
    const user = {
        name,
        email,
        password,
        address,
        children
    }
    
    return user;
}