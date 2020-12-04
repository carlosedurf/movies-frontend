import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { MainContent } from '../../partials/MainComponents';

import { AreaButtonBack, AreaDetails } from './styled';

import api from '../../services/api';

const Movie = () => {

    const { id } = useParams();

    const [movie, setMovie] = useState({});

    useEffect(()=>{

        const getMovie = async () => {

            const listMovie = await api.get(`/movie/${id}`);

            setMovie(listMovie.data);

        };

        getMovie();

    },[id]);

    return (
        <MainContent>
            <AreaDetails>
            
                <div className="poster">
                    <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} height="450" width="300"/>
                </div>

                <div className="details">
                    <h2>{movie.title}</h2>
                    <small className="release">{movie.release_date}</small>
                    <p className="note"><strong>AVALIAÇÃO</strong>: {movie.vote_average} - <small>({movie.vote_count} votos)</small></p>

                    <hr/>

                    <div className="area-genre">
                        {!(movie.genres === undefined) &&
                            movie.genres.map(genre=>(<span>{genre.name}</span>))
                        }
                    </div>

                    <p className="details-overview">{movie.overview}</p>
                </div>

            </AreaDetails>

            <AreaButtonBack>
                <Link to="/">Voltar para Home</Link>
            </AreaButtonBack>
        </MainContent>
    );

};

export default Movie;
