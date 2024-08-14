<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
	backgroundColor: {
		type: String,
		required: true,
	},
	widthAndHeight: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<div class="container">
		<div
			:style="{
				width: widthAndHeight + 'px',
				height: widthAndHeight + 'px',
				backgroundColor: backgroundColor,
			}"
			class="rectangle1"
		>
			<div
				:style="{
					width: widthAndHeight + 'px',
					height: widthAndHeight + 'px',
					backgroundColor: backgroundColor,
				}"
				class="rectangle2"
			></div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.container {
	cursor: pointer;
	margin-top: 7px;
	margin-right: 7px;

	.rectangle1 {
		position: relative;

		.rectangle2 {
			position: absolute;
			opacity: 0.3;
			bottom: 10px;
			left: 10px;
		}
	}
}
</style>
