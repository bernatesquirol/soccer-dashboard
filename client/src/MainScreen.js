import React from 'react';
import logo from './logo.svg';
import './App.css';
import VegaComponent from './components/VegaComponent';
import {Container,Row,Col} from 'react-bootstrap'
import Grid from './components/Grid'
export default ()=>(
    <Container>
        <Row>
            <Col sm={4}>
                <h2>Classification</h2>
                <p>We want to know how close the classification is for every soccer league</p>
                <VegaComponent id='ClassificationMain'></VegaComponent>
            </Col>
            <Col sm={4}>
                <h2>Matches</h2>
                <p>We want to know how interesting are the matches in each league</p>
                <VegaComponent id='MatchesMain'></VegaComponent>
                <Grid></Grid>
                </Col>
            <Col sm={4}>
                <h2>Players</h2>
                <p>We want to know where are the top 100 players</p>
                <VegaComponent id='PlayersMain'></VegaComponent></Col>
        </Row>
    </Container>
)