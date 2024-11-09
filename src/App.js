import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaymentForm from './commonent/FormDetails';
import MainPage from './commonent/MainPage';
import PaymentSelect from './commonent/PaymentSelect';
import DonationForm from './commonent/DonationForm';
import HomePage from './commonent/HomePage';
import DonationForms from './commonent/DonationForms';
import MainDonationPage from './commonent/MainDonationPage';
import Navbar from './commonent/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Define Routes */}
        <Routes>
          {/* Main Page */}
          {/* <Route path="/" element={<MainPage />} /> */}
          <Route path='/' element={<MainPage/>}/>
          {/* <Route path='/' element={<MainDonationPage/>}/> */}

          {/* Donation Form */}
          {/* <Route path="" element={<DonationForm/>} /> */}
          {/* <Route path="/donate-page" element={<DonationForm/>} /> */}

          {/* Payment Selection Page
          <Route path="/Payment-Select" element={<PaymentSelect />} />

          {/* Payment Form Page */}
          {/* <Route path="/" element={<PaymentForm />} />  */}

        {/* <Route path="/credit-card-payment" element={<PaymentForm />} />
        <Route path="/debit-card-payment" element={<PaymentForm />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
