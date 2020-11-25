import React, { useState } from 'react';
import './App.css';
import dataSource from './contacts.json';
import { Table, Button } from 'antd';


const fFive = dataSource.slice(0, 5)
const rest = dataSource.slice(5)

// console.log(rest);


// const data = fFive;



function App() {
  const [data, setData] = useState(fFive)

  function addRandom() {
    const randomIndex = Math.floor(Math.random() * rest.length)
    // const dataCopy = [...data]
    // dataCopy.push(rest[randomIndex])
    // setData(dataCopy)
    setData([...data, rest[randomIndex]])
    rest.splice(randomIndex, 1)
    // console.log('added', data);
  }

  function deleteElement(id) {
    setData(data.filter(el => el.id != id))
  }


  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: 150,
    },
    {
      title: 'pictureUrl',
      dataIndex: 'pictureUrl',
      width: 150,
      render: (image) => <img src={image} style={{ width: '25px' }} />,
    },
    {
      title: 'popularity',
      dataIndex: 'popularity',
    },
    {
      title: 'id',
      dataIndex: 'id',
      render: id => <Button danger onClick={() => deleteElement(id)}>
        Delete
      </Button>
    },
  ];


  return (
    <div className="App">
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 50 }}
      // scroll={{ y: 240 }}
      />
      <Button block type='primary' onClick={addRandom}>Add random</Button>
    </div>
  );
}

export default App;
