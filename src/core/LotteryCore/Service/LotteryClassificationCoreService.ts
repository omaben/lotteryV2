import {LotteryClassificationCoreModel} from "@/core/LotteryCore/Model/LotteryClassificationCoreModel";
import {LotteryClassificationCoreData} from "@/core/LotteryCore/Data/LotteryClassificationCoreData";
import {LotteryClassificationInsertCoreMessage} from "@/core/LotteryCore/Message/LotteryClassificationInsertCoreMessage";
import {LotteryClassificationUpdateCoreMessage} from "@/core/LotteryCore/Message/LotteryClassificationUpdateCoreMessage";
import {LotteryClassificationSearchCoreMessage} from "@/core/LotteryCore/Message/LotteryClassificationSearchCoreMessage";
import {LotteryClassificationDeleteCoreMessage} from "@/core/LotteryCore/Message/LotteryClassificationDeleteCoreMessage";
import {LotteryClassificationCountCoreMessage} from "@/core/LotteryCore/Message/LotteryClassificationCountCoreMessage";
export class LotteryClassificationCoreService {
/**
     * 批量插入
     * @constructor
	 * @param LotteryClassificationList Array<LotteryClassificationCoreModel>
     */
public static InsertBatch(LotteryClassificationList : Array<LotteryClassificationCoreModel>) : Promise<boolean> {
return LotteryClassificationCoreData.InsertBatch(LotteryClassificationList)
}
/**
     * 插入
     * @param LotteryClassification LotteryClassification : LotteryClassificationInsertCoreMessage
     * @constructor
     */
public static Insert(LotteryClassification : LotteryClassificationInsertCoreMessage) : Promise<boolean> {
return LotteryClassificationCoreData.Insert(LotteryClassification)
}
/**
     * 修改用户
     * @param LotteryClassification LotteryClassificationUpdateCoreMessage
     * @constructor
     */
public static Update(LotteryClassification : LotteryClassificationUpdateCoreMessage) : Promise<number> {
return LotteryClassificationCoreData.Update(LotteryClassification);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : LotteryClassificationCountCoreMessage) : Promise<number>{
return LotteryClassificationCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where LotteryClassificationSearchCoreMessage
     * @constructor
     */
public static Search(where : LotteryClassificationSearchCoreMessage) : Promise<Array<LotteryClassificationCoreModel>>{
return LotteryClassificationCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : LotteryClassificationDeleteCoreMessage) : Promise<number>{
return LotteryClassificationCoreData.Delete(where);
}
}
