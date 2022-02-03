import {UserRegisterMessage} from "@/application/User/Message/UserRegisterMessage";
import {UserLoginMessage} from "@/application/User/Message/UserLoginMessage";
import {UserData} from "@/application/User/Data/UserData";

export class UserService {
    public static UserRegisterMessage(data: UserRegisterMessage) {
        return UserData.UserRegisterMessage(data);
    }

    public static UserLoginMessage(data: UserLoginMessage) {
        return UserData.UserLoginMessage(data);
    }
}