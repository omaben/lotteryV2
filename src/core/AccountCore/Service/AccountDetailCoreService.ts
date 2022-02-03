import {AccountDetailCoreModel} from "@/core/AccountCore/Model/AccountDetailCoreModel";
import {AccountDetailCoreData} from "@/core/AccountCore/Data/AccountDetailCoreData";
import {AccountDetailInsertCoreMessage} from "@/core/AccountCore/Message/AccountDetailInsertCoreMessage";
import {AccountDetailUpdateCoreMessage} from "@/core/AccountCore/Message/AccountDetailUpdateCoreMessage";
import {AccountDetailSearchCoreMessage} from "@/core/AccountCore/Message/AccountDetailSearchCoreMessage";
import {AccountDetailDeleteCoreMessage} from "@/core/AccountCore/Message/AccountDetailDeleteCoreMessage";
import {AccountDetailCountCoreMessage} from "@/core/AccountCore/Message/AccountDetailCountCoreMessage";
export class AccountDetailCoreService {
/**
     * 批量插入
     * @constructor
	 * @param AccountDetailList Array<AccountDetailCoreModel>
     */
public static InsertBatch(AccountDetailList : Array<AccountDetailCoreModel>) : Promise<boolean> {
return AccountDetailCoreData.InsertBatch(AccountDetailList)
}
/**
     * 插入
     * @param AccountDetail AccountDetail : AccountDetailInsertCoreMessage
     * @constructor
     */
public static Insert(AccountDetail : AccountDetailInsertCoreMessage) : Promise<boolean> {
return AccountDetailCoreData.Insert(AccountDetail)
}
/**
     * 修改用户
     * @param AccountDetail AccountDetailUpdateCoreMessage
     * @constructor
     */
public static Update(AccountDetail : AccountDetailUpdateCoreMessage) : Promise<number> {
return AccountDetailCoreData.Update(AccountDetail);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : AccountDetailCountCoreMessage) : Promise<number>{
return AccountDetailCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where AccountDetailSearchCoreMessage
     * @constructor
     */
public static Search(where : AccountDetailSearchCoreMessage) : Promise<Array<AccountDetailCoreModel>>{
return AccountDetailCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : AccountDetailDeleteCoreMessage) : Promise<number>{
return AccountDetailCoreData.Delete(where);
}
}
