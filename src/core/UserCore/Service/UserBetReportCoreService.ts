import {UserBetReportCoreModel} from "@/core/UserCore/Model/UserBetReportCoreModel";
import {UserBetReportCoreData} from "@/core/UserCore/Data/UserBetReportCoreData";
import {UserBetReportInsertCoreMessage} from "@/core/UserCore/Message/UserBetReportInsertCoreMessage";
import {UserBetReportUpdateCoreMessage} from "@/core/UserCore/Message/UserBetReportUpdateCoreMessage";
import {UserBetReportSearchCoreMessage} from "@/core/UserCore/Message/UserBetReportSearchCoreMessage";
import {UserBetReportDeleteCoreMessage} from "@/core/UserCore/Message/UserBetReportDeleteCoreMessage";
import {UserBetReportCountCoreMessage} from "@/core/UserCore/Message/UserBetReportCountCoreMessage";
export class UserBetReportCoreService {
/**
     * 批量插入
     * @constructor
	 * @param UserBetReportList Array<UserBetReportCoreModel>
     */
public static InsertBatch(UserBetReportList : Array<UserBetReportCoreModel>) : Promise<boolean> {
return UserBetReportCoreData.InsertBatch(UserBetReportList)
}
/**
     * 插入
     * @param UserBetReport UserBetReport : UserBetReportInsertCoreMessage
     * @constructor
     */
public static Insert(UserBetReport : UserBetReportInsertCoreMessage) : Promise<boolean> {
return UserBetReportCoreData.Insert(UserBetReport)
}
/**
     * 修改用户
     * @param UserBetReport UserBetReportUpdateCoreMessage
     * @constructor
     */
public static Update(UserBetReport : UserBetReportUpdateCoreMessage) : Promise<number> {
return UserBetReportCoreData.Update(UserBetReport);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : UserBetReportCountCoreMessage) : Promise<number>{
return UserBetReportCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where UserBetReportSearchCoreMessage
     * @constructor
     */
public static Search(where : UserBetReportSearchCoreMessage) : Promise<Array<UserBetReportCoreModel>>{
return UserBetReportCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : UserBetReportDeleteCoreMessage) : Promise<number>{
return UserBetReportCoreData.Delete(where);
}
}
