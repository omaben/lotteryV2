import {WithdrawClassificationCoreModel} from "@/core/WithdrawCore/Model/WithdrawClassificationCoreModel";
import {WithdrawClassificationCoreData} from "@/core/WithdrawCore/Data/WithdrawClassificationCoreData";
import {WithdrawClassificationInsertCoreMessage} from "@/core/WithdrawCore/Message/WithdrawClassificationInsertCoreMessage";
import {WithdrawClassificationUpdateCoreMessage} from "@/core/WithdrawCore/Message/WithdrawClassificationUpdateCoreMessage";
import {WithdrawClassificationSearchCoreMessage} from "@/core/WithdrawCore/Message/WithdrawClassificationSearchCoreMessage";
import {WithdrawClassificationDeleteCoreMessage} from "@/core/WithdrawCore/Message/WithdrawClassificationDeleteCoreMessage";
import {WithdrawClassificationCountCoreMessage} from "@/core/WithdrawCore/Message/WithdrawClassificationCountCoreMessage";
export class WithdrawClassificationCoreService {
/**
     * 批量插入
     * @constructor
	 * @param WithdrawClassificationList Array<WithdrawClassificationCoreModel>
     */
public static InsertBatch(WithdrawClassificationList : Array<WithdrawClassificationCoreModel>) : Promise<boolean> {
return WithdrawClassificationCoreData.InsertBatch(WithdrawClassificationList)
}
/**
     * 插入
     * @param WithdrawClassification WithdrawClassification : WithdrawClassificationInsertCoreMessage
     * @constructor
     */
public static Insert(WithdrawClassification : WithdrawClassificationInsertCoreMessage) : Promise<boolean> {
return WithdrawClassificationCoreData.Insert(WithdrawClassification)
}
/**
     * 修改用户
     * @param WithdrawClassification WithdrawClassificationUpdateCoreMessage
     * @constructor
     */
public static Update(WithdrawClassification : WithdrawClassificationUpdateCoreMessage) : Promise<number> {
return WithdrawClassificationCoreData.Update(WithdrawClassification);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : WithdrawClassificationCountCoreMessage) : Promise<number>{
return WithdrawClassificationCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where WithdrawClassificationSearchCoreMessage
     * @constructor
     */
public static Search(where : WithdrawClassificationSearchCoreMessage) : Promise<Array<WithdrawClassificationCoreModel>>{
return WithdrawClassificationCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : WithdrawClassificationDeleteCoreMessage) : Promise<number>{
return WithdrawClassificationCoreData.Delete(where);
}
}
