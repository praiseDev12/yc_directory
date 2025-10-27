import SearchForm from '@/components/SearchForm';
import StartupCard from '@/components/StartupCard';
import { STARTUPS_QUERY } from '@/sanity/lib/queries';

import { StartupTypeCard } from '@/components/StartupCard';
import { sanityFetch, SanityLive } from '@/sanity/lib/live';
import { auth } from '@/auth';

const Home = async ({
	searchParams,
}: {
	searchParams: Promise<{ query?: string }>;
}) => {
	const query = (await searchParams).query;
	const params = { search: query || null };

	const { data: posts } = await sanityFetch({
		query: STARTUPS_QUERY,
		params,
	});

	const session = await auth();

	return (
		<>
			<section className='pink_container pattern'>
				<h1 className='heading'>
					Pitch your startup <br /> Connect with Entrepreneurs
				</h1>

				<p className='sub-heading max-w-3xl'>
					Submit ideas. Vote on Pitches, and Get Noticed in Vitual Competitions.
				</p>

				<SearchForm query={query} />
			</section>

			<section className='section_container'>
				<p className='text-30-semibold'>
					{query ? `Search results for "${query}"` : 'All startups'}
				</p>

				<ul className='mt-7 card_grid'>
					{posts?.length > 0 ? (
						posts.map((post: StartupTypeCard) => (
							<StartupCard key={post?._id} post={post} />
						))
					) : (
						<p className='no-results'>No Startups found</p>
					)}
				</ul>
			</section>

			<SanityLive />
		</>
	);
};

export default Home;
