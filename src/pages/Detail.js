
import { useParams } from "react-router"
import { useContext,useEffect } from "react";
import Courses from "../components/Courses";
import Modal from "../components/Modal";
import {UserContext} from "../contexts/UserContext"
const Detail = () => {
  const { id } = useParams();
  const {details,setCurrentUser,currentUser,users,courses} = useContext(UserContext)
  

    
    useEffect(() => {
      const currentDetail = details.find((r) => r.user_id === +id);
      const selectedUser = users.find(r=> r.id === +id)
      const currentCourse = courses.find((r) => r.user_id === +id);
     
      
     setCurrentUser({...currentDetail,...selectedUser,...currentCourse});
    }, [id,details])
    
    
  // console.log(details)
  // console.log(currentUser)
  

  // console.log();

  return (
    <div className="container_detail">
      {currentUser ? (
        <div className="profile" key={currentUser.user_id}>
          <br />
          <p className="title_detail">Profile</p>

          <div className="profile_info">
            <p> Name : {currentUser.name}</p>
            <p>Age : {currentUser.age}</p>
            <p>Job : {currentUser.job}</p>
          </div>
          <Courses id={id} />
          <Modal />
        </div>
      ) : (
        <p>data yok</p>
      )}
    </div>
  );
};

export default Detail;
