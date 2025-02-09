import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCompaniesAsync ,addCompanieAsync} from '../redux/reducerCompanieAsync ';
import { addCompanie, deleteCompanie } from '../redux/reducerCompanie';

const FormCompanie = ({ handlerClickNextForm }) => {
	const [grade, setGrade] = useState('');
	const [companie, setCompanie] = useState('');
	const [gradeApi, setGradeApi] = useState('');
	const [companieApi, setCompanieApi] = useState('');
	const listCompanie = useSelector((state) => (state.companies))
	const listCompanieApi = useSelector((state) => (state.companieAsync))
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCompaniesAsync())
	}, [dispatch])

	const onSubmit = (event) => {
		event.preventDefault();
		// console.dir(event);
		if (companie && grade) {
			dispatch(addCompanie({
				companie: companie,
				grade: grade
			}))
		}
		setCompanie("");
	};
	const onSubmitApi = (event) => {
		event.preventDefault();
		event.stopPropagation();
		if (companieApi && gradeApi) {
			dispatch(addCompanieAsync({
				companie: companieApi,
				grade: gradeApi
			}))
		}
		setCompanieApi("");
		setGradeApi("");
	};
	const handlerClickDeleteCompanie = (id) => {
		dispatch(deleteCompanie({
			id: id
		}))
	}

	return (
		<>
			<div className='row mt-3'>
				<div className='mt-3 mb-3 col-sm-8'>
					<h3>Local</h3>
					<table className="table col-sm-10 w-25 table-dark table-hover table-striped">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">Companie</th>
								<th scope="col">Grade</th>
								<th scope="col">Delete</th>
								<th scope="col">Modifier</th>
							</tr>
						</thead>
						<tbody>
							{
								listCompanie.map((element, index) => {
									// console.log(companie);
									return (
										<tr key={index} className="datacompanie">
											<th scope="row">{index + 1}</th>
											<td>{element.companie}</td>
											<td>{element.grade}</td>
											<td>
												<button type='button' className='btn btn-danger m-1' onClick={() => { handlerClickDeleteCompanie(element.id) }}  >
													Supprimer
												</button>
											</td>
											<td>
												<button type='button' className='btn btn-primary m-1'  >
													Modifier
												</button>
											</td>
										</tr>
									)
								})
							}
						</tbody>
					</table>
				</div>
				<form onSubmit={onSubmit} className='mt-3 mb-3 col-sm-12 col-md-4 col-lg-4'>
					<label>Companie</label>
					<input
						type='text'
						name="companie"
						className='form-control mb-2 mr-sm-2'
						placeholder='Companie..'
						value={companie}
						onChange={(event) => setCompanie(event.target.value)}
					/>
					<label >Grade</label>
					<input
						type='text'
						name="grande"
						className='form-control mb-2 mr-sm-2'
						placeholder='grade'
						value={grade}
						onChange={(event) => setGrade(event.target.value)}
					/>
					<button type='submit' className='btn btn-success mb-2 mg-10'>
						Enregistrer
					</button>
					&nbsp;&nbsp;

					<button type='button' className='btn btn-primary mb-2  mg-10' onClick={handlerClickNextForm} >
						Suivant
					</button>
				</form>
			</div>
			<div className='row mt-3'>
				<div className='mt-3 mb-3 col-sm-8'>
					<h3>API</h3>
					<table className="table col-sm-10 w-100 table-dark table-hover table-striped">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">Companie</th>
								<th scope="col">Grade</th>
								<th scope="col">Delete</th>
								<th scope="col">Modifier</th>
							</tr>
						</thead>
						<tbody>
							{
								listCompanieApi.map((element, index) => {
									// console.log(companie);
									return (
										<tr key={index} className="datacompanie">
											<th scope="row">{index + 1}</th>
											<td>{element.companie}</td>
											<td>{element.grade}</td>
											<td>
												<button type='button' className='btn btn-danger m-1' onClick={() => { handlerClickDeleteCompanie(element.id) }}  >
													Supprimer
												</button>
											</td>
											<td>
												<button type='button' className='btn btn-primary m-1'  >
													Modifier
												</button>
											</td>
										</tr>
									)
								})
							}
						</tbody>
					</table>
				</div>
				<form onSubmit={onSubmitApi} className='mt-3 mb-3 col-sm-12 col-md-4 col-lg-4'>
					<label>Companie</label>
					<input
						type='text'
						name="companie"
						className='form-control mb-2 mr-sm-2'
						placeholder='Companie..'
						value={companieApi}
						onChange={(event) => setCompanieApi(event.target.value)}
					/>
					<label >Grade</label>
					<input
						type='text'
						name="grande"
						className='form-control mb-2 mr-sm-2'
						placeholder='grade'
						value={gradeApi}
						onChange={(event) => setGradeApi(event.target.value)}
					/>
					<button type='submit' className='btn btn-success mb-2 mg-10'>
						Enregistrer
					</button>
					&nbsp;&nbsp;

					<button type='button' className='btn btn-primary mb-2  mg-10' onClick={handlerClickNextForm} >
						Suivant
					</button>
				</form>
			</div>
		</>
	);
};

export default FormCompanie;
