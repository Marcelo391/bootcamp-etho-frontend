import {Response} from "../base/base.types";
import { User } from "../../store/user/user.types"

export type PostSessionNewPayload = {
    email: string,
    password: string
}

// type PostLoginData = {
//     user: Pick<User, 'id' | 'name'>,
//     acessToken: Pick<User, 'acessToken'>

// }

type PostSessionNewData = {
    user: Pick<User, 'id' | 'name' | 'email'>,    
} & Pick<User, 'acessToken'>

export type PostSessionNew = Response<PostSessionNewData>;

type GetSessionData = {
    userId: User['id']
}

export type GetSession = Response<GetSessionData>;