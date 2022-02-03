import {AgencyGroupReportCoreModel} from "@/core/AgencyCore/Model/AgencyGroupReportCoreModel";
import {Application} from "@/lib/Application";
import {AgencyGroupReportInsertCoreMessage} from "@/core/AgencyCore/Message/AgencyGroupReportInsertCoreMessage";
import {AgencyGroupReportUpdateCoreMessage} from "@/core/AgencyCore/Message/AgencyGroupReportUpdateCoreMessage";
import {AgencyGroupReportSearchCoreMessage} from "@/core/AgencyCore/Message/AgencyGroupReportSearchCoreMessage";
import {AgencyGroupReportDeleteCoreMessage} from "@/core/AgencyCore/Message/AgencyGroupReportDeleteCoreMessage";
import {AgencyGroupReportCountCoreMessage} from "@/core/AgencyCore/Message/AgencyGroupReportCountCoreMessage";
export class AgencyGroupReportCoreData {
/**
     * 批量插入
     * @param AgencyGroupReportList Array<AgencyGroupReportInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(AgencyGroupReportList : Array<AgencyGroupReportInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("Agency/AgencyGroupReport/InsertBatch.action", {Data:JSON.stringify(AgencyGroupReportList)});
}
/**
     * 插入
     * @param AgencyGroupReport  AgencyGroupReportInsertCoreMessage
     * @constructor
     */
public static Insert(AgencyGroupReport : AgencyGroupReportInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("Agency/AgencyGroupReport/Insert.action", AgencyGroupReport);
}
/**
     * 修改用户
     * @param AgencyGroupReport AgencyGroupReportUpdateCoreMessage
     * @constructor
     */
public static Update(AgencyGroupReport : AgencyGroupReportUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("Agency/AgencyGroupReport/Update.action", AgencyGroupReport);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : AgencyGroupReportCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("Agency/AgencyGroupReport/Count.action", where);
}
/**
     * 搜索用户
     * @param where AgencyGroupReportSearchCoreMessage
     * @constructor
     */
public static Search(where : AgencyGroupReportSearchCoreMessage) : Promise<Array<AgencyGroupReportCoreModel>>{
return Application.Service.GetContent("Agency/AgencyGroupReport/Search.action", where);
}
/**
     * 删除用户
     * @param where AgencyGroupReportDeleteCoreMessage
     * @constructor
     */
public static Delete(where : AgencyGroupReportDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("Agency/AgencyGroupReport/Delete.action", where);
}
}
