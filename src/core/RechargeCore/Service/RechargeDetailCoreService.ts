import {RechargeDetailCoreModel} from "@/core/RechargeCore/Model/RechargeDetailCoreModel";
import {RechargeDetailCoreData} from "@/core/RechargeCore/Data/RechargeDetailCoreData";
import {RechargeDetailInsertCoreMessage} from "@/core/RechargeCore/Message/RechargeDetailInsertCoreMessage";
import {RechargeDetailUpdateCoreMessage} from "@/core/RechargeCore/Message/RechargeDetailUpdateCoreMessage";
import {RechargeDetailSearchCoreMessage} from "@/core/RechargeCore/Message/RechargeDetailSearchCoreMessage";
import {RechargeDetailDeleteCoreMessage} from "@/core/RechargeCore/Message/RechargeDetailDeleteCoreMessage";
import {RechargeDetailCountCoreMessage} from "@/core/RechargeCore/Message/RechargeDetailCountCoreMessage";
export class RechargeDetailCoreService {
/**
     * 批量插入
     * @constructor
	 * @param RechargeDetailList Array<RechargeDetailCoreModel>
     */
public static InsertBatch(RechargeDetailList : Array<RechargeDetailCoreModel>) : Promise<boolean> {
return RechargeDetailCoreData.InsertBatch(RechargeDetailList)
}
/**
     * 插入
     * @param RechargeDetail RechargeDetail : RechargeDetailInsertCoreMessage
     * @constructor
     */
public static Insert(RechargeDetail : RechargeDetailInsertCoreMessage) : Promise<boolean> {
return RechargeDetailCoreData.Insert(RechargeDetail)
}
/**
     * 修改用户
     * @param RechargeDetail RechargeDetailUpdateCoreMessage
     * @constructor
     */
public static Update(RechargeDetail : RechargeDetailUpdateCoreMessage) : Promise<number> {
return RechargeDetailCoreData.Update(RechargeDetail);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : RechargeDetailCountCoreMessage) : Promise<number>{
return RechargeDetailCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where RechargeDetailSearchCoreMessage
     * @constructor
     */
public static Search(where : RechargeDetailSearchCoreMessage) : Promise<Array<RechargeDetailCoreModel>>{
return RechargeDetailCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : RechargeDetailDeleteCoreMessage) : Promise<number>{
return RechargeDetailCoreData.Delete(where);
}
}
