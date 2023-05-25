import { Link } from 'react-router-dom';

let fetchJS = require('../json/viewData.json');
fetchJS = JSON.stringify(fetchJS);
fetchJS = JSON.parse(fetchJS);
console.log(fetchJS);

const getStatus = (stat) => {
    return stat === 1 ? "Success" : "Failed";
}

const Home = () => {
    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"></link>
            
            <h1>Home</h1>

            <Link to="/add" className="btn btn-primary">Add</Link>

            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Product ID</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Status</th>
                    <th scope="col">Date</th>
                    <th scope="col">Created By</th>
                    <th scope="col">Created On</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        fetchJS.data.map((item, index) => {
                            return (
                                <>
                                    <tr>
                                    <th scope="row">{index}</th>
                                    <td>{item.productID}</td>
                                    <td>{item.productName}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.customerName}</td>
                                    <td>{getStatus(item.status)}</td>
                                    <td>{item.transactionDate}</td>
                                    <td>{item.createBy}</td>
                                    <td>{item.createOn}</td>
                                    <td>
                                        <button type="button" class="btn btn-primary">Edit</button>
                                    </td>
                                    </tr>
                                </>
                            )
                        })
                    }
                    
                </tbody>
                </table>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
        </>
    )
}

export default Home;