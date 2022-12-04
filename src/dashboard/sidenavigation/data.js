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
				link: '/documents/taxes'
			},
			{
				title: 'Databases',
				link: '/documents/travel'
			},
			{
				title: 'Insurance',
				link: '/documents/insurance'
			}
		]
	},
	{
		section: 'Pipelines',
		icon: MessagesIcon,
		content: [
			{
				title: 'Develop',
				link: '/messages/unbox'
			},
			{
				title: 'Schedules',
				link: '/messages/unread'
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
			{
				title: 'Vacations',
				link: '/pictures/vacations'
			},
			{
				title: 'Anniversary',
				link: '/pictures/anniversary'
			},
			{
				title: 'University',
				link: '/pictures/university'
			}
		]
	},
	{
		section: 'Models',
		icon: StatisticsIcon,
		content: [
			{
				title: 'Finances',
				link: '/statistics/finances'
			},
			{
				title: 'Call Stats',
				link: '/statistics/call-stats'
			},
			{
				title: 'Trip Logs',
				link: '/statistics/trip-logs'
			}
		]
	},
	{
		section: 'Settings',
		icon: EventsIcon,
		content: [
			{
				title: 'Compute Resources',
				link: '/events/weddings'
			},
			{
				title: 'Workspace Settings',
				link: '/events/networking'
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
