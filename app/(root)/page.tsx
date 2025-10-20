import SearchForm from '@/components/SearchForm';

const Home = async ({
	searchParams,
}: {
	searchParams: Promise<{ query?: string }>;
}) => {
	const query = (await searchParams).query;

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
		</>
	);
};

export default Home;
