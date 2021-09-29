import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FromPerson from './components/FomPerson';
import FormCompanie from './components/FormCompanie';
const App = () => {
	const [step, setStep] = useState(0);
	const handlerClickNextForm = () => {
		setStep(prevStep => prevStep + 1);
	}
	const handlerClickPrevForm = () => {
		setStep(prevStep => prevStep - 1);
	}
	const form = (key) => {
		switch (key) {
			case 0: return (
				<FormCompanie
					handlerClickNextForm={handlerClickNextForm} />
			);
			case 1:
				return (
					<FromPerson
						handlerClickPrevForm={handlerClickPrevForm}
					/>
				);
			default:
				return null
		}
	}
	return (
		<div className='container bg-white p-4 mt-5'>
			<h2>Etape{step + 1}</h2>
			{
				form(step)
			}
		</div>
	);
};

export default App;
