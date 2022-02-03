import {LotteryDrawTimeCoreModel} from "@/core/LotteryCore/Model/LotteryDrawTimeCoreModel";
import {LotteryDrawTimeCoreData} from "@/core/LotteryCore/Data/LotteryDrawTimeCoreData";
import {LotteryDrawTimeInsertCoreMessage} from "@/core/LotteryCore/Message/LotteryDrawTimeInsertCoreMessage";
import {LotteryDrawTimeUpdateCoreMessage} from "@/core/LotteryCore/Message/LotteryDrawTimeUpdateCoreMessage";
import {LotteryDrawTimeSearchCoreMessage} from "@/core/LotteryCore/Message/LotteryDrawTimeSearchCoreMessage";
import {LotteryDrawTimeDeleteCoreMessage} from "@/core/LotteryCore/Message/LotteryDrawTimeDeleteCoreMessage";
import {LotteryDrawTimeCountCoreMessage} from "@/core/LotteryCore/Message/LotteryDrawTimeCountCoreMessage";
export class LotteryDrawTimeCoreService {
/**
     * 批量插入
     * @constructor
	 * @param LotteryDrawTimeList Array<LotteryDrawTimeCoreModel>
     */
public static InsertBatch(LotteryDrawTimeList : Array<LotteryDrawTimeCoreModel>) : Promise<boolean> {
return LotteryDrawTimeCoreData.InsertBatch(LotteryDrawTimeList)
}
/**
     * 插入
     * @param LotteryDrawTime LotteryDrawTime : LotteryDrawTimeInsertCoreMessage
     * @constructor
     */
public static Insert(LotteryDrawTime : LotteryDrawTimeInsertCoreMessage) : Promise<boolean> {
return LotteryDrawTimeCoreData.Insert(LotteryDrawTime)
}
/**
     * 修改用户
     * @param LotteryDrawTime LotteryDrawTimeUpdateCoreMessage
     * @constructor
     */
public static Update(LotteryDrawTime : LotteryDrawTimeUpdateCoreMessage) : Promise<number> {
return LotteryDrawTimeCoreData.Update(LotteryDrawTime);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : LotteryDrawTimeCountCoreMessage) : Promise<number>{
return LotteryDrawTimeCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where LotteryDrawTimeSearchCoreMessage
     * @constructor
     */
public static Search(where : LotteryDrawTimeSearchCoreMessage) : Promise<Array<LotteryDrawTimeCoreModel>>{
return LotteryDrawTimeCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : LotteryDrawTimeDeleteCoreMessage) : Promise<number>{
return LotteryDrawTimeCoreData.Delete(where);
}
}
