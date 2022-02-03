import {UserPermissionCoreModel} from "@/core/UserCore/Model/UserPermissionCoreModel";
import {UserPermissionCoreData} from "@/core/UserCore/Data/UserPermissionCoreData";
import {UserPermissionInsertCoreMessage} from "@/core/UserCore/Message/UserPermissionInsertCoreMessage";
import {UserPermissionUpdateCoreMessage} from "@/core/UserCore/Message/UserPermissionUpdateCoreMessage";
import {UserPermissionSearchCoreMessage} from "@/core/UserCore/Message/UserPermissionSearchCoreMessage";
import {UserPermissionDeleteCoreMessage} from "@/core/UserCore/Message/UserPermissionDeleteCoreMessage";
import {UserPermissionCountCoreMessage} from "@/core/UserCore/Message/UserPermissionCountCoreMessage";
export class UserPermissionCoreService {
/**
     * 批量插入
     * @constructor
	 * @param UserPermissionList Array<UserPermissionCoreModel>
     */
public static InsertBatch(UserPermissionList : Array<UserPermissionCoreModel>) : Promise<boolean> {
return UserPermissionCoreData.InsertBatch(UserPermissionList)
}
/**
     * 插入
     * @param UserPermission UserPermission : UserPermissionInsertCoreMessage
     * @constructor
     */
public static Insert(UserPermission : UserPermissionInsertCoreMessage) : Promise<boolean> {
return UserPermissionCoreData.Insert(UserPermission)
}
/**
     * 修改用户
     * @param UserPermission UserPermissionUpdateCoreMessage
     * @constructor
     */
public static Update(UserPermission : UserPermissionUpdateCoreMessage) : Promise<number> {
return UserPermissionCoreData.Update(UserPermission);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : UserPermissionCountCoreMessage) : Promise<number>{
return UserPermissionCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where UserPermissionSearchCoreMessage
     * @constructor
     */
public static Search(where : UserPermissionSearchCoreMessage) : Promise<Array<UserPermissionCoreModel>>{
return UserPermissionCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : UserPermissionDeleteCoreMessage) : Promise<number>{
return UserPermissionCoreData.Delete(where);
}
}
