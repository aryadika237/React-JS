// Operan sebuah sistem yang ada pada React JS dan tidak dapat dirubah
import React from 'react';

export default class Operan extends React.Component {

    gantimobil = (mobil_baru) => {
        this.setState({
            mobil: mobil_baru
        })
    }
    
     render() {
         return(
         <div>
             <h2>Operan State yang menjadi Props : {this.props.mobil}</h2>
             <button onClick={() => this.gantimobil("Soto")}>Ganti Mobil</button>
         </div>
         )
     }
    }
 