import {AnchorCollectCoreModel} from "@/core/AnchorCore/Model/AnchorCollectCoreModel";
import {AnchorCollectCoreData} from "@/core/AnchorCore/Data/AnchorCollectCoreData";
import {AnchorCollectInsertCoreMessage} from "@/core/AnchorCore/Message/AnchorCollectInsertCoreMessage";
import {AnchorCollectUpdateCoreMessage} from "@/core/AnchorCore/Message/AnchorCollectUpdateCoreMessage";
import {AnchorCollectSearchCoreMessage} from "@/core/AnchorCore/Message/AnchorCollectSearchCoreMessage";
import {AnchorCollectDeleteCoreMessage} from "@/core/AnchorCore/Message/AnchorCollectDeleteCoreMessage";
import {AnchorCollectCountCoreMessage} from "@/core/AnchorCore/Message/AnchorCollectCountCoreMessage";
export class AnchorCollectCoreService {
/**
     * 批量插入
     * @constructor
	 * @param AnchorCollectList Array<AnchorCollectCoreModel>
     */
public static InsertBatch(AnchorCollectList : Array<AnchorCollectCoreModel>) : Promise<boolean> {
return AnchorCollectCoreData.InsertBatch(AnchorCollectList)
}
/**
     * 插入
     * @param AnchorCollect AnchorCollect : AnchorCollectInsertCoreMessage
     * @constructor
     */
public static Insert(AnchorCollect : AnchorCollectInsertCoreMessage) : Promise<boolean> {
return AnchorCollectCoreData.Insert(AnchorCollect)
}
/**
     * 修改用户
     * @param AnchorCollect AnchorCollectUpdateCoreMessage
     * @constructor
     */
public static Update(AnchorCollect : AnchorCollectUpdateCoreMessage) : Promise<number> {
return AnchorCollectCoreData.Update(AnchorCollect);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : AnchorCollectCountCoreMessage) : Promise<number>{
return AnchorCollectCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where AnchorCollectSearchCoreMessage
     * @constructor
     */
public static Search(where : AnchorCollectSearchCoreMessage) : Promise<Array<AnchorCollectCoreModel>>{
return AnchorCollectCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : AnchorCollectDeleteCoreMessage) : Promise<number>{
return AnchorCollectCoreData.Delete(where);
}
}
