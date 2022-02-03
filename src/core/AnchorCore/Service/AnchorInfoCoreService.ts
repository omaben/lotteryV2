import {AnchorInfoCoreModel} from "@/core/AnchorCore/Model/AnchorInfoCoreModel";
import {AnchorInfoCoreData} from "@/core/AnchorCore/Data/AnchorInfoCoreData";
import {AnchorInfoInsertCoreMessage} from "@/core/AnchorCore/Message/AnchorInfoInsertCoreMessage";
import {AnchorInfoUpdateCoreMessage} from "@/core/AnchorCore/Message/AnchorInfoUpdateCoreMessage";
import {AnchorInfoSearchCoreMessage} from "@/core/AnchorCore/Message/AnchorInfoSearchCoreMessage";
import {AnchorInfoDeleteCoreMessage} from "@/core/AnchorCore/Message/AnchorInfoDeleteCoreMessage";
import {AnchorInfoCountCoreMessage} from "@/core/AnchorCore/Message/AnchorInfoCountCoreMessage";
export class AnchorInfoCoreService {
/**
     * 批量插入
     * @constructor
	 * @param AnchorInfoList Array<AnchorInfoCoreModel>
     */
public static InsertBatch(AnchorInfoList : Array<AnchorInfoCoreModel>) : Promise<boolean> {
return AnchorInfoCoreData.InsertBatch(AnchorInfoList)
}
/**
     * 插入
     * @param AnchorInfo AnchorInfo : AnchorInfoInsertCoreMessage
     * @constructor
     */
public static Insert(AnchorInfo : AnchorInfoInsertCoreMessage) : Promise<boolean> {
return AnchorInfoCoreData.Insert(AnchorInfo)
}
/**
     * 修改用户
     * @param AnchorInfo AnchorInfoUpdateCoreMessage
     * @constructor
     */
public static Update(AnchorInfo : AnchorInfoUpdateCoreMessage) : Promise<number> {
return AnchorInfoCoreData.Update(AnchorInfo);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : AnchorInfoCountCoreMessage) : Promise<number>{
return AnchorInfoCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where AnchorInfoSearchCoreMessage
     * @constructor
     */
public static Search(where : AnchorInfoSearchCoreMessage) : Promise<Array<AnchorInfoCoreModel>>{
return AnchorInfoCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : AnchorInfoDeleteCoreMessage) : Promise<number>{
return AnchorInfoCoreData.Delete(where);
}
}
