import EventsIcon from './icons/EventsIcon.svelte';
import GuidesIcon from './icons/GuidesIcon.svelte';
import MessagesIcon from './icons/MessagesIcon.svelte';
import PicturesIcon from './icons/PicturesIcon.svelte';
import DocumentsIcon from './icons/DocumentsIcon.svelte';
import StatisticsIcon from './icons/StatisticsIcon.svelte';

const data = [
	{
		section: 'Explore',
		icon: DocumentsIcon,
		content: [
			{
				title: 'Notebooks',
				link: '/explore/notebooks'
			},
			{
				title: 'Databases',
				link: '/explore/databases'
			}
		]
	},
	{
		section: 'Pipelines',
		icon: MessagesIcon,
		content: [
			{
				title: 'Develop',
				link: '/pipelines/develop'
			},
			{
				title: 'Schedules',
				link: '/pipelines/schedules'
			},
			{
				title: 'History',
				link: '/pipelines/history'
			}
		]
	},
	{
		section: 'Reports',
		icon: PicturesIcon,
		content: [

		]
	},
	{
		section: 'Models',
		icon: StatisticsIcon,
		content: [

		]
	},
	{
		section: 'Settings',
		icon: EventsIcon,
		content: [
			{
				title: 'Compute Resources',
				link: '/settings/compute_resources'
			},
			{
				title: 'Workspace Settings',
				link: '/settings/workspace_settings'
			}
		]
	},
	{
		section: 'Documentation',
		icon: GuidesIcon,
		content: [
			{
				title: 'Documentation',
				link: '/guides/documentation'
			}
		]
	}
];

export default data;
