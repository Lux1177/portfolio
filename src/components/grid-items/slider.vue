<template>
	<div class="marquee">
		<div
			:class="{ reverse: isReversed }"
			:style="{ animationDuration: animationSpeed }"
			class="marquee__content">
			<slot></slot>
		</div>
		<div
			:class="{ reverse: isReversed }"
			:style="{ animationDuration: animationSpeed }"
			class="marquee__content">
			<slot></slot>
		</div>
	</div>
</template>

<script lang="ts" setup>
import {computed, type ComputedRef} from 'vue';

const props = defineProps({
	speed: {
		type: Number,
		default: 10,
	},
	reverse: {
		type: Boolean,
		default: false,
	},
});

const animationSpeed: ComputedRef<string> = computed(() => `${props.speed}s`);
const isReversed: ComputedRef<boolean> = computed(() => props.reverse);

</script>

<style>
.marquee {
	@apply flex items-center justify-center overflow-hidden relative w-[100vw];
	--gap: 0.5rem;
	gap: var(--gap);
}

.marquee__content {
	@apply flex justify-start min-w-full shrink-0;
	animation: scroll linear infinite;
	gap: var(--gap);
}

.marquee__item {
	@apply whitespace-nowrap;
}

@keyframes scroll {
	from {
		transform: translateX(0);
	}

	to {
		transform: translateX(calc(-100% - var(--gap)));
	}
}

.marquee__content.reverse {
	animation: scrollReverse linear infinite;
}

@keyframes scrollReverse {
	from {
		transform: translateX(calc(-100% - var(--gap)));
	}

	to {
		transform: translateX(0);
	}
}
</style>
