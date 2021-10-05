import React from "react";

import fundImg from '../img/7.jpg'
import mapMarkerImg from '../img/marker@2x.png';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
// import { MapContainer, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import '../styles/pages/orphanage-map.css'

function OrphanageMap() {
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="logo" />
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita </p>
                </header>
                <footer>
                    <strong>Guarulhos</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>

            <div>
                <img src={fundImg} alt="fundo" className="img-background" />
            </div> 

         {/* <MapContainer
        center={[-23.430065,-46.5043665]}
        zoom={17}
        style={{width: '100%', height: '100%'}}
        />
         {/* <TileLayer url="https://a.title.openstreetmap.org/{z}/{x}/{y}.png" /> *
         <TileLayer 
         url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
                 <MapContainer/>   */}

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#fff"/>
            </Link>

            
        </div>
    )
}

export default OrphanageMap;