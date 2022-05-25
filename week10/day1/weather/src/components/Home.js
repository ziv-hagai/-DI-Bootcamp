import City from './City';
import Week from './Week';

function Home() {
    return (
        <div >
            <strong>add to favs</strong>
            <City />
            <div id='week'>
                <Week />
            </div>
        </div>

    );
}

export default Home;
