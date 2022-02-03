import {GameBetCoreModel} from "@/core/GameCore/Model/GameBetCoreModel";
import {Application} from "@/lib/Application";
import {GameBetInsertCoreMessage} from "@/core/GameCore/Message/GameBetInsertCoreMessage";
import {GameBetUpdateCoreMessage} from "@/core/GameCore/Message/GameBetUpdateCoreMessage";
import {GameBetSearchCoreMessage} from "@/core/GameCore/Message/GameBetSearchCoreMessage";
import {GameBetDeleteCoreMessage} from "@/core/GameCore/Message/GameBetDeleteCoreMessage";
import {GameBetCountCoreMessage} from "@/core/GameCore/Message/GameBetCountCoreMessage";
export class GameBetCoreData {
/**
     * 批量插入
     * @param GameBetList Array<GameBetInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(GameBetList : Array<GameBetInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("Game/GameBet/InsertBatch.action", {Data:JSON.stringify(GameBetList)});
}
/**
     * 插入
     * @param GameBet  GameBetInsertCoreMessage
     * @constructor
     */
public static Insert(GameBet : GameBetInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("Game/GameBet/Insert.action", GameBet);
}
/**
     * 修改用户
     * @param GameBet GameBetUpdateCoreMessage
     * @constructor
     */
public static Update(GameBet : GameBetUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("Game/GameBet/Update.action", GameBet);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : GameBetCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("Game/GameBet/Count.action", where);
}
/**
     * 搜索用户
     * @param where GameBetSearchCoreMessage
     * @constructor
     */
public static Search(where : GameBetSearchCoreMessage) : Promise<Array<GameBetCoreModel>>{
return Application.Service.GetContent("Game/GameBet/Search.action", where);
}
/**
     * 删除用户
     * @param where GameBetDeleteCoreMessage
     * @constructor
     */
public static Delete(where : GameBetDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("Game/GameBet/Delete.action", where);
}
}
