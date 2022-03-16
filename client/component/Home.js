import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Home = (props) => {
    console.log(props)
    let {server_data} = props;
    console.log(server_data);
      return (
        <p>{server_data}</p>
      );
      
  }
  
  export default Home;