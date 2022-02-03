import {UserAgencyInfoCoreModel} from "@/core/UserAgencyCore/Model/UserAgencyInfoCoreModel";
import {UserAgencyInfoCoreData} from "@/core/UserAgencyCore/Data/UserAgencyInfoCoreData";
import {UserAgencyInfoInsertCoreMessage} from "@/core/UserAgencyCore/Message/UserAgencyInfoInsertCoreMessage";
import {UserAgencyInfoUpdateCoreMessage} from "@/core/UserAgencyCore/Message/UserAgencyInfoUpdateCoreMessage";
import {UserAgencyInfoSearchCoreMessage} from "@/core/UserAgencyCore/Message/UserAgencyInfoSearchCoreMessage";
import {UserAgencyInfoDeleteCoreMessage} from "@/core/UserAgencyCore/Message/UserAgencyInfoDeleteCoreMessage";
import {UserAgencyInfoCountCoreMessage} from "@/core/UserAgencyCore/Message/UserAgencyInfoCountCoreMessage";
export class UserAgencyInfoCoreService {
/**
     * 批量插入
     * @constructor
	 * @param UserAgencyInfoList Array<UserAgencyInfoCoreModel>
     */
public static InsertBatch(UserAgencyInfoList : Array<UserAgencyInfoCoreModel>) : Promise<boolean> {
return UserAgencyInfoCoreData.InsertBatch(UserAgencyInfoList)
}
/**
     * 插入
     * @param UserAgencyInfo UserAgencyInfo : UserAgencyInfoInsertCoreMessage
     * @constructor
     */
public static Insert(UserAgencyInfo : UserAgencyInfoInsertCoreMessage) : Promise<boolean> {
return UserAgencyInfoCoreData.Insert(UserAgencyInfo)
}
/**
     * 修改用户
     * @param UserAgencyInfo UserAgencyInfoUpdateCoreMessage
     * @constructor
     */
public static Update(UserAgencyInfo : UserAgencyInfoUpdateCoreMessage) : Promise<number> {
return UserAgencyInfoCoreData.Update(UserAgencyInfo);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : UserAgencyInfoCountCoreMessage) : Promise<number>{
return UserAgencyInfoCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where UserAgencyInfoSearchCoreMessage
     * @constructor
     */
public static Search(where : UserAgencyInfoSearchCoreMessage) : Promise<Array<UserAgencyInfoCoreModel>>{
return UserAgencyInfoCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : UserAgencyInfoDeleteCoreMessage) : Promise<number>{
return UserAgencyInfoCoreData.Delete(where);
}
}
