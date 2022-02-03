<template>
  <div class="detail-user">
    <Header
      :msg="$t('message.personalInfo')"
      :back="back"
      :leftText="$t('message.back')"
      :saveUser="updateUser"
      @saveUserDetail="updateUser()"
    />
    <div class="detail-user-content">
      <van-cell
        center
        :title="$t('message.myIcon')"
        class="top_user info"
      ></van-cell>
      <van-cell center title icon class="top_user top-user-icon">
        <!-- <template #right-icon></template> -->
        <template #icon>
          <img
            alt=""
            @click="showAvatar = true"
            :src="valitdateProfile(userDetails.avatar).length > 0
                ? require(`@/assets/images/profile/${userDetails.avatar}.png`)
                : require('@/assets/images/profile/default.png')"
            width="50"
            height="50"
          />


        </template>
      </van-cell>
      <van-cell
        :title="$t('message.username')"
        :label="tempUsername"
        class="top_user info top-user-name"
      />
      <van-cell-group class="link_user info">
        <van-cell center :title="$t('message.actualName')">
          <template #label>
            <van-field
              v-model="userDetails.name"
              label=""
              :placeholder="$t('message.realNameMust')"
            />
          </template>
          <template #right-icon>
            <van-icon name="arrow" class="arrow" />
          </template>
        </van-cell>
        <van-cell
          center
          :title="$t('message.gender')"
          @click="showGenderSheet = true"
          :label="userDetails.sex ? userDetails.sex : $t('message.chooseYourGender')"
        >
          <template #right-icon>
            <van-icon name="arrow" class="arrow" />
          </template>
        </van-cell>
        <van-cell
          center
          :title="$t('message.dateOfBirth')"
          @click="showSelectDate = true"
          :label="
            userDetails.birthDay
              ? userDetails.birthDay
              : $t('message.addDateYears')
          "
        >
          <template #right-icon>
            <van-icon name="arrow" class="arrow" />
          </template>
        </van-cell>
        <van-cell
          center
          :title="$t('message.mobilePhoneNumber')"
          :label="
            userDetails.tel
              ? userDetails.tel
              : $t('message.bindMobilePhone')
          "
          is-link
          to="PhoneNumber"
        >
          <template #right-icon>
            <van-icon name="arrow" class="arrow" />
          </template>
        </van-cell>
        <van-cell center :title="$t('message.email')">
          <template #label>
            <van-field
              v-model="userDetails.email"
              type="email"
              label=""
              :rules="[{ required: true, message: 'Username is required' }]"
              :placeholder="$t('message.bindEmail')"
            />
          </template>
          <template #right-icon>
            <van-icon name="arrow" class="arrow" />
          </template>
        </van-cell>
      </van-cell-group>

      <van-action-sheet v-model="showAvatar" @cancel="onCancelAvatar" :cancel-text="$t('message.cancel')">
        <div class="content">
          <van-grid :border="false" :column-num="4">
            <van-grid-item
              v-for="(image, key) in images"
              :key="key"
              @click="selectAvatar(key, image.title)"
            >
              <img
                alt
                :src="image.name"
                class="profil_user"
                :class="selectedImageItem == key ? 'selected' : null"
              />
            </van-grid-item>
          </van-grid>
          <!-- <van-cell-group>
            <div class="upload-line">
              <van-uploader :after-read="uploadImage" :max-count="1">
                <van-cell :title="$t('message.selectAlbum')" />
              </van-uploader>
            </div>
            <div>
              <van-uploader
                capture="camera"
                :after-read="uploadImage"
                accept="image/png,image/jpeg"
              >
                <van-cell :title="$t('message.takePic')" />
              </van-uploader>
            </div>
          </van-cell-group> -->
        </div>
      </van-action-sheet>

      <van-action-sheet
        v-model="showGenderSheet"
        :actions="gender"
        @select="onSelectGender"
        @cancel="onCancelGender"
        :title="$t('message.chooseGender')"
        :closeable="false"
        :cancel-text="$t('message.cancel')"
      />

      <van-popup
        v-model="showSelectDate"
        round
        position="bottom"
      >
        <van-datetime-picker
          v-model="userDetails.dataOfBirth"
          :min-date="minDate"
          :max-date="maxDate"
          @cancel="showSelectDate = false"
          type="date"
          :title="$t('message.customColumnSort')"
          :columns-order="['year', 'month', 'day']"
          :confirm-button-text="$t('message.confirm')"
          :cancel-button-text="$t('message.cancel')"
          @confirm="selectDate"
        />
      </van-popup>
    </div>
    <van-cell center title class="footer_condition">
      <template #title>
        <p>
          {{ $t("message.forSafety")
          }}<span>{{ $t("message.contactCustomerService") }}</span>
        </p>
      </template>
    </van-cell>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src

