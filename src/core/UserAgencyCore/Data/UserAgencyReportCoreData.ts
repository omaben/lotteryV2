import {UserAgencyReportCoreModel} from "@/core/UserAgencyCore/Model/UserAgencyReportCoreModel";
import {Application} from "@/lib/Application";
import {UserAgencyReportInsertCoreMessage} from "@/core/UserAgencyCore/Message/UserAgencyReportInsertCoreMessage";
import {UserAgencyReportUpdateCoreMessage} from "@/core/UserAgencyCore/Message/UserAgencyReportUpdateCoreMessage";
import {UserAgencyReportSearchCoreMessage} from "@/core/UserAgencyCore/Message/UserAgencyReportSearchCoreMessage";
import {UserAgencyReportDeleteCoreMessage} from "@/core/UserAgencyCore/Message/UserAgencyReportDeleteCoreMessage";
import {UserAgencyReportCountCoreMessage} from "@/core/UserAgencyCore/Message/UserAgencyReportCountCoreMessage";
export class UserAgencyReportCoreData {
/**
     * 批量插入
     * @param UserAgencyReportList Array<UserAgencyReportInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(UserAgencyReportList : Array<UserAgencyReportInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("UserAgency/UserAgencyReport/InsertBatch.action", {Data:JSON.stringify(UserAgencyReportList)});
}
/**
     * 插入
     * @param UserAgencyReport  UserAgencyReportInsertCoreMessage
     * @constructor
     */
public static Insert(UserAgencyReport : UserAgencyReportInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("UserAgency/UserAgencyReport/Insert.action", UserAgencyReport);
}
/**
     * 修改用户
     * @param UserAgencyReport UserAgencyReportUpdateCoreMessage
     * @constructor
     */
public static Update(UserAgencyReport : UserAgencyReportUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("UserAgency/UserAgencyReport/Update.action", UserAgencyReport);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : UserAgencyReportCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("UserAgency/UserAgencyReport/Count.action", where);
}
/**
     * 搜索用户
     * @param where UserAgencyReportSearchCoreMessage
     * @constructor
     */
public static Search(where : UserAgencyReportSearchCoreMessage) : Promise<Array<UserAgencyReportCoreModel>>{
return Application.Service.GetContent("UserAgency/UserAgencyReport/Search.action", where);
}
/**
     * 删除用户
     * @param where UserAgencyReportDeleteCoreMessage
     * @constructor
     */
public static Delete(where : UserAgencyReportDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("UserAgency/UserAgencyReport/Delete.action", where);
}
}
