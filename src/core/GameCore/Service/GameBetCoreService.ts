import {GameBetCoreModel} from "@/core/GameCore/Model/GameBetCoreModel";
import {GameBetCoreData} from "@/core/GameCore/Data/GameBetCoreData";
import {GameBetInsertCoreMessage} from "@/core/GameCore/Message/GameBetInsertCoreMessage";
import {GameBetUpdateCoreMessage} from "@/core/GameCore/Message/GameBetUpdateCoreMessage";
import {GameBetSearchCoreMessage} from "@/core/GameCore/Message/GameBetSearchCoreMessage";
import {GameBetDeleteCoreMessage} from "@/core/GameCore/Message/GameBetDeleteCoreMessage";
import {GameBetCountCoreMessage} from "@/core/GameCore/Message/GameBetCountCoreMessage";
export class GameBetCoreService {
/**
     * 批量插入
     * @constructor
	 * @param GameBetList Array<GameBetCoreModel>
     */
public static InsertBatch(GameBetList : Array<GameBetCoreModel>) : Promise<boolean> {
return GameBetCoreData.InsertBatch(GameBetList)
}
/**
     * 插入
     * @param GameBet GameBet : GameBetInsertCoreMessage
     * @constructor
     */
public static Insert(GameBet : GameBetInsertCoreMessage) : Promise<boolean> {
return GameBetCoreData.Insert(GameBet)
}
/**
     * 修改用户
     * @param GameBet GameBetUpdateCoreMessage
     * @constructor
     */
public static Update(GameBet : GameBetUpdateCoreMessage) : Promise<number> {
return GameBetCoreData.Update(GameBet);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : GameBetCountCoreMessage) : Promise<number>{
return GameBetCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where GameBetSearchCoreMessage
     * @constructor
     */
public static Search(where : GameBetSearchCoreMessage) : Promise<Array<GameBetCoreModel>>{
return GameBetCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : GameBetDeleteCoreMessage) : Promise<number>{
return GameBetCoreData.Delete(where);
}
}
