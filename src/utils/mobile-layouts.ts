import PersonalInfo from "@/components/grid-items/personal-info.vue";
import SlidingText from "@/components/grid-items/sliding-text.vue";
import Map from "@/components/grid-items/map.vue";
import Resume from "@/components/grid-items/resume.vue";
import Theme from "@/components/grid-items/theme.vue";
import Instagram from "@/components/grid-items/instagram.vue";
import Github from "@/components/grid-items/github.vue";
import TechStack from "@/components/grid-items/tech-stack.vue";
import Linkedin from "@/components/grid-items/linkedin.vue";
import Email from "@/components/grid-items/email.vue";
import Education from "@/components/grid-items/education.vue";
import type {IGrid} from "@/utils/IGrid";

export const mobileLayout: IGrid[] = [
	{
		id: 1,
		component: PersonalInfo,
		h: 9,
		w: 2,
		x: 0,
		y: 2,
	},
	{
		id: 2,
		component: SlidingText,
		h: 2,
		w: 2,
		x: 0,
		y: 0,
	},
	{
		id: 3,
		component: Map,
		h: 5,
		w: 2,
		x: 0,
		y: 17,
	},
	{
		id: 4,
		component: Resume,
		h: 3,
		w: 2,
		x: 0,
		y: 11,
	},
	{
		id: 5,
		component: Theme,
		h: 3,
		w: 2,
		x: 0,
		y: 14,
	},
	{
		id: 6,
		component: TechStack,
		h: 8,
		w: 2,
		x: 0,
		y: 30,
	},
	{
		id: 7,
		component: Instagram,
		h: 4,
		w: 1,
		x: 0,
		y: 22,
	},
	{
		id: 8,
		component: Github,
		h: 4,
		w: 1,
		x: 1,
		y: 22,
	},
	{
		id: 9,
		component: Linkedin,
		h: 4,
		w: 1,
		x: 0,
		y: 26,
	},
	{
		id: 10,
		component: Email,
		h: 4,
		w: 1,
		x: 1,
		y: 26,
	},
	{
		id: 11,
		component: Education,
		h: 20,
		w: 2,
		x: 0,
		y: 38,
	},
]
