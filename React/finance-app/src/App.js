import React, {useState, useEffect} from 'react';
import api from './api';

const App = () => {
  const [transactions, settransactions] = useState([]);
  const [formData, setFormData]  = useState({
      amount: '',
      category: '',
      description: '',
      is_income: false,
      date: ''
});

const fetchTransactions = async () => {
  const res = await api.get('/transactions/');
  settransactions(res.data)
};

useEffect(() => {
  fetchTransactions();

}, [])

const handleInputChange = (event) => {
  const value = event.target === 'checkbox' ? event.target.checked : event.target.value;
  setFormData({
    ...formData,
    (event)
  })
}


}

export default App;
