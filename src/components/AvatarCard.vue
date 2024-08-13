<script setup lang="ts"></script>

<template>
	<div class="avatar-card">
		<div class="avatar-card-img"><img src="/public/images/nicebg.png" /></div>
		<div class="avatar-card-skeleton">
			<div
				class="avatar-card-skeleton-elements avatar-card-skeleton-1element"
			></div>
			<div
				class="avatar-card-skeleton-elements avatar-card-skeleton-2element"
			></div>
			<div
				class="avatar-card-skeleton-elements avatar-card-skeleton-3element"
			></div>
			<div
				class="avatar-card-skeleton-elements avatar-card-skeleton-4element"
			></div>
			<div
				class="avatar-card-skeleton-elements avatar-card-skeleton-5element"
			></div>
			<div
				class="avatar-card-skeleton-elements avatar-card-skeleton-6element"
			></div>
			<div
				class="avatar-card-skeleton-elements avatar-card-skeleton-7element"
			></div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.avatar-card {
	background-color: #262626;
	width: 236px;
	height: 500px;
	border-radius: 12px;
	border: 1px solid #4d4d4d;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	padding: 15px 0;

	&-img {
		width: 208px;
		height: 240px;
		border-radius: 8px;
		overflow: hidden;
		position: relative;

		img {
			position: absolute;
			top: -420px;
			left: -210px;
			right: 0;
			width: 210%;
			filter: blur(3px);
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
		&-7element {
			width: 80px;
			margin-top: 12px;
		}
	}
}
</style>
