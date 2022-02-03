import {ShortVideoCollectCoreModel} from "@/core/ShortVideoCore/Model/ShortVideoCollectCoreModel";
import {ShortVideoCollectCoreData} from "@/core/ShortVideoCore/Data/ShortVideoCollectCoreData";
import {ShortVideoCollectInsertCoreMessage} from "@/core/ShortVideoCore/Message/ShortVideoCollectInsertCoreMessage";
import {ShortVideoCollectUpdateCoreMessage} from "@/core/ShortVideoCore/Message/ShortVideoCollectUpdateCoreMessage";
import {ShortVideoCollectSearchCoreMessage} from "@/core/ShortVideoCore/Message/ShortVideoCollectSearchCoreMessage";
import {ShortVideoCollectDeleteCoreMessage} from "@/core/ShortVideoCore/Message/ShortVideoCollectDeleteCoreMessage";
import {ShortVideoCollectCountCoreMessage} from "@/core/ShortVideoCore/Message/ShortVideoCollectCountCoreMessage";
export class ShortVideoCollectCoreService {
/**
     * 批量插入
     * @constructor
	 * @param ShortVideoCollectList Array<ShortVideoCollectCoreModel>
     */
public static InsertBatch(ShortVideoCollectList : Array<ShortVideoCollectCoreModel>) : Promise<boolean> {
return ShortVideoCollectCoreData.InsertBatch(ShortVideoCollectList)
}
/**
     * 插入
     * @param ShortVideoCollect ShortVideoCollect : ShortVideoCollectInsertCoreMessage
     * @constructor
     */
public static Insert(ShortVideoCollect : ShortVideoCollectInsertCoreMessage) : Promise<boolean> {
return ShortVideoCollectCoreData.Insert(ShortVideoCollect)
}
/**
     * 修改用户
     * @param ShortVideoCollect ShortVideoCollectUpdateCoreMessage
     * @constructor
     */
public static Update(ShortVideoCollect : ShortVideoCollectUpdateCoreMessage) : Promise<number> {
return ShortVideoCollectCoreData.Update(ShortVideoCollect);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : ShortVideoCollectCountCoreMessage) : Promise<number>{
return ShortVideoCollectCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where ShortVideoCollectSearchCoreMessage
     * @constructor
     */
public static Search(where : ShortVideoCollectSearchCoreMessage) : Promise<Array<ShortVideoCollectCoreModel>>{
return ShortVideoCollectCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : ShortVideoCollectDeleteCoreMessage) : Promise<number>{
return ShortVideoCollectCoreData.Delete(where);
}
}
