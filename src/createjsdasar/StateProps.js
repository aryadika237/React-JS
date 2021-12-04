// Props sebuah sistem yang ada pada React JS dan dapat dirubah
import React from 'react';
import Operan from './Operan';

 export default class StateProps extends React.Component {
     constructor(props) {
         super (props);
         this.state = {
             mobil : 'BMW',
             mobil2 : 'Ferari'
         }
        }
        gantimobil2 = (mobil_baru2) => {
            this.setState({
                mobil2: mobil_baru2
            })
        }

        gantimobil = (mobil_baru) => {
            this.setState({
                mobil: mobil_baru
            })
        }
        // Link makanan baru adalah link yang dibuat dengan cara manual
        render() {
            return (
                <div>
                    <h2>{this.state.mobil}</h2>
                    
                    <button onClick={() => this.gantimobil("Galardo")}>Ganti Mobil</button>
                    <Operan mobil = {this.state.mobil}/>
                </div>
            )
        }
    }
