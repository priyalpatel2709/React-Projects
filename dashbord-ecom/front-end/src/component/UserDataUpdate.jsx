import React,{useEffect,useState} from 'react';
import axios from 'axios';

const UserDataUpdate = () => {
    const auth = localStorage.getItem("user");
    const [userProducts, setUserProducts] = useState([]);
    useEffect(() => {
        if (auth) {
          const userId = JSON.parse(auth)._id;
          getUserProducts(userId);
        }
      }, [auth]);
      const getUserProducts = async (userId) => {
        try {
          const response = await axios.get(`http://127.0.0.1:5000/products/user/${userId}`, {
            headers: {
              authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
            },
          });
    
          const result = response.data;
          setUserProducts(result);
        } catch (error) {
          alert("Something went wrong...");
        }
      };
  return (
    <div>
      <h3>User Products:</h3>
      {userProducts.length > 0 && (
            <li>
              
              <ul>
                {userProducts.map((product) => (
                  <li key={product._id}>{product.name}</li>
                ))}
              </ul>
            </li>
          )}
    </div>
  );
}

export default UserDataUpdate;
