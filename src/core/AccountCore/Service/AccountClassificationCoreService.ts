import {AccountClassificationCoreModel} from "@/core/AccountCore/Model/AccountClassificationCoreModel";
import {AccountClassificationCoreData} from "@/core/AccountCore/Data/AccountClassificationCoreData";
import {AccountClassificationInsertCoreMessage} from "@/core/AccountCore/Message/AccountClassificationInsertCoreMessage";
import {AccountClassificationUpdateCoreMessage} from "@/core/AccountCore/Message/AccountClassificationUpdateCoreMessage";
import {AccountClassificationSearchCoreMessage} from "@/core/AccountCore/Message/AccountClassificationSearchCoreMessage";
import {AccountClassificationDeleteCoreMessage} from "@/core/AccountCore/Message/AccountClassificationDeleteCoreMessage";
import {AccountClassificationCountCoreMessage} from "@/core/AccountCore/Message/AccountClassificationCountCoreMessage";
export class AccountClassificationCoreService {
/**
     * 批量插入
     * @constructor
	 * @param AccountClassificationList Array<AccountClassificationCoreModel>
     */
public static InsertBatch(AccountClassificationList : Array<AccountClassificationCoreModel>) : Promise<boolean> {
return AccountClassificationCoreData.InsertBatch(AccountClassificationList)
}
/**
     * 插入
     * @param AccountClassification AccountClassification : AccountClassificationInsertCoreMessage
     * @constructor
     */
public static Insert(AccountClassification : AccountClassificationInsertCoreMessage) : Promise<boolean> {
return AccountClassificationCoreData.Insert(AccountClassification)
}
/**
     * 修改用户
     * @param AccountClassification AccountClassificationUpdateCoreMessage
     * @constructor
     */
public static Update(AccountClassification : AccountClassificationUpdateCoreMessage) : Promise<number> {
return AccountClassificationCoreData.Update(AccountClassification);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : AccountClassificationCountCoreMessage) : Promise<number>{
return AccountClassificationCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where AccountClassificationSearchCoreMessage
     * @constructor
     */
public static Search(where : AccountClassificationSearchCoreMessage) : Promise<Array<AccountClassificationCoreModel>>{
return AccountClassificationCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : AccountClassificationDeleteCoreMessage) : Promise<number>{
return AccountClassificationCoreData.Delete(where);
}
}
