import {GamePlayingCoreModel} from "@/core/GameCore/Model/GamePlayingCoreModel";
import {Application} from "@/lib/Application";
import {GamePlayingInsertCoreMessage} from "@/core/GameCore/Message/GamePlayingInsertCoreMessage";
import {GamePlayingUpdateCoreMessage} from "@/core/GameCore/Message/GamePlayingUpdateCoreMessage";
import {GamePlayingSearchCoreMessage} from "@/core/GameCore/Message/GamePlayingSearchCoreMessage";
import {GamePlayingDeleteCoreMessage} from "@/core/GameCore/Message/GamePlayingDeleteCoreMessage";
import {GamePlayingCountCoreMessage} from "@/core/GameCore/Message/GamePlayingCountCoreMessage";
export class GamePlayingCoreData {
/**
     * 批量插入
     * @param GamePlayingList Array<GamePlayingInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(GamePlayingList : Array<GamePlayingInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("Game/GamePlaying/InsertBatch.action", {Data:JSON.stringify(GamePlayingList)});
}
/**
     * 插入
     * @param GamePlaying  GamePlayingInsertCoreMessage
     * @constructor
     */
public static Insert(GamePlaying : GamePlayingInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("Game/GamePlaying/Insert.action", GamePlaying);
}
/**
     * 修改用户
     * @param GamePlaying GamePlayingUpdateCoreMessage
     * @constructor
     */
public static Update(GamePlaying : GamePlayingUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("Game/GamePlaying/Update.action", GamePlaying);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : GamePlayingCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("Game/GamePlaying/Count.action", where);
}
/**
     * 搜索用户
     * @param where GamePlayingSearchCoreMessage
     * @constructor
     */
public static Search(where : GamePlayingSearchCoreMessage) : Promise<Array<GamePlayingCoreModel>>{
return Application.Service.GetContent("Game/GamePlaying/Search.action", where);
}
/**
     * 删除用户
     * @param where GamePlayingDeleteCoreMessage
     * @constructor
     */
public static Delete(where : GamePlayingDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("Game/GamePlaying/Delete.action", where);
}
}
