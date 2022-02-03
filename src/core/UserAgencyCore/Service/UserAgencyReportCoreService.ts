import {UserAgencyReportCoreModel} from "@/core/UserAgencyCore/Model/UserAgencyReportCoreModel";
import {UserAgencyReportCoreData} from "@/core/UserAgencyCore/Data/UserAgencyReportCoreData";
import {UserAgencyReportInsertCoreMessage} from "@/core/UserAgencyCore/Message/UserAgencyReportInsertCoreMessage";
import {UserAgencyReportUpdateCoreMessage} from "@/core/UserAgencyCore/Message/UserAgencyReportUpdateCoreMessage";
import {UserAgencyReportSearchCoreMessage} from "@/core/UserAgencyCore/Message/UserAgencyReportSearchCoreMessage";
import {UserAgencyReportDeleteCoreMessage} from "@/core/UserAgencyCore/Message/UserAgencyReportDeleteCoreMessage";
import {UserAgencyReportCountCoreMessage} from "@/core/UserAgencyCore/Message/UserAgencyReportCountCoreMessage";
export class UserAgencyReportCoreService {
/**
     * 批量插入
     * @constructor
	 * @param UserAgencyReportList Array<UserAgencyReportCoreModel>
     */
public static InsertBatch(UserAgencyReportList : Array<UserAgencyReportCoreModel>) : Promise<boolean> {
return UserAgencyReportCoreData.InsertBatch(UserAgencyReportList)
}
/**
     * 插入
     * @param UserAgencyReport UserAgencyReport : UserAgencyReportInsertCoreMessage
     * @constructor
     */
public static Insert(UserAgencyReport : UserAgencyReportInsertCoreMessage) : Promise<boolean> {
return UserAgencyReportCoreData.Insert(UserAgencyReport)
}
/**
     * 修改用户
     * @param UserAgencyReport UserAgencyReportUpdateCoreMessage
     * @constructor
     */
public static Update(UserAgencyReport : UserAgencyReportUpdateCoreMessage) : Promise<number> {
return UserAgencyReportCoreData.Update(UserAgencyReport);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : UserAgencyReportCountCoreMessage) : Promise<number>{
return UserAgencyReportCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where UserAgencyReportSearchCoreMessage
     * @constructor
     */
public static Search(where : UserAgencyReportSearchCoreMessage) : Promise<Array<UserAgencyReportCoreModel>>{
return UserAgencyReportCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : UserAgencyReportDeleteCoreMessage) : Promise<number>{
return UserAgencyReportCoreData.Delete(where);
}
}
