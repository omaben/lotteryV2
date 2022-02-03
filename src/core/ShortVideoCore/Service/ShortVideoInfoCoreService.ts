import {ShortVideoInfoCoreModel} from "@/core/ShortVideoCore/Model/ShortVideoInfoCoreModel";
import {ShortVideoInfoCoreData} from "@/core/ShortVideoCore/Data/ShortVideoInfoCoreData";
import {ShortVideoInfoInsertCoreMessage} from "@/core/ShortVideoCore/Message/ShortVideoInfoInsertCoreMessage";
import {ShortVideoInfoUpdateCoreMessage} from "@/core/ShortVideoCore/Message/ShortVideoInfoUpdateCoreMessage";
import {ShortVideoInfoSearchCoreMessage} from "@/core/ShortVideoCore/Message/ShortVideoInfoSearchCoreMessage";
import {ShortVideoInfoDeleteCoreMessage} from "@/core/ShortVideoCore/Message/ShortVideoInfoDeleteCoreMessage";
import {ShortVideoInfoCountCoreMessage} from "@/core/ShortVideoCore/Message/ShortVideoInfoCountCoreMessage";
export class ShortVideoInfoCoreService {
/**
     * 批量插入
     * @constructor
	 * @param ShortVideoInfoList Array<ShortVideoInfoCoreModel>
     */
public static InsertBatch(ShortVideoInfoList : Array<ShortVideoInfoCoreModel>) : Promise<boolean> {
return ShortVideoInfoCoreData.InsertBatch(ShortVideoInfoList)
}
/**
     * 插入
     * @param ShortVideoInfo ShortVideoInfo : ShortVideoInfoInsertCoreMessage
     * @constructor
     */
public static Insert(ShortVideoInfo : ShortVideoInfoInsertCoreMessage) : Promise<boolean> {
return ShortVideoInfoCoreData.Insert(ShortVideoInfo)
}
/**
     * 修改用户
     * @param ShortVideoInfo ShortVideoInfoUpdateCoreMessage
     * @constructor
     */
public static Update(ShortVideoInfo : ShortVideoInfoUpdateCoreMessage) : Promise<number> {
return ShortVideoInfoCoreData.Update(ShortVideoInfo);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : ShortVideoInfoCountCoreMessage) : Promise<number>{
return ShortVideoInfoCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where ShortVideoInfoSearchCoreMessage
     * @constructor
     */
public static Search(where : ShortVideoInfoSearchCoreMessage) : Promise<Array<ShortVideoInfoCoreModel>>{
return ShortVideoInfoCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : ShortVideoInfoDeleteCoreMessage) : Promise<number>{
return ShortVideoInfoCoreData.Delete(where);
}
}
