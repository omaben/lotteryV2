import {LotteryInfoCoreModel} from "@/core/LotteryCore/Model/LotteryInfoCoreModel";
import {LotteryInfoCoreData} from "@/core/LotteryCore/Data/LotteryInfoCoreData";
import {LotteryInfoInsertCoreMessage} from "@/core/LotteryCore/Message/LotteryInfoInsertCoreMessage";
import {LotteryInfoUpdateCoreMessage} from "@/core/LotteryCore/Message/LotteryInfoUpdateCoreMessage";
import {LotteryInfoSearchCoreMessage} from "@/core/LotteryCore/Message/LotteryInfoSearchCoreMessage";
import {LotteryInfoDeleteCoreMessage} from "@/core/LotteryCore/Message/LotteryInfoDeleteCoreMessage";
import {LotteryInfoCountCoreMessage} from "@/core/LotteryCore/Message/LotteryInfoCountCoreMessage";
export class LotteryInfoCoreService {
/**
     * 批量插入
     * @constructor
	 * @param LotteryInfoList Array<LotteryInfoCoreModel>
     */
public static InsertBatch(LotteryInfoList : Array<LotteryInfoCoreModel>) : Promise<boolean> {
return LotteryInfoCoreData.InsertBatch(LotteryInfoList)
}
/**
     * 插入
     * @param LotteryInfo LotteryInfo : LotteryInfoInsertCoreMessage
     * @constructor
     */
public static Insert(LotteryInfo : LotteryInfoInsertCoreMessage) : Promise<boolean> {
return LotteryInfoCoreData.Insert(LotteryInfo)
}
/**
     * 修改用户
     * @param LotteryInfo LotteryInfoUpdateCoreMessage
     * @constructor
     */
public static Update(LotteryInfo : LotteryInfoUpdateCoreMessage) : Promise<number> {
return LotteryInfoCoreData.Update(LotteryInfo);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : LotteryInfoCountCoreMessage) : Promise<number>{
return LotteryInfoCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where LotteryInfoSearchCoreMessage
     * @constructor
     */
public static Search(where : LotteryInfoSearchCoreMessage) : Promise<Array<LotteryInfoCoreModel>>{
return LotteryInfoCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : LotteryInfoDeleteCoreMessage) : Promise<number>{
return LotteryInfoCoreData.Delete(where);
}
}
