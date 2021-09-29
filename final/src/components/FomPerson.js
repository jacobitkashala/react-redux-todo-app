import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPerson } from '../redux/reducerPerson';

const FormPerson = ({ handlerClickPrevForm }) => {
	const [nom, setNom] = useState('');
	const [prénom, setPrénom] = useState('');

	const listCompanies = useSelector((state) => (state.companies))
	const listPersons = useSelector((state) => (state.persons))
	const dispatch = useDispatch();

	const handlerClickDeletePerson = (id) => {
		console.log(id);
	}
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
		<>
			<div className='row mt-3'>
				<div className='col-sm-8'>
					<h3>Local</h3>
					<table className="table col-sm-10 w-25 table-dark table-hover table-striped">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">Nom</th>
								<th scope="col">Prénom</th>
								<th scope="col">Companie</th>
								<th scope="col">Grade</th>
								<th scope="col">Supprimer</th>
								<th scope="col">Modifier</th>
							</tr>
						</thead>
						<tbody>
							{
								[...listPersons, ...listCompanies].map((element, index) => {
									// console.log(companie);
									return (
										<tr key={index} className="datacompanie">
											<th scope="row">{index + 1}</th>


											<td>{element.nom}</td>
											<td>{element.prenom}</td>
											<td>{element.companie}</td>
											<td>{element.grade}</td>
											<td>
												<button type='button' className='btn btn-danger m-1' onClick={() => { handlerClickDeletePerson(element.id) }}  >
													supprimer
												</button>
											</td>
											<td>
												<button type='button' className='btn btn-primary m-1'  >
													modifier
												</button>
											</td>
										</tr>
									)
								})
							}
						</tbody>
					</table>
				</div>
				<form onSubmit={onSubmit} className='col-sm-12 col-md-4 col-lg-4'>
					<h3>Information</h3>
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

					<button type='submit' className='btn btn-success mb-2 mg-10'>
						Enre
					</button>
					&nbsp;&nbsp;

					<button type='button' className='btn btn-primary mb-2  mg-10' onClick={handlerClickPrevForm} >
						Prec
					</button>
				</form>
			</div>
			<div className='row mt-3'>
				<div className='col-sm-8'>
					<h3>Local</h3>
					<table className="table col-sm-10 w-25 table-dark table-hover table-striped">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">Nom</th>
								<th scope="col">Prénom</th>
								<th scope="col">Companie</th>
								<th scope="col">Grade</th>
								<th scope="col">Supprimer</th>
								<th scope="col">Modifier</th>
							</tr>
						</thead>
						<tbody>
							{
								[...listPersons, ...listCompanies].map((element, index) => {
									console.log(element);
									return (
										<tr key={index} className="datacompanie">
											<th scope="row">{index + 1}</th>


											<td>{element.nom}</td>
											<td>{element.prenom}</td>
											<td>{element.companie}</td>
											<td>{element.idCompani}</td>
											<td>
												<button type='button' className='btn btn-danger m-1' onClick={() => { handlerClickDeletePerson(element.id) }}  >
													supprimer
												</button>
											</td>
											<td>
												<button type='button' className='btn btn-primary m-1'  >
													modifier
												</button>
											</td>
										</tr>
									)
								})
							}
						</tbody>
					</table>
				</div>
				<form onSubmit={onSubmit} className='col-sm-12 col-md-4 col-lg-4'>
					<h3>Information</h3>
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

					<button type='submit' className='btn btn-success mb-2 mg-10'>
						Enre
					</button>
					&nbsp;&nbsp;

					<button type='button' className='btn btn-primary mb-2  mg-10' onClick={handlerClickPrevForm} >
						Prec
					</button>
				</form>
			</div>
		</>

	);
};

export default FormPerson;
