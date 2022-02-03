import {GameReportCoreModel} from "@/core/GameCore/Model/GameReportCoreModel";
import {Application} from "@/lib/Application";
import {GameReportInsertCoreMessage} from "@/core/GameCore/Message/GameReportInsertCoreMessage";
import {GameReportUpdateCoreMessage} from "@/core/GameCore/Message/GameReportUpdateCoreMessage";
import {GameReportSearchCoreMessage} from "@/core/GameCore/Message/GameReportSearchCoreMessage";
import {GameReportDeleteCoreMessage} from "@/core/GameCore/Message/GameReportDeleteCoreMessage";
import {GameReportCountCoreMessage} from "@/core/GameCore/Message/GameReportCountCoreMessage";
export class GameReportCoreData {
/**
     * 批量插入
     * @param GameReportList Array<GameReportInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(GameReportList : Array<GameReportInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("Game/GameReport/InsertBatch.action", {Data:JSON.stringify(GameReportList)});
}
/**
     * 插入
     * @param GameReport  GameReportInsertCoreMessage
     * @constructor
     */
public static Insert(GameReport : GameReportInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("Game/GameReport/Insert.action", GameReport);
}
/**
     * 修改用户
     * @param GameReport GameReportUpdateCoreMessage
     * @constructor
     */
public static Update(GameReport : GameReportUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("Game/GameReport/Update.action", GameReport);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : GameReportCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("Game/GameReport/Count.action", where);
}
/**
     * 搜索用户
     * @param where GameReportSearchCoreMessage
     * @constructor
     */
public static Search(where : GameReportSearchCoreMessage) : Promise<Array<GameReportCoreModel>>{
return Application.Service.GetContent("Game/GameReport/Search.action", where);
}
/**
     * 删除用户
     * @param where GameReportDeleteCoreMessage
     * @constructor
     */
public static Delete(where : GameReportDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("Game/GameReport/Delete.action", where);
}
}
