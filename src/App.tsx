import { useState } from 'react';
import './App.css';

const draft = {
	title: 'Smashing Magazine Inc.',
	price: 350,
	updatedAt: 'Nov 20',
};

function App() {
	const [drafts, setDrafts] = useState([draft]);

	function addDraft() {
		setDrafts((prev) => [...prev, draft]);
  }
  
	function resetDrafts() {
		setDrafts([draft]);
	}

	return (
		<div className='ctn'>
			<div className='add'>
				<p>Drafts</p>
				<div className='flex items-center gap-x-3'>
					<button onClick={() => addDraft()} className='btn'>
						Add Draft
					</button>
					<button
						disabled={drafts.length === 1}
						onClick={() => resetDrafts()}
						className='btn'>
						Reset
					</button>
				</div>
			</div>
			<section className='w-full drafts-ctn'>
				{drafts.map(({ title, price, updatedAt }, i) => (
					<div className={`draft ${drafts.length === 1 ? 'only' : ''}`} key={i}>
						<div className='top font-medium flex items-center justify-between pb-1'>
							<p className=' title'>{title}</p>
							<p className='price '>${price}.00</p>
						</div>
						<div className='bottom'>
							<p className='font-normal text-sm text-gray-600'>
								LAST UPDATED {updatedAt}
							</p>
						</div>
					</div>
				))}
			</section>
		</div>
	);
}

export default App;
