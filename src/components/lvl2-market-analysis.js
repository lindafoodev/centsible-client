import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from './button';
import requiresLogin from './requires-login';

import { fetchPortfolio, fetchRiskOverview } from '../actions/portfolio';


export class Lvl2MarketAnalysis extends React.Component {
    componentDidMount() {
        if (this.props.year) {
            this.props.dispatch(fetchRiskOverview(this.props.year));
        } else {
            Promise.resolve(this.props.dispatch(fetchPortfolio()))
            .then(() => {
                return this.props.dispatch(fetchRiskOverview(this.props.year));
            })
        }
    }
    
    render () {    
        
        let marketRecap;
        
        if(this.props.risks !== null) {
    
          marketRecap = (
            <div>
                <section className='vector-wrapper market-width'>
                    <div className='blurb-wrapper primary-text-color list-item-heading market-width'>
                        <h4>Aggressive:</h4>
                        <p className='no-margins margin-bottom'>{this.props.risks[3].gain}%</p>
                    </div>
                    <div className='blurb-wrapper primary-text-color list-item-heading market-width'>
                        <h4>Moderate:</h4>
                        <p className='no-margins margin-bottom'>{this.props.risks[2].gain}%</p>
                    </div>  
                    <div className='blurb-wrapper primary-text-color list-item-heading market-width'>
                        <h4>Conservative:</h4>
                        <p className='no-margins margin-bottom'>{this.props.risks[1].gain}%</p>
                    </div>  
                    <div className='blurb-wrapper primary-text-color list-item-heading market-width'>
                        <h4>Mattress:</h4>   
                        <p className='no-margins margin-bottom'>0.0%</p>
                    </div>
                </section> 
                <section className='vector-wrapper market-width'>
                    <div className='blurb-wrapper primary-text-color list-item-heading market-width'>
                    <h4>Google:</h4>
                    <p className='no-margins margin-bottom'>{this.props.risks[4].gain}%</p>
                    </div>
                    <div className='blurb-wrapper primary-text-color list-item-heading market-width'>
                    <h4>AutoZone:</h4>
                    <p className='no-margins margin-bottom'>{this.props.risks[5].gain}%</p>
                    </div>  
                    <div className='blurb-wrapper primary-text-color list-item-heading market-width'>
                    <h4>Dollar Tree:</h4>
                    <p className='no-margins margin-bottom'>{this.props.risks[7].gain}%</p>
                    </div>  
                    <div className='blurb-wrapper primary-text-color list-item-heading market-width'>
                    <h4>Electronic Arts:</h4>   
                    <p className='no-margins margin-bottom'>{this.props.risks[6].gain}%</p>
                    </div>
                </section>
            </div>
          );
        }

        const handleClick = () => {
            console.log('This button links to InvestmentReturn');
        };

        return(
        <div className='medium-viewport'>  
            <h2 className='primary-heading'>Market Analysis: Year {this.props.year}</h2>
            <h3 className='secondary-heading primary-text-color'>Annual Percent Growth</h3>
            {marketRecap}
            <div className='right-align-object margin-top padding-right small-center small-no-margins small-no-padding-right'>
                <Link to='/lvl2-investment-return'>
                    <Button class='blue-button' name="View Your Returns" handleClick={handleClick}/>
                </Link>
            </div>
        </div>  
        );
    }
}

const mapStateToProps = (state, props) => ({
    risks: state.portfolio.risks,
    riskChoice: state.portfolio.riskChoice,
    previousFund: state.portfolio.previousFund,
    currentFund: state.portfolio.currentFund,
    year: state.portfolio.year,
    loading: state.portfolio.loading
});

export default requiresLogin()(connect(mapStateToProps)(Lvl2MarketAnalysis));