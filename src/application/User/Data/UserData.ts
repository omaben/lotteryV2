import {UserRegisterMessage} from "@/application/User/Message/UserRegisterMessage";
import {UserLoginMessage} from "@/application/User/Message/UserLoginMessage";
import {Application} from "@/lib/Application";

export class UserData {
    public static UserRegisterMessage(data: UserRegisterMessage) {
        return Application.Service.GetContent("Register.action", data);
    }

    public static UserLoginMessage(data: UserLoginMessage) {
        return Application.Service.GetContent("Login.action", data);
    }
}