import type {IGrid} from "@/utils/IGrid";
import {mobileAboutLayout, mobileAllLayout, mobileWorkLayout} from "@/utils/mobile-layouts";
import {mdAboutLayout, mdAllLayout, mdWorkLayout} from "@/utils/md-layouts";
import {useNavbarStateStore} from "@/store/navbar";
import {mainAboutLayout, mainAllLayout, mainWorkLayout} from "@/utils/main-layouts";
import type {Ref} from "vue";

export function changeLayout(oldLayout: IGrid[], newLayout: IGrid[]): void {
	let index: number = 0
	for (const item of oldLayout) {
		item.x = newLayout[index].x
		item.y = newLayout[index].y
		item.w = newLayout[index].w
		item.h = newLayout[index].h
		index++
	}
}

export function screenLayout(layout: IGrid[], allLayout: IGrid[], aboutLayout: IGrid[], workLayout: IGrid[], rowHeight: Ref<number>): void {
	const navState: string = useNavbarStateStore().$state.tab

	if (screen.width < 800) {

		if (navState === 'all') {
			changeLayout(layout, mobileAllLayout)
		} else if (navState === 'about') {
			changeLayout(layout, mobileAboutLayout)
		} else if (navState === 'work') {
			changeLayout(layout, mobileWorkLayout)
		}

		rowHeight.value = 30
		changeLayout(allLayout, mobileAllLayout)
		changeLayout(aboutLayout, mobileAboutLayout)
		changeLayout(workLayout, mobileWorkLayout)

	} else if (screen.width < 1200) {

		if (navState === 'all') {
			changeLayout(layout, mdAllLayout)
		} else if (navState === 'about') {
			changeLayout(layout, mdAboutLayout)
		} else if (navState === 'work') {
			changeLayout(layout, mdWorkLayout)
		}

		rowHeight.value = 11
		changeLayout(allLayout, mdAllLayout)
		changeLayout(aboutLayout, mdAboutLayout)
		changeLayout(workLayout, mdWorkLayout)
	} else if (screen.width >= 1200) {

		if (navState === 'all') {
			changeLayout(layout, mainAllLayout)
		} else if (navState === 'about') {
			changeLayout(layout, mainAboutLayout)
		} else if (navState === 'work') {
			changeLayout(layout, mainWorkLayout)
		}

		rowHeight.value = 22
		changeLayout(allLayout, mainAllLayout)
		changeLayout(aboutLayout, mainAboutLayout)
		changeLayout(workLayout, mainWorkLayout)
	}
}

export function tabLayout(layout: IGrid[], allLayout: IGrid[], aboutLayout: IGrid[], workLayout: IGrid[]): void {
	const navState: string = useNavbarStateStore().$state.tab
	if (navState === 'all') {
		changeLayout(layout, allLayout)
	} else if (navState === 'about') {
		changeLayout(layout, aboutLayout)
	} else if (navState === 'work') {
		changeLayout(layout, workLayout)
	}
}