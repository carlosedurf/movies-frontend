import { useState, useEffect } from 'react';
import { MainContent } from '../../partials/MainComponents';

import {
    Filter, 
    InputForm, 
    SelectForm,
    ButtonSubmit,
    CardItem,
    AreaCards,
    ButtonDetails,
    PageContainer
} from './styled';

import api from '../../services/api';

const Home = () => {

    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [genre, setGenre]  = useState(0);

    useEffect(()=>{

        const getTrendings = async () => {

            const trendings = await api.get('/');

            setMovies(trendings.data.results);

        }

        const getGenres = async () => {

            const listGenres = await api.get('/genres');

            setGenres(listGenres.data.genres);

        };

        getTrendings();
        getGenres();

    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(search != '' || genre > 0){

            let queryString;
            if(search != ''){
                queryString = 'query=' + search;
            }

            if(search == '' && genre > 0){
                queryString = 'genre=' + genre;
            }else{
                queryString += '&genre=' + genre;
            }

            const listMovies = await api.get(`/search/?${queryString}`);

            setMovies(listMovies.data.results);

        }

    };

    return (
        <MainContent>
            <Filter onSubmit={handleSubmit}>
                <div>
                    <InputForm 
                        type="text" 
                        placeholder="Pesquise o nome do filme..."
                        value={search}
                        onChange={(e)=>setSearch(e.target.value)}
                    />
                </div>

                <div>
                    <SelectForm
                        onChange={e  => setGenre(e.target.value)}
                    >
                        <option value="0">Generos</option>
                        {genres.map((gen) => (
                            <option key={gen.id} value={gen.id}>{gen.name}</option>
                        ))}
                    </SelectForm>
                </div>

                <div>
                    <ButtonSubmit>Filtrar</ButtonSubmit>
                </div>
            </Filter>

            <AreaCards>
                {movies.length > 0 &&
                    movies.map((movie) => (

                        <CardItem key={movie.id}>
                            <div className="image-card"><img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} height={341} width={226}/></div>
                            <div className="info-card">
                                <div className="card-title">{movie.title}</div> 
                                <div className="card-release">{movie.release_date}</div> 
                                <div className="card-overview">{movie.overview}</div> 
                                <div className="card-genre">
                                    <span>Ação</span>
                                    <span>Aventura</span>
                                    <span>Terror</span>
                                </div>
                                <ButtonDetails to={`/movie/${movie.id}`}>Detalhes</ButtonDetails>
                            </div>
                        </CardItem>

                ))}
                

            </AreaCards>

        </MainContent>
    );

};

export default Home;