import Header from "@/components/Header.vue"
import { Component, Vue, Watch } from "vue-property-decorator"
import {UserInfoCoreService} from "@/core/UserCore/Service/UserInfoCoreService";
import {UserInfoSearchCoreMessage} from "@/core/UserCore/Message/UserInfoSearchCoreMessage";
import {UserInfoUpdateCoreMessage} from "@/core/UserCore/Message/UserInfoUpdateCoreMessage";
import { Toast } from "vant";
import { validators } from '@/utils/validators'

@Component({
  components: {
    Header,
  },
})
export default class DetailUser extends Vue {
  private showAvatar: boolean = false;
  private tempAvatarVal: any = null;
  private back: boolean = true
  private showSelectDate?: boolean = false
  private showGenderSheet?: boolean = false
  private currentDate?: any = new Date()
  private minDate?: any = new Date(1980, 0, 1)
  private maxDate?: any = new Date()
  private selectedImageItem = 0
  private userDetails?: any = {}
  private tempUsername: any = '';
  private gender?: any = [
    { name: this.$t("message.male") },
    { name: this.$t("message.female") },
  ];
  private imageDefault : string = require("@/assets/images/profile/person8.png")
  private images: any[] = [
    { name: require("@/assets/images/profile/person1.png"), title: 'person1' },
    { name: require("@/assets/images/profile/person2.png"), title: 'person2' },
    { name: require("@/assets/images/profile/person3.png"), title: 'person3' },
    { name: require("@/assets/images/profile/person4.png"), title: 'person4' },
    { name: require("@/assets/images/profile/person5.png"), title: 'person5' },
    { name: require("@/assets/images/profile/person6.png"), title: 'person6' },
    { name: require("@/assets/images/profile/person7.png"), title: 'person7' },
    { name: require("@/assets/images/profile/person8.png"), title: 'person8' },
  ];

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: null
    * @Return: object || {}
    * @Date: 2021-04-09 16:44:11
    * @Description: Get current user info
  */
  get userInfos() {
    let item: any = localStorage.getItem('UserInfo');
    item = JSON.parse(item);
    return item;
  }

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: null
    * @Return: array || []
    * @Date: 2021-04-09 17:19:02
    * @Description: check user avatar if exist
  */
  private valitdateProfile(iconName: any) {
    return this.images.filter((val: any) => {
      if (val.title == iconName) return val;
    })
  }

  /*
    * @Author: null 
    * @LastAuthor: keanu
    * @Param: null
    * @Return: null
    * @Date: 2021-04-09 17:20:12
    * @Description: close select gender popup
  */
  private onCancelGender() {
    this.showGenderSheet = false;
  }

  /*
    * @Author: null 
    * @LastAuthor: keanu
    * @Param: null
    * @Return: null
    * @Date: 2021-04-09 17:20:12
    * @Description: update user info
  */
  private updateUser() {
    if (this.userDetails.name == '') {
      Toast(this.$t('message.realNameMust'))
    } else {
      if (validators.checkEmail(this.userDetails.email) === true && this.userDetails.email !== '') {
        let params: any = new UserInfoUpdateCoreMessage();
        params.equal_id_userInfo = this.userInfos.id;
        params.avatar = this.userDetails.avatar;
        params.name = this.userDetails.name;
        params.email = this.userDetails.email;
        params.sex = this.parseGender(this.userDetails.sex);
        params.birthDay = this.userDetails.birthDay;
        UserInfoCoreService.Update(params).then((data: any) => {
          this.UserInfo();
          Toast.success(this.$t('message.userUpdate'));
        })
      } else {
        Toast(this.$t('message.invalidEmail'))
      }

    }

  }

  /*
    * @Author: null 
    * @LastAuthor: keanu
    * @Param: null
    * @Return: null
    * @Date: 2021-04-09 17:20:12
    * @Description: cancel select Avatar popup
  */
  private onCancelAvatar() {
    this.userDetails.avatar = this.tempAvatarVal;
    this.showAvatar = false;
  }

  /*
    * @Author: null 
    * @LastAuthor: keanu
    * @Param: null
    * @Return: null
    * @Date: 2021-04-09 17:20:12
    * @Description: select avatar
  */
  private selectAvatar(index: any, icon: any) {
    this.selectedImageItem = index
    this.userDetails.avatar = icon
    this.showAvatar = false;
  }

  /*
    * @Author: null 
    * @LastAuthor: keanu
    * @Param: null
    * @Return: null
    * @Date: 2021-04-09 17:20:12
    * @Description: upload a image
  */
  private uploadImage(file: any) {
    this.userDetails.avatar = file.content
  }

