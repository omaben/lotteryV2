import {AgencyGroupReportCoreModel} from "@/core/AgencyCore/Model/AgencyGroupReportCoreModel";
import {AgencyGroupReportCoreData} from "@/core/AgencyCore/Data/AgencyGroupReportCoreData";
import {AgencyGroupReportInsertCoreMessage} from "@/core/AgencyCore/Message/AgencyGroupReportInsertCoreMessage";
import {AgencyGroupReportUpdateCoreMessage} from "@/core/AgencyCore/Message/AgencyGroupReportUpdateCoreMessage";
import {AgencyGroupReportSearchCoreMessage} from "@/core/AgencyCore/Message/AgencyGroupReportSearchCoreMessage";
import {AgencyGroupReportDeleteCoreMessage} from "@/core/AgencyCore/Message/AgencyGroupReportDeleteCoreMessage";
import {AgencyGroupReportCountCoreMessage} from "@/core/AgencyCore/Message/AgencyGroupReportCountCoreMessage";
export class AgencyGroupReportCoreService {
/**
     * 批量插入
     * @constructor
	 * @param AgencyGroupReportList Array<AgencyGroupReportCoreModel>
     */
public static InsertBatch(AgencyGroupReportList : Array<AgencyGroupReportCoreModel>) : Promise<boolean> {
return AgencyGroupReportCoreData.InsertBatch(AgencyGroupReportList)
}
/**
     * 插入
     * @param AgencyGroupReport AgencyGroupReport : AgencyGroupReportInsertCoreMessage
     * @constructor
     */
public static Insert(AgencyGroupReport : AgencyGroupReportInsertCoreMessage) : Promise<boolean> {
return AgencyGroupReportCoreData.Insert(AgencyGroupReport)
}
/**
     * 修改用户
     * @param AgencyGroupReport AgencyGroupReportUpdateCoreMessage
     * @constructor
     */
public static Update(AgencyGroupReport : AgencyGroupReportUpdateCoreMessage) : Promise<number> {
return AgencyGroupReportCoreData.Update(AgencyGroupReport);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : AgencyGroupReportCountCoreMessage) : Promise<number>{
return AgencyGroupReportCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where AgencyGroupReportSearchCoreMessage
     * @constructor
     */
public static Search(where : AgencyGroupReportSearchCoreMessage) : Promise<Array<AgencyGroupReportCoreModel>>{
return AgencyGroupReportCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : AgencyGroupReportDeleteCoreMessage) : Promise<number>{
return AgencyGroupReportCoreData.Delete(where);
}
}
