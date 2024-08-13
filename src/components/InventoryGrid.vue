<script setup lang="ts">
import InnerMenu from './InnerMenu.vue';
import InventoryItem from './InventoryItem.vue';
</script>

<template>
	<div class="inventory-container">
		<InnerMenu />
		<div class="inventory-grid">
			<div class="inventory-grid-cell" v-for="n in 25" :key="n">
				<div class="inventory-grid-cell-count">4</div>
				<InventoryItem backgroundColor="green" widthAndHeight="48" />
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.inventory-container {
	position: relative;
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
			width: 16px;
			height: 16px;
			position: absolute;
			bottom: 0;
			right: 0;
		}
	}
}
</style>
