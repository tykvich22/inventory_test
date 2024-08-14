<script setup lang="ts">
import InnerMenu from './InnerMenu.vue';
import InventoryItem from './InventoryItem.vue';
import { useItemsStore } from '../stores/items';
import { storeToRefs } from 'pinia';

const store = useItemsStore();
const { currentItem } = storeToRefs(store);

const getItem = store.getItem;
const setCurrentItem = store.setCurrentItem;
</script>

<template>
	<div class="inventory-container">
		<Transition name="slide-fade">
			<template v-if="currentItem">
				<InnerMenu :currentItem="currentItem" />
			</template>
		</Transition>
		<div class="inventory-grid">
			<div class="inventory-grid-cell" v-for="n in 25" :key="n">
				<template v-if="getItem(n)">
					<div class="inventory-grid-cell-count">
						{{ getItem(n)?.quantity }}
					</div>
					<InventoryItem
						:backgroundColor="getItem(n)?.color || '#fff'"
						widthAndHeight="48"
						@click="setCurrentItem(n)"
						:key="getItem(n)?.id"
					/>
				</template>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.inventory-container {
	position: relative;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
	transition: transform 0.5s ease, opacity 0.5s ease;
}

.slide-fade-enter-from {
	transform: translateX(100%);
	opacity: 0;
}

.slide-fade-enter-to,
.slide-fade-leave-from {
	transform: translateX(0);
	opacity: 1;
}

.slide-fade-leave-to {
	transform: translateX(100%);
	opacity: 0;
}

.inventory-grid {
	max-height: 500px;
	max-width: 525px;
	border-radius: 12px;
	border: 1px solid #4d4d4d;
	display: grid;
	grid-template-columns: repeat(5, 105px);
	grid-template-rows: repeat(5, 100px);
	background-color: #262626;
	overflow: hidden;

	&-cell {
		border-right: 1px solid #4d4d4d;
		border-bottom: 1px solid #4d4d4d;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		&:hover {
			background-color: #2f2f2f;
		}
		&-count {
			padding-left: 3px;
			padding-top: 1px;
			font-size: 10px;
			font-weight: 500;
			border-top: 1px solid #4d4d4d;
			border-left: 1px solid #4d4d4d;
			border-top-left-radius: 6px;
			min-width: 16px;
			height: 16px;
			position: absolute;
			bottom: 0;
			right: 0;
			overflow: hidden;
		}
	}
}
</style>
