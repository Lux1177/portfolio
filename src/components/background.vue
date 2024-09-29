<script lang="ts" setup>

</script>

<template>

	<div class="lines mx-auto h-full min-h-min right-0 top-0 w-[90vw] -z-40">
		<div class="line"/>
		<div class="line"/>
		<div class="line"/>
		<div class="line"/>
		<div class="line"/>
		<div class="line"/>
		<div class="line"/>
		<div class="line"/>
		<div class="line"/>
		<div class="line"/>
	</div>

</template>

<style>

#app {
	@apply min-h-max h-full w-full bg-[#dad9dd] light-bg-gradient dark:dark-bg-gradient;
	animation: gradient-animation 300s ease infinite;
	background-size: 960% 960%;
}

@keyframes gradient-animation {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}


.line {
	@apply absolute w-[1px] min-h-max h-full top-0 left-1/2 bg-[#cfd2d5] dark:bg-[#13171a] overflow-hidden after:block after:absolute
	after:h-[15vh] after:-top-1/4 after:w-full after:left-0 after:bg-gradient-to-b from-[#cfd2d5] to-[#a7acb2]
	dark:from-gray-800/50 dark:to-white/20;
}

.line::after {
	-webkit-animation: drop 20s 0s infinite;
	animation: drop 20s 0s infinite;
	-webkit-animation-fill-mode: forwards;
	animation-fill-mode: forwards;
	-webkit-animation-timing-function: cubic-bezier(0.1, 0.1, 0, 0.1);
	animation-timing-function: cubic-bezier(0.1, 0.1, 0.1, 0.1);
}

@media only screen and (max-width: 768px) {
	.line::after {
		-webkit-animation: drop 40s 0s infinite;
		animation: drop 40s 0s infinite;
		-webkit-animation-fill-mode: forwards;
		animation-fill-mode: forwards;
		-webkit-animation-timing-function: cubic-bezier(0.1, 0.1, 0, 0.1);
		animation-timing-function: cubic-bezier(0.1, 0.1, 0.1, 0.1);
	}
}

.line:nth-child(1) {
	margin-left: -50%;
}

.line:nth-child(1)::after {
	-webkit-animation-delay: 2s;
	animation-delay: 2s;
}

.line:nth-child(2) {
	margin-left: -40%;
}

.line:nth-child(2)::after {
	-webkit-animation-delay: 0.5s;
	animation-delay: 0.5s;
}

.line:nth-child(3) {
	margin-left: -30%;
}

.line:nth-child(3)::after {
	-webkit-animation-delay: 2.5s;
	animation-delay: 2.5s;
}

.line:nth-child(4) {
	margin-left: -20%;
}

.line:nth-child(4)::after {
	-webkit-animation-delay: 0.9s;
	animation-delay: 0.9s;
}

.line:nth-child(5) {
	margin-left: -10%;
}

.line:nth-child(5)::after {
	-webkit-animation-delay: 1s;
	animation-delay: 1s;
}

.line:nth-child(6) {
	margin-left: 0;
}

.line:nth-child(6)::after {
	-webkit-animation-delay: 2.3s;
	animation-delay: 2.3s;
}

.line:nth-child(7) {
	margin-left: 10%;
}

.line:nth-child(7)::after {
	-webkit-animation-delay: 1.2s;
	animation-delay: 1.2s;
}

.line:nth-child(8) {
	margin-left: 20%;
}

.line:nth-child(8)::after {
	-webkit-animation-delay: 1.9s;
	animation-delay: 1.9s;
}

.line:nth-child(9) {
	margin-left: 30%;
}

.line:nth-child(9)::after {
	-webkit-animation-delay: 1.1s;
	animation-delay: 1.1s;
}

.line:nth-child(10) {
	margin-left: 40%;
}

.line:nth-child(10)::after {
	-webkit-animation-delay: 2.1s;
	animation-delay: 2.1s;
}

@-webkit-keyframes drop {
	0% {
		top: -50%;
	}
	100% {
		top: 110%;
	}
}

@keyframes drop {
	0% {
		top: -50%;
	}
	100% {
		top: 110%;
	}
}

</style>