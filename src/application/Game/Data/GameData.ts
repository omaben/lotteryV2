import {GameBetMessage} from "@/application/Game/Message/GameBetMessage";
import {UserData} from "@/application/User/Data/UserData";
import {Application} from "@/lib/Application";

export class GameData {
    public static GameBet(data: GameBetMessage) {
        return Application.Service.GetContent("Game/Bet.action", data);
    }
}