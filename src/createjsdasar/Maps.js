import React from 'react';

const makanans =[
    {
        nama:'Roti Flaming Floss',
        qty:'20',
        harga:9000
    },
    {
        nama:'Roti Cheese John',
        qty:'17',
        harga:9500
    },
    {
        nama:'Roti Smoked Horn',
        qty:'30',
        harga:9000
    },
    {
        nama:'Roti Black Pepper Cheese Pastry',
        qty:'21',
        harga:15000
    },
    {
        nama:'Roti Naked Buns',
        qty:'7',
        harga:15000
    },
    {
        nama:'Roti Croissant',
        qty:'10',
        harga:15000
    },
    {
        nama:'Roti Choco Raisin',
        qty:'26',
        harga:20000
    },
    {
        nama:'Roti Earthquake',
        qty:'4',
        harga:19500
    },
    {
        nama:'Roti Raisin Sun',
        qty:'14',
        harga:21000
    },
    {
        nama:'Roti Naked Standard',
        qty:'11',
        harga:17500
    }
]

const total_bayar = makanans.reduce((total_harga, makanan) => 
     total_harga+makanan.harga
, 0)

const Maps = () => {
    return (
        <div>
             <h2>Toko Roti Jaya:</h2>
             <table>
             <tr>
                 <th>No</th>
                 <th>Nama</th>
                 <th>QTY</th>
                 <th>Harga</th>
                 <th>Total Harga</th>
             </tr>
                 {makanans.map((makanan, index) =>(
                 <tr>
                    <td>{index + 1}.</td>
                    <td> {makanan.nama}</td> 
                    <td>{makanan.qty}</td> 
                    <td>=  Rp {makanan.harga}</td>
                    <td>=  Rp {makanan.qty*makanan.harga}</td>
                 </tr>
                 ))}
             
             </table>
             <h2>Promo Roti Terenak Mulai Rp 10.000 s/d 25.000</h2>
             <ul>
                 {makanans.filter((makanan) => makanan.harga > 10000)
                 .map((makanan, index) =>( 
                    <dt>{index + 1}. {makanan.nama} = Rp {makanan.harga}</dt>
                 ))}
             </ul>
             <h3>Total Bayar : {total_bayar}</h3>
         </div>
    )
}

export default Maps
 