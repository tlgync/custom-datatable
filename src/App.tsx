import { useEffect } from 'react';
import DataTable from './components/DataTable';
import { Switch } from './components/Switch';
import data from './data/data.json'

// interface of the content to be used
export interface ITemp {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  status: boolean;
}

function App() {

  // DataTable columns config
  const columns: IColumn<ITemp>[] = [
    {
      name: "Firstname",
      selector: row => row.firstname,
    },
    {
      name: "Lastname",
      selector: row => row.lastname,
    },
    {
      name: "Email",
      selector: row => row.email
    },
    {
      name: "Status",
      selector: row => row.status
    },
  ];

  console.log("git test 2")


  // set initial theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
  }, [])

  const changeTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
      document.documentElement.setAttribute('data-theme', 'light');
    }

  }


  return (
    <>
      <Switch onChange={(e) => changeTheme(e)} />
      <DataTable
        data={data}
        columns={columns}
        onRowSelected={(item) => console.log(item)}
        rowStyle={{ width: 100, height: 60 }}
        editable
      // cellStyle={{background:'pink'}}
      />
    </>
  );
}

export default App;
