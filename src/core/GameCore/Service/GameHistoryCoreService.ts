import {GameHistoryCoreModel} from "@/core/GameCore/Model/GameHistoryCoreModel";
import {GameHistoryCoreData} from "@/core/GameCore/Data/GameHistoryCoreData";
import {GameHistoryInsertCoreMessage} from "@/core/GameCore/Message/GameHistoryInsertCoreMessage";
import {GameHistoryUpdateCoreMessage} from "@/core/GameCore/Message/GameHistoryUpdateCoreMessage";
import {GameHistorySearchCoreMessage} from "@/core/GameCore/Message/GameHistorySearchCoreMessage";
import {GameHistoryDeleteCoreMessage} from "@/core/GameCore/Message/GameHistoryDeleteCoreMessage";
import {GameHistoryCountCoreMessage} from "@/core/GameCore/Message/GameHistoryCountCoreMessage";
export class GameHistoryCoreService {
/**
     * 批量插入
     * @constructor
	 * @param GameHistoryList Array<GameHistoryCoreModel>
     */
public static InsertBatch(GameHistoryList : Array<GameHistoryCoreModel>) : Promise<boolean> {
return GameHistoryCoreData.InsertBatch(GameHistoryList)
}
/**
     * 插入
     * @param GameHistory GameHistory : GameHistoryInsertCoreMessage
     * @constructor
     */
public static Insert(GameHistory : GameHistoryInsertCoreMessage) : Promise<boolean> {
return GameHistoryCoreData.Insert(GameHistory)
}
/**
     * 修改用户
     * @param GameHistory GameHistoryUpdateCoreMessage
     * @constructor
     */
public static Update(GameHistory : GameHistoryUpdateCoreMessage) : Promise<number> {
return GameHistoryCoreData.Update(GameHistory);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : GameHistoryCountCoreMessage) : Promise<number>{
return GameHistoryCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where GameHistorySearchCoreMessage
     * @constructor
     */
public static Search(where : GameHistorySearchCoreMessage) : Promise<Array<GameHistoryCoreModel>>{
return GameHistoryCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : GameHistoryDeleteCoreMessage) : Promise<number>{
return GameHistoryCoreData.Delete(where);
}
}
