export function ServiceCardSkeleton() {
	return (
		<div className='bg-white rounded-lg shadow-lg overflow-hidden animate-pulse'>
			<div className='h-64 bg-gray-200'></div>
			<div className='p-6'>
				<div className='h-6 bg-gray-200 rounded w-3/4 mb-4'></div>
				<div className='h-4 bg-gray-200 rounded w-full mb-4'></div>
				<div className='h-8 bg-gray-200 rounded w-1/3 mb-4'></div>
				<div className='space-y-2'>
					{[1, 2, 3, 4].map((i) => (
						<div key={i} className='flex items-center'>
							<div className='w-2 h-2 bg-gray-200 rounded-full mr-2'></div>
							<div className='h-4 bg-gray-200 rounded w-2/3'></div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
