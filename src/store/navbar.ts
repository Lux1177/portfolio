import {defineStore} from 'pinia'

interface INavbarTab {
	tab: string
}

const defaultValue: INavbarTab = {
	tab: 'all'
}

export const useNavbarStateStore = defineStore('nav-state', {
	state: () => defaultValue,
	actions: {
		set(tab: string) {
			this.tab = tab
		}
	}
})

