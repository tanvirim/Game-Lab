
import useTrailers from "../hooks/useTrailers";
interface Props{
  gameId: number
}
const GameTrailer = ({gameId}:Props) => {
  const { data, isLoading, isError } = useTrailers( gameId);
 const first = data?.results[0]
 if(isLoading) return <p>trailer loading.....</p>
 if(isError) return <p>error fetching trailer..</p>
  return  first?  ( <video src={first.data[480]}
  poster={first.preview } controls /> ): null
};

export default GameTrailer;
