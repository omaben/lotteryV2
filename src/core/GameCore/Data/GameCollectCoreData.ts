import {GameCollectCoreModel} from "@/core/GameCore/Model/GameCollectCoreModel";
import {Application} from "@/lib/Application";
import {GameCollectInsertCoreMessage} from "@/core/GameCore/Message/GameCollectInsertCoreMessage";
import {GameCollectUpdateCoreMessage} from "@/core/GameCore/Message/GameCollectUpdateCoreMessage";
import {GameCollectSearchCoreMessage} from "@/core/GameCore/Message/GameCollectSearchCoreMessage";
import {GameCollectDeleteCoreMessage} from "@/core/GameCore/Message/GameCollectDeleteCoreMessage";
import {GameCollectCountCoreMessage} from "@/core/GameCore/Message/GameCollectCountCoreMessage";
export class GameCollectCoreData {
/**
     * 批量插入
     * @param GameCollectList Array<GameCollectInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(GameCollectList : Array<GameCollectInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("Game/GameCollect/InsertBatch.action", {Data:JSON.stringify(GameCollectList)});
}
/**
     * 插入
     * @param GameCollect  GameCollectInsertCoreMessage
     * @constructor
     */
public static Insert(GameCollect : GameCollectInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("Game/GameCollect/Insert.action", GameCollect);
}
/**
     * 修改用户
     * @param GameCollect GameCollectUpdateCoreMessage
     * @constructor
     */
public static Update(GameCollect : GameCollectUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("Game/GameCollect/Update.action", GameCollect);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : GameCollectCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("Game/GameCollect/Count.action", where);
}
/**
     * 搜索用户
     * @param where GameCollectSearchCoreMessage
     * @constructor
     */
public static Search(where : GameCollectSearchCoreMessage) : Promise<Array<GameCollectCoreModel>>{
return Application.Service.GetContent("Game/GameCollect/Search.action", where);
}
/**
     * 删除用户
     * @param where GameCollectDeleteCoreMessage
     * @constructor
     */
public static Delete(where : GameCollectDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("Game/GameCollect/Delete.action", where);
}
}
