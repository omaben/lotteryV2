import {AgencyReportCoreModel} from "@/core/AgencyCore/Model/AgencyReportCoreModel";
import {AgencyReportCoreData} from "@/core/AgencyCore/Data/AgencyReportCoreData";
import {AgencyReportInsertCoreMessage} from "@/core/AgencyCore/Message/AgencyReportInsertCoreMessage";
import {AgencyReportUpdateCoreMessage} from "@/core/AgencyCore/Message/AgencyReportUpdateCoreMessage";
import {AgencyReportSearchCoreMessage} from "@/core/AgencyCore/Message/AgencyReportSearchCoreMessage";
import {AgencyReportDeleteCoreMessage} from "@/core/AgencyCore/Message/AgencyReportDeleteCoreMessage";
import {AgencyReportCountCoreMessage} from "@/core/AgencyCore/Message/AgencyReportCountCoreMessage";
export class AgencyReportCoreService {
/**
     * 批量插入
     * @constructor
	 * @param AgencyReportList Array<AgencyReportCoreModel>
     */
public static InsertBatch(AgencyReportList : Array<AgencyReportCoreModel>) : Promise<boolean> {
return AgencyReportCoreData.InsertBatch(AgencyReportList)
}
/**
     * 插入
     * @param AgencyReport AgencyReport : AgencyReportInsertCoreMessage
     * @constructor
     */
public static Insert(AgencyReport : AgencyReportInsertCoreMessage) : Promise<boolean> {
return AgencyReportCoreData.Insert(AgencyReport)
}
/**
     * 修改用户
     * @param AgencyReport AgencyReportUpdateCoreMessage
     * @constructor
     */
public static Update(AgencyReport : AgencyReportUpdateCoreMessage) : Promise<number> {
return AgencyReportCoreData.Update(AgencyReport);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : AgencyReportCountCoreMessage) : Promise<number>{
return AgencyReportCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where AgencyReportSearchCoreMessage
     * @constructor
     */
public static Search(where : AgencyReportSearchCoreMessage) : Promise<Array<AgencyReportCoreModel>>{
return AgencyReportCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : AgencyReportDeleteCoreMessage) : Promise<number>{
return AgencyReportCoreData.Delete(where);
}
}
