import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPerson } from '../redux/reducerPerson';

const FormPerson = ({ handlerClickPrevForm }) => {
	const [nom, setNom] = useState('');
	const [prénom, setPrénom] = useState('');

	const listCompanies = useSelector((state) => (state.companies))
	const listPersons = useSelector((state) => (state.persons))
	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		dispatch(addPerson({
			idCompanie: '1',
			nom: nom,
			prenom: prénom
		}))
		// dispatch(addPerson({

		// }))
		// console.log(nom,prénom)
		// handlerClickNextForm();
		// }
	};

	return (
		<div className='row'>
			<form onSubmit={onSubmit} className='mt-3 mb-3 col-md-4 col-sm-12'>

				<label>Nom</label>
				<input
					type='text'
					className='form-control mb-2 mr-sm-2 col-sm-12'
					placeholder='Nom ...'
					value={nom}
					onChange={(event) => setNom(event.target.value)}
				/>
				<label >Prénom</label>
				<input
					type='text'
					className='form-control mb-2 mr-sm-2 col-sm-12'
					placeholder='Prénom ...'
					value={prénom}
					onChange={(event) => setPrénom(event.target.value)}
				/>
				<button type='button' className='btn btn-primary mb-2' onClick={handlerClickPrevForm}>
					Preced
				</button>
				&nbsp;&nbsp;
				<button type='submit' className='btn btn-primary mb-2'>
					Enregis
				</button>
			</form>
			<div className='mt-3 mb-3 col-sm-12 col-md-4'>
				<table className="table col-10 w-100 table-dark table-hover table-striped" style={{cursor:'point'}}>
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Nom</th>
							<th scope="col">Prénom</th>
							<th scope="col">Companie</th>
							<th scope="col">Grade</th>
						</tr>
					</thead>
					<tbody>
						{[...listCompanies, ...listPersons].map((element, index) => {
							console.log(element);
							// if(){

							// }
							return (
								<tr key={index} className="datacompanie">
									<th scope="row">{index + 1}</th>
									<td>{element.nom}</td>
									<td>{element.prenom}</td>
									<td>{element.companie}</td>
									<td>{element.grade}</td>
								</tr>
							)
						}
						)
						}
					</tbody>
				</table>
			</div>
			<div className='mt-3 m-1 col-sm-12 col-md-4'>
				<table className="table col-10 w-100 table-dark table-hover table-striped" style={{cursor:'point'}}>
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Nom</th>
							<th scope="col">Prénom</th>
							<th scope="col">Companie</th>
							<th scope="col">Grade</th>
						</tr>
					</thead>
					<tbody>
						{[...listCompanies, ...listPersons].map((element, index) => {
							return (
								<tr key={index} className="datacompanie">
									<th scope="row">{index + 1}</th>
									<td>{element.nom}</td>
									<td>{element.prenom}</td>
									<td>{element.companie}</td>
									<td>{element.grade}</td>
								</tr>
							)
						}
						)
						}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default FormPerson;
