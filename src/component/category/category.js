import { useSelector } from "react-redux";
import "./category.css"
function Category() {
  const{categoryList,isLoding,error}=useSelector((state)=>state.category)

    return <div className="container-fluid">
         <div class="container">
        <div className="row">
            <div className="mt-4 col-lg-12">
                <h2>Categories</h2>
            </div>
        </div>
        </div>

 <div class="container">
  <div class="row">
    <div class="card">
        <div className="innerDiv">
      <img src="https://picsum.photos/300/200"/>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>

    <div class="card">
        <div className="innerDiv">
      <img src="https://picsum.photos/300/200/"/>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>

     <div class="card">
        <div className="innerDiv">
      <img src="https://picsum.photos/300/200"/>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>

     <div class="card">
      <div className="innerDiv">
      <img src="https://picsum.photos/300/200"/>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>  
    </div>

    <div class="card">
      <div className="innerDiv">
      <img src="https://picsum.photos/300/200"/>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>  
    </div>


    <div class="card">
      <div className="innerDiv">
      <img src="https://picsum.photos/300/200"/>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>  
    </div>


  </div>
</div>
    </div>



}

export default Category;