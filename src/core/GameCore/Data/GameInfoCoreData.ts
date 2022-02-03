import {GameInfoCoreModel} from "@/core/GameCore/Model/GameInfoCoreModel";
import {Application} from "@/lib/Application";
import {GameInfoInsertCoreMessage} from "@/core/GameCore/Message/GameInfoInsertCoreMessage";
import {GameInfoUpdateCoreMessage} from "@/core/GameCore/Message/GameInfoUpdateCoreMessage";
import {GameInfoSearchCoreMessage} from "@/core/GameCore/Message/GameInfoSearchCoreMessage";
import {GameInfoDeleteCoreMessage} from "@/core/GameCore/Message/GameInfoDeleteCoreMessage";
import {GameInfoCountCoreMessage} from "@/core/GameCore/Message/GameInfoCountCoreMessage";
export class GameInfoCoreData {
/**
     * 批量插入
     * @param GameInfoList Array<GameInfoInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(GameInfoList : Array<GameInfoInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("Game/GameInfo/InsertBatch.action", {Data:JSON.stringify(GameInfoList)});
}
/**
     * 插入
     * @param GameInfo  GameInfoInsertCoreMessage
     * @constructor
     */
public static Insert(GameInfo : GameInfoInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("Game/GameInfo/Insert.action", GameInfo);
}
/**
     * 修改用户
     * @param GameInfo GameInfoUpdateCoreMessage
     * @constructor
     */
public static Update(GameInfo : GameInfoUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("Game/GameInfo/Update.action", GameInfo);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : GameInfoCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("Game/GameInfo/Count.action", where);
}
/**
     * 搜索用户
     * @param where GameInfoSearchCoreMessage
     * @constructor
     */
public static Search(where : GameInfoSearchCoreMessage) : Promise<Array<GameInfoCoreModel>>{
return Application.Service.GetContent("Game/GameInfo/Search.action", where);
}
/**
     * 删除用户
     * @param where GameInfoDeleteCoreMessage
     * @constructor
     */
public static Delete(where : GameInfoDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("Game/GameInfo/Delete.action", where);
}
}