  /*
    * @Author: null 
    * @LastAuthor: keanu
    * @Param: null
    * @Return: null
    * @Date: 2021-04-09 17:20:12
    * @Description: select gender
  */
  private onSelectGender(item: any) {
    this.userDetails.sex = item.name
    this.showGenderSheet = false
  }

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: gender: any
    * @Return: number
    * @Date: 2021-04-09 17:57:31
    * @Description: parse gender
  */
  private parseGender(gender: any) {
    if (gender == 'Male' || gender == '男') {
      return 0;
    } else {
      return 1;
    }
  }

  /*
    * @Author: null 
    * @LastAuthor: keanu
    * @Param: null
    * @Return: null
    * @Date: 2021-04-09 17:20:12
    * @Description: select birth date
  */
  private selectDate(val: any) {
    let month =
      val.getMonth() + 1 < 10 ? `0${val.getMonth() + 1}` : val.getMonth() + 1
    let date = val.getDate() < 10 ? `0${val.getDate()}` : val.getDate()

    let newDOB = `${val.getFullYear()}-${month}-${date}`
    this.userDetails.birthDay = newDOB
    this.showSelectDate = false
  }

  /*
    * @Author: null 
    * @LastAuthor: keanu
    * @Param: null
    * @Return: null
    * @Date: 2021-04-09 17:20:12
    * @Description: get user info data
  */
  private UserInfo() {
    let params: any = new UserInfoSearchCoreMessage();
    params.equal_id_userInfo = this.userInfos.id;
    UserInfoCoreService.Search(params).then((data: any) => {
      if (data.length > 0) {
        this.userDetails = data[0];
        this.userDetails.sex = this.gender[this.userDetails.sex].name;
        this.tempAvatarVal = this.userDetails.avatar; 
        this.tempUsername = this.userDetails.name;
        this.userDetails.birthDay = this.userDetails.birthDay.split(" ")[0];
      }
    })
  }

  private created() {
    if (this.userInfos) {
      this.UserInfo()
    }
  }

}
</script>

<style scoped>
.link_user {
  padding-top: 10px;
  padding-bottom: 54px;
}

.link_user img {
  width: 16px;
}

.link_user .van-cell__title {
  text-align: left;
  padding-left: 15px;
}

.link_user .van-cell::after {
  right: 0;
  left: 0;
}

.link_user span.van-tag {
  margin-left: 10px;
}

.link_user .van-icon {
  color: #bdc1ce;
}

.top_user.info {
  padding: 0;
}

.top_user.info .van-cell__title,
.link_user.info .van-cell__title {
  padding-left: 9px;
}

.link_user.info .van-cell {
  padding-left: 0;
}

.link_user.info {
  padding-top: 0;
  padding-bottom: 0;
}

.detail-user-content {
  padding: 10px 10px 0px;
  background: #fff;
}

.detail-user-content .top_user {
  padding: 0px;
}

.detail-user .top-user-icon {
  padding: 10px 0px;
  border-bottom: 1px solid #ebedf0;
}

.detail-user .top-user-name {
  padding: 10px 0px;
}

.detail-user .top-user-name .van-cell__title .van-cell__label {
  margin-top: 10px;
  font-size: 12px;
}

.detail-user-content .van-action-sheet__header,
.detail-user-content .van-picker__toolbar {
  border-bottom: 1px solid #ebedf0;
}

.detail-user-content .van-picker__toolbar .van-picker__confirm {
  color: #2c3e50;
}

.detail-user-content .top_user .van-cell__title {
  padding-left: 0;
  font-size: 14px;
  line-height: 14px;
}

.detail-user .link_user .van-icon {
  align-self: center;
  margin-bottom: 3px;
}

.detail-user .link_user .van-cell {
  padding: 5px 0px 5px;
}

.detail-user .link_user .van-cell .van-field {
  padding: 0px 0px 5px;
}

.detail-user .link_user .van-cell .van-cell__title {
  padding: 0px;
}

.detail-user .link_user .van-cell .van-field__body {
  width: 80%;
}

.detail-user .link_user .van-cell .van-cell__title .van-cell__label {
  margin-top: 5px;
}

img.profil_user {
  border-radius: 50%;
}

img.profil_user.selected {
  border: 1px solid rgb(237, 64, 64);
  width: 58px;
}

.upload-line {
  border-bottom: 1px solid #ebedf0;
}

.upload-line .van-cell::after {
  display: none;
}

.footer_condition {
  font-size: 13px;
  padding: 17px 50px 0px;
}

.footer_condition .van-cell__title p {
  margin: 0px;
  line-height: 15px;
}
</style>
