import {GameClassificationCoreModel} from "@/core/GameCore/Model/GameClassificationCoreModel";
import {Application} from "@/lib/Application";
import {GameClassificationInsertCoreMessage} from "@/core/GameCore/Message/GameClassificationInsertCoreMessage";
import {GameClassificationUpdateCoreMessage} from "@/core/GameCore/Message/GameClassificationUpdateCoreMessage";
import {GameClassificationSearchCoreMessage} from "@/core/GameCore/Message/GameClassificationSearchCoreMessage";
import {GameClassificationDeleteCoreMessage} from "@/core/GameCore/Message/GameClassificationDeleteCoreMessage";
import {GameClassificationCountCoreMessage} from "@/core/GameCore/Message/GameClassificationCountCoreMessage";
export class GameClassificationCoreData {
/**
     * 批量插入
     * @param GameClassificationList Array<GameClassificationInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(GameClassificationList : Array<GameClassificationInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("Game/GameClassification/InsertBatch.action", {Data:JSON.stringify(GameClassificationList)});
}
/**
     * 插入
     * @param GameClassification  GameClassificationInsertCoreMessage
     * @constructor
     */
public static Insert(GameClassification : GameClassificationInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("Game/GameClassification/Insert.action", GameClassification);
}
/**
     * 修改用户
     * @param GameClassification GameClassificationUpdateCoreMessage
     * @constructor
     */
public static Update(GameClassification : GameClassificationUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("Game/GameClassification/Update.action", GameClassification);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : GameClassificationCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("Game/GameClassification/Count.action", where);
}
/**
     * 搜索用户
     * @param where GameClassificationSearchCoreMessage
     * @constructor
     */
public static Search(where : GameClassificationSearchCoreMessage) : Promise<Array<GameClassificationCoreModel>>{
return Application.Service.GetContent("Game/GameClassification/Search.action", where);
}
/**
     * 删除用户
     * @param where GameClassificationDeleteCoreMessage
     * @constructor
     */
public static Delete(where : GameClassificationDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("Game/GameClassification/Delete.action", where);
}
}
