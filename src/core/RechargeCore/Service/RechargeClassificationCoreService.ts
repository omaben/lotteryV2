import {RechargeClassificationCoreModel} from "@/core/RechargeCore/Model/RechargeClassificationCoreModel";
import {RechargeClassificationCoreData} from "@/core/RechargeCore/Data/RechargeClassificationCoreData";
import {RechargeClassificationInsertCoreMessage} from "@/core/RechargeCore/Message/RechargeClassificationInsertCoreMessage";
import {RechargeClassificationUpdateCoreMessage} from "@/core/RechargeCore/Message/RechargeClassificationUpdateCoreMessage";
import {RechargeClassificationSearchCoreMessage} from "@/core/RechargeCore/Message/RechargeClassificationSearchCoreMessage";
import {RechargeClassificationDeleteCoreMessage} from "@/core/RechargeCore/Message/RechargeClassificationDeleteCoreMessage";
import {RechargeClassificationCountCoreMessage} from "@/core/RechargeCore/Message/RechargeClassificationCountCoreMessage";
export class RechargeClassificationCoreService {
/**
     * 批量插入
     * @constructor
	 * @param RechargeClassificationList Array<RechargeClassificationCoreModel>
     */
public static InsertBatch(RechargeClassificationList : Array<RechargeClassificationCoreModel>) : Promise<boolean> {
return RechargeClassificationCoreData.InsertBatch(RechargeClassificationList)
}
/**
     * 插入
     * @param RechargeClassification RechargeClassification : RechargeClassificationInsertCoreMessage
     * @constructor
     */
public static Insert(RechargeClassification : RechargeClassificationInsertCoreMessage) : Promise<boolean> {
return RechargeClassificationCoreData.Insert(RechargeClassification)
}
/**
     * 修改用户
     * @param RechargeClassification RechargeClassificationUpdateCoreMessage
     * @constructor
     */
public static Update(RechargeClassification : RechargeClassificationUpdateCoreMessage) : Promise<number> {
return RechargeClassificationCoreData.Update(RechargeClassification);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : RechargeClassificationCountCoreMessage) : Promise<number>{
return RechargeClassificationCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where RechargeClassificationSearchCoreMessage
     * @constructor
     */
public static Search(where : RechargeClassificationSearchCoreMessage) : Promise<Array<RechargeClassificationCoreModel>>{
return RechargeClassificationCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : RechargeClassificationDeleteCoreMessage) : Promise<number>{
return RechargeClassificationCoreData.Delete(where);
}
}
