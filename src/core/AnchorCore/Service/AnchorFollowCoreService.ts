import {AnchorFollowCoreModel} from "@/core/AnchorCore/Model/AnchorFollowCoreModel";
import {AnchorFollowCoreData} from "@/core/AnchorCore/Data/AnchorFollowCoreData";
import {AnchorFollowInsertCoreMessage} from "@/core/AnchorCore/Message/AnchorFollowInsertCoreMessage";
import {AnchorFollowUpdateCoreMessage} from "@/core/AnchorCore/Message/AnchorFollowUpdateCoreMessage";
import {AnchorFollowSearchCoreMessage} from "@/core/AnchorCore/Message/AnchorFollowSearchCoreMessage";
import {AnchorFollowDeleteCoreMessage} from "@/core/AnchorCore/Message/AnchorFollowDeleteCoreMessage";
import {AnchorFollowCountCoreMessage} from "@/core/AnchorCore/Message/AnchorFollowCountCoreMessage";
export class AnchorFollowCoreService {
/**
     * 批量插入
     * @constructor
	 * @param AnchorFollowList Array<AnchorFollowCoreModel>
     */
public static InsertBatch(AnchorFollowList : Array<AnchorFollowCoreModel>) : Promise<boolean> {
return AnchorFollowCoreData.InsertBatch(AnchorFollowList)
}
/**
     * 插入
     * @param AnchorFollow AnchorFollow : AnchorFollowInsertCoreMessage
     * @constructor
     */
public static Insert(AnchorFollow : AnchorFollowInsertCoreMessage) : Promise<boolean> {
return AnchorFollowCoreData.Insert(AnchorFollow)
}
/**
     * 修改用户
     * @param AnchorFollow AnchorFollowUpdateCoreMessage
     * @constructor
     */
public static Update(AnchorFollow : AnchorFollowUpdateCoreMessage) : Promise<number> {
return AnchorFollowCoreData.Update(AnchorFollow);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : AnchorFollowCountCoreMessage) : Promise<number>{
return AnchorFollowCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where AnchorFollowSearchCoreMessage
     * @constructor
     */
public static Search(where : AnchorFollowSearchCoreMessage) : Promise<Array<AnchorFollowCoreModel>>{
return AnchorFollowCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : AnchorFollowDeleteCoreMessage) : Promise<number>{
return AnchorFollowCoreData.Delete(where);
}
}
