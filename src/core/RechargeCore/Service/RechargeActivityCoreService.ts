import {RechargeActivityCoreModel} from "@/core/RechargeCore/Model/RechargeActivityCoreModel";
import {RechargeActivityCoreData} from "@/core/RechargeCore/Data/RechargeActivityCoreData";
import {RechargeActivityInsertCoreMessage} from "@/core/RechargeCore/Message/RechargeActivityInsertCoreMessage";
import {RechargeActivityUpdateCoreMessage} from "@/core/RechargeCore/Message/RechargeActivityUpdateCoreMessage";
import {RechargeActivitySearchCoreMessage} from "@/core/RechargeCore/Message/RechargeActivitySearchCoreMessage";
import {RechargeActivityDeleteCoreMessage} from "@/core/RechargeCore/Message/RechargeActivityDeleteCoreMessage";
import {RechargeActivityCountCoreMessage} from "@/core/RechargeCore/Message/RechargeActivityCountCoreMessage";
export class RechargeActivityCoreService {
/**
     * 批量插入
     * @constructor
	 * @param RechargeActivityList Array<RechargeActivityCoreModel>
     */
public static InsertBatch(RechargeActivityList : Array<RechargeActivityCoreModel>) : Promise<boolean> {
return RechargeActivityCoreData.InsertBatch(RechargeActivityList)
}
/**
     * 插入
     * @param RechargeActivity RechargeActivity : RechargeActivityInsertCoreMessage
     * @constructor
     */
public static Insert(RechargeActivity : RechargeActivityInsertCoreMessage) : Promise<boolean> {
return RechargeActivityCoreData.Insert(RechargeActivity)
}
/**
     * 修改用户
     * @param RechargeActivity RechargeActivityUpdateCoreMessage
     * @constructor
     */
public static Update(RechargeActivity : RechargeActivityUpdateCoreMessage) : Promise<number> {
return RechargeActivityCoreData.Update(RechargeActivity);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : RechargeActivityCountCoreMessage) : Promise<number>{
return RechargeActivityCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where RechargeActivitySearchCoreMessage
     * @constructor
     */
public static Search(where : RechargeActivitySearchCoreMessage) : Promise<Array<RechargeActivityCoreModel>>{
return RechargeActivityCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : RechargeActivityDeleteCoreMessage) : Promise<number>{
return RechargeActivityCoreData.Delete(where);
}
}
