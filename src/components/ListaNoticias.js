import React from 'react'
import Noticia from './Noticia'
import PropTypes from 'prop-types';


const ListaNoticias = ({noticias}) => (
        <div className="container">
        <div className="row d-flex justify-content-center ">
            {noticias.map(noticia => (
                <Noticia
                    key = {noticia.url}
                    noticia = {noticia}
                />
                
            ))}
        </div>
        </div>
);

ListaNoticias.propTypes = {

    noticias : PropTypes.array.isRequired
}

export default ListaNoticias;