import {UserAgencyInfoCoreModel} from "@/core/UserAgencyCore/Model/UserAgencyInfoCoreModel";
import {Application} from "@/lib/Application";
import {UserAgencyInfoInsertCoreMessage} from "@/core/UserAgencyCore/Message/UserAgencyInfoInsertCoreMessage";
import {UserAgencyInfoUpdateCoreMessage} from "@/core/UserAgencyCore/Message/UserAgencyInfoUpdateCoreMessage";
import {UserAgencyInfoSearchCoreMessage} from "@/core/UserAgencyCore/Message/UserAgencyInfoSearchCoreMessage";
import {UserAgencyInfoDeleteCoreMessage} from "@/core/UserAgencyCore/Message/UserAgencyInfoDeleteCoreMessage";
import {UserAgencyInfoCountCoreMessage} from "@/core/UserAgencyCore/Message/UserAgencyInfoCountCoreMessage";
export class UserAgencyInfoCoreData {
/**
     * 批量插入
     * @param UserAgencyInfoList Array<UserAgencyInfoInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(UserAgencyInfoList : Array<UserAgencyInfoInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("UserAgency/UserAgencyInfo/InsertBatch.action", {Data:JSON.stringify(UserAgencyInfoList)});
}
/**
     * 插入
     * @param UserAgencyInfo  UserAgencyInfoInsertCoreMessage
     * @constructor
     */
public static Insert(UserAgencyInfo : UserAgencyInfoInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("UserAgency/UserAgencyInfo/Insert.action", UserAgencyInfo);
}
/**
     * 修改用户
     * @param UserAgencyInfo UserAgencyInfoUpdateCoreMessage
     * @constructor
     */
public static Update(UserAgencyInfo : UserAgencyInfoUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("UserAgency/UserAgencyInfo/Update.action", UserAgencyInfo);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : UserAgencyInfoCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("UserAgency/UserAgencyInfo/Count.action", where);
}
/**
     * 搜索用户
     * @param where UserAgencyInfoSearchCoreMessage
     * @constructor
     */
public static Search(where : UserAgencyInfoSearchCoreMessage) : Promise<Array<UserAgencyInfoCoreModel>>{
return Application.Service.GetContent("UserAgency/UserAgencyInfo/Search.action", where);
}
/**
     * 删除用户
     * @param where UserAgencyInfoDeleteCoreMessage
     * @constructor
     */
public static Delete(where : UserAgencyInfoDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("UserAgency/UserAgencyInfo/Delete.action", where);
}
}
