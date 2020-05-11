import React from 'react';
import GuidanceItem from './GuidanceItem';
import { wellnessFactors } from './data.js'

export default class GuidanceContainer extends React.Component {
    renderItemInfo = () => {
        return (
            <div>
                <h3>Wellness Factors Described</h3>
                <table>
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Image</td>
                            <td>Description</td>
                            <td>Stars</td>
                            <td>Priority?</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        wellnessFactors.sort((a, b) => (a.stars > b.stars) ? -1 : 1).map(factor => <GuidanceItem key= {factor.id} factor={factor}/>)
                    }               
                    </tbody>
                </table>
            </div>
        )   
    }
    /** TODO:  Render GuidanceItems here
                Check the GuidanceItem component for the expect props
                BUG CATCHER: There's a bug in GuidanceItem that will make it fail. 
                        Can you find it? 
                        What warning did you get and how did it help you?
                        'props' is not defined. no-undef
    */
    
    render(){
        return (
            <div>
                <h2> Learn More! </h2>
                {this.renderItemInfo()}
            </div>
        )
    } 
}