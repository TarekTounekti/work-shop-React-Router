import {Link,Routes,Route} from 'react-router-dom';

import Admin from'./Admin';
import Category from'./Category';
import Home from './Home';
import Product from './Product';
const Navbar =()=> {
return(
   
<>
    
<nav>
<ul>

<li><Link to="/">Home</Link></li>
<li><Link to="/category">Category</Link></li>
<li><Link to="/product">Product</Link></li>
<li><Link to="/admin">Admin</Link></li>

</ul>
</nav>
<Routes>

 <Route path="/"  element={<Home/>}/> 
 <Route path="/category" element={<Category/>}/>
 <Route path="/product"  element={<Product/>}/> 
 <Route path="/admin"  element={<Admin/>}/> 


</Routes>
</>


);

}
export default Navbar;