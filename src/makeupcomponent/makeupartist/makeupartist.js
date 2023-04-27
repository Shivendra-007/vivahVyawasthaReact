import axios from "axios"
import { useEffect, useState } from "react";
import Navbar from "../navigation/navbar";
import Carousel from "../carousel/Carousel";
import './makeupartist.css'

export function Data() {
    const [makeupartistList, setMakeupartistList] = useState([]);
    const [page, setPage] = useState(1);
    const [error, setError] = useState("");
    const loadData = async () => {
        try {
            let response = await axios.get("http://localhost:6062/makeup/view");
            console.log(response.data);
            if (response.data.status) {
                setMakeupartistList([...makeupartistList, ...response.data.makeupDetails]);
                setPage(page + 1);
            }
        }
        catch (err) {
            setError("Something Went Wrong")
        }
    }
    useEffect(() => {
        loadData();
    }, []);
    return <>
        <Navbar />
        <Carousel />
        <div className="container">
            <div className="row ">
                {!error && makeupartistList.map((makeupartist, index) => <div className="col-lg-3 col-md-4 col-sm-6 ">
                        <div key={index} className="card my-3">

                    <img onClick={() => makeupartist(makeupartist)} className="card-image" src={makeupartist.thumbnail} width={"100%"} height={"270px"} />
                    <div className=" card-body ">
                        <div className="card-text">
                            <p className=" title " >{makeupartist.title}</p>
                            <p className=""><span style={{ fontWeight: "500" }}> <i className="fa fa-star" style={{ color: "#fabb00" }}></i> {makeupartist.rating + " "}</span> . <span className="text-muted"> <i className="fa fa-map-marker"></i> {makeupartist.address.substring(0, 15) + "...."} </span></p>
                            <h6 className="mt-2"> Charges ₹<span className="text-bold">{makeupartist.services[0].price}</span></h6>
                        </div>
                    </div>
                </div>
                </div>
                )}
            </div>
        </div>
    </>
} 