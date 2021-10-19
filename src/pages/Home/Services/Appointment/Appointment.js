import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';

const Appointment = () => {
    const {serviceName} = useParams();
    const {user} = useAuth()
    
        return (
            
            <div className="container">
            <div className="row d-flex align-items-center"  >
                <div className="col-lg-6 col-12" ><img className="img-fluid" src="https://i.ibb.co/54KkFhQ/3886130.jpg" alt="" /></div>
  
            <div className="col-lg-6 col-12" >
            <h2>Make An Appoinment For: <span className='text-primary'>{serviceName}</span> </h2>
             <form>
                 <b>Paitent Name : {user.displayName}</b> <br/>
                 <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Schdule date and time:</label>
                <input type="text" className="form-control" id="exampleInputPassword1"/>   
            </div>
                 <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Doctor Name:</label>
                <input type="text" className="form-control" id="exampleInputPassword1"/>   
            </div>
            <Link to="/confirm">
                    <button> Confirm Appintment</button>
            </Link>
             </form>
            </div>
          </div>
          </div>
             
     );
};

export default Appointment;