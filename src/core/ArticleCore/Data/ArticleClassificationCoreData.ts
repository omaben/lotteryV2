import {ArticleClassificationCoreModel} from "@/core/ArticleCore/Model/ArticleClassificationCoreModel";
import {Application} from "@/lib/Application";
import {ArticleClassificationInsertCoreMessage} from "@/core/ArticleCore/Message/ArticleClassificationInsertCoreMessage";
import {ArticleClassificationUpdateCoreMessage} from "@/core/ArticleCore/Message/ArticleClassificationUpdateCoreMessage";
import {ArticleClassificationSearchCoreMessage} from "@/core/ArticleCore/Message/ArticleClassificationSearchCoreMessage";
import {ArticleClassificationDeleteCoreMessage} from "@/core/ArticleCore/Message/ArticleClassificationDeleteCoreMessage";
import {ArticleClassificationCountCoreMessage} from "@/core/ArticleCore/Message/ArticleClassificationCountCoreMessage";
export class ArticleClassificationCoreData {
/**
     * 批量插入
     * @param ArticleClassificationList Array<ArticleClassificationInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(ArticleClassificationList : Array<ArticleClassificationInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("Article/ArticleClassification/InsertBatch.action", {Data:JSON.stringify(ArticleClassificationList)});
}
/**
     * 插入
     * @param ArticleClassification  ArticleClassificationInsertCoreMessage
     * @constructor
     */
public static Insert(ArticleClassification : ArticleClassificationInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("Article/ArticleClassification/Insert.action", ArticleClassification);
}
/**
     * 修改用户
     * @param ArticleClassification ArticleClassificationUpdateCoreMessage
     * @constructor
     */
public static Update(ArticleClassification : ArticleClassificationUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("Article/ArticleClassification/Update.action", ArticleClassification);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : ArticleClassificationCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("Article/ArticleClassification/Count.action", where);
}
/**
     * 搜索用户
     * @param where ArticleClassificationSearchCoreMessage
     * @constructor
     */
public static Search(where : ArticleClassificationSearchCoreMessage) : Promise<Array<ArticleClassificationCoreModel>>{
return Application.Service.GetContent("Article/ArticleClassification/Search.action", where);
}
/**
     * 删除用户
     * @param where ArticleClassificationDeleteCoreMessage
     * @constructor
     */
public static Delete(where : ArticleClassificationDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("Article/ArticleClassification/Delete.action", where);
}
}
