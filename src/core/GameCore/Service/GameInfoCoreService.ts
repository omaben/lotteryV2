import {GameInfoCoreModel} from "@/core/GameCore/Model/GameInfoCoreModel";
import {GameInfoCoreData} from "@/core/GameCore/Data/GameInfoCoreData";
import {GameInfoInsertCoreMessage} from "@/core/GameCore/Message/GameInfoInsertCoreMessage";
import {GameInfoUpdateCoreMessage} from "@/core/GameCore/Message/GameInfoUpdateCoreMessage";
import {GameInfoSearchCoreMessage} from "@/core/GameCore/Message/GameInfoSearchCoreMessage";
import {GameInfoDeleteCoreMessage} from "@/core/GameCore/Message/GameInfoDeleteCoreMessage";
import {GameInfoCountCoreMessage} from "@/core/GameCore/Message/GameInfoCountCoreMessage";
export class GameInfoCoreService {
/**
     * 批量插入
     * @constructor
	 * @param GameInfoList Array<GameInfoCoreModel>
     */
public static InsertBatch(GameInfoList : Array<GameInfoCoreModel>) : Promise<boolean> {
return GameInfoCoreData.InsertBatch(GameInfoList)
}
/**
     * 插入
     * @param GameInfo GameInfo : GameInfoInsertCoreMessage
     * @constructor
     */
public static Insert(GameInfo : GameInfoInsertCoreMessage) : Promise<boolean> {
return GameInfoCoreData.Insert(GameInfo)
}
/**
     * 修改用户
     * @param GameInfo GameInfoUpdateCoreMessage
     * @constructor
     */
public static Update(GameInfo : GameInfoUpdateCoreMessage) : Promise<number> {
return GameInfoCoreData.Update(GameInfo);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : GameInfoCountCoreMessage) : Promise<number>{
return GameInfoCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where GameInfoSearchCoreMessage
     * @constructor
     */
public static Search(where : GameInfoSearchCoreMessage) : Promise<Array<GameInfoCoreModel>>{
return GameInfoCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : GameInfoDeleteCoreMessage) : Promise<number>{
return GameInfoCoreData.Delete(where);
}
}
