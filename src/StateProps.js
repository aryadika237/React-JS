// Props sebuah sistem yang ada pada React JS dan dapat dirubah
import React from 'react';
import Operan from './Operan';

 export default class StateProps extends React.Component {
     constructor(props) {
         super (props);
         this.state = {
             makanan : 'Bakso'
         }
        }

        gantiMakanan = (makanan_baru) => {
            this.setState({
                makanan: makanan_baru
            })
        }
        // Link makanan baru adalah link yang dibuat dengan cara manual
        render() {
            return (
                <div>
                    <h2>{this.state.makanan}</h2>
                    <button onClick={() => this.gantiMakanan("Soto")}>Ganti Makanan</button>
                    <Operan makanan = {this.state.makanan}/>
                </div>
            )
        }
    }
