import {LotteryPlayingCoreModel} from "@/core/LotteryCore/Model/LotteryPlayingCoreModel";
import {LotteryPlayingCoreData} from "@/core/LotteryCore/Data/LotteryPlayingCoreData";
import {LotteryPlayingInsertCoreMessage} from "@/core/LotteryCore/Message/LotteryPlayingInsertCoreMessage";
import {LotteryPlayingUpdateCoreMessage} from "@/core/LotteryCore/Message/LotteryPlayingUpdateCoreMessage";
import {LotteryPlayingSearchCoreMessage} from "@/core/LotteryCore/Message/LotteryPlayingSearchCoreMessage";
import {LotteryPlayingDeleteCoreMessage} from "@/core/LotteryCore/Message/LotteryPlayingDeleteCoreMessage";
import {LotteryPlayingCountCoreMessage} from "@/core/LotteryCore/Message/LotteryPlayingCountCoreMessage";
export class LotteryPlayingCoreService {
/**
     * 批量插入
     * @constructor
	 * @param LotteryPlayingList Array<LotteryPlayingCoreModel>
     */
public static InsertBatch(LotteryPlayingList : Array<LotteryPlayingCoreModel>) : Promise<boolean> {
return LotteryPlayingCoreData.InsertBatch(LotteryPlayingList)
}
/**
     * 插入
     * @param LotteryPlaying LotteryPlaying : LotteryPlayingInsertCoreMessage
     * @constructor
     */
public static Insert(LotteryPlaying : LotteryPlayingInsertCoreMessage) : Promise<boolean> {
return LotteryPlayingCoreData.Insert(LotteryPlaying)
}
/**
     * 修改用户
     * @param LotteryPlaying LotteryPlayingUpdateCoreMessage
     * @constructor
     */
public static Update(LotteryPlaying : LotteryPlayingUpdateCoreMessage) : Promise<number> {
return LotteryPlayingCoreData.Update(LotteryPlaying);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : LotteryPlayingCountCoreMessage) : Promise<number>{
return LotteryPlayingCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where LotteryPlayingSearchCoreMessage
     * @constructor
     */
public static Search(where : LotteryPlayingSearchCoreMessage) : Promise<Array<LotteryPlayingCoreModel>>{
return LotteryPlayingCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : LotteryPlayingDeleteCoreMessage) : Promise<number>{
return LotteryPlayingCoreData.Delete(where);
}
}
