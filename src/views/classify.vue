<template>
	<div class="main">
		<top></top>
		<div class="none">
			<subHeader></subHeader>
		</div>
		<classifyWrapper></classifyWrapper>
		<siderBar></siderBar>
		<bottom></bottom>
	</div>
</template>

<script>
	import top from '../components/header'
	import subHeader from '../components/subHeader'
	import classifyWrapper from '../components/classifyWrapper'
	import siderBar from '../components/siderBar'
	import bottom from '../components/footer'

	export default {
		name: 'app',
		components: {
			top,
			subHeader,
			classifyWrapper,
			siderBar,
			bottom
		}
	}
</script>
