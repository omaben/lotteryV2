import {AgencyReportCoreModel} from "@/core/AgencyCore/Model/AgencyReportCoreModel";
import {Application} from "@/lib/Application";
import {AgencyReportInsertCoreMessage} from "@/core/AgencyCore/Message/AgencyReportInsertCoreMessage";
import {AgencyReportUpdateCoreMessage} from "@/core/AgencyCore/Message/AgencyReportUpdateCoreMessage";
import {AgencyReportSearchCoreMessage} from "@/core/AgencyCore/Message/AgencyReportSearchCoreMessage";
import {AgencyReportDeleteCoreMessage} from "@/core/AgencyCore/Message/AgencyReportDeleteCoreMessage";
import {AgencyReportCountCoreMessage} from "@/core/AgencyCore/Message/AgencyReportCountCoreMessage";
export class AgencyReportCoreData {
/**
     * 批量插入
     * @param AgencyReportList Array<AgencyReportInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(AgencyReportList : Array<AgencyReportInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("Agency/AgencyReport/InsertBatch.action", {Data:JSON.stringify(AgencyReportList)});
}
/**
     * 插入
     * @param AgencyReport  AgencyReportInsertCoreMessage
     * @constructor
     */
public static Insert(AgencyReport : AgencyReportInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("Agency/AgencyReport/Insert.action", AgencyReport);
}
/**
     * 修改用户
     * @param AgencyReport AgencyReportUpdateCoreMessage
     * @constructor
     */
public static Update(AgencyReport : AgencyReportUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("Agency/AgencyReport/Update.action", AgencyReport);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : AgencyReportCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("Agency/AgencyReport/Count.action", where);
}
/**
     * 搜索用户
     * @param where AgencyReportSearchCoreMessage
     * @constructor
     */
public static Search(where : AgencyReportSearchCoreMessage) : Promise<Array<AgencyReportCoreModel>>{
return Application.Service.GetContent("Agency/AgencyReport/Search.action", where);
}
/**
     * 删除用户
     * @param where AgencyReportDeleteCoreMessage
     * @constructor
     */
public static Delete(where : AgencyReportDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("Agency/AgencyReport/Delete.action", where);
}
}
