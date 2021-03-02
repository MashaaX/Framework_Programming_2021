import React, { Component } from 'react';
import Image from './Image'; class List extends Component {
    render() {
        return (
            <div>
                <ol>
                    <li>
                        Satu
                        <br></br>
                        <Image linkGambar='https://www.nme.com/wp-content/uploads/2017/07/RICK_ROLL.jpg' />
                    </li>
                    <li>
                        Dua
                        <br></br>
                        <Image linkGambar='https://www.wellandgood.com/wp-content/uploads/2019/01/Stocksy-avocados-pits-Marti-Sans.jpg' />
                    </li>
                    <li>
                        Tiga
                        <br></br>
                        <Image linkGambar='https://www.makanabis.com/bima-content/2020/02/28/l-shutterstock4743902080015a07bbcef08479ca6dd5f850fa59c20200228141316-bimacms.jpg' />
                    </li>
                    <li>
                        Empat
                        <br></br>
                        <Image linkGambar='https://www.unileverfoodsolutions.co.id/dam/global-ufs/mcos/SEA/calcmenu/recipes/ID-recipes/chicken-&-other-poultry-dishes/soto-ayam-lamongan/main-header.jpg' />
                    </li>
                </ol>
            </div>
        );
    }
} 
export default List;