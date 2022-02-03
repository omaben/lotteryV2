import {UserBetReportCoreModel} from "@/core/UserCore/Model/UserBetReportCoreModel";
import {Application} from "@/lib/Application";
import {UserBetReportInsertCoreMessage} from "@/core/UserCore/Message/UserBetReportInsertCoreMessage";
import {UserBetReportUpdateCoreMessage} from "@/core/UserCore/Message/UserBetReportUpdateCoreMessage";
import {UserBetReportSearchCoreMessage} from "@/core/UserCore/Message/UserBetReportSearchCoreMessage";
import {UserBetReportDeleteCoreMessage} from "@/core/UserCore/Message/UserBetReportDeleteCoreMessage";
import {UserBetReportCountCoreMessage} from "@/core/UserCore/Message/UserBetReportCountCoreMessage";
export class UserBetReportCoreData {
/**
     * 批量插入
     * @param UserBetReportList Array<UserBetReportInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(UserBetReportList : Array<UserBetReportInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("User/UserBetReport/InsertBatch.action", {Data:JSON.stringify(UserBetReportList)});
}
/**
     * 插入
     * @param UserBetReport  UserBetReportInsertCoreMessage
     * @constructor
     */
public static Insert(UserBetReport : UserBetReportInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("User/UserBetReport/Insert.action", UserBetReport);
}
/**
     * 修改用户
     * @param UserBetReport UserBetReportUpdateCoreMessage
     * @constructor
     */
public static Update(UserBetReport : UserBetReportUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("User/UserBetReport/Update.action", UserBetReport);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : UserBetReportCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("User/UserBetReport/Count.action", where);
}
/**
     * 搜索用户
     * @param where UserBetReportSearchCoreMessage
     * @constructor
     */
public static Search(where : UserBetReportSearchCoreMessage) : Promise<Array<UserBetReportCoreModel>>{
return Application.Service.GetContent("User/UserBetReport/Search.action", where);
}
/**
     * 删除用户
     * @param where UserBetReportDeleteCoreMessage
     * @constructor
     */
public static Delete(where : UserBetReportDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("User/UserBetReport/Delete.action", where);
}
}
