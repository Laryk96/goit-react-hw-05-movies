import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/moviesAPI';
import { CastImages, CastItem, CastList, Name } from './Cast.styled';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    if (cast) {
      return;
    }

    getCast(id)
      .then(response => setCast(response.data.cast))
      .catch(console.log)
      .finally();
  }, [cast, id]);

  if (cast) {
    return (
      <>
        <CastList>
          {cast.map(({ id, name, profile_path }) => (
            <CastItem key={id}>
              <CastImages
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : 'https://img.freepik.com/premium-vector/error-404-found-glitch-effect_8024-4.jpg'
                }
                alt={name}
              />

              <Name>{name}</Name>
            </CastItem>
          ))}
        </CastList>
      </>
    );
  }

  return <h2>Loading...</h2>;
};

export default Cast;
