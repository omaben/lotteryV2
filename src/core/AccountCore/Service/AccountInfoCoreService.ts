import {AccountInfoCoreModel} from "@/core/AccountCore/Model/AccountInfoCoreModel";
import {AccountInfoCoreData} from "@/core/AccountCore/Data/AccountInfoCoreData";
import {AccountInfoInsertCoreMessage} from "@/core/AccountCore/Message/AccountInfoInsertCoreMessage";
import {AccountInfoUpdateCoreMessage} from "@/core/AccountCore/Message/AccountInfoUpdateCoreMessage";
import {AccountInfoSearchCoreMessage} from "@/core/AccountCore/Message/AccountInfoSearchCoreMessage";
import {AccountInfoDeleteCoreMessage} from "@/core/AccountCore/Message/AccountInfoDeleteCoreMessage";
import {AccountInfoCountCoreMessage} from "@/core/AccountCore/Message/AccountInfoCountCoreMessage";
export class AccountInfoCoreService {
/**
     * 批量插入
     * @constructor
	 * @param AccountInfoList Array<AccountInfoCoreModel>
     */
public static InsertBatch(AccountInfoList : Array<AccountInfoCoreModel>) : Promise<boolean> {
return AccountInfoCoreData.InsertBatch(AccountInfoList)
}
/**
     * 插入
     * @param AccountInfo AccountInfo : AccountInfoInsertCoreMessage
     * @constructor
     */
public static Insert(AccountInfo : AccountInfoInsertCoreMessage) : Promise<boolean> {
return AccountInfoCoreData.Insert(AccountInfo)
}
/**
     * 修改用户
     * @param AccountInfo AccountInfoUpdateCoreMessage
     * @constructor
     */
public static Update(AccountInfo : AccountInfoUpdateCoreMessage) : Promise<number> {
return AccountInfoCoreData.Update(AccountInfo);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : AccountInfoCountCoreMessage) : Promise<number>{
return AccountInfoCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where AccountInfoSearchCoreMessage
     * @constructor
     */
public static Search(where : AccountInfoSearchCoreMessage) : Promise<Array<AccountInfoCoreModel>>{
return AccountInfoCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : AccountInfoDeleteCoreMessage) : Promise<number>{
return AccountInfoCoreData.Delete(where);
}
}
