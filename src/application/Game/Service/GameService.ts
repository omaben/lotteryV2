import {UserData} from "@/application/User/Data/UserData";
import {GameBetMessage} from "@/application/Game/Message/GameBetMessage";
import {GameData} from "@/application/Game/Data/GameData";


export class GameService {
    public static GameBet(data: GameBetMessage) {
        return GameData.GameBet(data);
    }
}