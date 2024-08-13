<script setup lang="ts"></script>

<template>
	<div class="bottom-component">
		<div class="bottom-component-skeleton"></div>
		<img class="bottom-component-image" src="/public/images/Vector.svg" />
	</div>
</template>

<style scoped lang="scss">
.bottom-component {
	width: 785px;
	height: 72px;
	border-radius: 12px;
	background-color: #262626;
	border: 1px solid #4d4d4d;
	display: flex;

	align-items: center;
	position: relative;

	&-skeleton {
		width: 699px;
		height: 36px;
		border-radius: 12px;
		margin-left: 15px;

		background: linear-gradient(
			90deg,
			rgba(60, 60, 60, 1) 0%,
			rgba(68, 68, 68, 1) 35%,
			rgba(51, 51, 51, 1) 100%
		);
	}
	&-image {
		position: absolute;
		right: 20px;
		bottom: 45px;
	}
}
</style>
