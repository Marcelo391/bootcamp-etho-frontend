import axiosInstance from "../../modules/axios/axios.module"
import { GetSession, PostSessionNew, PostSessionNewPayload } from "../user/user.types";
import { Session } from "./session.types";


export default function sessionService() {
    const postSessionNew = (user: PostSessionNewPayload): Promise<PostSessionNew> => axiosInstance.post('session/new', user);

    const getSession = (acessToken: Session['accessToken']): Promise<GetSession> => axiosInstance.get('session', {
        headers: { authorization: acessToken }
    });


    return { postSessionNew, getSession }
}