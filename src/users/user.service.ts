import { Injectable } from "@nestjs/common";


interface USER{
    id: number;
    name: string;
}

@Injectable()
export class UserService{
    private store = new Map<number, USER>()

    addUser(user: USER){
        this.store.set(user.id,user)
    }

    getUser(id: number){
        return this.store.get(id)
    }

    getUsers(){
        return Array.from(this.store).map(([_,user]) => user)
    }

    updateUser(id: number, user: USER){
        this.store.set(id,user)
    }

    deleteUser(id: number){
        this.store.delete(id)
    }
}