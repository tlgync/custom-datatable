# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

##Props
| Name | Type | Default | isRequired |
| ------------ | ------------ | ------------ | ------------ |
| `columns` | [ ] | - | yes |
| `data`  | [ ] | -  | yes |
| `onRowSelected`  | ( row ) => row.item   | ( ) => { }  | no  |
| `rowStyle`  | CSSProperties   | { width: 100, height: 60 }  | no   |
| `cellStyle`  | CSSProperties   | { }  | no   |
| `editable`  | boolean   | true | no   |


##Usage

#### Dummy Data Type

```js
[
	{
      id: string,
      firstname: string,
      lastname: string,
      email: string
    },
]
```

#### Add Columns

```js
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
  ];
```
## Component
```javascript
<DataTable
	data={data}
	columns={columns}
	onRowSelected={(item) => console.log(item)} // {id: 0, firstname: 'tolga', lastname: 'yonca', email: 'ynctlg@gmail.com' }
	rowStyle={{ width: 100, height: 60 }}
	editable
	// cellStyle={{background:'red'}}
/>
```

