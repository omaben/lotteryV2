import {ArticleInfoCoreModel} from "@/core/ArticleCore/Model/ArticleInfoCoreModel";
import {ArticleInfoCoreData} from "@/core/ArticleCore/Data/ArticleInfoCoreData";
import {ArticleInfoInsertCoreMessage} from "@/core/ArticleCore/Message/ArticleInfoInsertCoreMessage";
import {ArticleInfoUpdateCoreMessage} from "@/core/ArticleCore/Message/ArticleInfoUpdateCoreMessage";
import {ArticleInfoSearchCoreMessage} from "@/core/ArticleCore/Message/ArticleInfoSearchCoreMessage";
import {ArticleInfoDeleteCoreMessage} from "@/core/ArticleCore/Message/ArticleInfoDeleteCoreMessage";
import {ArticleInfoCountCoreMessage} from "@/core/ArticleCore/Message/ArticleInfoCountCoreMessage";
export class ArticleInfoCoreService {
/**
     * 批量插入
     * @constructor
	 * @param ArticleInfoList Array<ArticleInfoCoreModel>
     */
public static InsertBatch(ArticleInfoList : Array<ArticleInfoCoreModel>) : Promise<boolean> {
return ArticleInfoCoreData.InsertBatch(ArticleInfoList)
}
/**
     * 插入
     * @param ArticleInfo ArticleInfo : ArticleInfoInsertCoreMessage
     * @constructor
     */
public static Insert(ArticleInfo : ArticleInfoInsertCoreMessage) : Promise<boolean> {
return ArticleInfoCoreData.Insert(ArticleInfo)
}
/**
     * 修改用户
     * @param ArticleInfo ArticleInfoUpdateCoreMessage
     * @constructor
     */
public static Update(ArticleInfo : ArticleInfoUpdateCoreMessage) : Promise<number> {
return ArticleInfoCoreData.Update(ArticleInfo);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : ArticleInfoCountCoreMessage) : Promise<number>{
return ArticleInfoCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where ArticleInfoSearchCoreMessage
     * @constructor
     */
public static Search(where : ArticleInfoSearchCoreMessage) : Promise<Array<ArticleInfoCoreModel>>{
return ArticleInfoCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : ArticleInfoDeleteCoreMessage) : Promise<number>{
return ArticleInfoCoreData.Delete(where);
}
}
