<script setup lang="ts">
import InventoryItem from './InventoryItem.vue';
import { defineProps, ref, watch } from 'vue';
import { Item, useItemsStore } from '../stores/items';

const props = defineProps<{ currentItem: Item | null }>();

const store = useItemsStore();

const setCurrentToNull = store.setCurrentToNull;
const updateItemQuantity = store.updateItemQuantity;
const removeItem = store.removeItem;
const updateItemId = store.updateItemId;

const newQuantity = ref<number>(props.currentItem?.quantity || 0);

watch(
	() => props.currentItem?.quantity,
	(newVal) => {
		if (newVal !== undefined) {
			newQuantity.value = newVal;
		}
	}
);

const confirmUpdate = () => {
	if (props.currentItem) {
		updateItemQuantity(props.currentItem.id, newQuantity.value);
	}
	setCurrentToNull();
};

const confirmRemove = () => {
	if (props.currentItem) {
		removeItem(props.currentItem.id);
	}
	setCurrentToNull();
};
</script>

<template>
	<div class="inner-menu-component">
		<div class="inner-menu-component-content">
			<InventoryItem
				:backgroundColor="currentItem?.color || '#fff'"
				widthAndHeight="116"
			/>
		</div>
		<div class="inner-menu-component-skeleton">
			<div
				class="inner-menu-component-skeleton-elements inner-menu-component-skeleton-1element"
			></div>
			<div
				class="inner-menu-component-skeleton-elements inner-menu-component-skeleton-2element"
			></div>
			<div
				class="inner-menu-component-skeleton-elements inner-menu-component-skeleton-3element"
			></div>
			<div
				class="inner-menu-component-skeleton-elements inner-menu-component-skeleton-4element"
			></div>
			<div
				class="inner-menu-component-skeleton-elements inner-menu-component-skeleton-5element"
			></div>
			<div
				class="inner-menu-component-skeleton-elements inner-menu-component-skeleton-6element"
			></div>
		</div>
		<div class="inner-menu-component-update">
			<input
				type="number"
				class="inner-menu-component-update-input"
				placeholder="введите количество"
				v-model="newQuantity"
			/>
			<div class="inner-menu-component-update-buttons">
				<div
					class="inner-menu-component-button inner-menu-component-button-secondary"
				>
					<Button @click="setCurrentToNull">Отмена</Button>
				</div>
				<div
					class="inner-menu-component-button inner-menu-component-button-secondary"
				>
					<Button @click="confirmUpdate">Подтвердить</Button>
				</div>
			</div>
		</div>

		<div class="inner-menu-component-button">
			<Button @click="confirmRemove">Удалить предмет</Button>
		</div>
	</div>
</template>

<style scoped lang="scss">
.inner-menu-component {
	width: 250px;
	height: 500px;
	border-radius: 12px;
	background: #262626;
	border: 1px solid #4d4d4d;
	position: absolute;
	right: 0;
	z-index: 1;
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	padding-top: 20px;

	&-update {
		margin-top: 12px;
		&-input {
			background-color: transparent;
			border: 1px solid #4d4d4d;
			padding: 8px;
			font-size: 12px;
			border-radius: 5px;
			color: #ffff;
			transition: border-color 0.3s ease, box-shadow 0.3s ease;
			width: 100%;

			-webkit-appearance: none;
			-moz-appearance: none;
			appearance: none;

			&::-webkit-outer-spin-button,
			&::-webkit-inner-spin-button {
				-webkit-appearance: none;
				margin: 0;
			}

			&::-moz-inner-spin-button {
				-moz-appearance: none;
				margin: 0;
			}

			&::placeholder {
				color: #4d4d4d;
			}

			&:focus {
				border-color: #fa7272;
				box-shadow: 0 0 5px #fa7272;
				outline: none;
			}
		}
		&-buttons {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}

	&-button {
		margin-top: 10px;
		button {
			margin: 0 5px;
			background-color: #fa7272;
			color: #ffff;
			border: 2px solid #fa7272;
			padding: 5px;
			font-size: 11px;
			border-radius: 5px;
			cursor: pointer;
			transition: background-color 0.3s ease, color 0.3s ease,
				border-color 0.3s ease;

			&:hover {
				background-color: #ffff;
				color: #fa7272;
				border-color: #ffff;
			}
		}
		&-secondary {
			button {
				background-color: #ffff;
				color: #000000;
				border: 2px solid #ffff;
				transition: background-color 0.3s ease, color 0.3s ease,
					border-color 0.3s ease;

				&:hover {
					background-color: #fa7272;
					color: #ffff;
					border-color: #fa7272;
				}
			}
		}
	}

	&-skeleton {
		width: 190px;
		height: 198px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;

		&-elements {
			height: 10px;
			border-radius: 4px;

			background: linear-gradient(
				90deg,
				rgba(60, 60, 60, 1) 0%,
				rgba(68, 68, 68, 1) 35%,
				rgba(51, 51, 51, 1) 100%
			);
		}
		&-1element {
			margin-top: 20px;
			height: 26px;
			width: 190px;
		}
		&-2element {
			width: 155px;
			margin-top: 12px;
		}
		&-3element {
			width: 190px;
		}
		&-4element {
			width: 170px;
		}
		&-5element {
			width: 160px;
		}
		&-6element {
			width: 140px;
		}
	}
}
</style>
