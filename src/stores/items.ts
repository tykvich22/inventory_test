import { ref, watchEffect } from 'vue';
import { defineStore } from 'pinia';

export interface Item {
	id: number;
	color: string;
	quantity: number;
}

export const useItemsStore = defineStore('items', () => {
	const storedItems = localStorage.getItem('items');

	const items = ref<Item[]>(
		storedItems
			? JSON.parse(storedItems)
			: [
					{ id: 1, color: '#7FAA65', quantity: 10 },
					{ id: 2, color: '#AA9765', quantity: 4 },
					{ id: 3, color: '#656CAA', quantity: 8 },
			  ]
	);

	const currentItem = ref<Item | null>(null);

	console.log(items.value);

	const getItem = (id: number) => {
		return items.value.find((item) => item.id === id);
	};

	const setCurrentItem = (id: number) => {
		currentItem.value = getItem(id) || null;
	};

	const setCurrentToNull = () => {
		currentItem.value = null;
	};

	const updateItemQuantity = (id: number, newQuantity: number) => {
		const item = getItem(id);

		if (item) {
			if (newQuantity < 1) {
				removeItem(id);
			} else {
				item.quantity = newQuantity;
			}
		}
	};

	const removeItem = (id: number) => {
		items.value = items.value.filter((item) => item.id !== id);

		if (currentItem.value?.id === id) {
			setCurrentToNull();
		}
	};

	const updateItemId = (currentId: number, newId: number) => {
		if (getItem(newId)) {
			console.error(`Данное поле уже занято!`);
			return;
		}

		const item = getItem(currentId);
		if (item) {
			item.id = newId;
			if (currentItem.value?.id === currentId) {
				currentItem.value = item;
			}
		} else {
			console.error(`Поле не найдено`);
		}
	};

	watchEffect(() => {
		localStorage.setItem('items', JSON.stringify(items.value));
	});

	return {
		items,
		getItem,
		currentItem,
		setCurrentItem,
		setCurrentToNull,
		updateItemQuantity,
		removeItem,
		updateItemId,
	};
});
