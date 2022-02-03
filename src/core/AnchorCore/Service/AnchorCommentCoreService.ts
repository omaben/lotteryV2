import {AnchorCommentCoreModel} from "@/core/AnchorCore/Model/AnchorCommentCoreModel";
import {AnchorCommentCoreData} from "@/core/AnchorCore/Data/AnchorCommentCoreData";
import {AnchorCommentInsertCoreMessage} from "@/core/AnchorCore/Message/AnchorCommentInsertCoreMessage";
import {AnchorCommentUpdateCoreMessage} from "@/core/AnchorCore/Message/AnchorCommentUpdateCoreMessage";
import {AnchorCommentSearchCoreMessage} from "@/core/AnchorCore/Message/AnchorCommentSearchCoreMessage";
import {AnchorCommentDeleteCoreMessage} from "@/core/AnchorCore/Message/AnchorCommentDeleteCoreMessage";
import {AnchorCommentCountCoreMessage} from "@/core/AnchorCore/Message/AnchorCommentCountCoreMessage";
export class AnchorCommentCoreService {
/**
     * 批量插入
     * @constructor
	 * @param AnchorCommentList Array<AnchorCommentCoreModel>
     */
public static InsertBatch(AnchorCommentList : Array<AnchorCommentCoreModel>) : Promise<boolean> {
return AnchorCommentCoreData.InsertBatch(AnchorCommentList)
}
/**
     * 插入
     * @param AnchorComment AnchorComment : AnchorCommentInsertCoreMessage
     * @constructor
     */
public static Insert(AnchorComment : AnchorCommentInsertCoreMessage) : Promise<boolean> {
return AnchorCommentCoreData.Insert(AnchorComment)
}
/**
     * 修改用户
     * @param AnchorComment AnchorCommentUpdateCoreMessage
     * @constructor
     */
public static Update(AnchorComment : AnchorCommentUpdateCoreMessage) : Promise<number> {
return AnchorCommentCoreData.Update(AnchorComment);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : AnchorCommentCountCoreMessage) : Promise<number>{
return AnchorCommentCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where AnchorCommentSearchCoreMessage
     * @constructor
     */
public static Search(where : AnchorCommentSearchCoreMessage) : Promise<Array<AnchorCommentCoreModel>>{
return AnchorCommentCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : AnchorCommentDeleteCoreMessage) : Promise<number>{
return AnchorCommentCoreData.Delete(where);
}
}
