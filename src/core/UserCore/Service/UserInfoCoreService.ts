import {UserInfoCoreModel} from "@/core/UserCore/Model/UserInfoCoreModel";
import {UserInfoCoreData} from "@/core/UserCore/Data/UserInfoCoreData";
import {UserInfoInsertCoreMessage} from "@/core/UserCore/Message/UserInfoInsertCoreMessage";
import {UserInfoUpdateCoreMessage} from "@/core/UserCore/Message/UserInfoUpdateCoreMessage";
import {UserInfoSearchCoreMessage} from "@/core/UserCore/Message/UserInfoSearchCoreMessage";
import {UserInfoDeleteCoreMessage} from "@/core/UserCore/Message/UserInfoDeleteCoreMessage";
import {UserInfoCountCoreMessage} from "@/core/UserCore/Message/UserInfoCountCoreMessage";
export class UserInfoCoreService {
/**
     * 批量插入
     * @constructor
	 * @param UserInfoList Array<UserInfoCoreModel>
     */
public static InsertBatch(UserInfoList : Array<UserInfoCoreModel>) : Promise<boolean> {
return UserInfoCoreData.InsertBatch(UserInfoList)
}
/**
     * 插入
     * @param UserInfo UserInfo : UserInfoInsertCoreMessage
     * @constructor
     */
public static Insert(UserInfo : UserInfoInsertCoreMessage) : Promise<boolean> {
return UserInfoCoreData.Insert(UserInfo)
}
/**
     * 修改用户
     * @param UserInfo UserInfoUpdateCoreMessage
     * @constructor
     */
public static Update(UserInfo : UserInfoUpdateCoreMessage) : Promise<number> {
return UserInfoCoreData.Update(UserInfo);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : UserInfoCountCoreMessage) : Promise<number>{
return UserInfoCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where UserInfoSearchCoreMessage
     * @constructor
     */
public static Search(where : UserInfoSearchCoreMessage) : Promise<Array<UserInfoCoreModel>>{
return UserInfoCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : UserInfoDeleteCoreMessage) : Promise<number>{
return UserInfoCoreData.Delete(where);
}
}
