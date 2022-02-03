import {ShortVideoCommentCoreModel} from "@/core/ShortVideoCore/Model/ShortVideoCommentCoreModel";
import {ShortVideoCommentCoreData} from "@/core/ShortVideoCore/Data/ShortVideoCommentCoreData";
import {ShortVideoCommentInsertCoreMessage} from "@/core/ShortVideoCore/Message/ShortVideoCommentInsertCoreMessage";
import {ShortVideoCommentUpdateCoreMessage} from "@/core/ShortVideoCore/Message/ShortVideoCommentUpdateCoreMessage";
import {ShortVideoCommentSearchCoreMessage} from "@/core/ShortVideoCore/Message/ShortVideoCommentSearchCoreMessage";
import {ShortVideoCommentDeleteCoreMessage} from "@/core/ShortVideoCore/Message/ShortVideoCommentDeleteCoreMessage";
import {ShortVideoCommentCountCoreMessage} from "@/core/ShortVideoCore/Message/ShortVideoCommentCountCoreMessage";
export class ShortVideoCommentCoreService {
/**
     * 批量插入
     * @constructor
	 * @param ShortVideoCommentList Array<ShortVideoCommentCoreModel>
     */
public static InsertBatch(ShortVideoCommentList : Array<ShortVideoCommentCoreModel>) : Promise<boolean> {
return ShortVideoCommentCoreData.InsertBatch(ShortVideoCommentList)
}
/**
     * 插入
     * @param ShortVideoComment ShortVideoComment : ShortVideoCommentInsertCoreMessage
     * @constructor
     */
public static Insert(ShortVideoComment : ShortVideoCommentInsertCoreMessage) : Promise<boolean> {
return ShortVideoCommentCoreData.Insert(ShortVideoComment)
}
/**
     * 修改用户
     * @param ShortVideoComment ShortVideoCommentUpdateCoreMessage
     * @constructor
     */
public static Update(ShortVideoComment : ShortVideoCommentUpdateCoreMessage) : Promise<number> {
return ShortVideoCommentCoreData.Update(ShortVideoComment);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : ShortVideoCommentCountCoreMessage) : Promise<number>{
return ShortVideoCommentCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where ShortVideoCommentSearchCoreMessage
     * @constructor
     */
public static Search(where : ShortVideoCommentSearchCoreMessage) : Promise<Array<ShortVideoCommentCoreModel>>{
return ShortVideoCommentCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : ShortVideoCommentDeleteCoreMessage) : Promise<number>{
return ShortVideoCommentCoreData.Delete(where);
}
}
