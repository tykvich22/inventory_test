<script setup lang="ts">
import InnerMenu from './InnerMenu.vue';
import InventoryItem from './InventoryItem.vue';
import { useItemsStore } from '../stores/items';
import { storeToRefs } from 'pinia';
import draggableComponent from 'vuedraggable';

const store = useItemsStore();
const { currentItem } = storeToRefs(store);

const getItem = store.getItem;
const setCurrentItem = store.setCurrentItem;
const updateItemId = store.updateItemId;

const items = Array.from({ length: 25 }, (_, i) => i + 1);

const onEnd = (event: any) => {
	const { oldIndex, newIndex } = event;

	updateItemId(oldIndex + 1, newIndex + 1);
};
</script>

<template>
	<div class="inventory-container">
		<Transition name="slide-fade">
			<template v-if="currentItem">
				<InnerMenu :currentItem="currentItem" />
			</template>
		</Transition>

		<draggableComponent
			v-model="items"
			@end="onEnd"
			group="items"
			item-key="id"
			class="inventory-grid"
		>
			<template #item="{ element }">
				<div class="inventory-grid-cell" :key="element">
					<template v-if="getItem(element)">
						<div class="inventory-grid-cell-count">
							{{ getItem(element)?.quantity }}
						</div>
						<InventoryItem
							:backgroundColor="getItem(element)?.color || '#fff'"
							widthAndHeight="48"
							@click="setCurrentItem(element)"
							class="drag-handle"
						/>
					</template>
				</div>
			</template>
		</draggableComponent>
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
}

.inventory-grid-cell {
	border-right: 1px solid #4d4d4d;
	border-bottom: 1px solid #4d4d4d;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
}

.inventory-grid-cell:hover {
	background-color: #2f2f2f;
}

.inventory-grid-cell-count {
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
</style>
