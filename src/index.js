import React from 'react';
import { render } from 'react-dom';
import { text } from './state';
import './styles/bootstrap.min.css';
import './styles/index.css';




class Element extends React.Component{

	state= {
		contenu: text
	};

	componentWillMount(){
		const localStorageContenu = localStorage.getItem('lastname');
		//console.log(localStorageContenu);
		if (localStorageContenu) {
			this.setState({contenu: localStorageContenu})
		}
	}
	// dispatching an action based on state change
	componentWillUpdate(nextProps, nextState) {
	  	// Store
		localStorage.setItem("lastname", nextState.contenu);
	}

	edith(e){
		const contenu = e.target.value;
		this.setState({ contenu })
	}

	
	render(){
		return(
			<div className="container">
				<h1>Mon projet react</h1>
				<div className="row" >
					<div className="col-md-6">
						<textarea 
						className="form-control" 
						 rows="15"
						 value={ this.state.contenu }
						 onChange={(e)=>this.edith(e)}
						/>
					</div>
					<div className="col-md-6 box" >
						<p>{ this.state.contenu } </p>
					</div>
				</div>
			</div>

		)
	}
}

render(
	<Element />, 
	document.getElementById('root')
);