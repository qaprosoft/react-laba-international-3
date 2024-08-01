import Projects from '@/containers/Projects';
import MainLayout from '@/layout/MainLayout';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function ProjectsPage() {
	return (
		<MainLayout>
			<Projects />
		</MainLayout>
	);
}
