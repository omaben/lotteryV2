import {AchorFollowedMeCoreModel} from "@/core/AnchorCore/Model/AchorFollowedMeCoreModel";
import {AchorFollowedMeCoreData} from "@/core/AnchorCore/Data/AchorFollowedMeCoreData";
import {AchorFollowedMeInsertCoreMessage} from "@/core/AnchorCore/Message/AchorFollowedMeInsertCoreMessage";
import {AchorFollowedMeUpdateCoreMessage} from "@/core/AnchorCore/Message/AchorFollowedMeUpdateCoreMessage";
import {AchorFollowedMeSearchCoreMessage} from "@/core/AnchorCore/Message/AchorFollowedMeSearchCoreMessage";
import {AchorFollowedMeDeleteCoreMessage} from "@/core/AnchorCore/Message/AchorFollowedMeDeleteCoreMessage";
import {AchorFollowedMeCountCoreMessage} from "@/core/AnchorCore/Message/AchorFollowedMeCountCoreMessage";
export class AchorFollowedMeCoreService {
/**
     * 批量插入
     * @constructor
	 * @param AchorFollowedMeList Array<AchorFollowedMeCoreModel>
     */
public static InsertBatch(AchorFollowedMeList : Array<AchorFollowedMeCoreModel>) : Promise<boolean> {
return AchorFollowedMeCoreData.InsertBatch(AchorFollowedMeList)
}
/**
     * 插入
     * @param AchorFollowedMe AchorFollowedMe : AchorFollowedMeInsertCoreMessage
     * @constructor
     */
public static Insert(AchorFollowedMe : AchorFollowedMeInsertCoreMessage) : Promise<boolean> {
return AchorFollowedMeCoreData.Insert(AchorFollowedMe)
}
/**
     * 修改用户
     * @param AchorFollowedMe AchorFollowedMeUpdateCoreMessage
     * @constructor
     */
public static Update(AchorFollowedMe : AchorFollowedMeUpdateCoreMessage) : Promise<number> {
return AchorFollowedMeCoreData.Update(AchorFollowedMe);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : AchorFollowedMeCountCoreMessage) : Promise<number>{
return AchorFollowedMeCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where AchorFollowedMeSearchCoreMessage
     * @constructor
     */
public static Search(where : AchorFollowedMeSearchCoreMessage) : Promise<Array<AchorFollowedMeCoreModel>>{
return AchorFollowedMeCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : AchorFollowedMeDeleteCoreMessage) : Promise<number>{
return AchorFollowedMeCoreData.Delete(where);
}
}
