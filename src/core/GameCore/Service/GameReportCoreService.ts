import {GameReportCoreModel} from "@/core/GameCore/Model/GameReportCoreModel";
import {GameReportCoreData} from "@/core/GameCore/Data/GameReportCoreData";
import {GameReportInsertCoreMessage} from "@/core/GameCore/Message/GameReportInsertCoreMessage";
import {GameReportUpdateCoreMessage} from "@/core/GameCore/Message/GameReportUpdateCoreMessage";
import {GameReportSearchCoreMessage} from "@/core/GameCore/Message/GameReportSearchCoreMessage";
import {GameReportDeleteCoreMessage} from "@/core/GameCore/Message/GameReportDeleteCoreMessage";
import {GameReportCountCoreMessage} from "@/core/GameCore/Message/GameReportCountCoreMessage";
export class GameReportCoreService {
/**
     * 批量插入
     * @constructor
	 * @param GameReportList Array<GameReportCoreModel>
     */
public static InsertBatch(GameReportList : Array<GameReportCoreModel>) : Promise<boolean> {
return GameReportCoreData.InsertBatch(GameReportList)
}
/**
     * 插入
     * @param GameReport GameReport : GameReportInsertCoreMessage
     * @constructor
     */
public static Insert(GameReport : GameReportInsertCoreMessage) : Promise<boolean> {
return GameReportCoreData.Insert(GameReport)
}
/**
     * 修改用户
     * @param GameReport GameReportUpdateCoreMessage
     * @constructor
     */
public static Update(GameReport : GameReportUpdateCoreMessage) : Promise<number> {
return GameReportCoreData.Update(GameReport);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : GameReportCountCoreMessage) : Promise<number>{
return GameReportCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where GameReportSearchCoreMessage
     * @constructor
     */
public static Search(where : GameReportSearchCoreMessage) : Promise<Array<GameReportCoreModel>>{
return GameReportCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : GameReportDeleteCoreMessage) : Promise<number>{
return GameReportCoreData.Delete(where);
}
}
