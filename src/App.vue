<script setup lang="ts">
import AvatarCard from './components/AvatarCard.vue';
import InventoryGrid from './components/InventoryGrid.vue';
import BottomComponent from './components/BottomComponent.vue';
</script>

<template>
	<div class="main">
		<div class="inventory">
			<AvatarCard />
			<InventoryGrid />
		</div>
		<div class="bottom-element">
			<BottomComponent />
		</div>
	</div>
</template>

<style scoped lang="scss">
.main {
	background-color: #1d1d1d;
	width: 849px;
	height: 660px;
}
.inventory {
	padding: 32px;
	display: flex;
	justify-content: space-between;
}

.bottom-element {
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
