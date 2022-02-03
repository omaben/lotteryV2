import {UserPermissionCoreModel} from "@/core/UserCore/Model/UserPermissionCoreModel";
import {Application} from "@/lib/Application";
import {UserPermissionInsertCoreMessage} from "@/core/UserCore/Message/UserPermissionInsertCoreMessage";
import {UserPermissionUpdateCoreMessage} from "@/core/UserCore/Message/UserPermissionUpdateCoreMessage";
import {UserPermissionSearchCoreMessage} from "@/core/UserCore/Message/UserPermissionSearchCoreMessage";
import {UserPermissionDeleteCoreMessage} from "@/core/UserCore/Message/UserPermissionDeleteCoreMessage";
import {UserPermissionCountCoreMessage} from "@/core/UserCore/Message/UserPermissionCountCoreMessage";
export class UserPermissionCoreData {
/**
     * 批量插入
     * @param UserPermissionList Array<UserPermissionInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(UserPermissionList : Array<UserPermissionInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("User/UserPermission/InsertBatch.action", {Data:JSON.stringify(UserPermissionList)});
}
/**
     * 插入
     * @param UserPermission  UserPermissionInsertCoreMessage
     * @constructor
     */
public static Insert(UserPermission : UserPermissionInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("User/UserPermission/Insert.action", UserPermission);
}
/**
     * 修改用户
     * @param UserPermission UserPermissionUpdateCoreMessage
     * @constructor
     */
public static Update(UserPermission : UserPermissionUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("User/UserPermission/Update.action", UserPermission);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : UserPermissionCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("User/UserPermission/Count.action", where);
}
/**
     * 搜索用户
     * @param where UserPermissionSearchCoreMessage
     * @constructor
     */
public static Search(where : UserPermissionSearchCoreMessage) : Promise<Array<UserPermissionCoreModel>>{
return Application.Service.GetContent("User/UserPermission/Search.action", where);
}
/**
     * 删除用户
     * @param where UserPermissionDeleteCoreMessage
     * @constructor
     */
public static Delete(where : UserPermissionDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("User/UserPermission/Delete.action", where);
}
}
