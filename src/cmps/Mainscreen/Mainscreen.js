import React, { useState, useEffect } from 'react';
import useDispach from '../Table/Table'
import { useSelector, useDispatch } from 'react-redux';
import {getUser} from '../../store/slices/userSlice'
import Table from '../Table/Table';
import InputSearch from '../InputSearch/InputSearch';

function Mainscreen() {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const users = useSelector(state => state.user.users)

  useEffect(() => {
    dispatch(getUser())
  }, []);

  return <div>Hello
    {users && <InputSearch data={users}/>}
    {users && <Table users={users}/>}
  </div>;
}

export default Mainscreen;