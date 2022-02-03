<template>
  <div class="deposit-details">
    <Header :msg="pageTitle" :back="true" :HomePage="false" :iconRight="''"/>
    <div class="page-title">
			{{ $t('message.importantReminder') }}
    </div>
		<div class="list">
			<ol>
				<li>1、{{ $t('message.importantReminder1') }}</li>
				<li>2、 {{ $t('message.importantReminder2') }}</li>
				<li>3、 {{ $t('message.importantReminder3') }}</li>
				<li>4、 {{ $t('message.importantReminder4') }}<span>"{{ $t('message.importantReminder4p1') }}"</span>{{ $t('message.importantReminder4p2')}}</li>
				<li>5、 {{ $t('message.importantReminder5') }}</li>
				<li>6、 {{ $t('message.importantReminder6') }}</li>
				<li>7、 {{ $t('message.importantReminder7') }}</li>
			</ol>
		</div>
		<div class="bank-details">
			<van-cell class="bd-wrap">
        <div class="bd-header">
					<van-image src="" class="bank-icon"/>
					<p>{{ $t('message.bankName') }}</p>
        </div>
				<div class="postcript">
					<div class="left-col">
						<span class="label">{{ $t('message.postscript') }}/{{ $t('message.remarks') }} <p>05337</p></span>
						<span class="desc">{{ $t('message.pleaseBeSure') }}</span>
					</div>
					<div class="right-col">
						<van-button class="postscript-btn" type="default">{{ $t('message.copy') }}</van-button>
					</div>
				</div>
				<div class="amount">
					<div class="left-col">
						<span class="label">{{ $t('message.amount') }}<p>107</p></span>
						<span class="desc">{{ $t('message.pleaseBeSure') }}</span>
					</div>
					<div class="right-col">
						<van-button class="amount-btn" type="default">{{ $t('message.copy') }}</van-button>
					</div>
				</div>
				<div class="name">
					<div class="left-col">
						<span class="label">{{ $t('message.name') }}</span>
					</div>
					<div class="right-col">
						<van-button class="name-btn" type="default">{{ $t('message.copy') }}</van-button>
					</div>
				</div>
				<div class="account">
					<div class="left-col">
						<span class="label">{{ $t('message.accountNo') }} 090200170110338000</span>
					</div>
					<div class="right-col">
						<van-button class="account-btn" type="default">{{ $t('message.copy') }}</van-button>
					</div>
				</div>
				<div class="address">
					<div class="left-col">
						<span class="label">{{ $t('message.address') }}</span>
					</div>
					<div class="right-col">
						<van-button class="address-btn" type="default">{{ $t('message.copy') }}</van-button>
					</div>
				</div>
      </van-cell>
		</div>
  </div>
</template>
<script lang="ts">
// @ is an alias to /src
import Header from '@/components/Header.vue'
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    Header
  }
})
export default class Deposit extends Vue {
  private pageTitle?: any = this.$t('message.deposit');
  
}
</script>

<style lang="less">
.deposit-details{
	background: #fff;
	padding: 0 10px;
	margin-top: 47px;
	height: 100vh;
	.page-title {
		text-align: left;
		padding: 15px 0;
		font-weight: bold;
	}
	.list {
		border-bottom: 1px solid #ccc;
		text-align: left;
		padding-bottom: 25px;
		li {
			font-size: 11px;
			padding-left: 20px;
			padding-bottom: 7px;
			span {
				color: red;
			}
			
		}
	}
	.bd-wrap {
		display: flex;
		align-items: center;
		background: #f2f4f8;
		border-radius: 10px;
		margin-top: 25px;
		.bank-icon {
			padding-right: 10px;
		}
		.van-image__error {
			position: relative;
		}
		.postcript,.amount,.name,.account,.address {
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			margin-bottom: 10px;
		}
		.left-col {
			span {
				display: flex;
			}
			p {
				margin: 0;
				color: red;
				padding-left: 5px;
			}
			.desc {
				font-size: 10px;
				color: #bbb;
				padding-left: 5px;
				line-height: 10px;
			}
			
		}
		.right-col {
			button {
				background: transparent;
				height: 25px;
				width: 70px;
				border:1px solid #bbb;
			}
		}
	}
	.bd-header {
		display: flex;
		align-items: center;
		padding-bottom: 10px;
		p {
			margin: 0;
		}
	}
}
</style>