import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Products = (props) => {

    const [products, setProducts] = useState([]);
    const [searchText, setSearchText] = useState([]);
    const [name, setName] = useState([]);
    const [price, setPrice] = useState([]);

    useEffect(() => {
        fetch('/api/products/all')
            .then(res => res.json())
            .then(data => {
                // const arr = data.sort()
                setProducts(data)
            })
            .catch(err => console.log(err));
    }, []);

    const search = () => {
        fetch(`/api/products/search?q=${searchText}`)
            .then(res => res.json())
            .then(data => {
                // const arr = data.sort()
                setProducts(data)
            })
            .catch(err => console.log(err));
    };

    const add = (e) => {
        e.preventDefault()
        fetch(`/api/products/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, price })
        })
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h1>Shop</h1>
            <div>
                Search: <input type='text' onChange={(e) => setSearchText(e.target.value)} />
                <button onClick={search}>Search</button>
            </div>
            <div>
                <h2>Add</h2>
                <form onSubmit={add}>
                    Name:<input type='text' onChange={(e) => setName(e.target.value)} /><br />
                    Price:<input type='text' onChange={(e) => setPrice(e.target.value)} />
                    <input type='submit' value='add' />
                </form>
            </div>
            {
                products.map(item => {
                    return (
                        <div key={item.id}>
                            <h3 >{item.name}</h3>
                            <p>{item.price}</p>
                            <Link to={`/${item.id}`}> Show</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products