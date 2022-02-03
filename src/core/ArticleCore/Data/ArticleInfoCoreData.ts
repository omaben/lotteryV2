import {ArticleInfoCoreModel} from "@/core/ArticleCore/Model/ArticleInfoCoreModel";
import {Application} from "@/lib/Application";
import {ArticleInfoInsertCoreMessage} from "@/core/ArticleCore/Message/ArticleInfoInsertCoreMessage";
import {ArticleInfoUpdateCoreMessage} from "@/core/ArticleCore/Message/ArticleInfoUpdateCoreMessage";
import {ArticleInfoSearchCoreMessage} from "@/core/ArticleCore/Message/ArticleInfoSearchCoreMessage";
import {ArticleInfoDeleteCoreMessage} from "@/core/ArticleCore/Message/ArticleInfoDeleteCoreMessage";
import {ArticleInfoCountCoreMessage} from "@/core/ArticleCore/Message/ArticleInfoCountCoreMessage";
export class ArticleInfoCoreData {
/**
     * 批量插入
     * @param ArticleInfoList Array<ArticleInfoInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(ArticleInfoList : Array<ArticleInfoInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("Article/ArticleInfo/InsertBatch.action", {Data:JSON.stringify(ArticleInfoList)});
}
/**
     * 插入
     * @param ArticleInfo  ArticleInfoInsertCoreMessage
     * @constructor
     */
public static Insert(ArticleInfo : ArticleInfoInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("Article/ArticleInfo/Insert.action", ArticleInfo);
}
/**
     * 修改用户
     * @param ArticleInfo ArticleInfoUpdateCoreMessage
     * @constructor
     */
public static Update(ArticleInfo : ArticleInfoUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("Article/ArticleInfo/Update.action", ArticleInfo);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : ArticleInfoCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("Article/ArticleInfo/Count.action", where);
}
/**
     * 搜索用户
     * @param where ArticleInfoSearchCoreMessage
     * @constructor
     */
public static Search(where : ArticleInfoSearchCoreMessage) : Promise<Array<ArticleInfoCoreModel>>{
return Application.Service.GetContent("Article/ArticleInfo/Search.action", where);
}
/**
     * 删除用户
     * @param where ArticleInfoDeleteCoreMessage
     * @constructor
     */
public static Delete(where : ArticleInfoDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("Article/ArticleInfo/Delete.action", where);
}
}
