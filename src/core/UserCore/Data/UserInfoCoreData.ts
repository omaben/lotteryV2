import {UserInfoCoreModel} from "@/core/UserCore/Model/UserInfoCoreModel";
import {Application} from "@/lib/Application";
import {UserInfoInsertCoreMessage} from "@/core/UserCore/Message/UserInfoInsertCoreMessage";
import {UserInfoUpdateCoreMessage} from "@/core/UserCore/Message/UserInfoUpdateCoreMessage";
import {UserInfoSearchCoreMessage} from "@/core/UserCore/Message/UserInfoSearchCoreMessage";
import {UserInfoDeleteCoreMessage} from "@/core/UserCore/Message/UserInfoDeleteCoreMessage";
import {UserInfoCountCoreMessage} from "@/core/UserCore/Message/UserInfoCountCoreMessage";
export class UserInfoCoreData {
/**
     * 批量插入
     * @param UserInfoList Array<UserInfoInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(UserInfoList : Array<UserInfoInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("User/UserInfo/InsertBatch.action", {Data:JSON.stringify(UserInfoList)});
}
/**
     * 插入
     * @param UserInfo  UserInfoInsertCoreMessage
     * @constructor
     */
public static Insert(UserInfo : UserInfoInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("User/UserInfo/Insert.action", UserInfo);
}
/**
     * 修改用户
     * @param UserInfo UserInfoUpdateCoreMessage
     * @constructor
     */
public static Update(UserInfo : UserInfoUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("User/UserInfo/Update.action", UserInfo);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : UserInfoCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("User/UserInfo/Count.action", where);
}
/**
     * 搜索用户
     * @param where UserInfoSearchCoreMessage
     * @constructor
     */
public static Search(where : UserInfoSearchCoreMessage) : Promise<Array<UserInfoCoreModel>>{
return Application.Service.GetContent("User/UserInfo/Search.action", where);
}
/**
     * 删除用户
     * @param where UserInfoDeleteCoreMessage
     * @constructor
     */
public static Delete(where : UserInfoDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("User/UserInfo/Delete.action", where);
}
}
