import {GameHistoryCoreModel} from "@/core/GameCore/Model/GameHistoryCoreModel";
import {Application} from "@/lib/Application";
import {GameHistoryInsertCoreMessage} from "@/core/GameCore/Message/GameHistoryInsertCoreMessage";
import {GameHistoryUpdateCoreMessage} from "@/core/GameCore/Message/GameHistoryUpdateCoreMessage";
import {GameHistorySearchCoreMessage} from "@/core/GameCore/Message/GameHistorySearchCoreMessage";
import {GameHistoryDeleteCoreMessage} from "@/core/GameCore/Message/GameHistoryDeleteCoreMessage";
import {GameHistoryCountCoreMessage} from "@/core/GameCore/Message/GameHistoryCountCoreMessage";
export class GameHistoryCoreData {
/**
     * 批量插入
     * @param GameHistoryList Array<GameHistoryInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(GameHistoryList : Array<GameHistoryInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("Game/GameHistory/InsertBatch.action", {Data:JSON.stringify(GameHistoryList)});
}
/**
     * 插入
     * @param GameHistory  GameHistoryInsertCoreMessage
     * @constructor
     */
public static Insert(GameHistory : GameHistoryInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("Game/GameHistory/Insert.action", GameHistory);
}
/**
     * 修改用户
     * @param GameHistory GameHistoryUpdateCoreMessage
     * @constructor
     */
public static Update(GameHistory : GameHistoryUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("Game/GameHistory/Update.action", GameHistory);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : GameHistoryCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("Game/GameHistory/Count.action", where);
}
/**
     * 搜索用户
     * @param where GameHistorySearchCoreMessage
     * @constructor
     */
public static Search(where : GameHistorySearchCoreMessage) : Promise<Array<GameHistoryCoreModel>>{
return Application.Service.GetContent("Game/GameHistory/Search.action", where);
}
/**
     * 删除用户
     * @param where GameHistoryDeleteCoreMessage
     * @constructor
     */
public static Delete(where : GameHistoryDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("Game/GameHistory/Delete.action", where);
}
}
