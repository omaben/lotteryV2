import {WithdrawUserMessage} from "../Message/WithdrawUserMessage";
import {Application} from "@/lib/Application";

export class WithdrawService {
    public static User(data: WithdrawUserMessage) {
        return Application.Service.GetContent("Withdraw/WithdrawUser.action", data);
    }
}