<script lang="ts" setup>

defineProps({
	particles: {
		type: Number,
		default: 20
	}
})

</script>

<template>
	<div class="particle-container">
		<div v-for="n in particles" class="particle"></div>
	</div>
</template>

<style scoped>

.particle-container .particle {
	background: radial-gradient(rgba(17, 23, 107, 0.5) 0%, rgba(157, 160, 184, 0.5) 46%, rgba(17, 23, 107, 0.5));
	border-radius: 50%;
	height: 0.035rem;
	position: absolute;
	width: 4px;
}

.particle-container .particle:nth-child(1) {
	animation: particle-motion 10s linear infinite;
	left: 42%;
	top: 12%;
}

.particle-container .particle:nth-child(2) {
	animation: particle-motion 15s linear infinite;
	left: 50%;
	top: 70%;
}

.particle-container .particle:nth-child(3) {
	animation: particle-motion 8s linear infinite;
	left: 6%;
	top: 17%;
}

.particle-container .particle:nth-child(4) {
	animation: particle-motion 12s linear infinite;
	left: 60%;
	top: 20%;
}

.particle-container .particle:nth-child(5) {
	animation: particle-motion 14s linear infinite;
	left: 10%;
	top: 67%;
}

.particle-container .particle:nth-child(6) {
	animation: particle-motion 25s linear infinite;
	left: 70%;
	top: 80%;
}

.particle-container .particle:nth-child(7) {
	animation: particle-motion 13s linear infinite;
	left: 80%;
	top: 60%;
}

.particle-container .particle:nth-child(8) {
	animation: particle-motion 18s linear infinite;
	left: 25%;
	top: 32%;
}

.particle-container .particle:nth-child(9) {
	animation: particle-motion 25s linear infinite;
	left: 25%;
	top: 90%;
}

.particle-container .particle:nth-child(10) {
	animation: particle-motion 19s linear infinite;
	left: 80%;
	top: 10%;
}

.particle-container .particle:nth-child(11) {
	animation: particle-motion 30s linear infinite;
	left: 82%;
	top: 24%;
}

.particle-container .particle:nth-child(12) {
	animation: particle-motion 35s linear infinite;
	left: 5%;
	top: 97%;
}

.particle-container .particle:nth-child(13) {
	animation: particle-motion 35s linear infinite;
	left: 60%;
	top: 97%;
}

.particle-container .particle:nth-child(14) {
	animation: particle-motion 25s linear infinite;
	left: 40%;
	top: 30%;
}

.particle-container .particle:nth-child(15) {
	animation: particle-motion 15s linear infinite;
	left: 55%;
	top: 47%;
}

.particle-container .particle:nth-child(16) {
	animation: particle-motion 10s linear infinite;
	left: 80%;
	top: 70%;
}

.particle-container .particle:nth-child(17) {
	animation: particle-motion 9s linear infinite;
	left: 40%;
	top: 40%;
}

.particle-container .particle:nth-child(18) {
	animation: particle-motion 13s linear infinite;
	left: 15%;
	top: 23%;
}

.particle-container .particle:nth-child(19) {
	animation: particle-motion 15s linear infinite;
	left: 90%;
	top: 90%;
}

.particle-container .particle:nth-child(20) {
	animation: particle-motion 25s linear infinite;
	left: 95%;
	top: 85%;
}

@keyframes particle-motion {
	0% {
		transform: translate(0);
		opacity: 1;
	}

	20% {
		transform: translate(5px -20px);
		opacity: 0.8;
	}

	40% {
		transform: translate(-10px, -30px);
		opacity: 0.7;
	}

	60% {
		transform: translate(15px, -40px);
		opacity: 0.5;
	}

	80% {
		transform: translate(-20px, -60px);
		opacity: 0.2;
	}

	100% {
		transform: translate(40px, -100px);
		opacity: 0;
	}
}

</style>