import {GamePlayingClassificationCoreModel} from "@/core/GameCore/Model/GamePlayingClassificationCoreModel";
import {Application} from "@/lib/Application";
import {GamePlayingClassificationInsertCoreMessage} from "@/core/GameCore/Message/GamePlayingClassificationInsertCoreMessage";
import {GamePlayingClassificationUpdateCoreMessage} from "@/core/GameCore/Message/GamePlayingClassificationUpdateCoreMessage";
import {GamePlayingClassificationSearchCoreMessage} from "@/core/GameCore/Message/GamePlayingClassificationSearchCoreMessage";
import {GamePlayingClassificationDeleteCoreMessage} from "@/core/GameCore/Message/GamePlayingClassificationDeleteCoreMessage";
import {GamePlayingClassificationCountCoreMessage} from "@/core/GameCore/Message/GamePlayingClassificationCountCoreMessage";
export class GamePlayingClassificationCoreData {
/**
     * 批量插入
     * @param GamePlayingClassificationList Array<GamePlayingClassificationInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(GamePlayingClassificationList : Array<GamePlayingClassificationInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("Game/GamePlayingClassification/InsertBatch.action", {Data:JSON.stringify(GamePlayingClassificationList)});
}
/**
     * 插入
     * @param GamePlayingClassification  GamePlayingClassificationInsertCoreMessage
     * @constructor
     */
public static Insert(GamePlayingClassification : GamePlayingClassificationInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("Game/GamePlayingClassification/Insert.action", GamePlayingClassification);
}
/**
     * 修改用户
     * @param GamePlayingClassification GamePlayingClassificationUpdateCoreMessage
     * @constructor
     */
public static Update(GamePlayingClassification : GamePlayingClassificationUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("Game/GamePlayingClassification/Update.action", GamePlayingClassification);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : GamePlayingClassificationCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("Game/GamePlayingClassification/Count.action", where);
}
/**
     * 搜索用户
     * @param where GamePlayingClassificationSearchCoreMessage
     * @constructor
     */
public static Search(where : GamePlayingClassificationSearchCoreMessage) : Promise<Array<GamePlayingClassificationCoreModel>>{
return Application.Service.GetContent("Game/GamePlayingClassification/Search.action", where);
}
/**
     * 删除用户
     * @param where GamePlayingClassificationDeleteCoreMessage
     * @constructor
     */
public static Delete(where : GamePlayingClassificationDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("Game/GamePlayingClassification/Delete.action", where);
}
}
