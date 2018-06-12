import React from 'react';
import './Flat.css';



class Flat extends React.Component{
 handleClick = () => {
     //call the parent method selectFlat
     this.props.selectFlat(this.props.flat);
 }


    render(){
        // console.log('from flat',this.props.flat.imageUrl);
        const title = this.props.flat.priceCurrency + this.props.flat.price + ' - ' + this.props.flat.name;
        const flats = 
             <img className="image" alt="flat-bg" src={require(`../../assets/${this.props.flat.imageUrl}`)} /> 
        
        return (
            <div className = 'flat' onClick= {this.handleClick} >
                <div className='flat-image'> 
                    {flats}
                </div>

                <div className= 'flat-title'>
                    {title}
                </div>
            </div>

        );
    }
}

export default Flat;