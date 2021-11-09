import JSONTree from 'react-json-tree';
import { Row, Container, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';

function App() {
	const [ toDisplay, setDisplay ] = useState(true);
	const [ my_json_object, setJson ] = useState();
	const theme = {
		scheme: 'summerfruit',
		author: 'christopher corley (http://cscorley.github.io/)',
		base00: '#151515',
		base01: '#202020',
		base02: '#303030',
		base03: '#505050',
		base04: '#B0B0B0',
		base05: '#D0D0D0',
		base06: '#E0E0E0',
		base07: '#FFFFFF',
		base08: '#FF0086',
		base09: '#FD8900',
		base0A: '#ABA800',
		base0B: '#00C918',
		base0C: '#1faaaa',
		base0D: '#3777E6',
		base0E: '#AD00A1',
		base0F: '#cc6633'
	};
	const handleData = (event) => {
		setJson(JSON.parse(event.target.value));
		event.preventDefault();
	};

	const handleClick = () => {
		setDisplay(false);
	};

	return (
		<div className="background">
			<div>
				<h1 style={{ textAlign: 'center' }}>JSON Formatter</h1>
				<br />
			</div>
			<div>
				{toDisplay ? (
					<Container>
						<Row>
							<Col xs={6}>
								<Form.Control
									as="textarea"
									placeholder="JSON DATA HERE"
									style={{ height: '550px', resize: 'none' }}
									onChange={handleData}
								/>
							</Col>
							<Col xs={2}>
								<Button
									style={{ marginTop: '100%', marginRight: '30%' }}
									onClick={handleClick}
									variant="primary"
								>
									Format
								</Button>{' '}
							</Col>
							<Col>
								<div style={{ textAlign: 'center' }}>
									<strong>** IMPORTANT **</strong>
									<br /> <br />
									<i>
										JSON Viewer runs entirely in the browser without sending any requests to the
										backend server.
										<br />
									</i>
									<p>&#128274;</p>
								</div>
							</Col>
						</Row>
					</Container>
				) : (
					<Container>
						<Row>
							<Col xs={6}>
								<JSONTree
									data={my_json_object}
									collectionLimit={12}
									theme={{
										extend: theme,
										// underline keys for literal values
										valueLabel: {
											textDecoration: 'underline'
										},
										// switch key for objects to uppercase when object is expanded.
										// `nestedNodeLabel` receives additional argument `expandable`
										nestedNodeLabel: ({ style }, keyPath, nodeType, expanded) => ({
											style: {
												...style,
												textTransform: expanded ? 'uppercase' : style.textTransform
											}
										})
									}}
								/>
							</Col>
						</Row>
					</Container>
				)}
			</div>
		</div>
	);
}

export default App;
