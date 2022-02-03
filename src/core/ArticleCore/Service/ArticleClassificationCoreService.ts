import {ArticleClassificationCoreModel} from "@/core/ArticleCore/Model/ArticleClassificationCoreModel";
import {ArticleClassificationCoreData} from "@/core/ArticleCore/Data/ArticleClassificationCoreData";
import {ArticleClassificationInsertCoreMessage} from "@/core/ArticleCore/Message/ArticleClassificationInsertCoreMessage";
import {ArticleClassificationUpdateCoreMessage} from "@/core/ArticleCore/Message/ArticleClassificationUpdateCoreMessage";
import {ArticleClassificationSearchCoreMessage} from "@/core/ArticleCore/Message/ArticleClassificationSearchCoreMessage";
import {ArticleClassificationDeleteCoreMessage} from "@/core/ArticleCore/Message/ArticleClassificationDeleteCoreMessage";
import {ArticleClassificationCountCoreMessage} from "@/core/ArticleCore/Message/ArticleClassificationCountCoreMessage";
export class ArticleClassificationCoreService {
/**
     * 批量插入
     * @constructor
	 * @param ArticleClassificationList Array<ArticleClassificationCoreModel>
     */
public static InsertBatch(ArticleClassificationList : Array<ArticleClassificationCoreModel>) : Promise<boolean> {
return ArticleClassificationCoreData.InsertBatch(ArticleClassificationList)
}
/**
     * 插入
     * @param ArticleClassification ArticleClassification : ArticleClassificationInsertCoreMessage
     * @constructor
     */
public static Insert(ArticleClassification : ArticleClassificationInsertCoreMessage) : Promise<boolean> {
return ArticleClassificationCoreData.Insert(ArticleClassification)
}
/**
     * 修改用户
     * @param ArticleClassification ArticleClassificationUpdateCoreMessage
     * @constructor
     */
public static Update(ArticleClassification : ArticleClassificationUpdateCoreMessage) : Promise<number> {
return ArticleClassificationCoreData.Update(ArticleClassification);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : ArticleClassificationCountCoreMessage) : Promise<number>{
return ArticleClassificationCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where ArticleClassificationSearchCoreMessage
     * @constructor
     */
public static Search(where : ArticleClassificationSearchCoreMessage) : Promise<Array<ArticleClassificationCoreModel>>{
return ArticleClassificationCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : ArticleClassificationDeleteCoreMessage) : Promise<number>{
return ArticleClassificationCoreData.Delete(where);
}
}
